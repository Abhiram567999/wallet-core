package app.foxsafe.walletcore

import android.content.Context
import android.security.keystore.KeyGenParameterSpec
import android.security.keystore.KeyPermanentlyInvalidatedException
import android.security.keystore.KeyProperties
import androidx.biometric.BiometricManager
import androidx.biometric.BiometricManager.Authenticators.BIOMETRIC_STRONG
import androidx.biometric.BiometricPrompt
import androidx.core.content.ContextCompat
import androidx.fragment.app.FragmentActivity
import java.security.KeyPairGenerator
import java.security.KeyStore
import java.security.PrivateKey
import java.security.SecureRandom
import java.security.Signature
import java.security.spec.ECGenParameterSpec
import java.util.concurrent.CountDownLatch
import java.util.concurrent.TimeUnit

/**
 * Opening the app with a fingerprint instead of typing the passcode.
 *
 * Only opens the app: wallet keys keep their own prompt. Its own Keystore key
 * that only a strong biometric can use (not the phone PIN), and that Android
 * cancels when a fingerprint is added. Foxsafe then asks for its passcode and
 * the user turns fingerprint unlock on again.
 */
object AppUnlock {
  private const val ALIAS = "app.foxsafe.unlockkey"

  private fun keyStore() = KeyStore.getInstance("AndroidKeyStore").apply { load(null) }

  fun status(context: Context): Map<String, Any> {
    val can = BiometricManager.from(context).canAuthenticate(BIOMETRIC_STRONG)
    val none = can == BiometricManager.BIOMETRIC_ERROR_NO_HARDWARE || can == BiometricManager.BIOMETRIC_ERROR_HW_UNAVAILABLE
    return mapOf(
      "kind" to if (none) "none" else "fingerprint",
      "ready" to (can == BiometricManager.BIOMETRIC_SUCCESS),
      "enabled" to keyStore().containsAlias(ALIAS),
    )
  }

  /** Creates the key and checks it once. Anything but "ok" leaves fingerprint unlock off. */
  fun enable(context: Context, activity: FragmentActivity?, title: String): String {
    disable()
    if (BiometricManager.from(context).canAuthenticate(BIOMETRIC_STRONG) != BiometricManager.BIOMETRIC_SUCCESS) return "unavailable"
    val spec = KeyGenParameterSpec.Builder(ALIAS, KeyProperties.PURPOSE_SIGN)
      .setAlgorithmParameterSpec(ECGenParameterSpec("secp256r1"))
      .setDigests(KeyProperties.DIGEST_SHA256)
      .setUserAuthenticationRequired(true)
      .setUserAuthenticationParameters(0, KeyProperties.AUTH_BIOMETRIC_STRONG)
      .setInvalidatedByBiometricEnrollment(true)
      .build()
    KeyPairGenerator.getInstance(KeyProperties.KEY_ALGORITHM_EC, "AndroidKeyStore").apply { initialize(spec) }.generateKeyPair()
    val result = unlock(activity, title)
    if (result != "ok") disable()
    return result
  }

  /**
   * Shows the fingerprint prompt and proves the key still works (signs a random challenge).
   * ok | cancel | lockout | failed | changed (fingerprints changed: now off) | off | unavailable
   */
  fun unlock(activity: FragmentActivity?, title: String): String {
    val ks = keyStore()
    if (!ks.containsAlias(ALIAS)) return "off"
    val priv = ks.getKey(ALIAS, null) as? PrivateKey ?: return "off"
    val signature = Signature.getInstance("SHA256withECDSA")
    try {
      signature.initSign(priv)
    } catch (e: KeyPermanentlyInvalidatedException) {
      disable(); return "changed"
    }
    val act = activity ?: return "failed"
    val latch = CountDownLatch(1)
    var approved: Signature? = null
    var errorCode = -1
    ContextCompat.getMainExecutor(act).execute {
      val prompt = BiometricPrompt(act, ContextCompat.getMainExecutor(act), object : BiometricPrompt.AuthenticationCallback() {
        override fun onAuthenticationSucceeded(r: BiometricPrompt.AuthenticationResult) {
          approved = r.cryptoObject?.signature; latch.countDown()
        }
        override fun onAuthenticationError(code: Int, msg: CharSequence) {
          errorCode = code; latch.countDown()
        }
      })
      val info = BiometricPrompt.PromptInfo.Builder()
        .setTitle(title)
        .setAllowedAuthenticators(BIOMETRIC_STRONG)
        .setNegativeButtonText("Use passcode")
        .build()
      prompt.authenticate(info, BiometricPrompt.CryptoObject(signature))
    }
    if (!latch.await(5, TimeUnit.MINUTES)) return "failed"
    val sig = approved ?: return when (errorCode) {
      BiometricPrompt.ERROR_NEGATIVE_BUTTON, BiometricPrompt.ERROR_USER_CANCELED, BiometricPrompt.ERROR_CANCELED -> "cancel"
      BiometricPrompt.ERROR_LOCKOUT, BiometricPrompt.ERROR_LOCKOUT_PERMANENT -> "lockout"
      else -> "failed"
    }
    val challenge = ByteArray(32).also { SecureRandom().nextBytes(it) }
    return try {
      sig.update(challenge)
      val signed = sig.sign()
      val ok = Signature.getInstance("SHA256withECDSA").run {
        initVerify(ks.getCertificate(ALIAS).publicKey)
        update(challenge)
        verify(signed)
      }
      if (ok) "ok" else "failed"
    } catch (e: Exception) {
      "failed"
    }
  }

  fun disable() {
    keyStore().run { if (containsAlias(ALIAS)) deleteEntry(ALIAS) }
  }
}
