import Foundation
import LocalAuthentication
import Security

enum WalletError: Error, CustomStringConvertible {
  case envelope(String, String) // code, message
  case crypto(String)
  case invalid(String)
  case notFound(String)
  case passcode(String)
  case keychain(OSStatus)

  var description: String {
    switch self {
    case let .envelope(code, msg): return "ENVELOPE_\(code.uppercased()): \(msg)"
    case let .crypto(msg): return "CRYPTO: \(msg)"
    case let .invalid(msg): return "INVALID: \(msg)"
    case let .notFound(msg): return "NOT_FOUND: \(msg)"
    case let .passcode(msg): return "PASSCODE: \(msg)"
    case let .keychain(status): return "KEYCHAIN: \(status) \(SecCopyErrorMessageString(status, nil) as String? ?? "")"
    }
  }
}

/// Generic-password Keychain items, always "this device only" so nothing is
/// copied to iCloud or to another phone (SPEC §3).
struct KeychainStore {
  let service: String
  let accessible: CFString

  /// Main copy: only readable while the phone is unlocked.
  static let main = KeychainStore(service: "app.foxsafe.wallet", accessible: kSecAttrAccessibleWhenUnlockedThisDeviceOnly)
  /// Recovery copy: survives uninstalling the app (SPEC §3.2).
  static let recovery = KeychainStore(service: "app.foxsafe.recovery", accessible: kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly)

  private func base(_ account: String? = nil) -> [String: Any] {
    var q: [String: Any] = [kSecClass as String: kSecClassGenericPassword, kSecAttrService as String: service]
    if let account { q[kSecAttrAccount as String] = account }
    q[kSecAttrSynchronizable as String] = kCFBooleanFalse
    return q
  }

  func set(_ value: String, for account: String) throws {
    let data = Data(value.utf8)
    let update = SecItemUpdate(base(account) as CFDictionary, [kSecValueData as String: data] as CFDictionary)
    if update == errSecSuccess { return }
    guard update == errSecItemNotFound else { throw WalletError.keychain(update) }
    var add = base(account)
    add[kSecValueData as String] = data
    add[kSecAttrAccessible as String] = accessible
    let status = SecItemAdd(add as CFDictionary, nil)
    guard status == errSecSuccess else { throw WalletError.keychain(status) }
  }

  func get(_ account: String) throws -> String? {
    var q = base(account)
    q[kSecReturnData as String] = true
    q[kSecMatchLimit as String] = kSecMatchLimitOne
    var out: CFTypeRef?
    let status = SecItemCopyMatching(q as CFDictionary, &out)
    if status == errSecItemNotFound { return nil }
    guard status == errSecSuccess, let data = out as? Data else { throw WalletError.keychain(status) }
    return String(decoding: data, as: UTF8.self)
  }

  func accounts(prefix: String) throws -> [String] {
    var q = base()
    q[kSecReturnAttributes as String] = true
    q[kSecMatchLimit as String] = kSecMatchLimitAll
    var out: CFTypeRef?
    let status = SecItemCopyMatching(q as CFDictionary, &out)
    if status == errSecItemNotFound { return [] }
    guard status == errSecSuccess, let items = out as? [[String: Any]] else { throw WalletError.keychain(status) }
    return items.compactMap { $0[kSecAttrAccount as String] as? String }.filter { $0.hasPrefix(prefix) }.sorted()
  }

  func delete(_ account: String) throws {
    let status = SecItemDelete(base(account) as CFDictionary)
    guard status == errSecSuccess || status == errSecItemNotFound else { throw WalletError.keychain(status) }
  }

  func deleteAll() throws {
    let status = SecItemDelete(base() as CFDictionary)
    guard status == errSecSuccess || status == errSecItemNotFound else { throw WalletError.keychain(status) }
  }
}

