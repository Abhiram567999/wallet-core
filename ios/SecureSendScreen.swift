import SwiftUI
import UIKit

/// The secure send screen (SPEC §7.13): drawn here, in native code, from what will really be signed.
/// The app's JavaScript can't draw, change, skip or press it. Shown before Face ID.
enum SecureSendScreen {
  #if DEBUG
    /// The on-device self-test signs dozens of test transactions: development builds only.
    static var skipForTests = false
  #endif

  /// Shows the screen and waits for the user. True = slid to send; false = cancelled.
  /// Called from the module's background queue, never the main thread.
  static func confirm(_ screen: SendSummary.Screen) throws -> Bool {
    #if DEBUG
      if skipForTests { return true }
    #endif
    guard !Thread.isMainThread else { throw WalletError.crypto("the send screen can't wait on the main thread") }
    let done = DispatchSemaphore(value: 0)
    let state = State()

    /// Presents once nothing else is appearing or closing. iOS silently ignores a present made while
    /// another screen is mid-animation, so this waits (up to ~5 s) and then checks the screen is really up;
    /// if it never appears the call fails instead of waiting forever (it holds the wallet lock).
    func attempt(_ triesLeft: Int) {
      guard let top = topViewController() else { state.fail(done); return }
      if top.isBeingDismissed || top.isBeingPresented || top.presentedViewController?.isBeingDismissed == true {
        guard triesLeft > 0 else { state.fail(done); return }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.25) { attempt(triesLeft - 1) }
        return
      }
      var host: UIHostingController<SecureSendView>?
      let finish = { (ok: Bool) in
        guard state.finish(ok) else { return }
        if let h = host, h.presentingViewController != nil { h.dismiss(animated: true) { done.signal() } } else { done.signal() }
      }
      // A popup from the bottom, only as tall as what it shows (founder, 16 Nov 2026: "lot of space is empty").
      let size = SheetHeight()
      host = UIHostingController(rootView: SecureSendView(screen: screen, onDone: finish, onHeight: { h in
        guard abs(size.value - h) > 1, let sheet = host?.sheetPresentationController else { return }
        size.value = h
        sheet.animateChanges { sheet.invalidateDetents() }
      }))
      host!.modalPresentationStyle = .pageSheet
      host!.isModalInPresentation = true // no swipe-away: Cancel or the slide only
      if let sheet = host!.sheetPresentationController {
        sheet.detents = [.custom(identifier: .init("content")) { context in min(size.value, context.maximumDetentValue) }]
        sheet.prefersGrabberVisible = false
        sheet.preferredCornerRadius = 28
      }
      top.present(host!, animated: true)
      DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) {
        if host?.presentingViewController == nil { state.fail(done) }
      }
    }
    DispatchQueue.main.async { attempt(20) }

    // Ten minutes at most, then it counts as cancelled (nothing is signed).
    if done.wait(timeout: .now() + 600) == .timedOut {
      DispatchQueue.main.async { if state.finish(false) { topViewController()?.dismiss(animated: true) } }
      throw WalletError.invalid("send cancelled: the screen timed out")
    }
    if state.failed { throw WalletError.crypto("could not show the send screen. Try again.") }
    return state.confirmed
  }

  /// The popup's height, measured by the view.
  private final class SheetHeight { var value: CGFloat = 460 }

  /// What happened, set once on the main thread and read after the wait.
  private final class State {
    private(set) var confirmed = false
    private(set) var failed = false
    private var settled = false
    /// The user's answer; false if something already settled it.
    func finish(_ ok: Bool) -> Bool {
      guard !settled else { return false }
      settled = true
      confirmed = ok
      return true
    }
    func fail(_ done: DispatchSemaphore) {
      guard !settled else { return }
      settled = true
      failed = true
      done.signal()
    }
  }

  private static func topViewController() -> UIViewController? {
    let scenes = UIApplication.shared.connectedScenes.compactMap { $0 as? UIWindowScene }
    let window = scenes.flatMap(\.windows).first { $0.isKeyWindow } ?? scenes.flatMap(\.windows).first
    var top = window?.rootViewController
    while let next = top?.presentedViewController { top = next }
    return top
  }
}

/// All white, black text, the address in groups of four with its start, middle and end marked,
/// the tick, then a slide (as the app's own Review screen used to have).
struct SecureSendView: View {
  let screen: SendSummary.Screen
  let onDone: (Bool) -> Void
  var onHeight: (CGFloat) -> Void = { _ in }
  @State private var checked = false
  @State private var finished = false

  private var canSlide: Bool { screen.tick.isEmpty || checked }

