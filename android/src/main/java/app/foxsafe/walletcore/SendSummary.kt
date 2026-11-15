package app.foxsafe.walletcore

import java.math.BigInteger
import wallet.core.jni.Base58
import wallet.core.jni.Blockchain
import wallet.core.jni.CoinType
import wallet.core.jni.CoinTypeConfiguration
import wallet.core.jni.SolanaAddress
import wallet.core.jni.proto.Bitcoin
import wallet.core.jni.proto.Ethereum
import wallet.core.jni.proto.Solana
import wallet.core.jni.proto.Tron

/**
 * What a transaction does, read from the SigningInput bytes that will be signed (SPEC §7.13).
 * Mirrors src/sendSummary.ts (the reference, with tests) and ios/SendSummary.swift: keep them in step.
 */
data class SendSummary(
  var send: Boolean,
  val network: String,
  var symbol: String? = null,
  var decimals: Int? = null,
  var contract: String? = null,
  var amount: String = "",
  var all: Boolean = false,
  var to: String = "",
  var note: Boolean = false,
  var feeUsdt: String = "",
  var energySun: String = "",
  /** For `other`: value sent with a contract call. For fee-free sends: the fee, in the same token. */
  var value: String = "",
) {
  data class Screen(
    val secure: String, val title: String, val network: String, val site: String, val toLabel: String, val to: String,
    val own: String, val fee: String, val warning: String, val tick: String, val slide: String, val cancel: String, val rawTo: String,
  )

  fun screen(lang: String, own: Boolean, site: String?, feeIsToken: Boolean = false): Screen {
    val t = SendScreenText::t
    fun amountOf(raw: String): String {
      val s = symbol; val d = decimals
      return if (s != null && d != null) "${unitsText(raw, d)} $s"
      else t("{amount} of token {contract}", lang, mapOf("amount" to unitsText(raw, d ?: 0), "contract" to (contract ?: "")))
    }
    val grouped = grouped(to)
    var title: String
    var fee = ""
    var warning = ""
    if (!send) {
      title = t("Not a simple send", lang, emptyMap())
      if (value.isNotEmpty() && value != "0") fee = t("Sends {amount} with it", lang, mapOf("amount" to amountOf(value)))
      warning = t("Foxsafe can't read what this transaction does. Go on only if you started it yourself.", lang, emptyMap())
    } else {
      title = if (all) t("Send all your {symbol}", lang, mapOf("symbol" to (symbol ?: ""))) else t("Send {amount}", lang, mapOf("amount" to amountOf(amount)))
      val parts = mutableListOf<String>()
      if (feeIsToken && value.isNotEmpty() && value != "0") parts += amountOf(value)
      if (feeUsdt.isNotEmpty()) parts += "${unitsText(feeUsdt, 6)} USDT"
      if (energySun.isNotEmpty()) parts += t("{amount} TRX energy", lang, mapOf("amount" to unitsText(energySun, 6)))
      if (parts.isNotEmpty()) fee = t("Network fee: {fee}", lang, mapOf("fee" to parts.joinToString(" + ")))
      if (note) warning = t("This transaction carries a note.", lang, emptyMap())
    }
    return Screen(
      secure = t("Checked by Foxsafe's secure part", lang, emptyMap()), title = title,
      network = t("on {network}", lang, mapOf("network" to network)),
      site = site?.let { t("Asked by {site}", lang, mapOf("site" to it)) } ?: "",
      toLabel = t("To", lang, emptyMap()), to = grouped,
      own = if (own) t("Your own address on this phone", lang, emptyMap()) else "", fee = fee, warning = warning,
      tick = if (grouped.isNotEmpty() && !own) t("I checked the receiver's address: the marked start, middle and end match.", lang, emptyMap()) else "",
      slide = t("Slide to send", lang, emptyMap()), cancel = t("Cancel", lang, emptyMap()), rawTo = to,
    )
  }

  companion object {
    val KNOWN_TOKENS: Map<String, Map<String, Pair<String, Int>>> = mapOf(
      "tron" to mapOf("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t" to ("USDT" to 6), "TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8" to ("USDC" to 6)),
      "solana" to mapOf("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB" to ("USDT" to 6), "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" to ("USDC" to 6)),
      "evm:1" to mapOf("0xdac17f958d2ee523a2206206994597c13d831ec7" to ("USDT" to 6), "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" to ("USDC" to 6)),
      "evm:56" to mapOf("0x55d398326f99059ff775485246999027b3197955" to ("USDT" to 18), "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d" to ("USDC" to 18)),
      "evm:8453" to mapOf("0x833589fcd6edb6e08f4c7c32d4f71b54bda02913" to ("USDC" to 6)),
      "evm:137" to mapOf("0xc2132d05d31c914a87c6611c10748aeb04b58e8f" to ("USDT" to 6), "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359" to ("USDC" to 6)),
      "evm:42161" to mapOf("0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9" to ("USDT" to 6), "0xaf88d065e77c8cc2239327c5edb3a432268e5831" to ("USDC" to 6)),
      "evm:10" to mapOf("0x94b008aa00579c1307b0ef2c499ad98a8ce58e58" to ("USDT" to 6), "0x0b2c639c533813f4aa9d7837caf62653d097ff85" to ("USDC" to 6)),
    )
    const val TRON_USDT = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"

    /** The network's name as the app writes it ("TRON", "BNB Chain"), not the library's ("Tron", "BNB Smart Chain"). */
    fun networkName(c: CoinType): String {
      val names = mapOf("Tron" to "TRON", "BNB Smart Chain" to "BNB Chain", "Smart Chain" to "BNB Chain", "OP Mainnet" to "Optimism")
      val n = CoinTypeConfiguration.getName(c)
      return names[n] ?: n
    }

    fun decimal(bytes: ByteArray): String = if (bytes.isEmpty()) "0" else BigInteger(1, bytes).toString()

    fun unitsText(raw: String, decimals: Int): String {
      var digits = raw.trimStart('0').ifEmpty { "0" }
      if (decimals <= 0) return digits
      if (digits.length <= decimals) digits = "0".repeat(decimals + 1 - digits.length) + digits
      val whole = digits.dropLast(decimals)
      val frac = digits.takeLast(decimals).trimEnd('0')
      return if (frac.isEmpty()) whole else "$whole.$frac"
    }

    fun grouped(a: String): String = a.chunked(4).joinToString(" ")

    private fun hex(b: ByteArray) = b.joinToString("") { "%02x".format(it) }

    /** Reads [inputs] (the user's transaction, then gasless extras). [hintTo] is used only for a Solana token send, after proof. */
    fun read(inputs: List<ByteArray>, c: CoinType, hintTo: String?): SendSummary {
      val network = networkName(c)
      val s = SendSummary(false, network)
      val nativeSymbol = CoinTypeConfiguration.getSymbol(c)
      val nativeDecimals = CoinTypeConfiguration.getDecimals(c)
      val first = inputs.firstOrNull() ?: return s
      fun send(symbol: String?, decimals: Int?, contract: String?, amount: String, to: String) {
        s.send = true; s.symbol = symbol; s.decimals = decimals; s.contract = contract; s.amount = amount; s.to = to
      }
      fun native(amount: String, to: String) = send(nativeSymbol, nativeDecimals, null, amount, to)
      return runCatching {
        when (c.blockchain()) {
          Blockchain.TRON -> {
            fun tx(d: ByteArray): Tron.Transaction? {
              val i = Tron.SigningInput.parseFrom(d)
              return if (i.rawJson.isEmpty() && i.hasTransaction()) i.transaction else null
            }
            val t = tx(first) ?: return s
            when {
              t.hasTransfer() -> native(t.transfer.amount.toString(), t.transfer.toAddress)
              t.hasTransferTrc20Contract() -> {
                val x = t.transferTrc20Contract
                val known = KNOWN_TOKENS["tron"]?.get(x.contractAddress)
                send(known?.first, known?.second, x.contractAddress, decimal(x.amount.toByteArray()), x.toAddress)
              }
              t.hasTriggerSmartContract() -> { s.to = t.triggerSmartContract.contractAddress; return s }
              else -> return s
            }
            if (t.memo.isNotEmpty()) s.note = true
            var energy = 0L
            var fee = "0"
            for (extra in inputs.drop(1)) {
              val x = tx(extra) ?: return SendSummary(false, network)
              when {
                x.hasTransferTrc20Contract() && x.transferTrc20Contract.contractAddress == TRON_USDT -> fee = decimal(x.transferTrc20Contract.amount.toByteArray())
                x.hasTransfer() -> energy += x.transfer.amount
                else -> return SendSummary(false, network)
              }
            }
            if (fee != "0") s.feeUsdt = fee
            if (energy > 0) s.energySun = energy.toString()
            s
          }
          Blockchain.ETHEREUM -> {
            if (inputs.size != 1) return s
            val i = Ethereum.SigningInput.parseFrom(first)
            val chainId = decimal(i.chainId.toByteArray())
            if (chainId != c.chainId() || (i.txMode != Ethereum.TransactionMode.Legacy && i.txMode != Ethereum.TransactionMode.Enveloped) ||
              i.hasEip7702Authorization() || i.userOperationOneofCase != Ethereum.SigningInput.UserOperationOneofCase.USEROPERATIONONEOF_NOT_SET) return s
            val to = i.toAddress.lowercase()
            val tokens = KNOWN_TOKENS["evm:$chainId"] ?: emptyMap()
            fun token(contract: String, dest: String, amount: String) {
              val k = contract.lowercase()
              send(tokens[k]?.first, tokens[k]?.second, k, amount, dest.lowercase())
            }
            val t = i.transaction
            when (t.transactionOneofCase) {
              Ethereum.Transaction.TransactionOneofCase.TRANSFER ->
                if (to.isEmpty() || !t.transfer.data.isEmpty) { s.to = to; s.value = decimal(t.transfer.amount.toByteArray()); s.symbol = nativeSymbol; s.decimals = nativeDecimals }
                else native(decimal(t.transfer.amount.toByteArray()), to)
              Ethereum.Transaction.TransactionOneofCase.ERC20_TRANSFER -> token(to, t.erc20Transfer.to, decimal(t.erc20Transfer.amount.toByteArray()))
              Ethereum.Transaction.TransactionOneofCase.CONTRACT_GENERIC -> {
                val value = decimal(t.contractGeneric.amount.toByteArray())
                val d = t.contractGeneric.data.toByteArray()
                if (value == "0" && to.isNotEmpty() && d.size == 68 && hex(d.copyOfRange(0, 4)) == "a9059cbb" && d.copyOfRange(4, 16).all { it.toInt() == 0 }) {
                  token(to, "0x" + hex(d.copyOfRange(16, 36)), decimal(d.copyOfRange(36, 68)))
                } else { s.to = to; s.value = value; s.symbol = nativeSymbol; s.decimals = nativeDecimals }
              }
              else -> s.to = to
            }
            s
          }
          Blockchain.BITCOIN, Blockchain.BITCOINCASH -> {
            if (inputs.size != 1) return s
            val i = Bitcoin.SigningInput.parseFrom(first)
            if (i.toAddress.isEmpty() || i.extraOutputsCount > 0 || i.hasPlan()) return s
            native(if (i.useMaxAmount) "" else i.amount.toString(), i.toAddress)
            s.all = i.useMaxAmount
            s.note = !i.outputOpReturn.isEmpty
            s
          }
          Blockchain.SOLANA -> {
            if (inputs.size != 1) return s
            val i = Solana.SigningInput.parseFrom(first)
            if (i.hasRawMessage() || !i.privateKey.isEmpty) return s
            when (i.transactionTypeCase) {
              Solana.SigningInput.TransactionTypeCase.TRANSFER_TRANSACTION -> {
                native(i.transferTransaction.value.toString(), i.transferTransaction.recipient)
                s.note = i.transferTransaction.memo.isNotEmpty()
              }
              Solana.SigningInput.TransactionTypeCase.TOKEN_TRANSFER_TRANSACTION, Solana.SigningInput.TransactionTypeCase.CREATE_AND_TRANSFER_TOKEN_TRANSACTION -> {
                val create = i.transactionTypeCase == Solana.SigningInput.TransactionTypeCase.CREATE_AND_TRANSFER_TOKEN_TRANSACTION
                val mint = if (create) i.createAndTransferTokenTransaction.tokenMintAddress else i.tokenTransferTransaction.tokenMintAddress
                val account = if (create) i.createAndTransferTokenTransaction.recipientTokenAddress else i.tokenTransferTransaction.recipientTokenAddress
                val memo = if (create) i.createAndTransferTokenTransaction.memo else i.tokenTransferTransaction.memo
                val owner = if (create) i.createAndTransferTokenTransaction.recipientMainAddress else (hintTo ?: "")
                val amount = if (create) i.createAndTransferTokenTransaction.amount else i.tokenTransferTransaction.amount
                val decimals = if (create) i.createAndTransferTokenTransaction.decimals else i.tokenTransferTransaction.decimals
                val known = KNOWN_TOKENS["solana"]?.get(mint)
                if (known != null && known.second != decimals) return s
                var to = account
                if (owner.isNotEmpty()) {
                  if (SolanaAddress(owner).defaultTokenAddress(mint) != account) return s
                  to = owner
                }
                send(known?.first, known?.second ?: decimals, mint, java.lang.Long.toUnsignedString(amount), to)
                s.note = memo.isNotEmpty()
              }
              else -> return s
            }
            s
          }
          else -> s
        }
      }.getOrElse { SendSummary(false, network) }
    }

    /** A dApp's TRON transaction (protobuf raw data, already parsed) for the secure screen. */
    fun tronRaw(type: Long, to: ByteArray?, amount: Long?, contract: ByteArray?, callValue: Long, data: ByteArray?): SendSummary {
      val s = SendSummary(false, networkName(CoinType.TRON))
      if (type == 1L && to != null && amount != null) {
        s.send = true; s.symbol = "TRX"; s.decimals = 6; s.amount = amount.toString(); s.to = Base58.encode(to)
      } else if (type == 31L && contract != null) {
        val c = Base58.encode(contract)
        val d = data ?: ByteArray(0)
        if (callValue == 0L && d.size == 68 && hex(d.copyOfRange(0, 4)) == "a9059cbb" && d.copyOfRange(4, 15).all { it.toInt() == 0 } && (d[15].toInt() == 0 || d[15].toInt() == 0x41)) {
          val known = KNOWN_TOKENS["tron"]?.get(c)
          s.send = true; s.symbol = known?.first; s.decimals = known?.second; s.contract = c
          s.amount = decimal(d.copyOfRange(36, 68)); s.to = Base58.encode(byteArrayOf(0x41) + d.copyOfRange(16, 36))
        } else {
          s.to = c
          if (callValue > 0) { s.value = callValue.toString(); s.symbol = "TRX"; s.decimals = 6 }
        }
      }
      return s
    }
  }
}
