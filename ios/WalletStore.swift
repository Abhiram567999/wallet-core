import CryptoKit
import Foundation
import LocalAuthentication
import WalletCore
import WalletCoreSwiftProtobuf

/// All wallet operations. Secrets are only decrypted inside `withSecrets`
/// and never returned to JavaScript except by `revealSecret`.
final class WalletStore {
  static let shared = WalletStore()
  private let lock = NSLock()
  private let main = KeychainStore.main
  private let recovery = KeychainStore.recovery
  private static let installedFlag = "app.foxsafe.installed"
  static let minPasscodeLength = 6
  static let defaultCoins: [UInt32] = [0, 60, 195, 501] // Bitcoin, Ethereum, TRON, Solana
  /// Chains whose addresses go into the recovery address index (SPEC §5). EVM networks share Ethereum's address.
  static let indexCoins: [UInt32] = [0, 2, 3, 60, 118, 144, 145, 148, 195, 354, 397, 501, 607, 637, 784, 1815, 20000714]
  /// Accounts whose addresses go into the recovery address index (it must stay small).
  static let indexAccounts = 5
  /// Most accounts one import may create at once.
  static let maxImportAccounts = 500
  static let solanaPaths = ["phantom", "trust"]

  // MARK: Models

  struct Info: Codable {
    var id: String
    var name: String
    var kind: String // single | multi | hd
    var secretType: String // mnemonic | privateKey
    var coins: [UInt32]
    var createdAt: String
    var backup: Backup
    var accounts: [Account]
    /// Phrase wallets: "phantom" or "trust" (SPEC §2.2); nil in wallets saved before it existed means "trust".
    var solanaPath: String?
    struct Backup: Codable { var manual: Bool; var cloud: Bool }
    /// HD account: index on the phrase (SPEC §2.1) and a display name.
    struct Account: Codable, Equatable { var index: UInt32; var name: String }

    var dict: [String: Any] {
      var out: [String: Any] = ["id": id, "name": name, "kind": kind, "secretType": secretType, "coins": coins, "createdAt": createdAt,
                                "backup": ["manual": backup.manual, "cloud": backup.cloud],
                                "accounts": accounts.map { ["index": $0.index, "name": $0.name] }]
      if secretType == "mnemonic" { out["solanaPath"] = solanaPath ?? "trust" }
      return out
    }
  }

  /// What the main copy stores per wallet. Only `envelope` holds the secret,
  /// encrypted with a data key that only the wrapping key can unlock.
  struct Stored: Codable {
    var info: Info
    var addresses: [String: [String: String]] // account index -> CoinType raw value -> address (public)
    var wrappedKey: String
    var envelope: String
  }

  /// A wallet with its secret, as inside an envelope (SPEC §4 plaintext).
  struct Record {
    var id: String
    var name: String
    var kind: String
    var coins: [UInt32]
    var createdAt: String
    var words: String?
    var passphrase: String?
    var keyHex: String?
    var keyCoin: UInt32?
    var accounts: [Info.Account] = [.init(index: 0, name: "Account 1")]
    var solanaPath = "trust"

    var json: [String: Any] {
      var secret: [String: Any]
      if let words {
        secret = ["type": "mnemonic", "words": words]
        if let passphrase, !passphrase.isEmpty { secret["passphrase"] = passphrase }
      } else {
        secret = ["type": "privateKey", "hex": keyHex!, "coin": keyCoin!]
      }
      var out: [String: Any] = ["id": id, "name": name, "kind": kind, "coins": coins, "createdAt": createdAt, "secret": secret]
      if words != nil {
        out["accounts"] = accounts.map { ["index": $0.index, "name": $0.name] }
        out["solanaPath"] = solanaPath
      }
      return out
    }
  }

  // MARK: Payload encoding (mirrors src/vault.ts)

  static func encodeVault(_ records: [Record]) throws -> Data {
    try JSONSerialization.data(withJSONObject: ["v": 1, "wallets": records.map(\.json)], options: [.sortedKeys])
  }

  static func decodeVault(_ data: Data) throws -> [Record] {
    guard let p = try? JSONSerialization.jsonObject(with: data) as? [String: Any],
          (p["v"] as? NSNumber)?.intValue == 1, let wallets = p["wallets"] as? [[String: Any]]
    else { throw WalletError.invalid("unsupported vault data") }
    return try wallets.enumerated().map { i, w in
      func bad(_ what: String) -> WalletError { .invalid("wallet \(i): \(what)") }
      guard let id = w["id"] as? String, !id.isEmpty else { throw bad("id") }
      guard let name = w["name"] as? String else { throw bad("name") }
      guard let kind = w["kind"] as? String, ["multi", "single", "hd"].contains(kind) else { throw bad("kind") }
      guard let coins = (w["coins"] as? [NSNumber])?.map(\.uint32Value) else { throw bad("coins") }
      guard let createdAt = w["createdAt"] as? String else { throw bad("createdAt") }
      guard let s = w["secret"] as? [String: Any] else { throw bad("secret") }
      var r = Record(id: id, name: name, kind: kind, coins: coins, createdAt: createdAt)
      switch s["type"] as? String {
      case "mnemonic":
        guard let words = s["words"] as? String, [12, 15, 18, 21, 24].contains(words.split(separator: " ").count) else { throw bad("mnemonic") }
        r.words = words
        r.passphrase = s["passphrase"] as? String
      case "privateKey":
        guard let hex = s["hex"] as? String, hex.count == 64, Data(hexString: hex) != nil else { throw bad("private key") }
        guard let coin = (s["coin"] as? NSNumber)?.uint32Value else { throw bad("private key coin") }
        guard kind == "single" else { throw bad("a private-key wallet must be single-chain") }
        r.keyHex = hex
        r.keyCoin = coin
      default:
        throw bad("unknown secret type")
      }
      if r.keyHex != nil, coins.count != 1 { throw bad("a private-key wallet has exactly one coin") }
      if coins.isEmpty { throw bad("coins") }
      if let list = w["accounts"] {
        guard r.words != nil, let arr = list as? [[String: Any]], !arr.isEmpty else { throw bad("accounts") }
        r.accounts = try arr.map { a in
          guard let n = a["index"] as? NSNumber, n.int64Value >= 0, n.int64Value <= 0x7fff_ffff, let name = a["name"] as? String
          else { throw bad("account") }
          return .init(index: n.uint32Value, name: name)
        }
        guard Set(r.accounts.map(\.index)).count == r.accounts.count else { throw bad("duplicate account") }
      }
      if let sp = w["solanaPath"] {
        guard r.words != nil, let sp = sp as? String, solanaPaths.contains(sp) else { throw bad("solanaPath") }
        r.solanaPath = sp
      }
      return r
    }
  }

  // MARK: First launch

  /// Keychain items outlive the app. On the first launch after an install the
  /// old main copy is removed, so only the passcode-locked recovery copy can
  /// bring wallets back (SPEC §3.2).
  func prepareFirstLaunch() {
    lock.lock(); defer { lock.unlock() }
    guard !UserDefaults.standard.bool(forKey: Self.installedFlag) else { return }
    try? main.deleteAll()
    try? WrappingKey.delete()
    UserDefaults.standard.set(true, forKey: Self.installedFlag)
  }

  // MARK: Passcode

  private struct Verifier: Codable { var v: Int; var salt: String; var m: Int; var t: Int; var hash: String }
  private struct RecoveryMeta: Codable { var v: Int; var salt: String; var m: Int; var t: Int }

  func hasPasscode() throws -> Bool { lock.lock(); defer { lock.unlock() }; return try main.get("passcode") != nil }

  func setPasscode(_ passcode: String) throws {
    lock.lock(); defer { lock.unlock() }
    guard try main.get("passcode") == nil else { throw WalletError.passcode("a passcode is already set; use changePasscode") }
    try writePasscode(passcode, recoverySalt: nil)
  }

