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
import wallet.core.jni.Eip7702
import wallet.core.jni.SolanaAddress
import wallet.core.jni.Curve
import wallet.core.jni.HDWallet
import wallet.core.jni.Mnemonic
import wallet.core.jni.PrivateKey
import wallet.core.jni.TransactionCompiler
import wallet.core.jni.TronMessageSigner
import wallet.core.jni.proto.Bitcoin
import wallet.core.jni.proto.Cosmos
import wallet.core.jni.proto.Tron
import wallet.core.jni.proto.Common.SigningError
import wallet.core.jni.proto.TransactionCompiler.PreSigningOutput
import java.math.BigInteger
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
    const val MIN_BACKUP_PASSWORD = 8
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
      val backupKey = main.get("backup")?.let { Envelope.open(JSONObject(it).getString("key"), Envelope.Source.Passcode(old), Envelope.Kind.RECOVERY, cache) }
      writePasscode(new, null)
      val m = meta()
      if (backupKey != null) {
        try {
          val b = JSONObject(main.get("backup")!!)
          b.put("key", Envelope.seal(Envelope.Kind.RECOVERY, backupKey, Envelope.Source.Passcode(new),
            Envelope.unb64(m.getString("salt")), m.getInt("m"), m.getInt("t"), cache))
          main.set("backup", b.toString())
        } finally {
          backupKey.fill(0)
        }
      }
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
    writeLabel(info)
    return stored
  }

  /**
   * What a wallet looks like (name, account names, networks, backup state) next to its recovery copy,
   * so a restore brings back the names the user chose. No secrets.
   */
  private fun writeLabel(info: JSONObject) {
    runCatching {
      recovery.set(
        "l.${info.getString("id")}",
        JSONObject().put("name", info.getString("name")).put("accounts", info.getJSONArray("accounts"))
          .put("coins", info.getJSONArray("coins")).put("backup", info.getJSONObject("backup")).toString(),
      )
    }
  }

  private fun readLabel(id: String): JSONObject? = recovery.get("l.$id")?.let { runCatching { JSONObject(it) }.getOrNull() }

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
    writeLabel(info(s))
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

  /** Removes a wallet after the fingerprint / face prompt: unlocking the wallet's own key proves it's the owner. */
  fun deleteWithBiometrics(id: String, reason: String, activity: FragmentActivity?) = synchronized(lock) {
    load(id)
    withSecret(id, activity, reason) { it }
    main.delete("w.$id")
    recovery.delete("w.$id")
    recovery.delete("i.$id")
    runCatching { recovery.delete("l.$id") }
  }

  fun delete(id: String, passcode: String) = synchronized(lock) {
    requirePasscode(passcode)
    load(id)
    main.delete("w.$id")
    recovery.delete("w.$id")
    recovery.delete("i.$id")
    runCatching { recovery.delete("l.$id") }
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
  fun signTransaction(id: String, coinValue: Int, inputB64: String, account: Int, activity: FragmentActivity?): String =
    signTransactions(id, coinValue, listOf(inputB64), account, activity)[0]

  /**
   * A transaction plus, at most, ONE network-fee transfer with one fingerprint /
   * face prompt (gasless). The batch rule is enforced here, below the app: the
   * second transaction must pay at most 5 USDT to Foxsafe's fee wallet, so even a
   * tampered app can't use one prompt to pay anyone else (SPEC §7.2).
   */
  fun signTransactions(id: String, coinValue: Int, inputsB64: List<String>, account: Int, activity: FragmentActivity?): List<String> = synchronized(lock) {
    val c = coin(coinValue)
    if (inputsB64.size !in 1..2) throw WalletException("INVALID", "bad inputs")
    val inputs = inputsB64.map { Envelope.unb64(it) }
    // Checked before the prompt, so a refused batch never asks.
    val feeOwner = if (inputs.size == 2) feeTransferOwner(inputs[1], c) else null
    withSecret(id, activity, if (inputs.size > 1) "Confirm the transfer and its network fee" else "Confirm the transaction") { r ->
      val key = privateKey(r, c, account)
      if (feeOwner != null && feeOwner != c.deriveAddress(key)) throw WalletException("INVALID", "the fee transfer is not from this wallet")
      inputs.map { signOne(it, key, c) }
    }
  }

  /** Foxsafe's fee wallets and the largest fee one prompt may pay. Changing them needs a new build on purpose. */
  private object FeePolicy {
    const val TRON_USDT = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"
    const val TRON_FEE_WALLET = "TRmToStoTAxU414feHAS67w33Qzi4VyEVJ"
    val MAX_FEE: BigInteger = BigInteger.valueOf(5_000_000) // 5 USDT (6 decimals)
  }

  /** Returns the sender if [data] is a valid Foxsafe fee transfer; throws otherwise. */
  private fun feeTransferOwner(data: ByteArray, c: CoinType): String {
    if (c != CoinType.TRON) throw WalletException("INVALID", "a second transaction is allowed only for TRON network fees")
    val tx = Tron.SigningInput.parseFrom(data).transaction
    if (!tx.hasTransferTrc20Contract()) throw WalletException("INVALID", "the second transaction is not a fee transfer")
    val t = tx.transferTrc20Contract
    if (t.contractAddress != FeePolicy.TRON_USDT || t.toAddress != FeePolicy.TRON_FEE_WALLET) {
      throw WalletException("INVALID", "the fee transfer does not go to Foxsafe's fee wallet")
    }
    val amount = BigInteger(1, t.amount.toByteArray())
    if (amount.signum() <= 0 || amount > FeePolicy.MAX_FEE) throw WalletException("INVALID", "the fee is above 5 USDT")
    return t.ownerAddress
  }

  // MARK: Cosmos family (THORChain, Cosmos Hub, Osmosis, Injective …)

  /**
   * Signs a Cosmos SigningInput built without any key (src/tx.ts cosmosSendInput /
   * thorchainDepositInput). Protobuf mode needs the signer's public key, which the app never
   * has: it is added here after checking every message is sent by this wallet (SPEC §7.5).
   */
  fun signCosmos(id: String, coinValue: Int, inputB64: String, account: Int, activity: FragmentActivity?): String = synchronized(lock) {
    val c = coin(coinValue)
    if (c.blockchain() !in setOf(Blockchain.COSMOS, Blockchain.THORCHAIN, Blockchain.NATIVEINJECTIVE)) {
      throw WalletException("INVALID", "this network is not a Cosmos network")
    }
    val input = runCatching { Cosmos.SigningInput.parseFrom(Envelope.unb64(inputB64)) }.getOrElse { throw WalletException("INVALID", "bad input") }
    if (input.signingMode != Cosmos.SigningMode.Protobuf || !input.publicKey.isEmpty() || !input.privateKey.isEmpty() || input.messagesCount == 0) {
      throw WalletException("INVALID", "not a Cosmos transaction this wallet can sign")
    }
    // Only plain sends and THORChain sends / deposits. Checked before the prompt.
    for (m in input.messagesList) {
      when (m.messageOneofCase) {
        Cosmos.Message.MessageOneofCase.SEND_COINS_MESSAGE -> {}
        Cosmos.Message.MessageOneofCase.THORCHAIN_SEND_MESSAGE, Cosmos.Message.MessageOneofCase.THORCHAIN_DEPOSIT_MESSAGE ->
          if (c.blockchain() != Blockchain.THORCHAIN) throw WalletException("INVALID", "this kind of Cosmos message is not supported")
        else -> throw WalletException("INVALID", "this kind of Cosmos message is not supported")
      }
    }
    withSecret(id, activity, "Confirm the transaction") { r ->
      val key = privateKey(r, c, account)
      val own = c.deriveAddress(key)
      val ownData = AnyAddress(own, c).data()
      for (m in input.messagesList) {
        val fromWallet = when (m.messageOneofCase) {
          Cosmos.Message.MessageOneofCase.SEND_COINS_MESSAGE -> m.sendCoinsMessage.fromAddress == own
          Cosmos.Message.MessageOneofCase.THORCHAIN_SEND_MESSAGE -> m.thorchainSendMessage.fromAddress.toByteArray().contentEquals(ownData)
          Cosmos.Message.MessageOneofCase.THORCHAIN_DEPOSIT_MESSAGE -> m.thorchainDepositMessage.signer.toByteArray().contentEquals(ownData)
          else -> false
        }
        if (!fromWallet) throw WalletException("INVALID", "this transaction is not from this wallet")
      }
      val signed = input.toBuilder().setPublicKey(ByteString.copyFrom(key.getPublicKey(c).data())).build()
      signOne(signed.toByteArray(), key, c)
    }
  }

  // MARK: EVM gasless (EIP-7702 + EntryPoint 0.8)

  /** Foxsafe's EVM fee rule, compiled in on purpose: an app update can't change it. */
  private object EvmFeePolicy {
    const val ENTRY_POINT = "0x4337084d9e255ff0702461cf8895ce9e3b5ff108"
    /** The only contract a wallet may be upgraded to (eth-infinitism Simple7702Account, audited). */
    const val DELEGATE = "0xe6Cae83BdE06E4c305530e199D7217f42808555B"
    const val FEE_WALLET = "0x4fe28082398c2ddf89c010785e9acd8604ea9607"
    val CHAINS: Map<Int, List<Long>> = mapOf(60 to listOf(1L), 20000714 to listOf(56L), 8453 to listOf(8453L, 84532L), 966 to listOf(137L), 10042221 to listOf(42161L), 10000070 to listOf(10L))
    val TOKENS: Map<Long, Map<String, Int>> = mapOf(
      1L to mapOf("0xdac17f958d2ee523a2206206994597c13d831ec7" to 6, "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" to 6),
      56L to mapOf("0x55d398326f99059ff775485246999027b3197955" to 18, "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d" to 18),
      8453L to mapOf("0x833589fcd6edb6e08f4c7c32d4f71b54bda02913" to 6),
      137L to mapOf("0xc2132d05d31c914a87c6611c10748aeb04b58e8f" to 6, "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359" to 6),
      42161L to mapOf("0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9" to 6, "0xaf88d065e77c8cc2239327c5edb3a432268e5831" to 6),
      10L to mapOf("0x94b008aa00579c1307b0ef2c499ad98a8ce58e58" to 6, "0x01bff41798a0bcf287b996046ca68b395dbc1071" to 6, "0x0b2c639c533813f4aa9d7837caf62653d097ff85" to 6),
      84532L to mapOf("0x036cbd53842c5426634e7929541ec2318f3dcf7e" to 6),
    )
    const val MAX_FEE_UNITS = 5
  }

  /**
   * Signs a gasless EVM send with ONE prompt: the EntryPoint 0.8 operation and, on first use, the
   * EIP-7702 upgrade to the built-in Simple7702Account. Refuses unless the operation is exactly
   * [token.transfer(to, amount), token.transfer(Foxsafe, fee ≤ 5)], sent by this wallet and paid for
   * by a paymaster (SPEC §7.3). [request] JSON: {token, to, amount, fee, upgradeNonce (-1 = upgraded)}.
   */
  fun signGaslessEvm(id: String, coinValue: Int, typedData: String, request: String, account: Int, activity: FragmentActivity?): String = synchronized(lock) {
    fun bad(why: String) = WalletException("INVALID", "gasless transfer refused: $why")
    val c = coin(coinValue)
    val allowedChains = EvmFeePolicy.CHAINS[coinValue]
    if (c.blockchain() != Blockchain.ETHEREUM || allowedChains == null) throw bad("network")
    val td = JSONObject(typedData)
    val domain = td.getJSONObject("domain")
    val message = td.getJSONObject("message")
    val req = JSONObject(request)
    if (td.optString("primaryType") != "PackedUserOperation") throw bad("not a user operation")
    val chainId = domain.optString("chainId").toLongOrNull() ?: throw bad("chain")
    if (chainId !in allowedChains || domain.optString("verifyingContract").lowercase() != EvmFeePolicy.ENTRY_POINT ||
      domain.optString("name") != "ERC4337" || domain.optString("version") != "1") throw bad("not EntryPoint 0.8 on this network")
    val token = req.optString("token").lowercase()
    val decimals = EvmFeePolicy.TOKENS[chainId]?.get(token) ?: throw bad("this token can't pay the fee")
    val amount = req.optString("amount").toBigIntegerOrNull() ?: throw bad("amount")
    val fee = req.optString("fee").toBigIntegerOrNull() ?: throw bad("fee")
    val cap = BigInteger.valueOf(EvmFeePolicy.MAX_FEE_UNITS.toLong()).multiply(BigInteger.TEN.pow(decimals))
    if (amount.signum() <= 0 || amount.bitLength() > 256 || fee.signum() <= 0 || fee > cap) throw bad("the fee is above 5")
    val expected = gaslessCallData(addressWord(token), addressWord(req.optString("to")), word(amount), word(fee), addressWord(EvmFeePolicy.FEE_WALLET))
    if (message.optString("callData").lowercase() != expected) throw bad("the transaction is not exactly the payment plus Foxsafe's fee")
    if (message.optString("paymasterAndData").length < 42) throw bad("no paymaster: it would spend your own gas")
    val upgradeNonce = req.optLong("upgradeNonce", -1)
    val initCode = message.optString("initCode", "0x").lowercase()
    if (if (upgradeNonce >= 0) initCode != EvmFeePolicy.DELEGATE.lowercase() else initCode != "0x" && initCode.isNotEmpty()) throw bad("unexpected account upgrade")
    val sender = message.optString("sender").lowercase()

    withSecret(id, activity, "Confirm the transfer and its network fee") { r ->
      val key = privateKey(r, c, account)
      if (sender != c.deriveAddress(key).lowercase()) throw bad("not sent by this wallet")
      var sig = EthereumMessageSigner.signTypedMessage(key, typedData)
      if (!sig.startsWith("0x")) sig = "0x$sig"
      if (sig.length != 132) throw WalletException("CRYPTO", "signing failed")
      val out = JSONObject().put("signature", sig)
      if (upgradeNonce >= 0) {
        val a = JSONObject(
          Eip7702.signAuthorization(minimalBytes(chainId), EvmFeePolicy.DELEGATE, minimalBytes(upgradeNonce), hex(key.data()))
            ?: throw WalletException("CRYPTO", "upgrade signing failed"),
        )
        out.put("authorization", JSONObject().put("r", a.opt("r")).put("s", a.opt("s")).put("yParity", a.opt("yParity")))
      }
      out.toString()
    }
  }

  // MARK: Solana gasless (Pimlico paymaster pays SOL fees and rent)

  /** Foxsafe's Solana fee rule, compiled in on purpose: an app update can't change it. */
  private object SolanaFeePolicy {
    const val FEE_WALLET = "3DvVfRtM2SR49P6zkdA59g78BYsjXtnaKgvaUK1CPMnj"
    val TOKENS: Map<String, Int> = mapOf("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB" to 6, "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" to 6)
    const val MAX_FEE_UNITS = 5L
    const val TOKEN_PROGRAM = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
    const val ATA_PROGRAM = "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
    const val SYSTEM_PROGRAM = "11111111111111111111111111111111"
    const val COMPUTE_BUDGET_PROGRAM = "ComputeBudget111111111111111111111111111111"
  }

  /**
   * Signs a gasless Solana send with ONE prompt. The message is rebuilt here from the user's choices
   * (layout in server/src/gasless/solana/message.ts) and must match the server's byte for byte. The
   * paymaster is only the fee payer; the user is a read-only signer (SPEC §7.4).
   */
  fun signGaslessSolana(id: String, messageB64: String, request: String, account: Int, activity: FragmentActivity?): String = synchronized(lock) {
    fun bad(why: String) = WalletException("INVALID", "gasless transfer refused: $why")
    val message = Envelope.unb64(messageB64)
    val req = JSONObject(request)
    val mint = req.optString("mint")
    val to = req.optString("to")
    val feePayer = req.optString("feePayer")
    val blockhash = req.optString("blockhash")
    val decimals = SolanaFeePolicy.TOKENS[mint] ?: throw bad("this token can't pay the fee")
    val amount = req.optString("amount").toBigIntegerOrNull() ?: throw bad("amount")
    val fee = req.optString("fee").toBigIntegerOrNull() ?: throw bad("fee")
    val cap = BigInteger.valueOf(SolanaFeePolicy.MAX_FEE_UNITS).multiply(BigInteger.TEN.pow(decimals))
    if (amount.signum() <= 0 || amount.bitLength() > 64 || fee.signum() <= 0 || fee > cap) throw bad("the fee is above 5")
    val cuLimit = req.optString("computeUnitLimit").toLongOrNull() ?: throw bad("compute budget")
    val cuPrice = req.optString("computeUnitPrice").toBigIntegerOrNull() ?: throw bad("compute budget")
    if (cuLimit !in 0..1_400_000 || cuPrice.signum() < 0 || cuPrice > BigInteger.valueOf(10_000_000)) throw bad("compute budget")
    for (k in listOf(to, feePayer, blockhash)) if (Base58.decodeNoCheck(k)?.size != 32) throw bad("address")
    val toIsTokenAccount = req.optBoolean("toIsTokenAccount")
    val createRecipient = req.optBoolean("createRecipient")
    if (toIsTokenAccount && createRecipient) throw bad("inconsistent receiver")

    withSecret(id, activity, "Confirm the transfer and its network fee") { r ->
      val key = privateKey(r, CoinType.SOLANA, account)
      val user = CoinType.SOLANA.deriveAddress(key)
      if (feePayer == user || feePayer == SolanaFeePolicy.FEE_WALLET) throw bad("the paymaster can't be you or Foxsafe")
      val userAta = SolanaAddress(user).defaultTokenAddress(mint) ?: throw bad("token accounts")
      val feeAta = SolanaAddress(SolanaFeePolicy.FEE_WALLET).defaultTokenAddress(mint) ?: throw bad("token accounts")
      val destination = if (toIsTokenAccount) to else SolanaAddress(to).defaultTokenAddress(mint) ?: throw bad("token accounts")
      if (destination == userAta || destination == feeAta) throw bad("receiver")
      val expected = gaslessSolanaMessage(
        feePayer, user, mint, decimals, userAta, destination, if (createRecipient) to else null, feeAta,
        req.optBoolean("createFeeAccount"), amount.toLong(), fee.toLong(), blockhash, cuLimit.toInt(), cuPrice.toLong(),
      )
      if (!expected.contentEquals(message)) throw bad("the transaction is not exactly the payment plus Foxsafe's fee")
      val sig = key.sign(message, Curve.ED25519) ?: throw WalletException("CRYPTO", "signing failed")
      if (sig.size != 64) throw WalletException("CRYPTO", "signing failed")
      Base58.encodeNoCheck(sig)
    }
  }

  /** Byte-for-byte twin of server/src/gasless/solana/message.ts (legacy message, fixed account order). */
  private fun gaslessSolanaMessage(
    feePayer: String, user: String, mint: String, decimals: Int, userAta: String, destination: String, recipientOwner: String?,
    feeAta: String, createFeeAccount: Boolean, amount: Long, fee: Long, blockhash: String, cuLimit: Int, cuPrice: Long,
  ): ByteArray {
    val p = SolanaFeePolicy
    val readonly = mutableListOf(mint, p.TOKEN_PROGRAM, p.COMPUTE_BUDGET_PROGRAM)
    if (recipientOwner != null || createFeeAccount) readonly += listOf(p.ATA_PROGRAM, p.SYSTEM_PROGRAM)
    if (recipientOwner != null) readonly += recipientOwner
    if (createFeeAccount) readonly += p.FEE_WALLET
    val keys = listOf(feePayer, user, userAta, destination, feeAta) + readonly
    if (keys.toSet().size != keys.size) throw WalletException("INVALID", "gasless transfer refused: accounts must be distinct")
    fun idx(k: String) = keys.indexOf(k).toByte()
    fun compact(n: Int): ByteArray {
      val out = mutableListOf<Byte>()
      var v = n
      while (true) { val b = v and 0x7f; v = v shr 7; if (v == 0) { out += b.toByte(); return out.toByteArray() }; out += (b or 0x80).toByte() }
    }
    fun le(n: Long, bytes: Int) = ByteArray(bytes) { ((n shr (8 * it)) and 0xff).toByte() }
    fun ix(program: String, accounts: List<String>, data: ByteArray) =
      byteArrayOf(idx(program)) + compact(accounts.size) + accounts.map { idx(it) }.toByteArray() + compact(data.size) + data
    fun transferChecked(dest: String, value: Long) = ix(p.TOKEN_PROGRAM, listOf(userAta, mint, dest, user), byteArrayOf(12) + le(value, 8) + byteArrayOf(decimals.toByte()))
    fun createAta(ata: String, owner: String) = ix(p.ATA_PROGRAM, listOf(feePayer, ata, owner, mint, p.SYSTEM_PROGRAM, p.TOKEN_PROGRAM), byteArrayOf(1))
    val instructions = mutableListOf(ix(p.COMPUTE_BUDGET_PROGRAM, emptyList(), byteArrayOf(2) + le(cuLimit.toLong(), 4)), ix(p.COMPUTE_BUDGET_PROGRAM, emptyList(), byteArrayOf(3) + le(cuPrice, 8)))
    if (recipientOwner != null) instructions += createAta(destination, recipientOwner)
    if (createFeeAccount) instructions += createAta(feeAta, p.FEE_WALLET)
    instructions += transferChecked(destination, amount)
    instructions += transferChecked(feeAta, fee)
    var out = byteArrayOf(2, 1, readonly.size.toByte()) + compact(keys.size)
    for (k in keys) out += (Base58.decodeNoCheck(k)?.takeIf { it.size == 32 } ?: throw WalletException("INVALID", "bad address"))
    out += (Base58.decodeNoCheck(blockhash)?.takeIf { it.size == 32 } ?: throw WalletException("INVALID", "bad blockhash"))
    out += compact(instructions.size)
    for (i in instructions) out += i
    return out
  }

  /** executeBatch([token.transfer(to, amount), token.transfer(feeWallet, fee)]), ABI-encoded by hand. */
  private fun gaslessCallData(token: ByteArray, to: ByteArray, amount: ByteArray, fee: ByteArray, feeWallet: ByteArray): String {
    fun num(n: Int) = ByteArray(32).also { it[31] = (n and 0xff).toByte(); it[30] = ((n shr 8) and 0xff).toByte() }
    fun transfer(a: ByteArray, v: ByteArray) = byteArrayOf(0xa9.toByte(), 0x05, 0x9c.toByte(), 0xbb.toByte()) + a + v
    fun tuple(target: ByteArray, data: ByteArray) = target + num(0) + num(0x60) + num(68) + data + ByteArray(28)
    val body = byteArrayOf(0x34, 0xfc.toByte(), 0xd5.toByte(), 0xbe.toByte()) + num(0x20) + num(2) + num(0x40) + num(0x40 + 224) +
      tuple(token, transfer(to, amount)) + tuple(token, transfer(feeWallet, fee))
    return "0x" + hex(body)
  }

  private fun addressWord(a: String): ByteArray {
    val h = a.lowercase().removePrefix("0x")
    if (h.length != 40 || !h.all { it in '0'..'9' || it in 'a'..'f' }) throw WalletException("INVALID", "gasless transfer refused: address")
    return ByteArray(12) + unhex(h)!!
  }

  private fun word(v: BigInteger): ByteArray {
    val b = v.toByteArray().dropWhile { it == 0.toByte() }.toByteArray()
    return ByteArray(32 - b.size) + b
  }

  private fun minimalBytes(n: Long): ByteArray = word(BigInteger.valueOf(n)).dropWhile { it == 0.toByte() }.toByteArray()

  private fun signOne(input: ByteArray, key: PrivateKey, c: CoinType): String {
    if (c.blockchain() == Blockchain.BITCOIN || c.blockchain() == Blockchain.BITCOINCASH) return signBitcoin(input, key, c)
    val pre = PreSigningOutput.parseFrom(TransactionCompiler.preImageHashes(c, input))
    if (pre.error != SigningError.OK) throw WalletException("INVALID", "cannot sign: ${pre.errorMessage}")
    // Solana signs the whole message (pre.data); its pre-image output has a different layout,
    // so the generic dataHash field would hold the signer's key instead (SPEC §7).
    val digest = if (c.blockchain() == Blockchain.SOLANA) pre.data.toByteArray() else pre.dataHash.toByteArray()
    val sig = key.sign(digest, c.curve()) ?: throw WalletException("CRYPTO", "signing failed")
    val out = TransactionCompiler.compileWithSignatures(
      c, input, DataVector().apply { add(sig) }, DataVector().apply { add(key.getPublicKey(c).data()) },
    )
    return Envelope.b64(out)
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
        for (r in records) if ("w.${r.id}" !in existing) {
          // Bring back the names, networks and backup state the user had.
          val label = readLabel(r.id)
          val rec = if (label == null) r else {
            val names = label.optJSONArray("accounts")
            val byIndex = (0 until (names?.length() ?: 0)).associate { names!!.getJSONObject(it).getInt("index") to names.getJSONObject(it).getString("name") }
            r.copy(name = label.optString("name", r.name), accounts = r.accounts.map { a -> byIndex[a.index]?.let { Account(a.index, it) } ?: a })
          }
          val keep = label?.let { JSONObject().put("name", rec.name).put("coins", it.getJSONArray("coins")).put("backup", it.getJSONObject("backup")) }
          restored.put(info(store(rec, lockWith, cache, reseal, keep)))
        }
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

  // MARK: backup password (SPEC §3.4)
  // The backup password's Argon2id key, kept on this phone locked with the app passcode, so the
  // backup file can be rebuilt whenever wallets change without asking for the password again.

  fun hasBackupPassword(): Boolean = synchronized(lock) { main.get("backup") != null }

  /** Sets or replaces the backup password. Backups made with an earlier password keep that password. */
  fun setBackupPassword(password: String, passcode: String) = synchronized(lock) {
    if (password.length < MIN_BACKUP_PASSWORD) throw WalletException("INVALID", "the backup password needs at least $MIN_BACKUP_PASSWORD characters")
    requirePasscode(passcode)
    val salt = Envelope.random(16)
    val key = Envelope.argon2id(password, salt, Envelope.DEFAULT_M, Envelope.DEFAULT_T)
    try {
      val m = meta()
      val sealed = Envelope.seal(Envelope.Kind.RECOVERY, key, Envelope.Source.Passcode(passcode),
        Envelope.unb64(m.getString("salt")), m.getInt("m"), m.getInt("t"))
      main.set("backup", JSONObject().put("v", 1).put("salt", Envelope.b64(salt)).put("m", Envelope.DEFAULT_M)
        .put("t", Envelope.DEFAULT_T).put("key", sealed).toString())
    } finally {
      key.fill(0)
    }
  }

  /**
   * A backup envelope with every wallet on this phone, locked with the backup password. Needs only
   * the app passcode (secrets come from the passcode-locked recovery copy, no fingerprint prompt).
   */
  fun buildBackup(passcode: String): String = synchronized(lock) {
    val b = JSONObject(main.get("backup") ?: throw WalletException("INVALID", "set a backup password first"))
    val cache = Envelope.KeyCache()
    var key: ByteArray? = null
    try {
      key = try {
        Envelope.open(b.getString("key"), Envelope.Source.Passcode(passcode), Envelope.Kind.RECOVERY, cache)
      } catch (e: WalletException) {
        throw WalletException("PASSCODE", "wrong passcode")
      }
      val records = main.keys("w.").sorted().map { account ->
        val entry = recovery.get(account) ?: throw WalletException("NOT_FOUND", "no recovery entry for $account")
        val r = decodeVault(Envelope.open(entry, Envelope.Source.Passcode(passcode), Envelope.Kind.RECOVERY, cache)).firstOrNull()
          ?: throw WalletException("CRYPTO", "empty recovery entry")
        val info = info(load(account.removePrefix("w.")))
        withCurrentNames(r, info).copy(name = info.getString("name"))
      }
      if (records.isEmpty()) throw WalletException("INVALID", "there are no wallets to back up")
      Envelope.seal(Envelope.Kind.BACKUP, encodeVault(records), Envelope.Source.Derived(key),
        Envelope.unb64(b.getString("salt")), b.getInt("m"), b.getInt("t"))
    } finally {
      key?.fill(0)
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
