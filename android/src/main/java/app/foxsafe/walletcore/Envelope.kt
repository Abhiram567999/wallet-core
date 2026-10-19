package app.foxsafe.walletcore

import android.util.Base64
import org.bouncycastle.crypto.digests.SHA256Digest
import org.bouncycastle.crypto.generators.Argon2BytesGenerator
import org.bouncycastle.crypto.generators.HKDFBytesGenerator
import org.bouncycastle.crypto.params.Argon2Parameters
import org.bouncycastle.crypto.params.HKDFParameters
import org.json.JSONObject
import java.security.SecureRandom
import javax.crypto.AEADBadTagException
import javax.crypto.Cipher
import javax.crypto.spec.GCMParameterSpec
import javax.crypto.spec.SecretKeySpec

class WalletException(val code: String, message: String) : Exception("$code: $message")

/**
 * Foxsafe envelope format v1 (docs/SPEC.md §4). Must stay byte-compatible with
 * src/envelope.ts and ios/Envelope.swift; test/vectors/envelopes.json pins it.
 */
object Envelope {
  enum class Kind(val id: String) { DEVICE("device"), RECOVERY("recovery"), BACKUP("backup") }

  sealed class Source {
    class Passcode(val passcode: String) : Source()
    class Prf(val prf: ByteArray) : Source()
    class Key(val key: ByteArray) : Source()
  }

  sealed class Kdf {
    data class Argon2id(val m: Int, val t: Int, val salt: String) : Kdf()
    data class Hkdf(val salt: String) : Kdf()
    object None : Kdf()
  }

  class Parsed(val kind: Kind, val kdf: Kdf, val iv: String, val ct: String)

  const val DEFAULT_M = 65536
  const val DEFAULT_T = 3
  private val HKDF_INFO = "foxsafe-envelope-v1".toByteArray(Charsets.UTF_8)
  private val random = SecureRandom()

  fun random(n: Int): ByteArray = ByteArray(n).also { random.nextBytes(it) }

  fun b64(bytes: ByteArray): String = Base64.encodeToString(bytes, Base64.NO_WRAP)

  /** Strict standard base64: must re-encode to the same text (canonical AAD). */
  fun unb64(text: String, field: String = "data", length: IntRange = 0..Int.MAX_VALUE): ByteArray {
    val bytes = try {
      Base64.decode(text, Base64.NO_WRAP)
    } catch (e: IllegalArgumentException) {
      throw WalletException("ENVELOPE_FORMAT", "$field is not canonical base64")
    }
    if (b64(bytes) != text) throw WalletException("ENVELOPE_FORMAT", "$field is not canonical base64")
    if (bytes.size !in length) throw WalletException("ENVELOPE_PARAMS", "$field has wrong length")
    return bytes
  }

  // MARK: parsing — every check runs before any expensive work

  fun parse(json: String): Parsed {
    val e = try { JSONObject(json) } catch (_: Exception) { throw WalletException("ENVELOPE_FORMAT", "not JSON") }
    fun fmt(msg: String): Nothing = throw WalletException("ENVELOPE_FORMAT", msg)
    fun params(msg: String): Nothing = throw WalletException("ENVELOPE_PARAMS", msg)
    if (e.optString("format") != "foxsafe-envelope") fmt("not a Foxsafe envelope")
    if (intOrNull(e.opt("v")) != 1) fmt("unsupported version")
    val kind = Kind.entries.firstOrNull { it.id == e.optString("kind") } ?: fmt("unknown kind")
    if (e.optString("cipher") != "aes-256-gcm") params("unsupported cipher")
    val iv = e.opt("iv") as? String ?: fmt("iv missing")
    unb64(iv, "iv", 12..12)
    val ct = e.opt("ct") as? String ?: fmt("ct missing")
    unb64(ct, "ct", 16..(16 * 1024 * 1024))
    val k = e.optJSONObject("kdf") ?: fmt("kdf missing")
    val kdf = when (k.optString("alg")) {
      "argon2id" -> {
        if (intOrNull(k.opt("version")) != 19) params("argon2 version must be 19")
        val m = intOrNull(k.opt("m"))?.takeIf { it in 19456..1_048_576 } ?: params("argon2 memory out of range")
        val t = intOrNull(k.opt("t"))?.takeIf { it in 2..10 } ?: params("argon2 iterations out of range")
        if (intOrNull(k.opt("p")) != 1) params("argon2 parallelism must be 1")
        val salt = k.opt("salt") as? String ?: fmt("kdf.salt missing")
        unb64(salt, "kdf.salt", 16..16)
        Kdf.Argon2id(m, t, salt)
      }
      "hkdf-sha256" -> {
        val salt = k.opt("salt") as? String ?: fmt("kdf.salt missing")
        unb64(salt, "kdf.salt", 16..64)
        Kdf.Hkdf(salt)
      }
      "none" -> Kdf.None
      else -> params("unknown kdf")
    }
    return Parsed(kind, kdf, iv, ct)
  }

  private fun intOrNull(v: Any?): Int? = when (v) {
    is Int -> v
    is Long -> v.takeIf { it in Int.MIN_VALUE..Int.MAX_VALUE }?.toInt()
    is Double -> v.takeIf { it == Math.rint(it) }?.toInt()
    else -> null
  }

  fun aad(kind: Kind, kdf: Kdf, iv: String): ByteArray {
    val k = when (kdf) {
      is Kdf.Argon2id -> "argon2id|19|${kdf.m}|${kdf.t}|1|${kdf.salt}"
      is Kdf.Hkdf -> "hkdf-sha256|${kdf.salt}"
      Kdf.None -> "none"
    }
    return "foxsafe-envelope|1|${kind.id}|$k|$iv".toByteArray(Charsets.UTF_8)
  }

