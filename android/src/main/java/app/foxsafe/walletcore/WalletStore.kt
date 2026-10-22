package app.foxsafe.walletcore

import android.content.Context
import androidx.fragment.app.FragmentActivity
import org.json.JSONArray
import org.json.JSONObject
import com.google.protobuf.ByteString
import wallet.core.java.AnySigner
import wallet.core.jni.AnyAddress
import wallet.core.jni.BitcoinScript
import wallet.core.jni.Base58
import wallet.core.jni.Blockchain
import wallet.core.jni.CoinType
import wallet.core.jni.DataVector
import wallet.core.jni.EthereumMessageSigner
import wallet.core.jni.HDWallet
import wallet.core.jni.Mnemonic
import wallet.core.jni.PrivateKey
import wallet.core.jni.TransactionCompiler
import wallet.core.jni.TronMessageSigner
import wallet.core.jni.proto.Bitcoin
import wallet.core.jni.proto.Common.SigningError
import wallet.core.jni.proto.TransactionCompiler.PreSigningOutput
import java.security.MessageDigest
import java.time.Instant
import java.util.UUID

/** All wallet operations; mirrors ios/WalletStore.swift. Secrets are decrypted only inside [withSecret]. */
class WalletStore(context: Context) {
  private val main: KeyValueStore = MainStore(context)
  private val recovery: KeyValueStore = RecoveryStore(context)
  private val lock = Any()

  companion object {
    const val MIN_PASSCODE = 6
    val DEFAULT_COINS = listOf(0, 60, 195, 501)

    /** Chains whose addresses go into the recovery address index (SPEC §5). EVM networks share Ethereum's address. */
    val INDEX_COINS = listOf(0, 2, 3, 60, 118, 144, 145, 148, 195, 354, 397, 501, 607, 637, 784, 1815, 20000714)
    /** Accounts whose addresses go into the recovery address index (it must stay small). */
    const val INDEX_ACCOUNTS = 5
    /** Most accounts one import may create at once. */
    const val MAX_IMPORT_ACCOUNTS = 500
    val SOLANA_PATHS = setOf("phantom", "trust")

    fun coin(v: Int): CoinType = CoinType.createFromValue(v) ?: throw WalletException("INVALID", "unsupported coin $v")
    fun now(): String = Instant.now().toString()
    fun accountsJson(list: List<Account>) =
      JSONArray(list.map { JSONObject().put("index", it.index).put("name", it.name) })
    fun hex(b: ByteArray) = b.joinToString("") { "%02x".format(it) }
    fun unhex(s: String): ByteArray? =
      if (s.length % 2 != 0 || !s.all { it in "0123456789abcdef" }) null
      else ByteArray(s.length / 2) { s.substring(it * 2, it * 2 + 2).toInt(16).toByte() }
  }

  // MARK: models

  data class Account(val index: Int, val name: String)

  data class Record(
    val id: String, val name: String, val kind: String, val coins: List<Int>, val createdAt: String,
    val words: String? = null, val passphrase: String? = null, val keyHex: String? = null, val keyCoin: Int? = null,
    val accounts: List<Account> = listOf(Account(0, "Account 1")),
    /** "phantom" or "trust" (SPEC §2.2); records saved before it existed are "trust". */
    val solanaPath: String = "trust",
  ) {
    fun json(): JSONObject {
      val secret = if (words != null) {
        JSONObject().put("type", "mnemonic").put("words", words).apply { if (!passphrase.isNullOrEmpty()) put("passphrase", passphrase) }
      } else {
        JSONObject().put("type", "privateKey").put("hex", keyHex).put("coin", keyCoin)
      }
      return JSONObject().put("id", id).put("name", name).put("kind", kind).put("coins", JSONArray(coins))
        .put("createdAt", createdAt).put("secret", secret)
        .apply { if (words != null) put("accounts", accountsJson(accounts)).put("solanaPath", solanaPath) }
    }
  }

  private fun parseAccounts(arr: JSONArray?, bad: (String) -> Nothing): List<Account>? {
    if (arr == null) return null
    if (arr.length() == 0) bad("accounts")
    val list = (0 until arr.length()).map {
      val a = arr.getJSONObject(it)
      val i = a.optLong("index", -1)
      if (i !in 0..0x7fffffffL || !a.has("name")) bad("account")
      Account(i.toInt(), a.getString("name"))
    }
    if (list.map { it.index }.toSet().size != list.size) bad("duplicate account")
    return list
  }

  private fun encodeVault(records: List<Record>): ByteArray =
    JSONObject().put("v", 1).put("wallets", JSONArray(records.map { it.json() })).toString().toByteArray(Charsets.UTF_8)

