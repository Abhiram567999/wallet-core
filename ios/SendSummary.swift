import Foundation
import WalletCore

/// What a transaction does, read from the SigningInput bytes that will be signed (SPEC §7.13).
/// Mirrors src/sendSummary.ts (the reference, with tests): keep the two in step.
struct SendSummary {
  enum Kind { case send, other }
  var kind: Kind
  var network: String
  var symbol: String?
  var decimals: Int?
  var contract: String?
  /// Raw units, decimal. Empty when `all`.
  var amount = ""
  var all = false
  var to = ""
  var note = false
  var feeUsdt = ""
  var energySun = ""
  /// For `other`: value sent with a contract call (raw units of `symbol`).
  var value = ""

  static let knownTokens: [String: [String: (String, Int)]] = [
    "tron": ["TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t": ("USDT", 6), "TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8": ("USDC", 6)],
    "solana": ["Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB": ("USDT", 6), "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v": ("USDC", 6)],
    "evm:1": ["0xdac17f958d2ee523a2206206994597c13d831ec7": ("USDT", 6), "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": ("USDC", 6)],
    "evm:56": ["0x55d398326f99059ff775485246999027b3197955": ("USDT", 18), "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d": ("USDC", 18)],
    "evm:8453": ["0x833589fcd6edb6e08f4c7c32d4f71b54bda02913": ("USDC", 6)],
    "evm:137": ["0xc2132d05d31c914a87c6611c10748aeb04b58e8f": ("USDT", 6), "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359": ("USDC", 6)],
    "evm:42161": ["0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9": ("USDT", 6), "0xaf88d065e77c8cc2239327c5edb3a432268e5831": ("USDC", 6)],
    "evm:10": ["0x94b008aa00579c1307b0ef2c499ad98a8ce58e58": ("USDT", 6), "0x0b2c639c533813f4aa9d7837caf62653d097ff85": ("USDC", 6)],
  ]
  static let tronUSDT = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"

  /// Big-endian bytes as a decimal string (any length).
  static func decimal(_ bytes: Data) -> String {
    var digits: [UInt8] = [0] // little-endian base-10 digits
    for byte in bytes {
      var carry = Int(byte)
      for i in digits.indices {
        let v = Int(digits[i]) * 256 + carry
        digits[i] = UInt8(v % 10)
        carry = v / 10
      }
      while carry > 0 { digits.append(UInt8(carry % 10)); carry /= 10 }
    }
    while digits.count > 1 && digits.last == 0 { digits.removeLast() }
    return String(digits.reversed().map { Character(String($0)) })
  }

  static func unitsText(_ raw: String, _ decimals: Int) -> String {
    var digits = String(raw.drop(while: { $0 == "0" }))
    if digits.isEmpty { digits = "0" }
    guard decimals > 0 else { return digits }
    if digits.count <= decimals { digits = String(repeating: "0", count: decimals + 1 - digits.count) + digits }
    let whole = String(digits.dropLast(decimals))
    var frac = String(digits.suffix(decimals))
    while frac.hasSuffix("0") { frac.removeLast() }
    return frac.isEmpty ? whole : "\(whole).\(frac)"
  }

  static func grouped(_ a: String) -> String {
    var out = ""
    for (i, c) in a.enumerated() {
      if i > 0 && i % 4 == 0 { out.append(" ") }
      out.append(c)
    }
    return out
  }