  private func writePasscode(_ passcode: String, recoverySalt: (salt: String, m: Int, t: Int)?) throws {
    guard passcode.count >= Self.minPasscodeLength else { throw WalletError.passcode("at least \(Self.minPasscodeLength) characters") }
    let (m, t) = Envelope.defaultArgon2
    let salt = Envelope.random(16)
    let hash = try Envelope.argon2id(passcode, salt: salt, m: m, t: t)
    let v = Verifier(v: 1, salt: salt.base64EncodedString(), m: m, t: t, hash: hash.withUnsafeBytes { Data($0) }.base64EncodedString())
    try main.set(String(decoding: try JSONEncoder().encode(v), as: UTF8.self), for: "passcode")
    let meta = recoverySalt.map { RecoveryMeta(v: 1, salt: $0.salt, m: $0.m, t: $0.t) }
      ?? RecoveryMeta(v: 1, salt: Envelope.random(16).base64EncodedString(), m: m, t: t)
    try recovery.set(String(decoding: try JSONEncoder().encode(meta), as: UTF8.self), for: "meta")
  }

  private func checkPasscode(_ passcode: String) throws -> Bool {
    guard let raw = try main.get("passcode"),
          let v = try? JSONDecoder().decode(Verifier.self, from: Data(raw.utf8)) else { throw WalletError.passcode("no passcode set") }
    let hash = try Envelope.argon2id(passcode, salt: Data(base64Encoded: v.salt)!, m: v.m, t: v.t)
    let expected = Data(base64Encoded: v.hash)!
    // Constant-time comparison.
    return hash.withUnsafeBytes { a in
      a.count == expected.count && zip(a, expected).reduce(0) { $0 | ($1.0 ^ $1.1) } == 0
    }
  }

  private func requirePasscode(_ passcode: String) throws {
    guard try checkPasscode(passcode) else { throw WalletError.passcode("wrong passcode") }
  }

  func verifyPasscode(_ passcode: String) throws -> Bool {
    lock.lock(); defer { lock.unlock() }
    return try checkPasscode(passcode)
  }

  func changePasscode(old: String, new: String) throws {
    lock.lock(); defer { lock.unlock() }
    try requirePasscode(old)
    let cache = KeyCache()
    let entries = try recovery.accounts(prefix: "w.").map { ($0, try recovery.get($0)!) }
    let records = try entries.map { try Self.decodeVault(Envelope.open($0.1, .passcode(old), expect: .recovery, cache: cache)) }
    var backupKey = try backupSetting().map { try Envelope.open($0.key, .passcode(old), expect: .recovery, cache: cache) }
    defer { if let n = backupKey?.count { backupKey?.resetBytes(in: 0..<n) } }
    try writePasscode(new, recoverySalt: nil)
    let meta = try recoveryMeta()
    if let key = backupKey, var b = try backupSetting() {
      b.key = try Envelope.seal(.recovery, key, .passcode(new), salt: Data(base64Encoded: meta.salt)!, argon2: (meta.m, meta.t), cache: cache)
      try main.set(String(decoding: try JSONEncoder().encode(b), as: UTF8.self), for: "backup")
    }
    for (account, recs) in zip(entries.map(\.0), records) {
      let env = try Envelope.seal(.recovery, Self.encodeVault(recs), .passcode(new),
                                  salt: Data(base64Encoded: meta.salt)!, argon2: (meta.m, meta.t), cache: cache)
      try recovery.set(env, for: account)
    }
  }

  private func recoveryMeta() throws -> RecoveryMeta {
    guard let raw = try recovery.get("meta"), let m = try? JSONDecoder().decode(RecoveryMeta.self, from: Data(raw.utf8))
    else { throw WalletError.passcode("no passcode set") }
    return m
  }

  // MARK: Creating and importing

  func createWallet(name: String, kind: String, coin: UInt32?, wordCount: Int, coins: [UInt32]?, passcode: String) throws -> [String: Any] {
    guard wordCount == 12 || wordCount == 24 else { throw WalletError.invalid("wordCount must be 12 or 24") }
    // Entropy comes from the operating system's secure random generator
    // (SecRandomCopyBytes), never from the library's own generator.
    var entropy = Envelope.random(wordCount == 12 ? 16 : 32)
    defer { entropy.resetBytes(in: 0..<entropy.count) }
    guard let hd = HDWallet(entropy: entropy, passphrase: "") else { throw WalletError.crypto("could not generate a phrase") }
    return try addMnemonic(name: name, words: hd.mnemonic, passphrase: nil, kind: kind, coin: coin, coins: coins,
                           solanaPath: "phantom", accountCount: 1, passcode: passcode)
  }

  /// `accountCount` > 1 (hd only) brings back accounts 0 … n-1 at once, e.g. the ones the app found on the networks.
  func importMnemonic(name: String, words: String, passphrase: String?, kind: String, coin: UInt32?, coins: [UInt32]?,
                      solanaPath: String, accountCount: Int, passcode: String) throws -> [String: Any] {
    let normalized = words.lowercased().split(whereSeparator: \.isWhitespace).joined(separator: " ")
    guard Mnemonic.isValid(mnemonic: normalized) else { throw WalletError.invalid("this secret phrase is not valid") }
    return try addMnemonic(name: name, words: normalized, passphrase: passphrase, kind: kind, coin: coin, coins: coins,
                           solanaPath: solanaPath, accountCount: accountCount, passcode: passcode)
  }

  private func addMnemonic(name: String, words: String, passphrase: String?, kind: String, coin: UInt32?, coins: [UInt32]?,
                           solanaPath: String, accountCount: Int, passcode: String) throws -> [String: Any] {
    guard Self.solanaPaths.contains(solanaPath) else { throw WalletError.invalid("solanaPath must be phantom or trust") }
    guard accountCount >= 1, accountCount <= Self.maxImportAccounts else { throw WalletError.invalid("bad number of accounts") }
    guard accountCount == 1 || kind == "hd" else { throw WalletError.invalid("only HD wallets have more accounts") }
    let walletCoins: [UInt32]
    switch kind {
    case "multi", "hd": walletCoins = coins ?? Self.defaultCoins
    case "single":
      guard let coin, CoinType(rawValue: coin) != nil else { throw WalletError.invalid("a single-chain wallet needs a supported coin") }
      walletCoins = [coin]
    default: throw WalletError.invalid("kind must be single, multi or hd")
    }
    var record = Record(id: UUID().uuidString.lowercased(), name: name, kind: kind, coins: walletCoins,
                        createdAt: ISO8601DateFormatter().string(from: Date()), words: words, passphrase: passphrase)
    record.solanaPath = solanaPath
    record.accounts = (0..<accountCount).map { .init(index: UInt32($0), name: "Account \($0 + 1)") }
    lock.lock(); defer { lock.unlock() }
    try requirePasscode(passcode)
    return try store(record, passcode: passcode).info.dict
  }

  func importPrivateKey(name: String, privateKey: String, coin: UInt32, passcode: String) throws -> [String: Any] {
    guard let coinType = CoinType(rawValue: coin) else { throw WalletError.invalid("unsupported coin") }
    var data = try Self.parsePrivateKey(privateKey, coinType)
    defer { data.resetBytes(in: 0..<data.count) }
    guard PrivateKey.isValid(data: data, curve: coinType.curve) else {
      throw WalletError.invalid("this private key is not valid for the chosen network")
    }
    let hex = data.hexString
    let record = Record(id: UUID().uuidString.lowercased(), name: name, kind: "single", coins: [coin],
                        createdAt: ISO8601DateFormatter().string(from: Date()), keyHex: hex, keyCoin: coin)
    lock.lock(); defer { lock.unlock() }
    try requirePasscode(passcode)
    return try store(record, passcode: passcode).info.dict
  }

  /// Hex (with or without 0x). For Solana also base58 of the 64-byte secret
  /// key (private + public, as Phantom and Solflare export it) or of the
  /// 32-byte key, and the Solana CLI's JSON array (SPEC §2.2).
  static func parsePrivateKey(_ input: String, _ coin: CoinType) throws -> Data {
    let bad = WalletError.invalid("this private key is not valid for the chosen network")
    let text = input.trimmingCharacters(in: .whitespacesAndNewlines)
    var hex = text.lowercased()
    if hex.hasPrefix("0x") { hex.removeFirst(2) }
    if hex.count == 64, let d = Data(hexString: hex) { return d }
    guard coin == .solana else { throw bad }
    var raw: Data
    if text.hasPrefix("[") {
      guard let arr = try? JSONSerialization.jsonObject(with: Data(text.utf8)) as? [NSNumber],
            arr.allSatisfy({ (0...255).contains($0.intValue) }) else { throw bad }
      raw = Data(arr.map { UInt8($0.intValue) })
    } else {
      guard let d = Base58.decodeNoCheck(string: text) else { throw bad }
      raw = d
    }
    defer { raw.resetBytes(in: 0..<raw.count) }
    switch raw.count {
    case 32: return Data(raw)
    case 64:
      let secret = Data(raw.prefix(32))
      guard let key = PrivateKey(data: secret), key.getPublicKeyEd25519().data == raw.suffix(32) else {
        throw WalletError.invalid("this Solana key doesn't match its own public key")
      }
      return secret
    default: throw bad
    }
  }