  private fun decodeVault(data: ByteArray): List<Record> {
    val p = try { JSONObject(String(data, Charsets.UTF_8)) } catch (_: Exception) { throw WalletException("INVALID", "unsupported vault data") }
    if (p.optInt("v") != 1) throw WalletException("INVALID", "unsupported vault data")
    val wallets = p.optJSONArray("wallets") ?: throw WalletException("INVALID", "unsupported vault data")
    return (0 until wallets.length()).map { i ->
      val w = wallets.getJSONObject(i)
      fun bad(what: String): Nothing = throw WalletException("INVALID", "wallet $i: $what")
      val id = w.optString("id").ifEmpty { bad("id") }
      val kind = w.optString("kind").takeIf { it in setOf("multi", "single", "hd") } ?: bad("kind")
      val coinsArr = w.optJSONArray("coins") ?: bad("coins")
      val coins = (0 until coinsArr.length()).map { coinsArr.getInt(it) }
      val s = w.optJSONObject("secret") ?: bad("secret")
      val r = when (s.optString("type")) {
        "mnemonic" -> {
          val words = s.optString("words")
          if (words.split(" ").size !in setOf(12, 15, 18, 21, 24)) bad("mnemonic")
          Record(id, w.optString("name"), kind, coins, w.optString("createdAt"), words = words, passphrase = s.optString("passphrase").ifEmpty { null })
        }
        "privateKey" -> {
          val hexKey = s.optString("hex")
          if (hexKey.length != 64 || unhex(hexKey) == null) bad("private key")
          if (kind != "single") bad("a private-key wallet must be single-chain")
          Record(id, w.optString("name"), kind, coins, w.optString("createdAt"), keyHex = hexKey, keyCoin = s.getInt("coin"))
        }
        else -> bad("unknown secret type")
      }
      if (r.keyHex != null && coins.size != 1) bad("a private-key wallet has exactly one coin")
      if (coins.isEmpty()) bad("coins")
      val accounts = parseAccounts(w.optJSONArray("accounts"), ::bad)
      if (accounts != null && r.words == null) bad("accounts")
      val withAccounts = if (accounts != null) r.copy(accounts = accounts) else r
      if (!w.has("solanaPath")) withAccounts
      else {
        val sp = w.opt("solanaPath") as? String
        if (r.words == null || sp !in SOLANA_PATHS) bad("solanaPath")
        withAccounts.copy(solanaPath = sp!!)
      }
    }
  }

  /** Public info; phrase wallets saved before the Solana path existed report "trust". */
  private fun info(s: JSONObject): JSONObject = s.getJSONObject("info").apply {
    if (optString("secretType") == "mnemonic" && !has("solanaPath")) put("solanaPath", "trust")
  }

  private fun load(id: String): JSONObject =
    JSONObject(main.get("w.$id") ?: throw WalletException("NOT_FOUND", "no wallet $id"))

  // MARK: passcode

  fun hasPasscode(): Boolean = synchronized(lock) { main.get("passcode") != null }

  fun setPasscode(passcode: String) = synchronized(lock) {
    if (main.get("passcode") != null) throw WalletException("PASSCODE", "a passcode is already set; use changePasscode")
    writePasscode(passcode, null)
  }

  private fun writePasscode(passcode: String, recoverySalt: Triple<String, Int, Int>?) {
    if (passcode.length < MIN_PASSCODE) throw WalletException("PASSCODE", "at least $MIN_PASSCODE characters")
    val salt = Envelope.random(16)
    val hash = Envelope.argon2id(passcode, salt, Envelope.DEFAULT_M, Envelope.DEFAULT_T)
    main.set("passcode", JSONObject().put("v", 1).put("salt", Envelope.b64(salt)).put("m", Envelope.DEFAULT_M)
      .put("t", Envelope.DEFAULT_T).put("hash", Envelope.b64(hash)).toString())
    val meta = recoverySalt ?: Triple(Envelope.b64(Envelope.random(16)), Envelope.DEFAULT_M, Envelope.DEFAULT_T)
    recovery.set("meta", JSONObject().put("v", 1).put("salt", meta.first).put("m", meta.second).put("t", meta.third).toString())
  }

  private fun checkPasscode(passcode: String): Boolean {
    val v = JSONObject(main.get("passcode") ?: throw WalletException("PASSCODE", "no passcode set"))
    val hash = Envelope.argon2id(passcode, Envelope.unb64(v.getString("salt")), v.getInt("m"), v.getInt("t"))
    return MessageDigest.isEqual(hash, Envelope.unb64(v.getString("hash")))
  }

  private fun requirePasscode(passcode: String) {
    if (!checkPasscode(passcode)) throw WalletException("PASSCODE", "wrong passcode")
  }

  fun verifyPasscode(passcode: String): Boolean = synchronized(lock) { checkPasscode(passcode) }

  private fun meta(): JSONObject = JSONObject(recovery.get("meta") ?: throw WalletException("PASSCODE", "no passcode set"))

