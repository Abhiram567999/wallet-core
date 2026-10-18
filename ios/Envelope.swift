import CryptoKit
import Foundation

/// Foxsafe envelope format v1 (docs/SPEC.md §4). Must stay byte-compatible with
/// src/envelope.ts; test/vectors/envelopes.json pins that down.
enum Envelope {
  enum Kind: String { case device, recovery, backup }

  enum Source {
    case passcode(String)
    case prf(Data)
    case key(Data)
  }

  enum Kdf: Equatable {
    case argon2id(m: Int, t: Int, salt: String)
    case hkdf(salt: String)
    case none
  }

  struct Parsed {
    let kind: Kind
    let kdf: Kdf
    let iv: String
    let ct: String
  }

  static let defaultArgon2 = (m: 65536, t: 3)
  static let hkdfInfo = Data("foxsafe-envelope-v1".utf8)

  // MARK: Parsing (every check runs before any expensive work)

  static func parse(_ json: String) throws -> Parsed {
    guard let data = json.data(using: .utf8),
          let e = try? JSONSerialization.jsonObject(with: data) as? [String: Any]
    else { throw WalletError.envelope("format", "not JSON") }
    guard e["format"] as? String == "foxsafe-envelope" else { throw WalletError.envelope("format", "not a Foxsafe envelope") }
    guard (e["v"] as? NSNumber)?.intValue == 1 else { throw WalletError.envelope("format", "unsupported version") }
    guard let kindRaw = e["kind"] as? String, let kind = Kind(rawValue: kindRaw) else { throw WalletError.envelope("format", "unknown kind") }
    guard e["cipher"] as? String == "aes-256-gcm" else { throw WalletError.envelope("params", "unsupported cipher") }
    let iv = try b64(e["iv"], field: "iv", length: 12...12)
    let ct = try b64(e["ct"], field: "ct", length: 16...(16 * 1024 * 1024))
    guard let k = e["kdf"] as? [String: Any], let alg = k["alg"] as? String else { throw WalletError.envelope("format", "kdf missing") }

    let kdf: Kdf
    switch alg {
    case "argon2id":
      guard (k["version"] as? NSNumber)?.intValue == 19 else { throw WalletError.envelope("params", "argon2 version must be 19") }
      guard let m = int(k["m"]), (19456...1_048_576).contains(m) else { throw WalletError.envelope("params", "argon2 memory out of range") }
      guard let t = int(k["t"]), (2...10).contains(t) else { throw WalletError.envelope("params", "argon2 iterations out of range") }
      guard int(k["p"]) == 1 else { throw WalletError.envelope("params", "argon2 parallelism must be 1") }
      kdf = .argon2id(m: m, t: t, salt: try b64(k["salt"], field: "kdf.salt", length: 16...16).text)
    case "hkdf-sha256":
      kdf = .hkdf(salt: try b64(k["salt"], field: "kdf.salt", length: 16...64).text)
    case "none":
      kdf = .none
    default:
      throw WalletError.envelope("params", "unknown kdf")
    }
    return Parsed(kind: kind, kdf: kdf, iv: iv.text, ct: ct.text)
  }

  private static func int(_ v: Any?) -> Int? {
    guard let n = v as? NSNumber, CFGetTypeID(n) != CFBooleanGetTypeID() else { return nil }
    let d = n.doubleValue
    return d.rounded() == d ? n.intValue : nil
  }

  /// Strict standard base64: must re-encode to the same text (canonical AAD).
  private static func b64(_ v: Any?, field: String, length: ClosedRange<Int>) throws -> (text: String, data: Data) {
    guard let text = v as? String else { throw WalletError.envelope("format", "\(field) missing") }
    guard let data = Data(base64Encoded: text), data.base64EncodedString() == text else {
      throw WalletError.envelope("format", "\(field) is not canonical base64")
    }
    guard length.contains(data.count) else { throw WalletError.envelope("params", "\(field) has wrong length") }
    return (text, data)
  }

  // MARK: Associated data

  static func aad(kind: Kind, kdf: Kdf, iv: String) -> Data {
    let k: String
    switch kdf {
    case let .argon2id(m, t, salt): k = "argon2id|19|\(m)|\(t)|1|\(salt)"
    case let .hkdf(salt): k = "hkdf-sha256|\(salt)"
    case .none: k = "none"
    }
    return Data("foxsafe-envelope|1|\(kind.rawValue)|\(k)|\(iv)".utf8)
  }

  // MARK: Keys

  /// Argon2id, version 0x13, parallelism 1, 32-byte output (RFC 9106),
  /// using the vendored reference implementation (Argon2/README.md).
  static func argon2id(_ passcode: String, salt: Data, m: Int, t: Int) throws -> SymmetricKey {
    var password = Array(passcode.utf8)
    defer { password.withUnsafeMutableBufferPointer { $0.update(repeating: 0) } }
    var out = [UInt8](repeating: 0, count: 32)
    defer { out.withUnsafeMutableBufferPointer { $0.update(repeating: 0) } }
    let rc = salt.withUnsafeBytes { s in
      argon2id_hash_raw(UInt32(t), UInt32(m), 1, password, password.count, s.baseAddress, salt.count, &out, out.count)
    }
    guard rc == ARGON2_OK.rawValue else { throw WalletError.crypto("Argon2id failed (\(rc))") }
    return SymmetricKey(data: out)
  }