  var body: some View {
    VStack(alignment: .leading, spacing: 0) {
      VStack(alignment: .leading, spacing: 0) {
        VStack(alignment: .leading, spacing: 14) {
          HStack(spacing: 6) {
            Image(systemName: "lock.fill").font(.system(size: 12, weight: .semibold))
            Text(screen.secure).font(.system(size: 13))
          }
          .foregroundColor(Color(.secondaryLabel))
          .padding(.top, 22)

          VStack(alignment: .leading, spacing: 4) {
            Text(screen.title).font(.system(size: 30, weight: .semibold)).foregroundColor(Color(.label)).fixedSize(horizontal: false, vertical: true)
            Text(screen.network).font(.system(size: 16)).foregroundColor(Color(.secondaryLabel))
            if !screen.site.isEmpty { Text(screen.site).font(.system(size: 16)).foregroundColor(Color(.secondaryLabel)) }
          }

          if !screen.to.isEmpty {
            VStack(alignment: .leading, spacing: 6) {
              Text(screen.toLabel).font(.system(size: 14)).foregroundColor(Color(.secondaryLabel))
              address.font(.system(size: 18, design: .monospaced)).fixedSize(horizontal: false, vertical: true).textSelection(.enabled)
              if !screen.own.isEmpty { Text(screen.own).font(.system(size: 14)).foregroundColor(Color(.secondaryLabel)) }
            }
            .padding(16)
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(RoundedRectangle(cornerRadius: 20).fill(Color(.secondarySystemBackground)))
          }

          if !screen.fee.isEmpty {
            Text(screen.fee).font(.system(size: 15)).foregroundColor(Color(.label))
          }
          if !screen.warning.isEmpty {
            Text(screen.warning).font(.system(size: 15, weight: .medium)).foregroundColor(Color(.systemRed)).fixedSize(horizontal: false, vertical: true)
          }
        }
        .padding(.horizontal, 20)
      }

      VStack(spacing: 14) {
        if !screen.tick.isEmpty {
          Button { checked.toggle() } label: {
            HStack(alignment: .top, spacing: 12) {
              RoundedRectangle(cornerRadius: 6)
                .strokeBorder(checked ? Color(.label) : Color(.tertiaryLabel), lineWidth: 1.5)
                .background(RoundedRectangle(cornerRadius: 6).fill(checked ? Color(.label) : Color.clear))
                .overlay(Image(systemName: "checkmark").font(.system(size: 12, weight: .bold)).foregroundColor(Color(.systemBackground)).opacity(checked ? 1 : 0))
                .frame(width: 22, height: 22)
              Text(screen.tick).font(.system(size: 15)).foregroundColor(Color(.label)).multilineTextAlignment(.leading).fixedSize(horizontal: false, vertical: true)
              Spacer(minLength: 0)
            }
          }
          .buttonStyle(.plain)
          .accessibilityAddTraits(checked ? .isSelected : [])
        }
        SlideToSend(label: screen.slide, enabled: canSlide && !finished, accent: mark) {
          finished = true
          onDone(true)
        }
        Button(screen.cancel) {
          guard !finished else { return }
          finished = true
          onDone(false)
        }
        .font(.system(size: 16))
        .foregroundColor(Color(.secondaryLabel))
        .padding(.bottom, 8)
      }
      .padding(.horizontal, 20)
      .padding(.top, 18)
    }
    .fixedSize(horizontal: false, vertical: true)
    .background(GeometryReader { g in Color.clear.onAppear { onHeight(g.size.height) }.onChange(of: g.size.height) { onHeight($0) } })
    .frame(maxHeight: .infinity, alignment: .top)
    .background(Color(.systemBackground).ignoresSafeArea())
  }

  /// The user's button colour (Settings › Appearance), as the app's AddressText marks addresses; ink when "Black".
  private var mark: Color { screen.markHex.flatMap(Color.init(hex:)) ?? Color(.label) }

  /// The address in groups of four; its first 4, middle 8 and last 6 characters bold in the button colour (as the app's AddressText).
  private var address: Text {
    let raw = Array(screen.rawTo)
    let n = raw.count
    var bold = [Bool](repeating: n <= 18, count: n)
    if n > 18 {
      let mid = n / 2 - 4
      for i in 0..<n where i < 4 || (i >= mid && i < mid + 8) || i >= n - 6 { bold[i] = true }
    }
    var out = Text("")
    for (i, c) in raw.enumerated() {
      if i > 0 && i % 4 == 0 { out = out + Text(" ") }
      out = out + Text(String(c)).fontWeight(bold[i] ? .bold : .regular).foregroundColor(bold[i] ? mark : Color(.secondaryLabel))
    }
    return out
  }
}