  fun changePasscode(old: String, new: String) = synchronized(lock) {
    requirePasscode(old)
    val cache = Envelope.KeyCache()
    try {
      val entries = recovery.keys("w.").map { it to decodeVault(Envelope.open(recovery.get(it)!!, Envelope.Source.Passcode(old), Envelope.Kind.RECOVERY, cache)) }
      writePasscode(new, null)
      val m = meta()
      for ((account, recs) in entries) {
        recovery.set(account, Envelope.seal(Envelope.Kind.RECOVERY, encodeVault(recs), Envelope.Source.Passcode(new),
          Envelope.unb64(m.getString("salt")), m.getInt("m"), m.getInt("t"), cache))
      }
    } finally {
      cache.wipe()
    }
  }

  // MARK: creating and importing

  fun createWallet(name: String, kind: String, coin: Int?, wordCount: Int, coins: List<Int>?, passcode: String): JSONObject {
    if (wordCount != 12 && wordCount != 24) throw WalletException("INVALID", "wordCount must be 12 or 24")
    // Entropy from the OS secure random generator, never the library's own.
    val entropy = Envelope.random(if (wordCount == 12) 16 else 32)
    val words = try { HDWallet(entropy, "").mnemonic() } finally { entropy.fill(0) }
    return addMnemonic(name, words, null, kind, coin, coins, "phantom", 1, passcode)
  }

  /** [accountCount] > 1 (hd only) brings back accounts 0 … n-1 at once, e.g. the ones the app found on the networks. */
  fun importMnemonic(
    name: String, words: String, passphrase: String?, kind: String, coin: Int?, coins: List<Int>?,
    solanaPath: String, accountCount: Int, passcode: String,
  ): JSONObject {
    val normalized = normalise(words)
    if (!Mnemonic.isValid(normalized)) throw WalletException("INVALID", "this secret phrase is not valid")
    return addMnemonic(name, normalized, passphrase, kind, coin, coins, solanaPath, accountCount, passcode)
  }

  private fun normalise(words: String) = words.lowercase().trim().split(Regex("\\s+")).joinToString(" ")

  private fun addMnemonic(
    name: String, words: String, passphrase: String?, kind: String, coin: Int?, coins: List<Int>?,
    solanaPath: String, accountCount: Int, passcode: String,
  ): JSONObject {
    if (solanaPath !in SOLANA_PATHS) throw WalletException("INVALID", "solanaPath must be phantom or trust")
    if (accountCount !in 1..MAX_IMPORT_ACCOUNTS) throw WalletException("INVALID", "bad number of accounts")
    if (accountCount != 1 && kind != "hd") throw WalletException("INVALID", "only HD wallets have more accounts")
    val walletCoins = when (kind) {
      "multi", "hd" -> (coins ?: DEFAULT_COINS).onEach { coin(it) }
      "single" -> listOf(coin(coin ?: throw WalletException("INVALID", "a single-chain wallet needs a coin")).value())
      else -> throw WalletException("INVALID", "kind must be single, multi or hd")
    }
    val r = Record(
      UUID.randomUUID().toString(), name, kind, walletCoins, now(), words = words, passphrase = passphrase,
      accounts = (0 until accountCount).map { Account(it, "Account ${it + 1}") }, solanaPath = solanaPath,
    )
    synchronized(lock) {
      requirePasscode(passcode)
      return info(store(r, passcode))
    }
  }

  fun importPrivateKey(name: String, privateKey: String, coinValue: Int, passcode: String): JSONObject {
    val c = coin(coinValue)
    val data = parsePrivateKey(privateKey, c)
    val hexKey = hex(data)
    try {
      if (!PrivateKey.isValid(data, c.curve())) throw WalletException("INVALID", "this private key is not valid for the chosen network")
    } finally {
      data.fill(0)
    }
    val r = Record(UUID.randomUUID().toString(), name, "single", listOf(coinValue), now(), keyHex = hexKey, keyCoin = coinValue)
    synchronized(lock) {
      requirePasscode(passcode)
      return info(store(r, passcode))
    }
  }

