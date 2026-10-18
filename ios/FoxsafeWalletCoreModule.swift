import ExpoModulesCore
import WalletCore

final class WalletException: GenericException<String> {
  override var reason: String { param }
}

/// Runs a store call and turns its errors into JavaScript errors with a
/// stable code prefix (ENVELOPE_AUTH, PASSCODE, INVALID …).
private func run<T>(_ body: () throws -> T) throws -> T {
  do { return try body() } catch let e as WalletError { throw WalletException(e.description) }
}

struct CreateWalletOptions: Record {
  @Field var name: String = ""
  @Field var kind: String = "multi"
  @Field var coin: Int? = nil
  @Field var wordCount: Int = 12
  @Field var coins: [Int]? = nil
  @Field var passcode: String = ""
}

struct ImportMnemonicOptions: Record {
  @Field var name: String = ""
  @Field var words: String = ""
  @Field var passphrase: String? = nil
  @Field var kind: String = "multi"
  @Field var coin: Int? = nil
  @Field var coins: [Int]? = nil
  @Field var passcode: String = ""
}

struct ImportPrivateKeyOptions: Record {
  @Field var name: String = ""
  @Field var privateKey: String = ""
  @Field var coin: Int = 0
  @Field var passcode: String = ""
}

/// { type: 'password', password } or { type: 'prf', prf: base64 }
struct LockOptions: Record {
  @Field var type: String = ""
  @Field var password: String? = nil
  @Field var prf: String? = nil

  func source() throws -> Envelope.Source {
    switch type {
    case "password":
      guard let password, password.count >= 8 else { throw WalletError.passcode("backup password needs at least 8 characters") }
      return .passcode(password)
    case "prf":
      guard let prf, let data = Data(base64Encoded: prf) else { throw WalletError.invalid("bad passkey output") }
      return .prf(data)
    default:
      throw WalletError.invalid("lock type must be password or prf")
    }
  }
}

/// Test-vector helper input: { passcode } | { prfHex } | { keyHex }
struct VectorSecret: Record {
  @Field var passcode: String? = nil
  @Field var prfHex: String? = nil
  @Field var keyHex: String? = nil

  func source() throws -> Envelope.Source {
    if let passcode { return .passcode(passcode) }
    if let prfHex, let d = Data(hexString: prfHex) { return .prf(d) }
    if let keyHex, let d = Data(hexString: keyHex) { return .key(d) }
    throw WalletError.invalid("no secret given")
  }
}

private func u32(_ v: Int) throws -> UInt32 {
  guard let c = UInt32(exactly: v), CoinType(rawValue: c) != nil else { throw WalletError.invalid("unsupported coin \(v)") }
  return c
}

public class FoxsafeWalletCoreModule: Module {
  private let store = WalletStore.shared

