package app.foxsafe.walletcore

import android.os.Build
import android.security.keystore.KeyGenParameterSpec
import android.security.keystore.KeyProperties
import androidx.biometric.BiometricManager.Authenticators.BIOMETRIC_STRONG
import androidx.biometric.BiometricManager.Authenticators.DEVICE_CREDENTIAL
import androidx.biometric.BiometricPrompt
import androidx.core.content.ContextCompat
import androidx.fragment.app.FragmentActivity
import java.security.KeyFactory
import java.security.KeyPairGenerator
import java.security.KeyStore
import java.security.PrivateKey
import java.security.spec.MGF1ParameterSpec
import java.security.spec.X509EncodedKeySpec
import java.util.concurrent.CountDownLatch
import java.util.concurrent.TimeUnit
import javax.crypto.Cipher
import javax.crypto.spec.OAEPParameterSpec
import javax.crypto.spec.PSource

/**
 * The hardware key that protects every wallet's data key (SPEC §3.1, Android).
 *
 * An RSA-3072 key pair inside Android Keystore. The public half wraps a new
 * wallet's data key with no prompt; the private half never leaves the secure
 * hardware and each use needs fingerprint / face / device PIN, through
 * BiometricPrompt with a CryptoObject.
 *
 * Emulators in debug builds have no secure lock screen to bind to, so there
 * the key is created without the user-authentication requirement
 * (`isHardwareBacked` returns false), like the iOS simulator.
 */
object KeyVault {
  private const val ALIAS = "app.foxsafe.wallet.wrapkey"
  private const val TRANSFORMATION = "RSA/ECB/OAEPWithSHA-256AndMGF1Padding"
  private val OAEP = OAEPParameterSpec("SHA-256", "MGF1", MGF1ParameterSpec.SHA1, PSource.PSpecified.DEFAULT)

  val isTestDevice: Boolean
    get() = BuildConfig.DEBUG && (Build.FINGERPRINT.contains("generic") || Build.HARDWARE.contains("ranchu") || Build.PRODUCT.contains("sdk"))

  val isHardwareBacked: Boolean get() = !isTestDevice

  private fun keyStore() = KeyStore.getInstance("AndroidKeyStore").apply { load(null) }

  private fun ensureKey() {
    if (keyStore().containsAlias(ALIAS)) return
    val spec = KeyGenParameterSpec.Builder(ALIAS, KeyProperties.PURPOSE_DECRYPT)
      .setKeySize(3072)
      .setDigests(KeyProperties.DIGEST_SHA256, KeyProperties.DIGEST_SHA1)
      .setEncryptionPaddings(KeyProperties.ENCRYPTION_PADDING_RSA_OAEP)
      .apply {
        if (!isTestDevice) {
          setUserAuthenticationRequired(true)
          setUserAuthenticationParameters(0, KeyProperties.AUTH_BIOMETRIC_STRONG or KeyProperties.AUTH_DEVICE_CREDENTIAL)
          setInvalidatedByBiometricEnrollment(false)
        }
      }
      .build()
    KeyPairGenerator.getInstance(KeyProperties.KEY_ALGORITHM_RSA, "AndroidKeyStore").apply { initialize(spec) }.generateKeyPair()
  }

  /** Wrapping only needs the public half: no prompt. Done in software with the exported public key. */
  fun wrap(dataKey: ByteArray): ByteArray {
    ensureKey()
    val pub = keyStore().getCertificate(ALIAS).publicKey
    // Keystore public keys can't be used directly with OAEP+SHA-256 on every device; re-import the bytes.
    val portable = KeyFactory.getInstance("RSA").generatePublic(X509EncodedKeySpec(pub.encoded))
    return Cipher.getInstance(TRANSFORMATION).run {
      init(Cipher.ENCRYPT_MODE, portable, OAEP)
      doFinal(dataKey)
    }
  }

  /** A cipher ready to unwrap; on a real device it must be unlocked with [authenticate]. */
  fun unwrapCipher(): Cipher {
    val priv = keyStore().getKey(ALIAS, null) as? PrivateKey ?: throw WalletException("NOT_FOUND", "wrapping key missing")
    return Cipher.getInstance(TRANSFORMATION).apply { init(Cipher.DECRYPT_MODE, priv, OAEP) }
  }

  /**
   * Shows the system fingerprint / face / PIN prompt and returns the unlocked
   * cipher. Blocks the calling (background) thread until the user answers.
   */
  fun authenticate(activity: FragmentActivity?, title: String, cipher: Cipher): Cipher {
    if (isTestDevice) return cipher
    val act = activity ?: throw WalletException("CRYPTO", "no screen to show the unlock prompt on")
    val latch = CountDownLatch(1)
    var result: Cipher? = null
    var error: String? = null
    ContextCompat.getMainExecutor(act).execute {
      val prompt = BiometricPrompt(act, ContextCompat.getMainExecutor(act), object : BiometricPrompt.AuthenticationCallback() {
        override fun onAuthenticationSucceeded(r: BiometricPrompt.AuthenticationResult) {
          result = r.cryptoObject?.cipher; latch.countDown()
        }
        override fun onAuthenticationError(code: Int, msg: CharSequence) {
          error = msg.toString(); latch.countDown()
        }
      })
      val info = BiometricPrompt.PromptInfo.Builder()
        .setTitle(title)
        .setAllowedAuthenticators(BIOMETRIC_STRONG or DEVICE_CREDENTIAL)
        .build()
      prompt.authenticate(info, BiometricPrompt.CryptoObject(cipher))
    }
    if (!latch.await(5, TimeUnit.MINUTES)) throw WalletException("CRYPTO", "unlock timed out")
    return result ?: throw WalletException("CRYPTO", "unlock cancelled or failed: ${error ?: "unknown"}")
  }

  /** One authorised operation: with per-use authentication every unwrap needs its own prompt. */
  fun unwrap(cipher: Cipher, wrapped: ByteArray): ByteArray = cipher.doFinal(wrapped)

  fun delete() {
    keyStore().run { if (containsAlias(ALIAS)) deleteEntry(ALIAS) }
  }
}