  /**
   * Hex (with or without 0x). For Solana also base58 of the 64-byte secret key
   * (private + public, as Phantom and Solflare export it) or of the 32-byte key,
   * and the Solana CLI's JSON array (SPEC §2.2).
   */
  private fun parsePrivateKey(input: String, c: CoinType): ByteArray {
    fun bad(): Nothing = throw WalletException("INVALID", "this private key is not valid for the chosen network")
    val text = input.trim()
    val hexKey = text.lowercase().removePrefix("0x")
    if (hexKey.length == 64) unhex(hexKey)?.let { return it }
    if (c != CoinType.SOLANA) bad()
    val raw: ByteArray = if (text.startsWith("[")) {
      val arr = runCatching { JSONArray(text) }.getOrNull() ?: bad()
      ByteArray(arr.length()) { i -> arr.optInt(i, -1).takeIf { it in 0..255 }?.toByte() ?: bad() }
    } else {
      Base58.decodeNoCheck(text) ?: bad()
    }
    try {
      return when (raw.size) {
        32 -> raw.copyOf()
        64 -> {
          val secret = raw.copyOfRange(0, 32)
          if (!PrivateKey.isValid(secret, c.curve()) || !PrivateKey(secret).publicKeyEd25519.data().contentEquals(raw.copyOfRange(32, 64))) {
            secret.fill(0)
            throw WalletException("INVALID", "this Solana key doesn't match its own public key")
          }
          secret
        }
        else -> bad()
      }
    } finally {
      raw.fill(0)
    }
  }

  /** Main copy plus recovery entry for one wallet. Caller holds the lock and checked the passcode. */
  /** [previous] addresses (same secret and Solana path) are reused, so adding an account only derives that account. */
  private fun store(
    r: Record, passcode: String?, cache: Envelope.KeyCache? = null, writeRecovery: Boolean = true, keep: JSONObject? = null,
    previous: JSONObject? = null,
  ): JSONObject {
    val coins = keep?.optJSONArray("coins")?.let { a -> (0 until a.length()).map { a.getInt(it) } } ?: r.coins
    val addresses = deriveAddresses(r, coins, previous)
    val dataKey = Envelope.random(32)
    val envelope: String
    val wrapped: ByteArray
    try {
      envelope = Envelope.seal(Envelope.Kind.DEVICE, encodeVault(listOf(r)), Envelope.Source.Key(dataKey))
      wrapped = KeyVault.wrap(dataKey)
    } finally {
      dataKey.fill(0)
    }
    val info = JSONObject().put("id", r.id).put("name", keep?.optString("name") ?: r.name).put("kind", r.kind)
      .put("secretType", if (r.words != null) "mnemonic" else "privateKey")
      .put("coins", keep?.optJSONArray("coins") ?: JSONArray(r.coins))
      .put("createdAt", r.createdAt)
      .put("backup", keep?.optJSONObject("backup") ?: JSONObject().put("manual", false).put("cloud", false))
      .put("accounts", accountsJson(r.accounts))
      .apply { if (r.words != null) put("solanaPath", r.solanaPath) }
    val stored = JSONObject().put("info", info)
      .put("addresses", JSONObject(addresses.mapValues { JSONObject(it.value as Map<*, *>) } as Map<*, *>))
      .put("wrappedKey", Envelope.b64(wrapped)).put("envelope", envelope)
    if (writeRecovery && passcode != null) {
      val m = meta()
      val entry = Envelope.seal(Envelope.Kind.RECOVERY, encodeVault(listOf(r)), Envelope.Source.Passcode(passcode),
        Envelope.unb64(m.getString("salt")), m.getInt("m"), m.getInt("t"), cache)
      recovery.set("w.${r.id}", entry)
      val indexed = r.accounts.map { it.index }.sorted().take(INDEX_ACCOUNTS)
      recovery.set("i.${r.id}", AddressIndex.build(indexed.flatMap { i -> INDEX_COINS.mapNotNull { addresses[i.toString()]?.get(it.toString()) } }))
    }
    main.set("w.${r.id}", stored.toString())
    return stored
  }

  // MARK: addresses

  /**
   * Public addresses, derived once while the secret is at hand. Account 0 gets
   * every chain, so more chains can be switched on without the secret; other
   * accounts get the wallet's chains and the recovery-index chains (every
   * chain for 100 accounts would be ~1 MB and seconds of work).
   */
  private fun deriveAddresses(r: Record, coins: List<Int>, previous: JSONObject? = null): Map<String, Map<String, String>> {
    val out = LinkedHashMap<String, Map<String, String>>()
    if (r.words != null) {
      val hd by lazy { HDWallet(r.words, r.passphrase ?: "") }
      val all = CoinType.values().toList()
      val others = (coins + INDEX_COINS).toSet().mapNotNull { CoinType.createFromValue(it) }
      for (a in r.accounts) {
        val byCoin = LinkedHashMap<String, String>()
        previous?.optJSONObject(a.index.toString())?.let { p -> p.keys().forEach { byCoin[it] = p.getString(it) } }
        for (c in if (a.index == 0) all else others) {
          val k = c.value().toString()
          if (k !in byCoin) byCoin[k] = address(hd, c, a.index, r.solanaPath)
        }
        out[a.index.toString()] = byCoin
      }
    } else {
      val c = coin(r.keyCoin!!)
      val key = PrivateKey(unhex(r.keyHex!!))
      val list = if (c.blockchain() == Blockchain.ETHEREUM) CoinType.values().filter { it.blockchain() == Blockchain.ETHEREUM } else listOf(c)
      out["0"] = list.associate { it.value().toString() to it.deriveAddress(key) }
    }
    return out
  }