  public func definition() -> ModuleDefinition {
    Name("FoxsafeWalletCore")

    OnCreate { WalletStore.shared.prepareFirstLaunch() }

    // Plain checks (no secrets)
    Function("isHardwareBacked") { WrappingKey.isHardwareBacked }
    Function("validateMnemonic") { (words: String) -> Bool in
      Mnemonic.isValid(mnemonic: words.lowercased().split(whereSeparator: \.isWhitespace).joined(separator: " "))
    }
    Function("validateAddress") { (address: String, coin: Int) -> Bool in
      guard let c = UInt32(exactly: coin), let type = CoinType(rawValue: c) else { return false }
      return AnyAddress.isValid(string: address, coin: type)
    }

    // Passcode
    AsyncFunction("hasPasscode") { try run { try self.store.hasPasscode() } }
    AsyncFunction("setPasscode") { (p: String) in try run { try self.store.setPasscode(p) } }
    AsyncFunction("verifyPasscode") { (p: String) in try run { try self.store.verifyPasscode(p) } }
    AsyncFunction("changePasscode") { (old: String, new: String) in try run { try self.store.changePasscode(old: old, new: new) } }

    // Wallets
    AsyncFunction("createWallet") { (o: CreateWalletOptions) in
      try run {
        try self.store.createWallet(name: o.name, kind: o.kind, coin: try o.coin.map(u32), wordCount: o.wordCount,
                                    coins: try o.coins?.map(u32), passcode: o.passcode)
      }
    }
    AsyncFunction("importMnemonic") { (o: ImportMnemonicOptions) in
      try run {
        try self.store.importMnemonic(name: o.name, words: o.words, passphrase: o.passphrase, kind: o.kind,
                                      coin: try o.coin.map(u32), coins: try o.coins?.map(u32), passcode: o.passcode)
      }
    }
    AsyncFunction("importPrivateKey") { (o: ImportPrivateKeyOptions) in
      try run { try self.store.importPrivateKey(name: o.name, privateKey: o.privateKey, coin: try u32(o.coin), passcode: o.passcode) }
    }
    AsyncFunction("listWallets") { try run { try self.store.list() } }
    AsyncFunction("renameWallet") { (id: String, name: String) in
      try run { try self.store.update(id: id) { $0.name = name } }
    }
    AsyncFunction("setCoins") { (id: String, coins: [Int]) in
      try run { try self.store.setCoins(id: id, coins: try coins.map(u32)) }
    }
    AsyncFunction("deleteWallet") { (id: String, passcode: String) in try run { try self.store.delete(id: id, passcode: passcode) } }
    AsyncFunction("getAddresses") { (id: String, coins: [Int]) in
      try run { try self.store.addresses(id: id, coins: try coins.map(u32)) }
    }
    AsyncFunction("markBackedUp") { (id: String, method: String) in
      try run {
        try self.store.update(id: id) { info in
          switch method {
          case "manual": info.backup.manual = true
          case "cloud": info.backup.cloud = true
          default: throw WalletError.invalid("method must be manual or cloud")
          }
        }
      }
    }

    // Signing and showing the phrase (ask for Face ID / passcode on device)
    AsyncFunction("signTransaction") { (id: String, coin: Int, input: String) in
      try run { try self.store.signTransaction(id: id, coin: try u32(coin), inputBase64: input) }
    }
    AsyncFunction("signMessage") { (id: String, coin: Int, message: String) in
      try run { try self.store.signMessage(id: id, coin: try u32(coin), message: message, typed: false) }
    }
    AsyncFunction("signTypedData") { (id: String, coin: Int, json: String) in
      try run { try self.store.signMessage(id: id, coin: try u32(coin), message: json, typed: true) }
    }
    AsyncFunction("revealSecret") { (id: String) in try run { try self.store.revealSecret(id: id) } }

    // On-phone recovery
    AsyncFunction("scanRecovery") { try run { try self.store.scanRecovery() } }
    AsyncFunction("recoveryHasAddress") { (address: String) in try run { try self.store.recoveryHasAddress(address) } }
    AsyncFunction("restoreFromRecovery") { (passcode: String, currentPasscode: String?) in
      try run { try self.store.restore(passcode: passcode, currentPasscode: currentPasscode) }
    }
    AsyncFunction("deleteRecovery") { try run { try self.store.deleteRecovery() } }

    // Backups
    AsyncFunction("exportBackup") { (ids: [String], lock: LockOptions) in
      try run { try self.store.exportBackup(ids: ids, source: try lock.source()) }
    }
    AsyncFunction("importBackup") { (envelope: String, lock: LockOptions, passcode: String) in
      try run { try self.store.importBackup(envelope, source: try lock.source(), passcode: passcode) }
    }

    // Logout
    AsyncFunction("wipe") { (keepRecovery: Bool) in try run { try self.store.wipe(keepRecovery: keepRecovery) } }

    // Helpers that never read stored secrets
    AsyncFunction("previewAddresses") { (words: String, passphrase: String?, coins: [Int]) in
      try run { try WalletStore.previewAddresses(words: words, passphrase: passphrase, coins: try coins.map(u32)) }
    }
    AsyncFunction("envelopeDigest") { (json: String, secret: VectorSecret) in
      try run { try WalletStore.envelopeDigest(json, source: try secret.source()) }
    }
  }
}