  // MARK: keys

  /** Argon2id v0x13, parallelism 1, 32-byte output (RFC 9106), BouncyCastle. */
  fun argon2id(passcode: String, salt: ByteArray, m: Int, t: Int): ByteArray {
    val params = Argon2Parameters.Builder(Argon2Parameters.ARGON2_id)
      .withVersion(Argon2Parameters.ARGON2_VERSION_13)
      .withMemoryAsKB(m).withIterations(t).withParallelism(1).withSalt(salt).build()
    val out = ByteArray(32)
    val pw = passcode.toByteArray(Charsets.UTF_8)
    try {
      Argon2BytesGenerator().apply { init(params) }.generateBytes(pw, out)
    } finally {
      pw.fill(0)
    }
    return out
  }

  /** Remembers Argon2id results for one operation (entries share a salt). */
  class KeyCache {
    private val keys = HashMap<String, ByteArray>()
    fun get(p: String, salt: String, m: Int, t: Int) = keys["$m|$t|$salt|$p"]
    fun put(k: ByteArray, p: String, salt: String, m: Int, t: Int) { keys["$m|$t|$salt|$p"] = k }
    fun wipe() { keys.values.forEach { it.fill(0) }; keys.clear() }
  }

  private fun deriveKey(kdf: Kdf, source: Source, cache: KeyCache?): ByteArray = when {
    kdf is Kdf.Argon2id && source is Source.Passcode ->
      cache?.get(source.passcode, kdf.salt, kdf.m, kdf.t)?.copyOf()
        ?: argon2id(source.passcode, unb64(kdf.salt), kdf.m, kdf.t).also {
          cache?.put(it.copyOf(), source.passcode, kdf.salt, kdf.m, kdf.t)
        }
    kdf is Kdf.Hkdf && source is Source.Prf -> {
      if (source.prf.size < 32) throw WalletException("ENVELOPE_KEY-TYPE", "passkey output too short")
      ByteArray(32).also {
        HKDFBytesGenerator(SHA256Digest()).apply { init(HKDFParameters(source.prf, unb64(kdf.salt), HKDF_INFO)) }
          .generateBytes(it, 0, 32)
      }
    }
    kdf is Kdf.None && source is Source.Key -> {
      if (source.key.size != 32) throw WalletException("ENVELOPE_KEY-TYPE", "device key must be 32 bytes")
      source.key.copyOf()
    }
    kdf is Kdf.Argon2id -> throw WalletException("ENVELOPE_KEY-TYPE", "this envelope needs a passcode")
    kdf is Kdf.Hkdf -> throw WalletException("ENVELOPE_KEY-TYPE", "this envelope needs a passkey")
    else -> throw WalletException("ENVELOPE_KEY-TYPE", "this envelope needs a device key")
  }

  // MARK: seal / open

  fun seal(
    kind: Kind, plaintext: ByteArray, source: Source, salt: ByteArray? = null,
    m: Int = DEFAULT_M, t: Int = DEFAULT_T, cache: KeyCache? = null,
  ): String {
    val saltText = b64(salt ?: random(16))
    val kdf = when (source) {
      is Source.Passcode -> Kdf.Argon2id(m, t, saltText)
      is Source.Prf -> Kdf.Hkdf(saltText)
      is Source.Key -> Kdf.None
    }
    val iv = random(12)
    val ivText = b64(iv)
    val key = deriveKey(kdf, source, cache)
    val ct = try {
      Cipher.getInstance("AES/GCM/NoPadding").run {
        init(Cipher.ENCRYPT_MODE, SecretKeySpec(key, "AES"), GCMParameterSpec(128, iv))
        updateAAD(aad(kind, kdf, ivText))
        doFinal(plaintext)
      }
    } finally {
      key.fill(0)
    }
    val kdfJson = when (kdf) {
      is Kdf.Argon2id -> JSONObject().put("alg", "argon2id").put("version", 19).put("m", kdf.m).put("t", kdf.t).put("p", 1).put("salt", kdf.salt)
      is Kdf.Hkdf -> JSONObject().put("alg", "hkdf-sha256").put("salt", kdf.salt)
      Kdf.None -> JSONObject().put("alg", "none")
    }
    return JSONObject()
      .put("format", "foxsafe-envelope").put("v", 1).put("kind", kind.id).put("kdf", kdfJson)
      .put("cipher", "aes-256-gcm").put("iv", ivText).put("ct", b64(ct))
      .toString()
  }

  fun open(json: String, source: Source, expect: Kind? = null, cache: KeyCache? = null): ByteArray {
    val env = parse(json)
    if (expect != null && env.kind != expect) throw WalletException("ENVELOPE_FORMAT", "expected a ${expect.id} envelope")
    val key = deriveKey(env.kdf, source, cache)
    try {
      return Cipher.getInstance("AES/GCM/NoPadding").run {
        init(Cipher.DECRYPT_MODE, SecretKeySpec(key, "AES"), GCMParameterSpec(128, unb64(env.iv)))
        updateAAD(aad(env.kind, env.kdf, env.iv))
        doFinal(unb64(env.ct))
      }
    } catch (_: AEADBadTagException) {
      throw WalletException("ENVELOPE_AUTH", "wrong passcode or the file was changed")
    } finally {
      key.fill(0)
    }
  }
}