  // MARK: HD accounts (SPEC §2.1, mirrors src/hd.ts)

  private fun blockchainName(c: CoinType) = when (c.blockchain()) {
    Blockchain.ETHEREUM -> "ethereum"
    Blockchain.TRON -> "tron"
    Blockchain.COSMOS -> "cosmos"
    else -> "other"
  }

  private fun basePath(c: CoinType, solanaPath: String) =
    if (c == CoinType.SOLANA && solanaPath == "phantom") "m/44'/501'/0'/0'" else c.derivationPath()

  fun accountPath(c: CoinType, index: Int, solanaPath: String): String {
    val base = basePath(c, solanaPath)
    if (index == 0) return base
    if (index < 0) throw WalletException("INVALID", "bad account index")
    val parts = base.split("/").toMutableList()
    if (parts.first() != "m" || parts.size < 4) throw WalletException("CRYPTO", "unexpected path $base")
    if (blockchainName(c) in setOf("ethereum", "tron", "cosmos") || parts[3] != "0'") {
      parts[parts.size - 1] = if (parts.last().endsWith("'")) "$index'" else "$index"
    } else {
      parts[3] = "$index'"
    }
    return parts.joinToString("/")
  }

  /** True when account 0 is the library's default path, which has a faster call. */
  private fun isDefault(c: CoinType, index: Int, solanaPath: String) = index == 0 && !(c == CoinType.SOLANA && solanaPath == "phantom")

  private fun key(hd: HDWallet, c: CoinType, index: Int, solanaPath: String): PrivateKey =
    if (isDefault(c, index, solanaPath)) hd.getKeyForCoin(c) else hd.getKey(c, accountPath(c, index, solanaPath))

  private fun address(hd: HDWallet, c: CoinType, index: Int, solanaPath: String): String =
    if (isDefault(c, index, solanaPath)) hd.getAddressForCoin(c) else c.deriveAddress(key(hd, c, index, solanaPath))

  fun list(): JSONArray = synchronized(lock) {
    JSONArray(main.keys("w.").map { info(load(it.removePrefix("w."))) }.sortedBy { it.getString("createdAt") })
  }

  fun addresses(id: String, coins: List<Int>, account: Int): JSONArray = synchronized(lock) {
    val s = load(id)
    val addrs = s.getJSONObject("addresses").optJSONObject(account.toString()) ?: throw WalletException("NOT_FOUND", "no account $account")
    val mnemonic = info(s).getString("secretType") == "mnemonic"
    val solanaPath = info(s).optString("solanaPath", "trust")
    JSONArray(coins.mapNotNull { v ->
      val a = addrs.optString(v.toString()).ifEmpty { null } ?: return@mapNotNull null
      JSONObject().put("coin", v).put("address", a).put("derivationPath", if (mnemonic) accountPath(coin(v), account, solanaPath) else "")
    })
  }

  /** Adds the next HD account: the secret derives its addresses, the passcode updates the recovery copy. */
  fun addAccount(id: String, name: String?, passcode: String, activity: FragmentActivity?): JSONObject = synchronized(lock) {
    requirePasscode(passcode)
    val s = load(id)
    if (info(s).getString("kind") != "hd") throw WalletException("INVALID", "only HD wallets have more accounts; create a new wallet instead")
    withSecret(id, activity, "Add an account") { stored ->
      val r = withCurrentNames(stored, info(s))
      val next = (r.accounts.maxOfOrNull { it.index } ?: 0) + 1
      info(store(r.copy(accounts = r.accounts + Account(next, name ?: "Account ${next + 1}")), passcode, keep = info(s), previous = s.getJSONObject("addresses")))
    }
  }

  fun removeAccount(id: String, index: Int, passcode: String, activity: FragmentActivity?): JSONObject = synchronized(lock) {
    requirePasscode(passcode)
    if (index == 0) throw WalletException("INVALID", "the first account can't be removed")
    val s = load(id)
    withSecret(id, activity, "Remove an account") { stored ->
      val r = withCurrentNames(stored, info(s))
      if (r.accounts.none { it.index == index }) throw WalletException("NOT_FOUND", "no account $index")
      info(store(r.copy(accounts = r.accounts.filter { it.index != index }), passcode, keep = info(s), previous = s.getJSONObject("addresses")))
    }
  }

  /** Account names live in the public info (renames don't need the secret); carry them into the sealed record. */
  private fun withCurrentNames(r: Record, info: JSONObject): Record {
    val arr = info.optJSONArray("accounts") ?: return r
    val names = (0 until arr.length()).associate { arr.getJSONObject(it).getInt("index") to arr.getJSONObject(it).getString("name") }
    return r.copy(accounts = r.accounts.map { a -> names[a.index]?.let { a.copy(name = it) } ?: a })
  }

