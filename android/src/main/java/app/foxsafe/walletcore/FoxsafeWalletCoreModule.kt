package app.foxsafe.walletcore

import androidx.fragment.app.FragmentActivity
import expo.modules.kotlin.exception.CodedException
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.records.Field
import expo.modules.kotlin.records.Record
import org.json.JSONArray
import org.json.JSONObject
import wallet.core.jni.Mnemonic

class CreateWalletOptions : Record {
  @Field val name: String = ""
  @Field val kind: String = "multi"
  @Field val coin: Int? = null
  @Field val wordCount: Int = 12
  @Field val coins: List<Int>? = null
  @Field val passcode: String = ""
}

class ImportMnemonicOptions : Record {
  @Field val name: String = ""
  @Field val words: String = ""
  @Field val passphrase: String? = null
  @Field val kind: String = "multi"
  @Field val coin: Int? = null
  @Field val coins: List<Int>? = null
  @Field val solanaPath: String = "phantom"
  @Field val accounts: Int = 1
  @Field val passcode: String = ""
}

class ImportPrivateKeyOptions : Record {
  @Field val name: String = ""
  @Field val privateKey: String = ""
  @Field val coin: Int = 0
  @Field val passcode: String = ""
}

/** { type: 'password', password } or { type: 'prf', prf: base64 } */
class LockOptions : Record {
  @Field val type: String = ""
  @Field val password: String? = null
  @Field val prf: String? = null

  fun source(): Envelope.Source = when (type) {
    "password" -> {
      val p = password
      if (p == null || p.length < 8) throw WalletException("PASSCODE", "backup password needs at least 8 characters")
      Envelope.Source.Passcode(p)
    }
    "prf" -> Envelope.Source.Prf(Envelope.unb64(prf ?: throw WalletException("INVALID", "bad passkey output")))
    else -> throw WalletException("INVALID", "lock type must be password or prf")
  }
}

/** Test-vector helper input: { passcode } | { prfHex } | { keyHex } */
class VectorSecret : Record {
  @Field val passcode: String? = null
  @Field val prfHex: String? = null
  @Field val keyHex: String? = null

  fun source(): Envelope.Source = when {
    passcode != null -> Envelope.Source.Passcode(passcode)
    prfHex != null -> Envelope.Source.Prf(WalletStore.unhex(prfHex) ?: throw WalletException("INVALID", "bad hex"))
    keyHex != null -> Envelope.Source.Key(WalletStore.unhex(keyHex) ?: throw WalletException("INVALID", "bad hex"))
    else -> throw WalletException("INVALID", "no secret given")
  }
}

private fun toJs(v: Any?): Any? = when (v) {
  is JSONObject -> v.keys().asSequence().associateWith { toJs(v.get(it)) }
  is JSONArray -> (0 until v.length()).map { toJs(v.get(it)) }
  JSONObject.NULL, Unit -> null
  else -> v
}

/** Runs a store call and turns its errors into JavaScript errors with the same code prefixes as iOS. */
private inline fun <T> call(body: () -> T): Any? = try {
  toJs(body())
} catch (e: WalletException) {
  throw CodedException(e.code, e.message, e)
}

class FoxsafeWalletCoreModule : Module() {
  private val store by lazy {
    WalletStore(appContext.reactContext?.applicationContext ?: throw CodedException("CRYPTO", "no Android context", null))
  }
  private val activity get() = appContext.currentActivity as? FragmentActivity

