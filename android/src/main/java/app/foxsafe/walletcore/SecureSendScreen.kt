package app.foxsafe.walletcore

import android.annotation.SuppressLint
import android.app.Dialog
import android.content.Context
import android.content.res.Configuration
import android.graphics.Canvas
import android.graphics.Color
import android.graphics.Paint
import android.graphics.RectF
import android.graphics.Typeface
import android.graphics.drawable.GradientDrawable
import android.os.Looper
import android.text.SpannableStringBuilder
import android.text.Spanned
import android.text.style.ForegroundColorSpan
import android.text.style.StyleSpan
import android.util.TypedValue
import android.view.Gravity
import android.view.HapticFeedbackConstants
import android.view.MotionEvent
import android.view.View
import android.view.ViewGroup
import android.view.WindowManager
import android.widget.CheckBox
import android.widget.LinearLayout
import android.widget.ScrollView
import android.widget.TextView
import androidx.core.content.ContextCompat
import androidx.fragment.app.FragmentActivity
import java.util.concurrent.CountDownLatch
import java.util.concurrent.TimeUnit

/**
 * The secure send screen (SPEC §7.13): drawn here, in native code, from what will really be signed.
 * The app's JavaScript can't draw, change, skip or press it. Shown before the fingerprint prompt.
 * Mirrors ios/SecureSendScreen.swift.
 */
object SecureSendScreen {
  /** The on-device self-test signs dozens of test transactions: development builds only. */
  @Volatile var skipForTests = false

  /** Shows the screen and waits. True = slid to send; false = cancelled. Never on the main thread. */
  fun confirm(activity: FragmentActivity?, screen: SendSummary.Screen): Boolean {
    if (BuildConfig.DEBUG && skipForTests) return true
    val act = activity ?: throw WalletException("CRYPTO", "no screen to show the send details on")
    if (Looper.myLooper() == Looper.getMainLooper()) throw WalletException("CRYPTO", "the send screen can't wait on the main thread")
    val latch = CountDownLatch(1)
    var confirmed = false
    ContextCompat.getMainExecutor(act).execute {
      try {
        // A popup from the bottom, only as tall as what it shows (founder, 16 Nov 2026).
        val dialog = Dialog(act, android.R.style.Theme_Translucent_NoTitleBar)
        var finished = false
        val finish = { ok: Boolean ->
          if (!finished) {
            finished = true
            confirmed = ok
            dialog.dismiss()
            latch.countDown()
          }
        }
        dialog.setContentView(build(act, screen, finish))
        dialog.setCancelable(true) // the back button cancels
        dialog.setOnCancelListener { finish(false) }
        dialog.window?.let { w ->
          w.setLayout(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT)
          w.setGravity(Gravity.BOTTOM)
          w.setBackgroundDrawable(android.graphics.drawable.ColorDrawable(Color.TRANSPARENT))
          w.setDimAmount(0.4f)
          w.addFlags(WindowManager.LayoutParams.FLAG_DIM_BEHIND)
          // The strip behind the system navigation bar matches the popup instead of showing black.
          val dark = (act.resources.configuration.uiMode and Configuration.UI_MODE_NIGHT_MASK) == Configuration.UI_MODE_NIGHT_YES
          @Suppress("DEPRECATION")
          w.navigationBarColor = if (dark) Color.BLACK else Color.WHITE
          // Draw under the navigation bar (the popup pads itself for it), so no black strip shows below it.
          if (android.os.Build.VERSION.SDK_INT >= 30) w.setDecorFitsSystemWindows(false)
          w.addFlags(WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS)
          if (!dark && android.os.Build.VERSION.SDK_INT >= 30) {
            w.insetsController?.setSystemBarsAppearance(
              android.view.WindowInsetsController.APPEARANCE_LIGHT_NAVIGATION_BARS, android.view.WindowInsetsController.APPEARANCE_LIGHT_NAVIGATION_BARS)
          }
        }
        // No screenshots or screen recording of it in the app people install; development builds allow them, so the
        // screen can be checked on the test emulator.
        if (!BuildConfig.DEBUG) dialog.window?.addFlags(WindowManager.LayoutParams.FLAG_SECURE)
        dialog.show()
      } catch (e: Exception) {
        latch.countDown()
      }
    }
    if (!latch.await(10, TimeUnit.MINUTES)) throw WalletException("CRYPTO", "send cancelled: the screen timed out")
    return confirmed
  }

