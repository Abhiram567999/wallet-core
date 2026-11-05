import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace TW. */
export namespace TW {

    /** Namespace Aptos. */
    namespace Aptos {

        /** Namespace Proto. */
        namespace Proto {

            /** Properties of a TransferMessage. */
            interface ITransferMessage {

                /** TransferMessage to */
                to?: (string|null);

                /** TransferMessage amount */
                amount?: (number|null);
            }

            /** Represents a TransferMessage. */
            class TransferMessage implements ITransferMessage {

                /**
                 * Constructs a new TransferMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Aptos.Proto.ITransferMessage);

                /** TransferMessage to. */
                public to: string;

                /** TransferMessage amount. */
                public amount: number;

                /**
                 * Creates a new TransferMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransferMessage instance
                 */
                public static create(properties?: TW.Aptos.Proto.ITransferMessage): TW.Aptos.Proto.TransferMessage;

                /**
                 * Encodes the specified TransferMessage message. Does not implicitly {@link TW.Aptos.Proto.TransferMessage.verify|verify} messages.
                 * @param message TransferMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Aptos.Proto.ITransferMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransferMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransferMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Aptos.Proto.TransferMessage;

                /**
                 * Gets the default type url for TransferMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a StructTag. */
            interface IStructTag {

                /** StructTag accountAddress */
                accountAddress?: (string|null);

                /** StructTag module */
                module?: (string|null);

                /** StructTag name */
                name?: (string|null);
            }

            /** Represents a StructTag. */
            class StructTag implements IStructTag {

                /**
                 * Constructs a new StructTag.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Aptos.Proto.IStructTag);

                /** StructTag accountAddress. */
                public accountAddress: string;

                /** StructTag module. */
                public module: string;

                /** StructTag name. */
                public name: string;

                /**
                 * Creates a new StructTag instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StructTag instance
                 */
                public static create(properties?: TW.Aptos.Proto.IStructTag): TW.Aptos.Proto.StructTag;

                /**
                 * Encodes the specified StructTag message. Does not implicitly {@link TW.Aptos.Proto.StructTag.verify|verify} messages.
                 * @param message StructTag message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Aptos.Proto.IStructTag, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StructTag message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StructTag
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Aptos.Proto.StructTag;

                /**
                 * Gets the default type url for StructTag
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TokenTransferMessage. */
            interface ITokenTransferMessage {

                /** TokenTransferMessage to */
                to?: (string|null);

                /** TokenTransferMessage amount */
                amount?: (number|null);

                /** TokenTransferMessage function */
                "function"?: (TW.Aptos.Proto.IStructTag|null);
            }

            /** Represents a TokenTransferMessage. */
            class TokenTransferMessage implements ITokenTransferMessage {

                /**
                 * Constructs a new TokenTransferMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Aptos.Proto.ITokenTransferMessage);

                /** TokenTransferMessage to. */
                public to: string;

                /** TokenTransferMessage amount. */
                public amount: number;

                /** TokenTransferMessage function. */
                public function?: (TW.Aptos.Proto.IStructTag|null);

                /**
                 * Creates a new TokenTransferMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TokenTransferMessage instance
                 */
                public static create(properties?: TW.Aptos.Proto.ITokenTransferMessage): TW.Aptos.Proto.TokenTransferMessage;

                /**
                 * Encodes the specified TokenTransferMessage message. Does not implicitly {@link TW.Aptos.Proto.TokenTransferMessage.verify|verify} messages.
                 * @param message TokenTransferMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Aptos.Proto.ITokenTransferMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TokenTransferMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TokenTransferMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Aptos.Proto.TokenTransferMessage;

                /**
                 * Gets the default type url for TokenTransferMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TokenTransferCoinsMessage. */
            interface ITokenTransferCoinsMessage {

                /** TokenTransferCoinsMessage to */
                to?: (string|null);

                /** TokenTransferCoinsMessage amount */
                amount?: (number|null);

                /** TokenTransferCoinsMessage function */
                "function"?: (TW.Aptos.Proto.IStructTag|null);
            }

            /** Represents a TokenTransferCoinsMessage. */
            class TokenTransferCoinsMessage implements ITokenTransferCoinsMessage {

                /**
                 * Constructs a new TokenTransferCoinsMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Aptos.Proto.ITokenTransferCoinsMessage);

                /** TokenTransferCoinsMessage to. */
                public to: string;

                /** TokenTransferCoinsMessage amount. */
                public amount: number;

                /** TokenTransferCoinsMessage function. */
                public function?: (TW.Aptos.Proto.IStructTag|null);

                /**
                 * Creates a new TokenTransferCoinsMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TokenTransferCoinsMessage instance
                 */
                public static create(properties?: TW.Aptos.Proto.ITokenTransferCoinsMessage): TW.Aptos.Proto.TokenTransferCoinsMessage;

                /**
                 * Encodes the specified TokenTransferCoinsMessage message. Does not implicitly {@link TW.Aptos.Proto.TokenTransferCoinsMessage.verify|verify} messages.
                 * @param message TokenTransferCoinsMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Aptos.Proto.ITokenTransferCoinsMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TokenTransferCoinsMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TokenTransferCoinsMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Aptos.Proto.TokenTransferCoinsMessage;

                /**
                 * Gets the default type url for TokenTransferCoinsMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a FungibleAssetTransferMessage. */
            interface IFungibleAssetTransferMessage {

                /** FungibleAssetTransferMessage metadataAddress */
                metadataAddress?: (string|null);

                /** FungibleAssetTransferMessage to */
                to?: (string|null);

                /** FungibleAssetTransferMessage amount */
                amount?: (number|null);
            }

            /** Represents a FungibleAssetTransferMessage. */
            class FungibleAssetTransferMessage implements IFungibleAssetTransferMessage {

                /**
                 * Constructs a new FungibleAssetTransferMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Aptos.Proto.IFungibleAssetTransferMessage);

                /** FungibleAssetTransferMessage metadataAddress. */
                public metadataAddress: string;

                /** FungibleAssetTransferMessage to. */
                public to: string;

                /** FungibleAssetTransferMessage amount. */
                public amount: number;

                /**
                 * Creates a new FungibleAssetTransferMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FungibleAssetTransferMessage instance
                 */
                public static create(properties?: TW.Aptos.Proto.IFungibleAssetTransferMessage): TW.Aptos.Proto.FungibleAssetTransferMessage;

                /**
                 * Encodes the specified FungibleAssetTransferMessage message. Does not implicitly {@link TW.Aptos.Proto.FungibleAssetTransferMessage.verify|verify} messages.
                 * @param message FungibleAssetTransferMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Aptos.Proto.IFungibleAssetTransferMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FungibleAssetTransferMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FungibleAssetTransferMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Aptos.Proto.FungibleAssetTransferMessage;

                /**
                 * Gets the default type url for FungibleAssetTransferMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateAccountMessage. */
            interface ICreateAccountMessage {

                /** CreateAccountMessage authKey */
                authKey?: (string|null);
            }

            /** Represents a CreateAccountMessage. */
            class CreateAccountMessage implements ICreateAccountMessage {

                /**
                 * Constructs a new CreateAccountMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Aptos.Proto.ICreateAccountMessage);

                /** CreateAccountMessage authKey. */
                public authKey: string;

                /**
                 * Creates a new CreateAccountMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateAccountMessage instance
                 */
                public static create(properties?: TW.Aptos.Proto.ICreateAccountMessage): TW.Aptos.Proto.CreateAccountMessage;

                /**
                 * Encodes the specified CreateAccountMessage message. Does not implicitly {@link TW.Aptos.Proto.CreateAccountMessage.verify|verify} messages.
                 * @param message CreateAccountMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Aptos.Proto.ICreateAccountMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateAccountMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateAccountMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Aptos.Proto.CreateAccountMessage;

                /**
                 * Gets the default type url for CreateAccountMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an OfferNftMessage. */
            interface IOfferNftMessage {

                /** OfferNftMessage receiver */
                receiver?: (string|null);

                /** OfferNftMessage creator */
                creator?: (string|null);

                /** OfferNftMessage collectionName */
                collectionName?: (string|null);

                /** OfferNftMessage name */
                name?: (string|null);

                /** OfferNftMessage propertyVersion */
                propertyVersion?: (number|null);

                /** OfferNftMessage amount */
                amount?: (number|null);
            }

            /** Represents an OfferNftMessage. */
            class OfferNftMessage implements IOfferNftMessage {

                /**
                 * Constructs a new OfferNftMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Aptos.Proto.IOfferNftMessage);

                /** OfferNftMessage receiver. */
                public receiver: string;

                /** OfferNftMessage creator. */
                public creator: string;

                /** OfferNftMessage collectionName. */
                public collectionName: string;

                /** OfferNftMessage name. */
                public name: string;

                /** OfferNftMessage propertyVersion. */
                public propertyVersion: number;

                /** OfferNftMessage amount. */
                public amount: number;

                /**
                 * Creates a new OfferNftMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OfferNftMessage instance
                 */
                public static create(properties?: TW.Aptos.Proto.IOfferNftMessage): TW.Aptos.Proto.OfferNftMessage;

                /**
                 * Encodes the specified OfferNftMessage message. Does not implicitly {@link TW.Aptos.Proto.OfferNftMessage.verify|verify} messages.
                 * @param message OfferNftMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Aptos.Proto.IOfferNftMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OfferNftMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OfferNftMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Aptos.Proto.OfferNftMessage;

                /**
                 * Gets the default type url for OfferNftMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CancelOfferNftMessage. */
            interface ICancelOfferNftMessage {

                /** CancelOfferNftMessage receiver */
                receiver?: (string|null);

                /** CancelOfferNftMessage creator */
                creator?: (string|null);

                /** CancelOfferNftMessage collectionName */
                collectionName?: (string|null);

                /** CancelOfferNftMessage name */
                name?: (string|null);

                /** CancelOfferNftMessage propertyVersion */
                propertyVersion?: (number|null);
            }

            /** Represents a CancelOfferNftMessage. */
            class CancelOfferNftMessage implements ICancelOfferNftMessage {

                /**
                 * Constructs a new CancelOfferNftMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Aptos.Proto.ICancelOfferNftMessage);

                /** CancelOfferNftMessage receiver. */
                public receiver: string;

                /** CancelOfferNftMessage creator. */
                public creator: string;

                /** CancelOfferNftMessage collectionName. */
                public collectionName: string;

                /** CancelOfferNftMessage name. */
                public name: string;

                /** CancelOfferNftMessage propertyVersion. */
                public propertyVersion: number;

                /**
                 * Creates a new CancelOfferNftMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CancelOfferNftMessage instance
                 */
                public static create(properties?: TW.Aptos.Proto.ICancelOfferNftMessage): TW.Aptos.Proto.CancelOfferNftMessage;

                /**
                 * Encodes the specified CancelOfferNftMessage message. Does not implicitly {@link TW.Aptos.Proto.CancelOfferNftMessage.verify|verify} messages.
                 * @param message CancelOfferNftMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Aptos.Proto.ICancelOfferNftMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CancelOfferNftMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CancelOfferNftMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Aptos.Proto.CancelOfferNftMessage;

                /**
                 * Gets the default type url for CancelOfferNftMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ClaimNftMessage. */
            interface IClaimNftMessage {

                /** ClaimNftMessage sender */
                sender?: (string|null);

                /** ClaimNftMessage creator */
                creator?: (string|null);

                /** ClaimNftMessage collectionName */
                collectionName?: (string|null);

                /** ClaimNftMessage name */
                name?: (string|null);

                /** ClaimNftMessage propertyVersion */
                propertyVersion?: (number|null);
            }

            /** Represents a ClaimNftMessage. */
            class ClaimNftMessage implements IClaimNftMessage {

                /**
                 * Constructs a new ClaimNftMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Aptos.Proto.IClaimNftMessage);

                /** ClaimNftMessage sender. */
                public sender: string;

                /** ClaimNftMessage creator. */
                public creator: string;

                /** ClaimNftMessage collectionName. */
                public collectionName: string;

                /** ClaimNftMessage name. */
                public name: string;

                /** ClaimNftMessage propertyVersion. */
                public propertyVersion: number;

                /**
                 * Creates a new ClaimNftMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ClaimNftMessage instance
                 */
                public static create(properties?: TW.Aptos.Proto.IClaimNftMessage): TW.Aptos.Proto.ClaimNftMessage;

                /**
                 * Encodes the specified ClaimNftMessage message. Does not implicitly {@link TW.Aptos.Proto.ClaimNftMessage.verify|verify} messages.
                 * @param message ClaimNftMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Aptos.Proto.IClaimNftMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ClaimNftMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ClaimNftMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Aptos.Proto.ClaimNftMessage;

                /**
                 * Gets the default type url for ClaimNftMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TortugaClaim. */
            interface ITortugaClaim {

                /** TortugaClaim idx */
                idx?: (number|null);
            }

            /** Represents a TortugaClaim. */
            class TortugaClaim implements ITortugaClaim {

                /**
                 * Constructs a new TortugaClaim.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Aptos.Proto.ITortugaClaim);

                /** TortugaClaim idx. */
                public idx: number;

                /**
                 * Creates a new TortugaClaim instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TortugaClaim instance
                 */
                public static create(properties?: TW.Aptos.Proto.ITortugaClaim): TW.Aptos.Proto.TortugaClaim;

                /**
                 * Encodes the specified TortugaClaim message. Does not implicitly {@link TW.Aptos.Proto.TortugaClaim.verify|verify} messages.
                 * @param message TortugaClaim message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Aptos.Proto.ITortugaClaim, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TortugaClaim message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TortugaClaim
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Aptos.Proto.TortugaClaim;

                /**
                 * Gets the default type url for TortugaClaim
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TortugaStake. */
            interface ITortugaStake {

                /** TortugaStake amount */
                amount?: (number|null);
            }

            /** Represents a TortugaStake. */
            class TortugaStake implements ITortugaStake {

                /**
                 * Constructs a new TortugaStake.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Aptos.Proto.ITortugaStake);

                /** TortugaStake amount. */
                public amount: number;

                /**
                 * Creates a new TortugaStake instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TortugaStake instance
                 */
                public static create(properties?: TW.Aptos.Proto.ITortugaStake): TW.Aptos.Proto.TortugaStake;

                /**
                 * Encodes the specified TortugaStake message. Does not implicitly {@link TW.Aptos.Proto.TortugaStake.verify|verify} messages.
                 * @param message TortugaStake message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Aptos.Proto.ITortugaStake, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TortugaStake message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TortugaStake
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Aptos.Proto.TortugaStake;

                /**
                 * Gets the default type url for TortugaStake
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TortugaUnstake. */
            interface ITortugaUnstake {

                /** TortugaUnstake amount */
                amount?: (number|null);
            }

            /** Represents a TortugaUnstake. */
            class TortugaUnstake implements ITortugaUnstake {

                /**
                 * Constructs a new TortugaUnstake.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Aptos.Proto.ITortugaUnstake);

                /** TortugaUnstake amount. */
                public amount: number;

                /**
                 * Creates a new TortugaUnstake instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TortugaUnstake instance
                 */
                public static create(properties?: TW.Aptos.Proto.ITortugaUnstake): TW.Aptos.Proto.TortugaUnstake;

                /**
                 * Encodes the specified TortugaUnstake message. Does not implicitly {@link TW.Aptos.Proto.TortugaUnstake.verify|verify} messages.
                 * @param message TortugaUnstake message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Aptos.Proto.ITortugaUnstake, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TortugaUnstake message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TortugaUnstake
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Aptos.Proto.TortugaUnstake;

                /**
                 * Gets the default type url for TortugaUnstake
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a LiquidStaking. */
            interface ILiquidStaking {

                /** LiquidStaking smartContractAddress */
                smartContractAddress?: (string|null);

                /** LiquidStaking stake */
                stake?: (TW.Aptos.Proto.ITortugaStake|null);

                /** LiquidStaking unstake */
                unstake?: (TW.Aptos.Proto.ITortugaUnstake|null);

                /** LiquidStaking claim */
                claim?: (TW.Aptos.Proto.ITortugaClaim|null);
            }

            /** Represents a LiquidStaking. */
            class LiquidStaking implements ILiquidStaking {

                /**
                 * Constructs a new LiquidStaking.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Aptos.Proto.ILiquidStaking);

                /** LiquidStaking smartContractAddress. */
                public smartContractAddress: string;

                /** LiquidStaking stake. */
                public stake?: (TW.Aptos.Proto.ITortugaStake|null);

                /** LiquidStaking unstake. */
                public unstake?: (TW.Aptos.Proto.ITortugaUnstake|null);

                /** LiquidStaking claim. */
                public claim?: (TW.Aptos.Proto.ITortugaClaim|null);

                /** LiquidStaking liquidStakeTransactionPayload. */
                public liquidStakeTransactionPayload?: ("stake"|"unstake"|"claim");

                /**
                 * Creates a new LiquidStaking instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LiquidStaking instance
                 */
                public static create(properties?: TW.Aptos.Proto.ILiquidStaking): TW.Aptos.Proto.LiquidStaking;

                /**
                 * Encodes the specified LiquidStaking message. Does not implicitly {@link TW.Aptos.Proto.LiquidStaking.verify|verify} messages.
                 * @param message LiquidStaking message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Aptos.Proto.ILiquidStaking, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LiquidStaking message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LiquidStaking
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Aptos.Proto.LiquidStaking;

                /**
                 * Gets the default type url for LiquidStaking
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a NftMessage. */
            interface INftMessage {

                /** NftMessage offerNft */
                offerNft?: (TW.Aptos.Proto.IOfferNftMessage|null);

                /** NftMessage cancelOfferNft */
                cancelOfferNft?: (TW.Aptos.Proto.ICancelOfferNftMessage|null);

                /** NftMessage claimNft */
                claimNft?: (TW.Aptos.Proto.IClaimNftMessage|null);
            }

            /** Represents a NftMessage. */
            class NftMessage implements INftMessage {

                /**
                 * Constructs a new NftMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Aptos.Proto.INftMessage);

                /** NftMessage offerNft. */
                public offerNft?: (TW.Aptos.Proto.IOfferNftMessage|null);

                /** NftMessage cancelOfferNft. */
                public cancelOfferNft?: (TW.Aptos.Proto.ICancelOfferNftMessage|null);

                /** NftMessage claimNft. */
                public claimNft?: (TW.Aptos.Proto.IClaimNftMessage|null);

                /** NftMessage nftTransactionPayload. */
                public nftTransactionPayload?: ("offerNft"|"cancelOfferNft"|"claimNft");

                /**
                 * Creates a new NftMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NftMessage instance
                 */
                public static create(properties?: TW.Aptos.Proto.INftMessage): TW.Aptos.Proto.NftMessage;

                /**
                 * Encodes the specified NftMessage message. Does not implicitly {@link TW.Aptos.Proto.NftMessage.verify|verify} messages.
                 * @param message NftMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Aptos.Proto.INftMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NftMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NftMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Aptos.Proto.NftMessage;

                /**
                 * Gets the default type url for NftMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SigningInput. */
            interface ISigningInput {

                /** SigningInput sender */
                sender?: (string|null);

                /** SigningInput sequenceNumber */
                sequenceNumber?: (number|null);

                /** SigningInput maxGasAmount */
                maxGasAmount?: (number|null);

                /** SigningInput gasUnitPrice */
                gasUnitPrice?: (number|null);

                /** SigningInput expirationTimestampSecs */
                expirationTimestampSecs?: (number|null);

                /** SigningInput chainId */
                chainId?: (number|null);

                /** SigningInput privateKey */
                privateKey?: (Uint8Array|null);

                /** SigningInput anyEncoded */
                anyEncoded?: (string|null);

                /** SigningInput transfer */
                transfer?: (TW.Aptos.Proto.ITransferMessage|null);

                /** SigningInput tokenTransfer */
                tokenTransfer?: (TW.Aptos.Proto.ITokenTransferMessage|null);

                /** SigningInput createAccount */
                createAccount?: (TW.Aptos.Proto.ICreateAccountMessage|null);

                /** SigningInput nftMessage */
                nftMessage?: (TW.Aptos.Proto.INftMessage|null);

                /** SigningInput liquidStakingMessage */
                liquidStakingMessage?: (TW.Aptos.Proto.ILiquidStaking|null);

                /** SigningInput tokenTransferCoins */
                tokenTransferCoins?: (TW.Aptos.Proto.ITokenTransferCoinsMessage|null);

                /** SigningInput fungibleAssetTransfer */
                fungibleAssetTransfer?: (TW.Aptos.Proto.IFungibleAssetTransferMessage|null);

                /** SigningInput abi */
                abi?: (string|null);
            }

            /** Represents a SigningInput. */
            class SigningInput implements ISigningInput {

                /**
                 * Constructs a new SigningInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Aptos.Proto.ISigningInput);

                /** SigningInput sender. */
                public sender: string;

                /** SigningInput sequenceNumber. */
                public sequenceNumber: number;

                /** SigningInput maxGasAmount. */
                public maxGasAmount: number;

                /** SigningInput gasUnitPrice. */
                public gasUnitPrice: number;

                /** SigningInput expirationTimestampSecs. */
                public expirationTimestampSecs: number;

                /** SigningInput chainId. */
                public chainId: number;

                /** SigningInput privateKey. */
                public privateKey: Uint8Array;

                /** SigningInput anyEncoded. */
                public anyEncoded: string;

                /** SigningInput transfer. */
                public transfer?: (TW.Aptos.Proto.ITransferMessage|null);

                /** SigningInput tokenTransfer. */
                public tokenTransfer?: (TW.Aptos.Proto.ITokenTransferMessage|null);

                /** SigningInput createAccount. */
                public createAccount?: (TW.Aptos.Proto.ICreateAccountMessage|null);

                /** SigningInput nftMessage. */
                public nftMessage?: (TW.Aptos.Proto.INftMessage|null);

                /** SigningInput liquidStakingMessage. */
                public liquidStakingMessage?: (TW.Aptos.Proto.ILiquidStaking|null);

                /** SigningInput tokenTransferCoins. */
                public tokenTransferCoins?: (TW.Aptos.Proto.ITokenTransferCoinsMessage|null);

                /** SigningInput fungibleAssetTransfer. */
                public fungibleAssetTransfer?: (TW.Aptos.Proto.IFungibleAssetTransferMessage|null);

                /** SigningInput abi. */
                public abi: string;

                /** SigningInput transactionPayload. */
                public transactionPayload?: ("transfer"|"tokenTransfer"|"createAccount"|"nftMessage"|"liquidStakingMessage"|"tokenTransferCoins"|"fungibleAssetTransfer");

                /**
                 * Creates a new SigningInput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningInput instance
                 */
                public static create(properties?: TW.Aptos.Proto.ISigningInput): TW.Aptos.Proto.SigningInput;

                /**
                 * Encodes the specified SigningInput message. Does not implicitly {@link TW.Aptos.Proto.SigningInput.verify|verify} messages.
                 * @param message SigningInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Aptos.Proto.ISigningInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Aptos.Proto.SigningInput;

                /**
                 * Gets the default type url for SigningInput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TransactionAuthenticator. */
            interface ITransactionAuthenticator {

                /** TransactionAuthenticator signature */
                signature?: (Uint8Array|null);

                /** TransactionAuthenticator publicKey */
                publicKey?: (Uint8Array|null);
            }

            /** Represents a TransactionAuthenticator. */
            class TransactionAuthenticator implements ITransactionAuthenticator {

                /**
                 * Constructs a new TransactionAuthenticator.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Aptos.Proto.ITransactionAuthenticator);

                /** TransactionAuthenticator signature. */
                public signature: Uint8Array;

                /** TransactionAuthenticator publicKey. */
                public publicKey: Uint8Array;

                /**
                 * Creates a new TransactionAuthenticator instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransactionAuthenticator instance
                 */
                public static create(properties?: TW.Aptos.Proto.ITransactionAuthenticator): TW.Aptos.Proto.TransactionAuthenticator;

                /**
                 * Encodes the specified TransactionAuthenticator message. Does not implicitly {@link TW.Aptos.Proto.TransactionAuthenticator.verify|verify} messages.
                 * @param message TransactionAuthenticator message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Aptos.Proto.ITransactionAuthenticator, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionAuthenticator message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransactionAuthenticator
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Aptos.Proto.TransactionAuthenticator;

                /**
                 * Gets the default type url for TransactionAuthenticator
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SigningOutput. */
            interface ISigningOutput {

                /** The raw transaction (bytes) */
                rawTxn?: (Uint8Array|null);

                /** Public key and signature to authenticate */
                authenticator?: (TW.Aptos.Proto.ITransactionAuthenticator|null);

                /** Signed and encoded transaction bytes. */
                encoded?: (Uint8Array|null);

                /** SigningOutput json */
                json?: (string|null);

                /** SigningOutput error */
                error?: (TW.Common.Proto.SigningError|null);

                /** SigningOutput errorMessage */
                errorMessage?: (string|null);
            }

            /** Represents a SigningOutput. */
            class SigningOutput implements ISigningOutput {

                /**
                 * Constructs a new SigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Aptos.Proto.ISigningOutput);

                /** The raw transaction (bytes) */
                public rawTxn: Uint8Array;

                /** Public key and signature to authenticate */
                public authenticator?: (TW.Aptos.Proto.ITransactionAuthenticator|null);

                /** Signed and encoded transaction bytes. */
                public encoded: Uint8Array;

                /** SigningOutput json. */
                public json: string;

                /** SigningOutput error. */
                public error: TW.Common.Proto.SigningError;

                /** SigningOutput errorMessage. */
                public errorMessage: string;

                /**
                 * Creates a new SigningOutput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningOutput instance
                 */
                public static create(properties?: TW.Aptos.Proto.ISigningOutput): TW.Aptos.Proto.SigningOutput;

                /**
                 * Encodes the specified SigningOutput message. Does not implicitly {@link TW.Aptos.Proto.SigningOutput.verify|verify} messages.
                 * @param message SigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Aptos.Proto.ISigningOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Aptos.Proto.SigningOutput;

                /**
                 * Gets the default type url for SigningOutput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Namespace Common. */
    namespace Common {

        /** Namespace Proto. */
        namespace Proto {

            /** SigningError enum. */
            enum SigningError {
                OK = 0,
                Error_general = 1,
                Error_internal = 2,
                Error_low_balance = 3,
                Error_zero_amount_requested = 4,
                Error_missing_private_key = 5,
                Error_invalid_private_key = 15,
                Error_invalid_address = 16,
                Error_invalid_utxo = 17,
                Error_invalid_utxo_amount = 18,
                Error_wrong_fee = 6,
                Error_signing = 7,
                Error_tx_too_big = 8,
                Error_missing_input_utxos = 9,
                Error_not_enough_utxos = 10,
                Error_script_redeem = 11,
                Error_script_output = 12,
                Error_script_witness_program = 13,
                Error_invalid_memo = 14,
                Error_input_parse = 19,
                Error_no_support_n2n = 20,
                Error_signatures_count = 21,
                Error_invalid_params = 22,
                Error_invalid_requested_token_amount = 23,
                Error_not_supported = 24,
                Error_dust_amount_requested = 25,
                Error_tx_hash_mismatch = 26
            }
        }
    }

    /** Namespace BabylonStaking. */
    namespace BabylonStaking {

        /** Namespace Proto. */
        namespace Proto {

            /** Properties of a PublicKeySignature. */
            interface IPublicKeySignature {

                /** PublicKeySignature publicKey */
                publicKey?: (Uint8Array|null);

                /** PublicKeySignature signature */
                signature?: (Uint8Array|null);
            }

            /** Represents a PublicKeySignature. */
            class PublicKeySignature implements IPublicKeySignature {

                /**
                 * Constructs a new PublicKeySignature.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BabylonStaking.Proto.IPublicKeySignature);

                /** PublicKeySignature publicKey. */
                public publicKey: Uint8Array;

                /** PublicKeySignature signature. */
                public signature: Uint8Array;

                /**
                 * Creates a new PublicKeySignature instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PublicKeySignature instance
                 */
                public static create(properties?: TW.BabylonStaking.Proto.IPublicKeySignature): TW.BabylonStaking.Proto.PublicKeySignature;

                /**
                 * Encodes the specified PublicKeySignature message. Does not implicitly {@link TW.BabylonStaking.Proto.PublicKeySignature.verify|verify} messages.
                 * @param message PublicKeySignature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.BabylonStaking.Proto.IPublicKeySignature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PublicKeySignature message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PublicKeySignature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BabylonStaking.Proto.PublicKeySignature;

                /**
                 * Gets the default type url for PublicKeySignature
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a StakingInfo. */
            interface IStakingInfo {

                /** StakingInfo stakerPublicKey */
                stakerPublicKey?: (Uint8Array|null);

                /** StakingInfo finalityProviderPublicKey */
                finalityProviderPublicKey?: (Uint8Array|null);

                /** StakingInfo stakingTime */
                stakingTime?: (number|null);

                /** StakingInfo covenantCommitteePublicKeys */
                covenantCommitteePublicKeys?: (Uint8Array[]|null);

                /** StakingInfo covenantQuorum */
                covenantQuorum?: (number|null);
            }

            /** Represents a StakingInfo. */
            class StakingInfo implements IStakingInfo {

                /**
                 * Constructs a new StakingInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BabylonStaking.Proto.IStakingInfo);

                /** StakingInfo stakerPublicKey. */
                public stakerPublicKey: Uint8Array;

                /** StakingInfo finalityProviderPublicKey. */
                public finalityProviderPublicKey: Uint8Array;

                /** StakingInfo stakingTime. */
                public stakingTime: number;

                /** StakingInfo covenantCommitteePublicKeys. */
                public covenantCommitteePublicKeys: Uint8Array[];

                /** StakingInfo covenantQuorum. */
                public covenantQuorum: number;

                /**
                 * Creates a new StakingInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StakingInfo instance
                 */
                public static create(properties?: TW.BabylonStaking.Proto.IStakingInfo): TW.BabylonStaking.Proto.StakingInfo;

                /**
                 * Encodes the specified StakingInfo message. Does not implicitly {@link TW.BabylonStaking.Proto.StakingInfo.verify|verify} messages.
                 * @param message StakingInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.BabylonStaking.Proto.IStakingInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StakingInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StakingInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BabylonStaking.Proto.StakingInfo;

                /**
                 * Gets the default type url for StakingInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an InputBuilder. */
            interface IInputBuilder {
            }

            /** Represents an InputBuilder. */
            class InputBuilder implements IInputBuilder {

                /**
                 * Constructs a new InputBuilder.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BabylonStaking.Proto.IInputBuilder);

                /**
                 * Creates a new InputBuilder instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns InputBuilder instance
                 */
                public static create(properties?: TW.BabylonStaking.Proto.IInputBuilder): TW.BabylonStaking.Proto.InputBuilder;

                /**
                 * Encodes the specified InputBuilder message. Does not implicitly {@link TW.BabylonStaking.Proto.InputBuilder.verify|verify} messages.
                 * @param message InputBuilder message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.BabylonStaking.Proto.IInputBuilder, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an InputBuilder message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns InputBuilder
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BabylonStaking.Proto.InputBuilder;

                /**
                 * Gets the default type url for InputBuilder
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace InputBuilder {

                /** Properties of a StakingTimelockPath. */
                interface IStakingTimelockPath {

                    /** StakingTimelockPath params */
                    params?: (TW.BabylonStaking.Proto.IStakingInfo|null);
                }

                /** Represents a StakingTimelockPath. */
                class StakingTimelockPath implements IStakingTimelockPath {

                    /**
                     * Constructs a new StakingTimelockPath.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BabylonStaking.Proto.InputBuilder.IStakingTimelockPath);

                    /** StakingTimelockPath params. */
                    public params?: (TW.BabylonStaking.Proto.IStakingInfo|null);

                    /**
                     * Creates a new StakingTimelockPath instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StakingTimelockPath instance
                     */
                    public static create(properties?: TW.BabylonStaking.Proto.InputBuilder.IStakingTimelockPath): TW.BabylonStaking.Proto.InputBuilder.StakingTimelockPath;

                    /**
                     * Encodes the specified StakingTimelockPath message. Does not implicitly {@link TW.BabylonStaking.Proto.InputBuilder.StakingTimelockPath.verify|verify} messages.
                     * @param message StakingTimelockPath message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.BabylonStaking.Proto.InputBuilder.IStakingTimelockPath, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StakingTimelockPath message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StakingTimelockPath
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BabylonStaking.Proto.InputBuilder.StakingTimelockPath;

                    /**
                     * Gets the default type url for StakingTimelockPath
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StakingUnbondingPath. */
                interface IStakingUnbondingPath {

                    /** StakingUnbondingPath params */
                    params?: (TW.BabylonStaking.Proto.IStakingInfo|null);

                    /** StakingUnbondingPath covenantCommitteeSignatures */
                    covenantCommitteeSignatures?: (TW.BabylonStaking.Proto.IPublicKeySignature[]|null);
                }

                /** Represents a StakingUnbondingPath. */
                class StakingUnbondingPath implements IStakingUnbondingPath {

                    /**
                     * Constructs a new StakingUnbondingPath.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BabylonStaking.Proto.InputBuilder.IStakingUnbondingPath);

                    /** StakingUnbondingPath params. */
                    public params?: (TW.BabylonStaking.Proto.IStakingInfo|null);

                    /** StakingUnbondingPath covenantCommitteeSignatures. */
                    public covenantCommitteeSignatures: TW.BabylonStaking.Proto.IPublicKeySignature[];

                    /**
                     * Creates a new StakingUnbondingPath instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StakingUnbondingPath instance
                     */
                    public static create(properties?: TW.BabylonStaking.Proto.InputBuilder.IStakingUnbondingPath): TW.BabylonStaking.Proto.InputBuilder.StakingUnbondingPath;

                    /**
                     * Encodes the specified StakingUnbondingPath message. Does not implicitly {@link TW.BabylonStaking.Proto.InputBuilder.StakingUnbondingPath.verify|verify} messages.
                     * @param message StakingUnbondingPath message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.BabylonStaking.Proto.InputBuilder.IStakingUnbondingPath, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StakingUnbondingPath message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StakingUnbondingPath
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BabylonStaking.Proto.InputBuilder.StakingUnbondingPath;

                    /**
                     * Gets the default type url for StakingUnbondingPath
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StakingSlashingPath. */
                interface IStakingSlashingPath {

                    /** StakingSlashingPath params */
                    params?: (TW.BabylonStaking.Proto.IStakingInfo|null);

                    /** StakingSlashingPath finalityProviderSignature */
                    finalityProviderSignature?: (TW.BabylonStaking.Proto.IPublicKeySignature|null);
                }

                /** Represents a StakingSlashingPath. */
                class StakingSlashingPath implements IStakingSlashingPath {

                    /**
                     * Constructs a new StakingSlashingPath.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BabylonStaking.Proto.InputBuilder.IStakingSlashingPath);

                    /** StakingSlashingPath params. */
                    public params?: (TW.BabylonStaking.Proto.IStakingInfo|null);

                    /** StakingSlashingPath finalityProviderSignature. */
                    public finalityProviderSignature?: (TW.BabylonStaking.Proto.IPublicKeySignature|null);

                    /**
                     * Creates a new StakingSlashingPath instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StakingSlashingPath instance
                     */
                    public static create(properties?: TW.BabylonStaking.Proto.InputBuilder.IStakingSlashingPath): TW.BabylonStaking.Proto.InputBuilder.StakingSlashingPath;

                    /**
                     * Encodes the specified StakingSlashingPath message. Does not implicitly {@link TW.BabylonStaking.Proto.InputBuilder.StakingSlashingPath.verify|verify} messages.
                     * @param message StakingSlashingPath message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.BabylonStaking.Proto.InputBuilder.IStakingSlashingPath, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StakingSlashingPath message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StakingSlashingPath
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BabylonStaking.Proto.InputBuilder.StakingSlashingPath;

                    /**
                     * Gets the default type url for StakingSlashingPath
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UnbondingTimelockPath. */
                interface IUnbondingTimelockPath {

                    /** UnbondingTimelockPath params */
                    params?: (TW.BabylonStaking.Proto.IStakingInfo|null);
                }

                /** Represents an UnbondingTimelockPath. */
                class UnbondingTimelockPath implements IUnbondingTimelockPath {

                    /**
                     * Constructs a new UnbondingTimelockPath.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BabylonStaking.Proto.InputBuilder.IUnbondingTimelockPath);

                    /** UnbondingTimelockPath params. */
                    public params?: (TW.BabylonStaking.Proto.IStakingInfo|null);

                    /**
                     * Creates a new UnbondingTimelockPath instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UnbondingTimelockPath instance
                     */
                    public static create(properties?: TW.BabylonStaking.Proto.InputBuilder.IUnbondingTimelockPath): TW.BabylonStaking.Proto.InputBuilder.UnbondingTimelockPath;

                    /**
                     * Encodes the specified UnbondingTimelockPath message. Does not implicitly {@link TW.BabylonStaking.Proto.InputBuilder.UnbondingTimelockPath.verify|verify} messages.
                     * @param message UnbondingTimelockPath message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.BabylonStaking.Proto.InputBuilder.IUnbondingTimelockPath, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UnbondingTimelockPath message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UnbondingTimelockPath
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BabylonStaking.Proto.InputBuilder.UnbondingTimelockPath;

                    /**
                     * Gets the default type url for UnbondingTimelockPath
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UnbondingSlashingPath. */
                interface IUnbondingSlashingPath {

                    /** UnbondingSlashingPath params */
                    params?: (TW.BabylonStaking.Proto.IStakingInfo|null);

                    /** UnbondingSlashingPath finalityProviderSignature */
                    finalityProviderSignature?: (TW.BabylonStaking.Proto.IPublicKeySignature|null);
                }

                /** Represents an UnbondingSlashingPath. */
                class UnbondingSlashingPath implements IUnbondingSlashingPath {

                    /**
                     * Constructs a new UnbondingSlashingPath.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BabylonStaking.Proto.InputBuilder.IUnbondingSlashingPath);

                    /** UnbondingSlashingPath params. */
                    public params?: (TW.BabylonStaking.Proto.IStakingInfo|null);

                    /** UnbondingSlashingPath finalityProviderSignature. */
                    public finalityProviderSignature?: (TW.BabylonStaking.Proto.IPublicKeySignature|null);

                    /**
                     * Creates a new UnbondingSlashingPath instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UnbondingSlashingPath instance
                     */
                    public static create(properties?: TW.BabylonStaking.Proto.InputBuilder.IUnbondingSlashingPath): TW.BabylonStaking.Proto.InputBuilder.UnbondingSlashingPath;

                    /**
                     * Encodes the specified UnbondingSlashingPath message. Does not implicitly {@link TW.BabylonStaking.Proto.InputBuilder.UnbondingSlashingPath.verify|verify} messages.
                     * @param message UnbondingSlashingPath message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.BabylonStaking.Proto.InputBuilder.IUnbondingSlashingPath, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UnbondingSlashingPath message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UnbondingSlashingPath
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BabylonStaking.Proto.InputBuilder.UnbondingSlashingPath;

                    /**
                     * Gets the default type url for UnbondingSlashingPath
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of an OutputBuilder. */
            interface IOutputBuilder {
            }

            /** Represents an OutputBuilder. */
            class OutputBuilder implements IOutputBuilder {

                /**
                 * Constructs a new OutputBuilder.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BabylonStaking.Proto.IOutputBuilder);

                /**
                 * Creates a new OutputBuilder instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OutputBuilder instance
                 */
                public static create(properties?: TW.BabylonStaking.Proto.IOutputBuilder): TW.BabylonStaking.Proto.OutputBuilder;

                /**
                 * Encodes the specified OutputBuilder message. Does not implicitly {@link TW.BabylonStaking.Proto.OutputBuilder.verify|verify} messages.
                 * @param message OutputBuilder message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.BabylonStaking.Proto.IOutputBuilder, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OutputBuilder message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OutputBuilder
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BabylonStaking.Proto.OutputBuilder;

                /**
                 * Gets the default type url for OutputBuilder
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace OutputBuilder {

                /** Properties of a StakingOutput. */
                interface IStakingOutput {

                    /** StakingOutput params */
                    params?: (TW.BabylonStaking.Proto.IStakingInfo|null);
                }

                /** Represents a StakingOutput. */
                class StakingOutput implements IStakingOutput {

                    /**
                     * Constructs a new StakingOutput.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BabylonStaking.Proto.OutputBuilder.IStakingOutput);

                    /** StakingOutput params. */
                    public params?: (TW.BabylonStaking.Proto.IStakingInfo|null);

                    /**
                     * Creates a new StakingOutput instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StakingOutput instance
                     */
                    public static create(properties?: TW.BabylonStaking.Proto.OutputBuilder.IStakingOutput): TW.BabylonStaking.Proto.OutputBuilder.StakingOutput;

                    /**
                     * Encodes the specified StakingOutput message. Does not implicitly {@link TW.BabylonStaking.Proto.OutputBuilder.StakingOutput.verify|verify} messages.
                     * @param message StakingOutput message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.BabylonStaking.Proto.OutputBuilder.IStakingOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StakingOutput message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StakingOutput
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BabylonStaking.Proto.OutputBuilder.StakingOutput;

                    /**
                     * Gets the default type url for StakingOutput
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UnbondingOutput. */
                interface IUnbondingOutput {

                    /** UnbondingOutput params */
                    params?: (TW.BabylonStaking.Proto.IStakingInfo|null);
                }

                /** Represents an UnbondingOutput. */
                class UnbondingOutput implements IUnbondingOutput {

                    /**
                     * Constructs a new UnbondingOutput.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BabylonStaking.Proto.OutputBuilder.IUnbondingOutput);

                    /** UnbondingOutput params. */
                    public params?: (TW.BabylonStaking.Proto.IStakingInfo|null);

                    /**
                     * Creates a new UnbondingOutput instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UnbondingOutput instance
                     */
                    public static create(properties?: TW.BabylonStaking.Proto.OutputBuilder.IUnbondingOutput): TW.BabylonStaking.Proto.OutputBuilder.UnbondingOutput;

                    /**
                     * Encodes the specified UnbondingOutput message. Does not implicitly {@link TW.BabylonStaking.Proto.OutputBuilder.UnbondingOutput.verify|verify} messages.
                     * @param message UnbondingOutput message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.BabylonStaking.Proto.OutputBuilder.IUnbondingOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UnbondingOutput message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UnbondingOutput
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BabylonStaking.Proto.OutputBuilder.UnbondingOutput;

                    /**
                     * Gets the default type url for UnbondingOutput
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an OpReturn. */
                interface IOpReturn {

                    /** OpReturn tag */
                    tag?: (Uint8Array|null);

                    /** OpReturn stakerPublicKey */
                    stakerPublicKey?: (Uint8Array|null);

                    /** OpReturn finalityProviderPublicKey */
                    finalityProviderPublicKey?: (Uint8Array|null);

                    /** OpReturn stakingTime */
                    stakingTime?: (number|null);
                }

                /** Represents an OpReturn. */
                class OpReturn implements IOpReturn {

                    /**
                     * Constructs a new OpReturn.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BabylonStaking.Proto.OutputBuilder.IOpReturn);

                    /** OpReturn tag. */
                    public tag: Uint8Array;

                    /** OpReturn stakerPublicKey. */
                    public stakerPublicKey: Uint8Array;

                    /** OpReturn finalityProviderPublicKey. */
                    public finalityProviderPublicKey: Uint8Array;

                    /** OpReturn stakingTime. */
                    public stakingTime: number;

                    /**
                     * Creates a new OpReturn instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OpReturn instance
                     */
                    public static create(properties?: TW.BabylonStaking.Proto.OutputBuilder.IOpReturn): TW.BabylonStaking.Proto.OutputBuilder.OpReturn;

                    /**
                     * Encodes the specified OpReturn message. Does not implicitly {@link TW.BabylonStaking.Proto.OutputBuilder.OpReturn.verify|verify} messages.
                     * @param message OpReturn message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.BabylonStaking.Proto.OutputBuilder.IOpReturn, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OpReturn message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OpReturn
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BabylonStaking.Proto.OutputBuilder.OpReturn;

                    /**
                     * Gets the default type url for OpReturn
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }
    }

    /** Namespace Bitcoin. */
    namespace Bitcoin {

        /** Namespace Proto. */
        namespace Proto {

            /** Properties of a Transaction. */
            interface ITransaction {

                /** Transaction version */
                version?: (number|null);

                /** Transaction lockTime */
                lockTime?: (number|null);

                /** Transaction inputs */
                inputs?: (TW.Bitcoin.Proto.ITransactionInput[]|null);

                /** Transaction outputs */
                outputs?: (TW.Bitcoin.Proto.ITransactionOutput[]|null);
            }

            /** Represents a Transaction. */
            class Transaction implements ITransaction {

                /**
                 * Constructs a new Transaction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Bitcoin.Proto.ITransaction);

                /** Transaction version. */
                public version: number;

                /** Transaction lockTime. */
                public lockTime: number;

                /** Transaction inputs. */
                public inputs: TW.Bitcoin.Proto.ITransactionInput[];

                /** Transaction outputs. */
                public outputs: TW.Bitcoin.Proto.ITransactionOutput[];

                /**
                 * Creates a new Transaction instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Transaction instance
                 */
                public static create(properties?: TW.Bitcoin.Proto.ITransaction): TW.Bitcoin.Proto.Transaction;

                /**
                 * Encodes the specified Transaction message. Does not implicitly {@link TW.Bitcoin.Proto.Transaction.verify|verify} messages.
                 * @param message Transaction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Bitcoin.Proto.ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Transaction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Transaction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Bitcoin.Proto.Transaction;

                /**
                 * Gets the default type url for Transaction
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TransactionInput. */
            interface ITransactionInput {

                /** TransactionInput previousOutput */
                previousOutput?: (TW.Bitcoin.Proto.IOutPoint|null);

                /** TransactionInput sequence */
                sequence?: (number|null);

                /** TransactionInput script */
                script?: (Uint8Array|null);
            }

            /** Represents a TransactionInput. */
            class TransactionInput implements ITransactionInput {

                /**
                 * Constructs a new TransactionInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Bitcoin.Proto.ITransactionInput);

                /** TransactionInput previousOutput. */
                public previousOutput?: (TW.Bitcoin.Proto.IOutPoint|null);

                /** TransactionInput sequence. */
                public sequence: number;

                /** TransactionInput script. */
                public script: Uint8Array;

                /**
                 * Creates a new TransactionInput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransactionInput instance
                 */
                public static create(properties?: TW.Bitcoin.Proto.ITransactionInput): TW.Bitcoin.Proto.TransactionInput;

                /**
                 * Encodes the specified TransactionInput message. Does not implicitly {@link TW.Bitcoin.Proto.TransactionInput.verify|verify} messages.
                 * @param message TransactionInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Bitcoin.Proto.ITransactionInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransactionInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Bitcoin.Proto.TransactionInput;

                /**
                 * Gets the default type url for TransactionInput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an OutPoint. */
            interface IOutPoint {

                /** OutPoint hash */
                hash?: (Uint8Array|null);

                /** OutPoint index */
                index?: (number|null);

                /** OutPoint sequence */
                sequence?: (number|null);

                /** OutPoint tree */
                tree?: (number|null);
            }

            /** Represents an OutPoint. */
            class OutPoint implements IOutPoint {

                /**
                 * Constructs a new OutPoint.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Bitcoin.Proto.IOutPoint);

                /** OutPoint hash. */
                public hash: Uint8Array;

                /** OutPoint index. */
                public index: number;

                /** OutPoint sequence. */
                public sequence: number;

                /** OutPoint tree. */
                public tree: number;

                /**
                 * Creates a new OutPoint instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OutPoint instance
                 */
                public static create(properties?: TW.Bitcoin.Proto.IOutPoint): TW.Bitcoin.Proto.OutPoint;

                /**
                 * Encodes the specified OutPoint message. Does not implicitly {@link TW.Bitcoin.Proto.OutPoint.verify|verify} messages.
                 * @param message OutPoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Bitcoin.Proto.IOutPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OutPoint message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OutPoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Bitcoin.Proto.OutPoint;

                /**
                 * Gets the default type url for OutPoint
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TransactionOutput. */
            interface ITransactionOutput {

                /** TransactionOutput value */
                value?: (number|null);

                /** TransactionOutput script */
                script?: (Uint8Array|null);

                /** TransactionOutput spendingScript */
                spendingScript?: (Uint8Array|null);
            }

            /** Represents a TransactionOutput. */
            class TransactionOutput implements ITransactionOutput {

                /**
                 * Constructs a new TransactionOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Bitcoin.Proto.ITransactionOutput);

                /** TransactionOutput value. */
                public value: number;

                /** TransactionOutput script. */
                public script: Uint8Array;

                /** TransactionOutput spendingScript. */
                public spendingScript: Uint8Array;

                /**
                 * Creates a new TransactionOutput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransactionOutput instance
                 */
                public static create(properties?: TW.Bitcoin.Proto.ITransactionOutput): TW.Bitcoin.Proto.TransactionOutput;

                /**
                 * Encodes the specified TransactionOutput message. Does not implicitly {@link TW.Bitcoin.Proto.TransactionOutput.verify|verify} messages.
                 * @param message TransactionOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Bitcoin.Proto.ITransactionOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransactionOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Bitcoin.Proto.TransactionOutput;

                /**
                 * Gets the default type url for TransactionOutput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UnspentTransaction. */
            interface IUnspentTransaction {

                /** UnspentTransaction outPoint */
                outPoint?: (TW.Bitcoin.Proto.IOutPoint|null);

                /** UnspentTransaction script */
                script?: (Uint8Array|null);

                /** UnspentTransaction amount */
                amount?: (number|null);

                /** UnspentTransaction variant */
                variant?: (TW.Bitcoin.Proto.TransactionVariant|null);

                /** UnspentTransaction spendingScript */
                spendingScript?: (Uint8Array|null);
            }

            /** Represents an UnspentTransaction. */
            class UnspentTransaction implements IUnspentTransaction {

                /**
                 * Constructs a new UnspentTransaction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Bitcoin.Proto.IUnspentTransaction);

                /** UnspentTransaction outPoint. */
                public outPoint?: (TW.Bitcoin.Proto.IOutPoint|null);

                /** UnspentTransaction script. */
                public script: Uint8Array;

                /** UnspentTransaction amount. */
                public amount: number;

                /** UnspentTransaction variant. */
                public variant: TW.Bitcoin.Proto.TransactionVariant;

                /** UnspentTransaction spendingScript. */
                public spendingScript: Uint8Array;

                /**
                 * Creates a new UnspentTransaction instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UnspentTransaction instance
                 */
                public static create(properties?: TW.Bitcoin.Proto.IUnspentTransaction): TW.Bitcoin.Proto.UnspentTransaction;

                /**
                 * Encodes the specified UnspentTransaction message. Does not implicitly {@link TW.Bitcoin.Proto.UnspentTransaction.verify|verify} messages.
                 * @param message UnspentTransaction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Bitcoin.Proto.IUnspentTransaction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UnspentTransaction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UnspentTransaction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Bitcoin.Proto.UnspentTransaction;

                /**
                 * Gets the default type url for UnspentTransaction
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** TransactionVariant enum. */
            enum TransactionVariant {
                P2PKH = 0,
                P2WPKH = 1,
                P2TRKEYPATH = 2,
                BRC20TRANSFER = 3,
                NFTINSCRIPTION = 4
            }

            /** Properties of an OutputAddress. */
            interface IOutputAddress {

                /** OutputAddress toAddress */
                toAddress?: (string|null);

                /** OutputAddress amount */
                amount?: (number|null);
            }

            /** Represents an OutputAddress. */
            class OutputAddress implements IOutputAddress {

                /**
                 * Constructs a new OutputAddress.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Bitcoin.Proto.IOutputAddress);

                /** OutputAddress toAddress. */
                public toAddress: string;

                /** OutputAddress amount. */
                public amount: number;

                /**
                 * Creates a new OutputAddress instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OutputAddress instance
                 */
                public static create(properties?: TW.Bitcoin.Proto.IOutputAddress): TW.Bitcoin.Proto.OutputAddress;

                /**
                 * Encodes the specified OutputAddress message. Does not implicitly {@link TW.Bitcoin.Proto.OutputAddress.verify|verify} messages.
                 * @param message OutputAddress message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Bitcoin.Proto.IOutputAddress, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OutputAddress message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OutputAddress
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Bitcoin.Proto.OutputAddress;

                /**
                 * Gets the default type url for OutputAddress
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an OutputIndex. */
            interface IOutputIndex {

                /** OutputIndex index */
                index?: (number|null);
            }

            /** Represents an OutputIndex. */
            class OutputIndex implements IOutputIndex {

                /**
                 * Constructs a new OutputIndex.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Bitcoin.Proto.IOutputIndex);

                /** OutputIndex index. */
                public index: number;

                /**
                 * Creates a new OutputIndex instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OutputIndex instance
                 */
                public static create(properties?: TW.Bitcoin.Proto.IOutputIndex): TW.Bitcoin.Proto.OutputIndex;

                /**
                 * Encodes the specified OutputIndex message. Does not implicitly {@link TW.Bitcoin.Proto.OutputIndex.verify|verify} messages.
                 * @param message OutputIndex message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Bitcoin.Proto.IOutputIndex, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OutputIndex message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OutputIndex
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Bitcoin.Proto.OutputIndex;

                /**
                 * Gets the default type url for OutputIndex
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SigningInput. */
            interface ISigningInput {

                /** SigningInput hashType */
                hashType?: (number|null);

                /** SigningInput amount */
                amount?: (number|null);

                /** SigningInput byteFee */
                byteFee?: (number|null);

                /** SigningInput toAddress */
                toAddress?: (string|null);

                /** SigningInput changeAddress */
                changeAddress?: (string|null);

                /** SigningInput privateKey */
                privateKey?: (Uint8Array[]|null);

                /** SigningInput scripts */
                scripts?: ({ [k: string]: Uint8Array }|null);

                /** SigningInput utxo */
                utxo?: (TW.Bitcoin.Proto.IUnspentTransaction[]|null);

                /** SigningInput useMaxAmount */
                useMaxAmount?: (boolean|null);

                /** SigningInput coinType */
                coinType?: (number|null);

                /** SigningInput plan */
                plan?: (TW.Bitcoin.Proto.ITransactionPlan|null);

                /** SigningInput lockTime */
                lockTime?: (number|null);

                /** SigningInput outputOpReturn */
                outputOpReturn?: (Uint8Array|null);

                /** SigningInput outputOpReturnIndex */
                outputOpReturnIndex?: (TW.Bitcoin.Proto.IOutputIndex|null);

                /** SigningInput extraOutputs */
                extraOutputs?: (TW.Bitcoin.Proto.IOutputAddress[]|null);

                /** SigningInput useMaxUtxo */
                useMaxUtxo?: (boolean|null);

                /** SigningInput disableDustFilter */
                disableDustFilter?: (boolean|null);

                /** SigningInput time */
                time?: (number|null);

                /** SigningInput zip_0317 */
                zip_0317?: (boolean|null);

                /** SigningInput signingV2 */
                signingV2?: (TW.BitcoinV2.Proto.ISigningInput|null);

                /** SigningInput fixedDustThreshold */
                fixedDustThreshold?: (number|null);
            }

            /** Represents a SigningInput. */
            class SigningInput implements ISigningInput {

                /**
                 * Constructs a new SigningInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Bitcoin.Proto.ISigningInput);

                /** SigningInput hashType. */
                public hashType: number;

                /** SigningInput amount. */
                public amount: number;

                /** SigningInput byteFee. */
                public byteFee: number;

                /** SigningInput toAddress. */
                public toAddress: string;

                /** SigningInput changeAddress. */
                public changeAddress: string;

                /** SigningInput privateKey. */
                public privateKey: Uint8Array[];

                /** SigningInput scripts. */
                public scripts: { [k: string]: Uint8Array };

                /** SigningInput utxo. */
                public utxo: TW.Bitcoin.Proto.IUnspentTransaction[];

                /** SigningInput useMaxAmount. */
                public useMaxAmount: boolean;

                /** SigningInput coinType. */
                public coinType: number;

                /** SigningInput plan. */
                public plan?: (TW.Bitcoin.Proto.ITransactionPlan|null);

                /** SigningInput lockTime. */
                public lockTime: number;

                /** SigningInput outputOpReturn. */
                public outputOpReturn: Uint8Array;

                /** SigningInput outputOpReturnIndex. */
                public outputOpReturnIndex?: (TW.Bitcoin.Proto.IOutputIndex|null);

                /** SigningInput extraOutputs. */
                public extraOutputs: TW.Bitcoin.Proto.IOutputAddress[];

                /** SigningInput useMaxUtxo. */
                public useMaxUtxo: boolean;

                /** SigningInput disableDustFilter. */
                public disableDustFilter: boolean;

                /** SigningInput time. */
                public time: number;

                /** SigningInput zip_0317. */
                public zip_0317: boolean;

                /** SigningInput signingV2. */
                public signingV2?: (TW.BitcoinV2.Proto.ISigningInput|null);

                /** SigningInput fixedDustThreshold. */
                public fixedDustThreshold?: (number|null);

                /** SigningInput dustPolicy. */
                public dustPolicy?: "fixedDustThreshold";

                /**
                 * Creates a new SigningInput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningInput instance
                 */
                public static create(properties?: TW.Bitcoin.Proto.ISigningInput): TW.Bitcoin.Proto.SigningInput;

                /**
                 * Encodes the specified SigningInput message. Does not implicitly {@link TW.Bitcoin.Proto.SigningInput.verify|verify} messages.
                 * @param message SigningInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Bitcoin.Proto.ISigningInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Bitcoin.Proto.SigningInput;

                /**
                 * Gets the default type url for SigningInput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TransactionPlan. */
            interface ITransactionPlan {

                /** TransactionPlan amount */
                amount?: (number|null);

                /** TransactionPlan availableAmount */
                availableAmount?: (number|null);

                /** TransactionPlan fee */
                fee?: (number|null);

                /** TransactionPlan change */
                change?: (number|null);

                /** TransactionPlan utxos */
                utxos?: (TW.Bitcoin.Proto.IUnspentTransaction[]|null);

                /** TransactionPlan branchId */
                branchId?: (Uint8Array|null);

                /** TransactionPlan error */
                error?: (TW.Common.Proto.SigningError|null);

                /** TransactionPlan outputOpReturn */
                outputOpReturn?: (Uint8Array|null);

                /** TransactionPlan outputOpReturnIndex */
                outputOpReturnIndex?: (TW.Bitcoin.Proto.IOutputIndex|null);

                /** TransactionPlan preblockhash */
                preblockhash?: (Uint8Array|null);

                /** TransactionPlan preblockheight */
                preblockheight?: (number|null);

                /** TransactionPlan planningResultV2 */
                planningResultV2?: (TW.BitcoinV2.Proto.ITransactionPlan|null);
            }

            /** Represents a TransactionPlan. */
            class TransactionPlan implements ITransactionPlan {

                /**
                 * Constructs a new TransactionPlan.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Bitcoin.Proto.ITransactionPlan);

                /** TransactionPlan amount. */
                public amount: number;

                /** TransactionPlan availableAmount. */
                public availableAmount: number;

                /** TransactionPlan fee. */
                public fee: number;

                /** TransactionPlan change. */
                public change: number;

                /** TransactionPlan utxos. */
                public utxos: TW.Bitcoin.Proto.IUnspentTransaction[];

                /** TransactionPlan branchId. */
                public branchId: Uint8Array;

                /** TransactionPlan error. */
                public error: TW.Common.Proto.SigningError;

                /** TransactionPlan outputOpReturn. */
                public outputOpReturn: Uint8Array;

                /** TransactionPlan outputOpReturnIndex. */
                public outputOpReturnIndex?: (TW.Bitcoin.Proto.IOutputIndex|null);

                /** TransactionPlan preblockhash. */
                public preblockhash: Uint8Array;

                /** TransactionPlan preblockheight. */
                public preblockheight: number;

                /** TransactionPlan planningResultV2. */
                public planningResultV2?: (TW.BitcoinV2.Proto.ITransactionPlan|null);

                /**
                 * Creates a new TransactionPlan instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransactionPlan instance
                 */
                public static create(properties?: TW.Bitcoin.Proto.ITransactionPlan): TW.Bitcoin.Proto.TransactionPlan;

                /**
                 * Encodes the specified TransactionPlan message. Does not implicitly {@link TW.Bitcoin.Proto.TransactionPlan.verify|verify} messages.
                 * @param message TransactionPlan message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Bitcoin.Proto.ITransactionPlan, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionPlan message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransactionPlan
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Bitcoin.Proto.TransactionPlan;

                /**
                 * Gets the default type url for TransactionPlan
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SigningOutput. */
            interface ISigningOutput {

                /** SigningOutput transaction */
                transaction?: (TW.Bitcoin.Proto.ITransaction|null);

                /** SigningOutput encoded */
                encoded?: (Uint8Array|null);

                /** SigningOutput transactionId */
                transactionId?: (string|null);

                /** SigningOutput error */
                error?: (TW.Common.Proto.SigningError|null);

                /** SigningOutput errorMessage */
                errorMessage?: (string|null);

                /** SigningOutput signingResultV2 */
                signingResultV2?: (TW.BitcoinV2.Proto.ISigningOutput|null);
            }

            /** Represents a SigningOutput. */
            class SigningOutput implements ISigningOutput {

                /**
                 * Constructs a new SigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Bitcoin.Proto.ISigningOutput);

                /** SigningOutput transaction. */
                public transaction?: (TW.Bitcoin.Proto.ITransaction|null);

                /** SigningOutput encoded. */
                public encoded: Uint8Array;

                /** SigningOutput transactionId. */
                public transactionId: string;

                /** SigningOutput error. */
                public error: TW.Common.Proto.SigningError;

                /** SigningOutput errorMessage. */
                public errorMessage: string;

                /** SigningOutput signingResultV2. */
                public signingResultV2?: (TW.BitcoinV2.Proto.ISigningOutput|null);

                /**
                 * Creates a new SigningOutput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningOutput instance
                 */
                public static create(properties?: TW.Bitcoin.Proto.ISigningOutput): TW.Bitcoin.Proto.SigningOutput;

                /**
                 * Encodes the specified SigningOutput message. Does not implicitly {@link TW.Bitcoin.Proto.SigningOutput.verify|verify} messages.
                 * @param message SigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Bitcoin.Proto.ISigningOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Bitcoin.Proto.SigningOutput;

                /**
                 * Gets the default type url for SigningOutput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a HashPublicKey. */
            interface IHashPublicKey {

                /** Pre-image data hash that will be used for signing */
                dataHash?: (Uint8Array|null);

                /** public key hash used for signing */
                publicKeyHash?: (Uint8Array|null);
            }

            /** Pre-image hash to be used for signing */
            class HashPublicKey implements IHashPublicKey {

                /**
                 * Constructs a new HashPublicKey.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Bitcoin.Proto.IHashPublicKey);

                /** Pre-image data hash that will be used for signing */
                public dataHash: Uint8Array;

                /** public key hash used for signing */
                public publicKeyHash: Uint8Array;

                /**
                 * Creates a new HashPublicKey instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HashPublicKey instance
                 */
                public static create(properties?: TW.Bitcoin.Proto.IHashPublicKey): TW.Bitcoin.Proto.HashPublicKey;

                /**
                 * Encodes the specified HashPublicKey message. Does not implicitly {@link TW.Bitcoin.Proto.HashPublicKey.verify|verify} messages.
                 * @param message HashPublicKey message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Bitcoin.Proto.IHashPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HashPublicKey message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HashPublicKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Bitcoin.Proto.HashPublicKey;

                /**
                 * Gets the default type url for HashPublicKey
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PreSigningOutput. */
            interface IPreSigningOutput {

                /** hash, public key list */
                hashPublicKeys?: (TW.Bitcoin.Proto.IHashPublicKey[]|null);

                /** error code, 0 is ok, other codes will be treated as errors */
                error?: (TW.Common.Proto.SigningError|null);

                /** error description */
                errorMessage?: (string|null);

                /** PreSigningOutput preSigningResultV2 */
                preSigningResultV2?: (TW.BitcoinV2.Proto.IPreSigningOutput|null);
            }

            /** Transaction pre-signing output */
            class PreSigningOutput implements IPreSigningOutput {

                /**
                 * Constructs a new PreSigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Bitcoin.Proto.IPreSigningOutput);

                /** hash, public key list */
                public hashPublicKeys: TW.Bitcoin.Proto.IHashPublicKey[];

                /** error code, 0 is ok, other codes will be treated as errors */
                public error: TW.Common.Proto.SigningError;

                /** error description */
                public errorMessage: string;

                /** PreSigningOutput preSigningResultV2. */
                public preSigningResultV2?: (TW.BitcoinV2.Proto.IPreSigningOutput|null);

                /**
                 * Creates a new PreSigningOutput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PreSigningOutput instance
                 */
                public static create(properties?: TW.Bitcoin.Proto.IPreSigningOutput): TW.Bitcoin.Proto.PreSigningOutput;

                /**
                 * Encodes the specified PreSigningOutput message. Does not implicitly {@link TW.Bitcoin.Proto.PreSigningOutput.verify|verify} messages.
                 * @param message PreSigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Bitcoin.Proto.IPreSigningOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PreSigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PreSigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Bitcoin.Proto.PreSigningOutput;

                /**
                 * Gets the default type url for PreSigningOutput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Namespace BitcoinV2. */
    namespace BitcoinV2 {

        /** Namespace Proto. */
        namespace Proto {

            /** InputSelector enum. */
            enum InputSelector {
                SelectAscending = 0,
                SelectInOrder = 1,
                SelectDescending = 2,
                UseAll = 10
            }

            /** Properties of a PublicKeyOrHash. */
            interface IPublicKeyOrHash {

                /** PublicKeyOrHash pubkey */
                pubkey?: (Uint8Array|null);

                /** PublicKeyOrHash hash */
                hash?: (Uint8Array|null);
            }

            /** Represents a PublicKeyOrHash. */
            class PublicKeyOrHash implements IPublicKeyOrHash {

                /**
                 * Constructs a new PublicKeyOrHash.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BitcoinV2.Proto.IPublicKeyOrHash);

                /** PublicKeyOrHash pubkey. */
                public pubkey?: (Uint8Array|null);

                /** PublicKeyOrHash hash. */
                public hash?: (Uint8Array|null);

                /** PublicKeyOrHash variant. */
                public variant?: ("pubkey"|"hash");

                /**
                 * Creates a new PublicKeyOrHash instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PublicKeyOrHash instance
                 */
                public static create(properties?: TW.BitcoinV2.Proto.IPublicKeyOrHash): TW.BitcoinV2.Proto.PublicKeyOrHash;

                /**
                 * Encodes the specified PublicKeyOrHash message. Does not implicitly {@link TW.BitcoinV2.Proto.PublicKeyOrHash.verify|verify} messages.
                 * @param message PublicKeyOrHash message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.BitcoinV2.Proto.IPublicKeyOrHash, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PublicKeyOrHash message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PublicKeyOrHash
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.PublicKeyOrHash;

                /**
                 * Gets the default type url for PublicKeyOrHash
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PublicKeySignature. */
            interface IPublicKeySignature {

                /** PublicKeySignature publicKey */
                publicKey?: (Uint8Array|null);

                /** PublicKeySignature signature */
                signature?: (Uint8Array|null);
            }

            /** Represents a PublicKeySignature. */
            class PublicKeySignature implements IPublicKeySignature {

                /**
                 * Constructs a new PublicKeySignature.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BitcoinV2.Proto.IPublicKeySignature);

                /** PublicKeySignature publicKey. */
                public publicKey: Uint8Array;

                /** PublicKeySignature signature. */
                public signature: Uint8Array;

                /**
                 * Creates a new PublicKeySignature instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PublicKeySignature instance
                 */
                public static create(properties?: TW.BitcoinV2.Proto.IPublicKeySignature): TW.BitcoinV2.Proto.PublicKeySignature;

                /**
                 * Encodes the specified PublicKeySignature message. Does not implicitly {@link TW.BitcoinV2.Proto.PublicKeySignature.verify|verify} messages.
                 * @param message PublicKeySignature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.BitcoinV2.Proto.IPublicKeySignature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PublicKeySignature message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PublicKeySignature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.PublicKeySignature;

                /**
                 * Gets the default type url for PublicKeySignature
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an Input. */
            interface IInput {

                /** Input outPoint */
                outPoint?: (TW.Utxo.Proto.IOutPoint|null);

                /** Input value */
                value?: (number|null);

                /** Input sighashType */
                sighashType?: (number|null);

                /** Input sequence */
                sequence?: (TW.BitcoinV2.Proto.Input.ISequence|null);

                /** Input scriptBuilder */
                scriptBuilder?: (TW.BitcoinV2.Proto.Input.IInputBuilder|null);

                /** Input scriptData */
                scriptData?: (Uint8Array|null);

                /** Input receiverAddress */
                receiverAddress?: (string|null);
            }

            /** Represents an Input. */
            class Input implements IInput {

                /**
                 * Constructs a new Input.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BitcoinV2.Proto.IInput);

                /** Input outPoint. */
                public outPoint?: (TW.Utxo.Proto.IOutPoint|null);

                /** Input value. */
                public value: number;

                /** Input sighashType. */
                public sighashType: number;

                /** Input sequence. */
                public sequence?: (TW.BitcoinV2.Proto.Input.ISequence|null);

                /** Input scriptBuilder. */
                public scriptBuilder?: (TW.BitcoinV2.Proto.Input.IInputBuilder|null);

                /** Input scriptData. */
                public scriptData?: (Uint8Array|null);

                /** Input receiverAddress. */
                public receiverAddress?: (string|null);

                /** Input claimingScript. */
                public claimingScript?: ("scriptBuilder"|"scriptData"|"receiverAddress");

                /**
                 * Creates a new Input instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Input instance
                 */
                public static create(properties?: TW.BitcoinV2.Proto.IInput): TW.BitcoinV2.Proto.Input;

                /**
                 * Encodes the specified Input message. Does not implicitly {@link TW.BitcoinV2.Proto.Input.verify|verify} messages.
                 * @param message Input message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.BitcoinV2.Proto.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Input message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Input
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.Input;

                /**
                 * Gets the default type url for Input
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Input {

                /** Properties of a Sequence. */
                interface ISequence {

                    /** Sequence sequence */
                    sequence?: (number|null);
                }

                /** Represents a Sequence. */
                class Sequence implements ISequence {

                    /**
                     * Constructs a new Sequence.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BitcoinV2.Proto.Input.ISequence);

                    /** Sequence sequence. */
                    public sequence: number;

                    /**
                     * Creates a new Sequence instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Sequence instance
                     */
                    public static create(properties?: TW.BitcoinV2.Proto.Input.ISequence): TW.BitcoinV2.Proto.Input.Sequence;

                    /**
                     * Encodes the specified Sequence message. Does not implicitly {@link TW.BitcoinV2.Proto.Input.Sequence.verify|verify} messages.
                     * @param message Sequence message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.BitcoinV2.Proto.Input.ISequence, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Sequence message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Sequence
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.Input.Sequence;

                    /**
                     * Gets the default type url for Sequence
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an InputBuilder. */
                interface IInputBuilder {

                    /** InputBuilder p2pk */
                    p2pk?: (Uint8Array|null);

                    /** InputBuilder p2pkh */
                    p2pkh?: (TW.BitcoinV2.Proto.IPublicKeyOrHash|null);

                    /** InputBuilder p2wpkh */
                    p2wpkh?: (TW.BitcoinV2.Proto.IPublicKeyOrHash|null);

                    /** InputBuilder p2trKeyPath */
                    p2trKeyPath?: (Uint8Array|null);

                    /** InputBuilder brc20Inscribe */
                    brc20Inscribe?: (TW.BitcoinV2.Proto.Input.IInputBrc20Inscription|null);

                    /** InputBuilder babylonStakingTimelockPath */
                    babylonStakingTimelockPath?: (TW.BabylonStaking.Proto.InputBuilder.IStakingTimelockPath|null);

                    /** InputBuilder babylonStakingUnbondingPath */
                    babylonStakingUnbondingPath?: (TW.BabylonStaking.Proto.InputBuilder.IStakingUnbondingPath|null);

                    /** InputBuilder babylonStakingSlashingPath */
                    babylonStakingSlashingPath?: (TW.BabylonStaking.Proto.InputBuilder.IStakingSlashingPath|null);

                    /** InputBuilder babylonUnbondingTimelockPath */
                    babylonUnbondingTimelockPath?: (TW.BabylonStaking.Proto.InputBuilder.IUnbondingTimelockPath|null);

                    /** InputBuilder babylonUnbondingSlashingPath */
                    babylonUnbondingSlashingPath?: (TW.BabylonStaking.Proto.InputBuilder.IUnbondingSlashingPath|null);
                }

                /** Represents an InputBuilder. */
                class InputBuilder implements IInputBuilder {

                    /**
                     * Constructs a new InputBuilder.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BitcoinV2.Proto.Input.IInputBuilder);

                    /** InputBuilder p2pk. */
                    public p2pk?: (Uint8Array|null);

                    /** InputBuilder p2pkh. */
                    public p2pkh?: (TW.BitcoinV2.Proto.IPublicKeyOrHash|null);

                    /** InputBuilder p2wpkh. */
                    public p2wpkh?: (TW.BitcoinV2.Proto.IPublicKeyOrHash|null);

                    /** InputBuilder p2trKeyPath. */
                    public p2trKeyPath?: (Uint8Array|null);

                    /** InputBuilder brc20Inscribe. */
                    public brc20Inscribe?: (TW.BitcoinV2.Proto.Input.IInputBrc20Inscription|null);

                    /** InputBuilder babylonStakingTimelockPath. */
                    public babylonStakingTimelockPath?: (TW.BabylonStaking.Proto.InputBuilder.IStakingTimelockPath|null);

                    /** InputBuilder babylonStakingUnbondingPath. */
                    public babylonStakingUnbondingPath?: (TW.BabylonStaking.Proto.InputBuilder.IStakingUnbondingPath|null);

                    /** InputBuilder babylonStakingSlashingPath. */
                    public babylonStakingSlashingPath?: (TW.BabylonStaking.Proto.InputBuilder.IStakingSlashingPath|null);

                    /** InputBuilder babylonUnbondingTimelockPath. */
                    public babylonUnbondingTimelockPath?: (TW.BabylonStaking.Proto.InputBuilder.IUnbondingTimelockPath|null);

                    /** InputBuilder babylonUnbondingSlashingPath. */
                    public babylonUnbondingSlashingPath?: (TW.BabylonStaking.Proto.InputBuilder.IUnbondingSlashingPath|null);

                    /** InputBuilder variant. */
                    public variant?: ("p2pk"|"p2pkh"|"p2wpkh"|"p2trKeyPath"|"brc20Inscribe"|"babylonStakingTimelockPath"|"babylonStakingUnbondingPath"|"babylonStakingSlashingPath"|"babylonUnbondingTimelockPath"|"babylonUnbondingSlashingPath");

                    /**
                     * Creates a new InputBuilder instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InputBuilder instance
                     */
                    public static create(properties?: TW.BitcoinV2.Proto.Input.IInputBuilder): TW.BitcoinV2.Proto.Input.InputBuilder;

                    /**
                     * Encodes the specified InputBuilder message. Does not implicitly {@link TW.BitcoinV2.Proto.Input.InputBuilder.verify|verify} messages.
                     * @param message InputBuilder message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.BitcoinV2.Proto.Input.IInputBuilder, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InputBuilder message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InputBuilder
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.Input.InputBuilder;

                    /**
                     * Gets the default type url for InputBuilder
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an InputTaprootScriptPath. */
                interface IInputTaprootScriptPath {

                    /** InputTaprootScriptPath payload */
                    payload?: (Uint8Array|null);

                    /** InputTaprootScriptPath controlBlock */
                    controlBlock?: (Uint8Array|null);
                }

                /** Represents an InputTaprootScriptPath. */
                class InputTaprootScriptPath implements IInputTaprootScriptPath {

                    /**
                     * Constructs a new InputTaprootScriptPath.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BitcoinV2.Proto.Input.IInputTaprootScriptPath);

                    /** InputTaprootScriptPath payload. */
                    public payload: Uint8Array;

                    /** InputTaprootScriptPath controlBlock. */
                    public controlBlock: Uint8Array;

                    /**
                     * Creates a new InputTaprootScriptPath instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InputTaprootScriptPath instance
                     */
                    public static create(properties?: TW.BitcoinV2.Proto.Input.IInputTaprootScriptPath): TW.BitcoinV2.Proto.Input.InputTaprootScriptPath;

                    /**
                     * Encodes the specified InputTaprootScriptPath message. Does not implicitly {@link TW.BitcoinV2.Proto.Input.InputTaprootScriptPath.verify|verify} messages.
                     * @param message InputTaprootScriptPath message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.BitcoinV2.Proto.Input.IInputTaprootScriptPath, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InputTaprootScriptPath message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InputTaprootScriptPath
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.Input.InputTaprootScriptPath;

                    /**
                     * Gets the default type url for InputTaprootScriptPath
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an InputBrc20Inscription. */
                interface IInputBrc20Inscription {

                    /** InputBrc20Inscription inscribeTo */
                    inscribeTo?: (Uint8Array|null);

                    /** InputBrc20Inscription ticker */
                    ticker?: (string|null);

                    /** InputBrc20Inscription transferAmount */
                    transferAmount?: (string|null);
                }

                /** Represents an InputBrc20Inscription. */
                class InputBrc20Inscription implements IInputBrc20Inscription {

                    /**
                     * Constructs a new InputBrc20Inscription.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BitcoinV2.Proto.Input.IInputBrc20Inscription);

                    /** InputBrc20Inscription inscribeTo. */
                    public inscribeTo: Uint8Array;

                    /** InputBrc20Inscription ticker. */
                    public ticker: string;

                    /** InputBrc20Inscription transferAmount. */
                    public transferAmount: string;

                    /**
                     * Creates a new InputBrc20Inscription instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InputBrc20Inscription instance
                     */
                    public static create(properties?: TW.BitcoinV2.Proto.Input.IInputBrc20Inscription): TW.BitcoinV2.Proto.Input.InputBrc20Inscription;

                    /**
                     * Encodes the specified InputBrc20Inscription message. Does not implicitly {@link TW.BitcoinV2.Proto.Input.InputBrc20Inscription.verify|verify} messages.
                     * @param message InputBrc20Inscription message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.BitcoinV2.Proto.Input.IInputBrc20Inscription, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InputBrc20Inscription message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InputBrc20Inscription
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.Input.InputBrc20Inscription;

                    /**
                     * Gets the default type url for InputBrc20Inscription
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of an Output. */
            interface IOutput {

                /** Output value */
                value?: (number|null);

                /** Output builder */
                builder?: (TW.BitcoinV2.Proto.Output.IOutputBuilder|null);

                /** Output customScriptPubkey */
                customScriptPubkey?: (Uint8Array|null);

                /** Output toAddress */
                toAddress?: (string|null);
            }

            /** Represents an Output. */
            class Output implements IOutput {

                /**
                 * Constructs a new Output.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BitcoinV2.Proto.IOutput);

                /** Output value. */
                public value: number;

                /** Output builder. */
                public builder?: (TW.BitcoinV2.Proto.Output.IOutputBuilder|null);

                /** Output customScriptPubkey. */
                public customScriptPubkey?: (Uint8Array|null);

                /** Output toAddress. */
                public toAddress?: (string|null);

                /** Output toRecipient. */
                public toRecipient?: ("builder"|"customScriptPubkey"|"toAddress");

                /**
                 * Creates a new Output instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Output instance
                 */
                public static create(properties?: TW.BitcoinV2.Proto.IOutput): TW.BitcoinV2.Proto.Output;

                /**
                 * Encodes the specified Output message. Does not implicitly {@link TW.BitcoinV2.Proto.Output.verify|verify} messages.
                 * @param message Output message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.BitcoinV2.Proto.IOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Output message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Output
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.Output;

                /**
                 * Gets the default type url for Output
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Output {

                /** Properties of an OutputBuilder. */
                interface IOutputBuilder {

                    /** OutputBuilder p2sh */
                    p2sh?: (TW.BitcoinV2.Proto.Output.IRedeemScriptOrHash|null);

                    /** OutputBuilder p2pk */
                    p2pk?: (Uint8Array|null);

                    /** OutputBuilder p2pkh */
                    p2pkh?: (TW.BitcoinV2.Proto.IPublicKeyOrHash|null);

                    /** OutputBuilder p2wsh */
                    p2wsh?: (TW.BitcoinV2.Proto.Output.IRedeemScriptOrHash|null);

                    /** OutputBuilder p2wpkh */
                    p2wpkh?: (TW.BitcoinV2.Proto.IPublicKeyOrHash|null);

                    /** OutputBuilder p2trKeyPath */
                    p2trKeyPath?: (Uint8Array|null);

                    /** OutputBuilder p2trScriptPath */
                    p2trScriptPath?: (TW.BitcoinV2.Proto.Output.IOutputTaprootScriptPath|null);

                    /** OutputBuilder p2trDangerousAssumeTweaked */
                    p2trDangerousAssumeTweaked?: (Uint8Array|null);

                    /** OutputBuilder brc20Inscribe */
                    brc20Inscribe?: (TW.BitcoinV2.Proto.Output.IOutputBrc20Inscription|null);

                    /** OutputBuilder opReturn */
                    opReturn?: (Uint8Array|null);

                    /** OutputBuilder babylonStaking */
                    babylonStaking?: (TW.BabylonStaking.Proto.OutputBuilder.IStakingOutput|null);

                    /** OutputBuilder babylonUnbonding */
                    babylonUnbonding?: (TW.BabylonStaking.Proto.OutputBuilder.IUnbondingOutput|null);

                    /** OutputBuilder babylonStakingOpReturn */
                    babylonStakingOpReturn?: (TW.BabylonStaking.Proto.OutputBuilder.IOpReturn|null);
                }

                /** Represents an OutputBuilder. */
                class OutputBuilder implements IOutputBuilder {

                    /**
                     * Constructs a new OutputBuilder.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BitcoinV2.Proto.Output.IOutputBuilder);

                    /** OutputBuilder p2sh. */
                    public p2sh?: (TW.BitcoinV2.Proto.Output.IRedeemScriptOrHash|null);

                    /** OutputBuilder p2pk. */
                    public p2pk?: (Uint8Array|null);

                    /** OutputBuilder p2pkh. */
                    public p2pkh?: (TW.BitcoinV2.Proto.IPublicKeyOrHash|null);

                    /** OutputBuilder p2wsh. */
                    public p2wsh?: (TW.BitcoinV2.Proto.Output.IRedeemScriptOrHash|null);

                    /** OutputBuilder p2wpkh. */
                    public p2wpkh?: (TW.BitcoinV2.Proto.IPublicKeyOrHash|null);

                    /** OutputBuilder p2trKeyPath. */
                    public p2trKeyPath?: (Uint8Array|null);

                    /** OutputBuilder p2trScriptPath. */
                    public p2trScriptPath?: (TW.BitcoinV2.Proto.Output.IOutputTaprootScriptPath|null);

                    /** OutputBuilder p2trDangerousAssumeTweaked. */
                    public p2trDangerousAssumeTweaked?: (Uint8Array|null);

                    /** OutputBuilder brc20Inscribe. */
                    public brc20Inscribe?: (TW.BitcoinV2.Proto.Output.IOutputBrc20Inscription|null);

                    /** OutputBuilder opReturn. */
                    public opReturn?: (Uint8Array|null);

                    /** OutputBuilder babylonStaking. */
                    public babylonStaking?: (TW.BabylonStaking.Proto.OutputBuilder.IStakingOutput|null);

                    /** OutputBuilder babylonUnbonding. */
                    public babylonUnbonding?: (TW.BabylonStaking.Proto.OutputBuilder.IUnbondingOutput|null);

                    /** OutputBuilder babylonStakingOpReturn. */
                    public babylonStakingOpReturn?: (TW.BabylonStaking.Proto.OutputBuilder.IOpReturn|null);

                    /** OutputBuilder variant. */
                    public variant?: ("p2sh"|"p2pk"|"p2pkh"|"p2wsh"|"p2wpkh"|"p2trKeyPath"|"p2trScriptPath"|"p2trDangerousAssumeTweaked"|"brc20Inscribe"|"opReturn"|"babylonStaking"|"babylonUnbonding"|"babylonStakingOpReturn");

                    /**
                     * Creates a new OutputBuilder instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OutputBuilder instance
                     */
                    public static create(properties?: TW.BitcoinV2.Proto.Output.IOutputBuilder): TW.BitcoinV2.Proto.Output.OutputBuilder;

                    /**
                     * Encodes the specified OutputBuilder message. Does not implicitly {@link TW.BitcoinV2.Proto.Output.OutputBuilder.verify|verify} messages.
                     * @param message OutputBuilder message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.BitcoinV2.Proto.Output.IOutputBuilder, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OutputBuilder message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OutputBuilder
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.Output.OutputBuilder;

                    /**
                     * Gets the default type url for OutputBuilder
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RedeemScriptOrHash. */
                interface IRedeemScriptOrHash {

                    /** RedeemScriptOrHash redeemScript */
                    redeemScript?: (Uint8Array|null);

                    /** RedeemScriptOrHash hash */
                    hash?: (Uint8Array|null);
                }

                /** Represents a RedeemScriptOrHash. */
                class RedeemScriptOrHash implements IRedeemScriptOrHash {

                    /**
                     * Constructs a new RedeemScriptOrHash.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BitcoinV2.Proto.Output.IRedeemScriptOrHash);

                    /** RedeemScriptOrHash redeemScript. */
                    public redeemScript?: (Uint8Array|null);

                    /** RedeemScriptOrHash hash. */
                    public hash?: (Uint8Array|null);

                    /** RedeemScriptOrHash variant. */
                    public variant?: ("redeemScript"|"hash");

                    /**
                     * Creates a new RedeemScriptOrHash instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RedeemScriptOrHash instance
                     */
                    public static create(properties?: TW.BitcoinV2.Proto.Output.IRedeemScriptOrHash): TW.BitcoinV2.Proto.Output.RedeemScriptOrHash;

                    /**
                     * Encodes the specified RedeemScriptOrHash message. Does not implicitly {@link TW.BitcoinV2.Proto.Output.RedeemScriptOrHash.verify|verify} messages.
                     * @param message RedeemScriptOrHash message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.BitcoinV2.Proto.Output.IRedeemScriptOrHash, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RedeemScriptOrHash message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RedeemScriptOrHash
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.Output.RedeemScriptOrHash;

                    /**
                     * Gets the default type url for RedeemScriptOrHash
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an OutputTaprootScriptPath. */
                interface IOutputTaprootScriptPath {

                    /** OutputTaprootScriptPath internalKey */
                    internalKey?: (Uint8Array|null);

                    /** OutputTaprootScriptPath merkleRoot */
                    merkleRoot?: (Uint8Array|null);
                }

                /** Represents an OutputTaprootScriptPath. */
                class OutputTaprootScriptPath implements IOutputTaprootScriptPath {

                    /**
                     * Constructs a new OutputTaprootScriptPath.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BitcoinV2.Proto.Output.IOutputTaprootScriptPath);

                    /** OutputTaprootScriptPath internalKey. */
                    public internalKey: Uint8Array;

                    /** OutputTaprootScriptPath merkleRoot. */
                    public merkleRoot: Uint8Array;

                    /**
                     * Creates a new OutputTaprootScriptPath instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OutputTaprootScriptPath instance
                     */
                    public static create(properties?: TW.BitcoinV2.Proto.Output.IOutputTaprootScriptPath): TW.BitcoinV2.Proto.Output.OutputTaprootScriptPath;

                    /**
                     * Encodes the specified OutputTaprootScriptPath message. Does not implicitly {@link TW.BitcoinV2.Proto.Output.OutputTaprootScriptPath.verify|verify} messages.
                     * @param message OutputTaprootScriptPath message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.BitcoinV2.Proto.Output.IOutputTaprootScriptPath, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OutputTaprootScriptPath message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OutputTaprootScriptPath
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.Output.OutputTaprootScriptPath;

                    /**
                     * Gets the default type url for OutputTaprootScriptPath
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an OutputBrc20Inscription. */
                interface IOutputBrc20Inscription {

                    /** OutputBrc20Inscription inscribeTo */
                    inscribeTo?: (Uint8Array|null);

                    /** OutputBrc20Inscription ticker */
                    ticker?: (string|null);

                    /** OutputBrc20Inscription transferAmount */
                    transferAmount?: (string|null);
                }

                /** Represents an OutputBrc20Inscription. */
                class OutputBrc20Inscription implements IOutputBrc20Inscription {

                    /**
                     * Constructs a new OutputBrc20Inscription.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BitcoinV2.Proto.Output.IOutputBrc20Inscription);

                    /** OutputBrc20Inscription inscribeTo. */
                    public inscribeTo: Uint8Array;

                    /** OutputBrc20Inscription ticker. */
                    public ticker: string;

                    /** OutputBrc20Inscription transferAmount. */
                    public transferAmount: string;

                    /**
                     * Creates a new OutputBrc20Inscription instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OutputBrc20Inscription instance
                     */
                    public static create(properties?: TW.BitcoinV2.Proto.Output.IOutputBrc20Inscription): TW.BitcoinV2.Proto.Output.OutputBrc20Inscription;

                    /**
                     * Encodes the specified OutputBrc20Inscription message. Does not implicitly {@link TW.BitcoinV2.Proto.Output.OutputBrc20Inscription.verify|verify} messages.
                     * @param message OutputBrc20Inscription message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.BitcoinV2.Proto.Output.IOutputBrc20Inscription, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OutputBrc20Inscription message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OutputBrc20Inscription
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.Output.OutputBrc20Inscription;

                    /**
                     * Gets the default type url for OutputBrc20Inscription
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a ChainInfo. */
            interface IChainInfo {

                /** ChainInfo p2pkhPrefix */
                p2pkhPrefix?: (number|null);

                /** ChainInfo p2shPrefix */
                p2shPrefix?: (number|null);

                /** ChainInfo hrp */
                hrp?: (string|null);
            }

            /** Represents a ChainInfo. */
            class ChainInfo implements IChainInfo {

                /**
                 * Constructs a new ChainInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BitcoinV2.Proto.IChainInfo);

                /** ChainInfo p2pkhPrefix. */
                public p2pkhPrefix: number;

                /** ChainInfo p2shPrefix. */
                public p2shPrefix: number;

                /** ChainInfo hrp. */
                public hrp: string;

                /**
                 * Creates a new ChainInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ChainInfo instance
                 */
                public static create(properties?: TW.BitcoinV2.Proto.IChainInfo): TW.BitcoinV2.Proto.ChainInfo;

                /**
                 * Encodes the specified ChainInfo message. Does not implicitly {@link TW.BitcoinV2.Proto.ChainInfo.verify|verify} messages.
                 * @param message ChainInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.BitcoinV2.Proto.IChainInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ChainInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ChainInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.ChainInfo;

                /**
                 * Gets the default type url for ChainInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** TransactionVersion enum. */
            enum TransactionVersion {
                UseDefault = 0,
                V1 = 1,
                V2 = 2
            }

            /** Properties of a TransactionBuilder. */
            interface ITransactionBuilder {

                /** TransactionBuilder version */
                version?: (TW.BitcoinV2.Proto.TransactionVersion|null);

                /** TransactionBuilder lockTime */
                lockTime?: (number|null);

                /** TransactionBuilder inputs */
                inputs?: (TW.BitcoinV2.Proto.IInput[]|null);

                /** TransactionBuilder outputs */
                outputs?: (TW.BitcoinV2.Proto.IOutput[]|null);

                /** TransactionBuilder inputSelector */
                inputSelector?: (TW.BitcoinV2.Proto.InputSelector|null);

                /** TransactionBuilder feePerVb */
                feePerVb?: (number|null);

                /** TransactionBuilder changeOutput */
                changeOutput?: (TW.BitcoinV2.Proto.IOutput|null);

                /** TransactionBuilder maxAmountOutput */
                maxAmountOutput?: (TW.BitcoinV2.Proto.IOutput|null);

                /** TransactionBuilder fixedDustThreshold */
                fixedDustThreshold?: (number|null);

                /** TransactionBuilder zcashExtraData */
                zcashExtraData?: (TW.Zcash.Proto.ITransactionBuilderExtraData|null);

                /** TransactionBuilder decredExtraData */
                decredExtraData?: (TW.DecredV2.Proto.ITransactionBuilderExtraData|null);
            }

            /** Represents a TransactionBuilder. */
            class TransactionBuilder implements ITransactionBuilder {

                /**
                 * Constructs a new TransactionBuilder.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BitcoinV2.Proto.ITransactionBuilder);

                /** TransactionBuilder version. */
                public version: TW.BitcoinV2.Proto.TransactionVersion;

                /** TransactionBuilder lockTime. */
                public lockTime: number;

                /** TransactionBuilder inputs. */
                public inputs: TW.BitcoinV2.Proto.IInput[];

                /** TransactionBuilder outputs. */
                public outputs: TW.BitcoinV2.Proto.IOutput[];

                /** TransactionBuilder inputSelector. */
                public inputSelector: TW.BitcoinV2.Proto.InputSelector;

                /** TransactionBuilder feePerVb. */
                public feePerVb: number;

                /** TransactionBuilder changeOutput. */
                public changeOutput?: (TW.BitcoinV2.Proto.IOutput|null);

                /** TransactionBuilder maxAmountOutput. */
                public maxAmountOutput?: (TW.BitcoinV2.Proto.IOutput|null);

                /** TransactionBuilder fixedDustThreshold. */
                public fixedDustThreshold?: (number|null);

                /** TransactionBuilder zcashExtraData. */
                public zcashExtraData?: (TW.Zcash.Proto.ITransactionBuilderExtraData|null);

                /** TransactionBuilder decredExtraData. */
                public decredExtraData?: (TW.DecredV2.Proto.ITransactionBuilderExtraData|null);

                /** TransactionBuilder dustPolicy. */
                public dustPolicy?: "fixedDustThreshold";

                /** TransactionBuilder chainSpecific. */
                public chainSpecific?: ("zcashExtraData"|"decredExtraData");

                /**
                 * Creates a new TransactionBuilder instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransactionBuilder instance
                 */
                public static create(properties?: TW.BitcoinV2.Proto.ITransactionBuilder): TW.BitcoinV2.Proto.TransactionBuilder;

                /**
                 * Encodes the specified TransactionBuilder message. Does not implicitly {@link TW.BitcoinV2.Proto.TransactionBuilder.verify|verify} messages.
                 * @param message TransactionBuilder message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.BitcoinV2.Proto.ITransactionBuilder, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionBuilder message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransactionBuilder
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.TransactionBuilder;

                /**
                 * Gets the default type url for TransactionBuilder
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Psbt. */
            interface IPsbt {

                /** Psbt psbt */
                psbt?: (Uint8Array|null);
            }

            /** Represents a Psbt. */
            class Psbt implements IPsbt {

                /**
                 * Constructs a new Psbt.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BitcoinV2.Proto.IPsbt);

                /** Psbt psbt. */
                public psbt: Uint8Array;

                /**
                 * Creates a new Psbt instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Psbt instance
                 */
                public static create(properties?: TW.BitcoinV2.Proto.IPsbt): TW.BitcoinV2.Proto.Psbt;

                /**
                 * Encodes the specified Psbt message. Does not implicitly {@link TW.BitcoinV2.Proto.Psbt.verify|verify} messages.
                 * @param message Psbt message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.BitcoinV2.Proto.IPsbt, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Psbt message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Psbt
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.Psbt;

                /**
                 * Gets the default type url for Psbt
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SigningInput. */
            interface ISigningInput {

                /** SigningInput privateKeys */
                privateKeys?: (Uint8Array[]|null);

                /** SigningInput publicKeys */
                publicKeys?: (Uint8Array[]|null);

                /** SigningInput chainInfo */
                chainInfo?: (TW.BitcoinV2.Proto.IChainInfo|null);

                /** SigningInput dangerousUseFixedSchnorrRng */
                dangerousUseFixedSchnorrRng?: (boolean|null);

                /** SigningInput builder */
                builder?: (TW.BitcoinV2.Proto.ITransactionBuilder|null);

                /** SigningInput psbt */
                psbt?: (TW.BitcoinV2.Proto.IPsbt|null);
            }

            /** Represents a SigningInput. */
            class SigningInput implements ISigningInput {

                /**
                 * Constructs a new SigningInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BitcoinV2.Proto.ISigningInput);

                /** SigningInput privateKeys. */
                public privateKeys: Uint8Array[];

                /** SigningInput publicKeys. */
                public publicKeys: Uint8Array[];

                /** SigningInput chainInfo. */
                public chainInfo?: (TW.BitcoinV2.Proto.IChainInfo|null);

                /** SigningInput dangerousUseFixedSchnorrRng. */
                public dangerousUseFixedSchnorrRng: boolean;

                /** SigningInput builder. */
                public builder?: (TW.BitcoinV2.Proto.ITransactionBuilder|null);

                /** SigningInput psbt. */
                public psbt?: (TW.BitcoinV2.Proto.IPsbt|null);

                /** SigningInput transaction. */
                public transaction?: ("builder"|"psbt");

                /**
                 * Creates a new SigningInput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningInput instance
                 */
                public static create(properties?: TW.BitcoinV2.Proto.ISigningInput): TW.BitcoinV2.Proto.SigningInput;

                /**
                 * Encodes the specified SigningInput message. Does not implicitly {@link TW.BitcoinV2.Proto.SigningInput.verify|verify} messages.
                 * @param message SigningInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.BitcoinV2.Proto.ISigningInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.SigningInput;

                /**
                 * Gets the default type url for SigningInput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TransactionPlan. */
            interface ITransactionPlan {

                /** TransactionPlan error */
                error?: (TW.Common.Proto.SigningError|null);

                /** TransactionPlan errorMessage */
                errorMessage?: (string|null);

                /** TransactionPlan inputs */
                inputs?: (TW.BitcoinV2.Proto.IInput[]|null);

                /** TransactionPlan outputs */
                outputs?: (TW.BitcoinV2.Proto.IOutput[]|null);

                /** TransactionPlan availableAmount */
                availableAmount?: (number|null);

                /** TransactionPlan sendAmount */
                sendAmount?: (number|null);

                /** TransactionPlan vsizeEstimate */
                vsizeEstimate?: (number|null);

                /** TransactionPlan feeEstimate */
                feeEstimate?: (number|null);

                /** TransactionPlan change */
                change?: (number|null);
            }

            /** Represents a TransactionPlan. */
            class TransactionPlan implements ITransactionPlan {

                /**
                 * Constructs a new TransactionPlan.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BitcoinV2.Proto.ITransactionPlan);

                /** TransactionPlan error. */
                public error: TW.Common.Proto.SigningError;

                /** TransactionPlan errorMessage. */
                public errorMessage: string;

                /** TransactionPlan inputs. */
                public inputs: TW.BitcoinV2.Proto.IInput[];

                /** TransactionPlan outputs. */
                public outputs: TW.BitcoinV2.Proto.IOutput[];

                /** TransactionPlan availableAmount. */
                public availableAmount: number;

                /** TransactionPlan sendAmount. */
                public sendAmount: number;

                /** TransactionPlan vsizeEstimate. */
                public vsizeEstimate: number;

                /** TransactionPlan feeEstimate. */
                public feeEstimate: number;

                /** TransactionPlan change. */
                public change: number;

                /**
                 * Creates a new TransactionPlan instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransactionPlan instance
                 */
                public static create(properties?: TW.BitcoinV2.Proto.ITransactionPlan): TW.BitcoinV2.Proto.TransactionPlan;

                /**
                 * Encodes the specified TransactionPlan message. Does not implicitly {@link TW.BitcoinV2.Proto.TransactionPlan.verify|verify} messages.
                 * @param message TransactionPlan message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.BitcoinV2.Proto.ITransactionPlan, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionPlan message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransactionPlan
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.TransactionPlan;

                /**
                 * Gets the default type url for TransactionPlan
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PreSigningOutput. */
            interface IPreSigningOutput {

                /** PreSigningOutput error */
                error?: (TW.Common.Proto.SigningError|null);

                /** PreSigningOutput errorMessage */
                errorMessage?: (string|null);

                /** PreSigningOutput sighashes */
                sighashes?: (TW.BitcoinV2.Proto.PreSigningOutput.ISighash[]|null);
            }

            /** Represents a PreSigningOutput. */
            class PreSigningOutput implements IPreSigningOutput {

                /**
                 * Constructs a new PreSigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BitcoinV2.Proto.IPreSigningOutput);

                /** PreSigningOutput error. */
                public error: TW.Common.Proto.SigningError;

                /** PreSigningOutput errorMessage. */
                public errorMessage: string;

                /** PreSigningOutput sighashes. */
                public sighashes: TW.BitcoinV2.Proto.PreSigningOutput.ISighash[];

                /**
                 * Creates a new PreSigningOutput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PreSigningOutput instance
                 */
                public static create(properties?: TW.BitcoinV2.Proto.IPreSigningOutput): TW.BitcoinV2.Proto.PreSigningOutput;

                /**
                 * Encodes the specified PreSigningOutput message. Does not implicitly {@link TW.BitcoinV2.Proto.PreSigningOutput.verify|verify} messages.
                 * @param message PreSigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.BitcoinV2.Proto.IPreSigningOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PreSigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PreSigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.PreSigningOutput;

                /**
                 * Gets the default type url for PreSigningOutput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace PreSigningOutput {

                /** SigningMethod enum. */
                enum SigningMethod {
                    Legacy = 0,
                    Segwit = 1,
                    Taproot = 2
                }

                /** Properties of a Sighash. */
                interface ISighash {

                    /** Sighash publicKey */
                    publicKey?: (Uint8Array|null);

                    /** Sighash sighash */
                    sighash?: (Uint8Array|null);

                    /** Sighash signingMethod */
                    signingMethod?: (TW.BitcoinV2.Proto.PreSigningOutput.SigningMethod|null);

                    /** Sighash tweak */
                    tweak?: (TW.BitcoinV2.Proto.PreSigningOutput.ITaprootTweak|null);
                }

                /** Represents a Sighash. */
                class Sighash implements ISighash {

                    /**
                     * Constructs a new Sighash.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BitcoinV2.Proto.PreSigningOutput.ISighash);

                    /** Sighash publicKey. */
                    public publicKey: Uint8Array;

                    /** Sighash sighash. */
                    public sighash: Uint8Array;

                    /** Sighash signingMethod. */
                    public signingMethod: TW.BitcoinV2.Proto.PreSigningOutput.SigningMethod;

                    /** Sighash tweak. */
                    public tweak?: (TW.BitcoinV2.Proto.PreSigningOutput.ITaprootTweak|null);

                    /**
                     * Creates a new Sighash instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Sighash instance
                     */
                    public static create(properties?: TW.BitcoinV2.Proto.PreSigningOutput.ISighash): TW.BitcoinV2.Proto.PreSigningOutput.Sighash;

                    /**
                     * Encodes the specified Sighash message. Does not implicitly {@link TW.BitcoinV2.Proto.PreSigningOutput.Sighash.verify|verify} messages.
                     * @param message Sighash message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.BitcoinV2.Proto.PreSigningOutput.ISighash, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Sighash message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Sighash
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.PreSigningOutput.Sighash;

                    /**
                     * Gets the default type url for Sighash
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TaprootTweak. */
                interface ITaprootTweak {

                    /** TaprootTweak merkleRoot */
                    merkleRoot?: (Uint8Array|null);
                }

                /** Represents a TaprootTweak. */
                class TaprootTweak implements ITaprootTweak {

                    /**
                     * Constructs a new TaprootTweak.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BitcoinV2.Proto.PreSigningOutput.ITaprootTweak);

                    /** TaprootTweak merkleRoot. */
                    public merkleRoot: Uint8Array;

                    /**
                     * Creates a new TaprootTweak instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TaprootTweak instance
                     */
                    public static create(properties?: TW.BitcoinV2.Proto.PreSigningOutput.ITaprootTweak): TW.BitcoinV2.Proto.PreSigningOutput.TaprootTweak;

                    /**
                     * Encodes the specified TaprootTweak message. Does not implicitly {@link TW.BitcoinV2.Proto.PreSigningOutput.TaprootTweak.verify|verify} messages.
                     * @param message TaprootTweak message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.BitcoinV2.Proto.PreSigningOutput.ITaprootTweak, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TaprootTweak message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TaprootTweak
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.PreSigningOutput.TaprootTweak;

                    /**
                     * Gets the default type url for TaprootTweak
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a SigningOutput. */
            interface ISigningOutput {

                /** SigningOutput error */
                error?: (TW.Common.Proto.SigningError|null);

                /** SigningOutput errorMessage */
                errorMessage?: (string|null);

                /** SigningOutput encoded */
                encoded?: (Uint8Array|null);

                /** SigningOutput txid */
                txid?: (Uint8Array|null);

                /** SigningOutput vsize */
                vsize?: (number|null);

                /** SigningOutput weight */
                weight?: (number|null);

                /** SigningOutput fee */
                fee?: (number|null);

                /** SigningOutput psbt */
                psbt?: (TW.BitcoinV2.Proto.IPsbt|null);

                /** SigningOutput bitcoin */
                bitcoin?: (TW.Utxo.Proto.ITransaction|null);

                /** SigningOutput zcash */
                zcash?: (TW.Zcash.Proto.ITransaction|null);

                /** SigningOutput decred */
                decred?: (TW.DecredV2.Proto.ITransaction|null);
            }

            /** Represents a SigningOutput. */
            class SigningOutput implements ISigningOutput {

                /**
                 * Constructs a new SigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BitcoinV2.Proto.ISigningOutput);

                /** SigningOutput error. */
                public error: TW.Common.Proto.SigningError;

                /** SigningOutput errorMessage. */
                public errorMessage: string;

                /** SigningOutput encoded. */
                public encoded: Uint8Array;

                /** SigningOutput txid. */
                public txid: Uint8Array;

                /** SigningOutput vsize. */
                public vsize: number;

                /** SigningOutput weight. */
                public weight: number;

                /** SigningOutput fee. */
                public fee: number;

                /** SigningOutput psbt. */
                public psbt?: (TW.BitcoinV2.Proto.IPsbt|null);

                /** SigningOutput bitcoin. */
                public bitcoin?: (TW.Utxo.Proto.ITransaction|null);

                /** SigningOutput zcash. */
                public zcash?: (TW.Zcash.Proto.ITransaction|null);

                /** SigningOutput decred. */
                public decred?: (TW.DecredV2.Proto.ITransaction|null);

                /** SigningOutput transaction. */
                public transaction?: ("bitcoin"|"zcash"|"decred");

                /**
                 * Creates a new SigningOutput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningOutput instance
                 */
                public static create(properties?: TW.BitcoinV2.Proto.ISigningOutput): TW.BitcoinV2.Proto.SigningOutput;

                /**
                 * Encodes the specified SigningOutput message. Does not implicitly {@link TW.BitcoinV2.Proto.SigningOutput.verify|verify} messages.
                 * @param message SigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.BitcoinV2.Proto.ISigningOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.SigningOutput;

                /**
                 * Gets the default type url for SigningOutput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Namespace DecredV2. */
    namespace DecredV2 {

        /** Namespace Proto. */
        namespace Proto {

            /** Properties of an OutPoint. */
            interface IOutPoint {

                /** OutPoint hash */
                hash?: (Uint8Array|null);

                /** OutPoint vout */
                vout?: (number|null);

                /** OutPoint tree */
                tree?: (number|null);
            }

            /** Represents an OutPoint. */
            class OutPoint implements IOutPoint {

                /**
                 * Constructs a new OutPoint.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.DecredV2.Proto.IOutPoint);

                /** OutPoint hash. */
                public hash: Uint8Array;

                /** OutPoint vout. */
                public vout: number;

                /** OutPoint tree. */
                public tree: number;

                /**
                 * Creates a new OutPoint instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OutPoint instance
                 */
                public static create(properties?: TW.DecredV2.Proto.IOutPoint): TW.DecredV2.Proto.OutPoint;

                /**
                 * Encodes the specified OutPoint message. Does not implicitly {@link TW.DecredV2.Proto.OutPoint.verify|verify} messages.
                 * @param message OutPoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.DecredV2.Proto.IOutPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OutPoint message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OutPoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.DecredV2.Proto.OutPoint;

                /**
                 * Gets the default type url for OutPoint
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Transaction. */
            interface ITransaction {

                /** Transaction serializeType */
                serializeType?: (number|null);

                /** Transaction version */
                version?: (number|null);

                /** Transaction inputs */
                inputs?: (TW.DecredV2.Proto.ITransactionInput[]|null);

                /** Transaction outputs */
                outputs?: (TW.DecredV2.Proto.ITransactionOutput[]|null);

                /** Transaction lockTime */
                lockTime?: (number|null);

                /** Transaction expiry */
                expiry?: (number|null);
            }

            /** Represents a Transaction. */
            class Transaction implements ITransaction {

                /**
                 * Constructs a new Transaction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.DecredV2.Proto.ITransaction);

                /** Transaction serializeType. */
                public serializeType: number;

                /** Transaction version. */
                public version: number;

                /** Transaction inputs. */
                public inputs: TW.DecredV2.Proto.ITransactionInput[];

                /** Transaction outputs. */
                public outputs: TW.DecredV2.Proto.ITransactionOutput[];

                /** Transaction lockTime. */
                public lockTime: number;

                /** Transaction expiry. */
                public expiry: number;

                /**
                 * Creates a new Transaction instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Transaction instance
                 */
                public static create(properties?: TW.DecredV2.Proto.ITransaction): TW.DecredV2.Proto.Transaction;

                /**
                 * Encodes the specified Transaction message. Does not implicitly {@link TW.DecredV2.Proto.Transaction.verify|verify} messages.
                 * @param message Transaction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.DecredV2.Proto.ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Transaction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Transaction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.DecredV2.Proto.Transaction;

                /**
                 * Gets the default type url for Transaction
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TransactionInput. */
            interface ITransactionInput {

                /** TransactionInput outPoint */
                outPoint?: (TW.DecredV2.Proto.IOutPoint|null);

                /** TransactionInput sequence */
                sequence?: (number|null);

                /** TransactionInput value */
                value?: (number|null);

                /** TransactionInput blockHeight */
                blockHeight?: (number|null);

                /** TransactionInput blockIndex */
                blockIndex?: (number|null);

                /** TransactionInput scriptSig */
                scriptSig?: (Uint8Array|null);
            }

            /** Represents a TransactionInput. */
            class TransactionInput implements ITransactionInput {

                /**
                 * Constructs a new TransactionInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.DecredV2.Proto.ITransactionInput);

                /** TransactionInput outPoint. */
                public outPoint?: (TW.DecredV2.Proto.IOutPoint|null);

                /** TransactionInput sequence. */
                public sequence: number;

                /** TransactionInput value. */
                public value: number;

                /** TransactionInput blockHeight. */
                public blockHeight: number;

                /** TransactionInput blockIndex. */
                public blockIndex: number;

                /** TransactionInput scriptSig. */
                public scriptSig: Uint8Array;

                /**
                 * Creates a new TransactionInput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransactionInput instance
                 */
                public static create(properties?: TW.DecredV2.Proto.ITransactionInput): TW.DecredV2.Proto.TransactionInput;

                /**
                 * Encodes the specified TransactionInput message. Does not implicitly {@link TW.DecredV2.Proto.TransactionInput.verify|verify} messages.
                 * @param message TransactionInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.DecredV2.Proto.ITransactionInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransactionInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.DecredV2.Proto.TransactionInput;

                /**
                 * Gets the default type url for TransactionInput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TransactionOutput. */
            interface ITransactionOutput {

                /** TransactionOutput value */
                value?: (number|null);

                /** TransactionOutput version */
                version?: (number|null);

                /** TransactionOutput script */
                script?: (Uint8Array|null);
            }

            /** Represents a TransactionOutput. */
            class TransactionOutput implements ITransactionOutput {

                /**
                 * Constructs a new TransactionOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.DecredV2.Proto.ITransactionOutput);

                /** TransactionOutput value. */
                public value: number;

                /** TransactionOutput version. */
                public version: number;

                /** TransactionOutput script. */
                public script: Uint8Array;

                /**
                 * Creates a new TransactionOutput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransactionOutput instance
                 */
                public static create(properties?: TW.DecredV2.Proto.ITransactionOutput): TW.DecredV2.Proto.TransactionOutput;

                /**
                 * Encodes the specified TransactionOutput message. Does not implicitly {@link TW.DecredV2.Proto.TransactionOutput.verify|verify} messages.
                 * @param message TransactionOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.DecredV2.Proto.ITransactionOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransactionOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.DecredV2.Proto.TransactionOutput;

                /**
                 * Gets the default type url for TransactionOutput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TransactionBuilderExtraData. */
            interface ITransactionBuilderExtraData {

                /** TransactionBuilderExtraData expiryHeight */
                expiryHeight?: (number|null);
            }

            /** Represents a TransactionBuilderExtraData. */
            class TransactionBuilderExtraData implements ITransactionBuilderExtraData {

                /**
                 * Constructs a new TransactionBuilderExtraData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.DecredV2.Proto.ITransactionBuilderExtraData);

                /** TransactionBuilderExtraData expiryHeight. */
                public expiryHeight: number;

                /**
                 * Creates a new TransactionBuilderExtraData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransactionBuilderExtraData instance
                 */
                public static create(properties?: TW.DecredV2.Proto.ITransactionBuilderExtraData): TW.DecredV2.Proto.TransactionBuilderExtraData;

                /**
                 * Encodes the specified TransactionBuilderExtraData message. Does not implicitly {@link TW.DecredV2.Proto.TransactionBuilderExtraData.verify|verify} messages.
                 * @param message TransactionBuilderExtraData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.DecredV2.Proto.ITransactionBuilderExtraData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionBuilderExtraData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransactionBuilderExtraData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.DecredV2.Proto.TransactionBuilderExtraData;

                /**
                 * Gets the default type url for TransactionBuilderExtraData
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Namespace Utxo. */
    namespace Utxo {

        /** Namespace Proto. */
        namespace Proto {

            /** Properties of an OutPoint. */
            interface IOutPoint {

                /** OutPoint hash */
                hash?: (Uint8Array|null);

                /** OutPoint vout */
                vout?: (number|null);
            }

            /** Represents an OutPoint. */
            class OutPoint implements IOutPoint {

                /**
                 * Constructs a new OutPoint.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Utxo.Proto.IOutPoint);

                /** OutPoint hash. */
                public hash: Uint8Array;

                /** OutPoint vout. */
                public vout: number;

                /**
                 * Creates a new OutPoint instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OutPoint instance
                 */
                public static create(properties?: TW.Utxo.Proto.IOutPoint): TW.Utxo.Proto.OutPoint;

                /**
                 * Encodes the specified OutPoint message. Does not implicitly {@link TW.Utxo.Proto.OutPoint.verify|verify} messages.
                 * @param message OutPoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Utxo.Proto.IOutPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OutPoint message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OutPoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Utxo.Proto.OutPoint;

                /**
                 * Gets the default type url for OutPoint
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TransactionInput. */
            interface ITransactionInput {

                /** TransactionInput outPoint */
                outPoint?: (TW.Utxo.Proto.IOutPoint|null);

                /** TransactionInput sequence */
                sequence?: (number|null);

                /** TransactionInput scriptSig */
                scriptSig?: (Uint8Array|null);

                /** TransactionInput witnessItems */
                witnessItems?: (Uint8Array[]|null);
            }

            /** Represents a TransactionInput. */
            class TransactionInput implements ITransactionInput {

                /**
                 * Constructs a new TransactionInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Utxo.Proto.ITransactionInput);

                /** TransactionInput outPoint. */
                public outPoint?: (TW.Utxo.Proto.IOutPoint|null);

                /** TransactionInput sequence. */
                public sequence: number;

                /** TransactionInput scriptSig. */
                public scriptSig: Uint8Array;

                /** TransactionInput witnessItems. */
                public witnessItems: Uint8Array[];

                /**
                 * Creates a new TransactionInput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransactionInput instance
                 */
                public static create(properties?: TW.Utxo.Proto.ITransactionInput): TW.Utxo.Proto.TransactionInput;

                /**
                 * Encodes the specified TransactionInput message. Does not implicitly {@link TW.Utxo.Proto.TransactionInput.verify|verify} messages.
                 * @param message TransactionInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Utxo.Proto.ITransactionInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransactionInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Utxo.Proto.TransactionInput;

                /**
                 * Gets the default type url for TransactionInput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TransactionOutput. */
            interface ITransactionOutput {

                /** TransactionOutput scriptPubkey */
                scriptPubkey?: (Uint8Array|null);

                /** TransactionOutput value */
                value?: (number|null);
            }

            /** Represents a TransactionOutput. */
            class TransactionOutput implements ITransactionOutput {

                /**
                 * Constructs a new TransactionOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Utxo.Proto.ITransactionOutput);

                /** TransactionOutput scriptPubkey. */
                public scriptPubkey: Uint8Array;

                /** TransactionOutput value. */
                public value: number;

                /**
                 * Creates a new TransactionOutput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransactionOutput instance
                 */
                public static create(properties?: TW.Utxo.Proto.ITransactionOutput): TW.Utxo.Proto.TransactionOutput;

                /**
                 * Encodes the specified TransactionOutput message. Does not implicitly {@link TW.Utxo.Proto.TransactionOutput.verify|verify} messages.
                 * @param message TransactionOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Utxo.Proto.ITransactionOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransactionOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Utxo.Proto.TransactionOutput;

                /**
                 * Gets the default type url for TransactionOutput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Transaction. */
            interface ITransaction {

                /** Transaction version */
                version?: (number|null);

                /** Transaction lockTime */
                lockTime?: (number|null);

                /** Transaction inputs */
                inputs?: (TW.Utxo.Proto.ITransactionInput[]|null);

                /** Transaction outputs */
                outputs?: (TW.Utxo.Proto.ITransactionOutput[]|null);
            }

            /** Represents a Transaction. */
            class Transaction implements ITransaction {

                /**
                 * Constructs a new Transaction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Utxo.Proto.ITransaction);

                /** Transaction version. */
                public version: number;

                /** Transaction lockTime. */
                public lockTime: number;

                /** Transaction inputs. */
                public inputs: TW.Utxo.Proto.ITransactionInput[];

                /** Transaction outputs. */
                public outputs: TW.Utxo.Proto.ITransactionOutput[];

                /**
                 * Creates a new Transaction instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Transaction instance
                 */
                public static create(properties?: TW.Utxo.Proto.ITransaction): TW.Utxo.Proto.Transaction;

                /**
                 * Encodes the specified Transaction message. Does not implicitly {@link TW.Utxo.Proto.Transaction.verify|verify} messages.
                 * @param message Transaction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Utxo.Proto.ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Transaction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Transaction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Utxo.Proto.Transaction;

                /**
                 * Gets the default type url for Transaction
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Namespace Zcash. */
    namespace Zcash {

        /** Namespace Proto. */
        namespace Proto {

            /** Properties of a TransactionBuilderExtraData. */
            interface ITransactionBuilderExtraData {

                /** TransactionBuilderExtraData branchId */
                branchId?: (Uint8Array|null);

                /** TransactionBuilderExtraData expiryHeight */
                expiryHeight?: (number|null);

                /** TransactionBuilderExtraData zip_0317 */
                zip_0317?: (boolean|null);
            }

            /** Represents a TransactionBuilderExtraData. */
            class TransactionBuilderExtraData implements ITransactionBuilderExtraData {

                /**
                 * Constructs a new TransactionBuilderExtraData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Zcash.Proto.ITransactionBuilderExtraData);

                /** TransactionBuilderExtraData branchId. */
                public branchId: Uint8Array;

                /** TransactionBuilderExtraData expiryHeight. */
                public expiryHeight: number;

                /** TransactionBuilderExtraData zip_0317. */
                public zip_0317: boolean;

                /**
                 * Creates a new TransactionBuilderExtraData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransactionBuilderExtraData instance
                 */
                public static create(properties?: TW.Zcash.Proto.ITransactionBuilderExtraData): TW.Zcash.Proto.TransactionBuilderExtraData;

                /**
                 * Encodes the specified TransactionBuilderExtraData message. Does not implicitly {@link TW.Zcash.Proto.TransactionBuilderExtraData.verify|verify} messages.
                 * @param message TransactionBuilderExtraData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Zcash.Proto.ITransactionBuilderExtraData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionBuilderExtraData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransactionBuilderExtraData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Zcash.Proto.TransactionBuilderExtraData;

                /**
                 * Gets the default type url for TransactionBuilderExtraData
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Transaction. */
            interface ITransaction {

                /** Currently, version 4 (0x80000004) is supported only. */
                version?: (number|null);

                /** Transaction versionGroupId */
                versionGroupId?: (number|null);

                /** Transaction inputs */
                inputs?: (TW.Utxo.Proto.ITransactionInput[]|null);

                /** Transaction outputs */
                outputs?: (TW.Utxo.Proto.ITransactionOutput[]|null);

                /** Transaction lockTime */
                lockTime?: (number|null);

                /** Transaction expiryHeight */
                expiryHeight?: (number|null);

                /** Transaction saplingValueBalance */
                saplingValueBalance?: (number|null);

                /** Transaction branchId */
                branchId?: (Uint8Array|null);
            }

            /** Represents a Transaction. */
            class Transaction implements ITransaction {

                /**
                 * Constructs a new Transaction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Zcash.Proto.ITransaction);

                /** Currently, version 4 (0x80000004) is supported only. */
                public version: number;

                /** Transaction versionGroupId. */
                public versionGroupId: number;

                /** Transaction inputs. */
                public inputs: TW.Utxo.Proto.ITransactionInput[];

                /** Transaction outputs. */
                public outputs: TW.Utxo.Proto.ITransactionOutput[];

                /** Transaction lockTime. */
                public lockTime: number;

                /** Transaction expiryHeight. */
                public expiryHeight: number;

                /** Transaction saplingValueBalance. */
                public saplingValueBalance: number;

                /** Transaction branchId. */
                public branchId: Uint8Array;

                /**
                 * Creates a new Transaction instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Transaction instance
                 */
                public static create(properties?: TW.Zcash.Proto.ITransaction): TW.Zcash.Proto.Transaction;

                /**
                 * Encodes the specified Transaction message. Does not implicitly {@link TW.Zcash.Proto.Transaction.verify|verify} messages.
                 * @param message Transaction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Zcash.Proto.ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Transaction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Transaction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Zcash.Proto.Transaction;

                /**
                 * Gets the default type url for Transaction
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Namespace Cardano. */
    namespace Cardano {

        /** Namespace Proto. */
        namespace Proto {

            /** Properties of an OutPoint. */
            interface IOutPoint {

                /** OutPoint txHash */
                txHash?: (Uint8Array|null);

                /** OutPoint outputIndex */
                outputIndex?: (number|null);
            }

            /** Represents an OutPoint. */
            class OutPoint implements IOutPoint {

                /**
                 * Constructs a new OutPoint.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Cardano.Proto.IOutPoint);

                /** OutPoint txHash. */
                public txHash: Uint8Array;

                /** OutPoint outputIndex. */
                public outputIndex: number;

                /**
                 * Creates a new OutPoint instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OutPoint instance
                 */
                public static create(properties?: TW.Cardano.Proto.IOutPoint): TW.Cardano.Proto.OutPoint;

                /**
                 * Encodes the specified OutPoint message. Does not implicitly {@link TW.Cardano.Proto.OutPoint.verify|verify} messages.
                 * @param message OutPoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Cardano.Proto.IOutPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OutPoint message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OutPoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cardano.Proto.OutPoint;

                /**
                 * Gets the default type url for OutPoint
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TokenAmount. */
            interface ITokenAmount {

                /** TokenAmount policyId */
                policyId?: (string|null);

                /** TokenAmount assetName */
                assetName?: (string|null);

                /** TokenAmount amount */
                amount?: (Uint8Array|null);

                /** TokenAmount assetNameHex */
                assetNameHex?: (string|null);
            }

            /** Represents a TokenAmount. */
            class TokenAmount implements ITokenAmount {

                /**
                 * Constructs a new TokenAmount.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Cardano.Proto.ITokenAmount);

                /** TokenAmount policyId. */
                public policyId: string;

                /** TokenAmount assetName. */
                public assetName: string;

                /** TokenAmount amount. */
                public amount: Uint8Array;

                /** TokenAmount assetNameHex. */
                public assetNameHex: string;

                /**
                 * Creates a new TokenAmount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TokenAmount instance
                 */
                public static create(properties?: TW.Cardano.Proto.ITokenAmount): TW.Cardano.Proto.TokenAmount;

                /**
                 * Encodes the specified TokenAmount message. Does not implicitly {@link TW.Cardano.Proto.TokenAmount.verify|verify} messages.
                 * @param message TokenAmount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Cardano.Proto.ITokenAmount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TokenAmount message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TokenAmount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cardano.Proto.TokenAmount;

                /**
                 * Gets the default type url for TokenAmount
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TxInput. */
            interface ITxInput {

                /** TxInput outPoint */
                outPoint?: (TW.Cardano.Proto.IOutPoint|null);

                /** TxInput address */
                address?: (string|null);

                /** TxInput amount */
                amount?: (number|null);

                /** TxInput tokenAmount */
                tokenAmount?: (TW.Cardano.Proto.ITokenAmount[]|null);
            }

            /** Represents a TxInput. */
            class TxInput implements ITxInput {

                /**
                 * Constructs a new TxInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Cardano.Proto.ITxInput);

                /** TxInput outPoint. */
                public outPoint?: (TW.Cardano.Proto.IOutPoint|null);

                /** TxInput address. */
                public address: string;

                /** TxInput amount. */
                public amount: number;

                /** TxInput tokenAmount. */
                public tokenAmount: TW.Cardano.Proto.ITokenAmount[];

                /**
                 * Creates a new TxInput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TxInput instance
                 */
                public static create(properties?: TW.Cardano.Proto.ITxInput): TW.Cardano.Proto.TxInput;

                /**
                 * Encodes the specified TxInput message. Does not implicitly {@link TW.Cardano.Proto.TxInput.verify|verify} messages.
                 * @param message TxInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Cardano.Proto.ITxInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TxInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TxInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cardano.Proto.TxInput;

                /**
                 * Gets the default type url for TxInput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TxOutput. */
            interface ITxOutput {

                /** TxOutput address */
                address?: (string|null);

                /** TxOutput amount */
                amount?: (number|null);

                /** TxOutput tokenAmount */
                tokenAmount?: (TW.Cardano.Proto.ITokenAmount[]|null);
            }

            /** Represents a TxOutput. */
            class TxOutput implements ITxOutput {

                /**
                 * Constructs a new TxOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Cardano.Proto.ITxOutput);

                /** TxOutput address. */
                public address: string;

                /** TxOutput amount. */
                public amount: number;

                /** TxOutput tokenAmount. */
                public tokenAmount: TW.Cardano.Proto.ITokenAmount[];

                /**
                 * Creates a new TxOutput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TxOutput instance
                 */
                public static create(properties?: TW.Cardano.Proto.ITxOutput): TW.Cardano.Proto.TxOutput;

                /**
                 * Encodes the specified TxOutput message. Does not implicitly {@link TW.Cardano.Proto.TxOutput.verify|verify} messages.
                 * @param message TxOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Cardano.Proto.ITxOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TxOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TxOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cardano.Proto.TxOutput;

                /**
                 * Gets the default type url for TxOutput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TokenBundle. */
            interface ITokenBundle {

                /** TokenBundle token */
                token?: (TW.Cardano.Proto.ITokenAmount[]|null);
            }

            /** Represents a TokenBundle. */
            class TokenBundle implements ITokenBundle {

                /**
                 * Constructs a new TokenBundle.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Cardano.Proto.ITokenBundle);

                /** TokenBundle token. */
                public token: TW.Cardano.Proto.ITokenAmount[];

                /**
                 * Creates a new TokenBundle instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TokenBundle instance
                 */
                public static create(properties?: TW.Cardano.Proto.ITokenBundle): TW.Cardano.Proto.TokenBundle;

                /**
                 * Encodes the specified TokenBundle message. Does not implicitly {@link TW.Cardano.Proto.TokenBundle.verify|verify} messages.
                 * @param message TokenBundle message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Cardano.Proto.ITokenBundle, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TokenBundle message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TokenBundle
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cardano.Proto.TokenBundle;

                /**
                 * Gets the default type url for TokenBundle
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Transfer. */
            interface ITransfer {

                /** Transfer toAddress */
                toAddress?: (string|null);

                /** Transfer changeAddress */
                changeAddress?: (string|null);

                /** Transfer amount */
                amount?: (number|null);

                /** Transfer tokenAmount */
                tokenAmount?: (TW.Cardano.Proto.ITokenBundle|null);

                /** Transfer useMaxAmount */
                useMaxAmount?: (boolean|null);

                /** Transfer forceFee */
                forceFee?: (number|null);
            }

            /** Represents a Transfer. */
            class Transfer implements ITransfer {

                /**
                 * Constructs a new Transfer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Cardano.Proto.ITransfer);

                /** Transfer toAddress. */
                public toAddress: string;

                /** Transfer changeAddress. */
                public changeAddress: string;

                /** Transfer amount. */
                public amount: number;

                /** Transfer tokenAmount. */
                public tokenAmount?: (TW.Cardano.Proto.ITokenBundle|null);

                /** Transfer useMaxAmount. */
                public useMaxAmount: boolean;

                /** Transfer forceFee. */
                public forceFee: number;

                /**
                 * Creates a new Transfer instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Transfer instance
                 */
                public static create(properties?: TW.Cardano.Proto.ITransfer): TW.Cardano.Proto.Transfer;

                /**
                 * Encodes the specified Transfer message. Does not implicitly {@link TW.Cardano.Proto.Transfer.verify|verify} messages.
                 * @param message Transfer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Cardano.Proto.ITransfer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Transfer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Transfer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cardano.Proto.Transfer;

                /**
                 * Gets the default type url for Transfer
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RegisterStakingKey. */
            interface IRegisterStakingKey {

                /** RegisterStakingKey stakingAddress */
                stakingAddress?: (string|null);

                /** RegisterStakingKey depositAmount */
                depositAmount?: (number|null);
            }

            /** Represents a RegisterStakingKey. */
            class RegisterStakingKey implements IRegisterStakingKey {

                /**
                 * Constructs a new RegisterStakingKey.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Cardano.Proto.IRegisterStakingKey);

                /** RegisterStakingKey stakingAddress. */
                public stakingAddress: string;

                /** RegisterStakingKey depositAmount. */
                public depositAmount: number;

                /**
                 * Creates a new RegisterStakingKey instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RegisterStakingKey instance
                 */
                public static create(properties?: TW.Cardano.Proto.IRegisterStakingKey): TW.Cardano.Proto.RegisterStakingKey;

                /**
                 * Encodes the specified RegisterStakingKey message. Does not implicitly {@link TW.Cardano.Proto.RegisterStakingKey.verify|verify} messages.
                 * @param message RegisterStakingKey message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Cardano.Proto.IRegisterStakingKey, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RegisterStakingKey message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RegisterStakingKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cardano.Proto.RegisterStakingKey;

                /**
                 * Gets the default type url for RegisterStakingKey
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeregisterStakingKey. */
            interface IDeregisterStakingKey {

                /** DeregisterStakingKey stakingAddress */
                stakingAddress?: (string|null);

                /** DeregisterStakingKey undepositAmount */
                undepositAmount?: (number|null);
            }

            /** Represents a DeregisterStakingKey. */
            class DeregisterStakingKey implements IDeregisterStakingKey {

                /**
                 * Constructs a new DeregisterStakingKey.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Cardano.Proto.IDeregisterStakingKey);

                /** DeregisterStakingKey stakingAddress. */
                public stakingAddress: string;

                /** DeregisterStakingKey undepositAmount. */
                public undepositAmount: number;

                /**
                 * Creates a new DeregisterStakingKey instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeregisterStakingKey instance
                 */
                public static create(properties?: TW.Cardano.Proto.IDeregisterStakingKey): TW.Cardano.Proto.DeregisterStakingKey;

                /**
                 * Encodes the specified DeregisterStakingKey message. Does not implicitly {@link TW.Cardano.Proto.DeregisterStakingKey.verify|verify} messages.
                 * @param message DeregisterStakingKey message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Cardano.Proto.IDeregisterStakingKey, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeregisterStakingKey message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeregisterStakingKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cardano.Proto.DeregisterStakingKey;

                /**
                 * Gets the default type url for DeregisterStakingKey
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a VoteDelegation. */
            interface IVoteDelegation {

                /** VoteDelegation stakingAddress */
                stakingAddress?: (string|null);

                /** VoteDelegation drepType */
                drepType?: (TW.Cardano.Proto.VoteDelegation.DRepType|null);

                /** VoteDelegation drepId */
                drepId?: (string|null);
            }

            /** Represents a VoteDelegation. */
            class VoteDelegation implements IVoteDelegation {

                /**
                 * Constructs a new VoteDelegation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Cardano.Proto.IVoteDelegation);

                /** VoteDelegation stakingAddress. */
                public stakingAddress: string;

                /** VoteDelegation drepType. */
                public drepType: TW.Cardano.Proto.VoteDelegation.DRepType;

                /** VoteDelegation drepId. */
                public drepId: string;

                /**
                 * Creates a new VoteDelegation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VoteDelegation instance
                 */
                public static create(properties?: TW.Cardano.Proto.IVoteDelegation): TW.Cardano.Proto.VoteDelegation;

                /**
                 * Encodes the specified VoteDelegation message. Does not implicitly {@link TW.Cardano.Proto.VoteDelegation.verify|verify} messages.
                 * @param message VoteDelegation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Cardano.Proto.IVoteDelegation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VoteDelegation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VoteDelegation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cardano.Proto.VoteDelegation;

                /**
                 * Gets the default type url for VoteDelegation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace VoteDelegation {

                /** DRepType enum. */
                enum DRepType {
                    DREP_ID = 0,
                    DREP_ALWAYS_ABSTAIN = 2,
                    DREP_NO_CONFIDENCE = 3
                }
            }

            /** Properties of a Delegate. */
            interface IDelegate {

                /** Delegate stakingAddress */
                stakingAddress?: (string|null);

                /** Delegate poolId */
                poolId?: (Uint8Array|null);

                /** Delegate depositAmount */
                depositAmount?: (number|null);
            }

            /** Represents a Delegate. */
            class Delegate implements IDelegate {

                /**
                 * Constructs a new Delegate.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Cardano.Proto.IDelegate);

                /** Delegate stakingAddress. */
                public stakingAddress: string;

                /** Delegate poolId. */
                public poolId: Uint8Array;

                /** Delegate depositAmount. */
                public depositAmount: number;

                /**
                 * Creates a new Delegate instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Delegate instance
                 */
                public static create(properties?: TW.Cardano.Proto.IDelegate): TW.Cardano.Proto.Delegate;

                /**
                 * Encodes the specified Delegate message. Does not implicitly {@link TW.Cardano.Proto.Delegate.verify|verify} messages.
                 * @param message Delegate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Cardano.Proto.IDelegate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Delegate message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Delegate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cardano.Proto.Delegate;

                /**
                 * Gets the default type url for Delegate
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Withdraw. */
            interface IWithdraw {

                /** Withdraw stakingAddress */
                stakingAddress?: (string|null);

                /** Withdraw withdrawAmount */
                withdrawAmount?: (number|null);
            }

            /** Represents a Withdraw. */
            class Withdraw implements IWithdraw {

                /**
                 * Constructs a new Withdraw.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Cardano.Proto.IWithdraw);

                /** Withdraw stakingAddress. */
                public stakingAddress: string;

                /** Withdraw withdrawAmount. */
                public withdrawAmount: number;

                /**
                 * Creates a new Withdraw instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Withdraw instance
                 */
                public static create(properties?: TW.Cardano.Proto.IWithdraw): TW.Cardano.Proto.Withdraw;

                /**
                 * Encodes the specified Withdraw message. Does not implicitly {@link TW.Cardano.Proto.Withdraw.verify|verify} messages.
                 * @param message Withdraw message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Cardano.Proto.IWithdraw, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Withdraw message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Withdraw
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cardano.Proto.Withdraw;

                /**
                 * Gets the default type url for Withdraw
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TransactionPlan. */
            interface ITransactionPlan {

                /** TransactionPlan availableAmount */
                availableAmount?: (number|null);

                /** TransactionPlan amount */
                amount?: (number|null);

                /** TransactionPlan fee */
                fee?: (number|null);

                /** TransactionPlan change */
                change?: (number|null);

                /** TransactionPlan deposit */
                deposit?: (number|null);

                /** TransactionPlan undeposit */
                undeposit?: (number|null);

                /** TransactionPlan availableTokens */
                availableTokens?: (TW.Cardano.Proto.ITokenAmount[]|null);

                /** TransactionPlan outputTokens */
                outputTokens?: (TW.Cardano.Proto.ITokenAmount[]|null);

                /** TransactionPlan changeTokens */
                changeTokens?: (TW.Cardano.Proto.ITokenAmount[]|null);

                /** TransactionPlan utxos */
                utxos?: (TW.Cardano.Proto.ITxInput[]|null);

                /** TransactionPlan error */
                error?: (TW.Common.Proto.SigningError|null);

                /** TransactionPlan extraOutputs */
                extraOutputs?: (TW.Cardano.Proto.ITxOutput[]|null);
            }

            /** Represents a TransactionPlan. */
            class TransactionPlan implements ITransactionPlan {

                /**
                 * Constructs a new TransactionPlan.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Cardano.Proto.ITransactionPlan);

                /** TransactionPlan availableAmount. */
                public availableAmount: number;

                /** TransactionPlan amount. */
                public amount: number;

                /** TransactionPlan fee. */
                public fee: number;

                /** TransactionPlan change. */
                public change: number;

                /** TransactionPlan deposit. */
                public deposit: number;

                /** TransactionPlan undeposit. */
                public undeposit: number;

                /** TransactionPlan availableTokens. */
                public availableTokens: TW.Cardano.Proto.ITokenAmount[];

                /** TransactionPlan outputTokens. */
                public outputTokens: TW.Cardano.Proto.ITokenAmount[];

                /** TransactionPlan changeTokens. */
                public changeTokens: TW.Cardano.Proto.ITokenAmount[];

                /** TransactionPlan utxos. */
                public utxos: TW.Cardano.Proto.ITxInput[];

                /** TransactionPlan error. */
                public error: TW.Common.Proto.SigningError;

                /** TransactionPlan extraOutputs. */
                public extraOutputs: TW.Cardano.Proto.ITxOutput[];

                /**
                 * Creates a new TransactionPlan instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransactionPlan instance
                 */
                public static create(properties?: TW.Cardano.Proto.ITransactionPlan): TW.Cardano.Proto.TransactionPlan;

                /**
                 * Encodes the specified TransactionPlan message. Does not implicitly {@link TW.Cardano.Proto.TransactionPlan.verify|verify} messages.
                 * @param message TransactionPlan message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Cardano.Proto.ITransactionPlan, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionPlan message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransactionPlan
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cardano.Proto.TransactionPlan;

                /**
                 * Gets the default type url for TransactionPlan
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SigningInput. */
            interface ISigningInput {

                /** SigningInput utxos */
                utxos?: (TW.Cardano.Proto.ITxInput[]|null);

                /** SigningInput privateKey */
                privateKey?: (Uint8Array[]|null);

                /** SigningInput transferMessage */
                transferMessage?: (TW.Cardano.Proto.ITransfer|null);

                /** SigningInput registerStakingKey */
                registerStakingKey?: (TW.Cardano.Proto.IRegisterStakingKey|null);

                /** SigningInput delegate */
                delegate?: (TW.Cardano.Proto.IDelegate|null);

                /** SigningInput withdraw */
                withdraw?: (TW.Cardano.Proto.IWithdraw|null);

                /** SigningInput deregisterStakingKey */
                deregisterStakingKey?: (TW.Cardano.Proto.IDeregisterStakingKey|null);

                /** SigningInput voteDelegation */
                voteDelegation?: (TW.Cardano.Proto.IVoteDelegation|null);

                /** SigningInput ttl */
                ttl?: (number|null);

                /** SigningInput plan */
                plan?: (TW.Cardano.Proto.ITransactionPlan|null);

                /** SigningInput extraOutputs */
                extraOutputs?: (TW.Cardano.Proto.ITxOutput[]|null);

                /** SigningInput auxiliaryData */
                auxiliaryData?: (Uint8Array|null);
            }

            /** Represents a SigningInput. */
            class SigningInput implements ISigningInput {

                /**
                 * Constructs a new SigningInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Cardano.Proto.ISigningInput);

                /** SigningInput utxos. */
                public utxos: TW.Cardano.Proto.ITxInput[];

                /** SigningInput privateKey. */
                public privateKey: Uint8Array[];

                /** SigningInput transferMessage. */
                public transferMessage?: (TW.Cardano.Proto.ITransfer|null);

                /** SigningInput registerStakingKey. */
                public registerStakingKey?: (TW.Cardano.Proto.IRegisterStakingKey|null);

                /** SigningInput delegate. */
                public delegate?: (TW.Cardano.Proto.IDelegate|null);

                /** SigningInput withdraw. */
                public withdraw?: (TW.Cardano.Proto.IWithdraw|null);

                /** SigningInput deregisterStakingKey. */
                public deregisterStakingKey?: (TW.Cardano.Proto.IDeregisterStakingKey|null);

                /** SigningInput voteDelegation. */
                public voteDelegation?: (TW.Cardano.Proto.IVoteDelegation|null);

                /** SigningInput ttl. */
                public ttl: number;

                /** SigningInput plan. */
                public plan?: (TW.Cardano.Proto.ITransactionPlan|null);

                /** SigningInput extraOutputs. */
                public extraOutputs: TW.Cardano.Proto.ITxOutput[];

                /** SigningInput auxiliaryData. */
                public auxiliaryData: Uint8Array;

                /**
                 * Creates a new SigningInput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningInput instance
                 */
                public static create(properties?: TW.Cardano.Proto.ISigningInput): TW.Cardano.Proto.SigningInput;

                /**
                 * Encodes the specified SigningInput message. Does not implicitly {@link TW.Cardano.Proto.SigningInput.verify|verify} messages.
                 * @param message SigningInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Cardano.Proto.ISigningInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cardano.Proto.SigningInput;

                /**
                 * Gets the default type url for SigningInput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SigningOutput. */
            interface ISigningOutput {

                /** SigningOutput encoded */
                encoded?: (Uint8Array|null);

                /** SigningOutput txId */
                txId?: (Uint8Array|null);

                /** SigningOutput error */
                error?: (TW.Common.Proto.SigningError|null);

                /** SigningOutput errorMessage */
                errorMessage?: (string|null);
            }

            /** Represents a SigningOutput. */
            class SigningOutput implements ISigningOutput {

                /**
                 * Constructs a new SigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Cardano.Proto.ISigningOutput);

                /** SigningOutput encoded. */
                public encoded: Uint8Array;

                /** SigningOutput txId. */
                public txId: Uint8Array;

                /** SigningOutput error. */
                public error: TW.Common.Proto.SigningError;

                /** SigningOutput errorMessage. */
                public errorMessage: string;

                /**
                 * Creates a new SigningOutput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningOutput instance
                 */
                public static create(properties?: TW.Cardano.Proto.ISigningOutput): TW.Cardano.Proto.SigningOutput;

                /**
                 * Encodes the specified SigningOutput message. Does not implicitly {@link TW.Cardano.Proto.SigningOutput.verify|verify} messages.
                 * @param message SigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Cardano.Proto.ISigningOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cardano.Proto.SigningOutput;

                /**
                 * Gets the default type url for SigningOutput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Namespace Cosmos. */
    namespace Cosmos {

        /** Namespace Proto. */
        namespace Proto {

            /** Properties of an Amount. */
            interface IAmount {

                /** Amount denom */
                denom?: (string|null);

                /** Amount amount */
                amount?: (string|null);
            }

            /** Represents an Amount. */
            class Amount implements IAmount {

                /**
                 * Constructs a new Amount.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Cosmos.Proto.IAmount);

                /** Amount denom. */
                public denom: string;

                /** Amount amount. */
                public amount: string;

                /**
                 * Creates a new Amount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Amount instance
                 */
                public static create(properties?: TW.Cosmos.Proto.IAmount): TW.Cosmos.Proto.Amount;

                /**
                 * Encodes the specified Amount message. Does not implicitly {@link TW.Cosmos.Proto.Amount.verify|verify} messages.
                 * @param message Amount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Cosmos.Proto.IAmount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Amount message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Amount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Amount;

                /**
                 * Gets the default type url for Amount
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Fee. */
            interface IFee {

                /** Fee amounts */
                amounts?: (TW.Cosmos.Proto.IAmount[]|null);

                /** Fee gas */
                gas?: (number|null);
            }

            /** Represents a Fee. */
            class Fee implements IFee {

                /**
                 * Constructs a new Fee.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Cosmos.Proto.IFee);

                /** Fee amounts. */
                public amounts: TW.Cosmos.Proto.IAmount[];

                /** Fee gas. */
                public gas: number;

                /**
                 * Creates a new Fee instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Fee instance
                 */
                public static create(properties?: TW.Cosmos.Proto.IFee): TW.Cosmos.Proto.Fee;

                /**
                 * Encodes the specified Fee message. Does not implicitly {@link TW.Cosmos.Proto.Fee.verify|verify} messages.
                 * @param message Fee message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Cosmos.Proto.IFee, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Fee message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Fee
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Fee;

                /**
                 * Gets the default type url for Fee
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an Height. */
            interface IHeight {

                /** Height revisionNumber */
                revisionNumber?: (number|null);

                /** Height revisionHeight */
                revisionHeight?: (number|null);
            }

            /** Represents an Height. */
            class Height implements IHeight {

                /**
                 * Constructs a new Height.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Cosmos.Proto.IHeight);

                /** Height revisionNumber. */
                public revisionNumber: number;

                /** Height revisionHeight. */
                public revisionHeight: number;

                /**
                 * Creates a new Height instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Height instance
                 */
                public static create(properties?: TW.Cosmos.Proto.IHeight): TW.Cosmos.Proto.Height;

                /**
                 * Encodes the specified Height message. Does not implicitly {@link TW.Cosmos.Proto.Height.verify|verify} messages.
                 * @param message Height message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Cosmos.Proto.IHeight, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Height message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Height
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Height;

                /**
                 * Gets the default type url for Height
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** BroadcastMode enum. */
            enum BroadcastMode {
                BLOCK = 0,
                SYNC = 1,
                ASYNC = 2
            }

            /** Properties of a THORChainAsset. */
            interface ITHORChainAsset {

                /** THORChainAsset chain */
                chain?: (string|null);

                /** THORChainAsset symbol */
                symbol?: (string|null);

                /** THORChainAsset ticker */
                ticker?: (string|null);

                /** THORChainAsset synth */
                synth?: (boolean|null);

                /** THORChainAsset trade */
                trade?: (boolean|null);

                /** THORChainAsset secured */
                secured?: (boolean|null);
            }

            /** Represents a THORChainAsset. */
            class THORChainAsset implements ITHORChainAsset {

                /**
                 * Constructs a new THORChainAsset.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Cosmos.Proto.ITHORChainAsset);

                /** THORChainAsset chain. */
                public chain: string;

                /** THORChainAsset symbol. */
                public symbol: string;

                /** THORChainAsset ticker. */
                public ticker: string;

                /** THORChainAsset synth. */
                public synth: boolean;

                /** THORChainAsset trade. */
                public trade: boolean;

                /** THORChainAsset secured. */
                public secured: boolean;

                /**
                 * Creates a new THORChainAsset instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns THORChainAsset instance
                 */
                public static create(properties?: TW.Cosmos.Proto.ITHORChainAsset): TW.Cosmos.Proto.THORChainAsset;

                /**
                 * Encodes the specified THORChainAsset message. Does not implicitly {@link TW.Cosmos.Proto.THORChainAsset.verify|verify} messages.
                 * @param message THORChainAsset message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Cosmos.Proto.ITHORChainAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a THORChainAsset message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns THORChainAsset
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.THORChainAsset;

                /**
                 * Gets the default type url for THORChainAsset
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a THORChainCoin. */
            interface ITHORChainCoin {

                /** THORChainCoin asset */
                asset?: (TW.Cosmos.Proto.ITHORChainAsset|null);

                /** THORChainCoin amount */
                amount?: (string|null);

                /** THORChainCoin decimals */
                decimals?: (number|null);
            }

            /** Represents a THORChainCoin. */
            class THORChainCoin implements ITHORChainCoin {

                /**
                 * Constructs a new THORChainCoin.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Cosmos.Proto.ITHORChainCoin);

                /** THORChainCoin asset. */
                public asset?: (TW.Cosmos.Proto.ITHORChainAsset|null);

                /** THORChainCoin amount. */
                public amount: string;

                /** THORChainCoin decimals. */
                public decimals: number;

                /**
                 * Creates a new THORChainCoin instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns THORChainCoin instance
                 */
                public static create(properties?: TW.Cosmos.Proto.ITHORChainCoin): TW.Cosmos.Proto.THORChainCoin;

                /**
                 * Encodes the specified THORChainCoin message. Does not implicitly {@link TW.Cosmos.Proto.THORChainCoin.verify|verify} messages.
                 * @param message THORChainCoin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Cosmos.Proto.ITHORChainCoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a THORChainCoin message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns THORChainCoin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.THORChainCoin;

                /**
                 * Gets the default type url for THORChainCoin
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Message. */
            interface IMessage {

                /** Message sendCoinsMessage */
                sendCoinsMessage?: (TW.Cosmos.Proto.Message.ISend|null);

                /** Message transferTokensMessage */
                transferTokensMessage?: (TW.Cosmos.Proto.Message.ITransfer|null);

                /** Message stakeMessage */
                stakeMessage?: (TW.Cosmos.Proto.Message.IDelegate|null);

                /** Message unstakeMessage */
                unstakeMessage?: (TW.Cosmos.Proto.Message.IUndelegate|null);

                /** Message restakeMessage */
                restakeMessage?: (TW.Cosmos.Proto.Message.IBeginRedelegate|null);

                /** Message withdrawStakeRewardMessage */
                withdrawStakeRewardMessage?: (TW.Cosmos.Proto.Message.IWithdrawDelegationReward|null);

                /** Message rawJsonMessage */
                rawJsonMessage?: (TW.Cosmos.Proto.Message.IRawJSON|null);

                /** Message wasmTerraExecuteContractTransferMessage */
                wasmTerraExecuteContractTransferMessage?: (TW.Cosmos.Proto.Message.IWasmTerraExecuteContractTransfer|null);

                /** Message wasmTerraExecuteContractSendMessage */
                wasmTerraExecuteContractSendMessage?: (TW.Cosmos.Proto.Message.IWasmTerraExecuteContractSend|null);

                /** Message thorchainSendMessage */
                thorchainSendMessage?: (TW.Cosmos.Proto.Message.ITHORChainSend|null);

                /** Message wasmTerraExecuteContractGeneric */
                wasmTerraExecuteContractGeneric?: (TW.Cosmos.Proto.Message.IWasmTerraExecuteContractGeneric|null);

                /** Message wasmExecuteContractTransferMessage */
                wasmExecuteContractTransferMessage?: (TW.Cosmos.Proto.Message.IWasmExecuteContractTransfer|null);

                /** Message wasmExecuteContractSendMessage */
                wasmExecuteContractSendMessage?: (TW.Cosmos.Proto.Message.IWasmExecuteContractSend|null);

                /** Message wasmExecuteContractGeneric */
                wasmExecuteContractGeneric?: (TW.Cosmos.Proto.Message.IWasmExecuteContractGeneric|null);

                /** Message signDirectMessage */
                signDirectMessage?: (TW.Cosmos.Proto.Message.ISignDirect|null);

                /** Message authGrant */
                authGrant?: (TW.Cosmos.Proto.Message.IAuthGrant|null);

                /** Message authRevoke */
                authRevoke?: (TW.Cosmos.Proto.Message.IAuthRevoke|null);

                /** Message setWithdrawAddressMessage */
                setWithdrawAddressMessage?: (TW.Cosmos.Proto.Message.ISetWithdrawAddress|null);

                /** Message msgVote */
                msgVote?: (TW.Cosmos.Proto.Message.IMsgVote|null);

                /** Message msgStrideLiquidStakingStake */
                msgStrideLiquidStakingStake?: (TW.Cosmos.Proto.Message.IMsgStrideLiquidStakingStake|null);

                /** Message msgStrideLiquidStakingRedeem */
                msgStrideLiquidStakingRedeem?: (TW.Cosmos.Proto.Message.IMsgStrideLiquidStakingRedeem|null);

                /** Message thorchainDepositMessage */
                thorchainDepositMessage?: (TW.Cosmos.Proto.Message.ITHORChainDeposit|null);

                /** Message wasmInstantiateContractMessage */
                wasmInstantiateContractMessage?: (TW.Cosmos.Proto.Message.IWasmInstantiateContract|null);
            }

            /** Represents a Message. */
            class Message implements IMessage {

                /**
                 * Constructs a new Message.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Cosmos.Proto.IMessage);

                /** Message sendCoinsMessage. */
                public sendCoinsMessage?: (TW.Cosmos.Proto.Message.ISend|null);

                /** Message transferTokensMessage. */
                public transferTokensMessage?: (TW.Cosmos.Proto.Message.ITransfer|null);

                /** Message stakeMessage. */
                public stakeMessage?: (TW.Cosmos.Proto.Message.IDelegate|null);

                /** Message unstakeMessage. */
                public unstakeMessage?: (TW.Cosmos.Proto.Message.IUndelegate|null);

                /** Message restakeMessage. */
                public restakeMessage?: (TW.Cosmos.Proto.Message.IBeginRedelegate|null);

                /** Message withdrawStakeRewardMessage. */
                public withdrawStakeRewardMessage?: (TW.Cosmos.Proto.Message.IWithdrawDelegationReward|null);

                /** Message rawJsonMessage. */
                public rawJsonMessage?: (TW.Cosmos.Proto.Message.IRawJSON|null);

                /** Message wasmTerraExecuteContractTransferMessage. */
                public wasmTerraExecuteContractTransferMessage?: (TW.Cosmos.Proto.Message.IWasmTerraExecuteContractTransfer|null);

                /** Message wasmTerraExecuteContractSendMessage. */
                public wasmTerraExecuteContractSendMessage?: (TW.Cosmos.Proto.Message.IWasmTerraExecuteContractSend|null);

                /** Message thorchainSendMessage. */
                public thorchainSendMessage?: (TW.Cosmos.Proto.Message.ITHORChainSend|null);

                /** Message wasmTerraExecuteContractGeneric. */
                public wasmTerraExecuteContractGeneric?: (TW.Cosmos.Proto.Message.IWasmTerraExecuteContractGeneric|null);

                /** Message wasmExecuteContractTransferMessage. */
                public wasmExecuteContractTransferMessage?: (TW.Cosmos.Proto.Message.IWasmExecuteContractTransfer|null);

                /** Message wasmExecuteContractSendMessage. */
                public wasmExecuteContractSendMessage?: (TW.Cosmos.Proto.Message.IWasmExecuteContractSend|null);

                /** Message wasmExecuteContractGeneric. */
                public wasmExecuteContractGeneric?: (TW.Cosmos.Proto.Message.IWasmExecuteContractGeneric|null);

                /** Message signDirectMessage. */
                public signDirectMessage?: (TW.Cosmos.Proto.Message.ISignDirect|null);

                /** Message authGrant. */
                public authGrant?: (TW.Cosmos.Proto.Message.IAuthGrant|null);

                /** Message authRevoke. */
                public authRevoke?: (TW.Cosmos.Proto.Message.IAuthRevoke|null);

                /** Message setWithdrawAddressMessage. */
                public setWithdrawAddressMessage?: (TW.Cosmos.Proto.Message.ISetWithdrawAddress|null);

                /** Message msgVote. */
                public msgVote?: (TW.Cosmos.Proto.Message.IMsgVote|null);

                /** Message msgStrideLiquidStakingStake. */
                public msgStrideLiquidStakingStake?: (TW.Cosmos.Proto.Message.IMsgStrideLiquidStakingStake|null);

                /** Message msgStrideLiquidStakingRedeem. */
                public msgStrideLiquidStakingRedeem?: (TW.Cosmos.Proto.Message.IMsgStrideLiquidStakingRedeem|null);

                /** Message thorchainDepositMessage. */
                public thorchainDepositMessage?: (TW.Cosmos.Proto.Message.ITHORChainDeposit|null);

                /** Message wasmInstantiateContractMessage. */
                public wasmInstantiateContractMessage?: (TW.Cosmos.Proto.Message.IWasmInstantiateContract|null);

                /** Message messageOneof. */
                public messageOneof?: ("sendCoinsMessage"|"transferTokensMessage"|"stakeMessage"|"unstakeMessage"|"restakeMessage"|"withdrawStakeRewardMessage"|"rawJsonMessage"|"wasmTerraExecuteContractTransferMessage"|"wasmTerraExecuteContractSendMessage"|"thorchainSendMessage"|"wasmTerraExecuteContractGeneric"|"wasmExecuteContractTransferMessage"|"wasmExecuteContractSendMessage"|"wasmExecuteContractGeneric"|"signDirectMessage"|"authGrant"|"authRevoke"|"setWithdrawAddressMessage"|"msgVote"|"msgStrideLiquidStakingStake"|"msgStrideLiquidStakingRedeem"|"thorchainDepositMessage"|"wasmInstantiateContractMessage");

                /**
                 * Creates a new Message instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Message instance
                 */
                public static create(properties?: TW.Cosmos.Proto.IMessage): TW.Cosmos.Proto.Message;

                /**
                 * Encodes the specified Message message. Does not implicitly {@link TW.Cosmos.Proto.Message.verify|verify} messages.
                 * @param message Message message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Cosmos.Proto.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Message message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Message
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Message;

                /**
                 * Gets the default type url for Message
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Message {

                /** Properties of a Send. */
                interface ISend {

                    /** Send fromAddress */
                    fromAddress?: (string|null);

                    /** Send toAddress */
                    toAddress?: (string|null);

                    /** Send amounts */
                    amounts?: (TW.Cosmos.Proto.IAmount[]|null);

                    /** Send typePrefix */
                    typePrefix?: (string|null);
                }

                /** Represents a Send. */
                class Send implements ISend {

                    /**
                     * Constructs a new Send.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Cosmos.Proto.Message.ISend);

                    /** Send fromAddress. */
                    public fromAddress: string;

                    /** Send toAddress. */
                    public toAddress: string;

                    /** Send amounts. */
                    public amounts: TW.Cosmos.Proto.IAmount[];

                    /** Send typePrefix. */
                    public typePrefix: string;

                    /**
                     * Creates a new Send instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Send instance
                     */
                    public static create(properties?: TW.Cosmos.Proto.Message.ISend): TW.Cosmos.Proto.Message.Send;

                    /**
                     * Encodes the specified Send message. Does not implicitly {@link TW.Cosmos.Proto.Message.Send.verify|verify} messages.
                     * @param message Send message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Cosmos.Proto.Message.ISend, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Send message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Send
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Message.Send;

                    /**
                     * Gets the default type url for Send
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Transfer. */
                interface ITransfer {

                    /** Transfer sourcePort */
                    sourcePort?: (string|null);

                    /** Transfer sourceChannel */
                    sourceChannel?: (string|null);

                    /** Transfer token */
                    token?: (TW.Cosmos.Proto.IAmount|null);

                    /** Transfer sender */
                    sender?: (string|null);

                    /** Transfer receiver */
                    receiver?: (string|null);

                    /** Transfer timeoutHeight */
                    timeoutHeight?: (TW.Cosmos.Proto.IHeight|null);

                    /** Transfer timeoutTimestamp */
                    timeoutTimestamp?: (number|null);
                }

                /** Represents a Transfer. */
                class Transfer implements ITransfer {

                    /**
                     * Constructs a new Transfer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Cosmos.Proto.Message.ITransfer);

                    /** Transfer sourcePort. */
                    public sourcePort: string;

                    /** Transfer sourceChannel. */
                    public sourceChannel: string;

                    /** Transfer token. */
                    public token?: (TW.Cosmos.Proto.IAmount|null);

                    /** Transfer sender. */
                    public sender: string;

                    /** Transfer receiver. */
                    public receiver: string;

                    /** Transfer timeoutHeight. */
                    public timeoutHeight?: (TW.Cosmos.Proto.IHeight|null);

                    /** Transfer timeoutTimestamp. */
                    public timeoutTimestamp: number;

                    /**
                     * Creates a new Transfer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Transfer instance
                     */
                    public static create(properties?: TW.Cosmos.Proto.Message.ITransfer): TW.Cosmos.Proto.Message.Transfer;

                    /**
                     * Encodes the specified Transfer message. Does not implicitly {@link TW.Cosmos.Proto.Message.Transfer.verify|verify} messages.
                     * @param message Transfer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Cosmos.Proto.Message.ITransfer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Transfer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Transfer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Message.Transfer;

                    /**
                     * Gets the default type url for Transfer
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Delegate. */
                interface IDelegate {

                    /** Delegate delegatorAddress */
                    delegatorAddress?: (string|null);

                    /** Delegate validatorAddress */
                    validatorAddress?: (string|null);

                    /** Delegate amount */
                    amount?: (TW.Cosmos.Proto.IAmount|null);

                    /** Delegate typePrefix */
                    typePrefix?: (string|null);
                }

                /** Represents a Delegate. */
                class Delegate implements IDelegate {

                    /**
                     * Constructs a new Delegate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Cosmos.Proto.Message.IDelegate);

                    /** Delegate delegatorAddress. */
                    public delegatorAddress: string;

                    /** Delegate validatorAddress. */
                    public validatorAddress: string;

                    /** Delegate amount. */
                    public amount?: (TW.Cosmos.Proto.IAmount|null);

                    /** Delegate typePrefix. */
                    public typePrefix: string;

                    /**
                     * Creates a new Delegate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Delegate instance
                     */
                    public static create(properties?: TW.Cosmos.Proto.Message.IDelegate): TW.Cosmos.Proto.Message.Delegate;

                    /**
                     * Encodes the specified Delegate message. Does not implicitly {@link TW.Cosmos.Proto.Message.Delegate.verify|verify} messages.
                     * @param message Delegate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Cosmos.Proto.Message.IDelegate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Delegate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Delegate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Message.Delegate;

                    /**
                     * Gets the default type url for Delegate
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Undelegate. */
                interface IUndelegate {

                    /** Undelegate delegatorAddress */
                    delegatorAddress?: (string|null);

                    /** Undelegate validatorAddress */
                    validatorAddress?: (string|null);

                    /** Undelegate amount */
                    amount?: (TW.Cosmos.Proto.IAmount|null);

                    /** Undelegate typePrefix */
                    typePrefix?: (string|null);
                }

                /** Represents an Undelegate. */
                class Undelegate implements IUndelegate {

                    /**
                     * Constructs a new Undelegate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Cosmos.Proto.Message.IUndelegate);

                    /** Undelegate delegatorAddress. */
                    public delegatorAddress: string;

                    /** Undelegate validatorAddress. */
                    public validatorAddress: string;

                    /** Undelegate amount. */
                    public amount?: (TW.Cosmos.Proto.IAmount|null);

                    /** Undelegate typePrefix. */
                    public typePrefix: string;

                    /**
                     * Creates a new Undelegate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Undelegate instance
                     */
                    public static create(properties?: TW.Cosmos.Proto.Message.IUndelegate): TW.Cosmos.Proto.Message.Undelegate;

                    /**
                     * Encodes the specified Undelegate message. Does not implicitly {@link TW.Cosmos.Proto.Message.Undelegate.verify|verify} messages.
                     * @param message Undelegate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Cosmos.Proto.Message.IUndelegate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Undelegate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Undelegate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Message.Undelegate;

                    /**
                     * Gets the default type url for Undelegate
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BeginRedelegate. */
                interface IBeginRedelegate {

                    /** BeginRedelegate delegatorAddress */
                    delegatorAddress?: (string|null);

                    /** BeginRedelegate validatorSrcAddress */
                    validatorSrcAddress?: (string|null);

                    /** BeginRedelegate validatorDstAddress */
                    validatorDstAddress?: (string|null);

                    /** BeginRedelegate amount */
                    amount?: (TW.Cosmos.Proto.IAmount|null);

                    /** BeginRedelegate typePrefix */
                    typePrefix?: (string|null);
                }

                /** Represents a BeginRedelegate. */
                class BeginRedelegate implements IBeginRedelegate {

                    /**
                     * Constructs a new BeginRedelegate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Cosmos.Proto.Message.IBeginRedelegate);

                    /** BeginRedelegate delegatorAddress. */
                    public delegatorAddress: string;

                    /** BeginRedelegate validatorSrcAddress. */
                    public validatorSrcAddress: string;

                    /** BeginRedelegate validatorDstAddress. */
                    public validatorDstAddress: string;

                    /** BeginRedelegate amount. */
                    public amount?: (TW.Cosmos.Proto.IAmount|null);

                    /** BeginRedelegate typePrefix. */
                    public typePrefix: string;

                    /**
                     * Creates a new BeginRedelegate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BeginRedelegate instance
                     */
                    public static create(properties?: TW.Cosmos.Proto.Message.IBeginRedelegate): TW.Cosmos.Proto.Message.BeginRedelegate;

                    /**
                     * Encodes the specified BeginRedelegate message. Does not implicitly {@link TW.Cosmos.Proto.Message.BeginRedelegate.verify|verify} messages.
                     * @param message BeginRedelegate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Cosmos.Proto.Message.IBeginRedelegate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BeginRedelegate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BeginRedelegate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Message.BeginRedelegate;

                    /**
                     * Gets the default type url for BeginRedelegate
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SetWithdrawAddress. */
                interface ISetWithdrawAddress {

                    /** SetWithdrawAddress delegatorAddress */
                    delegatorAddress?: (string|null);

                    /** SetWithdrawAddress withdrawAddress */
                    withdrawAddress?: (string|null);

                    /** SetWithdrawAddress typePrefix */
                    typePrefix?: (string|null);
                }

                /** Represents a SetWithdrawAddress. */
                class SetWithdrawAddress implements ISetWithdrawAddress {

                    /**
                     * Constructs a new SetWithdrawAddress.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Cosmos.Proto.Message.ISetWithdrawAddress);

                    /** SetWithdrawAddress delegatorAddress. */
                    public delegatorAddress: string;

                    /** SetWithdrawAddress withdrawAddress. */
                    public withdrawAddress: string;

                    /** SetWithdrawAddress typePrefix. */
                    public typePrefix: string;

                    /**
                     * Creates a new SetWithdrawAddress instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SetWithdrawAddress instance
                     */
                    public static create(properties?: TW.Cosmos.Proto.Message.ISetWithdrawAddress): TW.Cosmos.Proto.Message.SetWithdrawAddress;

                    /**
                     * Encodes the specified SetWithdrawAddress message. Does not implicitly {@link TW.Cosmos.Proto.Message.SetWithdrawAddress.verify|verify} messages.
                     * @param message SetWithdrawAddress message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Cosmos.Proto.Message.ISetWithdrawAddress, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SetWithdrawAddress message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SetWithdrawAddress
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Message.SetWithdrawAddress;

                    /**
                     * Gets the default type url for SetWithdrawAddress
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WithdrawDelegationReward. */
                interface IWithdrawDelegationReward {

                    /** WithdrawDelegationReward delegatorAddress */
                    delegatorAddress?: (string|null);

                    /** WithdrawDelegationReward validatorAddress */
                    validatorAddress?: (string|null);

                    /** WithdrawDelegationReward typePrefix */
                    typePrefix?: (string|null);
                }

                /** Represents a WithdrawDelegationReward. */
                class WithdrawDelegationReward implements IWithdrawDelegationReward {

                    /**
                     * Constructs a new WithdrawDelegationReward.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Cosmos.Proto.Message.IWithdrawDelegationReward);

                    /** WithdrawDelegationReward delegatorAddress. */
                    public delegatorAddress: string;

                    /** WithdrawDelegationReward validatorAddress. */
                    public validatorAddress: string;

                    /** WithdrawDelegationReward typePrefix. */
                    public typePrefix: string;

                    /**
                     * Creates a new WithdrawDelegationReward instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WithdrawDelegationReward instance
                     */
                    public static create(properties?: TW.Cosmos.Proto.Message.IWithdrawDelegationReward): TW.Cosmos.Proto.Message.WithdrawDelegationReward;

                    /**
                     * Encodes the specified WithdrawDelegationReward message. Does not implicitly {@link TW.Cosmos.Proto.Message.WithdrawDelegationReward.verify|verify} messages.
                     * @param message WithdrawDelegationReward message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Cosmos.Proto.Message.IWithdrawDelegationReward, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WithdrawDelegationReward message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WithdrawDelegationReward
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Message.WithdrawDelegationReward;

                    /**
                     * Gets the default type url for WithdrawDelegationReward
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WasmTerraExecuteContractTransfer. */
                interface IWasmTerraExecuteContractTransfer {

                    /** WasmTerraExecuteContractTransfer senderAddress */
                    senderAddress?: (string|null);

                    /** WasmTerraExecuteContractTransfer contractAddress */
                    contractAddress?: (string|null);

                    /** WasmTerraExecuteContractTransfer amount */
                    amount?: (Uint8Array|null);

                    /** WasmTerraExecuteContractTransfer recipientAddress */
                    recipientAddress?: (string|null);
                }

                /** Represents a WasmTerraExecuteContractTransfer. */
                class WasmTerraExecuteContractTransfer implements IWasmTerraExecuteContractTransfer {

                    /**
                     * Constructs a new WasmTerraExecuteContractTransfer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Cosmos.Proto.Message.IWasmTerraExecuteContractTransfer);

                    /** WasmTerraExecuteContractTransfer senderAddress. */
                    public senderAddress: string;

                    /** WasmTerraExecuteContractTransfer contractAddress. */
                    public contractAddress: string;

                    /** WasmTerraExecuteContractTransfer amount. */
                    public amount: Uint8Array;

                    /** WasmTerraExecuteContractTransfer recipientAddress. */
                    public recipientAddress: string;

                    /**
                     * Creates a new WasmTerraExecuteContractTransfer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WasmTerraExecuteContractTransfer instance
                     */
                    public static create(properties?: TW.Cosmos.Proto.Message.IWasmTerraExecuteContractTransfer): TW.Cosmos.Proto.Message.WasmTerraExecuteContractTransfer;

                    /**
                     * Encodes the specified WasmTerraExecuteContractTransfer message. Does not implicitly {@link TW.Cosmos.Proto.Message.WasmTerraExecuteContractTransfer.verify|verify} messages.
                     * @param message WasmTerraExecuteContractTransfer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Cosmos.Proto.Message.IWasmTerraExecuteContractTransfer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WasmTerraExecuteContractTransfer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WasmTerraExecuteContractTransfer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Message.WasmTerraExecuteContractTransfer;

                    /**
                     * Gets the default type url for WasmTerraExecuteContractTransfer
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WasmTerraExecuteContractSend. */
                interface IWasmTerraExecuteContractSend {

                    /** WasmTerraExecuteContractSend senderAddress */
                    senderAddress?: (string|null);

                    /** WasmTerraExecuteContractSend contractAddress */
                    contractAddress?: (string|null);

                    /** WasmTerraExecuteContractSend amount */
                    amount?: (Uint8Array|null);

                    /** WasmTerraExecuteContractSend recipientContractAddress */
                    recipientContractAddress?: (string|null);

                    /** WasmTerraExecuteContractSend msg */
                    msg?: (string|null);

                    /** WasmTerraExecuteContractSend coin */
                    coin?: (string[]|null);
                }

                /** Represents a WasmTerraExecuteContractSend. */
                class WasmTerraExecuteContractSend implements IWasmTerraExecuteContractSend {

                    /**
                     * Constructs a new WasmTerraExecuteContractSend.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Cosmos.Proto.Message.IWasmTerraExecuteContractSend);

                    /** WasmTerraExecuteContractSend senderAddress. */
                    public senderAddress: string;

                    /** WasmTerraExecuteContractSend contractAddress. */
                    public contractAddress: string;

                    /** WasmTerraExecuteContractSend amount. */
                    public amount: Uint8Array;

                    /** WasmTerraExecuteContractSend recipientContractAddress. */
                    public recipientContractAddress: string;

                    /** WasmTerraExecuteContractSend msg. */
                    public msg: string;

                    /** WasmTerraExecuteContractSend coin. */
                    public coin: string[];

                    /**
                     * Creates a new WasmTerraExecuteContractSend instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WasmTerraExecuteContractSend instance
                     */
                    public static create(properties?: TW.Cosmos.Proto.Message.IWasmTerraExecuteContractSend): TW.Cosmos.Proto.Message.WasmTerraExecuteContractSend;

                    /**
                     * Encodes the specified WasmTerraExecuteContractSend message. Does not implicitly {@link TW.Cosmos.Proto.Message.WasmTerraExecuteContractSend.verify|verify} messages.
                     * @param message WasmTerraExecuteContractSend message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Cosmos.Proto.Message.IWasmTerraExecuteContractSend, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WasmTerraExecuteContractSend message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WasmTerraExecuteContractSend
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Message.WasmTerraExecuteContractSend;

                    /**
                     * Gets the default type url for WasmTerraExecuteContractSend
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a THORChainSend. */
                interface ITHORChainSend {

                    /** THORChainSend fromAddress */
                    fromAddress?: (Uint8Array|null);

                    /** THORChainSend toAddress */
                    toAddress?: (Uint8Array|null);

                    /** THORChainSend amounts */
                    amounts?: (TW.Cosmos.Proto.IAmount[]|null);
                }

                /** Represents a THORChainSend. */
                class THORChainSend implements ITHORChainSend {

                    /**
                     * Constructs a new THORChainSend.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Cosmos.Proto.Message.ITHORChainSend);

                    /** THORChainSend fromAddress. */
                    public fromAddress: Uint8Array;

                    /** THORChainSend toAddress. */
                    public toAddress: Uint8Array;

                    /** THORChainSend amounts. */
                    public amounts: TW.Cosmos.Proto.IAmount[];

                    /**
                     * Creates a new THORChainSend instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns THORChainSend instance
                     */
                    public static create(properties?: TW.Cosmos.Proto.Message.ITHORChainSend): TW.Cosmos.Proto.Message.THORChainSend;

                    /**
                     * Encodes the specified THORChainSend message. Does not implicitly {@link TW.Cosmos.Proto.Message.THORChainSend.verify|verify} messages.
                     * @param message THORChainSend message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Cosmos.Proto.Message.ITHORChainSend, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a THORChainSend message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns THORChainSend
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Message.THORChainSend;

                    /**
                     * Gets the default type url for THORChainSend
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a THORChainDeposit. */
                interface ITHORChainDeposit {

                    /** THORChainDeposit coins */
                    coins?: (TW.Cosmos.Proto.ITHORChainCoin[]|null);

                    /** THORChainDeposit memo */
                    memo?: (string|null);

                    /** THORChainDeposit signer */
                    signer?: (Uint8Array|null);
                }

                /** Represents a THORChainDeposit. */
                class THORChainDeposit implements ITHORChainDeposit {

                    /**
                     * Constructs a new THORChainDeposit.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Cosmos.Proto.Message.ITHORChainDeposit);

                    /** THORChainDeposit coins. */
                    public coins: TW.Cosmos.Proto.ITHORChainCoin[];

                    /** THORChainDeposit memo. */
                    public memo: string;

                    /** THORChainDeposit signer. */
                    public signer: Uint8Array;

                    /**
                     * Creates a new THORChainDeposit instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns THORChainDeposit instance
                     */
                    public static create(properties?: TW.Cosmos.Proto.Message.ITHORChainDeposit): TW.Cosmos.Proto.Message.THORChainDeposit;

                    /**
                     * Encodes the specified THORChainDeposit message. Does not implicitly {@link TW.Cosmos.Proto.Message.THORChainDeposit.verify|verify} messages.
                     * @param message THORChainDeposit message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Cosmos.Proto.Message.ITHORChainDeposit, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a THORChainDeposit message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns THORChainDeposit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Message.THORChainDeposit;

                    /**
                     * Gets the default type url for THORChainDeposit
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WasmTerraExecuteContractGeneric. */
                interface IWasmTerraExecuteContractGeneric {

                    /** WasmTerraExecuteContractGeneric senderAddress */
                    senderAddress?: (string|null);

                    /** WasmTerraExecuteContractGeneric contractAddress */
                    contractAddress?: (string|null);

                    /** WasmTerraExecuteContractGeneric executeMsg */
                    executeMsg?: (string|null);

                    /** WasmTerraExecuteContractGeneric coins */
                    coins?: (TW.Cosmos.Proto.IAmount[]|null);
                }

                /** Represents a WasmTerraExecuteContractGeneric. */
                class WasmTerraExecuteContractGeneric implements IWasmTerraExecuteContractGeneric {

                    /**
                     * Constructs a new WasmTerraExecuteContractGeneric.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Cosmos.Proto.Message.IWasmTerraExecuteContractGeneric);

                    /** WasmTerraExecuteContractGeneric senderAddress. */
                    public senderAddress: string;

                    /** WasmTerraExecuteContractGeneric contractAddress. */
                    public contractAddress: string;

                    /** WasmTerraExecuteContractGeneric executeMsg. */
                    public executeMsg: string;

                    /** WasmTerraExecuteContractGeneric coins. */
                    public coins: TW.Cosmos.Proto.IAmount[];

                    /**
                     * Creates a new WasmTerraExecuteContractGeneric instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WasmTerraExecuteContractGeneric instance
                     */
                    public static create(properties?: TW.Cosmos.Proto.Message.IWasmTerraExecuteContractGeneric): TW.Cosmos.Proto.Message.WasmTerraExecuteContractGeneric;

                    /**
                     * Encodes the specified WasmTerraExecuteContractGeneric message. Does not implicitly {@link TW.Cosmos.Proto.Message.WasmTerraExecuteContractGeneric.verify|verify} messages.
                     * @param message WasmTerraExecuteContractGeneric message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Cosmos.Proto.Message.IWasmTerraExecuteContractGeneric, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WasmTerraExecuteContractGeneric message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WasmTerraExecuteContractGeneric
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Message.WasmTerraExecuteContractGeneric;

                    /**
                     * Gets the default type url for WasmTerraExecuteContractGeneric
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WasmExecuteContractTransfer. */
                interface IWasmExecuteContractTransfer {

                    /** WasmExecuteContractTransfer senderAddress */
                    senderAddress?: (string|null);

                    /** WasmExecuteContractTransfer contractAddress */
                    contractAddress?: (string|null);

                    /** WasmExecuteContractTransfer amount */
                    amount?: (Uint8Array|null);

                    /** WasmExecuteContractTransfer recipientAddress */
                    recipientAddress?: (string|null);
                }

                /** Represents a WasmExecuteContractTransfer. */
                class WasmExecuteContractTransfer implements IWasmExecuteContractTransfer {

                    /**
                     * Constructs a new WasmExecuteContractTransfer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Cosmos.Proto.Message.IWasmExecuteContractTransfer);

                    /** WasmExecuteContractTransfer senderAddress. */
                    public senderAddress: string;

                    /** WasmExecuteContractTransfer contractAddress. */
                    public contractAddress: string;

                    /** WasmExecuteContractTransfer amount. */
                    public amount: Uint8Array;

                    /** WasmExecuteContractTransfer recipientAddress. */
                    public recipientAddress: string;

                    /**
                     * Creates a new WasmExecuteContractTransfer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WasmExecuteContractTransfer instance
                     */
                    public static create(properties?: TW.Cosmos.Proto.Message.IWasmExecuteContractTransfer): TW.Cosmos.Proto.Message.WasmExecuteContractTransfer;

                    /**
                     * Encodes the specified WasmExecuteContractTransfer message. Does not implicitly {@link TW.Cosmos.Proto.Message.WasmExecuteContractTransfer.verify|verify} messages.
                     * @param message WasmExecuteContractTransfer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Cosmos.Proto.Message.IWasmExecuteContractTransfer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WasmExecuteContractTransfer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WasmExecuteContractTransfer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Message.WasmExecuteContractTransfer;

                    /**
                     * Gets the default type url for WasmExecuteContractTransfer
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WasmExecuteContractSend. */
                interface IWasmExecuteContractSend {

                    /** WasmExecuteContractSend senderAddress */
                    senderAddress?: (string|null);

                    /** WasmExecuteContractSend contractAddress */
                    contractAddress?: (string|null);

                    /** WasmExecuteContractSend amount */
                    amount?: (Uint8Array|null);

                    /** WasmExecuteContractSend recipientContractAddress */
                    recipientContractAddress?: (string|null);

                    /** WasmExecuteContractSend msg */
                    msg?: (string|null);

                    /** WasmExecuteContractSend coin */
                    coin?: (string[]|null);
                }

                /** Represents a WasmExecuteContractSend. */
                class WasmExecuteContractSend implements IWasmExecuteContractSend {

                    /**
                     * Constructs a new WasmExecuteContractSend.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Cosmos.Proto.Message.IWasmExecuteContractSend);

                    /** WasmExecuteContractSend senderAddress. */
                    public senderAddress: string;

                    /** WasmExecuteContractSend contractAddress. */
                    public contractAddress: string;

                    /** WasmExecuteContractSend amount. */
                    public amount: Uint8Array;

                    /** WasmExecuteContractSend recipientContractAddress. */
                    public recipientContractAddress: string;

                    /** WasmExecuteContractSend msg. */
                    public msg: string;

                    /** WasmExecuteContractSend coin. */
                    public coin: string[];

                    /**
                     * Creates a new WasmExecuteContractSend instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WasmExecuteContractSend instance
                     */
                    public static create(properties?: TW.Cosmos.Proto.Message.IWasmExecuteContractSend): TW.Cosmos.Proto.Message.WasmExecuteContractSend;

                    /**
                     * Encodes the specified WasmExecuteContractSend message. Does not implicitly {@link TW.Cosmos.Proto.Message.WasmExecuteContractSend.verify|verify} messages.
                     * @param message WasmExecuteContractSend message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Cosmos.Proto.Message.IWasmExecuteContractSend, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WasmExecuteContractSend message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WasmExecuteContractSend
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Message.WasmExecuteContractSend;

                    /**
                     * Gets the default type url for WasmExecuteContractSend
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WasmExecuteContractGeneric. */
                interface IWasmExecuteContractGeneric {

                    /** WasmExecuteContractGeneric senderAddress */
                    senderAddress?: (string|null);

                    /** WasmExecuteContractGeneric contractAddress */
                    contractAddress?: (string|null);

                    /** WasmExecuteContractGeneric executeMsg */
                    executeMsg?: (string|null);

                    /** WasmExecuteContractGeneric coins */
                    coins?: (TW.Cosmos.Proto.IAmount[]|null);
                }

                /** Represents a WasmExecuteContractGeneric. */
                class WasmExecuteContractGeneric implements IWasmExecuteContractGeneric {

                    /**
                     * Constructs a new WasmExecuteContractGeneric.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Cosmos.Proto.Message.IWasmExecuteContractGeneric);

                    /** WasmExecuteContractGeneric senderAddress. */
                    public senderAddress: string;

                    /** WasmExecuteContractGeneric contractAddress. */
                    public contractAddress: string;

                    /** WasmExecuteContractGeneric executeMsg. */
                    public executeMsg: string;

                    /** WasmExecuteContractGeneric coins. */
                    public coins: TW.Cosmos.Proto.IAmount[];

                    /**
                     * Creates a new WasmExecuteContractGeneric instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WasmExecuteContractGeneric instance
                     */
                    public static create(properties?: TW.Cosmos.Proto.Message.IWasmExecuteContractGeneric): TW.Cosmos.Proto.Message.WasmExecuteContractGeneric;

                    /**
                     * Encodes the specified WasmExecuteContractGeneric message. Does not implicitly {@link TW.Cosmos.Proto.Message.WasmExecuteContractGeneric.verify|verify} messages.
                     * @param message WasmExecuteContractGeneric message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Cosmos.Proto.Message.IWasmExecuteContractGeneric, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WasmExecuteContractGeneric message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WasmExecuteContractGeneric
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Message.WasmExecuteContractGeneric;

                    /**
                     * Gets the default type url for WasmExecuteContractGeneric
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WasmInstantiateContract. */
                interface IWasmInstantiateContract {

                    /** WasmInstantiateContract sender */
                    sender?: (string|null);

                    /** WasmInstantiateContract admin */
                    admin?: (string|null);

                    /** WasmInstantiateContract codeId */
                    codeId?: (number|null);

                    /** WasmInstantiateContract label */
                    label?: (string|null);

                    /** WasmInstantiateContract msg */
                    msg?: (Uint8Array|null);

                    /** WasmInstantiateContract initFunds */
                    initFunds?: (TW.Cosmos.Proto.IAmount[]|null);
                }

                /** Represents a WasmInstantiateContract. */
                class WasmInstantiateContract implements IWasmInstantiateContract {

                    /**
                     * Constructs a new WasmInstantiateContract.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Cosmos.Proto.Message.IWasmInstantiateContract);

                    /** WasmInstantiateContract sender. */
                    public sender: string;

                    /** WasmInstantiateContract admin. */
                    public admin: string;

                    /** WasmInstantiateContract codeId. */
                    public codeId: number;

                    /** WasmInstantiateContract label. */
                    public label: string;

                    /** WasmInstantiateContract msg. */
                    public msg: Uint8Array;

                    /** WasmInstantiateContract initFunds. */
                    public initFunds: TW.Cosmos.Proto.IAmount[];

                    /**
                     * Creates a new WasmInstantiateContract instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WasmInstantiateContract instance
                     */
                    public static create(properties?: TW.Cosmos.Proto.Message.IWasmInstantiateContract): TW.Cosmos.Proto.Message.WasmInstantiateContract;

                    /**
                     * Encodes the specified WasmInstantiateContract message. Does not implicitly {@link TW.Cosmos.Proto.Message.WasmInstantiateContract.verify|verify} messages.
                     * @param message WasmInstantiateContract message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Cosmos.Proto.Message.IWasmInstantiateContract, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WasmInstantiateContract message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WasmInstantiateContract
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Message.WasmInstantiateContract;

                    /**
                     * Gets the default type url for WasmInstantiateContract
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RawJSON. */
                interface IRawJSON {

                    /** RawJSON type */
                    type?: (string|null);

                    /** RawJSON value */
                    value?: (string|null);
                }

                /** Represents a RawJSON. */
                class RawJSON implements IRawJSON {

                    /**
                     * Constructs a new RawJSON.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Cosmos.Proto.Message.IRawJSON);

                    /** RawJSON type. */
                    public type: string;

                    /** RawJSON value. */
                    public value: string;

                    /**
                     * Creates a new RawJSON instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RawJSON instance
                     */
                    public static create(properties?: TW.Cosmos.Proto.Message.IRawJSON): TW.Cosmos.Proto.Message.RawJSON;

                    /**
                     * Encodes the specified RawJSON message. Does not implicitly {@link TW.Cosmos.Proto.Message.RawJSON.verify|verify} messages.
                     * @param message RawJSON message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Cosmos.Proto.Message.IRawJSON, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RawJSON message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RawJSON
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Message.RawJSON;

                    /**
                     * Gets the default type url for RawJSON
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SignDirect. */
                interface ISignDirect {

                    /** SignDirect bodyBytes */
                    bodyBytes?: (Uint8Array|null);

                    /** SignDirect authInfoBytes */
                    authInfoBytes?: (Uint8Array|null);
                }

                /** Represents a SignDirect. */
                class SignDirect implements ISignDirect {

                    /**
                     * Constructs a new SignDirect.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Cosmos.Proto.Message.ISignDirect);

                    /** SignDirect bodyBytes. */
                    public bodyBytes: Uint8Array;

                    /** SignDirect authInfoBytes. */
                    public authInfoBytes: Uint8Array;

                    /**
                     * Creates a new SignDirect instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SignDirect instance
                     */
                    public static create(properties?: TW.Cosmos.Proto.Message.ISignDirect): TW.Cosmos.Proto.Message.SignDirect;

                    /**
                     * Encodes the specified SignDirect message. Does not implicitly {@link TW.Cosmos.Proto.Message.SignDirect.verify|verify} messages.
                     * @param message SignDirect message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Cosmos.Proto.Message.ISignDirect, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SignDirect message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SignDirect
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Message.SignDirect;

                    /**
                     * Gets the default type url for SignDirect
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StakeAuthorization. */
                interface IStakeAuthorization {

                    /** StakeAuthorization maxTokens */
                    maxTokens?: (TW.Cosmos.Proto.IAmount|null);

                    /** StakeAuthorization allowList */
                    allowList?: (TW.Cosmos.Proto.Message.StakeAuthorization.IValidators|null);

                    /** StakeAuthorization denyList */
                    denyList?: (TW.Cosmos.Proto.Message.StakeAuthorization.IValidators|null);

                    /** StakeAuthorization authorizationType */
                    authorizationType?: (TW.Cosmos.Proto.Message.AuthorizationType|null);
                }

                /** Represents a StakeAuthorization. */
                class StakeAuthorization implements IStakeAuthorization {

                    /**
                     * Constructs a new StakeAuthorization.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Cosmos.Proto.Message.IStakeAuthorization);

                    /** StakeAuthorization maxTokens. */
                    public maxTokens?: (TW.Cosmos.Proto.IAmount|null);

                    /** StakeAuthorization allowList. */
                    public allowList?: (TW.Cosmos.Proto.Message.StakeAuthorization.IValidators|null);

                    /** StakeAuthorization denyList. */
                    public denyList?: (TW.Cosmos.Proto.Message.StakeAuthorization.IValidators|null);

                    /** StakeAuthorization authorizationType. */
                    public authorizationType: TW.Cosmos.Proto.Message.AuthorizationType;

                    /** StakeAuthorization validators. */
                    public validators?: ("allowList"|"denyList");

                    /**
                     * Creates a new StakeAuthorization instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StakeAuthorization instance
                     */
                    public static create(properties?: TW.Cosmos.Proto.Message.IStakeAuthorization): TW.Cosmos.Proto.Message.StakeAuthorization;

                    /**
                     * Encodes the specified StakeAuthorization message. Does not implicitly {@link TW.Cosmos.Proto.Message.StakeAuthorization.verify|verify} messages.
                     * @param message StakeAuthorization message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Cosmos.Proto.Message.IStakeAuthorization, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StakeAuthorization message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StakeAuthorization
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Message.StakeAuthorization;

                    /**
                     * Gets the default type url for StakeAuthorization
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace StakeAuthorization {

                    /** Properties of a Validators. */
                    interface IValidators {

                        /** Validators address */
                        address?: (string[]|null);
                    }

                    /** Represents a Validators. */
                    class Validators implements IValidators {

                        /**
                         * Constructs a new Validators.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: TW.Cosmos.Proto.Message.StakeAuthorization.IValidators);

                        /** Validators address. */
                        public address: string[];

                        /**
                         * Creates a new Validators instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Validators instance
                         */
                        public static create(properties?: TW.Cosmos.Proto.Message.StakeAuthorization.IValidators): TW.Cosmos.Proto.Message.StakeAuthorization.Validators;

                        /**
                         * Encodes the specified Validators message. Does not implicitly {@link TW.Cosmos.Proto.Message.StakeAuthorization.Validators.verify|verify} messages.
                         * @param message Validators message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: TW.Cosmos.Proto.Message.StakeAuthorization.IValidators, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Validators message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Validators
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Message.StakeAuthorization.Validators;

                        /**
                         * Gets the default type url for Validators
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** AuthorizationType enum. */
                enum AuthorizationType {
                    UNSPECIFIED = 0,
                    DELEGATE = 1,
                    UNDELEGATE = 2,
                    REDELEGATE = 3
                }

                /** Properties of an AuthGrant. */
                interface IAuthGrant {

                    /** AuthGrant granter */
                    granter?: (string|null);

                    /** AuthGrant grantee */
                    grantee?: (string|null);

                    /** AuthGrant grantStake */
                    grantStake?: (TW.Cosmos.Proto.Message.IStakeAuthorization|null);

                    /** AuthGrant expiration */
                    expiration?: (number|null);
                }

                /** Represents an AuthGrant. */
                class AuthGrant implements IAuthGrant {

                    /**
                     * Constructs a new AuthGrant.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Cosmos.Proto.Message.IAuthGrant);

                    /** AuthGrant granter. */
                    public granter: string;

                    /** AuthGrant grantee. */
                    public grantee: string;

                    /** AuthGrant grantStake. */
                    public grantStake?: (TW.Cosmos.Proto.Message.IStakeAuthorization|null);

                    /** AuthGrant expiration. */
                    public expiration: number;

                    /** AuthGrant grantType. */
                    public grantType?: "grantStake";

                    /**
                     * Creates a new AuthGrant instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AuthGrant instance
                     */
                    public static create(properties?: TW.Cosmos.Proto.Message.IAuthGrant): TW.Cosmos.Proto.Message.AuthGrant;

                    /**
                     * Encodes the specified AuthGrant message. Does not implicitly {@link TW.Cosmos.Proto.Message.AuthGrant.verify|verify} messages.
                     * @param message AuthGrant message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Cosmos.Proto.Message.IAuthGrant, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AuthGrant message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AuthGrant
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Message.AuthGrant;

                    /**
                     * Gets the default type url for AuthGrant
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AuthRevoke. */
                interface IAuthRevoke {

                    /** AuthRevoke granter */
                    granter?: (string|null);

                    /** AuthRevoke grantee */
                    grantee?: (string|null);

                    /** AuthRevoke msgTypeUrl */
                    msgTypeUrl?: (string|null);
                }

                /** Represents an AuthRevoke. */
                class AuthRevoke implements IAuthRevoke {

                    /**
                     * Constructs a new AuthRevoke.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Cosmos.Proto.Message.IAuthRevoke);

                    /** AuthRevoke granter. */
                    public granter: string;

                    /** AuthRevoke grantee. */
                    public grantee: string;

                    /** AuthRevoke msgTypeUrl. */
                    public msgTypeUrl: string;

                    /**
                     * Creates a new AuthRevoke instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AuthRevoke instance
                     */
                    public static create(properties?: TW.Cosmos.Proto.Message.IAuthRevoke): TW.Cosmos.Proto.Message.AuthRevoke;

                    /**
                     * Encodes the specified AuthRevoke message. Does not implicitly {@link TW.Cosmos.Proto.Message.AuthRevoke.verify|verify} messages.
                     * @param message AuthRevoke message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Cosmos.Proto.Message.IAuthRevoke, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AuthRevoke message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AuthRevoke
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Message.AuthRevoke;

                    /**
                     * Gets the default type url for AuthRevoke
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** VoteOption enum. */
                enum VoteOption {
                    _UNSPECIFIED = 0,
                    YES = 1,
                    ABSTAIN = 2,
                    NO = 3,
                    NO_WITH_VETO = 4
                }

                /** Properties of a MsgVote. */
                interface IMsgVote {

                    /** MsgVote proposalId */
                    proposalId?: (number|null);

                    /** MsgVote voter */
                    voter?: (string|null);

                    /** MsgVote option */
                    option?: (TW.Cosmos.Proto.Message.VoteOption|null);
                }

                /** Represents a MsgVote. */
                class MsgVote implements IMsgVote {

                    /**
                     * Constructs a new MsgVote.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Cosmos.Proto.Message.IMsgVote);

                    /** MsgVote proposalId. */
                    public proposalId: number;

                    /** MsgVote voter. */
                    public voter: string;

                    /** MsgVote option. */
                    public option: TW.Cosmos.Proto.Message.VoteOption;

                    /**
                     * Creates a new MsgVote instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgVote instance
                     */
                    public static create(properties?: TW.Cosmos.Proto.Message.IMsgVote): TW.Cosmos.Proto.Message.MsgVote;

                    /**
                     * Encodes the specified MsgVote message. Does not implicitly {@link TW.Cosmos.Proto.Message.MsgVote.verify|verify} messages.
                     * @param message MsgVote message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Cosmos.Proto.Message.IMsgVote, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MsgVote message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MsgVote
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Message.MsgVote;

                    /**
                     * Gets the default type url for MsgVote
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MsgStrideLiquidStakingStake. */
                interface IMsgStrideLiquidStakingStake {

                    /** MsgStrideLiquidStakingStake creator */
                    creator?: (string|null);

                    /** MsgStrideLiquidStakingStake amount */
                    amount?: (string|null);

                    /** MsgStrideLiquidStakingStake hostDenom */
                    hostDenom?: (string|null);
                }

                /** Represents a MsgStrideLiquidStakingStake. */
                class MsgStrideLiquidStakingStake implements IMsgStrideLiquidStakingStake {

                    /**
                     * Constructs a new MsgStrideLiquidStakingStake.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Cosmos.Proto.Message.IMsgStrideLiquidStakingStake);

                    /** MsgStrideLiquidStakingStake creator. */
                    public creator: string;

                    /** MsgStrideLiquidStakingStake amount. */
                    public amount: string;

                    /** MsgStrideLiquidStakingStake hostDenom. */
                    public hostDenom: string;

                    /**
                     * Creates a new MsgStrideLiquidStakingStake instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgStrideLiquidStakingStake instance
                     */
                    public static create(properties?: TW.Cosmos.Proto.Message.IMsgStrideLiquidStakingStake): TW.Cosmos.Proto.Message.MsgStrideLiquidStakingStake;

                    /**
                     * Encodes the specified MsgStrideLiquidStakingStake message. Does not implicitly {@link TW.Cosmos.Proto.Message.MsgStrideLiquidStakingStake.verify|verify} messages.
                     * @param message MsgStrideLiquidStakingStake message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Cosmos.Proto.Message.IMsgStrideLiquidStakingStake, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MsgStrideLiquidStakingStake message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MsgStrideLiquidStakingStake
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Message.MsgStrideLiquidStakingStake;

                    /**
                     * Gets the default type url for MsgStrideLiquidStakingStake
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MsgStrideLiquidStakingRedeem. */
                interface IMsgStrideLiquidStakingRedeem {

                    /** MsgStrideLiquidStakingRedeem creator */
                    creator?: (string|null);

                    /** MsgStrideLiquidStakingRedeem amount */
                    amount?: (string|null);

                    /** MsgStrideLiquidStakingRedeem hostZone */
                    hostZone?: (string|null);

                    /** MsgStrideLiquidStakingRedeem receiver */
                    receiver?: (string|null);
                }

                /** Represents a MsgStrideLiquidStakingRedeem. */
                class MsgStrideLiquidStakingRedeem implements IMsgStrideLiquidStakingRedeem {

                    /**
                     * Constructs a new MsgStrideLiquidStakingRedeem.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Cosmos.Proto.Message.IMsgStrideLiquidStakingRedeem);

                    /** MsgStrideLiquidStakingRedeem creator. */
                    public creator: string;

                    /** MsgStrideLiquidStakingRedeem amount. */
                    public amount: string;

                    /** MsgStrideLiquidStakingRedeem hostZone. */
                    public hostZone: string;

                    /** MsgStrideLiquidStakingRedeem receiver. */
                    public receiver: string;

                    /**
                     * Creates a new MsgStrideLiquidStakingRedeem instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgStrideLiquidStakingRedeem instance
                     */
                    public static create(properties?: TW.Cosmos.Proto.Message.IMsgStrideLiquidStakingRedeem): TW.Cosmos.Proto.Message.MsgStrideLiquidStakingRedeem;

                    /**
                     * Encodes the specified MsgStrideLiquidStakingRedeem message. Does not implicitly {@link TW.Cosmos.Proto.Message.MsgStrideLiquidStakingRedeem.verify|verify} messages.
                     * @param message MsgStrideLiquidStakingRedeem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Cosmos.Proto.Message.IMsgStrideLiquidStakingRedeem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MsgStrideLiquidStakingRedeem message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MsgStrideLiquidStakingRedeem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.Message.MsgStrideLiquidStakingRedeem;

                    /**
                     * Gets the default type url for MsgStrideLiquidStakingRedeem
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** SigningMode enum. */
            enum SigningMode {
                JSON = 0,
                Protobuf = 1
            }

            /** TxHasher enum. */
            enum TxHasher {
                UseDefault = 0,
                Sha256 = 1,
                Keccak256 = 2
            }

            /** SignerPublicKeyType enum. */
            enum SignerPublicKeyType {
                Secp256k1 = 0,
                Secp256k1Extended = 1
            }

            /** Properties of a SignerInfo. */
            interface ISignerInfo {

                /** SignerInfo publicKeyType */
                publicKeyType?: (TW.Cosmos.Proto.SignerPublicKeyType|null);

                /** SignerInfo jsonType */
                jsonType?: (string|null);

                /** SignerInfo protobufType */
                protobufType?: (string|null);
            }

            /** Represents a SignerInfo. */
            class SignerInfo implements ISignerInfo {

                /**
                 * Constructs a new SignerInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Cosmos.Proto.ISignerInfo);

                /** SignerInfo publicKeyType. */
                public publicKeyType: TW.Cosmos.Proto.SignerPublicKeyType;

                /** SignerInfo jsonType. */
                public jsonType: string;

                /** SignerInfo protobufType. */
                public protobufType: string;

                /**
                 * Creates a new SignerInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SignerInfo instance
                 */
                public static create(properties?: TW.Cosmos.Proto.ISignerInfo): TW.Cosmos.Proto.SignerInfo;

                /**
                 * Encodes the specified SignerInfo message. Does not implicitly {@link TW.Cosmos.Proto.SignerInfo.verify|verify} messages.
                 * @param message SignerInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Cosmos.Proto.ISignerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SignerInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SignerInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.SignerInfo;

                /**
                 * Gets the default type url for SignerInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SigningInput. */
            interface ISigningInput {

                /** SigningInput signingMode */
                signingMode?: (TW.Cosmos.Proto.SigningMode|null);

                /** SigningInput accountNumber */
                accountNumber?: (number|null);

                /** SigningInput chainId */
                chainId?: (string|null);

                /** SigningInput fee */
                fee?: (TW.Cosmos.Proto.IFee|null);

                /** SigningInput memo */
                memo?: (string|null);

                /** SigningInput sequence */
                sequence?: (number|null);

                /** SigningInput privateKey */
                privateKey?: (Uint8Array|null);

                /** SigningInput messages */
                messages?: (TW.Cosmos.Proto.IMessage[]|null);

                /** SigningInput mode */
                mode?: (TW.Cosmos.Proto.BroadcastMode|null);

                /** SigningInput publicKey */
                publicKey?: (Uint8Array|null);

                /** SigningInput txHasher */
                txHasher?: (TW.Cosmos.Proto.TxHasher|null);

                /** SigningInput signerInfo */
                signerInfo?: (TW.Cosmos.Proto.ISignerInfo|null);

                /** SigningInput timeoutHeight */
                timeoutHeight?: (number|null);
            }

            /** Represents a SigningInput. */
            class SigningInput implements ISigningInput {

                /**
                 * Constructs a new SigningInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Cosmos.Proto.ISigningInput);

                /** SigningInput signingMode. */
                public signingMode: TW.Cosmos.Proto.SigningMode;

                /** SigningInput accountNumber. */
                public accountNumber: number;

                /** SigningInput chainId. */
                public chainId: string;

                /** SigningInput fee. */
                public fee?: (TW.Cosmos.Proto.IFee|null);

                /** SigningInput memo. */
                public memo: string;

                /** SigningInput sequence. */
                public sequence: number;

                /** SigningInput privateKey. */
                public privateKey: Uint8Array;

                /** SigningInput messages. */
                public messages: TW.Cosmos.Proto.IMessage[];

                /** SigningInput mode. */
                public mode: TW.Cosmos.Proto.BroadcastMode;

                /** SigningInput publicKey. */
                public publicKey: Uint8Array;

                /** SigningInput txHasher. */
                public txHasher: TW.Cosmos.Proto.TxHasher;

                /** SigningInput signerInfo. */
                public signerInfo?: (TW.Cosmos.Proto.ISignerInfo|null);

                /** SigningInput timeoutHeight. */
                public timeoutHeight: number;

                /**
                 * Creates a new SigningInput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningInput instance
                 */
                public static create(properties?: TW.Cosmos.Proto.ISigningInput): TW.Cosmos.Proto.SigningInput;

                /**
                 * Encodes the specified SigningInput message. Does not implicitly {@link TW.Cosmos.Proto.SigningInput.verify|verify} messages.
                 * @param message SigningInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Cosmos.Proto.ISigningInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.SigningInput;

                /**
                 * Gets the default type url for SigningInput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SigningOutput. */
            interface ISigningOutput {

                /** SigningOutput signature */
                signature?: (Uint8Array|null);

                /** SigningOutput json */
                json?: (string|null);

                /** SigningOutput serialized */
                serialized?: (string|null);

                /** SigningOutput signatureJson */
                signatureJson?: (string|null);

                /** SigningOutput errorMessage */
                errorMessage?: (string|null);

                /** SigningOutput error */
                error?: (TW.Common.Proto.SigningError|null);
            }

            /** Represents a SigningOutput. */
            class SigningOutput implements ISigningOutput {

                /**
                 * Constructs a new SigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Cosmos.Proto.ISigningOutput);

                /** SigningOutput signature. */
                public signature: Uint8Array;

                /** SigningOutput json. */
                public json: string;

                /** SigningOutput serialized. */
                public serialized: string;

                /** SigningOutput signatureJson. */
                public signatureJson: string;

                /** SigningOutput errorMessage. */
                public errorMessage: string;

                /** SigningOutput error. */
                public error: TW.Common.Proto.SigningError;

                /**
                 * Creates a new SigningOutput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningOutput instance
                 */
                public static create(properties?: TW.Cosmos.Proto.ISigningOutput): TW.Cosmos.Proto.SigningOutput;

                /**
                 * Encodes the specified SigningOutput message. Does not implicitly {@link TW.Cosmos.Proto.SigningOutput.verify|verify} messages.
                 * @param message SigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Cosmos.Proto.ISigningOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Cosmos.Proto.SigningOutput;

                /**
                 * Gets the default type url for SigningOutput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Namespace Ethereum. */
    namespace Ethereum {

        /** Namespace Proto. */
        namespace Proto {

            /** Properties of a Transaction. */
            interface ITransaction {

                /** Transaction transfer */
                transfer?: (TW.Ethereum.Proto.Transaction.ITransfer|null);

                /** Transaction erc20Transfer */
                erc20Transfer?: (TW.Ethereum.Proto.Transaction.IERC20Transfer|null);

                /** Transaction erc20Approve */
                erc20Approve?: (TW.Ethereum.Proto.Transaction.IERC20Approve|null);

                /** Transaction erc721Transfer */
                erc721Transfer?: (TW.Ethereum.Proto.Transaction.IERC721Transfer|null);

                /** Transaction erc1155Transfer */
                erc1155Transfer?: (TW.Ethereum.Proto.Transaction.IERC1155Transfer|null);

                /** Transaction contractGeneric */
                contractGeneric?: (TW.Ethereum.Proto.Transaction.IContractGeneric|null);

                /** Transaction scwBatch */
                scwBatch?: (TW.Ethereum.Proto.Transaction.ISCWalletBatch|null);

                /** Transaction scwExecute */
                scwExecute?: (TW.Ethereum.Proto.Transaction.ISCWalletExecute|null);
            }

            /** Represents a Transaction. */
            class Transaction implements ITransaction {

                /**
                 * Constructs a new Transaction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ethereum.Proto.ITransaction);

                /** Transaction transfer. */
                public transfer?: (TW.Ethereum.Proto.Transaction.ITransfer|null);

                /** Transaction erc20Transfer. */
                public erc20Transfer?: (TW.Ethereum.Proto.Transaction.IERC20Transfer|null);

                /** Transaction erc20Approve. */
                public erc20Approve?: (TW.Ethereum.Proto.Transaction.IERC20Approve|null);

                /** Transaction erc721Transfer. */
                public erc721Transfer?: (TW.Ethereum.Proto.Transaction.IERC721Transfer|null);

                /** Transaction erc1155Transfer. */
                public erc1155Transfer?: (TW.Ethereum.Proto.Transaction.IERC1155Transfer|null);

                /** Transaction contractGeneric. */
                public contractGeneric?: (TW.Ethereum.Proto.Transaction.IContractGeneric|null);

                /** Transaction scwBatch. */
                public scwBatch?: (TW.Ethereum.Proto.Transaction.ISCWalletBatch|null);

                /** Transaction scwExecute. */
                public scwExecute?: (TW.Ethereum.Proto.Transaction.ISCWalletExecute|null);

                /** Transaction transactionOneof. */
                public transactionOneof?: ("transfer"|"erc20Transfer"|"erc20Approve"|"erc721Transfer"|"erc1155Transfer"|"contractGeneric"|"scwBatch"|"scwExecute");

                /**
                 * Creates a new Transaction instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Transaction instance
                 */
                public static create(properties?: TW.Ethereum.Proto.ITransaction): TW.Ethereum.Proto.Transaction;

                /**
                 * Encodes the specified Transaction message. Does not implicitly {@link TW.Ethereum.Proto.Transaction.verify|verify} messages.
                 * @param message Transaction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Ethereum.Proto.ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Transaction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Transaction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.Transaction;

                /**
                 * Gets the default type url for Transaction
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Transaction {

                /** Properties of a Transfer. */
                interface ITransfer {

                    /** Transfer amount */
                    amount?: (Uint8Array|null);

                    /** Transfer data */
                    data?: (Uint8Array|null);
                }

                /** Represents a Transfer. */
                class Transfer implements ITransfer {

                    /**
                     * Constructs a new Transfer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Ethereum.Proto.Transaction.ITransfer);

                    /** Transfer amount. */
                    public amount: Uint8Array;

                    /** Transfer data. */
                    public data: Uint8Array;

                    /**
                     * Creates a new Transfer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Transfer instance
                     */
                    public static create(properties?: TW.Ethereum.Proto.Transaction.ITransfer): TW.Ethereum.Proto.Transaction.Transfer;

                    /**
                     * Encodes the specified Transfer message. Does not implicitly {@link TW.Ethereum.Proto.Transaction.Transfer.verify|verify} messages.
                     * @param message Transfer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Ethereum.Proto.Transaction.ITransfer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Transfer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Transfer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.Transaction.Transfer;

                    /**
                     * Gets the default type url for Transfer
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ERC20Transfer. */
                interface IERC20Transfer {

                    /** ERC20Transfer to */
                    to?: (string|null);

                    /** ERC20Transfer amount */
                    amount?: (Uint8Array|null);
                }

                /** Represents a ERC20Transfer. */
                class ERC20Transfer implements IERC20Transfer {

                    /**
                     * Constructs a new ERC20Transfer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Ethereum.Proto.Transaction.IERC20Transfer);

                    /** ERC20Transfer to. */
                    public to: string;

                    /** ERC20Transfer amount. */
                    public amount: Uint8Array;

                    /**
                     * Creates a new ERC20Transfer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ERC20Transfer instance
                     */
                    public static create(properties?: TW.Ethereum.Proto.Transaction.IERC20Transfer): TW.Ethereum.Proto.Transaction.ERC20Transfer;

                    /**
                     * Encodes the specified ERC20Transfer message. Does not implicitly {@link TW.Ethereum.Proto.Transaction.ERC20Transfer.verify|verify} messages.
                     * @param message ERC20Transfer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Ethereum.Proto.Transaction.IERC20Transfer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ERC20Transfer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ERC20Transfer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.Transaction.ERC20Transfer;

                    /**
                     * Gets the default type url for ERC20Transfer
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ERC20Approve. */
                interface IERC20Approve {

                    /** ERC20Approve spender */
                    spender?: (string|null);

                    /** ERC20Approve amount */
                    amount?: (Uint8Array|null);
                }

                /** Represents a ERC20Approve. */
                class ERC20Approve implements IERC20Approve {

                    /**
                     * Constructs a new ERC20Approve.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Ethereum.Proto.Transaction.IERC20Approve);

                    /** ERC20Approve spender. */
                    public spender: string;

                    /** ERC20Approve amount. */
                    public amount: Uint8Array;

                    /**
                     * Creates a new ERC20Approve instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ERC20Approve instance
                     */
                    public static create(properties?: TW.Ethereum.Proto.Transaction.IERC20Approve): TW.Ethereum.Proto.Transaction.ERC20Approve;

                    /**
                     * Encodes the specified ERC20Approve message. Does not implicitly {@link TW.Ethereum.Proto.Transaction.ERC20Approve.verify|verify} messages.
                     * @param message ERC20Approve message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Ethereum.Proto.Transaction.IERC20Approve, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ERC20Approve message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ERC20Approve
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.Transaction.ERC20Approve;

                    /**
                     * Gets the default type url for ERC20Approve
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ERC721Transfer. */
                interface IERC721Transfer {

                    /** ERC721Transfer from */
                    from?: (string|null);

                    /** ERC721Transfer to */
                    to?: (string|null);

                    /** ERC721Transfer tokenId */
                    tokenId?: (Uint8Array|null);
                }

                /** Represents a ERC721Transfer. */
                class ERC721Transfer implements IERC721Transfer {

                    /**
                     * Constructs a new ERC721Transfer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Ethereum.Proto.Transaction.IERC721Transfer);

                    /** ERC721Transfer from. */
                    public from: string;

                    /** ERC721Transfer to. */
                    public to: string;

                    /** ERC721Transfer tokenId. */
                    public tokenId: Uint8Array;

                    /**
                     * Creates a new ERC721Transfer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ERC721Transfer instance
                     */
                    public static create(properties?: TW.Ethereum.Proto.Transaction.IERC721Transfer): TW.Ethereum.Proto.Transaction.ERC721Transfer;

                    /**
                     * Encodes the specified ERC721Transfer message. Does not implicitly {@link TW.Ethereum.Proto.Transaction.ERC721Transfer.verify|verify} messages.
                     * @param message ERC721Transfer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Ethereum.Proto.Transaction.IERC721Transfer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ERC721Transfer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ERC721Transfer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.Transaction.ERC721Transfer;

                    /**
                     * Gets the default type url for ERC721Transfer
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ERC1155Transfer. */
                interface IERC1155Transfer {

                    /** ERC1155Transfer from */
                    from?: (string|null);

                    /** ERC1155Transfer to */
                    to?: (string|null);

                    /** ERC1155Transfer tokenId */
                    tokenId?: (Uint8Array|null);

                    /** ERC1155Transfer value */
                    value?: (Uint8Array|null);

                    /** ERC1155Transfer data */
                    data?: (Uint8Array|null);
                }

                /** Represents a ERC1155Transfer. */
                class ERC1155Transfer implements IERC1155Transfer {

                    /**
                     * Constructs a new ERC1155Transfer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Ethereum.Proto.Transaction.IERC1155Transfer);

                    /** ERC1155Transfer from. */
                    public from: string;

                    /** ERC1155Transfer to. */
                    public to: string;

                    /** ERC1155Transfer tokenId. */
                    public tokenId: Uint8Array;

                    /** ERC1155Transfer value. */
                    public value: Uint8Array;

                    /** ERC1155Transfer data. */
                    public data: Uint8Array;

                    /**
                     * Creates a new ERC1155Transfer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ERC1155Transfer instance
                     */
                    public static create(properties?: TW.Ethereum.Proto.Transaction.IERC1155Transfer): TW.Ethereum.Proto.Transaction.ERC1155Transfer;

                    /**
                     * Encodes the specified ERC1155Transfer message. Does not implicitly {@link TW.Ethereum.Proto.Transaction.ERC1155Transfer.verify|verify} messages.
                     * @param message ERC1155Transfer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Ethereum.Proto.Transaction.IERC1155Transfer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ERC1155Transfer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ERC1155Transfer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.Transaction.ERC1155Transfer;

                    /**
                     * Gets the default type url for ERC1155Transfer
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ContractGeneric. */
                interface IContractGeneric {

                    /** ContractGeneric amount */
                    amount?: (Uint8Array|null);

                    /** ContractGeneric data */
                    data?: (Uint8Array|null);
                }

                /** Represents a ContractGeneric. */
                class ContractGeneric implements IContractGeneric {

                    /**
                     * Constructs a new ContractGeneric.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Ethereum.Proto.Transaction.IContractGeneric);

                    /** ContractGeneric amount. */
                    public amount: Uint8Array;

                    /** ContractGeneric data. */
                    public data: Uint8Array;

                    /**
                     * Creates a new ContractGeneric instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ContractGeneric instance
                     */
                    public static create(properties?: TW.Ethereum.Proto.Transaction.IContractGeneric): TW.Ethereum.Proto.Transaction.ContractGeneric;

                    /**
                     * Encodes the specified ContractGeneric message. Does not implicitly {@link TW.Ethereum.Proto.Transaction.ContractGeneric.verify|verify} messages.
                     * @param message ContractGeneric message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Ethereum.Proto.Transaction.IContractGeneric, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ContractGeneric message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ContractGeneric
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.Transaction.ContractGeneric;

                    /**
                     * Gets the default type url for ContractGeneric
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SCWalletBatch. */
                interface ISCWalletBatch {

                    /** SCWalletBatch calls */
                    calls?: (TW.Ethereum.Proto.Transaction.SCWalletBatch.IBatchedCall[]|null);

                    /** SCWalletBatch walletType */
                    walletType?: (TW.Ethereum.Proto.SCWalletType|null);
                }

                /** Represents a SCWalletBatch. */
                class SCWalletBatch implements ISCWalletBatch {

                    /**
                     * Constructs a new SCWalletBatch.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Ethereum.Proto.Transaction.ISCWalletBatch);

                    /** SCWalletBatch calls. */
                    public calls: TW.Ethereum.Proto.Transaction.SCWalletBatch.IBatchedCall[];

                    /** SCWalletBatch walletType. */
                    public walletType: TW.Ethereum.Proto.SCWalletType;

                    /**
                     * Creates a new SCWalletBatch instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SCWalletBatch instance
                     */
                    public static create(properties?: TW.Ethereum.Proto.Transaction.ISCWalletBatch): TW.Ethereum.Proto.Transaction.SCWalletBatch;

                    /**
                     * Encodes the specified SCWalletBatch message. Does not implicitly {@link TW.Ethereum.Proto.Transaction.SCWalletBatch.verify|verify} messages.
                     * @param message SCWalletBatch message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Ethereum.Proto.Transaction.ISCWalletBatch, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SCWalletBatch message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SCWalletBatch
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.Transaction.SCWalletBatch;

                    /**
                     * Gets the default type url for SCWalletBatch
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SCWalletBatch {

                    /** Properties of a BatchedCall. */
                    interface IBatchedCall {

                        /** BatchedCall address */
                        address?: (string|null);

                        /** BatchedCall amount */
                        amount?: (Uint8Array|null);

                        /** BatchedCall payload */
                        payload?: (Uint8Array|null);
                    }

                    /** Represents a BatchedCall. */
                    class BatchedCall implements IBatchedCall {

                        /**
                         * Constructs a new BatchedCall.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: TW.Ethereum.Proto.Transaction.SCWalletBatch.IBatchedCall);

                        /** BatchedCall address. */
                        public address: string;

                        /** BatchedCall amount. */
                        public amount: Uint8Array;

                        /** BatchedCall payload. */
                        public payload: Uint8Array;

                        /**
                         * Creates a new BatchedCall instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BatchedCall instance
                         */
                        public static create(properties?: TW.Ethereum.Proto.Transaction.SCWalletBatch.IBatchedCall): TW.Ethereum.Proto.Transaction.SCWalletBatch.BatchedCall;

                        /**
                         * Encodes the specified BatchedCall message. Does not implicitly {@link TW.Ethereum.Proto.Transaction.SCWalletBatch.BatchedCall.verify|verify} messages.
                         * @param message BatchedCall message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: TW.Ethereum.Proto.Transaction.SCWalletBatch.IBatchedCall, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BatchedCall message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BatchedCall
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.Transaction.SCWalletBatch.BatchedCall;

                        /**
                         * Gets the default type url for BatchedCall
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a SCWalletExecute. */
                interface ISCWalletExecute {

                    /** SCWalletExecute transaction */
                    transaction?: (TW.Ethereum.Proto.ITransaction|null);

                    /** SCWalletExecute walletType */
                    walletType?: (TW.Ethereum.Proto.SCWalletType|null);
                }

                /** Represents a SCWalletExecute. */
                class SCWalletExecute implements ISCWalletExecute {

                    /**
                     * Constructs a new SCWalletExecute.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Ethereum.Proto.Transaction.ISCWalletExecute);

                    /** SCWalletExecute transaction. */
                    public transaction?: (TW.Ethereum.Proto.ITransaction|null);

                    /** SCWalletExecute walletType. */
                    public walletType: TW.Ethereum.Proto.SCWalletType;

                    /**
                     * Creates a new SCWalletExecute instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SCWalletExecute instance
                     */
                    public static create(properties?: TW.Ethereum.Proto.Transaction.ISCWalletExecute): TW.Ethereum.Proto.Transaction.SCWalletExecute;

                    /**
                     * Encodes the specified SCWalletExecute message. Does not implicitly {@link TW.Ethereum.Proto.Transaction.SCWalletExecute.verify|verify} messages.
                     * @param message SCWalletExecute message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Ethereum.Proto.Transaction.ISCWalletExecute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SCWalletExecute message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SCWalletExecute
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.Transaction.SCWalletExecute;

                    /**
                     * Gets the default type url for SCWalletExecute
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** TransactionMode enum. */
            enum TransactionMode {
                Legacy = 0,
                Enveloped = 1,
                UserOp = 2,
                SetCode = 4
            }

            /** Properties of a UserOperation. */
            interface IUserOperation {

                /** UserOperation entryPoint */
                entryPoint?: (string|null);

                /** UserOperation initCode */
                initCode?: (Uint8Array|null);

                /** UserOperation sender */
                sender?: (string|null);

                /** UserOperation preVerificationGas */
                preVerificationGas?: (Uint8Array|null);

                /** UserOperation verificationGasLimit */
                verificationGasLimit?: (Uint8Array|null);

                /** UserOperation paymasterAndData */
                paymasterAndData?: (Uint8Array|null);
            }

            /** Represents a UserOperation. */
            class UserOperation implements IUserOperation {

                /**
                 * Constructs a new UserOperation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ethereum.Proto.IUserOperation);

                /** UserOperation entryPoint. */
                public entryPoint: string;

                /** UserOperation initCode. */
                public initCode: Uint8Array;

                /** UserOperation sender. */
                public sender: string;

                /** UserOperation preVerificationGas. */
                public preVerificationGas: Uint8Array;

                /** UserOperation verificationGasLimit. */
                public verificationGasLimit: Uint8Array;

                /** UserOperation paymasterAndData. */
                public paymasterAndData: Uint8Array;

                /**
                 * Creates a new UserOperation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UserOperation instance
                 */
                public static create(properties?: TW.Ethereum.Proto.IUserOperation): TW.Ethereum.Proto.UserOperation;

                /**
                 * Encodes the specified UserOperation message. Does not implicitly {@link TW.Ethereum.Proto.UserOperation.verify|verify} messages.
                 * @param message UserOperation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Ethereum.Proto.IUserOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UserOperation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UserOperation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.UserOperation;

                /**
                 * Gets the default type url for UserOperation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a UserOperationV0_7. */
            interface IUserOperationV0_7 {

                /** UserOperationV0_7 entryPoint */
                entryPoint?: (string|null);

                /** UserOperationV0_7 factory */
                factory?: (string|null);

                /** UserOperationV0_7 factoryData */
                factoryData?: (Uint8Array|null);

                /** UserOperationV0_7 sender */
                sender?: (string|null);

                /** UserOperationV0_7 preVerificationGas */
                preVerificationGas?: (Uint8Array|null);

                /** UserOperationV0_7 verificationGasLimit */
                verificationGasLimit?: (Uint8Array|null);

                /** UserOperationV0_7 paymaster */
                paymaster?: (string|null);

                /** UserOperationV0_7 paymasterVerificationGasLimit */
                paymasterVerificationGasLimit?: (Uint8Array|null);

                /** UserOperationV0_7 paymasterPostOpGasLimit */
                paymasterPostOpGasLimit?: (Uint8Array|null);

                /** UserOperationV0_7 paymasterData */
                paymasterData?: (Uint8Array|null);
            }

            /** Represents a UserOperationV0_7. */
            class UserOperationV0_7 implements IUserOperationV0_7 {

                /**
                 * Constructs a new UserOperationV0_7.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ethereum.Proto.IUserOperationV0_7);

                /** UserOperationV0_7 entryPoint. */
                public entryPoint: string;

                /** UserOperationV0_7 factory. */
                public factory: string;

                /** UserOperationV0_7 factoryData. */
                public factoryData: Uint8Array;

                /** UserOperationV0_7 sender. */
                public sender: string;

                /** UserOperationV0_7 preVerificationGas. */
                public preVerificationGas: Uint8Array;

                /** UserOperationV0_7 verificationGasLimit. */
                public verificationGasLimit: Uint8Array;

                /** UserOperationV0_7 paymaster. */
                public paymaster: string;

                /** UserOperationV0_7 paymasterVerificationGasLimit. */
                public paymasterVerificationGasLimit: Uint8Array;

                /** UserOperationV0_7 paymasterPostOpGasLimit. */
                public paymasterPostOpGasLimit: Uint8Array;

                /** UserOperationV0_7 paymasterData. */
                public paymasterData: Uint8Array;

                /**
                 * Creates a new UserOperationV0_7 instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UserOperationV0_7 instance
                 */
                public static create(properties?: TW.Ethereum.Proto.IUserOperationV0_7): TW.Ethereum.Proto.UserOperationV0_7;

                /**
                 * Encodes the specified UserOperationV0_7 message. Does not implicitly {@link TW.Ethereum.Proto.UserOperationV0_7.verify|verify} messages.
                 * @param message UserOperationV0_7 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Ethereum.Proto.IUserOperationV0_7, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UserOperationV0_7 message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UserOperationV0_7
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.UserOperationV0_7;

                /**
                 * Gets the default type url for UserOperationV0_7
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an Access. */
            interface IAccess {

                /** Access address */
                address?: (string|null);

                /** Access storedKeys */
                storedKeys?: (Uint8Array[]|null);
            }

            /** Represents an Access. */
            class Access implements IAccess {

                /**
                 * Constructs a new Access.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ethereum.Proto.IAccess);

                /** Access address. */
                public address: string;

                /** Access storedKeys. */
                public storedKeys: Uint8Array[];

                /**
                 * Creates a new Access instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Access instance
                 */
                public static create(properties?: TW.Ethereum.Proto.IAccess): TW.Ethereum.Proto.Access;

                /**
                 * Encodes the specified Access message. Does not implicitly {@link TW.Ethereum.Proto.Access.verify|verify} messages.
                 * @param message Access message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Ethereum.Proto.IAccess, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Access message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Access
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.Access;

                /**
                 * Gets the default type url for Access
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an Authorization. */
            interface IAuthorization {

                /** Authorization address */
                address?: (string|null);

                /** Authorization customSignature */
                customSignature?: (TW.Ethereum.Proto.IAuthorizationCustomSignature|null);
            }

            /** Represents an Authorization. */
            class Authorization implements IAuthorization {

                /**
                 * Constructs a new Authorization.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ethereum.Proto.IAuthorization);

                /** Authorization address. */
                public address: string;

                /** Authorization customSignature. */
                public customSignature?: (TW.Ethereum.Proto.IAuthorizationCustomSignature|null);

                /**
                 * Creates a new Authorization instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Authorization instance
                 */
                public static create(properties?: TW.Ethereum.Proto.IAuthorization): TW.Ethereum.Proto.Authorization;

                /**
                 * Encodes the specified Authorization message. Does not implicitly {@link TW.Ethereum.Proto.Authorization.verify|verify} messages.
                 * @param message Authorization message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Ethereum.Proto.IAuthorization, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Authorization message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Authorization
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.Authorization;

                /**
                 * Gets the default type url for Authorization
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AuthorizationCustomSignature. */
            interface IAuthorizationCustomSignature {

                /** AuthorizationCustomSignature chainId */
                chainId?: (Uint8Array|null);

                /** AuthorizationCustomSignature nonce */
                nonce?: (Uint8Array|null);

                /** AuthorizationCustomSignature signature */
                signature?: (string|null);
            }

            /** Represents an AuthorizationCustomSignature. */
            class AuthorizationCustomSignature implements IAuthorizationCustomSignature {

                /**
                 * Constructs a new AuthorizationCustomSignature.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ethereum.Proto.IAuthorizationCustomSignature);

                /** AuthorizationCustomSignature chainId. */
                public chainId: Uint8Array;

                /** AuthorizationCustomSignature nonce. */
                public nonce: Uint8Array;

                /** AuthorizationCustomSignature signature. */
                public signature: string;

                /**
                 * Creates a new AuthorizationCustomSignature instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuthorizationCustomSignature instance
                 */
                public static create(properties?: TW.Ethereum.Proto.IAuthorizationCustomSignature): TW.Ethereum.Proto.AuthorizationCustomSignature;

                /**
                 * Encodes the specified AuthorizationCustomSignature message. Does not implicitly {@link TW.Ethereum.Proto.AuthorizationCustomSignature.verify|verify} messages.
                 * @param message AuthorizationCustomSignature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Ethereum.Proto.IAuthorizationCustomSignature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuthorizationCustomSignature message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuthorizationCustomSignature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.AuthorizationCustomSignature;

                /**
                 * Gets the default type url for AuthorizationCustomSignature
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** SCWalletType enum. */
            enum SCWalletType {
                SimpleAccount = 0,
                Biz4337 = 1,
                Biz = 2
            }

            /** Properties of a SigningInput. */
            interface ISigningInput {

                /** SigningInput chainId */
                chainId?: (Uint8Array|null);

                /** SigningInput nonce */
                nonce?: (Uint8Array|null);

                /** SigningInput txMode */
                txMode?: (TW.Ethereum.Proto.TransactionMode|null);

                /** SigningInput gasPrice */
                gasPrice?: (Uint8Array|null);

                /** SigningInput gasLimit */
                gasLimit?: (Uint8Array|null);

                /** SigningInput maxInclusionFeePerGas */
                maxInclusionFeePerGas?: (Uint8Array|null);

                /** SigningInput maxFeePerGas */
                maxFeePerGas?: (Uint8Array|null);

                /** SigningInput toAddress */
                toAddress?: (string|null);

                /** SigningInput privateKey */
                privateKey?: (Uint8Array|null);

                /** SigningInput transaction */
                transaction?: (TW.Ethereum.Proto.ITransaction|null);

                /** SigningInput userOperation */
                userOperation?: (TW.Ethereum.Proto.IUserOperation|null);

                /** SigningInput userOperationV0_7 */
                userOperationV0_7?: (TW.Ethereum.Proto.IUserOperationV0_7|null);

                /** SigningInput accessList */
                accessList?: (TW.Ethereum.Proto.IAccess[]|null);

                /** SigningInput eip7702Authorization */
                eip7702Authorization?: (TW.Ethereum.Proto.IAuthorization|null);
            }

            /** Represents a SigningInput. */
            class SigningInput implements ISigningInput {

                /**
                 * Constructs a new SigningInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ethereum.Proto.ISigningInput);

                /** SigningInput chainId. */
                public chainId: Uint8Array;

                /** SigningInput nonce. */
                public nonce: Uint8Array;

                /** SigningInput txMode. */
                public txMode: TW.Ethereum.Proto.TransactionMode;

                /** SigningInput gasPrice. */
                public gasPrice: Uint8Array;

                /** SigningInput gasLimit. */
                public gasLimit: Uint8Array;

                /** SigningInput maxInclusionFeePerGas. */
                public maxInclusionFeePerGas: Uint8Array;

                /** SigningInput maxFeePerGas. */
                public maxFeePerGas: Uint8Array;

                /** SigningInput toAddress. */
                public toAddress: string;

                /** SigningInput privateKey. */
                public privateKey: Uint8Array;

                /** SigningInput transaction. */
                public transaction?: (TW.Ethereum.Proto.ITransaction|null);

                /** SigningInput userOperation. */
                public userOperation?: (TW.Ethereum.Proto.IUserOperation|null);

                /** SigningInput userOperationV0_7. */
                public userOperationV0_7?: (TW.Ethereum.Proto.IUserOperationV0_7|null);

                /** SigningInput accessList. */
                public accessList: TW.Ethereum.Proto.IAccess[];

                /** SigningInput eip7702Authorization. */
                public eip7702Authorization?: (TW.Ethereum.Proto.IAuthorization|null);

                /** SigningInput userOperationOneof. */
                public userOperationOneof?: ("userOperation"|"userOperationV0_7");

                /**
                 * Creates a new SigningInput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningInput instance
                 */
                public static create(properties?: TW.Ethereum.Proto.ISigningInput): TW.Ethereum.Proto.SigningInput;

                /**
                 * Encodes the specified SigningInput message. Does not implicitly {@link TW.Ethereum.Proto.SigningInput.verify|verify} messages.
                 * @param message SigningInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Ethereum.Proto.ISigningInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.SigningInput;

                /**
                 * Gets the default type url for SigningInput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SigningOutput. */
            interface ISigningOutput {

                /** SigningOutput encoded */
                encoded?: (Uint8Array|null);

                /** SigningOutput v */
                v?: (Uint8Array|null);

                /** SigningOutput r */
                r?: (Uint8Array|null);

                /** SigningOutput s */
                s?: (Uint8Array|null);

                /** SigningOutput data */
                data?: (Uint8Array|null);

                /** SigningOutput error */
                error?: (TW.Common.Proto.SigningError|null);

                /** SigningOutput errorMessage */
                errorMessage?: (string|null);

                /** SigningOutput preHash */
                preHash?: (Uint8Array|null);
            }

            /** Represents a SigningOutput. */
            class SigningOutput implements ISigningOutput {

                /**
                 * Constructs a new SigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ethereum.Proto.ISigningOutput);

                /** SigningOutput encoded. */
                public encoded: Uint8Array;

                /** SigningOutput v. */
                public v: Uint8Array;

                /** SigningOutput r. */
                public r: Uint8Array;

                /** SigningOutput s. */
                public s: Uint8Array;

                /** SigningOutput data. */
                public data: Uint8Array;

                /** SigningOutput error. */
                public error: TW.Common.Proto.SigningError;

                /** SigningOutput errorMessage. */
                public errorMessage: string;

                /** SigningOutput preHash. */
                public preHash: Uint8Array;

                /**
                 * Creates a new SigningOutput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningOutput instance
                 */
                public static create(properties?: TW.Ethereum.Proto.ISigningOutput): TW.Ethereum.Proto.SigningOutput;

                /**
                 * Encodes the specified SigningOutput message. Does not implicitly {@link TW.Ethereum.Proto.SigningOutput.verify|verify} messages.
                 * @param message SigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Ethereum.Proto.ISigningOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.SigningOutput;

                /**
                 * Gets the default type url for SigningOutput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** MessageType enum. */
            enum MessageType {
                MessageType_legacy = 0,
                MessageType_eip155 = 1,
                MessageType_typed = 2,
                MessageType_typed_eip155 = 3,
                MessageType_immutable_x = 4,
                MessageType_eip7702_authorization = 5
            }

            /** Properties of a MaybeChainId. */
            interface IMaybeChainId {

                /** MaybeChainId chainId */
                chainId?: (number|null);
            }

            /** Represents a MaybeChainId. */
            class MaybeChainId implements IMaybeChainId {

                /**
                 * Constructs a new MaybeChainId.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ethereum.Proto.IMaybeChainId);

                /** MaybeChainId chainId. */
                public chainId: number;

                /**
                 * Creates a new MaybeChainId instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MaybeChainId instance
                 */
                public static create(properties?: TW.Ethereum.Proto.IMaybeChainId): TW.Ethereum.Proto.MaybeChainId;

                /**
                 * Encodes the specified MaybeChainId message. Does not implicitly {@link TW.Ethereum.Proto.MaybeChainId.verify|verify} messages.
                 * @param message MaybeChainId message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Ethereum.Proto.IMaybeChainId, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MaybeChainId message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MaybeChainId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.MaybeChainId;

                /**
                 * Gets the default type url for MaybeChainId
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageSigningInput. */
            interface IMessageSigningInput {

                /** MessageSigningInput privateKey */
                privateKey?: (Uint8Array|null);

                /** MessageSigningInput message */
                message?: (string|null);

                /** MessageSigningInput chainId */
                chainId?: (TW.Ethereum.Proto.IMaybeChainId|null);

                /** MessageSigningInput messageType */
                messageType?: (TW.Ethereum.Proto.MessageType|null);
            }

            /** Represents a MessageSigningInput. */
            class MessageSigningInput implements IMessageSigningInput {

                /**
                 * Constructs a new MessageSigningInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ethereum.Proto.IMessageSigningInput);

                /** MessageSigningInput privateKey. */
                public privateKey: Uint8Array;

                /** MessageSigningInput message. */
                public message: string;

                /** MessageSigningInput chainId. */
                public chainId?: (TW.Ethereum.Proto.IMaybeChainId|null);

                /** MessageSigningInput messageType. */
                public messageType: TW.Ethereum.Proto.MessageType;

                /**
                 * Creates a new MessageSigningInput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageSigningInput instance
                 */
                public static create(properties?: TW.Ethereum.Proto.IMessageSigningInput): TW.Ethereum.Proto.MessageSigningInput;

                /**
                 * Encodes the specified MessageSigningInput message. Does not implicitly {@link TW.Ethereum.Proto.MessageSigningInput.verify|verify} messages.
                 * @param message MessageSigningInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Ethereum.Proto.IMessageSigningInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageSigningInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageSigningInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.MessageSigningInput;

                /**
                 * Gets the default type url for MessageSigningInput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageSigningOutput. */
            interface IMessageSigningOutput {

                /** MessageSigningOutput signature */
                signature?: (string|null);

                /** MessageSigningOutput error */
                error?: (TW.Common.Proto.SigningError|null);

                /** MessageSigningOutput errorMessage */
                errorMessage?: (string|null);
            }

            /** Represents a MessageSigningOutput. */
            class MessageSigningOutput implements IMessageSigningOutput {

                /**
                 * Constructs a new MessageSigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ethereum.Proto.IMessageSigningOutput);

                /** MessageSigningOutput signature. */
                public signature: string;

                /** MessageSigningOutput error. */
                public error: TW.Common.Proto.SigningError;

                /** MessageSigningOutput errorMessage. */
                public errorMessage: string;

                /**
                 * Creates a new MessageSigningOutput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageSigningOutput instance
                 */
                public static create(properties?: TW.Ethereum.Proto.IMessageSigningOutput): TW.Ethereum.Proto.MessageSigningOutput;

                /**
                 * Encodes the specified MessageSigningOutput message. Does not implicitly {@link TW.Ethereum.Proto.MessageSigningOutput.verify|verify} messages.
                 * @param message MessageSigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Ethereum.Proto.IMessageSigningOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageSigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageSigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.MessageSigningOutput;

                /**
                 * Gets the default type url for MessageSigningOutput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageVerifyingInput. */
            interface IMessageVerifyingInput {

                /** MessageVerifyingInput message */
                message?: (string|null);

                /** MessageVerifyingInput publicKey */
                publicKey?: (Uint8Array|null);

                /** MessageVerifyingInput signature */
                signature?: (string|null);
            }

            /** Represents a MessageVerifyingInput. */
            class MessageVerifyingInput implements IMessageVerifyingInput {

                /**
                 * Constructs a new MessageVerifyingInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ethereum.Proto.IMessageVerifyingInput);

                /** MessageVerifyingInput message. */
                public message: string;

                /** MessageVerifyingInput publicKey. */
                public publicKey: Uint8Array;

                /** MessageVerifyingInput signature. */
                public signature: string;

                /**
                 * Creates a new MessageVerifyingInput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageVerifyingInput instance
                 */
                public static create(properties?: TW.Ethereum.Proto.IMessageVerifyingInput): TW.Ethereum.Proto.MessageVerifyingInput;

                /**
                 * Encodes the specified MessageVerifyingInput message. Does not implicitly {@link TW.Ethereum.Proto.MessageVerifyingInput.verify|verify} messages.
                 * @param message MessageVerifyingInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Ethereum.Proto.IMessageVerifyingInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageVerifyingInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageVerifyingInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.MessageVerifyingInput;

                /**
                 * Gets the default type url for MessageVerifyingInput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Namespace NEAR. */
    namespace NEAR {

        /** Namespace Proto. */
        namespace Proto {

            /** Properties of a PublicKey. */
            interface IPublicKey {

                /** PublicKey keyType */
                keyType?: (number|null);

                /** PublicKey data */
                data?: (Uint8Array|null);
            }

            /** Represents a PublicKey. */
            class PublicKey implements IPublicKey {

                /**
                 * Constructs a new PublicKey.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.NEAR.Proto.IPublicKey);

                /** PublicKey keyType. */
                public keyType: number;

                /** PublicKey data. */
                public data: Uint8Array;

                /**
                 * Creates a new PublicKey instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PublicKey instance
                 */
                public static create(properties?: TW.NEAR.Proto.IPublicKey): TW.NEAR.Proto.PublicKey;

                /**
                 * Encodes the specified PublicKey message. Does not implicitly {@link TW.NEAR.Proto.PublicKey.verify|verify} messages.
                 * @param message PublicKey message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.NEAR.Proto.IPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PublicKey message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PublicKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.NEAR.Proto.PublicKey;

                /**
                 * Gets the default type url for PublicKey
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a FunctionCallPermission. */
            interface IFunctionCallPermission {

                /** FunctionCallPermission allowance */
                allowance?: (Uint8Array|null);

                /** FunctionCallPermission receiverId */
                receiverId?: (string|null);

                /** FunctionCallPermission methodNames */
                methodNames?: (string[]|null);
            }

            /** Represents a FunctionCallPermission. */
            class FunctionCallPermission implements IFunctionCallPermission {

                /**
                 * Constructs a new FunctionCallPermission.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.NEAR.Proto.IFunctionCallPermission);

                /** FunctionCallPermission allowance. */
                public allowance: Uint8Array;

                /** FunctionCallPermission receiverId. */
                public receiverId: string;

                /** FunctionCallPermission methodNames. */
                public methodNames: string[];

                /**
                 * Creates a new FunctionCallPermission instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FunctionCallPermission instance
                 */
                public static create(properties?: TW.NEAR.Proto.IFunctionCallPermission): TW.NEAR.Proto.FunctionCallPermission;

                /**
                 * Encodes the specified FunctionCallPermission message. Does not implicitly {@link TW.NEAR.Proto.FunctionCallPermission.verify|verify} messages.
                 * @param message FunctionCallPermission message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.NEAR.Proto.IFunctionCallPermission, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FunctionCallPermission message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FunctionCallPermission
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.NEAR.Proto.FunctionCallPermission;

                /**
                 * Gets the default type url for FunctionCallPermission
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a FullAccessPermission. */
            interface IFullAccessPermission {
            }

            /** Represents a FullAccessPermission. */
            class FullAccessPermission implements IFullAccessPermission {

                /**
                 * Constructs a new FullAccessPermission.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.NEAR.Proto.IFullAccessPermission);

                /**
                 * Creates a new FullAccessPermission instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FullAccessPermission instance
                 */
                public static create(properties?: TW.NEAR.Proto.IFullAccessPermission): TW.NEAR.Proto.FullAccessPermission;

                /**
                 * Encodes the specified FullAccessPermission message. Does not implicitly {@link TW.NEAR.Proto.FullAccessPermission.verify|verify} messages.
                 * @param message FullAccessPermission message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.NEAR.Proto.IFullAccessPermission, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FullAccessPermission message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FullAccessPermission
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.NEAR.Proto.FullAccessPermission;

                /**
                 * Gets the default type url for FullAccessPermission
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AccessKey. */
            interface IAccessKey {

                /** AccessKey nonce */
                nonce?: (number|null);

                /** AccessKey functionCall */
                functionCall?: (TW.NEAR.Proto.IFunctionCallPermission|null);

                /** AccessKey fullAccess */
                fullAccess?: (TW.NEAR.Proto.IFullAccessPermission|null);
            }

            /** Represents an AccessKey. */
            class AccessKey implements IAccessKey {

                /**
                 * Constructs a new AccessKey.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.NEAR.Proto.IAccessKey);

                /** AccessKey nonce. */
                public nonce: number;

                /** AccessKey functionCall. */
                public functionCall?: (TW.NEAR.Proto.IFunctionCallPermission|null);

                /** AccessKey fullAccess. */
                public fullAccess?: (TW.NEAR.Proto.IFullAccessPermission|null);

                /** AccessKey permission. */
                public permission?: ("functionCall"|"fullAccess");

                /**
                 * Creates a new AccessKey instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AccessKey instance
                 */
                public static create(properties?: TW.NEAR.Proto.IAccessKey): TW.NEAR.Proto.AccessKey;

                /**
                 * Encodes the specified AccessKey message. Does not implicitly {@link TW.NEAR.Proto.AccessKey.verify|verify} messages.
                 * @param message AccessKey message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.NEAR.Proto.IAccessKey, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AccessKey message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AccessKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.NEAR.Proto.AccessKey;

                /**
                 * Gets the default type url for AccessKey
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateAccount. */
            interface ICreateAccount {
            }

            /** Represents a CreateAccount. */
            class CreateAccount implements ICreateAccount {

                /**
                 * Constructs a new CreateAccount.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.NEAR.Proto.ICreateAccount);

                /**
                 * Creates a new CreateAccount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateAccount instance
                 */
                public static create(properties?: TW.NEAR.Proto.ICreateAccount): TW.NEAR.Proto.CreateAccount;

                /**
                 * Encodes the specified CreateAccount message. Does not implicitly {@link TW.NEAR.Proto.CreateAccount.verify|verify} messages.
                 * @param message CreateAccount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.NEAR.Proto.ICreateAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateAccount message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateAccount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.NEAR.Proto.CreateAccount;

                /**
                 * Gets the default type url for CreateAccount
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeployContract. */
            interface IDeployContract {

                /** DeployContract code */
                code?: (Uint8Array|null);
            }

            /** Represents a DeployContract. */
            class DeployContract implements IDeployContract {

                /**
                 * Constructs a new DeployContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.NEAR.Proto.IDeployContract);

                /** DeployContract code. */
                public code: Uint8Array;

                /**
                 * Creates a new DeployContract instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeployContract instance
                 */
                public static create(properties?: TW.NEAR.Proto.IDeployContract): TW.NEAR.Proto.DeployContract;

                /**
                 * Encodes the specified DeployContract message. Does not implicitly {@link TW.NEAR.Proto.DeployContract.verify|verify} messages.
                 * @param message DeployContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.NEAR.Proto.IDeployContract, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeployContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeployContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.NEAR.Proto.DeployContract;

                /**
                 * Gets the default type url for DeployContract
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a FunctionCall. */
            interface IFunctionCall {

                /** FunctionCall methodName */
                methodName?: (string|null);

                /** FunctionCall args */
                args?: (Uint8Array|null);

                /** FunctionCall gas */
                gas?: (number|null);

                /** FunctionCall deposit */
                deposit?: (Uint8Array|null);
            }

            /** Represents a FunctionCall. */
            class FunctionCall implements IFunctionCall {

                /**
                 * Constructs a new FunctionCall.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.NEAR.Proto.IFunctionCall);

                /** FunctionCall methodName. */
                public methodName: string;

                /** FunctionCall args. */
                public args: Uint8Array;

                /** FunctionCall gas. */
                public gas: number;

                /** FunctionCall deposit. */
                public deposit: Uint8Array;

                /**
                 * Creates a new FunctionCall instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FunctionCall instance
                 */
                public static create(properties?: TW.NEAR.Proto.IFunctionCall): TW.NEAR.Proto.FunctionCall;

                /**
                 * Encodes the specified FunctionCall message. Does not implicitly {@link TW.NEAR.Proto.FunctionCall.verify|verify} messages.
                 * @param message FunctionCall message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.NEAR.Proto.IFunctionCall, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FunctionCall message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FunctionCall
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.NEAR.Proto.FunctionCall;

                /**
                 * Gets the default type url for FunctionCall
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Transfer. */
            interface ITransfer {

                /** Transfer deposit */
                deposit?: (Uint8Array|null);
            }

            /** Represents a Transfer. */
            class Transfer implements ITransfer {

                /**
                 * Constructs a new Transfer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.NEAR.Proto.ITransfer);

                /** Transfer deposit. */
                public deposit: Uint8Array;

                /**
                 * Creates a new Transfer instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Transfer instance
                 */
                public static create(properties?: TW.NEAR.Proto.ITransfer): TW.NEAR.Proto.Transfer;

                /**
                 * Encodes the specified Transfer message. Does not implicitly {@link TW.NEAR.Proto.Transfer.verify|verify} messages.
                 * @param message Transfer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.NEAR.Proto.ITransfer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Transfer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Transfer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.NEAR.Proto.Transfer;

                /**
                 * Gets the default type url for Transfer
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Stake. */
            interface IStake {

                /** Stake stake */
                stake?: (Uint8Array|null);

                /** Stake publicKey */
                publicKey?: (TW.NEAR.Proto.IPublicKey|null);
            }

            /** Represents a Stake. */
            class Stake implements IStake {

                /**
                 * Constructs a new Stake.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.NEAR.Proto.IStake);

                /** Stake stake. */
                public stake: Uint8Array;

                /** Stake publicKey. */
                public publicKey?: (TW.NEAR.Proto.IPublicKey|null);

                /**
                 * Creates a new Stake instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Stake instance
                 */
                public static create(properties?: TW.NEAR.Proto.IStake): TW.NEAR.Proto.Stake;

                /**
                 * Encodes the specified Stake message. Does not implicitly {@link TW.NEAR.Proto.Stake.verify|verify} messages.
                 * @param message Stake message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.NEAR.Proto.IStake, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Stake message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Stake
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.NEAR.Proto.Stake;

                /**
                 * Gets the default type url for Stake
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AddKey. */
            interface IAddKey {

                /** AddKey publicKey */
                publicKey?: (TW.NEAR.Proto.IPublicKey|null);

                /** AddKey accessKey */
                accessKey?: (TW.NEAR.Proto.IAccessKey|null);
            }

            /** Represents an AddKey. */
            class AddKey implements IAddKey {

                /**
                 * Constructs a new AddKey.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.NEAR.Proto.IAddKey);

                /** AddKey publicKey. */
                public publicKey?: (TW.NEAR.Proto.IPublicKey|null);

                /** AddKey accessKey. */
                public accessKey?: (TW.NEAR.Proto.IAccessKey|null);

                /**
                 * Creates a new AddKey instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AddKey instance
                 */
                public static create(properties?: TW.NEAR.Proto.IAddKey): TW.NEAR.Proto.AddKey;

                /**
                 * Encodes the specified AddKey message. Does not implicitly {@link TW.NEAR.Proto.AddKey.verify|verify} messages.
                 * @param message AddKey message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.NEAR.Proto.IAddKey, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AddKey message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AddKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.NEAR.Proto.AddKey;

                /**
                 * Gets the default type url for AddKey
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteKey. */
            interface IDeleteKey {

                /** DeleteKey publicKey */
                publicKey?: (TW.NEAR.Proto.IPublicKey|null);
            }

            /** Represents a DeleteKey. */
            class DeleteKey implements IDeleteKey {

                /**
                 * Constructs a new DeleteKey.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.NEAR.Proto.IDeleteKey);

                /** DeleteKey publicKey. */
                public publicKey?: (TW.NEAR.Proto.IPublicKey|null);

                /**
                 * Creates a new DeleteKey instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteKey instance
                 */
                public static create(properties?: TW.NEAR.Proto.IDeleteKey): TW.NEAR.Proto.DeleteKey;

                /**
                 * Encodes the specified DeleteKey message. Does not implicitly {@link TW.NEAR.Proto.DeleteKey.verify|verify} messages.
                 * @param message DeleteKey message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.NEAR.Proto.IDeleteKey, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteKey message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.NEAR.Proto.DeleteKey;

                /**
                 * Gets the default type url for DeleteKey
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteAccount. */
            interface IDeleteAccount {

                /** DeleteAccount beneficiaryId */
                beneficiaryId?: (string|null);
            }

            /** Represents a DeleteAccount. */
            class DeleteAccount implements IDeleteAccount {

                /**
                 * Constructs a new DeleteAccount.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.NEAR.Proto.IDeleteAccount);

                /** DeleteAccount beneficiaryId. */
                public beneficiaryId: string;

                /**
                 * Creates a new DeleteAccount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteAccount instance
                 */
                public static create(properties?: TW.NEAR.Proto.IDeleteAccount): TW.NEAR.Proto.DeleteAccount;

                /**
                 * Encodes the specified DeleteAccount message. Does not implicitly {@link TW.NEAR.Proto.DeleteAccount.verify|verify} messages.
                 * @param message DeleteAccount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.NEAR.Proto.IDeleteAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteAccount message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteAccount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.NEAR.Proto.DeleteAccount;

                /**
                 * Gets the default type url for DeleteAccount
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TokenTransfer. */
            interface ITokenTransfer {

                /** TokenTransfer tokenAmount */
                tokenAmount?: (string|null);

                /** TokenTransfer receiverId */
                receiverId?: (string|null);

                /** TokenTransfer gas */
                gas?: (number|null);

                /** TokenTransfer deposit */
                deposit?: (Uint8Array|null);
            }

            /** Represents a TokenTransfer. */
            class TokenTransfer implements ITokenTransfer {

                /**
                 * Constructs a new TokenTransfer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.NEAR.Proto.ITokenTransfer);

                /** TokenTransfer tokenAmount. */
                public tokenAmount: string;

                /** TokenTransfer receiverId. */
                public receiverId: string;

                /** TokenTransfer gas. */
                public gas: number;

                /** TokenTransfer deposit. */
                public deposit: Uint8Array;

                /**
                 * Creates a new TokenTransfer instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TokenTransfer instance
                 */
                public static create(properties?: TW.NEAR.Proto.ITokenTransfer): TW.NEAR.Proto.TokenTransfer;

                /**
                 * Encodes the specified TokenTransfer message. Does not implicitly {@link TW.NEAR.Proto.TokenTransfer.verify|verify} messages.
                 * @param message TokenTransfer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.NEAR.Proto.ITokenTransfer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TokenTransfer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TokenTransfer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.NEAR.Proto.TokenTransfer;

                /**
                 * Gets the default type url for TokenTransfer
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an Action. */
            interface IAction {

                /** Action createAccount */
                createAccount?: (TW.NEAR.Proto.ICreateAccount|null);

                /** Action deployContract */
                deployContract?: (TW.NEAR.Proto.IDeployContract|null);

                /** Action functionCall */
                functionCall?: (TW.NEAR.Proto.IFunctionCall|null);

                /** Action transfer */
                transfer?: (TW.NEAR.Proto.ITransfer|null);

                /** Action stake */
                stake?: (TW.NEAR.Proto.IStake|null);

                /** Action addKey */
                addKey?: (TW.NEAR.Proto.IAddKey|null);

                /** Action deleteKey */
                deleteKey?: (TW.NEAR.Proto.IDeleteKey|null);

                /** Action deleteAccount */
                deleteAccount?: (TW.NEAR.Proto.IDeleteAccount|null);

                /** Action tokenTransfer */
                tokenTransfer?: (TW.NEAR.Proto.ITokenTransfer|null);
            }

            /** Represents an Action. */
            class Action implements IAction {

                /**
                 * Constructs a new Action.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.NEAR.Proto.IAction);

                /** Action createAccount. */
                public createAccount?: (TW.NEAR.Proto.ICreateAccount|null);

                /** Action deployContract. */
                public deployContract?: (TW.NEAR.Proto.IDeployContract|null);

                /** Action functionCall. */
                public functionCall?: (TW.NEAR.Proto.IFunctionCall|null);

                /** Action transfer. */
                public transfer?: (TW.NEAR.Proto.ITransfer|null);

                /** Action stake. */
                public stake?: (TW.NEAR.Proto.IStake|null);

                /** Action addKey. */
                public addKey?: (TW.NEAR.Proto.IAddKey|null);

                /** Action deleteKey. */
                public deleteKey?: (TW.NEAR.Proto.IDeleteKey|null);

                /** Action deleteAccount. */
                public deleteAccount?: (TW.NEAR.Proto.IDeleteAccount|null);

                /** Action tokenTransfer. */
                public tokenTransfer?: (TW.NEAR.Proto.ITokenTransfer|null);

                /** Action payload. */
                public payload?: ("createAccount"|"deployContract"|"functionCall"|"transfer"|"stake"|"addKey"|"deleteKey"|"deleteAccount"|"tokenTransfer");

                /**
                 * Creates a new Action instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Action instance
                 */
                public static create(properties?: TW.NEAR.Proto.IAction): TW.NEAR.Proto.Action;

                /**
                 * Encodes the specified Action message. Does not implicitly {@link TW.NEAR.Proto.Action.verify|verify} messages.
                 * @param message Action message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.NEAR.Proto.IAction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Action message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Action
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.NEAR.Proto.Action;

                /**
                 * Gets the default type url for Action
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SigningInput. */
            interface ISigningInput {

                /** SigningInput signerId */
                signerId?: (string|null);

                /** SigningInput nonce */
                nonce?: (number|null);

                /** SigningInput receiverId */
                receiverId?: (string|null);

                /** SigningInput blockHash */
                blockHash?: (Uint8Array|null);

                /** SigningInput actions */
                actions?: (TW.NEAR.Proto.IAction[]|null);

                /** SigningInput privateKey */
                privateKey?: (Uint8Array|null);

                /** SigningInput publicKey */
                publicKey?: (Uint8Array|null);
            }

            /** Represents a SigningInput. */
            class SigningInput implements ISigningInput {

                /**
                 * Constructs a new SigningInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.NEAR.Proto.ISigningInput);

                /** SigningInput signerId. */
                public signerId: string;

                /** SigningInput nonce. */
                public nonce: number;

                /** SigningInput receiverId. */
                public receiverId: string;

                /** SigningInput blockHash. */
                public blockHash: Uint8Array;

                /** SigningInput actions. */
                public actions: TW.NEAR.Proto.IAction[];

                /** SigningInput privateKey. */
                public privateKey: Uint8Array;

                /** SigningInput publicKey. */
                public publicKey: Uint8Array;

                /**
                 * Creates a new SigningInput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningInput instance
                 */
                public static create(properties?: TW.NEAR.Proto.ISigningInput): TW.NEAR.Proto.SigningInput;

                /**
                 * Encodes the specified SigningInput message. Does not implicitly {@link TW.NEAR.Proto.SigningInput.verify|verify} messages.
                 * @param message SigningInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.NEAR.Proto.ISigningInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.NEAR.Proto.SigningInput;

                /**
                 * Gets the default type url for SigningInput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SigningOutput. */
            interface ISigningOutput {

                /** SigningOutput signedTransaction */
                signedTransaction?: (Uint8Array|null);

                /** SigningOutput error */
                error?: (TW.Common.Proto.SigningError|null);

                /** SigningOutput errorMessage */
                errorMessage?: (string|null);

                /** SigningOutput hash */
                hash?: (Uint8Array|null);
            }

            /** Represents a SigningOutput. */
            class SigningOutput implements ISigningOutput {

                /**
                 * Constructs a new SigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.NEAR.Proto.ISigningOutput);

                /** SigningOutput signedTransaction. */
                public signedTransaction: Uint8Array;

                /** SigningOutput error. */
                public error: TW.Common.Proto.SigningError;

                /** SigningOutput errorMessage. */
                public errorMessage: string;

                /** SigningOutput hash. */
                public hash: Uint8Array;

                /**
                 * Creates a new SigningOutput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningOutput instance
                 */
                public static create(properties?: TW.NEAR.Proto.ISigningOutput): TW.NEAR.Proto.SigningOutput;

                /**
                 * Encodes the specified SigningOutput message. Does not implicitly {@link TW.NEAR.Proto.SigningOutput.verify|verify} messages.
                 * @param message SigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.NEAR.Proto.ISigningOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.NEAR.Proto.SigningOutput;

                /**
                 * Gets the default type url for SigningOutput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Namespace Polkadot. */
    namespace Polkadot {

        /** Namespace Proto. */
        namespace Proto {

            /** RewardDestination enum. */
            enum RewardDestination {
                STAKED = 0,
                STASH = 1,
                CONTROLLER = 2
            }

            /** Properties of an Era. */
            interface IEra {

                /** Era blockNumber */
                blockNumber?: (number|null);

                /** Era period */
                period?: (number|null);
            }

            /** Represents an Era. */
            class Era implements IEra {

                /**
                 * Constructs a new Era.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Polkadot.Proto.IEra);

                /** Era blockNumber. */
                public blockNumber: number;

                /** Era period. */
                public period: number;

                /**
                 * Creates a new Era instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Era instance
                 */
                public static create(properties?: TW.Polkadot.Proto.IEra): TW.Polkadot.Proto.Era;

                /**
                 * Encodes the specified Era message. Does not implicitly {@link TW.Polkadot.Proto.Era.verify|verify} messages.
                 * @param message Era message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Polkadot.Proto.IEra, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Era message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Era
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Polkadot.Proto.Era;

                /**
                 * Gets the default type url for Era
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CustomCallIndices. */
            interface ICustomCallIndices {

                /** CustomCallIndices moduleIndex */
                moduleIndex?: (number|null);

                /** CustomCallIndices methodIndex */
                methodIndex?: (number|null);
            }

            /** Represents a CustomCallIndices. */
            class CustomCallIndices implements ICustomCallIndices {

                /**
                 * Constructs a new CustomCallIndices.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Polkadot.Proto.ICustomCallIndices);

                /** CustomCallIndices moduleIndex. */
                public moduleIndex: number;

                /** CustomCallIndices methodIndex. */
                public methodIndex: number;

                /**
                 * Creates a new CustomCallIndices instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CustomCallIndices instance
                 */
                public static create(properties?: TW.Polkadot.Proto.ICustomCallIndices): TW.Polkadot.Proto.CustomCallIndices;

                /**
                 * Encodes the specified CustomCallIndices message. Does not implicitly {@link TW.Polkadot.Proto.CustomCallIndices.verify|verify} messages.
                 * @param message CustomCallIndices message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Polkadot.Proto.ICustomCallIndices, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CustomCallIndices message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CustomCallIndices
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Polkadot.Proto.CustomCallIndices;

                /**
                 * Gets the default type url for CustomCallIndices
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CallIndices. */
            interface ICallIndices {

                /** CallIndices custom */
                custom?: (TW.Polkadot.Proto.ICustomCallIndices|null);
            }

            /** Represents a CallIndices. */
            class CallIndices implements ICallIndices {

                /**
                 * Constructs a new CallIndices.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Polkadot.Proto.ICallIndices);

                /** CallIndices custom. */
                public custom?: (TW.Polkadot.Proto.ICustomCallIndices|null);

                /** CallIndices variant. */
                public variant?: "custom";

                /**
                 * Creates a new CallIndices instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CallIndices instance
                 */
                public static create(properties?: TW.Polkadot.Proto.ICallIndices): TW.Polkadot.Proto.CallIndices;

                /**
                 * Encodes the specified CallIndices message. Does not implicitly {@link TW.Polkadot.Proto.CallIndices.verify|verify} messages.
                 * @param message CallIndices message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Polkadot.Proto.ICallIndices, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CallIndices message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CallIndices
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Polkadot.Proto.CallIndices;

                /**
                 * Gets the default type url for CallIndices
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Balance. */
            interface IBalance {

                /** Balance transfer */
                transfer?: (TW.Polkadot.Proto.Balance.ITransfer|null);

                /** Balance batchTransfer */
                batchTransfer?: (TW.Polkadot.Proto.Balance.IBatchTransfer|null);

                /** Balance assetTransfer */
                assetTransfer?: (TW.Polkadot.Proto.Balance.IAssetTransfer|null);

                /** Balance batchAssetTransfer */
                batchAssetTransfer?: (TW.Polkadot.Proto.Balance.IBatchAssetTransfer|null);
            }

            /** Represents a Balance. */
            class Balance implements IBalance {

                /**
                 * Constructs a new Balance.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Polkadot.Proto.IBalance);

                /** Balance transfer. */
                public transfer?: (TW.Polkadot.Proto.Balance.ITransfer|null);

                /** Balance batchTransfer. */
                public batchTransfer?: (TW.Polkadot.Proto.Balance.IBatchTransfer|null);

                /** Balance assetTransfer. */
                public assetTransfer?: (TW.Polkadot.Proto.Balance.IAssetTransfer|null);

                /** Balance batchAssetTransfer. */
                public batchAssetTransfer?: (TW.Polkadot.Proto.Balance.IBatchAssetTransfer|null);

                /** Balance messageOneof. */
                public messageOneof?: ("transfer"|"batchTransfer"|"assetTransfer"|"batchAssetTransfer");

                /**
                 * Creates a new Balance instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Balance instance
                 */
                public static create(properties?: TW.Polkadot.Proto.IBalance): TW.Polkadot.Proto.Balance;

                /**
                 * Encodes the specified Balance message. Does not implicitly {@link TW.Polkadot.Proto.Balance.verify|verify} messages.
                 * @param message Balance message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Polkadot.Proto.IBalance, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Balance message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Balance
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Polkadot.Proto.Balance;

                /**
                 * Gets the default type url for Balance
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Balance {

                /** Properties of a Transfer. */
                interface ITransfer {

                    /** Transfer toAddress */
                    toAddress?: (string|null);

                    /** Transfer value */
                    value?: (Uint8Array|null);

                    /** Transfer memo */
                    memo?: (string|null);

                    /** Transfer callIndices */
                    callIndices?: (TW.Polkadot.Proto.ICallIndices|null);
                }

                /** Represents a Transfer. */
                class Transfer implements ITransfer {

                    /**
                     * Constructs a new Transfer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Polkadot.Proto.Balance.ITransfer);

                    /** Transfer toAddress. */
                    public toAddress: string;

                    /** Transfer value. */
                    public value: Uint8Array;

                    /** Transfer memo. */
                    public memo: string;

                    /** Transfer callIndices. */
                    public callIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /**
                     * Creates a new Transfer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Transfer instance
                     */
                    public static create(properties?: TW.Polkadot.Proto.Balance.ITransfer): TW.Polkadot.Proto.Balance.Transfer;

                    /**
                     * Encodes the specified Transfer message. Does not implicitly {@link TW.Polkadot.Proto.Balance.Transfer.verify|verify} messages.
                     * @param message Transfer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Polkadot.Proto.Balance.ITransfer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Transfer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Transfer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Polkadot.Proto.Balance.Transfer;

                    /**
                     * Gets the default type url for Transfer
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchTransfer. */
                interface IBatchTransfer {

                    /** BatchTransfer callIndices */
                    callIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /** BatchTransfer transfers */
                    transfers?: (TW.Polkadot.Proto.Balance.ITransfer[]|null);
                }

                /** Represents a BatchTransfer. */
                class BatchTransfer implements IBatchTransfer {

                    /**
                     * Constructs a new BatchTransfer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Polkadot.Proto.Balance.IBatchTransfer);

                    /** BatchTransfer callIndices. */
                    public callIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /** BatchTransfer transfers. */
                    public transfers: TW.Polkadot.Proto.Balance.ITransfer[];

                    /**
                     * Creates a new BatchTransfer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchTransfer instance
                     */
                    public static create(properties?: TW.Polkadot.Proto.Balance.IBatchTransfer): TW.Polkadot.Proto.Balance.BatchTransfer;

                    /**
                     * Encodes the specified BatchTransfer message. Does not implicitly {@link TW.Polkadot.Proto.Balance.BatchTransfer.verify|verify} messages.
                     * @param message BatchTransfer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Polkadot.Proto.Balance.IBatchTransfer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchTransfer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchTransfer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Polkadot.Proto.Balance.BatchTransfer;

                    /**
                     * Gets the default type url for BatchTransfer
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AssetTransfer. */
                interface IAssetTransfer {

                    /** AssetTransfer callIndices */
                    callIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /** AssetTransfer toAddress */
                    toAddress?: (string|null);

                    /** AssetTransfer value */
                    value?: (Uint8Array|null);

                    /** AssetTransfer assetId */
                    assetId?: (number|null);

                    /** AssetTransfer feeAssetId */
                    feeAssetId?: (number|null);
                }

                /** Represents an AssetTransfer. */
                class AssetTransfer implements IAssetTransfer {

                    /**
                     * Constructs a new AssetTransfer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Polkadot.Proto.Balance.IAssetTransfer);

                    /** AssetTransfer callIndices. */
                    public callIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /** AssetTransfer toAddress. */
                    public toAddress: string;

                    /** AssetTransfer value. */
                    public value: Uint8Array;

                    /** AssetTransfer assetId. */
                    public assetId: number;

                    /** AssetTransfer feeAssetId. */
                    public feeAssetId: number;

                    /**
                     * Creates a new AssetTransfer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AssetTransfer instance
                     */
                    public static create(properties?: TW.Polkadot.Proto.Balance.IAssetTransfer): TW.Polkadot.Proto.Balance.AssetTransfer;

                    /**
                     * Encodes the specified AssetTransfer message. Does not implicitly {@link TW.Polkadot.Proto.Balance.AssetTransfer.verify|verify} messages.
                     * @param message AssetTransfer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Polkadot.Proto.Balance.IAssetTransfer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AssetTransfer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AssetTransfer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Polkadot.Proto.Balance.AssetTransfer;

                    /**
                     * Gets the default type url for AssetTransfer
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchAssetTransfer. */
                interface IBatchAssetTransfer {

                    /** BatchAssetTransfer callIndices */
                    callIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /** BatchAssetTransfer feeAssetId */
                    feeAssetId?: (number|null);

                    /** BatchAssetTransfer transfers */
                    transfers?: (TW.Polkadot.Proto.Balance.IAssetTransfer[]|null);
                }

                /** Represents a BatchAssetTransfer. */
                class BatchAssetTransfer implements IBatchAssetTransfer {

                    /**
                     * Constructs a new BatchAssetTransfer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Polkadot.Proto.Balance.IBatchAssetTransfer);

                    /** BatchAssetTransfer callIndices. */
                    public callIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /** BatchAssetTransfer feeAssetId. */
                    public feeAssetId: number;

                    /** BatchAssetTransfer transfers. */
                    public transfers: TW.Polkadot.Proto.Balance.IAssetTransfer[];

                    /**
                     * Creates a new BatchAssetTransfer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchAssetTransfer instance
                     */
                    public static create(properties?: TW.Polkadot.Proto.Balance.IBatchAssetTransfer): TW.Polkadot.Proto.Balance.BatchAssetTransfer;

                    /**
                     * Encodes the specified BatchAssetTransfer message. Does not implicitly {@link TW.Polkadot.Proto.Balance.BatchAssetTransfer.verify|verify} messages.
                     * @param message BatchAssetTransfer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Polkadot.Proto.Balance.IBatchAssetTransfer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchAssetTransfer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchAssetTransfer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Polkadot.Proto.Balance.BatchAssetTransfer;

                    /**
                     * Gets the default type url for BatchAssetTransfer
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a Staking. */
            interface IStaking {

                /** Staking bond */
                bond?: (TW.Polkadot.Proto.Staking.IBond|null);

                /** Staking bondAndNominate */
                bondAndNominate?: (TW.Polkadot.Proto.Staking.IBondAndNominate|null);

                /** Staking bondExtra */
                bondExtra?: (TW.Polkadot.Proto.Staking.IBondExtra|null);

                /** Staking unbond */
                unbond?: (TW.Polkadot.Proto.Staking.IUnbond|null);

                /** Staking withdrawUnbonded */
                withdrawUnbonded?: (TW.Polkadot.Proto.Staking.IWithdrawUnbonded|null);

                /** Staking nominate */
                nominate?: (TW.Polkadot.Proto.Staking.INominate|null);

                /** Staking chill */
                chill?: (TW.Polkadot.Proto.Staking.IChill|null);

                /** Staking chillAndUnbond */
                chillAndUnbond?: (TW.Polkadot.Proto.Staking.IChillAndUnbond|null);

                /** Staking rebond */
                rebond?: (TW.Polkadot.Proto.Staking.IRebond|null);

                /** Staking bondExtraAndNominate */
                bondExtraAndNominate?: (TW.Polkadot.Proto.Staking.IBondExtraAndNominate|null);
            }

            /** Represents a Staking. */
            class Staking implements IStaking {

                /**
                 * Constructs a new Staking.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Polkadot.Proto.IStaking);

                /** Staking bond. */
                public bond?: (TW.Polkadot.Proto.Staking.IBond|null);

                /** Staking bondAndNominate. */
                public bondAndNominate?: (TW.Polkadot.Proto.Staking.IBondAndNominate|null);

                /** Staking bondExtra. */
                public bondExtra?: (TW.Polkadot.Proto.Staking.IBondExtra|null);

                /** Staking unbond. */
                public unbond?: (TW.Polkadot.Proto.Staking.IUnbond|null);

                /** Staking withdrawUnbonded. */
                public withdrawUnbonded?: (TW.Polkadot.Proto.Staking.IWithdrawUnbonded|null);

                /** Staking nominate. */
                public nominate?: (TW.Polkadot.Proto.Staking.INominate|null);

                /** Staking chill. */
                public chill?: (TW.Polkadot.Proto.Staking.IChill|null);

                /** Staking chillAndUnbond. */
                public chillAndUnbond?: (TW.Polkadot.Proto.Staking.IChillAndUnbond|null);

                /** Staking rebond. */
                public rebond?: (TW.Polkadot.Proto.Staking.IRebond|null);

                /** Staking bondExtraAndNominate. */
                public bondExtraAndNominate?: (TW.Polkadot.Proto.Staking.IBondExtraAndNominate|null);

                /** Staking messageOneof. */
                public messageOneof?: ("bond"|"bondAndNominate"|"bondExtra"|"unbond"|"withdrawUnbonded"|"nominate"|"chill"|"chillAndUnbond"|"rebond"|"bondExtraAndNominate");

                /**
                 * Creates a new Staking instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Staking instance
                 */
                public static create(properties?: TW.Polkadot.Proto.IStaking): TW.Polkadot.Proto.Staking;

                /**
                 * Encodes the specified Staking message. Does not implicitly {@link TW.Polkadot.Proto.Staking.verify|verify} messages.
                 * @param message Staking message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Polkadot.Proto.IStaking, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Staking message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Staking
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Polkadot.Proto.Staking;

                /**
                 * Gets the default type url for Staking
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Staking {

                /** Properties of a Bond. */
                interface IBond {

                    /** Bond controller */
                    controller?: (string|null);

                    /** Bond value */
                    value?: (Uint8Array|null);

                    /** Bond rewardDestination */
                    rewardDestination?: (TW.Polkadot.Proto.RewardDestination|null);

                    /** Bond callIndices */
                    callIndices?: (TW.Polkadot.Proto.ICallIndices|null);
                }

                /** Represents a Bond. */
                class Bond implements IBond {

                    /**
                     * Constructs a new Bond.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Polkadot.Proto.Staking.IBond);

                    /** Bond controller. */
                    public controller: string;

                    /** Bond value. */
                    public value: Uint8Array;

                    /** Bond rewardDestination. */
                    public rewardDestination: TW.Polkadot.Proto.RewardDestination;

                    /** Bond callIndices. */
                    public callIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /**
                     * Creates a new Bond instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Bond instance
                     */
                    public static create(properties?: TW.Polkadot.Proto.Staking.IBond): TW.Polkadot.Proto.Staking.Bond;

                    /**
                     * Encodes the specified Bond message. Does not implicitly {@link TW.Polkadot.Proto.Staking.Bond.verify|verify} messages.
                     * @param message Bond message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Polkadot.Proto.Staking.IBond, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Bond message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Bond
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Polkadot.Proto.Staking.Bond;

                    /**
                     * Gets the default type url for Bond
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BondAndNominate. */
                interface IBondAndNominate {

                    /** BondAndNominate controller */
                    controller?: (string|null);

                    /** BondAndNominate value */
                    value?: (Uint8Array|null);

                    /** BondAndNominate rewardDestination */
                    rewardDestination?: (TW.Polkadot.Proto.RewardDestination|null);

                    /** BondAndNominate nominators */
                    nominators?: (string[]|null);

                    /** BondAndNominate callIndices */
                    callIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /** BondAndNominate bondCallIndices */
                    bondCallIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /** BondAndNominate nominateCallIndices */
                    nominateCallIndices?: (TW.Polkadot.Proto.ICallIndices|null);
                }

                /** Represents a BondAndNominate. */
                class BondAndNominate implements IBondAndNominate {

                    /**
                     * Constructs a new BondAndNominate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Polkadot.Proto.Staking.IBondAndNominate);

                    /** BondAndNominate controller. */
                    public controller: string;

                    /** BondAndNominate value. */
                    public value: Uint8Array;

                    /** BondAndNominate rewardDestination. */
                    public rewardDestination: TW.Polkadot.Proto.RewardDestination;

                    /** BondAndNominate nominators. */
                    public nominators: string[];

                    /** BondAndNominate callIndices. */
                    public callIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /** BondAndNominate bondCallIndices. */
                    public bondCallIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /** BondAndNominate nominateCallIndices. */
                    public nominateCallIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /**
                     * Creates a new BondAndNominate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BondAndNominate instance
                     */
                    public static create(properties?: TW.Polkadot.Proto.Staking.IBondAndNominate): TW.Polkadot.Proto.Staking.BondAndNominate;

                    /**
                     * Encodes the specified BondAndNominate message. Does not implicitly {@link TW.Polkadot.Proto.Staking.BondAndNominate.verify|verify} messages.
                     * @param message BondAndNominate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Polkadot.Proto.Staking.IBondAndNominate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BondAndNominate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BondAndNominate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Polkadot.Proto.Staking.BondAndNominate;

                    /**
                     * Gets the default type url for BondAndNominate
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BondExtraAndNominate. */
                interface IBondExtraAndNominate {

                    /** BondExtraAndNominate value */
                    value?: (Uint8Array|null);

                    /** BondExtraAndNominate nominators */
                    nominators?: (string[]|null);

                    /** BondExtraAndNominate callIndices */
                    callIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /** BondExtraAndNominate bondExtraCallIndices */
                    bondExtraCallIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /** BondExtraAndNominate nominateCallIndices */
                    nominateCallIndices?: (TW.Polkadot.Proto.ICallIndices|null);
                }

                /** Represents a BondExtraAndNominate. */
                class BondExtraAndNominate implements IBondExtraAndNominate {

                    /**
                     * Constructs a new BondExtraAndNominate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Polkadot.Proto.Staking.IBondExtraAndNominate);

                    /** BondExtraAndNominate value. */
                    public value: Uint8Array;

                    /** BondExtraAndNominate nominators. */
                    public nominators: string[];

                    /** BondExtraAndNominate callIndices. */
                    public callIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /** BondExtraAndNominate bondExtraCallIndices. */
                    public bondExtraCallIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /** BondExtraAndNominate nominateCallIndices. */
                    public nominateCallIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /**
                     * Creates a new BondExtraAndNominate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BondExtraAndNominate instance
                     */
                    public static create(properties?: TW.Polkadot.Proto.Staking.IBondExtraAndNominate): TW.Polkadot.Proto.Staking.BondExtraAndNominate;

                    /**
                     * Encodes the specified BondExtraAndNominate message. Does not implicitly {@link TW.Polkadot.Proto.Staking.BondExtraAndNominate.verify|verify} messages.
                     * @param message BondExtraAndNominate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Polkadot.Proto.Staking.IBondExtraAndNominate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BondExtraAndNominate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BondExtraAndNominate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Polkadot.Proto.Staking.BondExtraAndNominate;

                    /**
                     * Gets the default type url for BondExtraAndNominate
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BondExtra. */
                interface IBondExtra {

                    /** BondExtra value */
                    value?: (Uint8Array|null);

                    /** BondExtra callIndices */
                    callIndices?: (TW.Polkadot.Proto.ICallIndices|null);
                }

                /** Represents a BondExtra. */
                class BondExtra implements IBondExtra {

                    /**
                     * Constructs a new BondExtra.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Polkadot.Proto.Staking.IBondExtra);

                    /** BondExtra value. */
                    public value: Uint8Array;

                    /** BondExtra callIndices. */
                    public callIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /**
                     * Creates a new BondExtra instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BondExtra instance
                     */
                    public static create(properties?: TW.Polkadot.Proto.Staking.IBondExtra): TW.Polkadot.Proto.Staking.BondExtra;

                    /**
                     * Encodes the specified BondExtra message. Does not implicitly {@link TW.Polkadot.Proto.Staking.BondExtra.verify|verify} messages.
                     * @param message BondExtra message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Polkadot.Proto.Staking.IBondExtra, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BondExtra message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BondExtra
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Polkadot.Proto.Staking.BondExtra;

                    /**
                     * Gets the default type url for BondExtra
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Unbond. */
                interface IUnbond {

                    /** Unbond value */
                    value?: (Uint8Array|null);

                    /** Unbond callIndices */
                    callIndices?: (TW.Polkadot.Proto.ICallIndices|null);
                }

                /** Represents an Unbond. */
                class Unbond implements IUnbond {

                    /**
                     * Constructs a new Unbond.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Polkadot.Proto.Staking.IUnbond);

                    /** Unbond value. */
                    public value: Uint8Array;

                    /** Unbond callIndices. */
                    public callIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /**
                     * Creates a new Unbond instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Unbond instance
                     */
                    public static create(properties?: TW.Polkadot.Proto.Staking.IUnbond): TW.Polkadot.Proto.Staking.Unbond;

                    /**
                     * Encodes the specified Unbond message. Does not implicitly {@link TW.Polkadot.Proto.Staking.Unbond.verify|verify} messages.
                     * @param message Unbond message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Polkadot.Proto.Staking.IUnbond, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Unbond message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Unbond
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Polkadot.Proto.Staking.Unbond;

                    /**
                     * Gets the default type url for Unbond
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Rebond. */
                interface IRebond {

                    /** Rebond value */
                    value?: (Uint8Array|null);

                    /** Rebond callIndices */
                    callIndices?: (TW.Polkadot.Proto.ICallIndices|null);
                }

                /** Represents a Rebond. */
                class Rebond implements IRebond {

                    /**
                     * Constructs a new Rebond.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Polkadot.Proto.Staking.IRebond);

                    /** Rebond value. */
                    public value: Uint8Array;

                    /** Rebond callIndices. */
                    public callIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /**
                     * Creates a new Rebond instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Rebond instance
                     */
                    public static create(properties?: TW.Polkadot.Proto.Staking.IRebond): TW.Polkadot.Proto.Staking.Rebond;

                    /**
                     * Encodes the specified Rebond message. Does not implicitly {@link TW.Polkadot.Proto.Staking.Rebond.verify|verify} messages.
                     * @param message Rebond message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Polkadot.Proto.Staking.IRebond, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Rebond message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Rebond
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Polkadot.Proto.Staking.Rebond;

                    /**
                     * Gets the default type url for Rebond
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WithdrawUnbonded. */
                interface IWithdrawUnbonded {

                    /** WithdrawUnbonded slashingSpans */
                    slashingSpans?: (number|null);

                    /** WithdrawUnbonded callIndices */
                    callIndices?: (TW.Polkadot.Proto.ICallIndices|null);
                }

                /** Represents a WithdrawUnbonded. */
                class WithdrawUnbonded implements IWithdrawUnbonded {

                    /**
                     * Constructs a new WithdrawUnbonded.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Polkadot.Proto.Staking.IWithdrawUnbonded);

                    /** WithdrawUnbonded slashingSpans. */
                    public slashingSpans: number;

                    /** WithdrawUnbonded callIndices. */
                    public callIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /**
                     * Creates a new WithdrawUnbonded instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WithdrawUnbonded instance
                     */
                    public static create(properties?: TW.Polkadot.Proto.Staking.IWithdrawUnbonded): TW.Polkadot.Proto.Staking.WithdrawUnbonded;

                    /**
                     * Encodes the specified WithdrawUnbonded message. Does not implicitly {@link TW.Polkadot.Proto.Staking.WithdrawUnbonded.verify|verify} messages.
                     * @param message WithdrawUnbonded message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Polkadot.Proto.Staking.IWithdrawUnbonded, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WithdrawUnbonded message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WithdrawUnbonded
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Polkadot.Proto.Staking.WithdrawUnbonded;

                    /**
                     * Gets the default type url for WithdrawUnbonded
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Nominate. */
                interface INominate {

                    /** Nominate nominators */
                    nominators?: (string[]|null);

                    /** Nominate callIndices */
                    callIndices?: (TW.Polkadot.Proto.ICallIndices|null);
                }

                /** Represents a Nominate. */
                class Nominate implements INominate {

                    /**
                     * Constructs a new Nominate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Polkadot.Proto.Staking.INominate);

                    /** Nominate nominators. */
                    public nominators: string[];

                    /** Nominate callIndices. */
                    public callIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /**
                     * Creates a new Nominate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Nominate instance
                     */
                    public static create(properties?: TW.Polkadot.Proto.Staking.INominate): TW.Polkadot.Proto.Staking.Nominate;

                    /**
                     * Encodes the specified Nominate message. Does not implicitly {@link TW.Polkadot.Proto.Staking.Nominate.verify|verify} messages.
                     * @param message Nominate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Polkadot.Proto.Staking.INominate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Nominate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Nominate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Polkadot.Proto.Staking.Nominate;

                    /**
                     * Gets the default type url for Nominate
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ChillAndUnbond. */
                interface IChillAndUnbond {

                    /** ChillAndUnbond value */
                    value?: (Uint8Array|null);

                    /** ChillAndUnbond callIndices */
                    callIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /** ChillAndUnbond chillCallIndices */
                    chillCallIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /** ChillAndUnbond unbondCallIndices */
                    unbondCallIndices?: (TW.Polkadot.Proto.ICallIndices|null);
                }

                /** Represents a ChillAndUnbond. */
                class ChillAndUnbond implements IChillAndUnbond {

                    /**
                     * Constructs a new ChillAndUnbond.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Polkadot.Proto.Staking.IChillAndUnbond);

                    /** ChillAndUnbond value. */
                    public value: Uint8Array;

                    /** ChillAndUnbond callIndices. */
                    public callIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /** ChillAndUnbond chillCallIndices. */
                    public chillCallIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /** ChillAndUnbond unbondCallIndices. */
                    public unbondCallIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /**
                     * Creates a new ChillAndUnbond instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ChillAndUnbond instance
                     */
                    public static create(properties?: TW.Polkadot.Proto.Staking.IChillAndUnbond): TW.Polkadot.Proto.Staking.ChillAndUnbond;

                    /**
                     * Encodes the specified ChillAndUnbond message. Does not implicitly {@link TW.Polkadot.Proto.Staking.ChillAndUnbond.verify|verify} messages.
                     * @param message ChillAndUnbond message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Polkadot.Proto.Staking.IChillAndUnbond, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ChillAndUnbond message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ChillAndUnbond
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Polkadot.Proto.Staking.ChillAndUnbond;

                    /**
                     * Gets the default type url for ChillAndUnbond
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Chill. */
                interface IChill {

                    /** Chill callIndices */
                    callIndices?: (TW.Polkadot.Proto.ICallIndices|null);
                }

                /** Represents a Chill. */
                class Chill implements IChill {

                    /**
                     * Constructs a new Chill.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Polkadot.Proto.Staking.IChill);

                    /** Chill callIndices. */
                    public callIndices?: (TW.Polkadot.Proto.ICallIndices|null);

                    /**
                     * Creates a new Chill instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Chill instance
                     */
                    public static create(properties?: TW.Polkadot.Proto.Staking.IChill): TW.Polkadot.Proto.Staking.Chill;

                    /**
                     * Encodes the specified Chill message. Does not implicitly {@link TW.Polkadot.Proto.Staking.Chill.verify|verify} messages.
                     * @param message Chill message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Polkadot.Proto.Staking.IChill, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Chill message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Chill
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Polkadot.Proto.Staking.Chill;

                    /**
                     * Gets the default type url for Chill
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a SigningInput. */
            interface ISigningInput {

                /** SigningInput blockHash */
                blockHash?: (Uint8Array|null);

                /** SigningInput genesisHash */
                genesisHash?: (Uint8Array|null);

                /** SigningInput nonce */
                nonce?: (number|null);

                /** SigningInput specVersion */
                specVersion?: (number|null);

                /** SigningInput transactionVersion */
                transactionVersion?: (number|null);

                /** SigningInput tip */
                tip?: (Uint8Array|null);

                /** SigningInput era */
                era?: (TW.Polkadot.Proto.IEra|null);

                /** SigningInput privateKey */
                privateKey?: (Uint8Array|null);

                /** SigningInput network */
                network?: (number|null);

                /** SigningInput multiAddress */
                multiAddress?: (boolean|null);

                /** SigningInput chargeNativeAsAssetTxPayment */
                chargeNativeAsAssetTxPayment?: (boolean|null);

                /** SigningInput balanceCall */
                balanceCall?: (TW.Polkadot.Proto.IBalance|null);

                /** SigningInput stakingCall */
                stakingCall?: (TW.Polkadot.Proto.IStaking|null);
            }

            /** Represents a SigningInput. */
            class SigningInput implements ISigningInput {

                /**
                 * Constructs a new SigningInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Polkadot.Proto.ISigningInput);

                /** SigningInput blockHash. */
                public blockHash: Uint8Array;

                /** SigningInput genesisHash. */
                public genesisHash: Uint8Array;

                /** SigningInput nonce. */
                public nonce: number;

                /** SigningInput specVersion. */
                public specVersion: number;

                /** SigningInput transactionVersion. */
                public transactionVersion: number;

                /** SigningInput tip. */
                public tip: Uint8Array;

                /** SigningInput era. */
                public era?: (TW.Polkadot.Proto.IEra|null);

                /** SigningInput privateKey. */
                public privateKey: Uint8Array;

                /** SigningInput network. */
                public network: number;

                /** SigningInput multiAddress. */
                public multiAddress: boolean;

                /** SigningInput chargeNativeAsAssetTxPayment. */
                public chargeNativeAsAssetTxPayment: boolean;

                /** SigningInput balanceCall. */
                public balanceCall?: (TW.Polkadot.Proto.IBalance|null);

                /** SigningInput stakingCall. */
                public stakingCall?: (TW.Polkadot.Proto.IStaking|null);

                /** SigningInput messageOneof. */
                public messageOneof?: ("balanceCall"|"stakingCall");

                /**
                 * Creates a new SigningInput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningInput instance
                 */
                public static create(properties?: TW.Polkadot.Proto.ISigningInput): TW.Polkadot.Proto.SigningInput;

                /**
                 * Encodes the specified SigningInput message. Does not implicitly {@link TW.Polkadot.Proto.SigningInput.verify|verify} messages.
                 * @param message SigningInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Polkadot.Proto.ISigningInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Polkadot.Proto.SigningInput;

                /**
                 * Gets the default type url for SigningInput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SigningOutput. */
            interface ISigningOutput {

                /** SigningOutput encoded */
                encoded?: (Uint8Array|null);

                /** SigningOutput error */
                error?: (TW.Common.Proto.SigningError|null);

                /** SigningOutput errorMessage */
                errorMessage?: (string|null);
            }

            /** Represents a SigningOutput. */
            class SigningOutput implements ISigningOutput {

                /**
                 * Constructs a new SigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Polkadot.Proto.ISigningOutput);

                /** SigningOutput encoded. */
                public encoded: Uint8Array;

                /** SigningOutput error. */
                public error: TW.Common.Proto.SigningError;

                /** SigningOutput errorMessage. */
                public errorMessage: string;

                /**
                 * Creates a new SigningOutput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningOutput instance
                 */
                public static create(properties?: TW.Polkadot.Proto.ISigningOutput): TW.Polkadot.Proto.SigningOutput;

                /**
                 * Encodes the specified SigningOutput message. Does not implicitly {@link TW.Polkadot.Proto.SigningOutput.verify|verify} messages.
                 * @param message SigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Polkadot.Proto.ISigningOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Polkadot.Proto.SigningOutput;

                /**
                 * Gets the default type url for SigningOutput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Namespace Ripple. */
    namespace Ripple {

        /** Namespace Proto. */
        namespace Proto {

            /** Properties of a CurrencyAmount. */
            interface ICurrencyAmount {

                /** CurrencyAmount currency */
                currency?: (string|null);

                /** CurrencyAmount value */
                value?: (string|null);

                /** CurrencyAmount issuer */
                issuer?: (string|null);
            }

            /** Represents a CurrencyAmount. */
            class CurrencyAmount implements ICurrencyAmount {

                /**
                 * Constructs a new CurrencyAmount.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ripple.Proto.ICurrencyAmount);

                /** CurrencyAmount currency. */
                public currency: string;

                /** CurrencyAmount value. */
                public value: string;

                /** CurrencyAmount issuer. */
                public issuer: string;

                /**
                 * Creates a new CurrencyAmount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CurrencyAmount instance
                 */
                public static create(properties?: TW.Ripple.Proto.ICurrencyAmount): TW.Ripple.Proto.CurrencyAmount;

                /**
                 * Encodes the specified CurrencyAmount message. Does not implicitly {@link TW.Ripple.Proto.CurrencyAmount.verify|verify} messages.
                 * @param message CurrencyAmount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Ripple.Proto.ICurrencyAmount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CurrencyAmount message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CurrencyAmount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ripple.Proto.CurrencyAmount;

                /**
                 * Gets the default type url for CurrencyAmount
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an OperationTrustSet. */
            interface IOperationTrustSet {

                /** OperationTrustSet limitAmount */
                limitAmount?: (TW.Ripple.Proto.ICurrencyAmount|null);
            }

            /** Represents an OperationTrustSet. */
            class OperationTrustSet implements IOperationTrustSet {

                /**
                 * Constructs a new OperationTrustSet.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ripple.Proto.IOperationTrustSet);

                /** OperationTrustSet limitAmount. */
                public limitAmount?: (TW.Ripple.Proto.ICurrencyAmount|null);

                /**
                 * Creates a new OperationTrustSet instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OperationTrustSet instance
                 */
                public static create(properties?: TW.Ripple.Proto.IOperationTrustSet): TW.Ripple.Proto.OperationTrustSet;

                /**
                 * Encodes the specified OperationTrustSet message. Does not implicitly {@link TW.Ripple.Proto.OperationTrustSet.verify|verify} messages.
                 * @param message OperationTrustSet message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Ripple.Proto.IOperationTrustSet, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OperationTrustSet message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OperationTrustSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ripple.Proto.OperationTrustSet;

                /**
                 * Gets the default type url for OperationTrustSet
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an OperationPayment. */
            interface IOperationPayment {

                /** OperationPayment amount */
                amount?: (number|null);

                /** OperationPayment currencyAmount */
                currencyAmount?: (TW.Ripple.Proto.ICurrencyAmount|null);

                /** OperationPayment destination */
                destination?: (string|null);

                /** OperationPayment destinationTag */
                destinationTag?: (number|null);
            }

            /** Represents an OperationPayment. */
            class OperationPayment implements IOperationPayment {

                /**
                 * Constructs a new OperationPayment.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ripple.Proto.IOperationPayment);

                /** OperationPayment amount. */
                public amount?: (number|null);

                /** OperationPayment currencyAmount. */
                public currencyAmount?: (TW.Ripple.Proto.ICurrencyAmount|null);

                /** OperationPayment destination. */
                public destination: string;

                /** OperationPayment destinationTag. */
                public destinationTag: number;

                /** OperationPayment amountOneof. */
                public amountOneof?: ("amount"|"currencyAmount");

                /**
                 * Creates a new OperationPayment instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OperationPayment instance
                 */
                public static create(properties?: TW.Ripple.Proto.IOperationPayment): TW.Ripple.Proto.OperationPayment;

                /**
                 * Encodes the specified OperationPayment message. Does not implicitly {@link TW.Ripple.Proto.OperationPayment.verify|verify} messages.
                 * @param message OperationPayment message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Ripple.Proto.IOperationPayment, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OperationPayment message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OperationPayment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ripple.Proto.OperationPayment;

                /**
                 * Gets the default type url for OperationPayment
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an OperationEscrowCreate. */
            interface IOperationEscrowCreate {

                /** OperationEscrowCreate amount */
                amount?: (number|null);

                /** OperationEscrowCreate destination */
                destination?: (string|null);

                /** OperationEscrowCreate destinationTag */
                destinationTag?: (number|null);

                /** OperationEscrowCreate cancelAfter */
                cancelAfter?: (number|null);

                /** OperationEscrowCreate finishAfter */
                finishAfter?: (number|null);

                /** OperationEscrowCreate condition */
                condition?: (string|null);
            }

            /** Represents an OperationEscrowCreate. */
            class OperationEscrowCreate implements IOperationEscrowCreate {

                /**
                 * Constructs a new OperationEscrowCreate.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ripple.Proto.IOperationEscrowCreate);

                /** OperationEscrowCreate amount. */
                public amount: number;

                /** OperationEscrowCreate destination. */
                public destination: string;

                /** OperationEscrowCreate destinationTag. */
                public destinationTag: number;

                /** OperationEscrowCreate cancelAfter. */
                public cancelAfter: number;

                /** OperationEscrowCreate finishAfter. */
                public finishAfter: number;

                /** OperationEscrowCreate condition. */
                public condition: string;

                /**
                 * Creates a new OperationEscrowCreate instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OperationEscrowCreate instance
                 */
                public static create(properties?: TW.Ripple.Proto.IOperationEscrowCreate): TW.Ripple.Proto.OperationEscrowCreate;

                /**
                 * Encodes the specified OperationEscrowCreate message. Does not implicitly {@link TW.Ripple.Proto.OperationEscrowCreate.verify|verify} messages.
                 * @param message OperationEscrowCreate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Ripple.Proto.IOperationEscrowCreate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OperationEscrowCreate message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OperationEscrowCreate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ripple.Proto.OperationEscrowCreate;

                /**
                 * Gets the default type url for OperationEscrowCreate
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an OperationEscrowCancel. */
            interface IOperationEscrowCancel {

                /** OperationEscrowCancel owner */
                owner?: (string|null);

                /** OperationEscrowCancel offerSequence */
                offerSequence?: (number|null);
            }

            /** Represents an OperationEscrowCancel. */
            class OperationEscrowCancel implements IOperationEscrowCancel {

                /**
                 * Constructs a new OperationEscrowCancel.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ripple.Proto.IOperationEscrowCancel);

                /** OperationEscrowCancel owner. */
                public owner: string;

                /** OperationEscrowCancel offerSequence. */
                public offerSequence: number;

                /**
                 * Creates a new OperationEscrowCancel instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OperationEscrowCancel instance
                 */
                public static create(properties?: TW.Ripple.Proto.IOperationEscrowCancel): TW.Ripple.Proto.OperationEscrowCancel;

                /**
                 * Encodes the specified OperationEscrowCancel message. Does not implicitly {@link TW.Ripple.Proto.OperationEscrowCancel.verify|verify} messages.
                 * @param message OperationEscrowCancel message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Ripple.Proto.IOperationEscrowCancel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OperationEscrowCancel message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OperationEscrowCancel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ripple.Proto.OperationEscrowCancel;

                /**
                 * Gets the default type url for OperationEscrowCancel
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an OperationEscrowFinish. */
            interface IOperationEscrowFinish {

                /** OperationEscrowFinish owner */
                owner?: (string|null);

                /** OperationEscrowFinish offerSequence */
                offerSequence?: (number|null);

                /** OperationEscrowFinish condition */
                condition?: (string|null);

                /** OperationEscrowFinish fulfillment */
                fulfillment?: (string|null);
            }

            /** Represents an OperationEscrowFinish. */
            class OperationEscrowFinish implements IOperationEscrowFinish {

                /**
                 * Constructs a new OperationEscrowFinish.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ripple.Proto.IOperationEscrowFinish);

                /** OperationEscrowFinish owner. */
                public owner: string;

                /** OperationEscrowFinish offerSequence. */
                public offerSequence: number;

                /** OperationEscrowFinish condition. */
                public condition: string;

                /** OperationEscrowFinish fulfillment. */
                public fulfillment: string;

                /**
                 * Creates a new OperationEscrowFinish instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OperationEscrowFinish instance
                 */
                public static create(properties?: TW.Ripple.Proto.IOperationEscrowFinish): TW.Ripple.Proto.OperationEscrowFinish;

                /**
                 * Encodes the specified OperationEscrowFinish message. Does not implicitly {@link TW.Ripple.Proto.OperationEscrowFinish.verify|verify} messages.
                 * @param message OperationEscrowFinish message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Ripple.Proto.IOperationEscrowFinish, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OperationEscrowFinish message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OperationEscrowFinish
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ripple.Proto.OperationEscrowFinish;

                /**
                 * Gets the default type url for OperationEscrowFinish
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an OperationNFTokenBurn. */
            interface IOperationNFTokenBurn {

                /** OperationNFTokenBurn nftokenId */
                nftokenId?: (string|null);
            }

            /** Represents an OperationNFTokenBurn. */
            class OperationNFTokenBurn implements IOperationNFTokenBurn {

                /**
                 * Constructs a new OperationNFTokenBurn.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ripple.Proto.IOperationNFTokenBurn);

                /** OperationNFTokenBurn nftokenId. */
                public nftokenId: string;

                /**
                 * Creates a new OperationNFTokenBurn instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OperationNFTokenBurn instance
                 */
                public static create(properties?: TW.Ripple.Proto.IOperationNFTokenBurn): TW.Ripple.Proto.OperationNFTokenBurn;

                /**
                 * Encodes the specified OperationNFTokenBurn message. Does not implicitly {@link TW.Ripple.Proto.OperationNFTokenBurn.verify|verify} messages.
                 * @param message OperationNFTokenBurn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Ripple.Proto.IOperationNFTokenBurn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OperationNFTokenBurn message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OperationNFTokenBurn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ripple.Proto.OperationNFTokenBurn;

                /**
                 * Gets the default type url for OperationNFTokenBurn
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an OperationNFTokenCreateOffer. */
            interface IOperationNFTokenCreateOffer {

                /** OperationNFTokenCreateOffer nftokenId */
                nftokenId?: (string|null);

                /** OperationNFTokenCreateOffer destination */
                destination?: (string|null);
            }

            /** Represents an OperationNFTokenCreateOffer. */
            class OperationNFTokenCreateOffer implements IOperationNFTokenCreateOffer {

                /**
                 * Constructs a new OperationNFTokenCreateOffer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ripple.Proto.IOperationNFTokenCreateOffer);

                /** OperationNFTokenCreateOffer nftokenId. */
                public nftokenId: string;

                /** OperationNFTokenCreateOffer destination. */
                public destination: string;

                /**
                 * Creates a new OperationNFTokenCreateOffer instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OperationNFTokenCreateOffer instance
                 */
                public static create(properties?: TW.Ripple.Proto.IOperationNFTokenCreateOffer): TW.Ripple.Proto.OperationNFTokenCreateOffer;

                /**
                 * Encodes the specified OperationNFTokenCreateOffer message. Does not implicitly {@link TW.Ripple.Proto.OperationNFTokenCreateOffer.verify|verify} messages.
                 * @param message OperationNFTokenCreateOffer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Ripple.Proto.IOperationNFTokenCreateOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OperationNFTokenCreateOffer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OperationNFTokenCreateOffer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ripple.Proto.OperationNFTokenCreateOffer;

                /**
                 * Gets the default type url for OperationNFTokenCreateOffer
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an OperationNFTokenAcceptOffer. */
            interface IOperationNFTokenAcceptOffer {

                /** OperationNFTokenAcceptOffer sellOffer */
                sellOffer?: (string|null);
            }

            /** Represents an OperationNFTokenAcceptOffer. */
            class OperationNFTokenAcceptOffer implements IOperationNFTokenAcceptOffer {

                /**
                 * Constructs a new OperationNFTokenAcceptOffer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ripple.Proto.IOperationNFTokenAcceptOffer);

                /** OperationNFTokenAcceptOffer sellOffer. */
                public sellOffer: string;

                /**
                 * Creates a new OperationNFTokenAcceptOffer instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OperationNFTokenAcceptOffer instance
                 */
                public static create(properties?: TW.Ripple.Proto.IOperationNFTokenAcceptOffer): TW.Ripple.Proto.OperationNFTokenAcceptOffer;

                /**
                 * Encodes the specified OperationNFTokenAcceptOffer message. Does not implicitly {@link TW.Ripple.Proto.OperationNFTokenAcceptOffer.verify|verify} messages.
                 * @param message OperationNFTokenAcceptOffer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Ripple.Proto.IOperationNFTokenAcceptOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OperationNFTokenAcceptOffer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OperationNFTokenAcceptOffer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ripple.Proto.OperationNFTokenAcceptOffer;

                /**
                 * Gets the default type url for OperationNFTokenAcceptOffer
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an OperationNFTokenCancelOffer. */
            interface IOperationNFTokenCancelOffer {

                /** OperationNFTokenCancelOffer tokenOffers */
                tokenOffers?: (string[]|null);
            }

            /** Represents an OperationNFTokenCancelOffer. */
            class OperationNFTokenCancelOffer implements IOperationNFTokenCancelOffer {

                /**
                 * Constructs a new OperationNFTokenCancelOffer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ripple.Proto.IOperationNFTokenCancelOffer);

                /** OperationNFTokenCancelOffer tokenOffers. */
                public tokenOffers: string[];

                /**
                 * Creates a new OperationNFTokenCancelOffer instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OperationNFTokenCancelOffer instance
                 */
                public static create(properties?: TW.Ripple.Proto.IOperationNFTokenCancelOffer): TW.Ripple.Proto.OperationNFTokenCancelOffer;

                /**
                 * Encodes the specified OperationNFTokenCancelOffer message. Does not implicitly {@link TW.Ripple.Proto.OperationNFTokenCancelOffer.verify|verify} messages.
                 * @param message OperationNFTokenCancelOffer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Ripple.Proto.IOperationNFTokenCancelOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OperationNFTokenCancelOffer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OperationNFTokenCancelOffer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ripple.Proto.OperationNFTokenCancelOffer;

                /**
                 * Gets the default type url for OperationNFTokenCancelOffer
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SigningInput. */
            interface ISigningInput {

                /** SigningInput fee */
                fee?: (number|null);

                /** SigningInput sequence */
                sequence?: (number|null);

                /** SigningInput lastLedgerSequence */
                lastLedgerSequence?: (number|null);

                /** SigningInput account */
                account?: (string|null);

                /** SigningInput flags */
                flags?: (number|null);

                /** SigningInput privateKey */
                privateKey?: (Uint8Array|null);

                /** SigningInput opTrustSet */
                opTrustSet?: (TW.Ripple.Proto.IOperationTrustSet|null);

                /** SigningInput opPayment */
                opPayment?: (TW.Ripple.Proto.IOperationPayment|null);

                /** SigningInput opNftokenBurn */
                opNftokenBurn?: (TW.Ripple.Proto.IOperationNFTokenBurn|null);

                /** SigningInput opNftokenCreateOffer */
                opNftokenCreateOffer?: (TW.Ripple.Proto.IOperationNFTokenCreateOffer|null);

                /** SigningInput opNftokenAcceptOffer */
                opNftokenAcceptOffer?: (TW.Ripple.Proto.IOperationNFTokenAcceptOffer|null);

                /** SigningInput opNftokenCancelOffer */
                opNftokenCancelOffer?: (TW.Ripple.Proto.IOperationNFTokenCancelOffer|null);

                /** SigningInput opEscrowCreate */
                opEscrowCreate?: (TW.Ripple.Proto.IOperationEscrowCreate|null);

                /** SigningInput opEscrowCancel */
                opEscrowCancel?: (TW.Ripple.Proto.IOperationEscrowCancel|null);

                /** SigningInput opEscrowFinish */
                opEscrowFinish?: (TW.Ripple.Proto.IOperationEscrowFinish|null);

                /** SigningInput publicKey */
                publicKey?: (Uint8Array|null);

                /** SigningInput rawJson */
                rawJson?: (string|null);

                /** SigningInput sourceTag */
                sourceTag?: (number|null);
            }

            /** Represents a SigningInput. */
            class SigningInput implements ISigningInput {

                /**
                 * Constructs a new SigningInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ripple.Proto.ISigningInput);

                /** SigningInput fee. */
                public fee: number;

                /** SigningInput sequence. */
                public sequence: number;

                /** SigningInput lastLedgerSequence. */
                public lastLedgerSequence: number;

                /** SigningInput account. */
                public account: string;

                /** SigningInput flags. */
                public flags: number;

                /** SigningInput privateKey. */
                public privateKey: Uint8Array;

                /** SigningInput opTrustSet. */
                public opTrustSet?: (TW.Ripple.Proto.IOperationTrustSet|null);

                /** SigningInput opPayment. */
                public opPayment?: (TW.Ripple.Proto.IOperationPayment|null);

                /** SigningInput opNftokenBurn. */
                public opNftokenBurn?: (TW.Ripple.Proto.IOperationNFTokenBurn|null);

                /** SigningInput opNftokenCreateOffer. */
                public opNftokenCreateOffer?: (TW.Ripple.Proto.IOperationNFTokenCreateOffer|null);

                /** SigningInput opNftokenAcceptOffer. */
                public opNftokenAcceptOffer?: (TW.Ripple.Proto.IOperationNFTokenAcceptOffer|null);

                /** SigningInput opNftokenCancelOffer. */
                public opNftokenCancelOffer?: (TW.Ripple.Proto.IOperationNFTokenCancelOffer|null);

                /** SigningInput opEscrowCreate. */
                public opEscrowCreate?: (TW.Ripple.Proto.IOperationEscrowCreate|null);

                /** SigningInput opEscrowCancel. */
                public opEscrowCancel?: (TW.Ripple.Proto.IOperationEscrowCancel|null);

                /** SigningInput opEscrowFinish. */
                public opEscrowFinish?: (TW.Ripple.Proto.IOperationEscrowFinish|null);

                /** SigningInput publicKey. */
                public publicKey: Uint8Array;

                /** SigningInput rawJson. */
                public rawJson: string;

                /** SigningInput sourceTag. */
                public sourceTag: number;

                /** SigningInput operationOneof. */
                public operationOneof?: ("opTrustSet"|"opPayment"|"opNftokenBurn"|"opNftokenCreateOffer"|"opNftokenAcceptOffer"|"opNftokenCancelOffer"|"opEscrowCreate"|"opEscrowCancel"|"opEscrowFinish");

                /**
                 * Creates a new SigningInput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningInput instance
                 */
                public static create(properties?: TW.Ripple.Proto.ISigningInput): TW.Ripple.Proto.SigningInput;

                /**
                 * Encodes the specified SigningInput message. Does not implicitly {@link TW.Ripple.Proto.SigningInput.verify|verify} messages.
                 * @param message SigningInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Ripple.Proto.ISigningInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ripple.Proto.SigningInput;

                /**
                 * Gets the default type url for SigningInput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SigningOutput. */
            interface ISigningOutput {

                /** SigningOutput encoded */
                encoded?: (Uint8Array|null);

                /** SigningOutput error */
                error?: (TW.Common.Proto.SigningError|null);

                /** SigningOutput errorMessage */
                errorMessage?: (string|null);
            }

            /** Represents a SigningOutput. */
            class SigningOutput implements ISigningOutput {

                /**
                 * Constructs a new SigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ripple.Proto.ISigningOutput);

                /** SigningOutput encoded. */
                public encoded: Uint8Array;

                /** SigningOutput error. */
                public error: TW.Common.Proto.SigningError;

                /** SigningOutput errorMessage. */
                public errorMessage: string;

                /**
                 * Creates a new SigningOutput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningOutput instance
                 */
                public static create(properties?: TW.Ripple.Proto.ISigningOutput): TW.Ripple.Proto.SigningOutput;

                /**
                 * Encodes the specified SigningOutput message. Does not implicitly {@link TW.Ripple.Proto.SigningOutput.verify|verify} messages.
                 * @param message SigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Ripple.Proto.ISigningOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ripple.Proto.SigningOutput;

                /**
                 * Gets the default type url for SigningOutput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Namespace Solana. */
    namespace Solana {

        /** Namespace Proto. */
        namespace Proto {

            /** Properties of a Transfer. */
            interface ITransfer {

                /** Transfer recipient */
                recipient?: (string|null);

                /** Transfer value */
                value?: (number|null);

                /** Transfer memo */
                memo?: (string|null);

                /** Transfer references */
                references?: (string[]|null);
            }

            /** Represents a Transfer. */
            class Transfer implements ITransfer {

                /**
                 * Constructs a new Transfer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.ITransfer);

                /** Transfer recipient. */
                public recipient: string;

                /** Transfer value. */
                public value: number;

                /** Transfer memo. */
                public memo: string;

                /** Transfer references. */
                public references: string[];

                /**
                 * Creates a new Transfer instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Transfer instance
                 */
                public static create(properties?: TW.Solana.Proto.ITransfer): TW.Solana.Proto.Transfer;

                /**
                 * Encodes the specified Transfer message. Does not implicitly {@link TW.Solana.Proto.Transfer.verify|verify} messages.
                 * @param message Transfer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.ITransfer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Transfer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Transfer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.Transfer;

                /**
                 * Gets the default type url for Transfer
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DelegateStake. */
            interface IDelegateStake {

                /** DelegateStake validatorPubkey */
                validatorPubkey?: (string|null);

                /** DelegateStake value */
                value?: (number|null);

                /** DelegateStake stakeAccount */
                stakeAccount?: (string|null);
            }

            /** Represents a DelegateStake. */
            class DelegateStake implements IDelegateStake {

                /**
                 * Constructs a new DelegateStake.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.IDelegateStake);

                /** DelegateStake validatorPubkey. */
                public validatorPubkey: string;

                /** DelegateStake value. */
                public value: number;

                /** DelegateStake stakeAccount. */
                public stakeAccount: string;

                /**
                 * Creates a new DelegateStake instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DelegateStake instance
                 */
                public static create(properties?: TW.Solana.Proto.IDelegateStake): TW.Solana.Proto.DelegateStake;

                /**
                 * Encodes the specified DelegateStake message. Does not implicitly {@link TW.Solana.Proto.DelegateStake.verify|verify} messages.
                 * @param message DelegateStake message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.IDelegateStake, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DelegateStake message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DelegateStake
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.DelegateStake;

                /**
                 * Gets the default type url for DelegateStake
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeactivateStake. */
            interface IDeactivateStake {

                /** DeactivateStake stakeAccount */
                stakeAccount?: (string|null);
            }

            /** Represents a DeactivateStake. */
            class DeactivateStake implements IDeactivateStake {

                /**
                 * Constructs a new DeactivateStake.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.IDeactivateStake);

                /** DeactivateStake stakeAccount. */
                public stakeAccount: string;

                /**
                 * Creates a new DeactivateStake instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeactivateStake instance
                 */
                public static create(properties?: TW.Solana.Proto.IDeactivateStake): TW.Solana.Proto.DeactivateStake;

                /**
                 * Encodes the specified DeactivateStake message. Does not implicitly {@link TW.Solana.Proto.DeactivateStake.verify|verify} messages.
                 * @param message DeactivateStake message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.IDeactivateStake, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeactivateStake message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeactivateStake
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.DeactivateStake;

                /**
                 * Gets the default type url for DeactivateStake
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeactivateAllStake. */
            interface IDeactivateAllStake {

                /** DeactivateAllStake stakeAccounts */
                stakeAccounts?: (string[]|null);
            }

            /** Represents a DeactivateAllStake. */
            class DeactivateAllStake implements IDeactivateAllStake {

                /**
                 * Constructs a new DeactivateAllStake.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.IDeactivateAllStake);

                /** DeactivateAllStake stakeAccounts. */
                public stakeAccounts: string[];

                /**
                 * Creates a new DeactivateAllStake instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeactivateAllStake instance
                 */
                public static create(properties?: TW.Solana.Proto.IDeactivateAllStake): TW.Solana.Proto.DeactivateAllStake;

                /**
                 * Encodes the specified DeactivateAllStake message. Does not implicitly {@link TW.Solana.Proto.DeactivateAllStake.verify|verify} messages.
                 * @param message DeactivateAllStake message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.IDeactivateAllStake, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeactivateAllStake message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeactivateAllStake
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.DeactivateAllStake;

                /**
                 * Gets the default type url for DeactivateAllStake
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a WithdrawStake. */
            interface IWithdrawStake {

                /** WithdrawStake stakeAccount */
                stakeAccount?: (string|null);

                /** WithdrawStake value */
                value?: (number|null);
            }

            /** Represents a WithdrawStake. */
            class WithdrawStake implements IWithdrawStake {

                /**
                 * Constructs a new WithdrawStake.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.IWithdrawStake);

                /** WithdrawStake stakeAccount. */
                public stakeAccount: string;

                /** WithdrawStake value. */
                public value: number;

                /**
                 * Creates a new WithdrawStake instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WithdrawStake instance
                 */
                public static create(properties?: TW.Solana.Proto.IWithdrawStake): TW.Solana.Proto.WithdrawStake;

                /**
                 * Encodes the specified WithdrawStake message. Does not implicitly {@link TW.Solana.Proto.WithdrawStake.verify|verify} messages.
                 * @param message WithdrawStake message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.IWithdrawStake, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WithdrawStake message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WithdrawStake
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.WithdrawStake;

                /**
                 * Gets the default type url for WithdrawStake
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a StakeAccountValue. */
            interface IStakeAccountValue {

                /** StakeAccountValue stakeAccount */
                stakeAccount?: (string|null);

                /** StakeAccountValue value */
                value?: (number|null);
            }

            /** Represents a StakeAccountValue. */
            class StakeAccountValue implements IStakeAccountValue {

                /**
                 * Constructs a new StakeAccountValue.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.IStakeAccountValue);

                /** StakeAccountValue stakeAccount. */
                public stakeAccount: string;

                /** StakeAccountValue value. */
                public value: number;

                /**
                 * Creates a new StakeAccountValue instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StakeAccountValue instance
                 */
                public static create(properties?: TW.Solana.Proto.IStakeAccountValue): TW.Solana.Proto.StakeAccountValue;

                /**
                 * Encodes the specified StakeAccountValue message. Does not implicitly {@link TW.Solana.Proto.StakeAccountValue.verify|verify} messages.
                 * @param message StakeAccountValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.IStakeAccountValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StakeAccountValue message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StakeAccountValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.StakeAccountValue;

                /**
                 * Gets the default type url for StakeAccountValue
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a WithdrawAllStake. */
            interface IWithdrawAllStake {

                /** WithdrawAllStake stakeAccounts */
                stakeAccounts?: (TW.Solana.Proto.IStakeAccountValue[]|null);
            }

            /** Represents a WithdrawAllStake. */
            class WithdrawAllStake implements IWithdrawAllStake {

                /**
                 * Constructs a new WithdrawAllStake.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.IWithdrawAllStake);

                /** WithdrawAllStake stakeAccounts. */
                public stakeAccounts: TW.Solana.Proto.IStakeAccountValue[];

                /**
                 * Creates a new WithdrawAllStake instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WithdrawAllStake instance
                 */
                public static create(properties?: TW.Solana.Proto.IWithdrawAllStake): TW.Solana.Proto.WithdrawAllStake;

                /**
                 * Encodes the specified WithdrawAllStake message. Does not implicitly {@link TW.Solana.Proto.WithdrawAllStake.verify|verify} messages.
                 * @param message WithdrawAllStake message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.IWithdrawAllStake, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WithdrawAllStake message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WithdrawAllStake
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.WithdrawAllStake;

                /**
                 * Gets the default type url for WithdrawAllStake
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** TokenProgramId enum. */
            enum TokenProgramId {
                TokenProgram = 0,
                Token2022Program = 1
            }

            /** Properties of a CreateTokenAccount. */
            interface ICreateTokenAccount {

                /** CreateTokenAccount mainAddress */
                mainAddress?: (string|null);

                /** CreateTokenAccount tokenMintAddress */
                tokenMintAddress?: (string|null);

                /** CreateTokenAccount tokenAddress */
                tokenAddress?: (string|null);

                /** CreateTokenAccount tokenProgramId */
                tokenProgramId?: (TW.Solana.Proto.TokenProgramId|null);
            }

            /** Represents a CreateTokenAccount. */
            class CreateTokenAccount implements ICreateTokenAccount {

                /**
                 * Constructs a new CreateTokenAccount.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.ICreateTokenAccount);

                /** CreateTokenAccount mainAddress. */
                public mainAddress: string;

                /** CreateTokenAccount tokenMintAddress. */
                public tokenMintAddress: string;

                /** CreateTokenAccount tokenAddress. */
                public tokenAddress: string;

                /** CreateTokenAccount tokenProgramId. */
                public tokenProgramId: TW.Solana.Proto.TokenProgramId;

                /**
                 * Creates a new CreateTokenAccount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateTokenAccount instance
                 */
                public static create(properties?: TW.Solana.Proto.ICreateTokenAccount): TW.Solana.Proto.CreateTokenAccount;

                /**
                 * Encodes the specified CreateTokenAccount message. Does not implicitly {@link TW.Solana.Proto.CreateTokenAccount.verify|verify} messages.
                 * @param message CreateTokenAccount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.ICreateTokenAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateTokenAccount message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateTokenAccount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.CreateTokenAccount;

                /**
                 * Gets the default type url for CreateTokenAccount
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TokenTransfer. */
            interface ITokenTransfer {

                /** TokenTransfer tokenMintAddress */
                tokenMintAddress?: (string|null);

                /** TokenTransfer senderTokenAddress */
                senderTokenAddress?: (string|null);

                /** TokenTransfer recipientTokenAddress */
                recipientTokenAddress?: (string|null);

                /** TokenTransfer amount */
                amount?: (number|null);

                /** TokenTransfer decimals */
                decimals?: (number|null);

                /** TokenTransfer memo */
                memo?: (string|null);

                /** TokenTransfer references */
                references?: (string[]|null);

                /** TokenTransfer tokenProgramId */
                tokenProgramId?: (TW.Solana.Proto.TokenProgramId|null);
            }

            /** Represents a TokenTransfer. */
            class TokenTransfer implements ITokenTransfer {

                /**
                 * Constructs a new TokenTransfer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.ITokenTransfer);

                /** TokenTransfer tokenMintAddress. */
                public tokenMintAddress: string;

                /** TokenTransfer senderTokenAddress. */
                public senderTokenAddress: string;

                /** TokenTransfer recipientTokenAddress. */
                public recipientTokenAddress: string;

                /** TokenTransfer amount. */
                public amount: number;

                /** TokenTransfer decimals. */
                public decimals: number;

                /** TokenTransfer memo. */
                public memo: string;

                /** TokenTransfer references. */
                public references: string[];

                /** TokenTransfer tokenProgramId. */
                public tokenProgramId: TW.Solana.Proto.TokenProgramId;

                /**
                 * Creates a new TokenTransfer instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TokenTransfer instance
                 */
                public static create(properties?: TW.Solana.Proto.ITokenTransfer): TW.Solana.Proto.TokenTransfer;

                /**
                 * Encodes the specified TokenTransfer message. Does not implicitly {@link TW.Solana.Proto.TokenTransfer.verify|verify} messages.
                 * @param message TokenTransfer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.ITokenTransfer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TokenTransfer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TokenTransfer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.TokenTransfer;

                /**
                 * Gets the default type url for TokenTransfer
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateAndTransferToken. */
            interface ICreateAndTransferToken {

                /** CreateAndTransferToken recipientMainAddress */
                recipientMainAddress?: (string|null);

                /** CreateAndTransferToken tokenMintAddress */
                tokenMintAddress?: (string|null);

                /** CreateAndTransferToken recipientTokenAddress */
                recipientTokenAddress?: (string|null);

                /** CreateAndTransferToken senderTokenAddress */
                senderTokenAddress?: (string|null);

                /** CreateAndTransferToken amount */
                amount?: (number|null);

                /** CreateAndTransferToken decimals */
                decimals?: (number|null);

                /** CreateAndTransferToken memo */
                memo?: (string|null);

                /** CreateAndTransferToken references */
                references?: (string[]|null);

                /** CreateAndTransferToken tokenProgramId */
                tokenProgramId?: (TW.Solana.Proto.TokenProgramId|null);
            }

            /** Represents a CreateAndTransferToken. */
            class CreateAndTransferToken implements ICreateAndTransferToken {

                /**
                 * Constructs a new CreateAndTransferToken.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.ICreateAndTransferToken);

                /** CreateAndTransferToken recipientMainAddress. */
                public recipientMainAddress: string;

                /** CreateAndTransferToken tokenMintAddress. */
                public tokenMintAddress: string;

                /** CreateAndTransferToken recipientTokenAddress. */
                public recipientTokenAddress: string;

                /** CreateAndTransferToken senderTokenAddress. */
                public senderTokenAddress: string;

                /** CreateAndTransferToken amount. */
                public amount: number;

                /** CreateAndTransferToken decimals. */
                public decimals: number;

                /** CreateAndTransferToken memo. */
                public memo: string;

                /** CreateAndTransferToken references. */
                public references: string[];

                /** CreateAndTransferToken tokenProgramId. */
                public tokenProgramId: TW.Solana.Proto.TokenProgramId;

                /**
                 * Creates a new CreateAndTransferToken instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateAndTransferToken instance
                 */
                public static create(properties?: TW.Solana.Proto.ICreateAndTransferToken): TW.Solana.Proto.CreateAndTransferToken;

                /**
                 * Encodes the specified CreateAndTransferToken message. Does not implicitly {@link TW.Solana.Proto.CreateAndTransferToken.verify|verify} messages.
                 * @param message CreateAndTransferToken message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.ICreateAndTransferToken, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateAndTransferToken message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateAndTransferToken
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.CreateAndTransferToken;

                /**
                 * Gets the default type url for CreateAndTransferToken
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TokenTransferToFeePayer. */
            interface ITokenTransferToFeePayer {

                /** TokenTransferToFeePayer feeTokenMintAddress */
                feeTokenMintAddress?: (string|null);

                /** TokenTransferToFeePayer feeRecipientTokenAddress */
                feeRecipientTokenAddress?: (string|null);

                /** TokenTransferToFeePayer feeAmount */
                feeAmount?: (number|null);

                /** TokenTransferToFeePayer feeSenderTokenAddress */
                feeSenderTokenAddress?: (string|null);

                /** TokenTransferToFeePayer feeDecimals */
                feeDecimals?: (number|null);

                /** TokenTransferToFeePayer feeTokenProgramId */
                feeTokenProgramId?: (TW.Solana.Proto.TokenProgramId|null);
            }

            /** Represents a TokenTransferToFeePayer. */
            class TokenTransferToFeePayer implements ITokenTransferToFeePayer {

                /**
                 * Constructs a new TokenTransferToFeePayer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.ITokenTransferToFeePayer);

                /** TokenTransferToFeePayer feeTokenMintAddress. */
                public feeTokenMintAddress: string;

                /** TokenTransferToFeePayer feeRecipientTokenAddress. */
                public feeRecipientTokenAddress: string;

                /** TokenTransferToFeePayer feeAmount. */
                public feeAmount: number;

                /** TokenTransferToFeePayer feeSenderTokenAddress. */
                public feeSenderTokenAddress: string;

                /** TokenTransferToFeePayer feeDecimals. */
                public feeDecimals: number;

                /** TokenTransferToFeePayer feeTokenProgramId. */
                public feeTokenProgramId: TW.Solana.Proto.TokenProgramId;

                /**
                 * Creates a new TokenTransferToFeePayer instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TokenTransferToFeePayer instance
                 */
                public static create(properties?: TW.Solana.Proto.ITokenTransferToFeePayer): TW.Solana.Proto.TokenTransferToFeePayer;

                /**
                 * Encodes the specified TokenTransferToFeePayer message. Does not implicitly {@link TW.Solana.Proto.TokenTransferToFeePayer.verify|verify} messages.
                 * @param message TokenTransferToFeePayer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.ITokenTransferToFeePayer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TokenTransferToFeePayer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TokenTransferToFeePayer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.TokenTransferToFeePayer;

                /**
                 * Gets the default type url for TokenTransferToFeePayer
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateNonceAccount. */
            interface ICreateNonceAccount {

                /** CreateNonceAccount nonceAccount */
                nonceAccount?: (string|null);

                /** CreateNonceAccount rent */
                rent?: (number|null);

                /** CreateNonceAccount nonceAccountPrivateKey */
                nonceAccountPrivateKey?: (Uint8Array|null);
            }

            /** Represents a CreateNonceAccount. */
            class CreateNonceAccount implements ICreateNonceAccount {

                /**
                 * Constructs a new CreateNonceAccount.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.ICreateNonceAccount);

                /** CreateNonceAccount nonceAccount. */
                public nonceAccount: string;

                /** CreateNonceAccount rent. */
                public rent: number;

                /** CreateNonceAccount nonceAccountPrivateKey. */
                public nonceAccountPrivateKey: Uint8Array;

                /**
                 * Creates a new CreateNonceAccount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateNonceAccount instance
                 */
                public static create(properties?: TW.Solana.Proto.ICreateNonceAccount): TW.Solana.Proto.CreateNonceAccount;

                /**
                 * Encodes the specified CreateNonceAccount message. Does not implicitly {@link TW.Solana.Proto.CreateNonceAccount.verify|verify} messages.
                 * @param message CreateNonceAccount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.ICreateNonceAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateNonceAccount message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateNonceAccount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.CreateNonceAccount;

                /**
                 * Gets the default type url for CreateNonceAccount
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a WithdrawNonceAccount. */
            interface IWithdrawNonceAccount {

                /** WithdrawNonceAccount nonceAccount */
                nonceAccount?: (string|null);

                /** WithdrawNonceAccount recipient */
                recipient?: (string|null);

                /** WithdrawNonceAccount value */
                value?: (number|null);
            }

            /** Represents a WithdrawNonceAccount. */
            class WithdrawNonceAccount implements IWithdrawNonceAccount {

                /**
                 * Constructs a new WithdrawNonceAccount.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.IWithdrawNonceAccount);

                /** WithdrawNonceAccount nonceAccount. */
                public nonceAccount: string;

                /** WithdrawNonceAccount recipient. */
                public recipient: string;

                /** WithdrawNonceAccount value. */
                public value: number;

                /**
                 * Creates a new WithdrawNonceAccount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WithdrawNonceAccount instance
                 */
                public static create(properties?: TW.Solana.Proto.IWithdrawNonceAccount): TW.Solana.Proto.WithdrawNonceAccount;

                /**
                 * Encodes the specified WithdrawNonceAccount message. Does not implicitly {@link TW.Solana.Proto.WithdrawNonceAccount.verify|verify} messages.
                 * @param message WithdrawNonceAccount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.IWithdrawNonceAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WithdrawNonceAccount message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WithdrawNonceAccount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.WithdrawNonceAccount;

                /**
                 * Gets the default type url for WithdrawNonceAccount
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AdvanceNonceAccount. */
            interface IAdvanceNonceAccount {

                /** AdvanceNonceAccount nonceAccount */
                nonceAccount?: (string|null);
            }

            /** Represents an AdvanceNonceAccount. */
            class AdvanceNonceAccount implements IAdvanceNonceAccount {

                /**
                 * Constructs a new AdvanceNonceAccount.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.IAdvanceNonceAccount);

                /** AdvanceNonceAccount nonceAccount. */
                public nonceAccount: string;

                /**
                 * Creates a new AdvanceNonceAccount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AdvanceNonceAccount instance
                 */
                public static create(properties?: TW.Solana.Proto.IAdvanceNonceAccount): TW.Solana.Proto.AdvanceNonceAccount;

                /**
                 * Encodes the specified AdvanceNonceAccount message. Does not implicitly {@link TW.Solana.Proto.AdvanceNonceAccount.verify|verify} messages.
                 * @param message AdvanceNonceAccount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.IAdvanceNonceAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AdvanceNonceAccount message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AdvanceNonceAccount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.AdvanceNonceAccount;

                /**
                 * Gets the default type url for AdvanceNonceAccount
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PubkeySignature. */
            interface IPubkeySignature {

                /** PubkeySignature pubkey */
                pubkey?: (string|null);

                /** PubkeySignature signature */
                signature?: (string|null);
            }

            /** Represents a PubkeySignature. */
            class PubkeySignature implements IPubkeySignature {

                /**
                 * Constructs a new PubkeySignature.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.IPubkeySignature);

                /** PubkeySignature pubkey. */
                public pubkey: string;

                /** PubkeySignature signature. */
                public signature: string;

                /**
                 * Creates a new PubkeySignature instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PubkeySignature instance
                 */
                public static create(properties?: TW.Solana.Proto.IPubkeySignature): TW.Solana.Proto.PubkeySignature;

                /**
                 * Encodes the specified PubkeySignature message. Does not implicitly {@link TW.Solana.Proto.PubkeySignature.verify|verify} messages.
                 * @param message PubkeySignature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.IPubkeySignature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PubkeySignature message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PubkeySignature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.PubkeySignature;

                /**
                 * Gets the default type url for PubkeySignature
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RawMessage. */
            interface IRawMessage {

                /** RawMessage signatures */
                signatures?: (TW.Solana.Proto.IPubkeySignature[]|null);

                /** RawMessage legacy */
                legacy?: (TW.Solana.Proto.RawMessage.IMessageLegacy|null);

                /** RawMessage v0 */
                v0?: (TW.Solana.Proto.RawMessage.IMessageV0|null);
            }

            /** Represents a RawMessage. */
            class RawMessage implements IRawMessage {

                /**
                 * Constructs a new RawMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.IRawMessage);

                /** RawMessage signatures. */
                public signatures: TW.Solana.Proto.IPubkeySignature[];

                /** RawMessage legacy. */
                public legacy?: (TW.Solana.Proto.RawMessage.IMessageLegacy|null);

                /** RawMessage v0. */
                public v0?: (TW.Solana.Proto.RawMessage.IMessageV0|null);

                /** RawMessage message. */
                public message?: ("legacy"|"v0");

                /**
                 * Creates a new RawMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RawMessage instance
                 */
                public static create(properties?: TW.Solana.Proto.IRawMessage): TW.Solana.Proto.RawMessage;

                /**
                 * Encodes the specified RawMessage message. Does not implicitly {@link TW.Solana.Proto.RawMessage.verify|verify} messages.
                 * @param message RawMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.IRawMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RawMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RawMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.RawMessage;

                /**
                 * Gets the default type url for RawMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace RawMessage {

                /** Properties of a MessageHeader. */
                interface IMessageHeader {

                    /** MessageHeader numRequiredSignatures */
                    numRequiredSignatures?: (number|null);

                    /** MessageHeader numReadonlySignedAccounts */
                    numReadonlySignedAccounts?: (number|null);

                    /** MessageHeader numReadonlyUnsignedAccounts */
                    numReadonlyUnsignedAccounts?: (number|null);
                }

                /** Represents a MessageHeader. */
                class MessageHeader implements IMessageHeader {

                    /**
                     * Constructs a new MessageHeader.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Solana.Proto.RawMessage.IMessageHeader);

                    /** MessageHeader numRequiredSignatures. */
                    public numRequiredSignatures: number;

                    /** MessageHeader numReadonlySignedAccounts. */
                    public numReadonlySignedAccounts: number;

                    /** MessageHeader numReadonlyUnsignedAccounts. */
                    public numReadonlyUnsignedAccounts: number;

                    /**
                     * Creates a new MessageHeader instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MessageHeader instance
                     */
                    public static create(properties?: TW.Solana.Proto.RawMessage.IMessageHeader): TW.Solana.Proto.RawMessage.MessageHeader;

                    /**
                     * Encodes the specified MessageHeader message. Does not implicitly {@link TW.Solana.Proto.RawMessage.MessageHeader.verify|verify} messages.
                     * @param message MessageHeader message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Solana.Proto.RawMessage.IMessageHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MessageHeader message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MessageHeader
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.RawMessage.MessageHeader;

                    /**
                     * Gets the default type url for MessageHeader
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Instruction. */
                interface IInstruction {

                    /** Instruction programId */
                    programId?: (number|null);

                    /** Instruction accounts */
                    accounts?: (number[]|null);

                    /** Instruction programData */
                    programData?: (Uint8Array|null);
                }

                /** Represents an Instruction. */
                class Instruction implements IInstruction {

                    /**
                     * Constructs a new Instruction.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Solana.Proto.RawMessage.IInstruction);

                    /** Instruction programId. */
                    public programId: number;

                    /** Instruction accounts. */
                    public accounts: number[];

                    /** Instruction programData. */
                    public programData: Uint8Array;

                    /**
                     * Creates a new Instruction instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Instruction instance
                     */
                    public static create(properties?: TW.Solana.Proto.RawMessage.IInstruction): TW.Solana.Proto.RawMessage.Instruction;

                    /**
                     * Encodes the specified Instruction message. Does not implicitly {@link TW.Solana.Proto.RawMessage.Instruction.verify|verify} messages.
                     * @param message Instruction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Solana.Proto.RawMessage.IInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Instruction message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Instruction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.RawMessage.Instruction;

                    /**
                     * Gets the default type url for Instruction
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MessageAddressTableLookup. */
                interface IMessageAddressTableLookup {

                    /** MessageAddressTableLookup accountKey */
                    accountKey?: (string|null);

                    /** MessageAddressTableLookup writableIndexes */
                    writableIndexes?: (number[]|null);

                    /** MessageAddressTableLookup readonlyIndexes */
                    readonlyIndexes?: (number[]|null);
                }

                /** Represents a MessageAddressTableLookup. */
                class MessageAddressTableLookup implements IMessageAddressTableLookup {

                    /**
                     * Constructs a new MessageAddressTableLookup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Solana.Proto.RawMessage.IMessageAddressTableLookup);

                    /** MessageAddressTableLookup accountKey. */
                    public accountKey: string;

                    /** MessageAddressTableLookup writableIndexes. */
                    public writableIndexes: number[];

                    /** MessageAddressTableLookup readonlyIndexes. */
                    public readonlyIndexes: number[];

                    /**
                     * Creates a new MessageAddressTableLookup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MessageAddressTableLookup instance
                     */
                    public static create(properties?: TW.Solana.Proto.RawMessage.IMessageAddressTableLookup): TW.Solana.Proto.RawMessage.MessageAddressTableLookup;

                    /**
                     * Encodes the specified MessageAddressTableLookup message. Does not implicitly {@link TW.Solana.Proto.RawMessage.MessageAddressTableLookup.verify|verify} messages.
                     * @param message MessageAddressTableLookup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Solana.Proto.RawMessage.IMessageAddressTableLookup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MessageAddressTableLookup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MessageAddressTableLookup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.RawMessage.MessageAddressTableLookup;

                    /**
                     * Gets the default type url for MessageAddressTableLookup
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MessageLegacy. */
                interface IMessageLegacy {

                    /** MessageLegacy header */
                    header?: (TW.Solana.Proto.RawMessage.IMessageHeader|null);

                    /** MessageLegacy accountKeys */
                    accountKeys?: (string[]|null);

                    /** MessageLegacy recentBlockhash */
                    recentBlockhash?: (string|null);

                    /** MessageLegacy instructions */
                    instructions?: (TW.Solana.Proto.RawMessage.IInstruction[]|null);
                }

                /** Represents a MessageLegacy. */
                class MessageLegacy implements IMessageLegacy {

                    /**
                     * Constructs a new MessageLegacy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Solana.Proto.RawMessage.IMessageLegacy);

                    /** MessageLegacy header. */
                    public header?: (TW.Solana.Proto.RawMessage.IMessageHeader|null);

                    /** MessageLegacy accountKeys. */
                    public accountKeys: string[];

                    /** MessageLegacy recentBlockhash. */
                    public recentBlockhash: string;

                    /** MessageLegacy instructions. */
                    public instructions: TW.Solana.Proto.RawMessage.IInstruction[];

                    /**
                     * Creates a new MessageLegacy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MessageLegacy instance
                     */
                    public static create(properties?: TW.Solana.Proto.RawMessage.IMessageLegacy): TW.Solana.Proto.RawMessage.MessageLegacy;

                    /**
                     * Encodes the specified MessageLegacy message. Does not implicitly {@link TW.Solana.Proto.RawMessage.MessageLegacy.verify|verify} messages.
                     * @param message MessageLegacy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Solana.Proto.RawMessage.IMessageLegacy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MessageLegacy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MessageLegacy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.RawMessage.MessageLegacy;

                    /**
                     * Gets the default type url for MessageLegacy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MessageV0. */
                interface IMessageV0 {

                    /** MessageV0 header */
                    header?: (TW.Solana.Proto.RawMessage.IMessageHeader|null);

                    /** MessageV0 accountKeys */
                    accountKeys?: (string[]|null);

                    /** MessageV0 recentBlockhash */
                    recentBlockhash?: (string|null);

                    /** MessageV0 instructions */
                    instructions?: (TW.Solana.Proto.RawMessage.IInstruction[]|null);

                    /** MessageV0 addressTableLookups */
                    addressTableLookups?: (TW.Solana.Proto.RawMessage.IMessageAddressTableLookup[]|null);
                }

                /** Represents a MessageV0. */
                class MessageV0 implements IMessageV0 {

                    /**
                     * Constructs a new MessageV0.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Solana.Proto.RawMessage.IMessageV0);

                    /** MessageV0 header. */
                    public header?: (TW.Solana.Proto.RawMessage.IMessageHeader|null);

                    /** MessageV0 accountKeys. */
                    public accountKeys: string[];

                    /** MessageV0 recentBlockhash. */
                    public recentBlockhash: string;

                    /** MessageV0 instructions. */
                    public instructions: TW.Solana.Proto.RawMessage.IInstruction[];

                    /** MessageV0 addressTableLookups. */
                    public addressTableLookups: TW.Solana.Proto.RawMessage.IMessageAddressTableLookup[];

                    /**
                     * Creates a new MessageV0 instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MessageV0 instance
                     */
                    public static create(properties?: TW.Solana.Proto.RawMessage.IMessageV0): TW.Solana.Proto.RawMessage.MessageV0;

                    /**
                     * Encodes the specified MessageV0 message. Does not implicitly {@link TW.Solana.Proto.RawMessage.MessageV0.verify|verify} messages.
                     * @param message MessageV0 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Solana.Proto.RawMessage.IMessageV0, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MessageV0 message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MessageV0
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.RawMessage.MessageV0;

                    /**
                     * Gets the default type url for MessageV0
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a DecodingTransactionOutput. */
            interface IDecodingTransactionOutput {

                /** DecodingTransactionOutput transaction */
                transaction?: (TW.Solana.Proto.IRawMessage|null);

                /** DecodingTransactionOutput error */
                error?: (TW.Common.Proto.SigningError|null);

                /** DecodingTransactionOutput errorMessage */
                errorMessage?: (string|null);
            }

            /** Represents a DecodingTransactionOutput. */
            class DecodingTransactionOutput implements IDecodingTransactionOutput {

                /**
                 * Constructs a new DecodingTransactionOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.IDecodingTransactionOutput);

                /** DecodingTransactionOutput transaction. */
                public transaction?: (TW.Solana.Proto.IRawMessage|null);

                /** DecodingTransactionOutput error. */
                public error: TW.Common.Proto.SigningError;

                /** DecodingTransactionOutput errorMessage. */
                public errorMessage: string;

                /**
                 * Creates a new DecodingTransactionOutput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DecodingTransactionOutput instance
                 */
                public static create(properties?: TW.Solana.Proto.IDecodingTransactionOutput): TW.Solana.Proto.DecodingTransactionOutput;

                /**
                 * Encodes the specified DecodingTransactionOutput message. Does not implicitly {@link TW.Solana.Proto.DecodingTransactionOutput.verify|verify} messages.
                 * @param message DecodingTransactionOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.IDecodingTransactionOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DecodingTransactionOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DecodingTransactionOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.DecodingTransactionOutput;

                /**
                 * Gets the default type url for DecodingTransactionOutput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Encoding enum. */
            enum Encoding {
                Base58 = 0,
                Base64 = 1
            }

            /** Properties of a PriorityFeePrice. */
            interface IPriorityFeePrice {

                /** PriorityFeePrice price */
                price?: (number|null);
            }

            /** Represents a PriorityFeePrice. */
            class PriorityFeePrice implements IPriorityFeePrice {

                /**
                 * Constructs a new PriorityFeePrice.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.IPriorityFeePrice);

                /** PriorityFeePrice price. */
                public price: number;

                /**
                 * Creates a new PriorityFeePrice instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PriorityFeePrice instance
                 */
                public static create(properties?: TW.Solana.Proto.IPriorityFeePrice): TW.Solana.Proto.PriorityFeePrice;

                /**
                 * Encodes the specified PriorityFeePrice message. Does not implicitly {@link TW.Solana.Proto.PriorityFeePrice.verify|verify} messages.
                 * @param message PriorityFeePrice message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.IPriorityFeePrice, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PriorityFeePrice message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PriorityFeePrice
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.PriorityFeePrice;

                /**
                 * Gets the default type url for PriorityFeePrice
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PriorityFeeLimit. */
            interface IPriorityFeeLimit {

                /** PriorityFeeLimit limit */
                limit?: (number|null);
            }

            /** Represents a PriorityFeeLimit. */
            class PriorityFeeLimit implements IPriorityFeeLimit {

                /**
                 * Constructs a new PriorityFeeLimit.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.IPriorityFeeLimit);

                /** PriorityFeeLimit limit. */
                public limit: number;

                /**
                 * Creates a new PriorityFeeLimit instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PriorityFeeLimit instance
                 */
                public static create(properties?: TW.Solana.Proto.IPriorityFeeLimit): TW.Solana.Proto.PriorityFeeLimit;

                /**
                 * Encodes the specified PriorityFeeLimit message. Does not implicitly {@link TW.Solana.Proto.PriorityFeeLimit.verify|verify} messages.
                 * @param message PriorityFeeLimit message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.IPriorityFeeLimit, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PriorityFeeLimit message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PriorityFeeLimit
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.PriorityFeeLimit;

                /**
                 * Gets the default type url for PriorityFeeLimit
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SigningInput. */
            interface ISigningInput {

                /** SigningInput privateKey */
                privateKey?: (Uint8Array|null);

                /** SigningInput recentBlockhash */
                recentBlockhash?: (string|null);

                /** SigningInput v0Msg */
                v0Msg?: (boolean|null);

                /** SigningInput transferTransaction */
                transferTransaction?: (TW.Solana.Proto.ITransfer|null);

                /** SigningInput delegateStakeTransaction */
                delegateStakeTransaction?: (TW.Solana.Proto.IDelegateStake|null);

                /** SigningInput deactivateStakeTransaction */
                deactivateStakeTransaction?: (TW.Solana.Proto.IDeactivateStake|null);

                /** SigningInput deactivateAllStakeTransaction */
                deactivateAllStakeTransaction?: (TW.Solana.Proto.IDeactivateAllStake|null);

                /** SigningInput withdrawTransaction */
                withdrawTransaction?: (TW.Solana.Proto.IWithdrawStake|null);

                /** SigningInput withdrawAllTransaction */
                withdrawAllTransaction?: (TW.Solana.Proto.IWithdrawAllStake|null);

                /** SigningInput createTokenAccountTransaction */
                createTokenAccountTransaction?: (TW.Solana.Proto.ICreateTokenAccount|null);

                /** SigningInput tokenTransferTransaction */
                tokenTransferTransaction?: (TW.Solana.Proto.ITokenTransfer|null);

                /** SigningInput createAndTransferTokenTransaction */
                createAndTransferTokenTransaction?: (TW.Solana.Proto.ICreateAndTransferToken|null);

                /** SigningInput createNonceAccount */
                createNonceAccount?: (TW.Solana.Proto.ICreateNonceAccount|null);

                /** SigningInput withdrawNonceAccount */
                withdrawNonceAccount?: (TW.Solana.Proto.IWithdrawNonceAccount|null);

                /** SigningInput advanceNonceAccount */
                advanceNonceAccount?: (TW.Solana.Proto.IAdvanceNonceAccount|null);

                /** SigningInput sender */
                sender?: (string|null);

                /** SigningInput nonceAccount */
                nonceAccount?: (string|null);

                /** SigningInput feePayerPrivateKey */
                feePayerPrivateKey?: (Uint8Array|null);

                /** SigningInput feePayer */
                feePayer?: (string|null);

                /** SigningInput rawMessage */
                rawMessage?: (TW.Solana.Proto.IRawMessage|null);

                /** SigningInput txEncoding */
                txEncoding?: (TW.Solana.Proto.Encoding|null);

                /** SigningInput priorityFeePrice */
                priorityFeePrice?: (TW.Solana.Proto.IPriorityFeePrice|null);

                /** SigningInput priorityFeeLimit */
                priorityFeeLimit?: (TW.Solana.Proto.IPriorityFeeLimit|null);

                /** SigningInput tokenTransferToFeePayer */
                tokenTransferToFeePayer?: (TW.Solana.Proto.ITokenTransferToFeePayer|null);

                /** SigningInput transferToFeePayer */
                transferToFeePayer?: (TW.Solana.Proto.ITransfer|null);
            }

            /** Represents a SigningInput. */
            class SigningInput implements ISigningInput {

                /**
                 * Constructs a new SigningInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.ISigningInput);

                /** SigningInput privateKey. */
                public privateKey: Uint8Array;

                /** SigningInput recentBlockhash. */
                public recentBlockhash: string;

                /** SigningInput v0Msg. */
                public v0Msg: boolean;

                /** SigningInput transferTransaction. */
                public transferTransaction?: (TW.Solana.Proto.ITransfer|null);

                /** SigningInput delegateStakeTransaction. */
                public delegateStakeTransaction?: (TW.Solana.Proto.IDelegateStake|null);

                /** SigningInput deactivateStakeTransaction. */
                public deactivateStakeTransaction?: (TW.Solana.Proto.IDeactivateStake|null);

                /** SigningInput deactivateAllStakeTransaction. */
                public deactivateAllStakeTransaction?: (TW.Solana.Proto.IDeactivateAllStake|null);

                /** SigningInput withdrawTransaction. */
                public withdrawTransaction?: (TW.Solana.Proto.IWithdrawStake|null);

                /** SigningInput withdrawAllTransaction. */
                public withdrawAllTransaction?: (TW.Solana.Proto.IWithdrawAllStake|null);

                /** SigningInput createTokenAccountTransaction. */
                public createTokenAccountTransaction?: (TW.Solana.Proto.ICreateTokenAccount|null);

                /** SigningInput tokenTransferTransaction. */
                public tokenTransferTransaction?: (TW.Solana.Proto.ITokenTransfer|null);

                /** SigningInput createAndTransferTokenTransaction. */
                public createAndTransferTokenTransaction?: (TW.Solana.Proto.ICreateAndTransferToken|null);

                /** SigningInput createNonceAccount. */
                public createNonceAccount?: (TW.Solana.Proto.ICreateNonceAccount|null);

                /** SigningInput withdrawNonceAccount. */
                public withdrawNonceAccount?: (TW.Solana.Proto.IWithdrawNonceAccount|null);

                /** SigningInput advanceNonceAccount. */
                public advanceNonceAccount?: (TW.Solana.Proto.IAdvanceNonceAccount|null);

                /** SigningInput sender. */
                public sender: string;

                /** SigningInput nonceAccount. */
                public nonceAccount: string;

                /** SigningInput feePayerPrivateKey. */
                public feePayerPrivateKey: Uint8Array;

                /** SigningInput feePayer. */
                public feePayer: string;

                /** SigningInput rawMessage. */
                public rawMessage?: (TW.Solana.Proto.IRawMessage|null);

                /** SigningInput txEncoding. */
                public txEncoding: TW.Solana.Proto.Encoding;

                /** SigningInput priorityFeePrice. */
                public priorityFeePrice?: (TW.Solana.Proto.IPriorityFeePrice|null);

                /** SigningInput priorityFeeLimit. */
                public priorityFeeLimit?: (TW.Solana.Proto.IPriorityFeeLimit|null);

                /** SigningInput tokenTransferToFeePayer. */
                public tokenTransferToFeePayer?: (TW.Solana.Proto.ITokenTransferToFeePayer|null);

                /** SigningInput transferToFeePayer. */
                public transferToFeePayer?: (TW.Solana.Proto.ITransfer|null);

                /** SigningInput transactionType. */
                public transactionType?: ("transferTransaction"|"delegateStakeTransaction"|"deactivateStakeTransaction"|"deactivateAllStakeTransaction"|"withdrawTransaction"|"withdrawAllTransaction"|"createTokenAccountTransaction"|"tokenTransferTransaction"|"createAndTransferTokenTransaction"|"createNonceAccount"|"withdrawNonceAccount"|"advanceNonceAccount");

                /**
                 * Creates a new SigningInput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningInput instance
                 */
                public static create(properties?: TW.Solana.Proto.ISigningInput): TW.Solana.Proto.SigningInput;

                /**
                 * Encodes the specified SigningInput message. Does not implicitly {@link TW.Solana.Proto.SigningInput.verify|verify} messages.
                 * @param message SigningInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.ISigningInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.SigningInput;

                /**
                 * Gets the default type url for SigningInput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SigningOutput. */
            interface ISigningOutput {

                /** SigningOutput encoded */
                encoded?: (string|null);

                /** SigningOutput error */
                error?: (TW.Common.Proto.SigningError|null);

                /** SigningOutput errorMessage */
                errorMessage?: (string|null);

                /** SigningOutput unsignedTx */
                unsignedTx?: (string|null);

                /** SigningOutput signatures */
                signatures?: (TW.Solana.Proto.IPubkeySignature[]|null);
            }

            /** Represents a SigningOutput. */
            class SigningOutput implements ISigningOutput {

                /**
                 * Constructs a new SigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.ISigningOutput);

                /** SigningOutput encoded. */
                public encoded: string;

                /** SigningOutput error. */
                public error: TW.Common.Proto.SigningError;

                /** SigningOutput errorMessage. */
                public errorMessage: string;

                /** SigningOutput unsignedTx. */
                public unsignedTx: string;

                /** SigningOutput signatures. */
                public signatures: TW.Solana.Proto.IPubkeySignature[];

                /**
                 * Creates a new SigningOutput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningOutput instance
                 */
                public static create(properties?: TW.Solana.Proto.ISigningOutput): TW.Solana.Proto.SigningOutput;

                /**
                 * Encodes the specified SigningOutput message. Does not implicitly {@link TW.Solana.Proto.SigningOutput.verify|verify} messages.
                 * @param message SigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.ISigningOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.SigningOutput;

                /**
                 * Gets the default type url for SigningOutput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PreSigningOutput. */
            interface IPreSigningOutput {

                /** PreSigningOutput signers */
                signers?: (Uint8Array[]|null);

                /** PreSigningOutput data */
                data?: (Uint8Array|null);

                /** PreSigningOutput error */
                error?: (TW.Common.Proto.SigningError|null);

                /** PreSigningOutput errorMessage */
                errorMessage?: (string|null);
            }

            /** Transaction pre-signing output */
            class PreSigningOutput implements IPreSigningOutput {

                /**
                 * Constructs a new PreSigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.IPreSigningOutput);

                /** PreSigningOutput signers. */
                public signers: Uint8Array[];

                /** PreSigningOutput data. */
                public data: Uint8Array;

                /** PreSigningOutput error. */
                public error: TW.Common.Proto.SigningError;

                /** PreSigningOutput errorMessage. */
                public errorMessage: string;

                /**
                 * Creates a new PreSigningOutput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PreSigningOutput instance
                 */
                public static create(properties?: TW.Solana.Proto.IPreSigningOutput): TW.Solana.Proto.PreSigningOutput;

                /**
                 * Encodes the specified PreSigningOutput message. Does not implicitly {@link TW.Solana.Proto.PreSigningOutput.verify|verify} messages.
                 * @param message PreSigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.IPreSigningOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PreSigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PreSigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.PreSigningOutput;

                /**
                 * Gets the default type url for PreSigningOutput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** MessageType enum. */
            enum MessageType {
                MessageType_raw = 0,
                MessageType_offchain_v0 = 1
            }

            /** MessageFormat enum. */
            enum MessageFormat {
                MessageFormat_utf8 = 0,
                MessageFormat_restricted_ascii = 1
            }

            /** Properties of a StructuredField. */
            interface IStructuredField {

                /** StructuredField label */
                label?: (string|null);

                /** StructuredField value */
                value?: (string|null);
            }

            /** Represents a StructuredField. */
            class StructuredField implements IStructuredField {

                /**
                 * Constructs a new StructuredField.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.IStructuredField);

                /** StructuredField label. */
                public label: string;

                /** StructuredField value. */
                public value: string;

                /**
                 * Creates a new StructuredField instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StructuredField instance
                 */
                public static create(properties?: TW.Solana.Proto.IStructuredField): TW.Solana.Proto.StructuredField;

                /**
                 * Encodes the specified StructuredField message. Does not implicitly {@link TW.Solana.Proto.StructuredField.verify|verify} messages.
                 * @param message StructuredField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.IStructuredField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StructuredField message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StructuredField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.StructuredField;

                /**
                 * Gets the default type url for StructuredField
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a StructuredMessage. */
            interface IStructuredMessage {

                /** StructuredMessage header */
                header?: (string|null);

                /** StructuredMessage fields */
                fields?: (TW.Solana.Proto.IStructuredField[]|null);

                /** StructuredMessage statement */
                statement?: (string|null);
            }

            /** Represents a StructuredMessage. */
            class StructuredMessage implements IStructuredMessage {

                /**
                 * Constructs a new StructuredMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.IStructuredMessage);

                /** StructuredMessage header. */
                public header: string;

                /** StructuredMessage fields. */
                public fields: TW.Solana.Proto.IStructuredField[];

                /** StructuredMessage statement. */
                public statement: string;

                /**
                 * Creates a new StructuredMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StructuredMessage instance
                 */
                public static create(properties?: TW.Solana.Proto.IStructuredMessage): TW.Solana.Proto.StructuredMessage;

                /**
                 * Encodes the specified StructuredMessage message. Does not implicitly {@link TW.Solana.Proto.StructuredMessage.verify|verify} messages.
                 * @param message StructuredMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.IStructuredMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StructuredMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StructuredMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.StructuredMessage;

                /**
                 * Gets the default type url for StructuredMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageSigningInput. */
            interface IMessageSigningInput {

                /** MessageSigningInput privateKey */
                privateKey?: (Uint8Array|null);

                /** MessageSigningInput publicKey */
                publicKey?: (Uint8Array|null);

                /** MessageSigningInput messageType */
                messageType?: (TW.Solana.Proto.MessageType|null);

                /** MessageSigningInput applicationDomain */
                applicationDomain?: (Uint8Array|null);

                /** MessageSigningInput messageFormat */
                messageFormat?: (TW.Solana.Proto.MessageFormat|null);

                /** MessageSigningInput message */
                message?: (string|null);

                /** MessageSigningInput structuredMessage */
                structuredMessage?: (TW.Solana.Proto.IStructuredMessage|null);
            }

            /** Represents a MessageSigningInput. */
            class MessageSigningInput implements IMessageSigningInput {

                /**
                 * Constructs a new MessageSigningInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.IMessageSigningInput);

                /** MessageSigningInput privateKey. */
                public privateKey: Uint8Array;

                /** MessageSigningInput publicKey. */
                public publicKey: Uint8Array;

                /** MessageSigningInput messageType. */
                public messageType: TW.Solana.Proto.MessageType;

                /** MessageSigningInput applicationDomain. */
                public applicationDomain: Uint8Array;

                /** MessageSigningInput messageFormat. */
                public messageFormat: TW.Solana.Proto.MessageFormat;

                /** MessageSigningInput message. */
                public message?: (string|null);

                /** MessageSigningInput structuredMessage. */
                public structuredMessage?: (TW.Solana.Proto.IStructuredMessage|null);

                /** MessageSigningInput messagePayload. */
                public messagePayload?: ("message"|"structuredMessage");

                /**
                 * Creates a new MessageSigningInput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageSigningInput instance
                 */
                public static create(properties?: TW.Solana.Proto.IMessageSigningInput): TW.Solana.Proto.MessageSigningInput;

                /**
                 * Encodes the specified MessageSigningInput message. Does not implicitly {@link TW.Solana.Proto.MessageSigningInput.verify|verify} messages.
                 * @param message MessageSigningInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.IMessageSigningInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageSigningInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageSigningInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.MessageSigningInput;

                /**
                 * Gets the default type url for MessageSigningInput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageSigningOutput. */
            interface IMessageSigningOutput {

                /** MessageSigningOutput signature */
                signature?: (string|null);

                /** MessageSigningOutput error */
                error?: (TW.Common.Proto.SigningError|null);

                /** MessageSigningOutput errorMessage */
                errorMessage?: (string|null);
            }

            /** Represents a MessageSigningOutput. */
            class MessageSigningOutput implements IMessageSigningOutput {

                /**
                 * Constructs a new MessageSigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.IMessageSigningOutput);

                /** MessageSigningOutput signature. */
                public signature: string;

                /** MessageSigningOutput error. */
                public error: TW.Common.Proto.SigningError;

                /** MessageSigningOutput errorMessage. */
                public errorMessage: string;

                /**
                 * Creates a new MessageSigningOutput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageSigningOutput instance
                 */
                public static create(properties?: TW.Solana.Proto.IMessageSigningOutput): TW.Solana.Proto.MessageSigningOutput;

                /**
                 * Encodes the specified MessageSigningOutput message. Does not implicitly {@link TW.Solana.Proto.MessageSigningOutput.verify|verify} messages.
                 * @param message MessageSigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.IMessageSigningOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageSigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageSigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.MessageSigningOutput;

                /**
                 * Gets the default type url for MessageSigningOutput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageVerifyingInput. */
            interface IMessageVerifyingInput {

                /** MessageVerifyingInput publicKey */
                publicKey?: (Uint8Array|null);

                /** MessageVerifyingInput signature */
                signature?: (string|null);

                /** MessageVerifyingInput messageType */
                messageType?: (TW.Solana.Proto.MessageType|null);

                /** MessageVerifyingInput applicationDomain */
                applicationDomain?: (Uint8Array|null);

                /** MessageVerifyingInput messageFormat */
                messageFormat?: (TW.Solana.Proto.MessageFormat|null);

                /** MessageVerifyingInput message */
                message?: (string|null);

                /** MessageVerifyingInput structuredMessage */
                structuredMessage?: (TW.Solana.Proto.IStructuredMessage|null);
            }

            /** Represents a MessageVerifyingInput. */
            class MessageVerifyingInput implements IMessageVerifyingInput {

                /**
                 * Constructs a new MessageVerifyingInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.IMessageVerifyingInput);

                /** MessageVerifyingInput publicKey. */
                public publicKey: Uint8Array;

                /** MessageVerifyingInput signature. */
                public signature: string;

                /** MessageVerifyingInput messageType. */
                public messageType: TW.Solana.Proto.MessageType;

                /** MessageVerifyingInput applicationDomain. */
                public applicationDomain: Uint8Array;

                /** MessageVerifyingInput messageFormat. */
                public messageFormat: TW.Solana.Proto.MessageFormat;

                /** MessageVerifyingInput message. */
                public message?: (string|null);

                /** MessageVerifyingInput structuredMessage. */
                public structuredMessage?: (TW.Solana.Proto.IStructuredMessage|null);

                /** MessageVerifyingInput messagePayload. */
                public messagePayload?: ("message"|"structuredMessage");

                /**
                 * Creates a new MessageVerifyingInput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageVerifyingInput instance
                 */
                public static create(properties?: TW.Solana.Proto.IMessageVerifyingInput): TW.Solana.Proto.MessageVerifyingInput;

                /**
                 * Encodes the specified MessageVerifyingInput message. Does not implicitly {@link TW.Solana.Proto.MessageVerifyingInput.verify|verify} messages.
                 * @param message MessageVerifyingInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Solana.Proto.IMessageVerifyingInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageVerifyingInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageVerifyingInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.MessageVerifyingInput;

                /**
                 * Gets the default type url for MessageVerifyingInput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Namespace Stellar. */
    namespace Stellar {

        /** Namespace Proto. */
        namespace Proto {

            /** Properties of an Asset. */
            interface IAsset {

                /** Asset issuer */
                issuer?: (string|null);

                /** Asset alphanum4 */
                alphanum4?: (string|null);
            }

            /** Represents an Asset. */
            class Asset implements IAsset {

                /**
                 * Constructs a new Asset.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Stellar.Proto.IAsset);

                /** Asset issuer. */
                public issuer: string;

                /** Asset alphanum4. */
                public alphanum4: string;

                /**
                 * Creates a new Asset instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Asset instance
                 */
                public static create(properties?: TW.Stellar.Proto.IAsset): TW.Stellar.Proto.Asset;

                /**
                 * Encodes the specified Asset message. Does not implicitly {@link TW.Stellar.Proto.Asset.verify|verify} messages.
                 * @param message Asset message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Stellar.Proto.IAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Asset message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Asset
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Stellar.Proto.Asset;

                /**
                 * Gets the default type url for Asset
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an OperationCreateAccount. */
            interface IOperationCreateAccount {

                /** OperationCreateAccount destination */
                destination?: (string|null);

                /** OperationCreateAccount amount */
                amount?: (number|null);
            }

            /** Represents an OperationCreateAccount. */
            class OperationCreateAccount implements IOperationCreateAccount {

                /**
                 * Constructs a new OperationCreateAccount.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Stellar.Proto.IOperationCreateAccount);

                /** OperationCreateAccount destination. */
                public destination: string;

                /** OperationCreateAccount amount. */
                public amount: number;

                /**
                 * Creates a new OperationCreateAccount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OperationCreateAccount instance
                 */
                public static create(properties?: TW.Stellar.Proto.IOperationCreateAccount): TW.Stellar.Proto.OperationCreateAccount;

                /**
                 * Encodes the specified OperationCreateAccount message. Does not implicitly {@link TW.Stellar.Proto.OperationCreateAccount.verify|verify} messages.
                 * @param message OperationCreateAccount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Stellar.Proto.IOperationCreateAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OperationCreateAccount message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OperationCreateAccount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Stellar.Proto.OperationCreateAccount;

                /**
                 * Gets the default type url for OperationCreateAccount
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an OperationPayment. */
            interface IOperationPayment {

                /** OperationPayment destination */
                destination?: (string|null);

                /** OperationPayment asset */
                asset?: (TW.Stellar.Proto.IAsset|null);

                /** OperationPayment amount */
                amount?: (number|null);
            }

            /** Represents an OperationPayment. */
            class OperationPayment implements IOperationPayment {

                /**
                 * Constructs a new OperationPayment.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Stellar.Proto.IOperationPayment);

                /** OperationPayment destination. */
                public destination: string;

                /** OperationPayment asset. */
                public asset?: (TW.Stellar.Proto.IAsset|null);

                /** OperationPayment amount. */
                public amount: number;

                /**
                 * Creates a new OperationPayment instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OperationPayment instance
                 */
                public static create(properties?: TW.Stellar.Proto.IOperationPayment): TW.Stellar.Proto.OperationPayment;

                /**
                 * Encodes the specified OperationPayment message. Does not implicitly {@link TW.Stellar.Proto.OperationPayment.verify|verify} messages.
                 * @param message OperationPayment message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Stellar.Proto.IOperationPayment, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OperationPayment message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OperationPayment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Stellar.Proto.OperationPayment;

                /**
                 * Gets the default type url for OperationPayment
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an OperationChangeTrust. */
            interface IOperationChangeTrust {

                /** OperationChangeTrust asset */
                asset?: (TW.Stellar.Proto.IAsset|null);

                /** OperationChangeTrust validBefore */
                validBefore?: (number|null);
            }

            /** Represents an OperationChangeTrust. */
            class OperationChangeTrust implements IOperationChangeTrust {

                /**
                 * Constructs a new OperationChangeTrust.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Stellar.Proto.IOperationChangeTrust);

                /** OperationChangeTrust asset. */
                public asset?: (TW.Stellar.Proto.IAsset|null);

                /** OperationChangeTrust validBefore. */
                public validBefore: number;

                /**
                 * Creates a new OperationChangeTrust instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OperationChangeTrust instance
                 */
                public static create(properties?: TW.Stellar.Proto.IOperationChangeTrust): TW.Stellar.Proto.OperationChangeTrust;

                /**
                 * Encodes the specified OperationChangeTrust message. Does not implicitly {@link TW.Stellar.Proto.OperationChangeTrust.verify|verify} messages.
                 * @param message OperationChangeTrust message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Stellar.Proto.IOperationChangeTrust, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OperationChangeTrust message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OperationChangeTrust
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Stellar.Proto.OperationChangeTrust;

                /**
                 * Gets the default type url for OperationChangeTrust
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** ClaimPredicate enum. */
            enum ClaimPredicate {
                Predicate_unconditional = 0
            }

            /** Properties of a Claimant. */
            interface IClaimant {

                /** Claimant account */
                account?: (string|null);

                /** Claimant predicate */
                predicate?: (TW.Stellar.Proto.ClaimPredicate|null);
            }

            /** Represents a Claimant. */
            class Claimant implements IClaimant {

                /**
                 * Constructs a new Claimant.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Stellar.Proto.IClaimant);

                /** Claimant account. */
                public account: string;

                /** Claimant predicate. */
                public predicate: TW.Stellar.Proto.ClaimPredicate;

                /**
                 * Creates a new Claimant instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Claimant instance
                 */
                public static create(properties?: TW.Stellar.Proto.IClaimant): TW.Stellar.Proto.Claimant;

                /**
                 * Encodes the specified Claimant message. Does not implicitly {@link TW.Stellar.Proto.Claimant.verify|verify} messages.
                 * @param message Claimant message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Stellar.Proto.IClaimant, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Claimant message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Claimant
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Stellar.Proto.Claimant;

                /**
                 * Gets the default type url for Claimant
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an OperationCreateClaimableBalance. */
            interface IOperationCreateClaimableBalance {

                /** OperationCreateClaimableBalance asset */
                asset?: (TW.Stellar.Proto.IAsset|null);

                /** OperationCreateClaimableBalance amount */
                amount?: (number|null);

                /** OperationCreateClaimableBalance claimants */
                claimants?: (TW.Stellar.Proto.IClaimant[]|null);
            }

            /** Represents an OperationCreateClaimableBalance. */
            class OperationCreateClaimableBalance implements IOperationCreateClaimableBalance {

                /**
                 * Constructs a new OperationCreateClaimableBalance.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Stellar.Proto.IOperationCreateClaimableBalance);

                /** OperationCreateClaimableBalance asset. */
                public asset?: (TW.Stellar.Proto.IAsset|null);

                /** OperationCreateClaimableBalance amount. */
                public amount: number;

                /** OperationCreateClaimableBalance claimants. */
                public claimants: TW.Stellar.Proto.IClaimant[];

                /**
                 * Creates a new OperationCreateClaimableBalance instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OperationCreateClaimableBalance instance
                 */
                public static create(properties?: TW.Stellar.Proto.IOperationCreateClaimableBalance): TW.Stellar.Proto.OperationCreateClaimableBalance;

                /**
                 * Encodes the specified OperationCreateClaimableBalance message. Does not implicitly {@link TW.Stellar.Proto.OperationCreateClaimableBalance.verify|verify} messages.
                 * @param message OperationCreateClaimableBalance message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Stellar.Proto.IOperationCreateClaimableBalance, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OperationCreateClaimableBalance message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OperationCreateClaimableBalance
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Stellar.Proto.OperationCreateClaimableBalance;

                /**
                 * Gets the default type url for OperationCreateClaimableBalance
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an OperationClaimClaimableBalance. */
            interface IOperationClaimClaimableBalance {

                /** OperationClaimClaimableBalance balanceId */
                balanceId?: (Uint8Array|null);
            }

            /** Represents an OperationClaimClaimableBalance. */
            class OperationClaimClaimableBalance implements IOperationClaimClaimableBalance {

                /**
                 * Constructs a new OperationClaimClaimableBalance.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Stellar.Proto.IOperationClaimClaimableBalance);

                /** OperationClaimClaimableBalance balanceId. */
                public balanceId: Uint8Array;

                /**
                 * Creates a new OperationClaimClaimableBalance instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OperationClaimClaimableBalance instance
                 */
                public static create(properties?: TW.Stellar.Proto.IOperationClaimClaimableBalance): TW.Stellar.Proto.OperationClaimClaimableBalance;

                /**
                 * Encodes the specified OperationClaimClaimableBalance message. Does not implicitly {@link TW.Stellar.Proto.OperationClaimClaimableBalance.verify|verify} messages.
                 * @param message OperationClaimClaimableBalance message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Stellar.Proto.IOperationClaimClaimableBalance, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OperationClaimClaimableBalance message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OperationClaimClaimableBalance
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Stellar.Proto.OperationClaimClaimableBalance;

                /**
                 * Gets the default type url for OperationClaimClaimableBalance
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MemoVoid. */
            interface IMemoVoid {
            }

            /** Represents a MemoVoid. */
            class MemoVoid implements IMemoVoid {

                /**
                 * Constructs a new MemoVoid.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Stellar.Proto.IMemoVoid);

                /**
                 * Creates a new MemoVoid instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MemoVoid instance
                 */
                public static create(properties?: TW.Stellar.Proto.IMemoVoid): TW.Stellar.Proto.MemoVoid;

                /**
                 * Encodes the specified MemoVoid message. Does not implicitly {@link TW.Stellar.Proto.MemoVoid.verify|verify} messages.
                 * @param message MemoVoid message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Stellar.Proto.IMemoVoid, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MemoVoid message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MemoVoid
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Stellar.Proto.MemoVoid;

                /**
                 * Gets the default type url for MemoVoid
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MemoText. */
            interface IMemoText {

                /** MemoText text */
                text?: (string|null);
            }

            /** Represents a MemoText. */
            class MemoText implements IMemoText {

                /**
                 * Constructs a new MemoText.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Stellar.Proto.IMemoText);

                /** MemoText text. */
                public text: string;

                /**
                 * Creates a new MemoText instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MemoText instance
                 */
                public static create(properties?: TW.Stellar.Proto.IMemoText): TW.Stellar.Proto.MemoText;

                /**
                 * Encodes the specified MemoText message. Does not implicitly {@link TW.Stellar.Proto.MemoText.verify|verify} messages.
                 * @param message MemoText message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Stellar.Proto.IMemoText, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MemoText message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MemoText
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Stellar.Proto.MemoText;

                /**
                 * Gets the default type url for MemoText
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MemoId. */
            interface IMemoId {

                /** MemoId id */
                id?: (number|null);
            }

            /** Represents a MemoId. */
            class MemoId implements IMemoId {

                /**
                 * Constructs a new MemoId.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Stellar.Proto.IMemoId);

                /** MemoId id. */
                public id: number;

                /**
                 * Creates a new MemoId instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MemoId instance
                 */
                public static create(properties?: TW.Stellar.Proto.IMemoId): TW.Stellar.Proto.MemoId;

                /**
                 * Encodes the specified MemoId message. Does not implicitly {@link TW.Stellar.Proto.MemoId.verify|verify} messages.
                 * @param message MemoId message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Stellar.Proto.IMemoId, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MemoId message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MemoId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Stellar.Proto.MemoId;

                /**
                 * Gets the default type url for MemoId
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MemoHash. */
            interface IMemoHash {

                /** MemoHash hash */
                hash?: (Uint8Array|null);
            }

            /** Represents a MemoHash. */
            class MemoHash implements IMemoHash {

                /**
                 * Constructs a new MemoHash.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Stellar.Proto.IMemoHash);

                /** MemoHash hash. */
                public hash: Uint8Array;

                /**
                 * Creates a new MemoHash instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MemoHash instance
                 */
                public static create(properties?: TW.Stellar.Proto.IMemoHash): TW.Stellar.Proto.MemoHash;

                /**
                 * Encodes the specified MemoHash message. Does not implicitly {@link TW.Stellar.Proto.MemoHash.verify|verify} messages.
                 * @param message MemoHash message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Stellar.Proto.IMemoHash, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MemoHash message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MemoHash
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Stellar.Proto.MemoHash;

                /**
                 * Gets the default type url for MemoHash
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SigningInput. */
            interface ISigningInput {

                /** SigningInput fee */
                fee?: (number|null);

                /** SigningInput sequence */
                sequence?: (number|null);

                /** SigningInput account */
                account?: (string|null);

                /** SigningInput privateKey */
                privateKey?: (Uint8Array|null);

                /** SigningInput passphrase */
                passphrase?: (string|null);

                /** SigningInput opCreateAccount */
                opCreateAccount?: (TW.Stellar.Proto.IOperationCreateAccount|null);

                /** SigningInput opPayment */
                opPayment?: (TW.Stellar.Proto.IOperationPayment|null);

                /** SigningInput opChangeTrust */
                opChangeTrust?: (TW.Stellar.Proto.IOperationChangeTrust|null);

                /** SigningInput opCreateClaimableBalance */
                opCreateClaimableBalance?: (TW.Stellar.Proto.IOperationCreateClaimableBalance|null);

                /** SigningInput opClaimClaimableBalance */
                opClaimClaimableBalance?: (TW.Stellar.Proto.IOperationClaimClaimableBalance|null);

                /** SigningInput memoVoid */
                memoVoid?: (TW.Stellar.Proto.IMemoVoid|null);

                /** SigningInput memoText */
                memoText?: (TW.Stellar.Proto.IMemoText|null);

                /** SigningInput memoId */
                memoId?: (TW.Stellar.Proto.IMemoId|null);

                /** SigningInput memoHash */
                memoHash?: (TW.Stellar.Proto.IMemoHash|null);

                /** SigningInput memoReturnHash */
                memoReturnHash?: (TW.Stellar.Proto.IMemoHash|null);

                /** SigningInput timeBounds */
                timeBounds?: (number|null);
            }

            /** Represents a SigningInput. */
            class SigningInput implements ISigningInput {

                /**
                 * Constructs a new SigningInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Stellar.Proto.ISigningInput);

                /** SigningInput fee. */
                public fee: number;

                /** SigningInput sequence. */
                public sequence: number;

                /** SigningInput account. */
                public account: string;

                /** SigningInput privateKey. */
                public privateKey: Uint8Array;

                /** SigningInput passphrase. */
                public passphrase: string;

                /** SigningInput opCreateAccount. */
                public opCreateAccount?: (TW.Stellar.Proto.IOperationCreateAccount|null);

                /** SigningInput opPayment. */
                public opPayment?: (TW.Stellar.Proto.IOperationPayment|null);

                /** SigningInput opChangeTrust. */
                public opChangeTrust?: (TW.Stellar.Proto.IOperationChangeTrust|null);

                /** SigningInput opCreateClaimableBalance. */
                public opCreateClaimableBalance?: (TW.Stellar.Proto.IOperationCreateClaimableBalance|null);

                /** SigningInput opClaimClaimableBalance. */
                public opClaimClaimableBalance?: (TW.Stellar.Proto.IOperationClaimClaimableBalance|null);

                /** SigningInput memoVoid. */
                public memoVoid?: (TW.Stellar.Proto.IMemoVoid|null);

                /** SigningInput memoText. */
                public memoText?: (TW.Stellar.Proto.IMemoText|null);

                /** SigningInput memoId. */
                public memoId?: (TW.Stellar.Proto.IMemoId|null);

                /** SigningInput memoHash. */
                public memoHash?: (TW.Stellar.Proto.IMemoHash|null);

                /** SigningInput memoReturnHash. */
                public memoReturnHash?: (TW.Stellar.Proto.IMemoHash|null);

                /** SigningInput timeBounds. */
                public timeBounds: number;

                /** SigningInput operationOneof. */
                public operationOneof?: ("opCreateAccount"|"opPayment"|"opChangeTrust"|"opCreateClaimableBalance"|"opClaimClaimableBalance");

                /** SigningInput memoTypeOneof. */
                public memoTypeOneof?: ("memoVoid"|"memoText"|"memoId"|"memoHash"|"memoReturnHash");

                /**
                 * Creates a new SigningInput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningInput instance
                 */
                public static create(properties?: TW.Stellar.Proto.ISigningInput): TW.Stellar.Proto.SigningInput;

                /**
                 * Encodes the specified SigningInput message. Does not implicitly {@link TW.Stellar.Proto.SigningInput.verify|verify} messages.
                 * @param message SigningInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Stellar.Proto.ISigningInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Stellar.Proto.SigningInput;

                /**
                 * Gets the default type url for SigningInput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SigningOutput. */
            interface ISigningOutput {

                /** SigningOutput signature */
                signature?: (string|null);

                /** SigningOutput error */
                error?: (TW.Common.Proto.SigningError|null);

                /** SigningOutput errorMessage */
                errorMessage?: (string|null);
            }

            /** Represents a SigningOutput. */
            class SigningOutput implements ISigningOutput {

                /**
                 * Constructs a new SigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Stellar.Proto.ISigningOutput);

                /** SigningOutput signature. */
                public signature: string;

                /** SigningOutput error. */
                public error: TW.Common.Proto.SigningError;

                /** SigningOutput errorMessage. */
                public errorMessage: string;

                /**
                 * Creates a new SigningOutput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningOutput instance
                 */
                public static create(properties?: TW.Stellar.Proto.ISigningOutput): TW.Stellar.Proto.SigningOutput;

                /**
                 * Encodes the specified SigningOutput message. Does not implicitly {@link TW.Stellar.Proto.SigningOutput.verify|verify} messages.
                 * @param message SigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Stellar.Proto.ISigningOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Stellar.Proto.SigningOutput;

                /**
                 * Gets the default type url for SigningOutput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Namespace Sui. */
    namespace Sui {

        /** Namespace Proto. */
        namespace Proto {

            /** Properties of an ObjectRef. */
            interface IObjectRef {

                /** ObjectRef objectId */
                objectId?: (string|null);

                /** ObjectRef version */
                version?: (number|null);

                /** ObjectRef objectDigest */
                objectDigest?: (string|null);
            }

            /** Represents an ObjectRef. */
            class ObjectRef implements IObjectRef {

                /**
                 * Constructs a new ObjectRef.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Sui.Proto.IObjectRef);

                /** ObjectRef objectId. */
                public objectId: string;

                /** ObjectRef version. */
                public version: number;

                /** ObjectRef objectDigest. */
                public objectDigest: string;

                /**
                 * Creates a new ObjectRef instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ObjectRef instance
                 */
                public static create(properties?: TW.Sui.Proto.IObjectRef): TW.Sui.Proto.ObjectRef;

                /**
                 * Encodes the specified ObjectRef message. Does not implicitly {@link TW.Sui.Proto.ObjectRef.verify|verify} messages.
                 * @param message ObjectRef message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Sui.Proto.IObjectRef, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ObjectRef message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ObjectRef
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Sui.Proto.ObjectRef;

                /**
                 * Gets the default type url for ObjectRef
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an Amount. */
            interface IAmount {

                /** Amount amount */
                amount?: (number|null);
            }

            /** Represents an Amount. */
            class Amount implements IAmount {

                /**
                 * Constructs a new Amount.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Sui.Proto.IAmount);

                /** Amount amount. */
                public amount: number;

                /**
                 * Creates a new Amount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Amount instance
                 */
                public static create(properties?: TW.Sui.Proto.IAmount): TW.Sui.Proto.Amount;

                /**
                 * Encodes the specified Amount message. Does not implicitly {@link TW.Sui.Proto.Amount.verify|verify} messages.
                 * @param message Amount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Sui.Proto.IAmount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Amount message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Amount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Sui.Proto.Amount;

                /**
                 * Gets the default type url for Amount
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SignDirect. */
            interface ISignDirect {

                /** SignDirect unsignedTxMsg */
                unsignedTxMsg?: (string|null);
            }

            /** Represents a SignDirect. */
            class SignDirect implements ISignDirect {

                /**
                 * Constructs a new SignDirect.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Sui.Proto.ISignDirect);

                /** SignDirect unsignedTxMsg. */
                public unsignedTxMsg: string;

                /**
                 * Creates a new SignDirect instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SignDirect instance
                 */
                public static create(properties?: TW.Sui.Proto.ISignDirect): TW.Sui.Proto.SignDirect;

                /**
                 * Encodes the specified SignDirect message. Does not implicitly {@link TW.Sui.Proto.SignDirect.verify|verify} messages.
                 * @param message SignDirect message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Sui.Proto.ISignDirect, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SignDirect message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SignDirect
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Sui.Proto.SignDirect;

                /**
                 * Gets the default type url for SignDirect
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Pay. */
            interface IPay {

                /** Pay inputCoins */
                inputCoins?: (TW.Sui.Proto.IObjectRef[]|null);

                /** Pay recipients */
                recipients?: (string[]|null);

                /** Pay amounts */
                amounts?: (number[]|null);

                /** Pay gas */
                gas?: (TW.Sui.Proto.IObjectRef|null);
            }

            /** Represents a Pay. */
            class Pay implements IPay {

                /**
                 * Constructs a new Pay.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Sui.Proto.IPay);

                /** Pay inputCoins. */
                public inputCoins: TW.Sui.Proto.IObjectRef[];

                /** Pay recipients. */
                public recipients: string[];

                /** Pay amounts. */
                public amounts: number[];

                /** Pay gas. */
                public gas?: (TW.Sui.Proto.IObjectRef|null);

                /**
                 * Creates a new Pay instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Pay instance
                 */
                public static create(properties?: TW.Sui.Proto.IPay): TW.Sui.Proto.Pay;

                /**
                 * Encodes the specified Pay message. Does not implicitly {@link TW.Sui.Proto.Pay.verify|verify} messages.
                 * @param message Pay message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Sui.Proto.IPay, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Pay message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Pay
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Sui.Proto.Pay;

                /**
                 * Gets the default type url for Pay
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PaySui. */
            interface IPaySui {

                /** PaySui inputCoins */
                inputCoins?: (TW.Sui.Proto.IObjectRef[]|null);

                /** PaySui recipients */
                recipients?: (string[]|null);

                /** PaySui amounts */
                amounts?: (number[]|null);
            }

            /** Represents a PaySui. */
            class PaySui implements IPaySui {

                /**
                 * Constructs a new PaySui.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Sui.Proto.IPaySui);

                /** PaySui inputCoins. */
                public inputCoins: TW.Sui.Proto.IObjectRef[];

                /** PaySui recipients. */
                public recipients: string[];

                /** PaySui amounts. */
                public amounts: number[];

                /**
                 * Creates a new PaySui instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PaySui instance
                 */
                public static create(properties?: TW.Sui.Proto.IPaySui): TW.Sui.Proto.PaySui;

                /**
                 * Encodes the specified PaySui message. Does not implicitly {@link TW.Sui.Proto.PaySui.verify|verify} messages.
                 * @param message PaySui message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Sui.Proto.IPaySui, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PaySui message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PaySui
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Sui.Proto.PaySui;

                /**
                 * Gets the default type url for PaySui
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PayAllSui. */
            interface IPayAllSui {

                /** PayAllSui inputCoins */
                inputCoins?: (TW.Sui.Proto.IObjectRef[]|null);

                /** PayAllSui recipient */
                recipient?: (string|null);
            }

            /** Represents a PayAllSui. */
            class PayAllSui implements IPayAllSui {

                /**
                 * Constructs a new PayAllSui.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Sui.Proto.IPayAllSui);

                /** PayAllSui inputCoins. */
                public inputCoins: TW.Sui.Proto.IObjectRef[];

                /** PayAllSui recipient. */
                public recipient: string;

                /**
                 * Creates a new PayAllSui instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PayAllSui instance
                 */
                public static create(properties?: TW.Sui.Proto.IPayAllSui): TW.Sui.Proto.PayAllSui;

                /**
                 * Encodes the specified PayAllSui message. Does not implicitly {@link TW.Sui.Proto.PayAllSui.verify|verify} messages.
                 * @param message PayAllSui message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Sui.Proto.IPayAllSui, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PayAllSui message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PayAllSui
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Sui.Proto.PayAllSui;

                /**
                 * Gets the default type url for PayAllSui
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RequestAddStake. */
            interface IRequestAddStake {

                /** RequestAddStake coins */
                coins?: (TW.Sui.Proto.IObjectRef[]|null);

                /** RequestAddStake amount */
                amount?: (TW.Sui.Proto.IAmount|null);

                /** RequestAddStake validator */
                validator?: (string|null);

                /** RequestAddStake gas */
                gas?: (TW.Sui.Proto.IObjectRef|null);
            }

            /** Represents a RequestAddStake. */
            class RequestAddStake implements IRequestAddStake {

                /**
                 * Constructs a new RequestAddStake.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Sui.Proto.IRequestAddStake);

                /** RequestAddStake coins. */
                public coins: TW.Sui.Proto.IObjectRef[];

                /** RequestAddStake amount. */
                public amount?: (TW.Sui.Proto.IAmount|null);

                /** RequestAddStake validator. */
                public validator: string;

                /** RequestAddStake gas. */
                public gas?: (TW.Sui.Proto.IObjectRef|null);

                /**
                 * Creates a new RequestAddStake instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RequestAddStake instance
                 */
                public static create(properties?: TW.Sui.Proto.IRequestAddStake): TW.Sui.Proto.RequestAddStake;

                /**
                 * Encodes the specified RequestAddStake message. Does not implicitly {@link TW.Sui.Proto.RequestAddStake.verify|verify} messages.
                 * @param message RequestAddStake message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Sui.Proto.IRequestAddStake, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RequestAddStake message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RequestAddStake
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Sui.Proto.RequestAddStake;

                /**
                 * Gets the default type url for RequestAddStake
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RequestWithdrawStake. */
            interface IRequestWithdrawStake {

                /** RequestWithdrawStake stakedSui */
                stakedSui?: (TW.Sui.Proto.IObjectRef|null);

                /** RequestWithdrawStake gas */
                gas?: (TW.Sui.Proto.IObjectRef|null);
            }

            /** Represents a RequestWithdrawStake. */
            class RequestWithdrawStake implements IRequestWithdrawStake {

                /**
                 * Constructs a new RequestWithdrawStake.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Sui.Proto.IRequestWithdrawStake);

                /** RequestWithdrawStake stakedSui. */
                public stakedSui?: (TW.Sui.Proto.IObjectRef|null);

                /** RequestWithdrawStake gas. */
                public gas?: (TW.Sui.Proto.IObjectRef|null);

                /**
                 * Creates a new RequestWithdrawStake instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RequestWithdrawStake instance
                 */
                public static create(properties?: TW.Sui.Proto.IRequestWithdrawStake): TW.Sui.Proto.RequestWithdrawStake;

                /**
                 * Encodes the specified RequestWithdrawStake message. Does not implicitly {@link TW.Sui.Proto.RequestWithdrawStake.verify|verify} messages.
                 * @param message RequestWithdrawStake message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Sui.Proto.IRequestWithdrawStake, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RequestWithdrawStake message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RequestWithdrawStake
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Sui.Proto.RequestWithdrawStake;

                /**
                 * Gets the default type url for RequestWithdrawStake
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TransferObject. */
            interface ITransferObject {

                /** TransferObject object */
                object?: (TW.Sui.Proto.IObjectRef|null);

                /** TransferObject recipient */
                recipient?: (string|null);

                /** TransferObject gas */
                gas?: (TW.Sui.Proto.IObjectRef|null);
            }

            /** https://docs.sui.io/sui-api-ref#unsafe_transferobject */
            class TransferObject implements ITransferObject {

                /**
                 * Constructs a new TransferObject.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Sui.Proto.ITransferObject);

                /** TransferObject object. */
                public object?: (TW.Sui.Proto.IObjectRef|null);

                /** TransferObject recipient. */
                public recipient: string;

                /** TransferObject gas. */
                public gas?: (TW.Sui.Proto.IObjectRef|null);

                /**
                 * Creates a new TransferObject instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransferObject instance
                 */
                public static create(properties?: TW.Sui.Proto.ITransferObject): TW.Sui.Proto.TransferObject;

                /**
                 * Encodes the specified TransferObject message. Does not implicitly {@link TW.Sui.Proto.TransferObject.verify|verify} messages.
                 * @param message TransferObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Sui.Proto.ITransferObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransferObject message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransferObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Sui.Proto.TransferObject;

                /**
                 * Gets the default type url for TransferObject
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SigningInput. */
            interface ISigningInput {

                /** SigningInput privateKey */
                privateKey?: (Uint8Array|null);

                /** SigningInput signer */
                signer?: (string|null);

                /** SigningInput signDirectMessage */
                signDirectMessage?: (TW.Sui.Proto.ISignDirect|null);

                /** SigningInput pay */
                pay?: (TW.Sui.Proto.IPay|null);

                /** SigningInput paySui */
                paySui?: (TW.Sui.Proto.IPaySui|null);

                /** SigningInput payAllSui */
                payAllSui?: (TW.Sui.Proto.IPayAllSui|null);

                /** SigningInput requestAddStake */
                requestAddStake?: (TW.Sui.Proto.IRequestAddStake|null);

                /** SigningInput requestWithdrawStake */
                requestWithdrawStake?: (TW.Sui.Proto.IRequestWithdrawStake|null);

                /** SigningInput transferObject */
                transferObject?: (TW.Sui.Proto.ITransferObject|null);

                /** SigningInput rawJson */
                rawJson?: (string|null);

                /** SigningInput gasBudget */
                gasBudget?: (number|null);

                /** SigningInput referenceGasPrice */
                referenceGasPrice?: (number|null);
            }

            /** Represents a SigningInput. */
            class SigningInput implements ISigningInput {

                /**
                 * Constructs a new SigningInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Sui.Proto.ISigningInput);

                /** SigningInput privateKey. */
                public privateKey: Uint8Array;

                /** SigningInput signer. */
                public signer: string;

                /** SigningInput signDirectMessage. */
                public signDirectMessage?: (TW.Sui.Proto.ISignDirect|null);

                /** SigningInput pay. */
                public pay?: (TW.Sui.Proto.IPay|null);

                /** SigningInput paySui. */
                public paySui?: (TW.Sui.Proto.IPaySui|null);

                /** SigningInput payAllSui. */
                public payAllSui?: (TW.Sui.Proto.IPayAllSui|null);

                /** SigningInput requestAddStake. */
                public requestAddStake?: (TW.Sui.Proto.IRequestAddStake|null);

                /** SigningInput requestWithdrawStake. */
                public requestWithdrawStake?: (TW.Sui.Proto.IRequestWithdrawStake|null);

                /** SigningInput transferObject. */
                public transferObject?: (TW.Sui.Proto.ITransferObject|null);

                /** SigningInput rawJson. */
                public rawJson?: (string|null);

                /** SigningInput gasBudget. */
                public gasBudget: number;

                /** SigningInput referenceGasPrice. */
                public referenceGasPrice: number;

                /** SigningInput transactionPayload. */
                public transactionPayload?: ("signDirectMessage"|"pay"|"paySui"|"payAllSui"|"requestAddStake"|"requestWithdrawStake"|"transferObject"|"rawJson");

                /**
                 * Creates a new SigningInput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningInput instance
                 */
                public static create(properties?: TW.Sui.Proto.ISigningInput): TW.Sui.Proto.SigningInput;

                /**
                 * Encodes the specified SigningInput message. Does not implicitly {@link TW.Sui.Proto.SigningInput.verify|verify} messages.
                 * @param message SigningInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Sui.Proto.ISigningInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Sui.Proto.SigningInput;

                /**
                 * Gets the default type url for SigningInput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SigningOutput. */
            interface ISigningOutput {

                /** The raw transaction without indent in base64 */
                unsignedTx?: (string|null);

                /** The signature encoded in base64 */
                signature?: (string|null);

                /** SigningOutput error */
                error?: (TW.Common.Proto.SigningError|null);

                /** SigningOutput errorMessage */
                errorMessage?: (string|null);
            }

            /** Represents a SigningOutput. */
            class SigningOutput implements ISigningOutput {

                /**
                 * Constructs a new SigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Sui.Proto.ISigningOutput);

                /** The raw transaction without indent in base64 */
                public unsignedTx: string;

                /** The signature encoded in base64 */
                public signature: string;

                /** SigningOutput error. */
                public error: TW.Common.Proto.SigningError;

                /** SigningOutput errorMessage. */
                public errorMessage: string;

                /**
                 * Creates a new SigningOutput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningOutput instance
                 */
                public static create(properties?: TW.Sui.Proto.ISigningOutput): TW.Sui.Proto.SigningOutput;

                /**
                 * Encodes the specified SigningOutput message. Does not implicitly {@link TW.Sui.Proto.SigningOutput.verify|verify} messages.
                 * @param message SigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Sui.Proto.ISigningOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Sui.Proto.SigningOutput;

                /**
                 * Gets the default type url for SigningOutput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageSigningInput. */
            interface IMessageSigningInput {

                /** MessageSigningInput privateKey */
                privateKey?: (Uint8Array|null);

                /** MessageSigningInput message */
                message?: (string|null);
            }

            /** Represents a MessageSigningInput. */
            class MessageSigningInput implements IMessageSigningInput {

                /**
                 * Constructs a new MessageSigningInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Sui.Proto.IMessageSigningInput);

                /** MessageSigningInput privateKey. */
                public privateKey: Uint8Array;

                /** MessageSigningInput message. */
                public message: string;

                /**
                 * Creates a new MessageSigningInput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageSigningInput instance
                 */
                public static create(properties?: TW.Sui.Proto.IMessageSigningInput): TW.Sui.Proto.MessageSigningInput;

                /**
                 * Encodes the specified MessageSigningInput message. Does not implicitly {@link TW.Sui.Proto.MessageSigningInput.verify|verify} messages.
                 * @param message MessageSigningInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Sui.Proto.IMessageSigningInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageSigningInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageSigningInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Sui.Proto.MessageSigningInput;

                /**
                 * Gets the default type url for MessageSigningInput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageSigningOutput. */
            interface IMessageSigningOutput {

                /** MessageSigningOutput signature */
                signature?: (string|null);

                /** MessageSigningOutput error */
                error?: (TW.Common.Proto.SigningError|null);

                /** MessageSigningOutput errorMessage */
                errorMessage?: (string|null);
            }

            /** Represents a MessageSigningOutput. */
            class MessageSigningOutput implements IMessageSigningOutput {

                /**
                 * Constructs a new MessageSigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Sui.Proto.IMessageSigningOutput);

                /** MessageSigningOutput signature. */
                public signature: string;

                /** MessageSigningOutput error. */
                public error: TW.Common.Proto.SigningError;

                /** MessageSigningOutput errorMessage. */
                public errorMessage: string;

                /**
                 * Creates a new MessageSigningOutput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageSigningOutput instance
                 */
                public static create(properties?: TW.Sui.Proto.IMessageSigningOutput): TW.Sui.Proto.MessageSigningOutput;

                /**
                 * Encodes the specified MessageSigningOutput message. Does not implicitly {@link TW.Sui.Proto.MessageSigningOutput.verify|verify} messages.
                 * @param message MessageSigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Sui.Proto.IMessageSigningOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageSigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageSigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Sui.Proto.MessageSigningOutput;

                /**
                 * Gets the default type url for MessageSigningOutput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageVerifyingInput. */
            interface IMessageVerifyingInput {

                /** MessageVerifyingInput message */
                message?: (string|null);

                /** MessageVerifyingInput publicKey */
                publicKey?: (Uint8Array|null);

                /** MessageVerifyingInput signature */
                signature?: (string|null);
            }

            /** Represents a MessageVerifyingInput. */
            class MessageVerifyingInput implements IMessageVerifyingInput {

                /**
                 * Constructs a new MessageVerifyingInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Sui.Proto.IMessageVerifyingInput);

                /** MessageVerifyingInput message. */
                public message: string;

                /** MessageVerifyingInput publicKey. */
                public publicKey: Uint8Array;

                /** MessageVerifyingInput signature. */
                public signature: string;

                /**
                 * Creates a new MessageVerifyingInput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageVerifyingInput instance
                 */
                public static create(properties?: TW.Sui.Proto.IMessageVerifyingInput): TW.Sui.Proto.MessageVerifyingInput;

                /**
                 * Encodes the specified MessageVerifyingInput message. Does not implicitly {@link TW.Sui.Proto.MessageVerifyingInput.verify|verify} messages.
                 * @param message MessageVerifyingInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Sui.Proto.IMessageVerifyingInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageVerifyingInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageVerifyingInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Sui.Proto.MessageVerifyingInput;

                /**
                 * Gets the default type url for MessageVerifyingInput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Namespace TheOpenNetwork. */
    namespace TheOpenNetwork {

        /** Namespace Proto. */
        namespace Proto {

            /** WalletVersion enum. */
            enum WalletVersion {
                WALLET_V3_R1 = 0,
                WALLET_V3_R2 = 1,
                WALLET_V4_R2 = 2,
                WALLET_V5_R1 = 3
            }

            /** SendMode enum. */
            enum SendMode {
                DEFAULT = 0,
                PAY_FEES_SEPARATELY = 1,
                IGNORE_ACTION_PHASE_ERRORS = 2,
                DESTROY_ON_ZERO_BALANCE = 32,
                ATTACH_ALL_INBOUND_MESSAGE_VALUE = 64,
                ATTACH_ALL_CONTRACT_BALANCE = 128
            }

            /** Properties of a Transfer. */
            interface ITransfer {

                /** Transfer dest */
                dest?: (string|null);

                /** Transfer amount */
                amount?: (Uint8Array|null);

                /** Transfer mode */
                mode?: (number|null);

                /** Transfer comment */
                comment?: (string|null);

                /** Transfer bounceable */
                bounceable?: (boolean|null);

                /** Transfer stateInit */
                stateInit?: (string|null);

                /** Transfer jettonTransfer */
                jettonTransfer?: (TW.TheOpenNetwork.Proto.IJettonTransfer|null);

                /** Transfer customPayload */
                customPayload?: (string|null);
            }

            /** Represents a Transfer. */
            class Transfer implements ITransfer {

                /**
                 * Constructs a new Transfer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.TheOpenNetwork.Proto.ITransfer);

                /** Transfer dest. */
                public dest: string;

                /** Transfer amount. */
                public amount: Uint8Array;

                /** Transfer mode. */
                public mode: number;

                /** Transfer comment. */
                public comment: string;

                /** Transfer bounceable. */
                public bounceable: boolean;

                /** Transfer stateInit. */
                public stateInit: string;

                /** Transfer jettonTransfer. */
                public jettonTransfer?: (TW.TheOpenNetwork.Proto.IJettonTransfer|null);

                /** Transfer customPayload. */
                public customPayload?: (string|null);

                /** Transfer payload. */
                public payload?: ("jettonTransfer"|"customPayload");

                /**
                 * Creates a new Transfer instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Transfer instance
                 */
                public static create(properties?: TW.TheOpenNetwork.Proto.ITransfer): TW.TheOpenNetwork.Proto.Transfer;

                /**
                 * Encodes the specified Transfer message. Does not implicitly {@link TW.TheOpenNetwork.Proto.Transfer.verify|verify} messages.
                 * @param message Transfer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.TheOpenNetwork.Proto.ITransfer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Transfer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Transfer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.TheOpenNetwork.Proto.Transfer;

                /**
                 * Gets the default type url for Transfer
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a JettonTransfer. */
            interface IJettonTransfer {

                /** JettonTransfer queryId */
                queryId?: (number|null);

                /** JettonTransfer jettonAmount */
                jettonAmount?: (Uint8Array|null);

                /** JettonTransfer toOwner */
                toOwner?: (string|null);

                /** JettonTransfer responseAddress */
                responseAddress?: (string|null);

                /** JettonTransfer forwardAmount */
                forwardAmount?: (Uint8Array|null);

                /** JettonTransfer customPayload */
                customPayload?: (string|null);
            }

            /** Represents a JettonTransfer. */
            class JettonTransfer implements IJettonTransfer {

                /**
                 * Constructs a new JettonTransfer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.TheOpenNetwork.Proto.IJettonTransfer);

                /** JettonTransfer queryId. */
                public queryId: number;

                /** JettonTransfer jettonAmount. */
                public jettonAmount: Uint8Array;

                /** JettonTransfer toOwner. */
                public toOwner: string;

                /** JettonTransfer responseAddress. */
                public responseAddress: string;

                /** JettonTransfer forwardAmount. */
                public forwardAmount: Uint8Array;

                /** JettonTransfer customPayload. */
                public customPayload: string;

                /**
                 * Creates a new JettonTransfer instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns JettonTransfer instance
                 */
                public static create(properties?: TW.TheOpenNetwork.Proto.IJettonTransfer): TW.TheOpenNetwork.Proto.JettonTransfer;

                /**
                 * Encodes the specified JettonTransfer message. Does not implicitly {@link TW.TheOpenNetwork.Proto.JettonTransfer.verify|verify} messages.
                 * @param message JettonTransfer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.TheOpenNetwork.Proto.IJettonTransfer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a JettonTransfer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns JettonTransfer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.TheOpenNetwork.Proto.JettonTransfer;

                /**
                 * Gets the default type url for JettonTransfer
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SigningInput. */
            interface ISigningInput {

                /** SigningInput privateKey */
                privateKey?: (Uint8Array|null);

                /** SigningInput publicKey */
                publicKey?: (Uint8Array|null);

                /** SigningInput messages */
                messages?: (TW.TheOpenNetwork.Proto.ITransfer[]|null);

                /** SigningInput sequenceNumber */
                sequenceNumber?: (number|null);

                /** SigningInput expireAt */
                expireAt?: (number|null);

                /** SigningInput walletVersion */
                walletVersion?: (TW.TheOpenNetwork.Proto.WalletVersion|null);
            }

            /** Represents a SigningInput. */
            class SigningInput implements ISigningInput {

                /**
                 * Constructs a new SigningInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.TheOpenNetwork.Proto.ISigningInput);

                /** SigningInput privateKey. */
                public privateKey: Uint8Array;

                /** SigningInput publicKey. */
                public publicKey: Uint8Array;

                /** SigningInput messages. */
                public messages: TW.TheOpenNetwork.Proto.ITransfer[];

                /** SigningInput sequenceNumber. */
                public sequenceNumber: number;

                /** SigningInput expireAt. */
                public expireAt: number;

                /** SigningInput walletVersion. */
                public walletVersion: TW.TheOpenNetwork.Proto.WalletVersion;

                /**
                 * Creates a new SigningInput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningInput instance
                 */
                public static create(properties?: TW.TheOpenNetwork.Proto.ISigningInput): TW.TheOpenNetwork.Proto.SigningInput;

                /**
                 * Encodes the specified SigningInput message. Does not implicitly {@link TW.TheOpenNetwork.Proto.SigningInput.verify|verify} messages.
                 * @param message SigningInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.TheOpenNetwork.Proto.ISigningInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.TheOpenNetwork.Proto.SigningInput;

                /**
                 * Gets the default type url for SigningInput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SigningOutput. */
            interface ISigningOutput {

                /** SigningOutput encoded */
                encoded?: (string|null);

                /** SigningOutput hash */
                hash?: (Uint8Array|null);

                /** SigningOutput error */
                error?: (TW.Common.Proto.SigningError|null);

                /** SigningOutput errorMessage */
                errorMessage?: (string|null);
            }

            /** Represents a SigningOutput. */
            class SigningOutput implements ISigningOutput {

                /**
                 * Constructs a new SigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.TheOpenNetwork.Proto.ISigningOutput);

                /** SigningOutput encoded. */
                public encoded: string;

                /** SigningOutput hash. */
                public hash: Uint8Array;

                /** SigningOutput error. */
                public error: TW.Common.Proto.SigningError;

                /** SigningOutput errorMessage. */
                public errorMessage: string;

                /**
                 * Creates a new SigningOutput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningOutput instance
                 */
                public static create(properties?: TW.TheOpenNetwork.Proto.ISigningOutput): TW.TheOpenNetwork.Proto.SigningOutput;

                /**
                 * Encodes the specified SigningOutput message. Does not implicitly {@link TW.TheOpenNetwork.Proto.SigningOutput.verify|verify} messages.
                 * @param message SigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.TheOpenNetwork.Proto.ISigningOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.TheOpenNetwork.Proto.SigningOutput;

                /**
                 * Gets the default type url for SigningOutput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Namespace TxCompiler. */
    namespace TxCompiler {

        /** Namespace Proto. */
        namespace Proto {

            /** Properties of a PreSigningOutput. */
            interface IPreSigningOutput {

                /** Pre-image data hash that will be used for signing */
                dataHash?: (Uint8Array|null);

                /** Pre-image data */
                data?: (Uint8Array|null);

                /** error code, 0 is ok, other codes will be treated as errors */
                error?: (TW.Common.Proto.SigningError|null);

                /** error code description */
                errorMessage?: (string|null);
            }

            /** Transaction pre-signing output */
            class PreSigningOutput implements IPreSigningOutput {

                /**
                 * Constructs a new PreSigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.TxCompiler.Proto.IPreSigningOutput);

                /** Pre-image data hash that will be used for signing */
                public dataHash: Uint8Array;

                /** Pre-image data */
                public data: Uint8Array;

                /** error code, 0 is ok, other codes will be treated as errors */
                public error: TW.Common.Proto.SigningError;

                /** error code description */
                public errorMessage: string;

                /**
                 * Creates a new PreSigningOutput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PreSigningOutput instance
                 */
                public static create(properties?: TW.TxCompiler.Proto.IPreSigningOutput): TW.TxCompiler.Proto.PreSigningOutput;

                /**
                 * Encodes the specified PreSigningOutput message. Does not implicitly {@link TW.TxCompiler.Proto.PreSigningOutput.verify|verify} messages.
                 * @param message PreSigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.TxCompiler.Proto.IPreSigningOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PreSigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PreSigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.TxCompiler.Proto.PreSigningOutput;

                /**
                 * Gets the default type url for PreSigningOutput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Namespace Tron. */
    namespace Tron {

        /** Namespace Proto. */
        namespace Proto {

            /** Properties of a TransferContract. */
            interface ITransferContract {

                /** TransferContract ownerAddress */
                ownerAddress?: (string|null);

                /** TransferContract toAddress */
                toAddress?: (string|null);

                /** TransferContract amount */
                amount?: (number|null);
            }

            /** Represents a TransferContract. */
            class TransferContract implements ITransferContract {

                /**
                 * Constructs a new TransferContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.ITransferContract);

                /** TransferContract ownerAddress. */
                public ownerAddress: string;

                /** TransferContract toAddress. */
                public toAddress: string;

                /** TransferContract amount. */
                public amount: number;

                /**
                 * Creates a new TransferContract instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransferContract instance
                 */
                public static create(properties?: TW.Tron.Proto.ITransferContract): TW.Tron.Proto.TransferContract;

                /**
                 * Encodes the specified TransferContract message. Does not implicitly {@link TW.Tron.Proto.TransferContract.verify|verify} messages.
                 * @param message TransferContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Tron.Proto.ITransferContract, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransferContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransferContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.TransferContract;

                /**
                 * Gets the default type url for TransferContract
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TransferAssetContract. */
            interface ITransferAssetContract {

                /** TransferAssetContract assetName */
                assetName?: (string|null);

                /** TransferAssetContract ownerAddress */
                ownerAddress?: (string|null);

                /** TransferAssetContract toAddress */
                toAddress?: (string|null);

                /** TransferAssetContract amount */
                amount?: (number|null);
            }

            /** Represents a TransferAssetContract. */
            class TransferAssetContract implements ITransferAssetContract {

                /**
                 * Constructs a new TransferAssetContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.ITransferAssetContract);

                /** TransferAssetContract assetName. */
                public assetName: string;

                /** TransferAssetContract ownerAddress. */
                public ownerAddress: string;

                /** TransferAssetContract toAddress. */
                public toAddress: string;

                /** TransferAssetContract amount. */
                public amount: number;

                /**
                 * Creates a new TransferAssetContract instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransferAssetContract instance
                 */
                public static create(properties?: TW.Tron.Proto.ITransferAssetContract): TW.Tron.Proto.TransferAssetContract;

                /**
                 * Encodes the specified TransferAssetContract message. Does not implicitly {@link TW.Tron.Proto.TransferAssetContract.verify|verify} messages.
                 * @param message TransferAssetContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Tron.Proto.ITransferAssetContract, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransferAssetContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransferAssetContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.TransferAssetContract;

                /**
                 * Gets the default type url for TransferAssetContract
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TransferTRC20Contract. */
            interface ITransferTRC20Contract {

                /** TransferTRC20Contract contractAddress */
                contractAddress?: (string|null);

                /** TransferTRC20Contract ownerAddress */
                ownerAddress?: (string|null);

                /** TransferTRC20Contract toAddress */
                toAddress?: (string|null);

                /** TransferTRC20Contract amount */
                amount?: (Uint8Array|null);
            }

            /** Represents a TransferTRC20Contract. */
            class TransferTRC20Contract implements ITransferTRC20Contract {

                /**
                 * Constructs a new TransferTRC20Contract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.ITransferTRC20Contract);

                /** TransferTRC20Contract contractAddress. */
                public contractAddress: string;

                /** TransferTRC20Contract ownerAddress. */
                public ownerAddress: string;

                /** TransferTRC20Contract toAddress. */
                public toAddress: string;

                /** TransferTRC20Contract amount. */
                public amount: Uint8Array;

                /**
                 * Creates a new TransferTRC20Contract instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransferTRC20Contract instance
                 */
                public static create(properties?: TW.Tron.Proto.ITransferTRC20Contract): TW.Tron.Proto.TransferTRC20Contract;

                /**
                 * Encodes the specified TransferTRC20Contract message. Does not implicitly {@link TW.Tron.Proto.TransferTRC20Contract.verify|verify} messages.
                 * @param message TransferTRC20Contract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Tron.Proto.ITransferTRC20Contract, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransferTRC20Contract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransferTRC20Contract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.TransferTRC20Contract;

                /**
                 * Gets the default type url for TransferTRC20Contract
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a FreezeBalanceContract. */
            interface IFreezeBalanceContract {

                /** FreezeBalanceContract ownerAddress */
                ownerAddress?: (string|null);

                /** FreezeBalanceContract frozenBalance */
                frozenBalance?: (number|null);

                /** FreezeBalanceContract frozenDuration */
                frozenDuration?: (number|null);

                /** FreezeBalanceContract resource */
                resource?: (string|null);

                /** FreezeBalanceContract receiverAddress */
                receiverAddress?: (string|null);
            }

            /** Represents a FreezeBalanceContract. */
            class FreezeBalanceContract implements IFreezeBalanceContract {

                /**
                 * Constructs a new FreezeBalanceContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.IFreezeBalanceContract);

                /** FreezeBalanceContract ownerAddress. */
                public ownerAddress: string;

                /** FreezeBalanceContract frozenBalance. */
                public frozenBalance: number;

                /** FreezeBalanceContract frozenDuration. */
                public frozenDuration: number;

                /** FreezeBalanceContract resource. */
                public resource: string;

                /** FreezeBalanceContract receiverAddress. */
                public receiverAddress: string;

                /**
                 * Creates a new FreezeBalanceContract instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FreezeBalanceContract instance
                 */
                public static create(properties?: TW.Tron.Proto.IFreezeBalanceContract): TW.Tron.Proto.FreezeBalanceContract;

                /**
                 * Encodes the specified FreezeBalanceContract message. Does not implicitly {@link TW.Tron.Proto.FreezeBalanceContract.verify|verify} messages.
                 * @param message FreezeBalanceContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Tron.Proto.IFreezeBalanceContract, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FreezeBalanceContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FreezeBalanceContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.FreezeBalanceContract;

                /**
                 * Gets the default type url for FreezeBalanceContract
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a FreezeBalanceV2Contract. */
            interface IFreezeBalanceV2Contract {

                /** FreezeBalanceV2Contract ownerAddress */
                ownerAddress?: (string|null);

                /** FreezeBalanceV2Contract frozenBalance */
                frozenBalance?: (number|null);

                /** FreezeBalanceV2Contract resource */
                resource?: (string|null);
            }

            /** Represents a FreezeBalanceV2Contract. */
            class FreezeBalanceV2Contract implements IFreezeBalanceV2Contract {

                /**
                 * Constructs a new FreezeBalanceV2Contract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.IFreezeBalanceV2Contract);

                /** FreezeBalanceV2Contract ownerAddress. */
                public ownerAddress: string;

                /** FreezeBalanceV2Contract frozenBalance. */
                public frozenBalance: number;

                /** FreezeBalanceV2Contract resource. */
                public resource: string;

                /**
                 * Creates a new FreezeBalanceV2Contract instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FreezeBalanceV2Contract instance
                 */
                public static create(properties?: TW.Tron.Proto.IFreezeBalanceV2Contract): TW.Tron.Proto.FreezeBalanceV2Contract;

                /**
                 * Encodes the specified FreezeBalanceV2Contract message. Does not implicitly {@link TW.Tron.Proto.FreezeBalanceV2Contract.verify|verify} messages.
                 * @param message FreezeBalanceV2Contract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Tron.Proto.IFreezeBalanceV2Contract, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FreezeBalanceV2Contract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FreezeBalanceV2Contract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.FreezeBalanceV2Contract;

                /**
                 * Gets the default type url for FreezeBalanceV2Contract
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UnfreezeBalanceV2Contract. */
            interface IUnfreezeBalanceV2Contract {

                /** UnfreezeBalanceV2Contract ownerAddress */
                ownerAddress?: (string|null);

                /** UnfreezeBalanceV2Contract unfreezeBalance */
                unfreezeBalance?: (number|null);

                /** UnfreezeBalanceV2Contract resource */
                resource?: (string|null);
            }

            /** Represents an UnfreezeBalanceV2Contract. */
            class UnfreezeBalanceV2Contract implements IUnfreezeBalanceV2Contract {

                /**
                 * Constructs a new UnfreezeBalanceV2Contract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.IUnfreezeBalanceV2Contract);

                /** UnfreezeBalanceV2Contract ownerAddress. */
                public ownerAddress: string;

                /** UnfreezeBalanceV2Contract unfreezeBalance. */
                public unfreezeBalance: number;

                /** UnfreezeBalanceV2Contract resource. */
                public resource: string;

                /**
                 * Creates a new UnfreezeBalanceV2Contract instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UnfreezeBalanceV2Contract instance
                 */
                public static create(properties?: TW.Tron.Proto.IUnfreezeBalanceV2Contract): TW.Tron.Proto.UnfreezeBalanceV2Contract;

                /**
                 * Encodes the specified UnfreezeBalanceV2Contract message. Does not implicitly {@link TW.Tron.Proto.UnfreezeBalanceV2Contract.verify|verify} messages.
                 * @param message UnfreezeBalanceV2Contract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Tron.Proto.IUnfreezeBalanceV2Contract, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UnfreezeBalanceV2Contract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UnfreezeBalanceV2Contract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.UnfreezeBalanceV2Contract;

                /**
                 * Gets the default type url for UnfreezeBalanceV2Contract
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a WithdrawExpireUnfreezeContract. */
            interface IWithdrawExpireUnfreezeContract {

                /** WithdrawExpireUnfreezeContract ownerAddress */
                ownerAddress?: (string|null);
            }

            /** Represents a WithdrawExpireUnfreezeContract. */
            class WithdrawExpireUnfreezeContract implements IWithdrawExpireUnfreezeContract {

                /**
                 * Constructs a new WithdrawExpireUnfreezeContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.IWithdrawExpireUnfreezeContract);

                /** WithdrawExpireUnfreezeContract ownerAddress. */
                public ownerAddress: string;

                /**
                 * Creates a new WithdrawExpireUnfreezeContract instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WithdrawExpireUnfreezeContract instance
                 */
                public static create(properties?: TW.Tron.Proto.IWithdrawExpireUnfreezeContract): TW.Tron.Proto.WithdrawExpireUnfreezeContract;

                /**
                 * Encodes the specified WithdrawExpireUnfreezeContract message. Does not implicitly {@link TW.Tron.Proto.WithdrawExpireUnfreezeContract.verify|verify} messages.
                 * @param message WithdrawExpireUnfreezeContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Tron.Proto.IWithdrawExpireUnfreezeContract, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WithdrawExpireUnfreezeContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WithdrawExpireUnfreezeContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.WithdrawExpireUnfreezeContract;

                /**
                 * Gets the default type url for WithdrawExpireUnfreezeContract
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DelegateResourceContract. */
            interface IDelegateResourceContract {

                /** DelegateResourceContract ownerAddress */
                ownerAddress?: (string|null);

                /** DelegateResourceContract resource */
                resource?: (string|null);

                /** DelegateResourceContract balance */
                balance?: (number|null);

                /** DelegateResourceContract receiverAddress */
                receiverAddress?: (string|null);

                /** DelegateResourceContract lock */
                lock?: (boolean|null);
            }

            /** Represents a DelegateResourceContract. */
            class DelegateResourceContract implements IDelegateResourceContract {

                /**
                 * Constructs a new DelegateResourceContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.IDelegateResourceContract);

                /** DelegateResourceContract ownerAddress. */
                public ownerAddress: string;

                /** DelegateResourceContract resource. */
                public resource: string;

                /** DelegateResourceContract balance. */
                public balance: number;

                /** DelegateResourceContract receiverAddress. */
                public receiverAddress: string;

                /** DelegateResourceContract lock. */
                public lock: boolean;

                /**
                 * Creates a new DelegateResourceContract instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DelegateResourceContract instance
                 */
                public static create(properties?: TW.Tron.Proto.IDelegateResourceContract): TW.Tron.Proto.DelegateResourceContract;

                /**
                 * Encodes the specified DelegateResourceContract message. Does not implicitly {@link TW.Tron.Proto.DelegateResourceContract.verify|verify} messages.
                 * @param message DelegateResourceContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Tron.Proto.IDelegateResourceContract, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DelegateResourceContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DelegateResourceContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.DelegateResourceContract;

                /**
                 * Gets the default type url for DelegateResourceContract
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UnDelegateResourceContract. */
            interface IUnDelegateResourceContract {

                /** UnDelegateResourceContract ownerAddress */
                ownerAddress?: (string|null);

                /** UnDelegateResourceContract resource */
                resource?: (string|null);

                /** UnDelegateResourceContract balance */
                balance?: (number|null);

                /** UnDelegateResourceContract receiverAddress */
                receiverAddress?: (string|null);
            }

            /** Represents an UnDelegateResourceContract. */
            class UnDelegateResourceContract implements IUnDelegateResourceContract {

                /**
                 * Constructs a new UnDelegateResourceContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.IUnDelegateResourceContract);

                /** UnDelegateResourceContract ownerAddress. */
                public ownerAddress: string;

                /** UnDelegateResourceContract resource. */
                public resource: string;

                /** UnDelegateResourceContract balance. */
                public balance: number;

                /** UnDelegateResourceContract receiverAddress. */
                public receiverAddress: string;

                /**
                 * Creates a new UnDelegateResourceContract instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UnDelegateResourceContract instance
                 */
                public static create(properties?: TW.Tron.Proto.IUnDelegateResourceContract): TW.Tron.Proto.UnDelegateResourceContract;

                /**
                 * Encodes the specified UnDelegateResourceContract message. Does not implicitly {@link TW.Tron.Proto.UnDelegateResourceContract.verify|verify} messages.
                 * @param message UnDelegateResourceContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Tron.Proto.IUnDelegateResourceContract, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UnDelegateResourceContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UnDelegateResourceContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.UnDelegateResourceContract;

                /**
                 * Gets the default type url for UnDelegateResourceContract
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UnfreezeBalanceContract. */
            interface IUnfreezeBalanceContract {

                /** UnfreezeBalanceContract ownerAddress */
                ownerAddress?: (string|null);

                /** UnfreezeBalanceContract resource */
                resource?: (string|null);

                /** UnfreezeBalanceContract receiverAddress */
                receiverAddress?: (string|null);
            }

            /** Represents an UnfreezeBalanceContract. */
            class UnfreezeBalanceContract implements IUnfreezeBalanceContract {

                /**
                 * Constructs a new UnfreezeBalanceContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.IUnfreezeBalanceContract);

                /** UnfreezeBalanceContract ownerAddress. */
                public ownerAddress: string;

                /** UnfreezeBalanceContract resource. */
                public resource: string;

                /** UnfreezeBalanceContract receiverAddress. */
                public receiverAddress: string;

                /**
                 * Creates a new UnfreezeBalanceContract instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UnfreezeBalanceContract instance
                 */
                public static create(properties?: TW.Tron.Proto.IUnfreezeBalanceContract): TW.Tron.Proto.UnfreezeBalanceContract;

                /**
                 * Encodes the specified UnfreezeBalanceContract message. Does not implicitly {@link TW.Tron.Proto.UnfreezeBalanceContract.verify|verify} messages.
                 * @param message UnfreezeBalanceContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Tron.Proto.IUnfreezeBalanceContract, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UnfreezeBalanceContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UnfreezeBalanceContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.UnfreezeBalanceContract;

                /**
                 * Gets the default type url for UnfreezeBalanceContract
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UnfreezeAssetContract. */
            interface IUnfreezeAssetContract {

                /** UnfreezeAssetContract ownerAddress */
                ownerAddress?: (string|null);
            }

            /** Represents an UnfreezeAssetContract. */
            class UnfreezeAssetContract implements IUnfreezeAssetContract {

                /**
                 * Constructs a new UnfreezeAssetContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.IUnfreezeAssetContract);

                /** UnfreezeAssetContract ownerAddress. */
                public ownerAddress: string;

                /**
                 * Creates a new UnfreezeAssetContract instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UnfreezeAssetContract instance
                 */
                public static create(properties?: TW.Tron.Proto.IUnfreezeAssetContract): TW.Tron.Proto.UnfreezeAssetContract;

                /**
                 * Encodes the specified UnfreezeAssetContract message. Does not implicitly {@link TW.Tron.Proto.UnfreezeAssetContract.verify|verify} messages.
                 * @param message UnfreezeAssetContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Tron.Proto.IUnfreezeAssetContract, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UnfreezeAssetContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UnfreezeAssetContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.UnfreezeAssetContract;

                /**
                 * Gets the default type url for UnfreezeAssetContract
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a VoteAssetContract. */
            interface IVoteAssetContract {

                /** VoteAssetContract ownerAddress */
                ownerAddress?: (string|null);

                /** VoteAssetContract voteAddress */
                voteAddress?: (string[]|null);

                /** VoteAssetContract support */
                support?: (boolean|null);

                /** VoteAssetContract count */
                count?: (number|null);
            }

            /** Represents a VoteAssetContract. */
            class VoteAssetContract implements IVoteAssetContract {

                /**
                 * Constructs a new VoteAssetContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.IVoteAssetContract);

                /** VoteAssetContract ownerAddress. */
                public ownerAddress: string;

                /** VoteAssetContract voteAddress. */
                public voteAddress: string[];

                /** VoteAssetContract support. */
                public support: boolean;

                /** VoteAssetContract count. */
                public count: number;

                /**
                 * Creates a new VoteAssetContract instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VoteAssetContract instance
                 */
                public static create(properties?: TW.Tron.Proto.IVoteAssetContract): TW.Tron.Proto.VoteAssetContract;

                /**
                 * Encodes the specified VoteAssetContract message. Does not implicitly {@link TW.Tron.Proto.VoteAssetContract.verify|verify} messages.
                 * @param message VoteAssetContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Tron.Proto.IVoteAssetContract, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VoteAssetContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VoteAssetContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.VoteAssetContract;

                /**
                 * Gets the default type url for VoteAssetContract
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a VoteWitnessContract. */
            interface IVoteWitnessContract {

                /** VoteWitnessContract ownerAddress */
                ownerAddress?: (string|null);

                /** VoteWitnessContract votes */
                votes?: (TW.Tron.Proto.VoteWitnessContract.IVote[]|null);

                /** VoteWitnessContract support */
                support?: (boolean|null);
            }

            /** Represents a VoteWitnessContract. */
            class VoteWitnessContract implements IVoteWitnessContract {

                /**
                 * Constructs a new VoteWitnessContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.IVoteWitnessContract);

                /** VoteWitnessContract ownerAddress. */
                public ownerAddress: string;

                /** VoteWitnessContract votes. */
                public votes: TW.Tron.Proto.VoteWitnessContract.IVote[];

                /** VoteWitnessContract support. */
                public support: boolean;

                /**
                 * Creates a new VoteWitnessContract instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VoteWitnessContract instance
                 */
                public static create(properties?: TW.Tron.Proto.IVoteWitnessContract): TW.Tron.Proto.VoteWitnessContract;

                /**
                 * Encodes the specified VoteWitnessContract message. Does not implicitly {@link TW.Tron.Proto.VoteWitnessContract.verify|verify} messages.
                 * @param message VoteWitnessContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Tron.Proto.IVoteWitnessContract, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VoteWitnessContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VoteWitnessContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.VoteWitnessContract;

                /**
                 * Gets the default type url for VoteWitnessContract
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace VoteWitnessContract {

                /** Properties of a Vote. */
                interface IVote {

                    /** Vote voteAddress */
                    voteAddress?: (string|null);

                    /** Vote voteCount */
                    voteCount?: (number|null);
                }

                /** Represents a Vote. */
                class Vote implements IVote {

                    /**
                     * Constructs a new Vote.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Tron.Proto.VoteWitnessContract.IVote);

                    /** Vote voteAddress. */
                    public voteAddress: string;

                    /** Vote voteCount. */
                    public voteCount: number;

                    /**
                     * Creates a new Vote instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Vote instance
                     */
                    public static create(properties?: TW.Tron.Proto.VoteWitnessContract.IVote): TW.Tron.Proto.VoteWitnessContract.Vote;

                    /**
                     * Encodes the specified Vote message. Does not implicitly {@link TW.Tron.Proto.VoteWitnessContract.Vote.verify|verify} messages.
                     * @param message Vote message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: TW.Tron.Proto.VoteWitnessContract.IVote, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Vote message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Vote
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.VoteWitnessContract.Vote;

                    /**
                     * Gets the default type url for Vote
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a WithdrawBalanceContract. */
            interface IWithdrawBalanceContract {

                /** WithdrawBalanceContract ownerAddress */
                ownerAddress?: (string|null);
            }

            /** Represents a WithdrawBalanceContract. */
            class WithdrawBalanceContract implements IWithdrawBalanceContract {

                /**
                 * Constructs a new WithdrawBalanceContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.IWithdrawBalanceContract);

                /** WithdrawBalanceContract ownerAddress. */
                public ownerAddress: string;

                /**
                 * Creates a new WithdrawBalanceContract instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WithdrawBalanceContract instance
                 */
                public static create(properties?: TW.Tron.Proto.IWithdrawBalanceContract): TW.Tron.Proto.WithdrawBalanceContract;

                /**
                 * Encodes the specified WithdrawBalanceContract message. Does not implicitly {@link TW.Tron.Proto.WithdrawBalanceContract.verify|verify} messages.
                 * @param message WithdrawBalanceContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Tron.Proto.IWithdrawBalanceContract, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WithdrawBalanceContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WithdrawBalanceContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.WithdrawBalanceContract;

                /**
                 * Gets the default type url for WithdrawBalanceContract
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TriggerSmartContract. */
            interface ITriggerSmartContract {

                /** TriggerSmartContract ownerAddress */
                ownerAddress?: (string|null);

                /** TriggerSmartContract contractAddress */
                contractAddress?: (string|null);

                /** TriggerSmartContract callValue */
                callValue?: (number|null);

                /** TriggerSmartContract data */
                data?: (Uint8Array|null);

                /** TriggerSmartContract callTokenValue */
                callTokenValue?: (number|null);

                /** TriggerSmartContract tokenId */
                tokenId?: (number|null);
            }

            /** Represents a TriggerSmartContract. */
            class TriggerSmartContract implements ITriggerSmartContract {

                /**
                 * Constructs a new TriggerSmartContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.ITriggerSmartContract);

                /** TriggerSmartContract ownerAddress. */
                public ownerAddress: string;

                /** TriggerSmartContract contractAddress. */
                public contractAddress: string;

                /** TriggerSmartContract callValue. */
                public callValue: number;

                /** TriggerSmartContract data. */
                public data: Uint8Array;

                /** TriggerSmartContract callTokenValue. */
                public callTokenValue: number;

                /** TriggerSmartContract tokenId. */
                public tokenId: number;

                /**
                 * Creates a new TriggerSmartContract instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TriggerSmartContract instance
                 */
                public static create(properties?: TW.Tron.Proto.ITriggerSmartContract): TW.Tron.Proto.TriggerSmartContract;

                /**
                 * Encodes the specified TriggerSmartContract message. Does not implicitly {@link TW.Tron.Proto.TriggerSmartContract.verify|verify} messages.
                 * @param message TriggerSmartContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Tron.Proto.ITriggerSmartContract, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TriggerSmartContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TriggerSmartContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.TriggerSmartContract;

                /**
                 * Gets the default type url for TriggerSmartContract
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BlockHeader. */
            interface IBlockHeader {

                /** BlockHeader timestamp */
                timestamp?: (number|null);

                /** BlockHeader txTrieRoot */
                txTrieRoot?: (Uint8Array|null);

                /** BlockHeader parentHash */
                parentHash?: (Uint8Array|null);

                /** BlockHeader number */
                number?: (number|null);

                /** BlockHeader witnessAddress */
                witnessAddress?: (Uint8Array|null);

                /** BlockHeader version */
                version?: (number|null);
            }

            /** Represents a BlockHeader. */
            class BlockHeader implements IBlockHeader {

                /**
                 * Constructs a new BlockHeader.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.IBlockHeader);

                /** BlockHeader timestamp. */
                public timestamp: number;

                /** BlockHeader txTrieRoot. */
                public txTrieRoot: Uint8Array;

                /** BlockHeader parentHash. */
                public parentHash: Uint8Array;

                /** BlockHeader number. */
                public number: number;

                /** BlockHeader witnessAddress. */
                public witnessAddress: Uint8Array;

                /** BlockHeader version. */
                public version: number;

                /**
                 * Creates a new BlockHeader instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BlockHeader instance
                 */
                public static create(properties?: TW.Tron.Proto.IBlockHeader): TW.Tron.Proto.BlockHeader;

                /**
                 * Encodes the specified BlockHeader message. Does not implicitly {@link TW.Tron.Proto.BlockHeader.verify|verify} messages.
                 * @param message BlockHeader message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Tron.Proto.IBlockHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BlockHeader message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BlockHeader
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.BlockHeader;

                /**
                 * Gets the default type url for BlockHeader
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Transaction. */
            interface ITransaction {

                /** Transaction timestamp */
                timestamp?: (number|null);

                /** Transaction expiration */
                expiration?: (number|null);

                /** Transaction blockHeader */
                blockHeader?: (TW.Tron.Proto.IBlockHeader|null);

                /** Transaction feeLimit */
                feeLimit?: (number|null);

                /** Transaction memo */
                memo?: (string|null);

                /** Transaction transfer */
                transfer?: (TW.Tron.Proto.ITransferContract|null);

                /** Transaction transferAsset */
                transferAsset?: (TW.Tron.Proto.ITransferAssetContract|null);

                /** Transaction freezeBalance */
                freezeBalance?: (TW.Tron.Proto.IFreezeBalanceContract|null);

                /** Transaction unfreezeBalance */
                unfreezeBalance?: (TW.Tron.Proto.IUnfreezeBalanceContract|null);

                /** Transaction unfreezeAsset */
                unfreezeAsset?: (TW.Tron.Proto.IUnfreezeAssetContract|null);

                /** Transaction withdrawBalance */
                withdrawBalance?: (TW.Tron.Proto.IWithdrawBalanceContract|null);

                /** Transaction voteAsset */
                voteAsset?: (TW.Tron.Proto.IVoteAssetContract|null);

                /** Transaction voteWitness */
                voteWitness?: (TW.Tron.Proto.IVoteWitnessContract|null);

                /** Transaction triggerSmartContract */
                triggerSmartContract?: (TW.Tron.Proto.ITriggerSmartContract|null);

                /** Transaction transferTrc20Contract */
                transferTrc20Contract?: (TW.Tron.Proto.ITransferTRC20Contract|null);

                /** Transaction freezeBalanceV2 */
                freezeBalanceV2?: (TW.Tron.Proto.IFreezeBalanceV2Contract|null);

                /** Transaction unfreezeBalanceV2 */
                unfreezeBalanceV2?: (TW.Tron.Proto.IUnfreezeBalanceV2Contract|null);

                /** Transaction withdrawExpireUnfreeze */
                withdrawExpireUnfreeze?: (TW.Tron.Proto.IWithdrawExpireUnfreezeContract|null);

                /** Transaction delegateResource */
                delegateResource?: (TW.Tron.Proto.IDelegateResourceContract|null);

                /** Transaction undelegateResource */
                undelegateResource?: (TW.Tron.Proto.IUnDelegateResourceContract|null);
            }

            /** Represents a Transaction. */
            class Transaction implements ITransaction {

                /**
                 * Constructs a new Transaction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.ITransaction);

                /** Transaction timestamp. */
                public timestamp: number;

                /** Transaction expiration. */
                public expiration: number;

                /** Transaction blockHeader. */
                public blockHeader?: (TW.Tron.Proto.IBlockHeader|null);

                /** Transaction feeLimit. */
                public feeLimit: number;

                /** Transaction memo. */
                public memo: string;

                /** Transaction transfer. */
                public transfer?: (TW.Tron.Proto.ITransferContract|null);

                /** Transaction transferAsset. */
                public transferAsset?: (TW.Tron.Proto.ITransferAssetContract|null);

                /** Transaction freezeBalance. */
                public freezeBalance?: (TW.Tron.Proto.IFreezeBalanceContract|null);

                /** Transaction unfreezeBalance. */
                public unfreezeBalance?: (TW.Tron.Proto.IUnfreezeBalanceContract|null);

                /** Transaction unfreezeAsset. */
                public unfreezeAsset?: (TW.Tron.Proto.IUnfreezeAssetContract|null);

                /** Transaction withdrawBalance. */
                public withdrawBalance?: (TW.Tron.Proto.IWithdrawBalanceContract|null);

                /** Transaction voteAsset. */
                public voteAsset?: (TW.Tron.Proto.IVoteAssetContract|null);

                /** Transaction voteWitness. */
                public voteWitness?: (TW.Tron.Proto.IVoteWitnessContract|null);

                /** Transaction triggerSmartContract. */
                public triggerSmartContract?: (TW.Tron.Proto.ITriggerSmartContract|null);

                /** Transaction transferTrc20Contract. */
                public transferTrc20Contract?: (TW.Tron.Proto.ITransferTRC20Contract|null);

                /** Transaction freezeBalanceV2. */
                public freezeBalanceV2?: (TW.Tron.Proto.IFreezeBalanceV2Contract|null);

                /** Transaction unfreezeBalanceV2. */
                public unfreezeBalanceV2?: (TW.Tron.Proto.IUnfreezeBalanceV2Contract|null);

                /** Transaction withdrawExpireUnfreeze. */
                public withdrawExpireUnfreeze?: (TW.Tron.Proto.IWithdrawExpireUnfreezeContract|null);

                /** Transaction delegateResource. */
                public delegateResource?: (TW.Tron.Proto.IDelegateResourceContract|null);

                /** Transaction undelegateResource. */
                public undelegateResource?: (TW.Tron.Proto.IUnDelegateResourceContract|null);

                /** Transaction contractOneof. */
                public contractOneof?: ("transfer"|"transferAsset"|"freezeBalance"|"unfreezeBalance"|"unfreezeAsset"|"withdrawBalance"|"voteAsset"|"voteWitness"|"triggerSmartContract"|"transferTrc20Contract"|"freezeBalanceV2"|"unfreezeBalanceV2"|"withdrawExpireUnfreeze"|"delegateResource"|"undelegateResource");

                /**
                 * Creates a new Transaction instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Transaction instance
                 */
                public static create(properties?: TW.Tron.Proto.ITransaction): TW.Tron.Proto.Transaction;

                /**
                 * Encodes the specified Transaction message. Does not implicitly {@link TW.Tron.Proto.Transaction.verify|verify} messages.
                 * @param message Transaction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Tron.Proto.ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Transaction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Transaction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.Transaction;

                /**
                 * Gets the default type url for Transaction
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SigningInput. */
            interface ISigningInput {

                /** SigningInput transaction */
                transaction?: (TW.Tron.Proto.ITransaction|null);

                /** SigningInput privateKey */
                privateKey?: (Uint8Array|null);

                /** SigningInput rawJson */
                rawJson?: (string|null);
            }

            /** Represents a SigningInput. */
            class SigningInput implements ISigningInput {

                /**
                 * Constructs a new SigningInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.ISigningInput);

                /** SigningInput transaction. */
                public transaction?: (TW.Tron.Proto.ITransaction|null);

                /** SigningInput privateKey. */
                public privateKey: Uint8Array;

                /** SigningInput rawJson. */
                public rawJson: string;

                /**
                 * Creates a new SigningInput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningInput instance
                 */
                public static create(properties?: TW.Tron.Proto.ISigningInput): TW.Tron.Proto.SigningInput;

                /**
                 * Encodes the specified SigningInput message. Does not implicitly {@link TW.Tron.Proto.SigningInput.verify|verify} messages.
                 * @param message SigningInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Tron.Proto.ISigningInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.SigningInput;

                /**
                 * Gets the default type url for SigningInput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SigningOutput. */
            interface ISigningOutput {

                /** SigningOutput id */
                id?: (Uint8Array|null);

                /** SigningOutput signature */
                signature?: (Uint8Array|null);

                /** SigningOutput refBlockBytes */
                refBlockBytes?: (Uint8Array|null);

                /** SigningOutput refBlockHash */
                refBlockHash?: (Uint8Array|null);

                /** SigningOutput json */
                json?: (string|null);

                /** SigningOutput error */
                error?: (TW.Common.Proto.SigningError|null);

                /** SigningOutput errorMessage */
                errorMessage?: (string|null);
            }

            /** Represents a SigningOutput. */
            class SigningOutput implements ISigningOutput {

                /**
                 * Constructs a new SigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.ISigningOutput);

                /** SigningOutput id. */
                public id: Uint8Array;

                /** SigningOutput signature. */
                public signature: Uint8Array;

                /** SigningOutput refBlockBytes. */
                public refBlockBytes: Uint8Array;

                /** SigningOutput refBlockHash. */
                public refBlockHash: Uint8Array;

                /** SigningOutput json. */
                public json: string;

                /** SigningOutput error. */
                public error: TW.Common.Proto.SigningError;

                /** SigningOutput errorMessage. */
                public errorMessage: string;

                /**
                 * Creates a new SigningOutput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SigningOutput instance
                 */
                public static create(properties?: TW.Tron.Proto.ISigningOutput): TW.Tron.Proto.SigningOutput;

                /**
                 * Encodes the specified SigningOutput message. Does not implicitly {@link TW.Tron.Proto.SigningOutput.verify|verify} messages.
                 * @param message SigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: TW.Tron.Proto.ISigningOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.SigningOutput;

                /**
                 * Gets the default type url for SigningOutput
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }
}