/// The hardware key that protects every wallet's data key (SPEC §3.1).
/// On a real iPhone it is a Secure Enclave P-256 key that cannot leave the chip
/// and needs Face ID / Touch ID / the device passcode for each use. The
/// simulator has no Secure Enclave, so there it is an ordinary Keychain key.
enum WrappingKey {
  static let tag = Data("app.foxsafe.wallet.wrapkey".utf8)
  static let algorithm = SecKeyAlgorithm.eciesEncryptionCofactorVariableIVX963SHA256AESGCM

  static var isHardwareBacked: Bool {
    #if targetEnvironment(simulator)
      return false
    #else
      return true
    #endif
  }

  private static func query(context: LAContext?) -> [String: Any] {
    var q: [String: Any] = [
      kSecClass as String: kSecClassKey,
      kSecAttrApplicationTag as String: tag,
      kSecAttrKeyType as String: kSecAttrKeyTypeECSECPrimeRandom,
      kSecReturnRef as String: true,
    ]
    if let context { q[kSecUseAuthenticationContext as String] = context }
    return q
  }

  private static func existing(context: LAContext?) throws -> SecKey? {
    var out: CFTypeRef?
    let status = SecItemCopyMatching(query(context: context) as CFDictionary, &out)
    if status == errSecItemNotFound { return nil }
    guard status == errSecSuccess else { throw WalletError.keychain(status) }
    return (out as! SecKey)
  }

  private static func create() throws -> SecKey {
    var error: Unmanaged<CFError>?
    #if targetEnvironment(simulator)
      let flags: SecAccessControlCreateFlags = []
    #else
      let flags: SecAccessControlCreateFlags = [.privateKeyUsage, .userPresence]
    #endif
    guard let access = SecAccessControlCreateWithFlags(nil, kSecAttrAccessibleWhenUnlockedThisDeviceOnly, flags, &error) else {
      throw WalletError.crypto("access control: \(error!.takeRetainedValue())")
    }
    var attrs: [String: Any] = [
      kSecAttrKeyType as String: kSecAttrKeyTypeECSECPrimeRandom,
      kSecAttrKeySizeInBits as String: 256,
      kSecPrivateKeyAttrs as String: [
        kSecAttrIsPermanent as String: true,
        kSecAttrApplicationTag as String: tag,
        kSecAttrAccessControl as String: access,
      ] as [String: Any],
    ]
    #if !targetEnvironment(simulator)
      attrs[kSecAttrTokenID as String] = kSecAttrTokenIDSecureEnclave
    #endif
    guard let key = SecKeyCreateRandomKey(attrs as CFDictionary, &error) else {
      throw WalletError.crypto("could not create the wrapping key: \(error!.takeRetainedValue())")
    }
    return key
  }

  /// Encrypting only needs the public half: no Face ID prompt.
  static func wrap(_ dataKey: Data) throws -> Data {
    let priv = try existing(context: nil) ?? create()
    guard let pub = SecKeyCopyPublicKey(priv) else { throw WalletError.crypto("no public key") }
    var error: Unmanaged<CFError>?
    guard let out = SecKeyCreateEncryptedData(pub, algorithm, dataKey as CFData, &error) else {
      throw WalletError.crypto("wrap failed: \(error!.takeRetainedValue())")
    }
    return out as Data
  }

  /// Decrypting uses the private half inside the Secure Enclave: iOS asks for
  /// Face ID / Touch ID / the device passcode (once per LAContext).
  static func unwrap(_ wrapped: Data, context: LAContext) throws -> Data {
    guard let priv = try existing(context: context) else { throw WalletError.notFound("wrapping key missing") }
    var error: Unmanaged<CFError>?
    guard let out = SecKeyCreateDecryptedData(priv, algorithm, wrapped as CFData, &error) else {
      throw WalletError.crypto("unlock cancelled or failed: \(error!.takeRetainedValue())")
    }
    return out as Data
  }

  static func delete() throws {
    let q: [String: Any] = [kSecClass as String: kSecClassKey, kSecAttrApplicationTag as String: tag]
    let status = SecItemDelete(q as CFDictionary)
    guard status == errSecSuccess || status == errSecItemNotFound else { throw WalletError.keychain(status) }
  }
}
