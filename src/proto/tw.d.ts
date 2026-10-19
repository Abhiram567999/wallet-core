import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace TW. */
export namespace TW {

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