  /// Writes the main copy and the recovery entry for one wallet.
  /// Caller holds the lock and has checked the passcode.
  @discardableResult
  /// `previous` addresses (same secret and Solana path) are reused, so adding an account only derives that account.
  private func store(_ r: Record, passcode: String?, cache: KeyCache? = nil, writeRecovery: Bool = true, keep: Info? = nil,
                     previous: [String: [String: String]] = [:]) throws -> Stored {
    let addresses = try Self.deriveAddresses(r, coins: keep?.coins ?? r.coins, previous: previous)
    var dataKey = Envelope.random(32)
    defer { dataKey.resetBytes(in: 0..<dataKey.count) }
    let envelope = try Envelope.seal(.device, Self.encodeVault([r]), .key(dataKey))
    let wrapped = try WrappingKey.wrap(dataKey)
    let info = Info(id: r.id, name: keep?.name ?? r.name, kind: r.kind, secretType: r.words != nil ? "mnemonic" : "privateKey",
                    coins: keep?.coins ?? r.coins, createdAt: r.createdAt, backup: keep?.backup ?? .init(manual: false, cloud: false),
                    accounts: r.accounts, solanaPath: r.words != nil ? r.solanaPath : nil)
    let stored = Stored(info: info, addresses: addresses, wrappedKey: wrapped.base64EncodedString(), envelope: envelope)
    if writeRecovery, let passcode {
      let meta = try recoveryMeta()
      let entry = try Envelope.seal(.recovery, Self.encodeVault([r]), .passcode(passcode),
                                    salt: Data(base64Encoded: meta.salt)!, argon2: (meta.m, meta.t), cache: cache)
      try recovery.set(entry, for: "w.\(r.id)")
      let indexed = r.accounts.map(\.index).sorted().prefix(Self.indexAccounts)
      let remembered = indexed.flatMap { i in Self.indexCoins.compactMap { addresses[String(i)]?[String($0)] } }
      try recovery.set(AddressIndex.build(remembered), for: "i.\(r.id)")
    }
    try save(stored)
    writeLabel(info)
    return stored
  }

  /// What a wallet looks like (name, account names, networks, backup state) next to its recovery copy,
  /// so a restore brings back the names the user chose. No secrets: plain JSON in the device-only keychain.
  private struct Label: Codable { var name: String; var accounts: [Info.Account]; var coins: [UInt32]; var backup: Info.Backup }

  private func writeLabel(_ info: Info) {
    let label = Label(name: info.name, accounts: info.accounts, coins: info.coins, backup: info.backup)
    if let data = try? JSONEncoder().encode(label) { try? recovery.set(String(decoding: data, as: UTF8.self), for: "l.\(info.id)") }
  }

  private func readLabel(_ id: String) -> Label? {
    guard let raw = try? recovery.get("l.\(id)") else { return nil }
    return try? JSONDecoder().decode(Label.self, from: Data(raw.utf8))
  }

  private func save(_ s: Stored) throws {
    try main.set(String(decoding: try JSONEncoder().encode(s), as: UTF8.self), for: "w.\(s.info.id)")
  }

  private func load(_ id: String) throws -> Stored {
    guard let raw = try main.get("w.\(id)") else { throw WalletError.notFound("no wallet \(id)") }
    return try JSONDecoder().decode(Stored.self, from: Data(raw.utf8))
  }

  // MARK: Addresses

  /// Public addresses, derived once while the secret is at hand. Account 0
  /// gets every chain, so more chains can be switched on without the secret;
  /// other accounts get the wallet's chains and the recovery-index chains
  /// (every chain for 100 accounts would be ~1 MB and seconds of work).
  static func deriveAddresses(_ r: Record, coins: [UInt32], previous: [String: [String: String]] = [:]) throws -> [String: [String: String]] {
    var out: [String: [String: String]] = [:]
    if let words = r.words {
      var wallet: HDWallet?
      let others = Set(coins + indexCoins).compactMap { CoinType(rawValue: $0) }
      for account in r.accounts {
        var byCoin = previous[String(account.index)] ?? [:]
        for coin in account.index == 0 ? CoinType.allCases : others where byCoin[String(coin.rawValue)] == nil {
          if wallet == nil {
            guard let hd = HDWallet(mnemonic: words, passphrase: r.passphrase ?? "") else { throw WalletError.invalid("bad phrase") }
            wallet = hd
          }
          byCoin[String(coin.rawValue)] = try address(wallet!, coin, account.index, r.solanaPath)
        }
        out[String(account.index)] = byCoin
      }
    } else if let hex = r.keyHex, let raw = r.keyCoin, let coin = CoinType(rawValue: raw), let key = PrivateKey(data: Data(hexString: hex)!) {
      // One secp256k1 key gives the same address on every EVM network.
      let coins = coin.blockchain == .ethereum ? CoinType.allCases.filter { $0.blockchain == .ethereum } : [coin]
      out["0"] = Dictionary(uniqueKeysWithValues: coins.map { (String($0.rawValue), $0.deriveAddress(privateKey: key)) })
    }
    return out
  }

  // MARK: HD accounts (SPEC §2.1, mirrors src/hd.ts)

  static func blockchainName(_ coin: CoinType) -> String {
    switch coin.blockchain {
    case .ethereum: return "ethereum"
    case .tron: return "tron"
    case .cosmos: return "cosmos"
    default: return "other"
    }
  }

  static func basePath(_ coin: CoinType, _ solanaPath: String) -> String {
    coin == .solana && solanaPath == "phantom" ? "m/44'/501'/0'/0'" : coin.derivationPath()
  }

  static func accountPath(_ coin: CoinType, _ index: UInt32, _ solanaPath: String) throws -> String {
    let base = basePath(coin, solanaPath)
    guard index > 0 else { return base }
    guard index <= 0x7fff_ffff else { throw WalletError.invalid("bad account index") }
    var parts = base.split(separator: "/").map(String.init)
    guard parts.first == "m", parts.count >= 4 else { throw WalletError.crypto("unexpected path \(base)") }
    if ["ethereum", "tron", "cosmos"].contains(blockchainName(coin)) || parts[3] != "0'" {
      parts[parts.count - 1] = parts[parts.count - 1].hasSuffix("'") ? "\(index)'" : "\(index)"
    } else {
      parts[3] = "\(index)'"
    }
    return parts.joined(separator: "/")
  }

  /// True when account 0 is the library's default path, which has a faster call.
  private static func isDefault(_ coin: CoinType, _ index: UInt32, _ solanaPath: String) -> Bool {
    index == 0 && !(coin == .solana && solanaPath == "phantom")
  }

  static func key(_ hd: HDWallet, _ coin: CoinType, _ index: UInt32, _ solanaPath: String) throws -> PrivateKey {
    if isDefault(coin, index, solanaPath), let k = hd.getKeyForCoin(coin: coin) { return k }
    guard let k = hd.getKey(coin: coin, derivationPath: try accountPath(coin, index, solanaPath)) else { throw WalletError.crypto("could not derive the key") }
    return k
  }

  static func address(_ hd: HDWallet, _ coin: CoinType, _ index: UInt32, _ solanaPath: String) throws -> String {
    if isDefault(coin, index, solanaPath) {
      guard let a = hd.getAddressForCoin(coin: coin) else { throw WalletError.crypto("could not derive an address") }
      return a
    }
    return coin.deriveAddress(privateKey: try key(hd, coin, index, solanaPath))
  }

  func list() throws -> [[String: Any]] {
    lock.lock(); defer { lock.unlock() }
    return try main.accounts(prefix: "w.").map { try load(String($0.dropFirst(2))).info }
      .sorted { $0.createdAt < $1.createdAt }.map(\.dict)
  }