  private class Palette(dark: Boolean) {
    val bg = if (dark) Color.BLACK else Color.WHITE
    val text = if (dark) Color.WHITE else Color.BLACK
    val secondary = if (dark) Color.rgb(160, 160, 166) else Color.rgb(110, 110, 115)
    val card = if (dark) Color.rgb(28, 28, 30) else Color.rgb(242, 242, 247)
    val faint = if (dark) Color.rgb(72, 72, 74) else Color.rgb(199, 199, 204)
    val red = Color.rgb(215, 50, 45)
  }

  private fun dp(c: Context, v: Float) = TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, v, c.resources.displayMetrics)

  private fun build(c: Context, s: SendSummary.Screen, finish: (Boolean) -> Unit): View {
    val dark = (c.resources.configuration.uiMode and Configuration.UI_MODE_NIGHT_MASK) == Configuration.UI_MODE_NIGHT_YES
    val p = Palette(dark)
    val pad = dp(c, 20f).toInt()
    fun text(t: String, size: Float, color: Int, bold: Boolean = false) = TextView(c).apply {
      text = t; setTextSize(TypedValue.COMPLEX_UNIT_SP, size); setTextColor(color)
      if (bold) setTypeface(typeface, Typeface.BOLD)
    }
    val root = LinearLayout(c).apply {
      orientation = LinearLayout.VERTICAL
      background = GradientDrawable().apply {
        setColor(p.bg)
        val r = dp(c, 28f)
        cornerRadii = floatArrayOf(r, r, r, r, 0f, 0f, 0f, 0f)
      }
    }
    val body = LinearLayout(c).apply { orientation = LinearLayout.VERTICAL; setPadding(pad, dp(c, 24f).toInt(), pad, dp(c, 8f).toInt()) }
    fun gap(h: Float) = View(c).apply { layoutParams = LinearLayout.LayoutParams(1, dp(c, h).toInt()) }

    body.addView(text("🔒  " + s.secure, 13f, p.secondary))
    body.addView(gap(16f))
    body.addView(text(s.title, 30f, p.text, bold = true))
    body.addView(text(s.network, 16f, p.secondary))
    if (s.site.isNotEmpty()) body.addView(text(s.site, 16f, p.secondary))
    if (s.to.isNotEmpty()) {
      body.addView(gap(16f))
      val card = LinearLayout(c).apply {
        orientation = LinearLayout.VERTICAL
        setPadding(dp(c, 16f).toInt(), dp(c, 16f).toInt(), dp(c, 16f).toInt(), dp(c, 16f).toInt())
        background = GradientDrawable().apply { cornerRadius = dp(c, 20f); setColor(p.card) }
      }
      card.addView(text(s.toLabel, 14f, p.secondary))
      card.addView(gap(6f))
      card.addView(TextView(c).apply {
        text = marked(s.rawTo, p, s.markHex); setTextSize(TypedValue.COMPLEX_UNIT_SP, 18f); typeface = Typeface.MONOSPACE; setTextIsSelectable(true)
      })
      if (s.own.isNotEmpty()) { card.addView(gap(6f)); card.addView(text(s.own, 14f, p.secondary)) }
      body.addView(card)
    }
    if (s.fee.isNotEmpty()) { body.addView(gap(14f)); body.addView(text(s.fee, 15f, p.text)) }
    if (s.warning.isNotEmpty()) { body.addView(gap(14f)); body.addView(text(s.warning, 15f, p.red, bold = true)) }

    root.addView(ScrollView(c).apply { addView(body) }, LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT))

    val bottom = LinearLayout(c).apply { orientation = LinearLayout.VERTICAL; setPadding(pad, dp(c, 8f).toInt(), pad, dp(c, 12f).toInt()) }
    lateinit var slider: SlideView
    if (s.tick.isNotEmpty()) {
      val tick = CheckBox(c).apply {
        text = s.tick; setTextSize(TypedValue.COMPLEX_UNIT_SP, 15f); setTextColor(p.text)
        buttonTintList = android.content.res.ColorStateList.valueOf(p.text)
        setOnCheckedChangeListener { _, on -> slider.enabledToSend = on }
      }
      bottom.addView(tick)
      bottom.addView(gap(10f))
    }
    slider = SlideView(c, s.slide, p.text, p.bg, p.card, p.secondary, p.faint) { finish(true) }.apply { enabledToSend = s.tick.isEmpty() }
    bottom.addView(slider, LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, dp(c, 64f).toInt()))
    bottom.addView(text(s.cancel, 16f, p.secondary).apply {
      gravity = Gravity.CENTER
      setPadding(0, dp(c, 14f).toInt(), 0, dp(c, 6f).toInt())
      setOnClickListener { finish(false) }
    }, LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT))
    root.addView(bottom)
    // The popup draws under the navigation bar: keep Cancel above it.
    val basePad = dp(c, 12f).toInt()
    root.setOnApplyWindowInsetsListener { _, insets ->
      val nav = if (android.os.Build.VERSION.SDK_INT >= 30) insets.getInsets(android.view.WindowInsets.Type.navigationBars()).bottom
      else @Suppress("DEPRECATION") insets.systemWindowInsetBottom
      bottom.setPadding(pad, dp(c, 8f).toInt(), pad, basePad + nav)
      insets
    }
    return root
  }

  /** The address in groups of four; its first 4, middle 8 and last 6 characters bold (as the app's AddressText). */
  private fun marked(address: String, p: Palette, markHex: String?): CharSequence {
    val mark = markHex?.let { runCatching { Color.parseColor(it) }.getOrNull() } ?: p.text
    val n = address.length
    val mid = n / 2 - 4
    val out = SpannableStringBuilder()
    address.forEachIndexed { i, ch ->
      if (i > 0 && i % 4 == 0) out.append(' ')
      val bold = n <= 18 || i < 4 || (i >= mid && i < mid + 8) || i >= n - 6
      val start = out.length
      out.append(ch)
      out.setSpan(ForegroundColorSpan(if (bold) mark else p.secondary), start, start + 1, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE)
      if (bold) out.setSpan(StyleSpan(Typeface.BOLD), start, start + 1, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE)
    }
    return out
  }

  /** Drag the knob to the end to send; a tap can't send by accident. TalkBack gets a plain click. */
  @SuppressLint("ViewConstructor")
  private class SlideView(
    c: Context, private val label: String, private val knobColor: Int, private val arrowColor: Int,
    private val trackColor: Int, private val labelColor: Int, private val disabledColor: Int, private val onSlide: () -> Unit,
  ) : View(c) {
    var enabledToSend = false
      set(v) { field = v; alpha = if (v) 1f else 0.6f; invalidate() }
    private var offset = 0f
    private var done = false
    private val paint = Paint(Paint.ANTI_ALIAS_FLAG)
    private val pad = dp(c, 5f)

    init {
      contentDescription = label
      isClickable = true
      setOnClickListener { if (enabledToSend && !done && isAccessibilityFocused) { done = true; onSlide() } }
    }

    private fun travel() = (width - height).toFloat().coerceAtLeast(1f)

    override fun onDraw(canvas: Canvas) {
      val h = height.toFloat()
      paint.color = trackColor
      canvas.drawRoundRect(RectF(0f, 0f, width.toFloat(), h), dp(context, 20f), dp(context, 20f), paint)
      paint.color = labelColor; paint.textSize = dp(context, 16f); paint.textAlign = Paint.Align.CENTER; paint.typeface = Typeface.DEFAULT_BOLD
      canvas.drawText(label, width / 2f, h / 2f - (paint.descent() + paint.ascent()) / 2f, paint)
      val knob = h - pad * 2
      val x = pad + offset
      paint.color = if (enabledToSend) knobColor else disabledColor
      canvas.drawRoundRect(RectF(x, pad, x + knob, pad + knob), dp(context, 15f), dp(context, 15f), paint)
      paint.color = arrowColor; paint.textSize = dp(context, 22f)
      canvas.drawText("→", x + knob / 2f, h / 2f - (paint.descent() + paint.ascent()) / 2f, paint)
    }

    @SuppressLint("ClickableViewAccessibility")
    override fun onTouchEvent(e: MotionEvent): Boolean {
      if (!enabledToSend || done) return true
      when (e.action) {
        MotionEvent.ACTION_DOWN -> parent?.requestDisallowInterceptTouchEvent(true)
        MotionEvent.ACTION_MOVE -> { offset = (e.x - height / 2f).coerceIn(0f, travel()); invalidate() }
        MotionEvent.ACTION_UP, MotionEvent.ACTION_CANCEL -> {
          if (offset >= travel() * 0.8f) {
            offset = travel(); done = true; invalidate()
            performHapticFeedback(HapticFeedbackConstants.CONFIRM)
            onSlide()
          } else { offset = 0f; invalidate() }
        }
      }
      return true
    }
  }
}
