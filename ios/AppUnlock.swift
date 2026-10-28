import Foundation
import LocalAuthentication
import Security

/// Opening the app with Face ID / Touch ID instead of typing the passcode.
///
/// This only opens the app: it never touches wallet keys (sending still asks
/// for Face ID through the wallet's own key). It uses its own Secure Enclave
/// key that only biometrics can use (not the iPhone passcode), and that iOS
/// cancels when a face or finger is added or removed. Foxsafe then asks for its
/// passcode and the user turns Face ID on again, so someone who adds their own
/// face to the phone can't open Foxsafe.
enum AppUnlock {
  private static let tag = Data("app.foxsafe.unlockkey".utf8)
  /// Face ID / Touch ID enrolment when unlock was turned on (a second check besides the key itself).
  private static let domainAccount = "unlock.domain"

  /// kind: faceID | touchID | none; ready: set up and allowed for Foxsafe; enabled: turned on in Foxsafe.
  static func status() -> [String: Any] {
    let c = LAContext()
    var error: NSError?
    let ready = c.canEvaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, error: &error)
    let kind: String
    switch c.biometryType {
    case .faceID: kind = "faceID"
    case .touchID: kind = "touchID"
    default: kind = "none"
    }
    return ["kind": kind, "ready": ready, "enabled": (try? key()) != nil]
  }

  /// Creates the key and checks it once with Face ID. Returns the same answers as `unlock`;
  /// anything but "ok" leaves Face ID unlock off.
  static func enable(reason: String) throws -> String {
    disable()
    let c = LAContext()
    var error: NSError?
    guard c.canEvaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, error: &error) else { return "unavailable" }
    var cfError: Unmanaged<CFError>?
    #if targetEnvironment(simulator)
      let flags: SecAccessControlCreateFlags = [.biometryCurrentSet]
    #else
      let flags: SecAccessControlCreateFlags = [.privateKeyUsage, .biometryCurrentSet]
    #endif
    guard let access = SecAccessControlCreateWithFlags(nil, kSecAttrAccessibleWhenPasscodeSetThisDeviceOnly, flags, &cfError) else {
      throw WalletError.crypto("access control: \(cfError!.takeRetainedValue())")
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
    guard SecKeyCreateRandomKey(attrs as CFDictionary, &cfError) != nil else {
      throw WalletError.crypto("could not create the unlock key: \(cfError!.takeRetainedValue())")
    }
    if let state = c.evaluatedPolicyDomainState {
      try KeychainStore.main.set(state.base64EncodedString(), for: domainAccount)
    }
    let result = try unlock(reason: reason)
    if result != "ok" { disable() }
    return result
  }

  /// Shows Face ID and proves the unlock key still works (signs a random challenge).
  /// ok | cancel (user chose the passcode) | lockout (too many tries) | failed |
  /// changed (a face or finger was added: unlock is now off) | off (not turned on) | unavailable
  static func unlock(reason: String) throws -> String {
    guard try key() != nil else { return "off" }
    let c = LAContext()
    c.localizedFallbackTitle = "Use Passcode"
    c.localizedCancelTitle = "Cancel"
    var error: NSError?
    guard c.canEvaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, error: &error) else {
      if (error as? LAError)?.code == .biometryLockout { return "lockout" }
      return "unavailable"
    }
    // Faces or fingers changed since it was turned on: off until the user turns it on again.
    if let saved = try KeychainStore.main.get(domainAccount), let now = c.evaluatedPolicyDomainState,
       Data(base64Encoded: saved) != now {
      disable()
      return "changed"
    }

    let done = DispatchSemaphore(value: 0)
    var ok = false
    var laError: LAError.Code?
    c.evaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, localizedReason: reason) { success, e in
      ok = success
      laError = (e as? LAError)?.code
      done.signal()
    }
    done.wait()
    defer { c.invalidate() }
    guard ok else {
      switch laError {
      case .userCancel?, .userFallback?, .systemCancel?, .appCancel?: return "cancel"
      case .biometryLockout?: return "lockout"
      default: return "failed"
      }
    }

    // The same context is already approved, so this doesn't ask again. If iOS cancelled the
    // key (biometrics changed), signing fails here.
    guard let priv = try key(context: c), let pub = SecKeyCopyPublicKey(priv) else { disable(); return "changed" }
    var challenge = Data(count: 32)
    let rnd = challenge.withUnsafeMutableBytes { SecRandomCopyBytes(kSecRandomDefault, 32, $0.baseAddress!) }
    guard rnd == errSecSuccess else { throw WalletError.crypto("no random bytes") }
    var cfError: Unmanaged<CFError>?
    guard let sig = SecKeyCreateSignature(priv, .ecdsaSignatureMessageX962SHA256, challenge as CFData, &cfError),
          SecKeyVerifySignature(pub, .ecdsaSignatureMessageX962SHA256, challenge as CFData, sig, &cfError) else {
      disable()
      return "changed"
    }
    return "ok"
  }

  static func disable() {
    let q: [String: Any] = [kSecClass as String: kSecClassKey, kSecAttrApplicationTag as String: tag]
    SecItemDelete(q as CFDictionary)
    try? KeychainStore.main.delete(domainAccount)
  }

  private static func key(context: LAContext? = nil) throws -> SecKey? {
    var q: [String: Any] = [
      kSecClass as String: kSecClassKey,
      kSecAttrApplicationTag as String: tag,
      kSecAttrKeyType as String: kSecAttrKeyTypeECSECPrimeRandom,
      kSecReturnRef as String: true,
    ]
    if let context { q[kSecUseAuthenticationContext as String] = context }
    var out: CFTypeRef?
    let status = SecItemCopyMatching(q as CFDictionary, &out)
    if status == errSecItemNotFound { return nil }
    guard status == errSecSuccess else { throw WalletError.keychain(status) }
    return (out as! SecKey)
  }
}