  func addresses(id: String, coins: [UInt32], account: UInt32) throws -> [[String: Any]] {
    lock.lock(); defer { lock.unlock() }
    let s = try load(id)
    guard let byCoin = s.addresses[String(account)] else { throw WalletError.notFound("no account \(account)") }
    return try coins.compactMap { c in
      guard let a = byCoin[String(c)], let coin = CoinType(rawValue: c) else { return nil }
      return ["coin": c, "address": a, "derivationPath": s.info.secretType == "mnemonic" ? try Self.accountPath(coin, account, s.info.solanaPath ?? "trust") : ""]
    }
  }

  /// Adds the next HD account. Needs the secret (Face ID) to derive its
  /// addresses and the passcode to update the recovery copy.
  func addAccount(id: String, name: String?, passcode: String) throws -> [String: Any] {
    lock.lock(); defer { lock.unlock() }
    try requirePasscode(passcode)
    let s = try load(id)
    guard s.info.kind == "hd" else { throw WalletError.invalid("only HD wallets have more accounts; create a new wallet instead") }
    return try withSecrets([id], reason: "Add an account") { records in
      var r = Self.withCurrentNames(records[0], s.info)
      let next = (r.accounts.map(\.index).max() ?? 0) + 1
      r.accounts.append(.init(index: next, name: name ?? "Account \(next + 1)"))
      return try store(r, passcode: passcode, keep: s.info, previous: s.addresses).info.dict
    }
  }

  func removeAccount(id: String, index: UInt32, passcode: String) throws -> [String: Any] {
    lock.lock(); defer { lock.unlock() }
    try requirePasscode(passcode)
    guard index != 0 else { throw WalletError.invalid("the first account can't be removed") }
    let s = try load(id)
    return try withSecrets([id], reason: "Remove an account") { records in
      var r = Self.withCurrentNames(records[0], s.info)
      guard r.accounts.contains(where: { $0.index == index }) else { throw WalletError.notFound("no account \(index)") }
      r.accounts.removeAll { $0.index == index }
      return try store(r, passcode: passcode, keep: s.info, previous: s.addresses).info.dict
    }
  }

  /// Account names live in the public info (renames don't need the secret); carry them into the sealed record.
  static func withCurrentNames(_ r: Record, _ info: Info) -> Record {
    var out = r
    let names = Dictionary(info.accounts.map { ($0.index, $0.name) }, uniquingKeysWith: { a, _ in a })
    out.accounts = r.accounts.map { .init(index: $0.index, name: names[$0.index] ?? $0.name) }
    return out
  }

  func renameAccount(id: String, index: UInt32, name: String) throws -> [String: Any] {
    try update(id: id) { info in
      guard let i = info.accounts.firstIndex(where: { $0.index == index }) else { throw WalletError.notFound("no account \(index)") }
      info.accounts[i].name = name
    }
  }

  func update(id: String, _ change: (inout Info) throws -> Void) throws -> [String: Any] {
    lock.lock(); defer { lock.unlock() }
    var s = try load(id)
    try change(&s.info)
    try save(s)
    writeLabel(s.info)
    return s.info.dict
  }

  /// Changes the chains shown. If an account lacks an address for a new chain,
  /// it is derived now, which needs the secret (Face ID).
  func setCoins(id: String, coins: [UInt32]) throws -> [String: Any] {
    lock.lock(); defer { lock.unlock() }
    var s = try load(id)
    guard s.info.secretType == "mnemonic" else { throw WalletError.invalid("a private-key wallet keeps its one network") }
    guard !coins.isEmpty, coins.allSatisfy({ CoinType(rawValue: $0) != nil }) else { throw WalletError.invalid("unsupported coin") }
    s.info.coins = coins
    if s.addresses.values.contains(where: { byCoin in coins.contains { byCoin[String($0)] == nil } }) {
      s.addresses = try withSecrets([id], reason: "Add the network") { records in
        try Self.deriveAddresses(Self.withCurrentNames(records[0], s.info), coins: coins, previous: s.addresses)
      }
    }
    try save(s)
    return s.info.dict
  }

  /// Switches how Solana addresses are derived (SPEC §2.2). The Solana
  /// addresses of every account change; the other chains stay the same.
  func setSolanaPath(id: String, solanaPath: String, passcode: String) throws -> [String: Any] {
    guard Self.solanaPaths.contains(solanaPath) else { throw WalletError.invalid("solanaPath must be phantom or trust") }
    lock.lock(); defer { lock.unlock() }
    try requirePasscode(passcode)
    let s = try load(id)
    guard s.info.secretType == "mnemonic" else { throw WalletError.invalid("only phrase wallets have a Solana path") }
    return try withSecrets([id], reason: "Change the Solana address") { records in
      var r = Self.withCurrentNames(records[0], s.info)
      r.solanaPath = solanaPath
      let solana = String(CoinType.solana.rawValue)
      let kept = s.addresses.mapValues { $0.filter { $0.key != solana } }
      return try store(r, passcode: passcode, keep: s.info, previous: kept).info.dict
    }
  }

  /// Removes a wallet after Face ID / Touch ID: opening the wallet's own key (the same check as
  /// sending) proves it's the owner. Deletes the main copy and the recovery copy for good.
  func deleteWithBiometrics(id: String, reason: String) throws {
    lock.lock(); defer { lock.unlock() }
    _ = try load(id)
    _ = try withSecrets([id], reason: reason) { _ in true }
    try main.delete("w.\(id)")
    try recovery.delete("w.\(id)")
    try recovery.delete("i.\(id)")
    try? recovery.delete("l.\(id)")
  }

  func delete(id: String, passcode: String) throws {
    lock.lock(); defer { lock.unlock() }
    try requirePasscode(passcode)
    _ = try load(id)
    try main.delete("w.\(id)")
    try recovery.delete("w.\(id)")
    try recovery.delete("i.\(id)")
    try? recovery.delete("l.\(id)")
  }

  // MARK: Using secrets

  /// Decrypts the given wallets for the length of `body`. On a real iPhone the
  /// Secure Enclave asks for Face ID / Touch ID / the device passcode once.
  private func withSecrets<T>(_ ids: [String], reason: String, _ body: ([Record]) throws -> T) throws -> T {
    let context = LAContext()
    context.localizedReason = reason
    defer { context.invalidate() }
    let records = try ids.map { id -> Record in
      let s = try load(id)
      var dataKey = try WrappingKey.unwrap(Data(base64Encoded: s.wrappedKey)!, context: context)
      defer { dataKey.resetBytes(in: 0..<dataKey.count) }
      guard let r = try Self.decodeVault(Envelope.open(s.envelope, .key(dataKey), expect: .device)).first, r.id == id else {
        throw WalletError.crypto("stored wallet does not match its id")
      }
      return r
    }
    return try body(records)
  }

  private static func privateKey(_ r: Record, coin: CoinType, account: UInt32) throws -> PrivateKey {
    if let words = r.words {
      guard r.accounts.contains(where: { $0.index == account }) else { throw WalletError.notFound("no account \(account)") }
      guard let hd = HDWallet(mnemonic: words, passphrase: r.passphrase ?? "") else { throw WalletError.crypto("could not derive the key") }
      return try key(hd, coin, account, r.solanaPath)
    }
    guard account == 0 else { throw WalletError.notFound("no account \(account)") }
    guard let hex = r.keyHex, let raw = r.keyCoin, let own = CoinType(rawValue: raw),
          own == coin || (own.blockchain == .ethereum && coin.blockchain == .ethereum),
          let key = PrivateKey(data: Data(hexString: hex)!) else { throw WalletError.invalid("this wallet is not for that network") }
    return key
  }

  /// Signs a Trust Wallet Core SigningInput built without a key:
  /// pre-image hash, sign inside this process, compile (SPEC §6).
  func signTransaction(id: String, coin raw: UInt32, inputBase64: String, account: UInt32) throws -> String {
    try signTransactions(id: id, coin: raw, inputsBase64: [inputBase64], account: account)[0]
  }

