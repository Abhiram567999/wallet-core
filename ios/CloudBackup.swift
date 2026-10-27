import Foundation

/// The encrypted backup file in the user's own iCloud Drive (SPEC §3.4), in a
/// hidden "Backups" folder of Foxsafe's iCloud container (not shown in the Files
/// app). The file is already locked with the backup password before it gets here;
/// this code only moves bytes. Call from a background queue (never the main thread).
enum CloudBackup {
  private static let namePattern = try! NSRegularExpression(pattern: "^[A-Za-z0-9_-]{1,48}\\.json$")

  private static func check(_ name: String) throws {
    guard namePattern.firstMatch(in: name, range: NSRange(name.startIndex..., in: name)) != nil else {
      throw WalletError.invalid("bad file name")
    }
  }

  /// Signed in to iCloud with iCloud Drive on (no network needed to answer).
  static func available() -> Bool { FileManager.default.ubiquityIdentityToken != nil }

  private static func folder(_ container: String) throws -> URL {
    guard available() else { throw WalletError.invalid("NO_ICLOUD: sign in to iCloud and turn on iCloud Drive in Settings") }
    guard let root = FileManager.default.url(forUbiquityContainerIdentifier: container) else {
      throw WalletError.invalid("NO_ICLOUD: iCloud Drive isn't available for Foxsafe on this iPhone")
    }
    let dir = root.appendingPathComponent("Backups", isDirectory: true)
    try FileManager.default.createDirectory(at: dir, withIntermediateDirectories: true)
    return dir
  }

  /// Saves (replaces) the file; iCloud uploads it in the background. Returns the save time (ms).
  static func write(container: String, name: String, content: String) throws -> Double {
    try check(name)
    let url = try folder(container).appendingPathComponent(name)
    var coordinationError: NSError?
    var writeError: Error?
    NSFileCoordinator().coordinate(writingItemAt: url, options: .forReplacing, error: &coordinationError) { target in
      do { try Data(content.utf8).write(to: target, options: .atomic) } catch { writeError = error }
    }
    if let e = coordinationError ?? writeError { throw WalletError.crypto("could not save to iCloud: \(e.localizedDescription)") }
    return Date().timeIntervalSince1970 * 1000
  }

  /// Finds the file (also when it exists only in iCloud, e.g. on a new iPhone), downloads it and
  /// returns ["found": Bool, "content"?: String, "modified"?: ms]. Waits up to `timeout` seconds.
  static func read(container: String, name: String, timeout: TimeInterval) throws -> [String: Any] {
    try check(name)
    let local = try folder(container).appendingPathComponent(name)
    var url = local
    if !FileManager.default.fileExists(atPath: local.path) {
      // Not on this iPhone yet (new phone, or iCloud hasn't synced): look it up in iCloud's index.
      guard let remote = search(name: name, timeout: min(timeout, 20)) else { return ["found": false] }
      url = remote
    }
    // Ask iCloud to download it, then wait until the local copy is current.
    let deadline = Date().addingTimeInterval(timeout)
    try? FileManager.default.startDownloadingUbiquitousItem(at: url)
    while true {
      let values = try? url.resourceValues(forKeys: [.ubiquitousItemDownloadingStatusKey, .isUbiquitousItemKey])
      if values?.isUbiquitousItem != true || values?.ubiquitousItemDownloadingStatus == .current { break }
      guard Date() < deadline else { throw WalletError.invalid("iCloud is still downloading your backup. Try again in a minute.") }
      Thread.sleep(forTimeInterval: 0.4)
    }
    guard FileManager.default.fileExists(atPath: url.path) else { return ["found": false] }

    var coordinationError: NSError?
    var text: String?
    NSFileCoordinator().coordinate(readingItemAt: url, options: [], error: &coordinationError) { target in
      text = (try? Data(contentsOf: target)).flatMap { String(data: $0, encoding: .utf8) }
    }
    guard let content = text else {
      throw WalletError.crypto("could not read the iCloud backup\(coordinationError.map { ": \($0.localizedDescription)" } ?? "")")
    }
    let modified = (try? url.resourceValues(forKeys: [.contentModificationDateKey]))?.contentModificationDate
    return ["found": true, "content": content, "modified": (modified?.timeIntervalSince1970 ?? 0) * 1000]
  }

  /// Looks the file up in iCloud's index (finds files not yet downloaded to this iPhone).
  private static func search(name: String, timeout: TimeInterval) -> URL? {
    let done = DispatchSemaphore(value: 0)
    var found: URL?
    var query: NSMetadataQuery?
    var observer: NSObjectProtocol?
    DispatchQueue.main.async {
      let q = NSMetadataQuery()
      q.searchScopes = [NSMetadataQueryUbiquitousDataScope]
      q.predicate = NSPredicate(format: "%K == %@", NSMetadataItemFSNameKey, name)
      observer = NotificationCenter.default.addObserver(forName: .NSMetadataQueryDidFinishGathering, object: q, queue: .main) { _ in
        q.disableUpdates()
        found = (q.results.first as? NSMetadataItem)?.value(forAttribute: NSMetadataItemURLKey) as? URL
        done.signal()
      }
      query = q
      q.start()
    }
    _ = done.wait(timeout: .now() + timeout)
    DispatchQueue.main.async {
      query?.stop()
      if let observer { NotificationCenter.default.removeObserver(observer) }
    }
    return found
  }
}