  /// Reads `inputs` (the user's transaction, then gasless extras). `hintTo` is only used for a Solana token
  /// send, and only after proving it owns the signed token account.
  static func read(_ inputs: [Data], coin: CoinType, hintTo: String?) -> SendSummary {
    let network = CoinTypeConfiguration.getName(type: coin)
    var s = SendSummary(kind: .other, network: network)
    let nativeSymbol = CoinTypeConfiguration.getSymbol(type: coin)
    let nativeDecimals = Int(CoinTypeConfiguration.getDecimals(type: coin))
    guard let first = inputs.first else { return s }

    func send(_ symbol: String?, _ decimals: Int?, _ contract: String?, _ amount: String, _ to: String) {
      s.kind = .send; s.symbol = symbol; s.decimals = decimals; s.contract = contract; s.amount = amount; s.to = to
    }
    func native(_ amount: String, _ to: String) { send(nativeSymbol, nativeDecimals, nil, amount, to) }

    switch coin.blockchain {
    case .tron:
      func tx(_ d: Data) -> TronTransaction? {
        guard let i = try? TronSigningInput(serializedBytes: d), i.rawJson.isEmpty, i.hasTransaction else { return nil }
        return i.transaction
      }
      guard let t = tx(first) else { return s }
      switch t.contractOneof {
      case .transfer(let x)?: native(String(x.amount), x.toAddress)
      case .transferTrc20Contract(let x)?:
        let known = knownTokens["tron"]?[x.contractAddress]
        send(known?.0, known?.1, x.contractAddress, decimal(x.amount), x.toAddress)
      case .triggerSmartContract(let x)?: s.to = x.contractAddress; return s
      default: return s
      }
      if !t.memo.isEmpty { s.note = true }
      var energy: Int64 = 0, feeTotal = "0"
      for extra in inputs.dropFirst() {
        guard let x = tx(extra) else { return SendSummary(kind: .other, network: network) }
        switch x.contractOneof {
        case .transferTrc20Contract(let f)? where f.contractAddress == tronUSDT: feeTotal = decimal(f.amount)
        case .transfer(let e)?: energy += e.amount
        default: return SendSummary(kind: .other, network: network)
        }
      }
      if feeTotal != "0" { s.feeUsdt = feeTotal }
      if energy > 0 { s.energySun = String(energy) }
      return s

    case .ethereum:
      guard inputs.count == 1, let i = try? EthereumSigningInput(serializedBytes: first) else { return s }
      let chainId = decimal(i.chainID)
      guard chainId == coin.chainId, i.txMode == .legacy || i.txMode == .enveloped, !i.hasEip7702Authorization, i.userOperationOneof == nil else { return s }
      let to = i.toAddress.lowercased()
      let tokens = knownTokens["evm:\(chainId)"] ?? [:]
      func token(_ contract: String, _ dest: String, _ amount: String) {
        let c = contract.lowercased()
        send(tokens[c]?.0, tokens[c]?.1, c, amount, dest.lowercased())
      }
      switch i.transaction.transactionOneof {
      case .transfer(let x)?:
        if to.isEmpty || !x.data.isEmpty { s.to = to; s.value = decimal(x.amount); s.symbol = nativeSymbol; s.decimals = nativeDecimals; return s }
        native(decimal(x.amount), to)
      case .erc20Transfer(let x)?: token(to, x.to, decimal(x.amount))
      case .contractGeneric(let x)?:
        let value = decimal(x.amount)
        let d = [UInt8](x.data)
        if value == "0", !to.isEmpty, d.count == 68, Array(d[0..<4]) == [0xa9, 0x05, 0x9c, 0xbb], d[4..<16].allSatisfy({ $0 == 0 }) {
          token(to, "0x" + Data(d[16..<36]).hexString, decimal(Data(d[36..<68])))
        } else {
          s.to = to; s.value = value; s.symbol = nativeSymbol; s.decimals = nativeDecimals
        }
      default: s.to = to
      }
      return s

    case .bitcoin, .bitcoinCash:
      guard inputs.count == 1, let i = try? BitcoinSigningInput(serializedBytes: first), !i.toAddress.isEmpty, i.extraOutputs.isEmpty, !i.hasPlan else { return s }
      native(i.useMaxAmount ? "" : String(i.amount), i.toAddress)
      s.all = i.useMaxAmount
      s.note = !i.outputOpReturn.isEmpty
      return s

    case .solana:
      guard inputs.count == 1, let i = try? SolanaSigningInput(serializedBytes: first), !i.hasRawMessage, i.privateKey.isEmpty else { return s }
      switch i.transactionType {
      case .transferTransaction(let x)?:
        native(String(x.value), x.recipient)
        s.note = !x.memo.isEmpty
      case .tokenTransferTransaction, .createAndTransferTokenTransaction:
        let mint, account, memo, owner: String
        let amount: UInt64, decimals: UInt32
        if case .createAndTransferTokenTransaction(let x)? = i.transactionType {
          (mint, account, memo, owner, amount, decimals) = (x.tokenMintAddress, x.recipientTokenAddress, x.memo, x.recipientMainAddress, x.amount, x.decimals)
        } else if case .tokenTransferTransaction(let x)? = i.transactionType {
          (mint, account, memo, owner, amount, decimals) = (x.tokenMintAddress, x.recipientTokenAddress, x.memo, hintTo ?? "", x.amount, x.decimals)
        } else { return s }
        let known = knownTokens["solana"]?[mint]
        if let known, known.1 != Int(decimals) { return s }
        var to = account
        if !owner.isEmpty {
          guard SolanaAddress(string: owner)?.defaultTokenAddress(tokenMintAddress: mint) == account else { return s }
          to = owner
        }
        send(known?.0, known?.1 ?? Int(decimals), mint, String(amount), to)
        s.note = !memo.isEmpty
      default: return s
      }
      return s

    default:
      return s
    }
  }