  /// A transaction plus, at most, ONE network-fee transfer with one Face ID
  /// (gasless). The batch rule is enforced here, below the app: the second
  /// transaction must pay at most 5 USDT to Foxsafe's fee wallet, so even a
  /// tampered app can't use one Face ID to pay anyone else (SPEC §7.2).
  func signTransactions(id: String, coin raw: UInt32, inputsBase64: [String], account: UInt32) throws -> [String] {
    lock.lock(); defer { lock.unlock() }
    guard let coin = CoinType(rawValue: raw), (1...2).contains(inputsBase64.count) else { throw WalletError.invalid("bad coin or inputs") }
    let inputs = try inputsBase64.map { b64 -> Data in
      guard let d = Data(base64Encoded: b64) else { throw WalletError.invalid("bad input") }
      return d
    }
    // Checked before Face ID, so a refused batch never asks.
    var feeOwner: String?
    if inputs.count == 2 { feeOwner = try Self.feeTransferOwner(inputs[1], coin: coin) }
    return try withSecrets([id], reason: inputs.count > 1 ? "Confirm the transfer and its network fee" : "Confirm the transaction") { records in
      let key = try Self.privateKey(records[0], coin: coin, account: account)
      if let owner = feeOwner, owner != coin.deriveAddress(privateKey: key) {
        throw WalletError.invalid("the fee transfer is not from this wallet")
      }
      return try inputs.map { try Self.signOne($0, key: key, coin: coin) }
    }
  }

  /// Foxsafe's fee wallets and the largest fee one Face ID may pay. Changing
  /// them needs a new app build on purpose: an app update can't redirect fees.
  enum FeePolicy {
    static let tronUSDT = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"
    static let tronFeeWallet = "TRmToStoTAxU414feHAS67w33Qzi4VyEVJ"
    static let maxFee: UInt64 = 5_000_000 // 5 USDT (6 decimals)
  }

  /// Returns the sender if `data` is a valid Foxsafe fee transfer; throws otherwise.
  static func feeTransferOwner(_ data: Data, coin: CoinType) throws -> String {
    guard coin == .tron else { throw WalletError.invalid("a second transaction is allowed only for TRON network fees") }
    let input = try TronSigningInput(serializedBytes: data)
    guard case .transferTrc20Contract(let t)? = input.transaction.contractOneof else {
      throw WalletError.invalid("the second transaction is not a fee transfer")
    }
    guard t.contractAddress == FeePolicy.tronUSDT, t.toAddress == FeePolicy.tronFeeWallet else {
      throw WalletError.invalid("the fee transfer does not go to Foxsafe's fee wallet")
    }
    let digits = t.amount.drop(while: { $0 == 0 })
    guard digits.count <= 8 else { throw WalletError.invalid("the fee is too large") }
    let amount = digits.reduce(UInt64(0)) { $0 << 8 | UInt64($1) }
    guard amount > 0, amount <= FeePolicy.maxFee else { throw WalletError.invalid("the fee is above 5 USDT") }
    return t.ownerAddress
  }

  // MARK: EVM gasless (EIP-7702 + EntryPoint 0.8)

  /// Foxsafe's EVM fee rule, compiled in on purpose: an app update can't change it.
  enum EvmFeePolicy {
    static let entryPoint = "0x4337084d9e255ff0702461cf8895ce9e3b5ff108"
    /// The only contract a wallet may be upgraded to (eth-infinitism Simple7702Account, audited).
    static let delegate = "0xe6Cae83BdE06E4c305530e199D7217f42808555B"
    static let feeWallet = "0x4fe28082398c2ddf89c010785e9acd8604ea9607"
    /// App coin → allowed chain ids (Base also allows Base Sepolia for tests).
    static let chains: [UInt32: [UInt64]] = [60: [1], 20000714: [56], 8453: [8453, 84532], 966: [137], 10042221: [42161], 10000070: [10]]
    /// Chain id → stablecoins that can pay the fee (lowercase) → decimals.
    static let tokens: [UInt64: [String: Int]] = [
      1: ["0xdac17f958d2ee523a2206206994597c13d831ec7": 6, "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": 6],
      56: ["0x55d398326f99059ff775485246999027b3197955": 18, "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d": 18],
      8453: ["0x833589fcd6edb6e08f4c7c32d4f71b54bda02913": 6],
      137: ["0xc2132d05d31c914a87c6611c10748aeb04b58e8f": 6, "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359": 6],
      42161: ["0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9": 6, "0xaf88d065e77c8cc2239327c5edb3a432268e5831": 6],
      10: ["0x94b008aa00579c1307b0ef2c499ad98a8ce58e58": 6, "0x01bff41798a0bcf287b996046ca68b395dbc1071": 6, "0x0b2c639c533813f4aa9d7837caf62653d097ff85": 6],
      84532: ["0x036cbd53842c5426634e7929541ec2318f3dcf7e": 6],
    ]
    static let maxFeeUnits = 5 // whole tokens
  }

  /// Signs a gasless EVM send with ONE Face ID: the EntryPoint 0.8 operation and, on a
  /// wallet's first use, the EIP-7702 upgrade to the built-in Simple7702Account. Refuses unless
  /// the operation is exactly [token.transfer(to, amount), token.transfer(Foxsafe, fee ≤ 5)],
  /// sent by this wallet and paid for by a paymaster (SPEC §7.3).
  /// `request` JSON: {token, to, amount, fee, upgradeNonce (-1 = already upgraded)}.
  func signGaslessEvm(id: String, coin raw: UInt32, typedData: String, request: String, account: UInt32) throws -> String {
    lock.lock(); defer { lock.unlock() }
    let bad = { (why: String) in WalletError.invalid("gasless transfer refused: \(why)") }
    guard let coin = CoinType(rawValue: raw), coin.blockchain == .ethereum, let allowedChains = EvmFeePolicy.chains[raw] else { throw bad("network") }
    guard let td = try JSONSerialization.jsonObject(with: Data(typedData.utf8)) as? [String: Any],
          let domain = td["domain"] as? [String: Any], let message = td["message"] as? [String: Any],
          td["primaryType"] as? String == "PackedUserOperation",
          let req = try JSONSerialization.jsonObject(with: Data(request.utf8)) as? [String: Any] else { throw bad("unreadable") }

    let chainId = (domain["chainId"] as? NSNumber)?.uint64Value ?? UInt64("\(domain["chainId"] ?? "")") ?? 0
    guard allowedChains.contains(chainId),
          (domain["verifyingContract"] as? String)?.lowercased() == EvmFeePolicy.entryPoint,
          domain["name"] as? String == "ERC4337", domain["version"] as? String == "1" else { throw bad("not EntryPoint 0.8 on this network") }
    guard let token = (req["token"] as? String)?.lowercased(), let decimals = EvmFeePolicy.tokens[chainId]?[token],
          let tokenWord = Self.addressWord(token), let toWord = Self.addressWord(req["to"] as? String ?? ""),
          let amount = Self.uint256(req["amount"] as? String ?? ""), let fee = Self.uint256(req["fee"] as? String ?? ""),
          let cap = Self.uint256(String(EvmFeePolicy.maxFeeUnits) + String(repeating: "0", count: decimals)) else { throw bad("parameters") }
    let zero = Data(repeating: 0, count: 32)
    guard amount != zero, fee != zero, fee == cap || fee.lexicographicallyPrecedes(cap) else { throw bad("the fee is above 5") }
    let expected = Self.gaslessCallData(token: tokenWord, to: toWord, amount: amount, fee: fee, feeWallet: Self.addressWord(EvmFeePolicy.feeWallet)!)
    guard (message["callData"] as? String)?.lowercased() == expected else { throw bad("the transaction is not exactly the payment plus Foxsafe's fee") }
    guard let pad = message["paymasterAndData"] as? String, pad.count >= 42 else { throw bad("no paymaster: it would spend your own gas") }
    let upgradeNonce = (req["upgradeNonce"] as? NSNumber)?.int64Value ?? -1
    let initCode = (message["initCode"] as? String ?? "0x").lowercased()
    guard upgradeNonce >= 0 ? initCode == EvmFeePolicy.delegate.lowercased() : (initCode == "0x" || initCode.isEmpty) else { throw bad("unexpected account upgrade") }
    let sender = (message["sender"] as? String ?? "").lowercased()

    return try withSecrets([id], reason: "Confirm the transfer and its network fee") { records in
      let key = try Self.privateKey(records[0], coin: coin, account: account)
      guard sender == coin.deriveAddress(privateKey: key).lowercased() else { throw bad("not sent by this wallet") }
      var sig = EthereumMessageSigner.signTypedMessage(privateKey: key, messageJson: typedData)
      if !sig.hasPrefix("0x") { sig = "0x" + sig }
      guard sig.count == 132 else { throw WalletError.crypto("signing failed") }
      var out: [String: Any] = ["signature": sig]
      if upgradeNonce >= 0 {
        guard let json = Eip7702.signAuthorization(chainId: Self.minimalBytes(chainId), contractAddress: EvmFeePolicy.delegate,
                                                   nonce: Self.minimalBytes(UInt64(upgradeNonce)), privateKey: key.data.hexString),
              let a = try JSONSerialization.jsonObject(with: Data(json.utf8)) as? [String: Any] else { throw WalletError.crypto("upgrade signing failed") }
        out["authorization"] = ["r": a["r"] ?? "", "s": a["s"] ?? "", "yParity": a["yParity"] ?? ""]
      }
      return String(data: try JSONSerialization.data(withJSONObject: out), encoding: .utf8)!
    }
  }