  fun renameAccount(id: String, index: Int, name: String): JSONObject = update(id) { info ->
    val arr = info.getJSONArray("accounts")
    val i = (0 until arr.length()).firstOrNull { arr.getJSONObject(it).getInt("index") == index }
      ?: throw WalletException("NOT_FOUND", "no account $index")
    arr.getJSONObject(i).put("name", name)
  }

  fun update(id: String, change: (JSONObject) -> Unit): JSONObject = synchronized(lock) {
    val s = load(id)
    change(info(s))
    main.set("w.$id", s.toString())
    info(s)
  }

  /** Changes the chains shown. If an account lacks an address for a new chain, it is derived now (needs the secret). */
  fun setCoins(id: String, coins: List<Int>, activity: FragmentActivity?): JSONObject = synchronized(lock) {
    val s = load(id)
    val info = info(s)
    if (info.getString("secretType") != "mnemonic") throw WalletException("INVALID", "a private-key wallet keeps its one network")
    if (coins.isEmpty()) throw WalletException("INVALID", "choose at least one coin")
    coins.forEach { coin(it) }
    info.put("coins", JSONArray(coins))
    val addrs = s.getJSONObject("addresses")
    if (addrs.keys().asSequence().any { a -> coins.any { !addrs.getJSONObject(a).has(it.toString()) } }) {
      val derived = withSecret(id, activity, "Add the network") { deriveAddresses(withCurrentNames(it, info), coins, addrs) }
      s.put("addresses", JSONObject(derived.mapValues { JSONObject(it.value as Map<*, *>) } as Map<*, *>))
    }
    main.set("w.$id", s.toString())
    info
  }

  /** Switches how Solana addresses are derived (SPEC §2.2); only the Solana addresses change. */
  fun setSolanaPath(id: String, solanaPath: String, passcode: String, activity: FragmentActivity?): JSONObject = synchronized(lock) {
    if (solanaPath !in SOLANA_PATHS) throw WalletException("INVALID", "solanaPath must be phantom or trust")
    requirePasscode(passcode)
    val s = load(id)
    if (info(s).getString("secretType") != "mnemonic") throw WalletException("INVALID", "only phrase wallets have a Solana path")
    val kept = JSONObject(s.getJSONObject("addresses").toString()).apply {
      keys().forEach { getJSONObject(it).remove(CoinType.SOLANA.value().toString()) }
    }
    withSecret(id, activity, "Change the Solana address") { stored ->
      info(store(withCurrentNames(stored, info(s)).copy(solanaPath = solanaPath), passcode, keep = info(s), previous = kept))
    }
  }

  fun delete(id: String, passcode: String) = synchronized(lock) {
    requirePasscode(passcode)
    load(id)
    main.delete("w.$id")
    recovery.delete("w.$id")
    recovery.delete("i.$id")
  }

  // MARK: using secrets

  /** Decrypts one wallet for the length of [body]; on a real device the user unlocks with fingerprint / face / PIN. */
  private fun <T> withSecret(id: String, activity: FragmentActivity?, title: String, body: (Record) -> T): T {
    val s = load(id)
    val cipher = KeyVault.authenticate(activity, title, KeyVault.unwrapCipher())
    val dataKey = KeyVault.unwrap(cipher, Envelope.unb64(s.getString("wrappedKey")))
    try {
      val r = decodeVault(Envelope.open(s.getString("envelope"), Envelope.Source.Key(dataKey), Envelope.Kind.DEVICE)).first()
      if (r.id != id) throw WalletException("CRYPTO", "stored wallet does not match its id")
      return body(r)
    } finally {
      dataKey.fill(0)
    }
  }

  private fun privateKey(r: Record, c: CoinType, account: Int): PrivateKey {
    if (r.words != null) {
      if (r.accounts.none { it.index == account }) throw WalletException("NOT_FOUND", "no account $account")
      return key(HDWallet(r.words, r.passphrase ?: ""), c, account, r.solanaPath)
    }
    if (account != 0) throw WalletException("NOT_FOUND", "no account $account")
    val own = coin(r.keyCoin!!)
    if (own != c && !(own.blockchain() == Blockchain.ETHEREUM && c.blockchain() == Blockchain.ETHEREUM)) {
      throw WalletException("INVALID", "this wallet is not for that network")
    }
    return PrivateKey(unhex(r.keyHex!!))
  }

