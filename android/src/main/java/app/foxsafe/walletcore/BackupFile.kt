package app.foxsafe.walletcore

import android.content.ContentUris
import android.content.ContentValues
import android.content.Context
import android.net.Uri
import android.os.Environment
import android.provider.MediaStore

/**
 * The encrypted backup file in the phone's Downloads/Foxsafe folder (SPEC §3.4). Files there stay
 * when the app is uninstalled; after a reinstall the user picks the file in the system file picker.
 * The app can only see and change files it created itself, so after a reinstall a new file is made.
 */
object BackupFile {
  private const val FOLDER = "Foxsafe"
  private val relativePath = "${Environment.DIRECTORY_DOWNLOADS}/$FOLDER/"
  private val collection: Uri get() = MediaStore.Downloads.getContentUri(MediaStore.VOLUME_EXTERNAL_PRIMARY)

  /** Our own files in Downloads/Foxsafe (Android shows an app only the files it created). */
  private fun ownFiles(context: Context): List<Pair<Uri, String>> =
    context.contentResolver.query(
      collection, arrayOf(MediaStore.MediaColumns._ID, MediaStore.MediaColumns.DISPLAY_NAME),
      "${MediaStore.MediaColumns.RELATIVE_PATH} = ?", arrayOf(relativePath), null,
    )?.use { c ->
      buildList { while (c.moveToNext()) add(ContentUris.withAppendedId(collection, c.getLong(0)) to c.getString(1)) }
    } ?: emptyList()

  /**
   * Writes [content] as Downloads/Foxsafe/[name]. Never overwrites in place: the new copy is written
   * and finished under a temporary name first; only then are our older copies removed and the new
   * one renamed, so a crash part-way always leaves at least one complete backup.
   */
  fun save(context: Context, name: String, content: String): String {
    if (!Regex("^[A-Za-z0-9_-]{1,48}\\.json$").matches(name)) throw WalletException("INVALID", "bad file name")
    val resolver = context.contentResolver
    val base = name.removeSuffix(".json")
    val tempName = "$base-${System.currentTimeMillis()}.json"
    val values = ContentValues().apply {
      put(MediaStore.MediaColumns.DISPLAY_NAME, tempName)
      put(MediaStore.MediaColumns.MIME_TYPE, "application/json")
      put(MediaStore.MediaColumns.RELATIVE_PATH, relativePath)
      put(MediaStore.MediaColumns.IS_PENDING, 1)
    }
    val uri = resolver.insert(collection, values) ?: throw WalletException("STORAGE", "could not create the backup file")
    try {
      resolver.openOutputStream(uri, "w")?.use { it.write(content.toByteArray(Charsets.UTF_8)) }
        ?: throw WalletException("STORAGE", "could not write the backup file")
      resolver.update(uri, ContentValues().apply { put(MediaStore.MediaColumns.IS_PENDING, 0) }, null, null)
    } catch (e: Exception) {
      runCatching { resolver.delete(uri, null, null) }
      throw if (e is WalletException) e else WalletException("STORAGE", e.message ?: "could not write the backup file")
    }
    // The new copy is complete: remove our older copies, then give it the plain name.
    for ((old, oldName) in ownFiles(context)) {
      if (old != uri && (oldName == name || oldName.startsWith("$base-"))) runCatching { resolver.delete(old, null, null) }
    }
    val finalName = runCatching {
      resolver.update(uri, ContentValues().apply { put(MediaStore.MediaColumns.DISPLAY_NAME, name) }, null, null)
      ownFiles(context).firstOrNull { it.first == uri }?.second ?: name
    }.getOrDefault(tempName)
    return "Download/$FOLDER/$finalName"
  }
}