  // MARK: Solana gasless (Pimlico paymaster pays SOL fees and rent)

  /// Foxsafe's Solana fee rule, compiled in on purpose: an app update can't change it.
  enum SolanaFeePolicy {
    static let feeWallet = "3DvVfRtM2SR49P6zkdA59g78BYsjXtnaKgvaUK1CPMnj"
    /// Stablecoin mints that can pay the fee → decimals.
    static let tokens: [String: UInt8] = ["Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB": 6, "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v": 6]
    static let maxFeeUnits: UInt64 = 5 // whole tokens
    static let tokenProgram = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
    static let ataProgram = "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
    static let systemProgram = "11111111111111111111111111111111"
    static let computeBudgetProgram = "ComputeBudget111111111111111111111111111111"
  }

  /// Signs a gasless Solana send with ONE Face ID. The message is rebuilt here from the user's
  /// choices (layout in server/src/gasless/solana/message.ts) and must match the server's byte for
  /// byte: [compute budget, (create receiver / fee account, rent paid by the paymaster),
  /// transferChecked(payment), transferChecked(Foxsafe fee ≤ 5)]. The paymaster is only the fee payer;
  /// the user is a read-only signer (SPEC §7.4). `request` JSON: {to, mint, amount, fee, feePayer,
  /// blockhash, toIsTokenAccount, createRecipient, createFeeAccount, computeUnitLimit, computeUnitPrice}.
  func signGaslessSolana(id: String, messageBase64: String, request: String, account: UInt32) throws -> String {
    lock.lock(); defer { lock.unlock() }
    let bad = { (why: String) in WalletError.invalid("gasless transfer refused: \(why)") }
    guard let message = Data(base64Encoded: messageBase64),
          let req = try JSONSerialization.jsonObject(with: Data(request.utf8)) as? [String: Any] else { throw bad("unreadable") }
    let str = { (k: String) in req[k] as? String ?? "" }
    let num = { (k: String) -> UInt64? in (req[k] as? NSNumber)?.uint64Value ?? UInt64(str(k)) }
    let flag = { (k: String) in (req[k] as? NSNumber)?.boolValue ?? false }
    let mint = str("mint"), to = str("to"), feePayer = str("feePayer"), blockhash = str("blockhash")
    guard let decimals = SolanaFeePolicy.tokens[mint] else { throw bad("this token can't pay the fee") }
    guard let amount = num("amount"), amount > 0, let fee = num("fee"), fee > 0,
          fee <= SolanaFeePolicy.maxFeeUnits * UInt64(pow(10.0, Double(decimals))) else { throw bad("the fee is above 5") }
    guard let cuLimit = num("computeUnitLimit"), cuLimit <= 1_400_000, let cuPrice = num("computeUnitPrice"), cuPrice <= 10_000_000 else { throw bad("compute budget") }
    for k in [to, feePayer, blockhash] where Base58.decodeNoCheck(string: k)?.count != 32 { throw bad("address") }
    if flag("toIsTokenAccount") && flag("createRecipient") { throw bad("inconsistent receiver") }

    return try withSecrets([id], reason: "Confirm the transfer and its network fee") { records in
      let key = try Self.privateKey(records[0], coin: .solana, account: account)
      let user = CoinType.solana.deriveAddress(privateKey: key)
      guard feePayer != user, feePayer != SolanaFeePolicy.feeWallet else { throw bad("the paymaster can't be you or Foxsafe") }
      guard let userAta = SolanaAddress(string: user)?.defaultTokenAddress(tokenMintAddress: mint),
            let feeAta = SolanaAddress(string: SolanaFeePolicy.feeWallet)?.defaultTokenAddress(tokenMintAddress: mint),
            let destination = flag("toIsTokenAccount") ? to : SolanaAddress(string: to)?.defaultTokenAddress(tokenMintAddress: mint) else { throw bad("token accounts") }
      guard destination != userAta, destination != feeAta else { throw bad("receiver") }
      let expected = try Self.gaslessSolanaMessage(
        feePayer: feePayer, user: user, mint: mint, decimals: decimals, userAta: userAta, destination: destination,
        recipientOwner: flag("createRecipient") ? to : nil, feeAta: feeAta, createFeeAccount: flag("createFeeAccount"),
        amount: amount, fee: fee, blockhash: blockhash, cuLimit: UInt32(cuLimit), cuPrice: cuPrice)
      guard expected == message else { throw bad("the transaction is not exactly the payment plus Foxsafe's fee") }
      guard let signature = key.sign(digest: message, curve: .ed25519), signature.count == 64 else { throw WalletError.crypto("signing failed") }
      return Base58.encodeNoCheck(data: signature)
    }
  }

  /// Byte-for-byte twin of server/src/gasless/solana/message.ts (legacy message, fixed account order).
  static func gaslessSolanaMessage(feePayer: String, user: String, mint: String, decimals: UInt8, userAta: String, destination: String,
                                   recipientOwner: String?, feeAta: String, createFeeAccount: Bool, amount: UInt64, fee: UInt64,
                                   blockhash: String, cuLimit: UInt32, cuPrice: UInt64) throws -> Data {
    let P = SolanaFeePolicy.self
    var readonly = [mint, P.tokenProgram, P.computeBudgetProgram]
    if recipientOwner != nil || createFeeAccount { readonly += [P.ataProgram, P.systemProgram] }
    if let owner = recipientOwner { readonly.append(owner) }
    if createFeeAccount { readonly.append(P.feeWallet) }
    let keys = [feePayer, user, userAta, destination, feeAta] + readonly
    guard Set(keys).count == keys.count else { throw WalletError.invalid("gasless transfer refused: accounts must be distinct") }
    func idx(_ k: String) -> UInt8 { UInt8(keys.firstIndex(of: k)!) }
    func compact(_ n: Int) -> Data {
      var out = Data(), v = n
      while true { let b = UInt8(v & 0x7f); v >>= 7; if v == 0 { out.append(b); return out }; out.append(b | 0x80) }
    }
    func le<T: FixedWidthInteger>(_ n: T) -> Data { withUnsafeBytes(of: n.littleEndian) { Data($0) } }
    func ix(_ program: String, _ accounts: [String], _ data: Data) -> Data {
      Data([idx(program)]) + compact(accounts.count) + Data(accounts.map(idx)) + compact(data.count) + data
    }
    func transferChecked(_ dest: String, _ value: UInt64) -> Data { ix(P.tokenProgram, [userAta, mint, dest, user], Data([12]) + le(value) + Data([decimals])) }
    func createAta(_ ata: String, _ owner: String) -> Data { ix(P.ataProgram, [feePayer, ata, owner, mint, P.systemProgram, P.tokenProgram], Data([1])) }
    var instructions = [ix(P.computeBudgetProgram, [], Data([2]) + le(cuLimit)), ix(P.computeBudgetProgram, [], Data([3]) + le(cuPrice))]
    if let owner = recipientOwner { instructions.append(createAta(destination, owner)) }
    if createFeeAccount { instructions.append(createAta(feeAta, P.feeWallet)) }
    instructions += [transferChecked(destination, amount), transferChecked(feeAta, fee)]
    var out = Data([2, 1, UInt8(readonly.count)]) + compact(keys.count)
    for k in keys { guard let b = Base58.decodeNoCheck(string: k), b.count == 32 else { throw WalletError.invalid("bad address") }; out += b }
    guard let hash = Base58.decodeNoCheck(string: blockhash), hash.count == 32 else { throw WalletError.invalid("bad blockhash") }
    out += hash + compact(instructions.count)
    for i in instructions { out += i }
    return out
  }