  /** Pre-image hash → sign → compile (SPEC §7). The key never reaches JavaScript. */
  fun signTransaction(id: String, coinValue: Int, inputB64: String, account: Int, activity: FragmentActivity?): String = synchronized(lock) {
    val c = coin(coinValue)
    val input = Envelope.unb64(inputB64)
    withSecret(id, activity, "Confirm the transaction") { r ->
      val key = privateKey(r, c, account)
      if (c.blockchain() == Blockchain.BITCOIN || c.blockchain() == Blockchain.BITCOINCASH) return@withSecret signBitcoin(input, key, c)
      val pre = PreSigningOutput.parseFrom(TransactionCompiler.preImageHashes(c, input))
      if (pre.error != SigningError.OK) throw WalletException("INVALID", "cannot sign: ${pre.errorMessage}")
      // Solana signs the whole message (pre.data); its pre-image output has a different layout,
      // so the generic dataHash field would hold the signer's key instead (SPEC §7).
      val digest = if (c.blockchain() == Blockchain.SOLANA) pre.data.toByteArray() else pre.dataHash.toByteArray()
      val sig = key.sign(digest, c.curve()) ?: throw WalletException("CRYPTO", "signing failed")
      val out = TransactionCompiler.compileWithSignatures(
        c, input, DataVector().apply { add(sig) }, DataVector().apply { add(key.getPublicKey(c).data()) },
      )
      Envelope.b64(out)
    }
  }

  /**
   * Bitcoin family: every UTXO input needs its own signature, so Trust Wallet
   * Core's Bitcoin signer signs here. Change and the inputs' locking scripts are
   * forced to the wallet's own address so the app layer can't redirect change (SPEC §7).
   */
  private fun signBitcoin(data: ByteArray, key: PrivateKey, c: CoinType): String {
    val parsed = Bitcoin.SigningInput.parseFrom(data)
    if (parsed.coinType != c.value()) throw WalletException("INVALID", "bitcoin input is for another coin")
    val own = c.deriveAddress(key)
    val script = ByteString.copyFrom(BitcoinScript.lockScriptForAddress(own, c).data())
    val b = parsed.toBuilder().setChangeAddress(own).clearPrivateKey().addPrivateKey(ByteString.copyFrom(key.data()))
    for (i in 0 until b.utxoCount) b.setUtxo(i, b.getUtxo(i).toBuilder().setScript(script))
    val out = AnySigner.sign(b.build(), c, Bitcoin.SigningOutput.parser())
    if (out.error != SigningError.OK) throw WalletException("INVALID", "cannot sign: ${out.errorMessage}")
    return Envelope.b64(out.toByteArray())
  }

  fun signMessage(id: String, coinValue: Int, message: String, typed: Boolean, account: Int, activity: FragmentActivity?): String = synchronized(lock) {
    val c = coin(coinValue)
    withSecret(id, activity, "Confirm the signature") { r ->
      val key = privateKey(r, c, account)
      when {
        c.blockchain() == Blockchain.ETHEREUM && !typed -> EthereumMessageSigner.signMessage(key, message)
        c.blockchain() == Blockchain.ETHEREUM && typed -> EthereumMessageSigner.signTypedMessage(key, message)
        c.blockchain() == Blockchain.TRON && !typed -> TronMessageSigner.signMessage(key, message)
        else -> throw WalletException("INVALID", "message signing is not supported for this network yet")
      }
    }
  }

  fun revealSecret(id: String, activity: FragmentActivity?): String = synchronized(lock) {
    withSecret(id, activity, "Show your secret phrase") { it.words ?: it.keyHex!! }
  }

  // MARK: recovery copy (SPEC §3.2)

  fun scanRecovery(): JSONObject = synchronized(lock) {
    val n = recovery.keys("w.").size
    JSONObject().put("found", n > 0).put("walletCount", n)
  }

  fun recoveryHasAddress(address: String): Boolean = synchronized(lock) {
    recovery.keys("i.").any { AddressIndex.contains(recovery.get(it) ?: "", address) }
  }

  fun restore(passcode: String, currentPasscode: String?): JSONArray = synchronized(lock) {
    val cache = Envelope.KeyCache()
    try {
      val opened = recovery.keys("w.").mapNotNull { account ->
        val json = recovery.get(account) ?: return@mapNotNull null
        val env = runCatching { Envelope.parse(json) }.getOrNull() ?: return@mapNotNull null
        runCatching { Triple(account, decodeVault(Envelope.open(json, Envelope.Source.Passcode(passcode), Envelope.Kind.RECOVERY, cache)), env) }.getOrNull()
      }
      if (opened.isEmpty()) throw WalletException("PASSCODE", "wrong passcode, or nothing to recover")

      var lockWith = passcode
      if (main.get("passcode") == null) {
        (opened[0].third.kdf as? Envelope.Kdf.Argon2id)?.let { writePasscode(passcode, Triple(it.salt, it.m, it.t)) }
      } else if (!checkPasscode(passcode)) {
        if (currentPasscode == null || !checkPasscode(currentPasscode)) {
          throw WalletException("PASSCODE", "enter the current passcode to re-lock the recovered wallets")
        }
        lockWith = currentPasscode
      }

      val existing = main.keys("w.").toSet()
      val metaSalt = meta().getString("salt")
      val restored = JSONArray()
      for ((_, records, env) in opened) {
        val salt = (env.kdf as? Envelope.Kdf.Argon2id)?.salt
        val reseal = lockWith != passcode || salt != metaSalt
        for (r in records) if ("w.${r.id}" !in existing) restored.put(info(store(r, lockWith, cache, reseal)))
      }
      restored
    } finally {
      cache.wipe()
    }
  }