/// Drag the handle to the end to send. A tap can't send by accident. VoiceOver gets a plain action.
/// Looks and moves like the app's own SlideToConfirm (src/ui/SlideToConfirm.tsx): a clear Liquid Glass
/// track, a handle of glass tinted with the button colour, and the trail behind the handle filling with
/// that colour as it moves while the label fades (founder, 16 Nov 2026: "same as before").
struct SlideToSend: View {
  let label: String
  let enabled: Bool
  /// The user's button colour (Settings › Appearance); ink when "Black".
  var accent: Color = Color(.label)
  let onSlide: () -> Void
  @State private var offset: CGFloat = 0
  @State private var start: CGFloat = 0
  @State private var held = false
  @State private var fired = false
  @Environment(\.colorScheme) private var scheme
  @Environment(\.layoutDirection) private var direction
  private let height: CGFloat = 64
  private let pad: CGFloat = 5
  private let trackRadius: CGFloat = 20
  private var knobRadius: CGFloat { trackRadius - pad }
  /// How far (share of the track) counts as "slid to the end".
  private let doneAt: CGFloat = 0.8
  /// Clear glass alone is nearly invisible on white: the app's softGlass tint.
  private var soft: Color { Color(.sRGB, red: 120 / 255, green: 120 / 255, blue: 128 / 255, opacity: scheme == .dark ? 0.26 : 0.09) }

  var body: some View {
    GeometryReader { geo in
      let knob = height - pad * 2
      let travel = max(1, geo.size.width - knob - pad * 2)
      let p = min(max(offset / travel, 0), 1)
      ZStack(alignment: .leading) {
        // Track: clear Liquid Glass.
        GlassShape(radius: trackRadius, tint: soft, fallback: scheme == .dark ? Color(red: 0x23 / 255, green: 0x23 / 255, blue: 0x26 / 255) : Color(red: 0xF2 / 255, green: 0xF2 / 255, blue: 0xF5 / 255))
        // The trail behind the handle fills with the button colour as it moves.
        RoundedRectangle(cornerRadius: trackRadius, style: .continuous)
          .fill(accent)
          .frame(width: knob + pad * 2 + offset)
          .opacity(p)
          .allowsHitTesting(false)
        Text(label)
          .font(.system(size: 17, weight: .semibold))
          .foregroundColor(Color(.secondaryLabel))
          .lineLimit(1)
          .frame(maxWidth: .infinity) // centred on the whole bar (founder, 16 Nov 2026)
          .opacity(max(0, 1 - p / 0.55))
          .offset(x: 24 * p)
          .allowsHitTesting(false)
        // Handle: a rounded square of tinted Liquid Glass.
        GlassShape(radius: knobRadius, tint: accent, fallback: accent)
          .overlay(Image(systemName: direction == .rightToLeft ? "arrow.left" : "arrow.right").font(.system(size: 20, weight: .semibold)).foregroundColor(Color(.systemBackground)))
          .frame(width: knob, height: knob)
          .scaleEffect(held ? 1.06 : 1)
          .offset(x: pad + offset)
          .allowsHitTesting(false)
      }
      .contentShape(Rectangle())
      .gesture(
        DragGesture(minimumDistance: 0)
          .onChanged { g in
            guard enabled, !fired else { return }
            if !held {
              start = offset
              withAnimation(.easeOut(duration: 0.16)) { held = true }
              UIImpactFeedbackGenerator(style: .light).impactOccurred()
            }
            offset = min(max(start + g.translation.width, 0), travel)
          }
          .onEnded { g in
            withAnimation(.easeOut(duration: 0.16)) { held = false }
            guard enabled, !fired else { return }
            let pos = start + g.translation.width
            // A quick flick toward the end counts too.
            let speed = g.predictedEndTranslation.width - g.translation.width
            if pos >= travel * doneAt || (pos >= travel * 0.5 && speed > 120) {
              fired = true
              withAnimation(.easeOut(duration: 0.14)) { offset = travel }
              UINotificationFeedbackGenerator().notificationOccurred(.success)
              onSlide()
            } else {
              withAnimation(.spring(response: 0.35, dampingFraction: 0.8)) { offset = 0 }
            }
          }
      )
    }
    .frame(height: height)
    .opacity(enabled ? 1 : 0.45)
    .accessibilityElement()
    .accessibilityLabel(label)
    .accessibilityAddTraits(.isButton)
    .accessibilityAction { if enabled && !fired { fired = true; onSlide() } }
  }
}

/// Liquid Glass on iOS 26 and later (tinted, like the app's Glass); an opaque fill before that.
private struct GlassShape: View {
  let radius: CGFloat
  let tint: Color
  let fallback: Color

  var body: some View {
    let shape = RoundedRectangle(cornerRadius: radius, style: .continuous)
    if #available(iOS 26.0, *) {
      Color.clear.glassEffect(.regular.tint(tint), in: shape)
    } else {
      shape.fill(fallback)
    }
  }
}

extension Color {
  /// "#RRGGBB" only.
  init?(hex: String) {
    guard hex.count == 7, hex.hasPrefix("#"), let v = UInt32(hex.dropFirst(), radix: 16) else { return nil }
    self.init(red: Double((v >> 16) & 0xff) / 255, green: Double((v >> 8) & 0xff) / 255, blue: Double(v & 0xff) / 255)
  }
}