  /// executeBatch([token.transfer(to, amount), token.transfer(feeWallet, fee)]), ABI-encoded by hand.
  static func gaslessCallData(token: Data, to: Data, amount: Data, fee: Data, feeWallet: Data) -> String {
    func num(_ n: Int) -> Data { var d = Data(repeating: 0, count: 32); d[31] = UInt8(n & 0xff); d[30] = UInt8((n >> 8) & 0xff); return d }
    func transfer(_ a: Data, _ v: Data) -> Data { Data([0xa9, 0x05, 0x9c, 0xbb]) + a + v } // 68 bytes
    func tuple(_ target: Data, _ data: Data) -> Data { target + num(0) + num(0x60) + num(68) + data + Data(repeating: 0, count: 28) }
    let body = Data([0x34, 0xfc, 0xd5, 0xbe]) + num(0x20) + num(2) + num(0x40) + num(0x40 + 224)
      + tuple(token, transfer(to, amount)) + tuple(token, transfer(feeWallet, fee))
    return "0x" + body.hexString
  }

  /// "0x" + 40 hex → 32-byte ABI word.
  static func addressWord(_ a: String) -> Data? {
    let hex = a.lowercased().hasPrefix("0x") ? String(a.dropFirst(2)) : a
    guard hex.count == 40, let d = Data(hexString: hex) else { return nil }
    return Data(repeating: 0, count: 12) + d
  }

  /// Decimal string → 32-byte big-endian word (nil if not a whole number below 2^256).
  static func uint256(_ s: String) -> Data? {
    guard !s.isEmpty, s.count <= 78, s.utf8.allSatisfy({ $0 >= 48 && $0 <= 57 }) else { return nil }
    var bytes = [UInt8](repeating: 0, count: 32)
    for ch in s.utf8 {
      var carry = Int(ch) - 48
      for i in stride(from: 31, through: 0, by: -1) {
        let v = Int(bytes[i]) * 10 + carry
        bytes[i] = UInt8(v & 0xff)
        carry = v >> 8
      }
      if carry != 0 { return nil }
    }
    return Data(bytes)
  }

  static func minimalBytes(_ n: UInt64) -> Data {
    var v = n.bigEndian
    return Data(bytes: &v, count: 8).drop(while: { $0 == 0 })
  }

  private static func signOne(_ input: Data, key: PrivateKey, coin: CoinType) throws -> String {
    if coin.blockchain == .bitcoin || coin.blockchain == .bitcoinCash { return try signBitcoin(input, key: key, coin: coin) }
    let pre = try TxCompilerPreSigningOutput(serializedBytes: TransactionCompiler.preImageHashes(coinType: coin, txInputData: input))
    guard pre.error == .ok else { throw WalletError.invalid("cannot sign: \(pre.errorMessage)") }
    // Solana signs the whole message (pre.data); its pre-image output has a different layout,
    // so the generic dataHash field would hold the signer's key instead (SPEC §7).
    let digest = coin.blockchain == .solana ? pre.data : pre.dataHash
    guard let signature = key.sign(digest: digest, curve: coin.curve) else { throw WalletError.crypto("signing failed") }
    let output = TransactionCompiler.compileWithSignatures(
      coinType: coin, txInputData: input,
      signatures: DataVector(data: signature), publicKeys: DataVector(data: key.getPublicKey(coinType: coin).data)
    )
    return output.base64EncodedString()
  }

  /// Bitcoin family: every UTXO input needs its own signature, so Trust Wallet
  /// Core's Bitcoin signer signs here, inside native code. The change address
  /// and the inputs' locking scripts are forced to the wallet's own address, so
  /// the app layer can't redirect the change (SPEC §7).
  static func signBitcoin(_ data: Data, key: PrivateKey, coin: CoinType) throws -> String {
    var input = try BitcoinSigningInput(serializedBytes: data)
    guard input.coinType == coin.rawValue else { throw WalletError.invalid("bitcoin input is for another coin") }
    let own = coin.deriveAddress(privateKey: key)
    input.changeAddress = own
    let script = BitcoinScript.lockScriptForAddress(address: own, coin: coin).data
    for i in input.utxo.indices { input.utxo[i].script = script }
    input.privateKey = [key.data]
    let out: BitcoinSigningOutput = AnySigner.sign(input: input, coin: coin)
    input.privateKey = []
    guard out.error == .ok else { throw WalletError.invalid("cannot sign: \(out.errorMessage)") }
    return try out.serializedData().base64EncodedString()
  }

  func signMessage(id: String, coin raw: UInt32, message: String, typed: Bool, account: UInt32) throws -> String {
    lock.lock(); defer { lock.unlock() }
    guard let coin = CoinType(rawValue: raw) else { throw WalletError.invalid("unsupported coin") }
    return try withSecrets([id], reason: "Confirm the signature") { records in
      let key = try Self.privateKey(records[0], coin: coin, account: account)
      switch (coin.blockchain, typed) {
      case (.ethereum, false): return EthereumMessageSigner.signMessage(privateKey: key, message: message)
      case (.ethereum, true): return EthereumMessageSigner.signTypedMessage(privateKey: key, messageJson: message)
      case (.tron, false): return TronMessageSigner.signMessage(privateKey: key, message: message)
      default: throw WalletError.invalid("message signing is not supported for this network yet")
      }
    }
  }

  func revealSecret(id: String) throws -> String {
    lock.lock(); defer { lock.unlock() }
    return try withSecrets([id], reason: "Show your secret phrase") { $0[0].words ?? $0[0].keyHex! }
  }

  // MARK: Recovery copy (SPEC §3.2)

  func scanRecovery() throws -> [String: Any] {
    lock.lock(); defer { lock.unlock() }
    let n = try recovery.accounts(prefix: "w.").count
    return ["found": n > 0, "walletCount": n]
  }

  func recoveryHasAddress(_ address: String) throws -> Bool {
    lock.lock(); defer { lock.unlock() }
    return try recovery.accounts(prefix: "i.").contains { try AddressIndex.contains(recovery.get($0) ?? "", address) }
  }

  /// Brings wallets back from the recovery copy with the passcode they were
  /// locked with. If a different passcode is set now, `currentPasscode` is
  /// needed to re-lock the restored entries with it.
  func restore(passcode: String, currentPasscode: String?) throws -> [[String: Any]] {
    lock.lock(); defer { lock.unlock() }
    let cache = KeyCache()
    var opened: [(account: String, records: [Record], env: Envelope.Parsed)] = []
    for account in try recovery.accounts(prefix: "w.") {
      guard let json = try recovery.get(account), let env = try? Envelope.parse(json) else { continue }
      if let data = try? Envelope.open(json, .passcode(passcode), expect: .recovery, cache: cache) {
        opened.append((account, try Self.decodeVault(data), env))
      }
    }
    guard !opened.isEmpty else { throw WalletError.passcode("wrong passcode, or nothing to recover") }

    let hasPasscode = try main.get("passcode") != nil
    var lockWith = passcode
    if !hasPasscode {
      if case let .argon2id(m, t, salt) = opened[0].env.kdf { try writePasscode(passcode, recoverySalt: (salt, m, t)) }
    } else if !(try checkPasscode(passcode)) {
      guard let current = currentPasscode, try checkPasscode(current) else {
        throw WalletError.passcode("enter the current passcode to re-lock the recovered wallets")
      }
      lockWith = current
    }

    let existing = Set(try main.accounts(prefix: "w."))
    var restored: [[String: Any]] = []
    for item in opened {
      for r in item.records where !existing.contains("w.\(r.id)") {
        let needsReseal: Bool = {
          guard case let .argon2id(_, _, salt) = item.env.kdf, let meta = try? recoveryMeta() else { return true }
          return lockWith != passcode || salt != meta.salt
        }()
        // Bring back the names, networks and backup state the user had.
        var rec = r
        var keep: Info? = nil
        if let label = readLabel(r.id) {
          rec.name = label.name
          rec.accounts = r.accounts.map { a in label.accounts.first { $0.index == a.index }.map { Info.Account(index: a.index, name: $0.name) } ?? a }
          keep = Info(id: rec.id, name: label.name, kind: rec.kind, secretType: rec.words != nil ? "mnemonic" : "privateKey", coins: label.coins,
                      createdAt: rec.createdAt, backup: label.backup, accounts: rec.accounts, solanaPath: rec.words != nil ? rec.solanaPath : nil)
        }
        restored.append(try store(rec, passcode: lockWith, cache: cache, writeRecovery: needsReseal, keep: keep).info.dict)
      }
    }
    return restored
  }