  // MARK: Words (mirror of screenText in src/sendSummary.ts)

  struct Screen {
    var secure, title, network, site, toLabel, to, own, fee, warning, tick, slide, cancel: String
    /// The address without spaces, for marking its start, middle and end.
    var rawTo: String
  }

  func screen(lang: String, own: Bool, site: String?, feeIsToken: Bool = false) -> Screen {
    let T = SendScreenText.t
    func amountOf(_ raw: String) -> String {
      if let symbol, let decimals { return "\(SendSummary.unitsText(raw, decimals)) \(symbol)" }
      return T("{amount} of token {contract}", lang, ["amount": SendSummary.unitsText(raw, decimals ?? 0), "contract": contract ?? ""])
    }
    let to = SendSummary.grouped(self.to)
    var sc = Screen(secure: T("Checked by Foxsafe's secure part", lang, [:]), title: "", network: T("on {network}", lang, ["network": network]),
                    site: site.map { T("Asked by {site}", lang, ["site": $0]) } ?? "", toLabel: T("To", lang, [:]), to: to,
                    own: own ? T("Your own address on this phone", lang, [:]) : "", fee: "", warning: "",
                    tick: !to.isEmpty && !own ? T("I checked the receiver's address: the marked start, middle and end match.", lang, [:]) : "",
                    slide: T("Slide to send", lang, [:]), cancel: T("Cancel", lang, [:]), rawTo: self.to)
    switch kind {
    case .other:
      sc.title = T("Not a simple send", lang, [:])
      if !value.isEmpty && value != "0" { sc.fee = T("Sends {amount} with it", lang, ["amount": amountOf(value)]) }
      sc.warning = T("Foxsafe can't read what this transaction does. Go on only if you started it yourself.", lang, [:])
    case .send:
      sc.title = all ? T("Send all your {symbol}", lang, ["symbol": symbol ?? ""]) : T("Send {amount}", lang, ["amount": amountOf(amount)])
      var parts: [String] = []
      if feeIsToken, !value.isEmpty, value != "0" { parts.append(amountOf(value)) }
      if !feeUsdt.isEmpty { parts.append("\(SendSummary.unitsText(feeUsdt, 6)) USDT") }
      if !energySun.isEmpty { parts.append(T("{amount} TRX energy", lang, ["amount": SendSummary.unitsText(energySun, 6)])) }
      if !parts.isEmpty { sc.fee = T("Network fee: {fee}", lang, ["fee": parts.joined(separator: " + ")]) }
      if note { sc.warning = T("This transaction carries a note.", lang, [:]) }
    }
    return sc
  }
}