  static func deriveKey(_ kdf: Kdf, _ source: Source, cache: KeyCache? = nil) throws -> SymmetricKey {
    switch (kdf, source) {
    case let (.argon2id(m, t, salt), .passcode(passcode)):
      if let hit = cache?.get(passcode: passcode, salt: salt, m: m, t: t) { return hit }
      let key = try argon2id(passcode, salt: Data(base64Encoded: salt)!, m: m, t: t)
      cache?.put(key, passcode: passcode, salt: salt, m: m, t: t)
      return key
    case let (.hkdf(salt), .prf(prf)):
      guard prf.count >= 32 else { throw WalletError.envelope("key-type", "passkey output too short") }
      return HKDF<SHA256>.deriveKey(
        inputKeyMaterial: SymmetricKey(data: prf), salt: Data(base64Encoded: salt)!, info: hkdfInfo, outputByteCount: 32
      )
    case let (.none, .key(key)):
      guard key.count == 32 else { throw WalletError.envelope("key-type", "device key must be 32 bytes") }
      return SymmetricKey(data: key)
    case (.argon2id, _): throw WalletError.envelope("key-type", "this envelope needs a passcode")
    case (.hkdf, _): throw WalletError.envelope("key-type", "this envelope needs a passkey")
    case (.none, _): throw WalletError.envelope("key-type", "this envelope needs a device key")
    }
  }

  // MARK: Seal / open

  /// `salt` lets several recovery entries share one passcode key (SPEC §3.2).
  static func seal(_ kind: Kind, _ plaintext: Data, _ source: Source, salt: Data? = nil,
                   argon2: (m: Int, t: Int) = defaultArgon2, cache: KeyCache? = nil) throws -> String {
    let saltText = (salt ?? random(16)).base64EncodedString()
    let kdf: Kdf
    switch source {
    case .passcode: kdf = .argon2id(m: argon2.m, t: argon2.t, salt: saltText)
    case .prf: kdf = .hkdf(salt: saltText)
    case .key: kdf = .none
    }
    let iv = random(12)
    let ivText = iv.base64EncodedString()
    let key = try deriveKey(kdf, source, cache: cache)
    let box = try AES.GCM.seal(plaintext, using: key, nonce: AES.GCM.Nonce(data: iv), authenticating: aad(kind: kind, kdf: kdf, iv: ivText))

    var kdfJson: [String: Any]
    switch kdf {
    case let .argon2id(m, t, s): kdfJson = ["alg": "argon2id", "version": 19, "m": m, "t": t, "p": 1, "salt": s]
    case let .hkdf(s): kdfJson = ["alg": "hkdf-sha256", "salt": s]
    case .none: kdfJson = ["alg": "none"]
    }
    let env: [String: Any] = [
      "format": "foxsafe-envelope", "v": 1, "kind": kind.rawValue, "kdf": kdfJson,
      "cipher": "aes-256-gcm", "iv": ivText, "ct": (box.ciphertext + box.tag).base64EncodedString(),
    ]
    let out = try JSONSerialization.data(withJSONObject: env, options: [.sortedKeys])
    return String(decoding: out, as: UTF8.self)
  }

  static func open(_ json: String, _ source: Source, expect: Kind? = nil, cache: KeyCache? = nil) throws -> Data {
    let env = try parse(json)
    if let expect, env.kind != expect { throw WalletError.envelope("format", "expected a \(expect.rawValue) envelope") }
    let key = try deriveKey(env.kdf, source, cache: cache)
    let ct = Data(base64Encoded: env.ct)!
    do {
      let box = try AES.GCM.SealedBox(
        nonce: AES.GCM.Nonce(data: Data(base64Encoded: env.iv)!), ciphertext: ct.prefix(ct.count - 16), tag: ct.suffix(16)
      )
      return try AES.GCM.open(box, using: key, authenticating: aad(kind: env.kind, kdf: env.kdf, iv: env.iv))
    } catch {
      throw WalletError.envelope("auth", "wrong passcode or the file was changed")
    }
  }

  static func random(_ count: Int) -> Data {
    var bytes = Data(count: count)
    let status = bytes.withUnsafeMutableBytes { SecRandomCopyBytes(kSecRandomDefault, count, $0.baseAddress!) }
    precondition(status == errSecSuccess, "secure random failed")
    return bytes
  }
}

/// Remembers Argon2id results for the length of one operation, so opening
/// many recovery entries that share a salt costs one derivation.
final class KeyCache {
  private var keys: [String: SymmetricKey] = [:]
  private func id(_ p: String, _ s: String, _ m: Int, _ t: Int) -> String {
    SHA256.hash(data: Data("\(m)|\(t)|\(s)|\(p)".utf8)).map { String(format: "%02x", $0) }.joined()
  }
  func get(passcode: String, salt: String, m: Int, t: Int) -> SymmetricKey? { keys[id(passcode, salt, m, t)] }
  func put(_ k: SymmetricKey, passcode: String, salt: String, m: Int, t: Int) { keys[id(passcode, salt, m, t)] = k }
}