  override fun definition() = ModuleDefinition {
    Name("FoxsafeWalletCore")

    OnCreate { System.loadLibrary("TrustWalletCore") }

    // Plain checks (no secrets)
    Function("isHardwareBacked") { KeyVault.isHardwareBacked }
    Function("validateMnemonic") { words: String ->
      Mnemonic.isValid(words.lowercase().trim().split(Regex("\\s+")).joinToString(" "))
    }
    Function("validateAddress") { address: String, coin: Int -> store.validateAddress(address, coin) }

    // Passcode
    AsyncFunction("hasPasscode") { call { store.hasPasscode() } }
    AsyncFunction("setPasscode") { p: String -> call { store.setPasscode(p) } }
    AsyncFunction("verifyPasscode") { p: String -> call { store.verifyPasscode(p) } }
    AsyncFunction("changePasscode") { old: String, new: String -> call { store.changePasscode(old, new) } }

    // Wallets
    AsyncFunction("createWallet") { o: CreateWalletOptions ->
      call { store.createWallet(o.name, o.kind, o.coin, o.wordCount, o.coins, o.passcode) }
    }
    AsyncFunction("importMnemonic") { o: ImportMnemonicOptions ->
      call { store.importMnemonic(o.name, o.words, o.passphrase, o.kind, o.coin, o.coins, o.solanaPath, o.accounts, o.passcode) }
    }
    AsyncFunction("importPrivateKey") { o: ImportPrivateKeyOptions ->
      call { store.importPrivateKey(o.name, o.privateKey, o.coin, o.passcode) }
    }
    AsyncFunction("listWallets") { call { store.list() } }
    AsyncFunction("renameWallet") { id: String, name: String -> call { store.update(id) { it.put("name", name) } } }
    AsyncFunction("setCoins") { id: String, coins: List<Int> -> call { store.setCoins(id, coins, activity) } }
    AsyncFunction("setSolanaPath") { id: String, solanaPath: String, passcode: String ->
      call { store.setSolanaPath(id, solanaPath, passcode, activity) }
    }
    AsyncFunction("deleteWallet") { id: String, passcode: String -> call { store.delete(id, passcode) } }
    AsyncFunction("getAddresses") { id: String, coins: List<Int>, account: Int? -> call { store.addresses(id, coins, account ?: 0) } }
    AsyncFunction("addAccount") { id: String, name: String?, passcode: String -> call { store.addAccount(id, name, passcode, activity) } }
    AsyncFunction("removeAccount") { id: String, index: Int, passcode: String -> call { store.removeAccount(id, index, passcode, activity) } }
    AsyncFunction("renameAccount") { id: String, index: Int, name: String -> call { store.renameAccount(id, index, name) } }
    AsyncFunction("markBackedUp") { id: String, method: String ->
      call {
        store.update(id) { info ->
          val b = info.getJSONObject("backup")
          when (method) {
            "manual" -> b.put("manual", true)
            "cloud" -> b.put("cloud", true)
            else -> throw WalletException("INVALID", "method must be manual or cloud")
          }
        }
      }
    }

    // Signing and showing the phrase (fingerprint / face / PIN on a real device)
    AsyncFunction("signTransaction") { id: String, coin: Int, input: String, account: Int? ->
      call { store.signTransaction(id, coin, input, account ?: 0, activity) }
    }
    AsyncFunction("signMessage") { id: String, coin: Int, message: String, account: Int? ->
      call { store.signMessage(id, coin, message, false, account ?: 0, activity) }
    }
    AsyncFunction("signTypedData") { id: String, coin: Int, json: String, account: Int? ->
      call { store.signMessage(id, coin, json, true, account ?: 0, activity) }
    }
    AsyncFunction("revealSecret") { id: String -> call { store.revealSecret(id, activity) } }

    // On-phone recovery
    AsyncFunction("scanRecovery") { call { store.scanRecovery() } }
    AsyncFunction("recoveryHasAddress") { address: String -> call { store.recoveryHasAddress(address) } }
    AsyncFunction("restoreFromRecovery") { passcode: String, currentPasscode: String? -> call { store.restore(passcode, currentPasscode) } }
    AsyncFunction("deleteRecovery") { call { store.deleteRecovery() } }

    // Backups
    AsyncFunction("exportBackup") { ids: List<String>, lock: LockOptions -> call { store.exportBackup(ids, lock.source(), activity) } }
    AsyncFunction("importBackup") { envelope: String, lock: LockOptions, passcode: String ->
      call { store.importBackup(envelope, lock.source(), passcode) }
    }

    // Logout
    AsyncFunction("wipe") { keepRecovery: Boolean -> call { store.wipe(keepRecovery) } }

    // Helpers that never read stored secrets
    AsyncFunction("previewAddresses") { words: String, passphrase: String?, coins: List<Int>, account: Int?, solanaPath: String? ->
      call { store.previewAddresses(words, passphrase, coins, account ?: 0, solanaPath ?: "phantom") }
    }
    AsyncFunction("previewAccounts") { words: String, passphrase: String?, coins: List<Int>, from: Int, count: Int, solanaPath: String ->
      call { store.previewAccounts(words, passphrase, coins, from, count, solanaPath) }
    }
    AsyncFunction("envelopeDigest") { json: String, secret: VectorSecret -> call { store.envelopeDigest(json, secret.source()) } }
  }
}
