package app.foxsafe.walletcore

import android.content.Context
import android.content.SharedPreferences
import com.google.android.gms.auth.blockstore.Blockstore
import com.google.android.gms.auth.blockstore.DeleteBytesRequest
import com.google.android.gms.auth.blockstore.RetrieveBytesRequest
import com.google.android.gms.auth.blockstore.StoreBytesData
import com.google.android.gms.tasks.Tasks
import java.util.concurrent.TimeUnit

/** Key–value storage used by the wallet store. Same item names as iOS (SPEC §3). */
interface KeyValueStore {
  fun get(key: String): String?
  fun set(key: String, value: String)
  fun delete(key: String)
  fun keys(prefix: String): List<String>
  fun deleteAll()
}

/**
 * Main copy. App-private storage: deleted by Android when the app is
 * uninstalled. Values are already encrypted (envelopes, wrapped keys) or
 * public (names, addresses), so plain private storage is enough.
 */
class MainStore(context: Context) : KeyValueStore {
  private val prefs: SharedPreferences = context.getSharedPreferences("app.foxsafe.wallet", Context.MODE_PRIVATE)
  override fun get(key: String) = prefs.getString(key, null)
  override fun set(key: String, value: String) { check(prefs.edit().putString(key, value).commit()) { "write failed" } }
  override fun delete(key: String) { prefs.edit().remove(key).commit() }
  override fun keys(prefix: String) = prefs.all.keys.filter { it.startsWith(prefix) }.sorted()
  override fun deleteAll() { prefs.edit().clear().commit() }
}

/**
 * Recovery copy in Google Block Store (SPEC §3.2), kept on this phone only
 * (`setShouldBackupToCloud(false)`). Block Store holds at most 16 entries of
 * 4 KB, so items are packed together into one JSON map split across entries
 * `foxsafe.recovery.0` … `.15`.
 */
class RecoveryStore(context: Context) : KeyValueStore {
  private val client = Blockstore.getClient(context)
  private val maxEntries = 16
  private val chunkSize = 4000
  private fun entryKey(i: Int) = "foxsafe.recovery.$i"

  private fun <T> await(task: com.google.android.gms.tasks.Task<T>): T = Tasks.await(task, 30, TimeUnit.SECONDS)

  private fun load(): MutableMap<String, String> {
    val keys = (0 until maxEntries).map(::entryKey)
    val data = await(client.retrieveBytes(RetrieveBytesRequest.Builder().setKeys(keys).build())).blockstoreDataMap
    val joined = keys.mapNotNull { data[it]?.bytes }.joinToString("") { String(it, Charsets.UTF_8) }
    if (joined.isEmpty()) return mutableMapOf()
    val obj = org.json.JSONObject(joined)
    return obj.keys().asSequence().associateWith { obj.getString(it) }.toMutableMap()
  }

  private fun save(items: Map<String, String>) {
    val text = org.json.JSONObject(items).toString()
    val chunks = text.chunked(chunkSize)
    if (chunks.size > maxEntries) {
      throw WalletException("INVALID", "the on-phone recovery copy is full; back up to the cloud instead")
    }
    chunks.forEachIndexed { i, c ->
      await(
        client.storeBytes(
          StoreBytesData.Builder().setKey(entryKey(i)).setBytes(c.toByteArray(Charsets.UTF_8)).setShouldBackupToCloud(false).build(),
        ),
      )
    }
    val unused = (chunks.size until maxEntries).map(::entryKey)
    if (unused.isNotEmpty()) await(client.deleteBytes(DeleteBytesRequest.Builder().setKeys(unused).build()))
  }

  override fun get(key: String) = load()[key]
  override fun set(key: String, value: String) = save(load().also { it[key] = value })
  override fun delete(key: String) = save(load().also { it.remove(key) })
  override fun keys(prefix: String) = load().keys.filter { it.startsWith(prefix) }.sorted()
  override fun deleteAll() {
    await(client.deleteBytes(DeleteBytesRequest.Builder().setDeleteAll(true).build()))
  }
}