  fun deleteRecovery() = synchronized(lock) { recovery.deleteAll() }

  // MARK: backups (SPEC §3.3)

  fun exportBackup(ids: List<String>, source: Envelope.Source, activity: FragmentActivity?): String = synchronized(lock) {
    if (ids.isEmpty()) throw WalletException("INVALID", "choose at least one wallet")
    // Per-use keys: one unlock prompt per wallet on Android.
    val records = ids.map { id -> withSecret(id, activity, "Back up your wallet") { it } }
    Envelope.seal(Envelope.Kind.BACKUP, encodeVault(records), source)
  }

  fun importBackup(json: String, source: Envelope.Source, passcode: String): JSONArray = synchronized(lock) {
    requirePasscode(passcode)
    val records = decodeVault(Envelope.open(json, source, Envelope.Kind.BACKUP))
    val existing = main.keys("w.").toSet()
    val cache = Envelope.KeyCache()
    try {
      JSONArray(records.filter { "w.${it.id}" !in existing }.map { info(store(it, passcode, cache)) })
    } finally {
      cache.wipe()
    }
  }

  // MARK: logout

  fun wipe(keepRecovery: Boolean) = synchronized(lock) {
    main.deleteAll()
    KeyVault.delete()
    if (!keepRecovery) recovery.deleteAll()
  }

  // MARK: helpers that never touch stored secrets

  fun previewAddresses(words: String, passphrase: String?, coins: List<Int>, account: Int, solanaPath: String): JSONArray =
    previewAccounts(words, passphrase, coins, account, 1, solanaPath).getJSONObject(0).getJSONArray("addresses")

  /** Addresses of [count] accounts from [from], for finding used accounts before an import. */
  fun previewAccounts(words: String, passphrase: String?, coins: List<Int>, from: Int, count: Int, solanaPath: String): JSONArray {
    if (solanaPath !in SOLANA_PATHS) throw WalletException("INVALID", "solanaPath must be phantom or trust")
    if (from < 0 || count !in 1..100 || from.toLong() + count > 0x80000000L) throw WalletException("INVALID", "bad account range")
    val normalized = normalise(words)
    if (!Mnemonic.isValid(normalized)) throw WalletException("INVALID", "this secret phrase is not valid")
    val hd = HDWallet(normalized, passphrase ?: "")
    val list = if (coins.isEmpty()) CoinType.values().toList() else coins.map(::coin)
    return JSONArray((from until from + count).map { account ->
      JSONObject().put("account", account).put("addresses", JSONArray(list.map {
        JSONObject().put("coin", it.value()).put("address", address(hd, it, account, solanaPath)).put("derivationPath", accountPath(it, account, solanaPath))
      }))
    })
  }

  fun envelopeDigest(json: String, source: Envelope.Source): String =
    hex(MessageDigest.getInstance("SHA-256").digest(Envelope.open(json, source)))

  fun validateAddress(address: String, coinValue: Int): Boolean =
    CoinType.createFromValue(coinValue)?.let { AnyAddress.isValid(address, it) } ?: false
}

/** Address index (SPEC §5). */
object AddressIndex {
  fun normalise(address: String): String {
    val a = address.trim()
    return if (a.lowercase().startsWith("0x") || a == a.lowercase() || a == a.uppercase()) a.lowercase() else a
  }

  private fun hash(salt: ByteArray, address: String): String =
    WalletStore.hex(MessageDigest.getInstance("SHA-256").digest(salt + normalise(address).toByteArray(Charsets.UTF_8)))

  fun build(addresses: List<String>): String {
    val salt = Envelope.random(16)
    val hashes = addresses.map { hash(salt, it) }.toSortedSet()
    return JSONObject().put("v", 1).put("salt", Envelope.b64(salt)).put("hashes", JSONArray(hashes.toList())).toString()
  }

  fun contains(indexJson: String, address: String): Boolean {
    if (address.isBlank()) return false
    val o = runCatching { JSONObject(indexJson) }.getOrNull() ?: return false
    if (o.optInt("v") != 1) return false
    val salt = runCatching { Envelope.unb64(o.getString("salt")) }.getOrNull() ?: return false
    val hashes = o.optJSONArray("hashes") ?: return false
    val h = hash(salt, address)
    return (0 until hashes.length()).any { hashes.getString(it) == h }
  }
}