  func deleteRecovery() throws {
    lock.lock(); defer { lock.unlock() }
    try recovery.deleteAll()
  }

  // MARK: Backups to the user's own cloud (SPEC §3.3)

  func exportBackup(ids: [String], source: Envelope.Source) throws -> String {
    lock.lock(); defer { lock.unlock() }
    guard !ids.isEmpty else { throw WalletError.invalid("choose at least one wallet") }
    return try withSecrets(ids, reason: "Back up your wallet") { try Envelope.seal(.backup, Self.encodeVault($0), source) }
  }

  func importBackup(_ json: String, source: Envelope.Source, passcode: String) throws -> [[String: Any]] {
    lock.lock(); defer { lock.unlock() }
    try requirePasscode(passcode)
    let records = try Self.decodeVault(Envelope.open(json, source, expect: .backup))
    let existing = Set(try main.accounts(prefix: "w."))
    let cache = KeyCache()
    return try records.filter { !existing.contains("w.\($0.id)") }.map { try store($0, passcode: passcode, cache: cache).info.dict }
  }

  // MARK: Backup password (SPEC §3.4)

  /// The backup password's Argon2id key, kept on this phone locked with the app passcode, so the
  /// backup file can be rebuilt whenever wallets change without asking for the password again.
  private struct BackupSetting: Codable { var v: Int; var salt: String; var m: Int; var t: Int; var key: String }
  static let minBackupPasswordLength = 8

  private func backupSetting() throws -> BackupSetting? {
    guard let raw = try main.get("backup") else { return nil }
    guard let b = try? JSONDecoder().decode(BackupSetting.self, from: Data(raw.utf8)) else { throw WalletError.invalid("backup setting is damaged") }
    return b
  }

  func hasBackupPassword() throws -> Bool {
    lock.lock(); defer { lock.unlock() }
    return try main.get("backup") != nil
  }

  /// Sets or replaces the backup password. Backups made with an earlier password keep that password.
  func setBackupPassword(_ password: String, passcode: String) throws {
    lock.lock(); defer { lock.unlock() }
    guard password.count >= Self.minBackupPasswordLength else { throw WalletError.invalid("the backup password needs at least \(Self.minBackupPasswordLength) characters") }
    try requirePasscode(passcode)
    let (m, t) = Envelope.defaultArgon2
    let salt = Envelope.random(16)
    var key = try Envelope.argon2id(password, salt: salt, m: m, t: t).withUnsafeBytes { Data($0) }
    defer { key.resetBytes(in: 0..<key.count) }
    let meta = try recoveryMeta()
    let sealed = try Envelope.seal(.recovery, key, .passcode(passcode), salt: Data(base64Encoded: meta.salt)!, argon2: (meta.m, meta.t))
    let b = BackupSetting(v: 1, salt: salt.base64EncodedString(), m: m, t: t, key: sealed)
    try main.set(String(decoding: try JSONEncoder().encode(b), as: UTF8.self), for: "backup")
  }

  /// A backup envelope with every wallet on this phone, locked with the backup password.
  /// Needs only the app passcode (secrets come from the passcode-locked recovery copy, no Face ID).
  func buildBackup(passcode: String) throws -> String {
    lock.lock(); defer { lock.unlock() }
    guard let b = try backupSetting() else { throw WalletError.invalid("set a backup password first") }
    let cache = KeyCache()
    var key: Data
    do { key = try Envelope.open(b.key, .passcode(passcode), expect: .recovery, cache: cache) } catch { throw WalletError.passcode("wrong passcode") }
    defer { key.resetBytes(in: 0..<key.count) }
    let records = try main.accounts(prefix: "w.").sorted().map { account -> Record in
      guard let entry = try recovery.get(account) else { throw WalletError.notFound("no recovery entry for \(account)") }
      guard let r = try Self.decodeVault(Envelope.open(entry, .passcode(passcode), expect: .recovery, cache: cache)).first else {
        throw WalletError.crypto("empty recovery entry")
      }
      let info = try load(String(account.dropFirst(2))).info
      var out = Self.withCurrentNames(r, info)
      out.name = info.name
      return out
    }
    guard !records.isEmpty else { throw WalletError.invalid("there are no wallets to back up") }
    return try Envelope.seal(.backup, Self.encodeVault(records), .derived(key), salt: Data(base64Encoded: b.salt)!, argon2: (b.m, b.t))
  }

  // MARK: Logout

  func wipe(keepRecovery: Bool) throws {
    lock.lock(); defer { lock.unlock() }
    try main.deleteAll()
    try WrappingKey.delete()
    if !keepRecovery { try recovery.deleteAll() }
  }

  // MARK: Helpers that never touch stored secrets

  /// Addresses for a phrase the caller already has (import preview, tests).
  static func previewAddresses(words: String, passphrase: String?, coins: [UInt32], account: UInt32, solanaPath: String) throws -> [[String: Any]] {
    try previewAccounts(words: words, passphrase: passphrase, coins: coins, from: account, count: 1, solanaPath: solanaPath)[0]["addresses"] as! [[String: Any]]
  }

  /// Addresses of `count` accounts from `from`, for finding used accounts before an import.
  static func previewAccounts(words: String, passphrase: String?, coins: [UInt32], from: UInt32, count: Int, solanaPath: String) throws -> [[String: Any]] {
    guard solanaPaths.contains(solanaPath) else { throw WalletError.invalid("solanaPath must be phantom or trust") }
    guard count >= 1, count <= 100, UInt64(from) + UInt64(count) <= 0x8000_0000 else { throw WalletError.invalid("bad account range") }
    let normalized = words.lowercased().split(whereSeparator: \.isWhitespace).joined(separator: " ")
    guard let hd = HDWallet(mnemonic: normalized, passphrase: passphrase ?? "") else { throw WalletError.invalid("this secret phrase is not valid") }
    let list = coins.isEmpty ? CoinType.allCases : coins.compactMap { CoinType(rawValue: $0) }
    return try (0..<UInt32(count)).map { n in
      let account = from + n
      return ["account": account, "addresses": try list.map {
        ["coin": $0.rawValue, "address": try address(hd, $0, account, solanaPath), "derivationPath": try accountPath($0, account, solanaPath)]
      }]
    }
  }

  /// SHA-256 of an envelope's plaintext, for cross-platform test vectors.
  static func envelopeDigest(_ json: String, source: Envelope.Source) throws -> String {
    SHA256.hash(data: try Envelope.open(json, source)).map { String(format: "%02x", $0) }.joined()
  }
}

// MARK: - Address index (SPEC §5)

enum AddressIndex {
  static func normalise(_ address: String) -> String {
    let a = address.trimmingCharacters(in: .whitespacesAndNewlines)
    if a.lowercased().hasPrefix("0x") || a == a.lowercased() || a == a.uppercased() { return a.lowercased() }
    return a
  }

  private static func hash(_ salt: Data, _ address: String) -> String {
    SHA256.hash(data: salt + Data(normalise(address).utf8)).map { String(format: "%02x", $0) }.joined()
  }

  static func build(_ addresses: [String]) -> String {
    let salt = Envelope.random(16)
    let hashes = Array(Set(addresses.map { hash(salt, $0) })).sorted()
    let json: [String: Any] = ["v": 1, "salt": salt.base64EncodedString(), "hashes": hashes]
    return String(decoding: try! JSONSerialization.data(withJSONObject: json, options: [.sortedKeys]), as: UTF8.self)
  }

  static func contains(_ indexJson: String, _ address: String) -> Bool {
    guard !address.trimmingCharacters(in: .whitespaces).isEmpty,
          let obj = try? JSONSerialization.jsonObject(with: Data(indexJson.utf8)) as? [String: Any],
          (obj["v"] as? NSNumber)?.intValue == 1, let s = obj["salt"] as? String, let salt = Data(base64Encoded: s),
          let hashes = obj["hashes"] as? [String] else { return false }
    return hashes.contains(hash(salt, address))
  }
}
