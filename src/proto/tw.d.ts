import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace TW. */
export namespace TW {

    /** Namespace BabylonStaking. */
    namespace BabylonStaking {

        /** Namespace Proto. */
        namespace Proto {

            /**
             * Properties of a PublicKeySignature.
             * @deprecated Use TW.BabylonStaking.Proto.PublicKeySignature.$Properties instead.
             */
            interface IPublicKeySignature extends TW.BabylonStaking.Proto.PublicKeySignature.$Properties {
            }

            /** Represents a PublicKeySignature. */
            class PublicKeySignature {

                /**
                 * Constructs a new PublicKeySignature.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BabylonStaking.Proto.PublicKeySignature.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** PublicKeySignature publicKey. */
                publicKey: Uint8Array;

                /** PublicKeySignature signature. */
                signature: Uint8Array;

                /**
                 * Encodes the specified PublicKeySignature message. Does not implicitly {@link TW.BabylonStaking.Proto.PublicKeySignature.verify|verify} messages.
                 * @param message PublicKeySignature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.BabylonStaking.Proto.PublicKeySignature.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PublicKeySignature message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.BabylonStaking.Proto.PublicKeySignature & TW.BabylonStaking.Proto.PublicKeySignature.$Shape} PublicKeySignature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BabylonStaking.Proto.PublicKeySignature & TW.BabylonStaking.Proto.PublicKeySignature.$Shape;

                /**
                 * Gets the type url for PublicKeySignature
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace PublicKeySignature {

                /** Properties of a PublicKeySignature. */
                interface $Properties {

                    /** PublicKeySignature publicKey */
                    publicKey?: (Uint8Array|null);

                    /** PublicKeySignature signature */
                    signature?: (Uint8Array|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a PublicKeySignature. */
                type $Shape = TW.BabylonStaking.Proto.PublicKeySignature.$Properties;
            }

            /**
             * Properties of a StakingInfo.
             * @deprecated Use TW.BabylonStaking.Proto.StakingInfo.$Properties instead.
             */
            interface IStakingInfo extends TW.BabylonStaking.Proto.StakingInfo.$Properties {
            }

            /** Represents a StakingInfo. */
            class StakingInfo {

                /**
                 * Constructs a new StakingInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BabylonStaking.Proto.StakingInfo.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** StakingInfo stakerPublicKey. */
                stakerPublicKey: Uint8Array;

                /** StakingInfo finalityProviderPublicKey. */
                finalityProviderPublicKey: Uint8Array;

                /** StakingInfo stakingTime. */
                stakingTime: number;

                /** StakingInfo covenantCommitteePublicKeys. */
                covenantCommitteePublicKeys: Uint8Array[];

                /** StakingInfo covenantQuorum. */
                covenantQuorum: number;

                /**
                 * Encodes the specified StakingInfo message. Does not implicitly {@link TW.BabylonStaking.Proto.StakingInfo.verify|verify} messages.
                 * @param message StakingInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.BabylonStaking.Proto.StakingInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StakingInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.BabylonStaking.Proto.StakingInfo & TW.BabylonStaking.Proto.StakingInfo.$Shape} StakingInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BabylonStaking.Proto.StakingInfo & TW.BabylonStaking.Proto.StakingInfo.$Shape;

                /**
                 * Gets the type url for StakingInfo
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace StakingInfo {

                /** Properties of a StakingInfo. */
                interface $Properties {

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

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a StakingInfo. */
                type $Shape = TW.BabylonStaking.Proto.StakingInfo.$Properties;
            }

            /**
             * Properties of an InputBuilder.
             * @deprecated Use TW.BabylonStaking.Proto.InputBuilder.$Properties instead.
             */
            interface IInputBuilder extends TW.BabylonStaking.Proto.InputBuilder.$Properties {
            }

            /** Represents an InputBuilder. */
            class InputBuilder {

                /**
                 * Constructs a new InputBuilder.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BabylonStaking.Proto.InputBuilder.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /**
                 * Encodes the specified InputBuilder message. Does not implicitly {@link TW.BabylonStaking.Proto.InputBuilder.verify|verify} messages.
                 * @param message InputBuilder message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.BabylonStaking.Proto.InputBuilder.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an InputBuilder message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.BabylonStaking.Proto.InputBuilder & TW.BabylonStaking.Proto.InputBuilder.$Shape} InputBuilder
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BabylonStaking.Proto.InputBuilder & TW.BabylonStaking.Proto.InputBuilder.$Shape;

                /**
                 * Gets the type url for InputBuilder
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace InputBuilder {

                /** Properties of an InputBuilder. */
                interface $Properties {

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an InputBuilder. */
                type $Shape = TW.BabylonStaking.Proto.InputBuilder.$Properties;

                /**
                 * Properties of a StakingTimelockPath.
                 * @deprecated Use TW.BabylonStaking.Proto.InputBuilder.StakingTimelockPath.$Properties instead.
                 */
                interface IStakingTimelockPath extends TW.BabylonStaking.Proto.InputBuilder.StakingTimelockPath.$Properties {
                }

                /** Represents a StakingTimelockPath. */
                class StakingTimelockPath {

                    /**
                     * Constructs a new StakingTimelockPath.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BabylonStaking.Proto.InputBuilder.StakingTimelockPath.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** StakingTimelockPath params. */
                    params?: (TW.BabylonStaking.Proto.StakingInfo.$Properties|null);

                    /**
                     * Encodes the specified StakingTimelockPath message. Does not implicitly {@link TW.BabylonStaking.Proto.InputBuilder.StakingTimelockPath.verify|verify} messages.
                     * @param message StakingTimelockPath message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.BabylonStaking.Proto.InputBuilder.StakingTimelockPath.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StakingTimelockPath message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.BabylonStaking.Proto.InputBuilder.StakingTimelockPath & TW.BabylonStaking.Proto.InputBuilder.StakingTimelockPath.$Shape} StakingTimelockPath
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BabylonStaking.Proto.InputBuilder.StakingTimelockPath & TW.BabylonStaking.Proto.InputBuilder.StakingTimelockPath.$Shape;

                    /**
                     * Gets the type url for StakingTimelockPath
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace StakingTimelockPath {

                    /** Properties of a StakingTimelockPath. */
                    interface $Properties {

                        /** StakingTimelockPath params */
                        params?: (TW.BabylonStaking.Proto.StakingInfo.$Properties|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a StakingTimelockPath. */
                    type $Shape = TW.BabylonStaking.Proto.InputBuilder.StakingTimelockPath.$Properties;
                }

                /**
                 * Properties of a StakingUnbondingPath.
                 * @deprecated Use TW.BabylonStaking.Proto.InputBuilder.StakingUnbondingPath.$Properties instead.
                 */
                interface IStakingUnbondingPath extends TW.BabylonStaking.Proto.InputBuilder.StakingUnbondingPath.$Properties {
                }

                /** Represents a StakingUnbondingPath. */
                class StakingUnbondingPath {

                    /**
                     * Constructs a new StakingUnbondingPath.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BabylonStaking.Proto.InputBuilder.StakingUnbondingPath.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** StakingUnbondingPath params. */
                    params?: (TW.BabylonStaking.Proto.StakingInfo.$Properties|null);

                    /** StakingUnbondingPath covenantCommitteeSignatures. */
                    covenantCommitteeSignatures: TW.BabylonStaking.Proto.PublicKeySignature.$Properties[];

                    /**
                     * Encodes the specified StakingUnbondingPath message. Does not implicitly {@link TW.BabylonStaking.Proto.InputBuilder.StakingUnbondingPath.verify|verify} messages.
                     * @param message StakingUnbondingPath message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.BabylonStaking.Proto.InputBuilder.StakingUnbondingPath.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StakingUnbondingPath message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.BabylonStaking.Proto.InputBuilder.StakingUnbondingPath & TW.BabylonStaking.Proto.InputBuilder.StakingUnbondingPath.$Shape} StakingUnbondingPath
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BabylonStaking.Proto.InputBuilder.StakingUnbondingPath & TW.BabylonStaking.Proto.InputBuilder.StakingUnbondingPath.$Shape;

                    /**
                     * Gets the type url for StakingUnbondingPath
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace StakingUnbondingPath {

                    /** Properties of a StakingUnbondingPath. */
                    interface $Properties {

                        /** StakingUnbondingPath params */
                        params?: (TW.BabylonStaking.Proto.StakingInfo.$Properties|null);

                        /** StakingUnbondingPath covenantCommitteeSignatures */
                        covenantCommitteeSignatures?: (TW.BabylonStaking.Proto.PublicKeySignature.$Properties[]|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a StakingUnbondingPath. */
                    type $Shape = TW.BabylonStaking.Proto.InputBuilder.StakingUnbondingPath.$Properties;
                }

                /**
                 * Properties of a StakingSlashingPath.
                 * @deprecated Use TW.BabylonStaking.Proto.InputBuilder.StakingSlashingPath.$Properties instead.
                 */
                interface IStakingSlashingPath extends TW.BabylonStaking.Proto.InputBuilder.StakingSlashingPath.$Properties {
                }

                /** Represents a StakingSlashingPath. */
                class StakingSlashingPath {

                    /**
                     * Constructs a new StakingSlashingPath.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BabylonStaking.Proto.InputBuilder.StakingSlashingPath.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** StakingSlashingPath params. */
                    params?: (TW.BabylonStaking.Proto.StakingInfo.$Properties|null);

                    /** StakingSlashingPath finalityProviderSignature. */
                    finalityProviderSignature?: (TW.BabylonStaking.Proto.PublicKeySignature.$Properties|null);

                    /**
                     * Encodes the specified StakingSlashingPath message. Does not implicitly {@link TW.BabylonStaking.Proto.InputBuilder.StakingSlashingPath.verify|verify} messages.
                     * @param message StakingSlashingPath message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.BabylonStaking.Proto.InputBuilder.StakingSlashingPath.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StakingSlashingPath message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.BabylonStaking.Proto.InputBuilder.StakingSlashingPath & TW.BabylonStaking.Proto.InputBuilder.StakingSlashingPath.$Shape} StakingSlashingPath
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BabylonStaking.Proto.InputBuilder.StakingSlashingPath & TW.BabylonStaking.Proto.InputBuilder.StakingSlashingPath.$Shape;

                    /**
                     * Gets the type url for StakingSlashingPath
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace StakingSlashingPath {

                    /** Properties of a StakingSlashingPath. */
                    interface $Properties {

                        /** StakingSlashingPath params */
                        params?: (TW.BabylonStaking.Proto.StakingInfo.$Properties|null);

                        /** StakingSlashingPath finalityProviderSignature */
                        finalityProviderSignature?: (TW.BabylonStaking.Proto.PublicKeySignature.$Properties|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a StakingSlashingPath. */
                    type $Shape = TW.BabylonStaking.Proto.InputBuilder.StakingSlashingPath.$Properties;
                }

                /**
                 * Properties of an UnbondingTimelockPath.
                 * @deprecated Use TW.BabylonStaking.Proto.InputBuilder.UnbondingTimelockPath.$Properties instead.
                 */
                interface IUnbondingTimelockPath extends TW.BabylonStaking.Proto.InputBuilder.UnbondingTimelockPath.$Properties {
                }

                /** Represents an UnbondingTimelockPath. */
                class UnbondingTimelockPath {

                    /**
                     * Constructs a new UnbondingTimelockPath.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BabylonStaking.Proto.InputBuilder.UnbondingTimelockPath.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** UnbondingTimelockPath params. */
                    params?: (TW.BabylonStaking.Proto.StakingInfo.$Properties|null);

                    /**
                     * Encodes the specified UnbondingTimelockPath message. Does not implicitly {@link TW.BabylonStaking.Proto.InputBuilder.UnbondingTimelockPath.verify|verify} messages.
                     * @param message UnbondingTimelockPath message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.BabylonStaking.Proto.InputBuilder.UnbondingTimelockPath.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UnbondingTimelockPath message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.BabylonStaking.Proto.InputBuilder.UnbondingTimelockPath & TW.BabylonStaking.Proto.InputBuilder.UnbondingTimelockPath.$Shape} UnbondingTimelockPath
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BabylonStaking.Proto.InputBuilder.UnbondingTimelockPath & TW.BabylonStaking.Proto.InputBuilder.UnbondingTimelockPath.$Shape;

                    /**
                     * Gets the type url for UnbondingTimelockPath
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace UnbondingTimelockPath {

                    /** Properties of an UnbondingTimelockPath. */
                    interface $Properties {

                        /** UnbondingTimelockPath params */
                        params?: (TW.BabylonStaking.Proto.StakingInfo.$Properties|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an UnbondingTimelockPath. */
                    type $Shape = TW.BabylonStaking.Proto.InputBuilder.UnbondingTimelockPath.$Properties;
                }

                /**
                 * Properties of an UnbondingSlashingPath.
                 * @deprecated Use TW.BabylonStaking.Proto.InputBuilder.UnbondingSlashingPath.$Properties instead.
                 */
                interface IUnbondingSlashingPath extends TW.BabylonStaking.Proto.InputBuilder.UnbondingSlashingPath.$Properties {
                }

                /** Represents an UnbondingSlashingPath. */
                class UnbondingSlashingPath {

                    /**
                     * Constructs a new UnbondingSlashingPath.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BabylonStaking.Proto.InputBuilder.UnbondingSlashingPath.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** UnbondingSlashingPath params. */
                    params?: (TW.BabylonStaking.Proto.StakingInfo.$Properties|null);

                    /** UnbondingSlashingPath finalityProviderSignature. */
                    finalityProviderSignature?: (TW.BabylonStaking.Proto.PublicKeySignature.$Properties|null);

                    /**
                     * Encodes the specified UnbondingSlashingPath message. Does not implicitly {@link TW.BabylonStaking.Proto.InputBuilder.UnbondingSlashingPath.verify|verify} messages.
                     * @param message UnbondingSlashingPath message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.BabylonStaking.Proto.InputBuilder.UnbondingSlashingPath.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UnbondingSlashingPath message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.BabylonStaking.Proto.InputBuilder.UnbondingSlashingPath & TW.BabylonStaking.Proto.InputBuilder.UnbondingSlashingPath.$Shape} UnbondingSlashingPath
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BabylonStaking.Proto.InputBuilder.UnbondingSlashingPath & TW.BabylonStaking.Proto.InputBuilder.UnbondingSlashingPath.$Shape;

                    /**
                     * Gets the type url for UnbondingSlashingPath
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace UnbondingSlashingPath {

                    /** Properties of an UnbondingSlashingPath. */
                    interface $Properties {

                        /** UnbondingSlashingPath params */
                        params?: (TW.BabylonStaking.Proto.StakingInfo.$Properties|null);

                        /** UnbondingSlashingPath finalityProviderSignature */
                        finalityProviderSignature?: (TW.BabylonStaking.Proto.PublicKeySignature.$Properties|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an UnbondingSlashingPath. */
                    type $Shape = TW.BabylonStaking.Proto.InputBuilder.UnbondingSlashingPath.$Properties;
                }
            }

            /**
             * Properties of an OutputBuilder.
             * @deprecated Use TW.BabylonStaking.Proto.OutputBuilder.$Properties instead.
             */
            interface IOutputBuilder extends TW.BabylonStaking.Proto.OutputBuilder.$Properties {
            }

            /** Represents an OutputBuilder. */
            class OutputBuilder {

                /**
                 * Constructs a new OutputBuilder.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BabylonStaking.Proto.OutputBuilder.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /**
                 * Encodes the specified OutputBuilder message. Does not implicitly {@link TW.BabylonStaking.Proto.OutputBuilder.verify|verify} messages.
                 * @param message OutputBuilder message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.BabylonStaking.Proto.OutputBuilder.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OutputBuilder message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.BabylonStaking.Proto.OutputBuilder & TW.BabylonStaking.Proto.OutputBuilder.$Shape} OutputBuilder
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BabylonStaking.Proto.OutputBuilder & TW.BabylonStaking.Proto.OutputBuilder.$Shape;

                /**
                 * Gets the type url for OutputBuilder
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace OutputBuilder {

                /** Properties of an OutputBuilder. */
                interface $Properties {

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an OutputBuilder. */
                type $Shape = TW.BabylonStaking.Proto.OutputBuilder.$Properties;

                /**
                 * Properties of a StakingOutput.
                 * @deprecated Use TW.BabylonStaking.Proto.OutputBuilder.StakingOutput.$Properties instead.
                 */
                interface IStakingOutput extends TW.BabylonStaking.Proto.OutputBuilder.StakingOutput.$Properties {
                }

                /** Represents a StakingOutput. */
                class StakingOutput {

                    /**
                     * Constructs a new StakingOutput.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BabylonStaking.Proto.OutputBuilder.StakingOutput.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** StakingOutput params. */
                    params?: (TW.BabylonStaking.Proto.StakingInfo.$Properties|null);

                    /**
                     * Encodes the specified StakingOutput message. Does not implicitly {@link TW.BabylonStaking.Proto.OutputBuilder.StakingOutput.verify|verify} messages.
                     * @param message StakingOutput message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.BabylonStaking.Proto.OutputBuilder.StakingOutput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StakingOutput message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.BabylonStaking.Proto.OutputBuilder.StakingOutput & TW.BabylonStaking.Proto.OutputBuilder.StakingOutput.$Shape} StakingOutput
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BabylonStaking.Proto.OutputBuilder.StakingOutput & TW.BabylonStaking.Proto.OutputBuilder.StakingOutput.$Shape;

                    /**
                     * Gets the type url for StakingOutput
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace StakingOutput {

                    /** Properties of a StakingOutput. */
                    interface $Properties {

                        /** StakingOutput params */
                        params?: (TW.BabylonStaking.Proto.StakingInfo.$Properties|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a StakingOutput. */
                    type $Shape = TW.BabylonStaking.Proto.OutputBuilder.StakingOutput.$Properties;
                }

                /**
                 * Properties of an UnbondingOutput.
                 * @deprecated Use TW.BabylonStaking.Proto.OutputBuilder.UnbondingOutput.$Properties instead.
                 */
                interface IUnbondingOutput extends TW.BabylonStaking.Proto.OutputBuilder.UnbondingOutput.$Properties {
                }

                /** Represents an UnbondingOutput. */
                class UnbondingOutput {

                    /**
                     * Constructs a new UnbondingOutput.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BabylonStaking.Proto.OutputBuilder.UnbondingOutput.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** UnbondingOutput params. */
                    params?: (TW.BabylonStaking.Proto.StakingInfo.$Properties|null);

                    /**
                     * Encodes the specified UnbondingOutput message. Does not implicitly {@link TW.BabylonStaking.Proto.OutputBuilder.UnbondingOutput.verify|verify} messages.
                     * @param message UnbondingOutput message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.BabylonStaking.Proto.OutputBuilder.UnbondingOutput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UnbondingOutput message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.BabylonStaking.Proto.OutputBuilder.UnbondingOutput & TW.BabylonStaking.Proto.OutputBuilder.UnbondingOutput.$Shape} UnbondingOutput
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BabylonStaking.Proto.OutputBuilder.UnbondingOutput & TW.BabylonStaking.Proto.OutputBuilder.UnbondingOutput.$Shape;

                    /**
                     * Gets the type url for UnbondingOutput
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace UnbondingOutput {

                    /** Properties of an UnbondingOutput. */
                    interface $Properties {

                        /** UnbondingOutput params */
                        params?: (TW.BabylonStaking.Proto.StakingInfo.$Properties|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an UnbondingOutput. */
                    type $Shape = TW.BabylonStaking.Proto.OutputBuilder.UnbondingOutput.$Properties;
                }

                /**
                 * Properties of an OpReturn.
                 * @deprecated Use TW.BabylonStaking.Proto.OutputBuilder.OpReturn.$Properties instead.
                 */
                interface IOpReturn extends TW.BabylonStaking.Proto.OutputBuilder.OpReturn.$Properties {
                }

                /** Represents an OpReturn. */
                class OpReturn {

                    /**
                     * Constructs a new OpReturn.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BabylonStaking.Proto.OutputBuilder.OpReturn.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** OpReturn tag. */
                    tag: Uint8Array;

                    /** OpReturn stakerPublicKey. */
                    stakerPublicKey: Uint8Array;

                    /** OpReturn finalityProviderPublicKey. */
                    finalityProviderPublicKey: Uint8Array;

                    /** OpReturn stakingTime. */
                    stakingTime: number;

                    /**
                     * Encodes the specified OpReturn message. Does not implicitly {@link TW.BabylonStaking.Proto.OutputBuilder.OpReturn.verify|verify} messages.
                     * @param message OpReturn message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.BabylonStaking.Proto.OutputBuilder.OpReturn.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OpReturn message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.BabylonStaking.Proto.OutputBuilder.OpReturn & TW.BabylonStaking.Proto.OutputBuilder.OpReturn.$Shape} OpReturn
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BabylonStaking.Proto.OutputBuilder.OpReturn & TW.BabylonStaking.Proto.OutputBuilder.OpReturn.$Shape;

                    /**
                     * Gets the type url for OpReturn
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace OpReturn {

                    /** Properties of an OpReturn. */
                    interface $Properties {

                        /** OpReturn tag */
                        tag?: (Uint8Array|null);

                        /** OpReturn stakerPublicKey */
                        stakerPublicKey?: (Uint8Array|null);

                        /** OpReturn finalityProviderPublicKey */
                        finalityProviderPublicKey?: (Uint8Array|null);

                        /** OpReturn stakingTime */
                        stakingTime?: (number|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an OpReturn. */
                    type $Shape = TW.BabylonStaking.Proto.OutputBuilder.OpReturn.$Properties;
                }
            }
        }
    }

    /** Namespace Bitcoin. */
    namespace Bitcoin {

        /** Namespace Proto. */
        namespace Proto {

            /**
             * Properties of a Transaction.
             * @deprecated Use TW.Bitcoin.Proto.Transaction.$Properties instead.
             */
            interface ITransaction extends TW.Bitcoin.Proto.Transaction.$Properties {
            }

            /** Represents a Transaction. */
            class Transaction {

                /**
                 * Constructs a new Transaction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Bitcoin.Proto.Transaction.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Transaction version. */
                version: number;

                /** Transaction lockTime. */
                lockTime: number;

                /** Transaction inputs. */
                inputs: TW.Bitcoin.Proto.TransactionInput.$Properties[];

                /** Transaction outputs. */
                outputs: TW.Bitcoin.Proto.TransactionOutput.$Properties[];

                /**
                 * Encodes the specified Transaction message. Does not implicitly {@link TW.Bitcoin.Proto.Transaction.verify|verify} messages.
                 * @param message Transaction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Bitcoin.Proto.Transaction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Transaction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Bitcoin.Proto.Transaction & TW.Bitcoin.Proto.Transaction.$Shape} Transaction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Bitcoin.Proto.Transaction & TW.Bitcoin.Proto.Transaction.$Shape;

                /**
                 * Gets the type url for Transaction
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Transaction {

                /** Properties of a Transaction. */
                interface $Properties {

                    /** Transaction version */
                    version?: (number|null);

                    /** Transaction lockTime */
                    lockTime?: (number|null);

                    /** Transaction inputs */
                    inputs?: (TW.Bitcoin.Proto.TransactionInput.$Properties[]|null);

                    /** Transaction outputs */
                    outputs?: (TW.Bitcoin.Proto.TransactionOutput.$Properties[]|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a Transaction. */
                type $Shape = TW.Bitcoin.Proto.Transaction.$Properties;
            }

            /**
             * Properties of a TransactionInput.
             * @deprecated Use TW.Bitcoin.Proto.TransactionInput.$Properties instead.
             */
            interface ITransactionInput extends TW.Bitcoin.Proto.TransactionInput.$Properties {
            }

            /** Represents a TransactionInput. */
            class TransactionInput {

                /**
                 * Constructs a new TransactionInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Bitcoin.Proto.TransactionInput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** TransactionInput previousOutput. */
                previousOutput?: (TW.Bitcoin.Proto.OutPoint.$Properties|null);

                /** TransactionInput sequence. */
                sequence: number;

                /** TransactionInput script. */
                script: Uint8Array;

                /**
                 * Encodes the specified TransactionInput message. Does not implicitly {@link TW.Bitcoin.Proto.TransactionInput.verify|verify} messages.
                 * @param message TransactionInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Bitcoin.Proto.TransactionInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Bitcoin.Proto.TransactionInput & TW.Bitcoin.Proto.TransactionInput.$Shape} TransactionInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Bitcoin.Proto.TransactionInput & TW.Bitcoin.Proto.TransactionInput.$Shape;

                /**
                 * Gets the type url for TransactionInput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace TransactionInput {

                /** Properties of a TransactionInput. */
                interface $Properties {

                    /** TransactionInput previousOutput */
                    previousOutput?: (TW.Bitcoin.Proto.OutPoint.$Properties|null);

                    /** TransactionInput sequence */
                    sequence?: (number|null);

                    /** TransactionInput script */
                    script?: (Uint8Array|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a TransactionInput. */
                type $Shape = TW.Bitcoin.Proto.TransactionInput.$Properties;
            }

            /**
             * Properties of an OutPoint.
             * @deprecated Use TW.Bitcoin.Proto.OutPoint.$Properties instead.
             */
            interface IOutPoint extends TW.Bitcoin.Proto.OutPoint.$Properties {
            }

            /** Represents an OutPoint. */
            class OutPoint {

                /**
                 * Constructs a new OutPoint.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Bitcoin.Proto.OutPoint.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** OutPoint hash. */
                hash: Uint8Array;

                /** OutPoint index. */
                index: number;

                /** OutPoint sequence. */
                sequence: number;

                /** OutPoint tree. */
                tree: number;

                /**
                 * Encodes the specified OutPoint message. Does not implicitly {@link TW.Bitcoin.Proto.OutPoint.verify|verify} messages.
                 * @param message OutPoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Bitcoin.Proto.OutPoint.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OutPoint message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Bitcoin.Proto.OutPoint & TW.Bitcoin.Proto.OutPoint.$Shape} OutPoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Bitcoin.Proto.OutPoint & TW.Bitcoin.Proto.OutPoint.$Shape;

                /**
                 * Gets the type url for OutPoint
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace OutPoint {

                /** Properties of an OutPoint. */
                interface $Properties {

                    /** OutPoint hash */
                    hash?: (Uint8Array|null);

                    /** OutPoint index */
                    index?: (number|null);

                    /** OutPoint sequence */
                    sequence?: (number|null);

                    /** OutPoint tree */
                    tree?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an OutPoint. */
                type $Shape = TW.Bitcoin.Proto.OutPoint.$Properties;
            }

            /**
             * Properties of a TransactionOutput.
             * @deprecated Use TW.Bitcoin.Proto.TransactionOutput.$Properties instead.
             */
            interface ITransactionOutput extends TW.Bitcoin.Proto.TransactionOutput.$Properties {
            }

            /** Represents a TransactionOutput. */
            class TransactionOutput {

                /**
                 * Constructs a new TransactionOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Bitcoin.Proto.TransactionOutput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** TransactionOutput value. */
                value: number;

                /** TransactionOutput script. */
                script: Uint8Array;

                /** TransactionOutput spendingScript. */
                spendingScript: Uint8Array;

                /**
                 * Encodes the specified TransactionOutput message. Does not implicitly {@link TW.Bitcoin.Proto.TransactionOutput.verify|verify} messages.
                 * @param message TransactionOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Bitcoin.Proto.TransactionOutput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Bitcoin.Proto.TransactionOutput & TW.Bitcoin.Proto.TransactionOutput.$Shape} TransactionOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Bitcoin.Proto.TransactionOutput & TW.Bitcoin.Proto.TransactionOutput.$Shape;

                /**
                 * Gets the type url for TransactionOutput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace TransactionOutput {

                /** Properties of a TransactionOutput. */
                interface $Properties {

                    /** TransactionOutput value */
                    value?: (number|null);

                    /** TransactionOutput script */
                    script?: (Uint8Array|null);

                    /** TransactionOutput spendingScript */
                    spendingScript?: (Uint8Array|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a TransactionOutput. */
                type $Shape = TW.Bitcoin.Proto.TransactionOutput.$Properties;
            }

            /**
             * Properties of an UnspentTransaction.
             * @deprecated Use TW.Bitcoin.Proto.UnspentTransaction.$Properties instead.
             */
            interface IUnspentTransaction extends TW.Bitcoin.Proto.UnspentTransaction.$Properties {
            }

            /** Represents an UnspentTransaction. */
            class UnspentTransaction {

                /**
                 * Constructs a new UnspentTransaction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Bitcoin.Proto.UnspentTransaction.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** UnspentTransaction outPoint. */
                outPoint?: (TW.Bitcoin.Proto.OutPoint.$Properties|null);

                /** UnspentTransaction script. */
                script: Uint8Array;

                /** UnspentTransaction amount. */
                amount: number;

                /** UnspentTransaction variant. */
                variant: TW.Bitcoin.Proto.TransactionVariant;

                /** UnspentTransaction spendingScript. */
                spendingScript: Uint8Array;

                /**
                 * Encodes the specified UnspentTransaction message. Does not implicitly {@link TW.Bitcoin.Proto.UnspentTransaction.verify|verify} messages.
                 * @param message UnspentTransaction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Bitcoin.Proto.UnspentTransaction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UnspentTransaction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Bitcoin.Proto.UnspentTransaction & TW.Bitcoin.Proto.UnspentTransaction.$Shape} UnspentTransaction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Bitcoin.Proto.UnspentTransaction & TW.Bitcoin.Proto.UnspentTransaction.$Shape;

                /**
                 * Gets the type url for UnspentTransaction
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace UnspentTransaction {

                /** Properties of an UnspentTransaction. */
                interface $Properties {

                    /** UnspentTransaction outPoint */
                    outPoint?: (TW.Bitcoin.Proto.OutPoint.$Properties|null);

                    /** UnspentTransaction script */
                    script?: (Uint8Array|null);

                    /** UnspentTransaction amount */
                    amount?: (number|null);

                    /** UnspentTransaction variant */
                    variant?: (TW.Bitcoin.Proto.TransactionVariant|null);

                    /** UnspentTransaction spendingScript */
                    spendingScript?: (Uint8Array|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an UnspentTransaction. */
                type $Shape = TW.Bitcoin.Proto.UnspentTransaction.$Properties;
            }

            /** TransactionVariant enum. */
            enum TransactionVariant {

                /** P2PKH value */
                P2PKH = 0,

                /** P2WPKH value */
                P2WPKH = 1,

                /** P2TRKEYPATH value */
                P2TRKEYPATH = 2,

                /** BRC20TRANSFER value */
                BRC20TRANSFER = 3,

                /** NFTINSCRIPTION value */
                NFTINSCRIPTION = 4
            }

            /**
             * Properties of an OutputAddress.
             * @deprecated Use TW.Bitcoin.Proto.OutputAddress.$Properties instead.
             */
            interface IOutputAddress extends TW.Bitcoin.Proto.OutputAddress.$Properties {
            }

            /** Represents an OutputAddress. */
            class OutputAddress {

                /**
                 * Constructs a new OutputAddress.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Bitcoin.Proto.OutputAddress.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** OutputAddress toAddress. */
                toAddress: string;

                /** OutputAddress amount. */
                amount: number;

                /**
                 * Encodes the specified OutputAddress message. Does not implicitly {@link TW.Bitcoin.Proto.OutputAddress.verify|verify} messages.
                 * @param message OutputAddress message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Bitcoin.Proto.OutputAddress.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OutputAddress message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Bitcoin.Proto.OutputAddress & TW.Bitcoin.Proto.OutputAddress.$Shape} OutputAddress
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Bitcoin.Proto.OutputAddress & TW.Bitcoin.Proto.OutputAddress.$Shape;

                /**
                 * Gets the type url for OutputAddress
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace OutputAddress {

                /** Properties of an OutputAddress. */
                interface $Properties {

                    /** OutputAddress toAddress */
                    toAddress?: (string|null);

                    /** OutputAddress amount */
                    amount?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an OutputAddress. */
                type $Shape = TW.Bitcoin.Proto.OutputAddress.$Properties;
            }

            /**
             * Properties of an OutputIndex.
             * @deprecated Use TW.Bitcoin.Proto.OutputIndex.$Properties instead.
             */
            interface IOutputIndex extends TW.Bitcoin.Proto.OutputIndex.$Properties {
            }

            /** Represents an OutputIndex. */
            class OutputIndex {

                /**
                 * Constructs a new OutputIndex.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Bitcoin.Proto.OutputIndex.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** OutputIndex index. */
                index: number;

                /**
                 * Encodes the specified OutputIndex message. Does not implicitly {@link TW.Bitcoin.Proto.OutputIndex.verify|verify} messages.
                 * @param message OutputIndex message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Bitcoin.Proto.OutputIndex.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OutputIndex message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Bitcoin.Proto.OutputIndex & TW.Bitcoin.Proto.OutputIndex.$Shape} OutputIndex
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Bitcoin.Proto.OutputIndex & TW.Bitcoin.Proto.OutputIndex.$Shape;

                /**
                 * Gets the type url for OutputIndex
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace OutputIndex {

                /** Properties of an OutputIndex. */
                interface $Properties {

                    /** OutputIndex index */
                    index?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an OutputIndex. */
                type $Shape = TW.Bitcoin.Proto.OutputIndex.$Properties;
            }

            /**
             * Properties of a SigningInput.
             * @deprecated Use TW.Bitcoin.Proto.SigningInput.$Properties instead.
             */
            interface ISigningInput extends TW.Bitcoin.Proto.SigningInput.$Properties {
            }

            /** Represents a SigningInput. */
            class SigningInput {

                /**
                 * Constructs a new SigningInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Bitcoin.Proto.SigningInput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** SigningInput hashType. */
                hashType: number;

                /** SigningInput amount. */
                amount: number;

                /** SigningInput byteFee. */
                byteFee: number;

                /** SigningInput toAddress. */
                toAddress: string;

                /** SigningInput changeAddress. */
                changeAddress: string;

                /** SigningInput privateKey. */
                privateKey: Uint8Array[];

                /** SigningInput scripts. */
                scripts: { [k: string]: Uint8Array };

                /** SigningInput utxo. */
                utxo: TW.Bitcoin.Proto.UnspentTransaction.$Properties[];

                /** SigningInput useMaxAmount. */
                useMaxAmount: boolean;

                /** SigningInput coinType. */
                coinType: number;

                /** SigningInput plan. */
                plan?: (TW.Bitcoin.Proto.TransactionPlan.$Properties|null);

                /** SigningInput lockTime. */
                lockTime: number;

                /** SigningInput outputOpReturn. */
                outputOpReturn: Uint8Array;

                /** SigningInput outputOpReturnIndex. */
                outputOpReturnIndex?: (TW.Bitcoin.Proto.OutputIndex.$Properties|null);

                /** SigningInput extraOutputs. */
                extraOutputs: TW.Bitcoin.Proto.OutputAddress.$Properties[];

                /** SigningInput useMaxUtxo. */
                useMaxUtxo: boolean;

                /** SigningInput disableDustFilter. */
                disableDustFilter: boolean;

                /** SigningInput time. */
                time: number;

                /** SigningInput zip_0317. */
                zip_0317: boolean;

                /** SigningInput signingV2. */
                signingV2?: (TW.BitcoinV2.Proto.SigningInput.$Properties|null);

                /** SigningInput fixedDustThreshold. */
                fixedDustThreshold?: (number|null);

                /** SigningInput dustPolicy. */
                dustPolicy?: "fixedDustThreshold";

                /**
                 * Encodes the specified SigningInput message. Does not implicitly {@link TW.Bitcoin.Proto.SigningInput.verify|verify} messages.
                 * @param message SigningInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Bitcoin.Proto.SigningInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Bitcoin.Proto.SigningInput & TW.Bitcoin.Proto.SigningInput.$Shape} SigningInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Bitcoin.Proto.SigningInput & TW.Bitcoin.Proto.SigningInput.$Shape;

                /**
                 * Gets the type url for SigningInput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace SigningInput {

                /** Properties of a SigningInput. */
                interface $Properties {

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
                    utxo?: (TW.Bitcoin.Proto.UnspentTransaction.$Properties[]|null);

                    /** SigningInput useMaxAmount */
                    useMaxAmount?: (boolean|null);

                    /** SigningInput coinType */
                    coinType?: (number|null);

                    /** SigningInput plan */
                    plan?: (TW.Bitcoin.Proto.TransactionPlan.$Properties|null);

                    /** SigningInput lockTime */
                    lockTime?: (number|null);

                    /** SigningInput outputOpReturn */
                    outputOpReturn?: (Uint8Array|null);

                    /** SigningInput outputOpReturnIndex */
                    outputOpReturnIndex?: (TW.Bitcoin.Proto.OutputIndex.$Properties|null);

                    /** SigningInput extraOutputs */
                    extraOutputs?: (TW.Bitcoin.Proto.OutputAddress.$Properties[]|null);

                    /** SigningInput useMaxUtxo */
                    useMaxUtxo?: (boolean|null);

                    /** SigningInput disableDustFilter */
                    disableDustFilter?: (boolean|null);

                    /** SigningInput time */
                    time?: (number|null);

                    /** SigningInput zip_0317 */
                    zip_0317?: (boolean|null);

                    /** SigningInput signingV2 */
                    signingV2?: (TW.BitcoinV2.Proto.SigningInput.$Properties|null);

                    /** SigningInput fixedDustThreshold */
                    fixedDustThreshold?: (number|null);

                    /** SigningInput dustPolicy */
                    dustPolicy?: "fixedDustThreshold";

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Narrowed shape of a SigningInput. */
                type $Shape = {
                  hashType?: number|null;
                  amount?: number|null;
                  byteFee?: number|null;
                  toAddress?: string|null;
                  changeAddress?: string|null;
                  privateKey?: Uint8Array[]|null;
                  scripts?: { [k: string]: Uint8Array }|null;
                  utxo?: TW.Bitcoin.Proto.UnspentTransaction.$Shape[]|null;
                  useMaxAmount?: boolean|null;
                  coinType?: number|null;
                  plan?: TW.Bitcoin.Proto.TransactionPlan.$Shape|null;
                  lockTime?: number|null;
                  outputOpReturn?: Uint8Array|null;
                  outputOpReturnIndex?: TW.Bitcoin.Proto.OutputIndex.$Shape|null;
                  extraOutputs?: TW.Bitcoin.Proto.OutputAddress.$Shape[]|null;
                  useMaxUtxo?: boolean|null;
                  disableDustFilter?: boolean|null;
                  time?: number|null;
                  zip_0317?: boolean|null;
                  signingV2?: TW.BitcoinV2.Proto.SigningInput.$Shape|null;
                  fixedDustThreshold?: number|null;
                  $unknowns?: Uint8Array[];
                } & (
                  ({ dustPolicy?: undefined; fixedDustThreshold?: null }|{ dustPolicy?: "fixedDustThreshold"; fixedDustThreshold: number })
                );
            }

            /**
             * Properties of a TransactionPlan.
             * @deprecated Use TW.Bitcoin.Proto.TransactionPlan.$Properties instead.
             */
            interface ITransactionPlan extends TW.Bitcoin.Proto.TransactionPlan.$Properties {
            }

            /** Represents a TransactionPlan. */
            class TransactionPlan {

                /**
                 * Constructs a new TransactionPlan.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Bitcoin.Proto.TransactionPlan.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** TransactionPlan amount. */
                amount: number;

                /** TransactionPlan availableAmount. */
                availableAmount: number;

                /** TransactionPlan fee. */
                fee: number;

                /** TransactionPlan change. */
                change: number;

                /** TransactionPlan utxos. */
                utxos: TW.Bitcoin.Proto.UnspentTransaction.$Properties[];

                /** TransactionPlan branchId. */
                branchId: Uint8Array;

                /** TransactionPlan error. */
                error: TW.Common.Proto.SigningError;

                /** TransactionPlan outputOpReturn. */
                outputOpReturn: Uint8Array;

                /** TransactionPlan outputOpReturnIndex. */
                outputOpReturnIndex?: (TW.Bitcoin.Proto.OutputIndex.$Properties|null);

                /** TransactionPlan preblockhash. */
                preblockhash: Uint8Array;

                /** TransactionPlan preblockheight. */
                preblockheight: number;

                /** TransactionPlan planningResultV2. */
                planningResultV2?: (TW.BitcoinV2.Proto.TransactionPlan.$Properties|null);

                /**
                 * Encodes the specified TransactionPlan message. Does not implicitly {@link TW.Bitcoin.Proto.TransactionPlan.verify|verify} messages.
                 * @param message TransactionPlan message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Bitcoin.Proto.TransactionPlan.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionPlan message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Bitcoin.Proto.TransactionPlan & TW.Bitcoin.Proto.TransactionPlan.$Shape} TransactionPlan
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Bitcoin.Proto.TransactionPlan & TW.Bitcoin.Proto.TransactionPlan.$Shape;

                /**
                 * Gets the type url for TransactionPlan
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace TransactionPlan {

                /** Properties of a TransactionPlan. */
                interface $Properties {

                    /** TransactionPlan amount */
                    amount?: (number|null);

                    /** TransactionPlan availableAmount */
                    availableAmount?: (number|null);

                    /** TransactionPlan fee */
                    fee?: (number|null);

                    /** TransactionPlan change */
                    change?: (number|null);

                    /** TransactionPlan utxos */
                    utxos?: (TW.Bitcoin.Proto.UnspentTransaction.$Properties[]|null);

                    /** TransactionPlan branchId */
                    branchId?: (Uint8Array|null);

                    /** TransactionPlan error */
                    error?: (TW.Common.Proto.SigningError|null);

                    /** TransactionPlan outputOpReturn */
                    outputOpReturn?: (Uint8Array|null);

                    /** TransactionPlan outputOpReturnIndex */
                    outputOpReturnIndex?: (TW.Bitcoin.Proto.OutputIndex.$Properties|null);

                    /** TransactionPlan preblockhash */
                    preblockhash?: (Uint8Array|null);

                    /** TransactionPlan preblockheight */
                    preblockheight?: (number|null);

                    /** TransactionPlan planningResultV2 */
                    planningResultV2?: (TW.BitcoinV2.Proto.TransactionPlan.$Properties|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a TransactionPlan. */
                type $Shape = {
                  amount?: number|null;
                  availableAmount?: number|null;
                  fee?: number|null;
                  change?: number|null;
                  utxos?: TW.Bitcoin.Proto.UnspentTransaction.$Shape[]|null;
                  branchId?: Uint8Array|null;
                  error?: TW.Common.Proto.SigningError|null;
                  outputOpReturn?: Uint8Array|null;
                  outputOpReturnIndex?: TW.Bitcoin.Proto.OutputIndex.$Shape|null;
                  preblockhash?: Uint8Array|null;
                  preblockheight?: number|null;
                  planningResultV2?: TW.BitcoinV2.Proto.TransactionPlan.$Shape|null;
                  $unknowns?: Uint8Array[];
                };
            }

            /**
             * Properties of a SigningOutput.
             * @deprecated Use TW.Bitcoin.Proto.SigningOutput.$Properties instead.
             */
            interface ISigningOutput extends TW.Bitcoin.Proto.SigningOutput.$Properties {
            }

            /** Represents a SigningOutput. */
            class SigningOutput {

                /**
                 * Constructs a new SigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Bitcoin.Proto.SigningOutput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** SigningOutput transaction. */
                transaction?: (TW.Bitcoin.Proto.Transaction.$Properties|null);

                /** SigningOutput encoded. */
                encoded: Uint8Array;

                /** SigningOutput transactionId. */
                transactionId: string;

                /** SigningOutput error. */
                error: TW.Common.Proto.SigningError;

                /** SigningOutput errorMessage. */
                errorMessage: string;

                /** SigningOutput signingResultV2. */
                signingResultV2?: (TW.BitcoinV2.Proto.SigningOutput.$Properties|null);

                /**
                 * Encodes the specified SigningOutput message. Does not implicitly {@link TW.Bitcoin.Proto.SigningOutput.verify|verify} messages.
                 * @param message SigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Bitcoin.Proto.SigningOutput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Bitcoin.Proto.SigningOutput & TW.Bitcoin.Proto.SigningOutput.$Shape} SigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Bitcoin.Proto.SigningOutput & TW.Bitcoin.Proto.SigningOutput.$Shape;

                /**
                 * Gets the type url for SigningOutput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace SigningOutput {

                /** Properties of a SigningOutput. */
                interface $Properties {

                    /** SigningOutput transaction */
                    transaction?: (TW.Bitcoin.Proto.Transaction.$Properties|null);

                    /** SigningOutput encoded */
                    encoded?: (Uint8Array|null);

                    /** SigningOutput transactionId */
                    transactionId?: (string|null);

                    /** SigningOutput error */
                    error?: (TW.Common.Proto.SigningError|null);

                    /** SigningOutput errorMessage */
                    errorMessage?: (string|null);

                    /** SigningOutput signingResultV2 */
                    signingResultV2?: (TW.BitcoinV2.Proto.SigningOutput.$Properties|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a SigningOutput. */
                type $Shape = {
                  transaction?: TW.Bitcoin.Proto.Transaction.$Shape|null;
                  encoded?: Uint8Array|null;
                  transactionId?: string|null;
                  error?: TW.Common.Proto.SigningError|null;
                  errorMessage?: string|null;
                  signingResultV2?: TW.BitcoinV2.Proto.SigningOutput.$Shape|null;
                  $unknowns?: Uint8Array[];
                };
            }

            /**
             * Properties of a HashPublicKey.
             * @deprecated Use TW.Bitcoin.Proto.HashPublicKey.$Properties instead.
             */
            interface IHashPublicKey extends TW.Bitcoin.Proto.HashPublicKey.$Properties {
            }

            /** Pre-image hash to be used for signing */
            class HashPublicKey {

                /**
                 * Constructs a new HashPublicKey.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Bitcoin.Proto.HashPublicKey.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Pre-image data hash that will be used for signing */
                dataHash: Uint8Array;

                /** public key hash used for signing */
                publicKeyHash: Uint8Array;

                /**
                 * Encodes the specified HashPublicKey message. Does not implicitly {@link TW.Bitcoin.Proto.HashPublicKey.verify|verify} messages.
                 * @param message HashPublicKey message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Bitcoin.Proto.HashPublicKey.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HashPublicKey message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Bitcoin.Proto.HashPublicKey & TW.Bitcoin.Proto.HashPublicKey.$Shape} HashPublicKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Bitcoin.Proto.HashPublicKey & TW.Bitcoin.Proto.HashPublicKey.$Shape;

                /**
                 * Gets the type url for HashPublicKey
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace HashPublicKey {

                /** Properties of a HashPublicKey. */
                interface $Properties {

                    /** Pre-image data hash that will be used for signing */
                    dataHash?: (Uint8Array|null);

                    /** public key hash used for signing */
                    publicKeyHash?: (Uint8Array|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a HashPublicKey. */
                type $Shape = TW.Bitcoin.Proto.HashPublicKey.$Properties;
            }

            /**
             * Properties of a PreSigningOutput.
             * @deprecated Use TW.Bitcoin.Proto.PreSigningOutput.$Properties instead.
             */
            interface IPreSigningOutput extends TW.Bitcoin.Proto.PreSigningOutput.$Properties {
            }

            /** Transaction pre-signing output */
            class PreSigningOutput {

                /**
                 * Constructs a new PreSigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Bitcoin.Proto.PreSigningOutput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** hash, public key list */
                hashPublicKeys: TW.Bitcoin.Proto.HashPublicKey.$Properties[];

                /** error code, 0 is ok, other codes will be treated as errors */
                error: TW.Common.Proto.SigningError;

                /** error description */
                errorMessage: string;

                /** PreSigningOutput preSigningResultV2. */
                preSigningResultV2?: (TW.BitcoinV2.Proto.PreSigningOutput.$Properties|null);

                /**
                 * Encodes the specified PreSigningOutput message. Does not implicitly {@link TW.Bitcoin.Proto.PreSigningOutput.verify|verify} messages.
                 * @param message PreSigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Bitcoin.Proto.PreSigningOutput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PreSigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Bitcoin.Proto.PreSigningOutput & TW.Bitcoin.Proto.PreSigningOutput.$Shape} PreSigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Bitcoin.Proto.PreSigningOutput & TW.Bitcoin.Proto.PreSigningOutput.$Shape;

                /**
                 * Gets the type url for PreSigningOutput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace PreSigningOutput {

                /** Properties of a PreSigningOutput. */
                interface $Properties {

                    /** hash, public key list */
                    hashPublicKeys?: (TW.Bitcoin.Proto.HashPublicKey.$Properties[]|null);

                    /** error code, 0 is ok, other codes will be treated as errors */
                    error?: (TW.Common.Proto.SigningError|null);

                    /** error description */
                    errorMessage?: (string|null);

                    /** PreSigningOutput preSigningResultV2 */
                    preSigningResultV2?: (TW.BitcoinV2.Proto.PreSigningOutput.$Properties|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a PreSigningOutput. */
                type $Shape = TW.Bitcoin.Proto.PreSigningOutput.$Properties;
            }
        }
    }

    /** Namespace BitcoinV2. */
    namespace BitcoinV2 {

        /** Namespace Proto. */
        namespace Proto {

            /** InputSelector enum. */
            enum InputSelector {

                /** SelectAscending value */
                SelectAscending = 0,

                /** SelectInOrder value */
                SelectInOrder = 1,

                /** SelectDescending value */
                SelectDescending = 2,

                /** UseAll value */
                UseAll = 10
            }

            /**
             * Properties of a PublicKeyOrHash.
             * @deprecated Use TW.BitcoinV2.Proto.PublicKeyOrHash.$Properties instead.
             */
            interface IPublicKeyOrHash extends TW.BitcoinV2.Proto.PublicKeyOrHash.$Properties {
            }

            /** Represents a PublicKeyOrHash. */
            class PublicKeyOrHash {

                /**
                 * Constructs a new PublicKeyOrHash.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BitcoinV2.Proto.PublicKeyOrHash.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** PublicKeyOrHash pubkey. */
                pubkey?: (Uint8Array|null);

                /** PublicKeyOrHash hash. */
                hash?: (Uint8Array|null);

                /** PublicKeyOrHash variant. */
                variant?: ("pubkey"|"hash");

                /**
                 * Encodes the specified PublicKeyOrHash message. Does not implicitly {@link TW.BitcoinV2.Proto.PublicKeyOrHash.verify|verify} messages.
                 * @param message PublicKeyOrHash message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.BitcoinV2.Proto.PublicKeyOrHash.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PublicKeyOrHash message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.BitcoinV2.Proto.PublicKeyOrHash & TW.BitcoinV2.Proto.PublicKeyOrHash.$Shape} PublicKeyOrHash
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.PublicKeyOrHash & TW.BitcoinV2.Proto.PublicKeyOrHash.$Shape;

                /**
                 * Gets the type url for PublicKeyOrHash
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace PublicKeyOrHash {

                /** Properties of a PublicKeyOrHash. */
                interface $Properties {

                    /** PublicKeyOrHash pubkey */
                    pubkey?: (Uint8Array|null);

                    /** PublicKeyOrHash hash */
                    hash?: (Uint8Array|null);

                    /** PublicKeyOrHash variant */
                    variant?: ("pubkey"|"hash");

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Narrowed shape of a PublicKeyOrHash. */
                type $Shape = {
                  pubkey?: Uint8Array|null;
                  hash?: Uint8Array|null;
                  $unknowns?: Uint8Array[];
                } & (
                  ({ variant?: undefined; pubkey?: null; hash?: null }|{ variant?: "pubkey"; pubkey: Uint8Array; hash?: null }|{ variant?: "hash"; pubkey?: null; hash: Uint8Array })
                );
            }

            /**
             * Properties of a PublicKeySignature.
             * @deprecated Use TW.BitcoinV2.Proto.PublicKeySignature.$Properties instead.
             */
            interface IPublicKeySignature extends TW.BitcoinV2.Proto.PublicKeySignature.$Properties {
            }

            /** Represents a PublicKeySignature. */
            class PublicKeySignature {

                /**
                 * Constructs a new PublicKeySignature.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BitcoinV2.Proto.PublicKeySignature.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** PublicKeySignature publicKey. */
                publicKey: Uint8Array;

                /** PublicKeySignature signature. */
                signature: Uint8Array;

                /**
                 * Encodes the specified PublicKeySignature message. Does not implicitly {@link TW.BitcoinV2.Proto.PublicKeySignature.verify|verify} messages.
                 * @param message PublicKeySignature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.BitcoinV2.Proto.PublicKeySignature.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PublicKeySignature message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.BitcoinV2.Proto.PublicKeySignature & TW.BitcoinV2.Proto.PublicKeySignature.$Shape} PublicKeySignature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.PublicKeySignature & TW.BitcoinV2.Proto.PublicKeySignature.$Shape;

                /**
                 * Gets the type url for PublicKeySignature
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace PublicKeySignature {

                /** Properties of a PublicKeySignature. */
                interface $Properties {

                    /** PublicKeySignature publicKey */
                    publicKey?: (Uint8Array|null);

                    /** PublicKeySignature signature */
                    signature?: (Uint8Array|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a PublicKeySignature. */
                type $Shape = TW.BitcoinV2.Proto.PublicKeySignature.$Properties;
            }

            /**
             * Properties of an Input.
             * @deprecated Use TW.BitcoinV2.Proto.Input.$Properties instead.
             */
            interface IInput extends TW.BitcoinV2.Proto.Input.$Properties {
            }

            /** Represents an Input. */
            class Input {

                /**
                 * Constructs a new Input.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BitcoinV2.Proto.Input.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Input outPoint. */
                outPoint?: (TW.Utxo.Proto.OutPoint.$Properties|null);

                /** Input value. */
                value: number;

                /** Input sighashType. */
                sighashType: number;

                /** Input sequence. */
                sequence?: (TW.BitcoinV2.Proto.Input.Sequence.$Properties|null);

                /** Input scriptBuilder. */
                scriptBuilder?: (TW.BitcoinV2.Proto.Input.InputBuilder.$Properties|null);

                /** Input scriptData. */
                scriptData?: (Uint8Array|null);

                /** Input receiverAddress. */
                receiverAddress?: (string|null);

                /** Input claimingScript. */
                claimingScript?: ("scriptBuilder"|"scriptData"|"receiverAddress");

                /**
                 * Encodes the specified Input message. Does not implicitly {@link TW.BitcoinV2.Proto.Input.verify|verify} messages.
                 * @param message Input message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.BitcoinV2.Proto.Input.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Input message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.BitcoinV2.Proto.Input & TW.BitcoinV2.Proto.Input.$Shape} Input
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.Input & TW.BitcoinV2.Proto.Input.$Shape;

                /**
                 * Gets the type url for Input
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Input {

                /** Properties of an Input. */
                interface $Properties {

                    /** Input outPoint */
                    outPoint?: (TW.Utxo.Proto.OutPoint.$Properties|null);

                    /** Input value */
                    value?: (number|null);

                    /** Input sighashType */
                    sighashType?: (number|null);

                    /** Input sequence */
                    sequence?: (TW.BitcoinV2.Proto.Input.Sequence.$Properties|null);

                    /** Input scriptBuilder */
                    scriptBuilder?: (TW.BitcoinV2.Proto.Input.InputBuilder.$Properties|null);

                    /** Input scriptData */
                    scriptData?: (Uint8Array|null);

                    /** Input receiverAddress */
                    receiverAddress?: (string|null);

                    /** Input claimingScript */
                    claimingScript?: ("scriptBuilder"|"scriptData"|"receiverAddress");

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Narrowed shape of an Input. */
                type $Shape = {
                  outPoint?: TW.Utxo.Proto.OutPoint.$Shape|null;
                  value?: number|null;
                  sighashType?: number|null;
                  sequence?: TW.BitcoinV2.Proto.Input.Sequence.$Shape|null;
                  scriptBuilder?: TW.BitcoinV2.Proto.Input.InputBuilder.$Shape|null;
                  scriptData?: Uint8Array|null;
                  receiverAddress?: string|null;
                  $unknowns?: Uint8Array[];
                } & (
                  ({ claimingScript?: undefined; scriptBuilder?: null; scriptData?: null; receiverAddress?: null }|{ claimingScript?: "scriptBuilder"; scriptBuilder: TW.BitcoinV2.Proto.Input.InputBuilder.$Shape; scriptData?: null; receiverAddress?: null }|{ claimingScript?: "scriptData"; scriptBuilder?: null; scriptData: Uint8Array; receiverAddress?: null }|{ claimingScript?: "receiverAddress"; scriptBuilder?: null; scriptData?: null; receiverAddress: string })
                );

                /**
                 * Properties of a Sequence.
                 * @deprecated Use TW.BitcoinV2.Proto.Input.Sequence.$Properties instead.
                 */
                interface ISequence extends TW.BitcoinV2.Proto.Input.Sequence.$Properties {
                }

                /** Represents a Sequence. */
                class Sequence {

                    /**
                     * Constructs a new Sequence.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BitcoinV2.Proto.Input.Sequence.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** Sequence sequence. */
                    sequence: number;

                    /**
                     * Encodes the specified Sequence message. Does not implicitly {@link TW.BitcoinV2.Proto.Input.Sequence.verify|verify} messages.
                     * @param message Sequence message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.BitcoinV2.Proto.Input.Sequence.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Sequence message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.BitcoinV2.Proto.Input.Sequence & TW.BitcoinV2.Proto.Input.Sequence.$Shape} Sequence
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.Input.Sequence & TW.BitcoinV2.Proto.Input.Sequence.$Shape;

                    /**
                     * Gets the type url for Sequence
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace Sequence {

                    /** Properties of a Sequence. */
                    interface $Properties {

                        /** Sequence sequence */
                        sequence?: (number|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a Sequence. */
                    type $Shape = TW.BitcoinV2.Proto.Input.Sequence.$Properties;
                }

                /**
                 * Properties of an InputBuilder.
                 * @deprecated Use TW.BitcoinV2.Proto.Input.InputBuilder.$Properties instead.
                 */
                interface IInputBuilder extends TW.BitcoinV2.Proto.Input.InputBuilder.$Properties {
                }

                /** Represents an InputBuilder. */
                class InputBuilder {

                    /**
                     * Constructs a new InputBuilder.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BitcoinV2.Proto.Input.InputBuilder.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** InputBuilder p2pk. */
                    p2pk?: (Uint8Array|null);

                    /** InputBuilder p2pkh. */
                    p2pkh?: (TW.BitcoinV2.Proto.PublicKeyOrHash.$Properties|null);

                    /** InputBuilder p2wpkh. */
                    p2wpkh?: (TW.BitcoinV2.Proto.PublicKeyOrHash.$Properties|null);

                    /** InputBuilder p2trKeyPath. */
                    p2trKeyPath?: (Uint8Array|null);

                    /** InputBuilder brc20Inscribe. */
                    brc20Inscribe?: (TW.BitcoinV2.Proto.Input.InputBrc20Inscription.$Properties|null);

                    /** InputBuilder babylonStakingTimelockPath. */
                    babylonStakingTimelockPath?: (TW.BabylonStaking.Proto.InputBuilder.StakingTimelockPath.$Properties|null);

                    /** InputBuilder babylonStakingUnbondingPath. */
                    babylonStakingUnbondingPath?: (TW.BabylonStaking.Proto.InputBuilder.StakingUnbondingPath.$Properties|null);

                    /** InputBuilder babylonStakingSlashingPath. */
                    babylonStakingSlashingPath?: (TW.BabylonStaking.Proto.InputBuilder.StakingSlashingPath.$Properties|null);

                    /** InputBuilder babylonUnbondingTimelockPath. */
                    babylonUnbondingTimelockPath?: (TW.BabylonStaking.Proto.InputBuilder.UnbondingTimelockPath.$Properties|null);

                    /** InputBuilder babylonUnbondingSlashingPath. */
                    babylonUnbondingSlashingPath?: (TW.BabylonStaking.Proto.InputBuilder.UnbondingSlashingPath.$Properties|null);

                    /** InputBuilder variant. */
                    variant?: ("p2pk"|"p2pkh"|"p2wpkh"|"p2trKeyPath"|"brc20Inscribe"|"babylonStakingTimelockPath"|"babylonStakingUnbondingPath"|"babylonStakingSlashingPath"|"babylonUnbondingTimelockPath"|"babylonUnbondingSlashingPath");

                    /**
                     * Encodes the specified InputBuilder message. Does not implicitly {@link TW.BitcoinV2.Proto.Input.InputBuilder.verify|verify} messages.
                     * @param message InputBuilder message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.BitcoinV2.Proto.Input.InputBuilder.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InputBuilder message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.BitcoinV2.Proto.Input.InputBuilder & TW.BitcoinV2.Proto.Input.InputBuilder.$Shape} InputBuilder
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.Input.InputBuilder & TW.BitcoinV2.Proto.Input.InputBuilder.$Shape;

                    /**
                     * Gets the type url for InputBuilder
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace InputBuilder {

                    /** Properties of an InputBuilder. */
                    interface $Properties {

                        /** InputBuilder p2pk */
                        p2pk?: (Uint8Array|null);

                        /** InputBuilder p2pkh */
                        p2pkh?: (TW.BitcoinV2.Proto.PublicKeyOrHash.$Properties|null);

                        /** InputBuilder p2wpkh */
                        p2wpkh?: (TW.BitcoinV2.Proto.PublicKeyOrHash.$Properties|null);

                        /** InputBuilder p2trKeyPath */
                        p2trKeyPath?: (Uint8Array|null);

                        /** InputBuilder brc20Inscribe */
                        brc20Inscribe?: (TW.BitcoinV2.Proto.Input.InputBrc20Inscription.$Properties|null);

                        /** InputBuilder babylonStakingTimelockPath */
                        babylonStakingTimelockPath?: (TW.BabylonStaking.Proto.InputBuilder.StakingTimelockPath.$Properties|null);

                        /** InputBuilder babylonStakingUnbondingPath */
                        babylonStakingUnbondingPath?: (TW.BabylonStaking.Proto.InputBuilder.StakingUnbondingPath.$Properties|null);

                        /** InputBuilder babylonStakingSlashingPath */
                        babylonStakingSlashingPath?: (TW.BabylonStaking.Proto.InputBuilder.StakingSlashingPath.$Properties|null);

                        /** InputBuilder babylonUnbondingTimelockPath */
                        babylonUnbondingTimelockPath?: (TW.BabylonStaking.Proto.InputBuilder.UnbondingTimelockPath.$Properties|null);

                        /** InputBuilder babylonUnbondingSlashingPath */
                        babylonUnbondingSlashingPath?: (TW.BabylonStaking.Proto.InputBuilder.UnbondingSlashingPath.$Properties|null);

                        /** InputBuilder variant */
                        variant?: ("p2pk"|"p2pkh"|"p2wpkh"|"p2trKeyPath"|"brc20Inscribe"|"babylonStakingTimelockPath"|"babylonStakingUnbondingPath"|"babylonStakingSlashingPath"|"babylonUnbondingTimelockPath"|"babylonUnbondingSlashingPath");

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Narrowed shape of an InputBuilder. */
                    type $Shape = {
                      p2pk?: Uint8Array|null;
                      p2pkh?: TW.BitcoinV2.Proto.PublicKeyOrHash.$Shape|null;
                      p2wpkh?: TW.BitcoinV2.Proto.PublicKeyOrHash.$Shape|null;
                      p2trKeyPath?: Uint8Array|null;
                      brc20Inscribe?: TW.BitcoinV2.Proto.Input.InputBrc20Inscription.$Shape|null;
                      babylonStakingTimelockPath?: TW.BabylonStaking.Proto.InputBuilder.StakingTimelockPath.$Shape|null;
                      babylonStakingUnbondingPath?: TW.BabylonStaking.Proto.InputBuilder.StakingUnbondingPath.$Shape|null;
                      babylonStakingSlashingPath?: TW.BabylonStaking.Proto.InputBuilder.StakingSlashingPath.$Shape|null;
                      babylonUnbondingTimelockPath?: TW.BabylonStaking.Proto.InputBuilder.UnbondingTimelockPath.$Shape|null;
                      babylonUnbondingSlashingPath?: TW.BabylonStaking.Proto.InputBuilder.UnbondingSlashingPath.$Shape|null;
                      $unknowns?: Uint8Array[];
                    } & (
                      ({ variant?: undefined; p2pk?: null; p2pkh?: null; p2wpkh?: null; p2trKeyPath?: null; brc20Inscribe?: null; babylonStakingTimelockPath?: null; babylonStakingUnbondingPath?: null; babylonStakingSlashingPath?: null; babylonUnbondingTimelockPath?: null; babylonUnbondingSlashingPath?: null }|{ variant?: "p2pk"; p2pk: Uint8Array; p2pkh?: null; p2wpkh?: null; p2trKeyPath?: null; brc20Inscribe?: null; babylonStakingTimelockPath?: null; babylonStakingUnbondingPath?: null; babylonStakingSlashingPath?: null; babylonUnbondingTimelockPath?: null; babylonUnbondingSlashingPath?: null }|{ variant?: "p2pkh"; p2pk?: null; p2pkh: TW.BitcoinV2.Proto.PublicKeyOrHash.$Shape; p2wpkh?: null; p2trKeyPath?: null; brc20Inscribe?: null; babylonStakingTimelockPath?: null; babylonStakingUnbondingPath?: null; babylonStakingSlashingPath?: null; babylonUnbondingTimelockPath?: null; babylonUnbondingSlashingPath?: null }|{ variant?: "p2wpkh"; p2pk?: null; p2pkh?: null; p2wpkh: TW.BitcoinV2.Proto.PublicKeyOrHash.$Shape; p2trKeyPath?: null; brc20Inscribe?: null; babylonStakingTimelockPath?: null; babylonStakingUnbondingPath?: null; babylonStakingSlashingPath?: null; babylonUnbondingTimelockPath?: null; babylonUnbondingSlashingPath?: null }|{ variant?: "p2trKeyPath"; p2pk?: null; p2pkh?: null; p2wpkh?: null; p2trKeyPath: Uint8Array; brc20Inscribe?: null; babylonStakingTimelockPath?: null; babylonStakingUnbondingPath?: null; babylonStakingSlashingPath?: null; babylonUnbondingTimelockPath?: null; babylonUnbondingSlashingPath?: null }|{ variant?: "brc20Inscribe"; p2pk?: null; p2pkh?: null; p2wpkh?: null; p2trKeyPath?: null; brc20Inscribe: TW.BitcoinV2.Proto.Input.InputBrc20Inscription.$Shape; babylonStakingTimelockPath?: null; babylonStakingUnbondingPath?: null; babylonStakingSlashingPath?: null; babylonUnbondingTimelockPath?: null; babylonUnbondingSlashingPath?: null }|{ variant?: "babylonStakingTimelockPath"; p2pk?: null; p2pkh?: null; p2wpkh?: null; p2trKeyPath?: null; brc20Inscribe?: null; babylonStakingTimelockPath: TW.BabylonStaking.Proto.InputBuilder.StakingTimelockPath.$Shape; babylonStakingUnbondingPath?: null; babylonStakingSlashingPath?: null; babylonUnbondingTimelockPath?: null; babylonUnbondingSlashingPath?: null }|{ variant?: "babylonStakingUnbondingPath"; p2pk?: null; p2pkh?: null; p2wpkh?: null; p2trKeyPath?: null; brc20Inscribe?: null; babylonStakingTimelockPath?: null; babylonStakingUnbondingPath: TW.BabylonStaking.Proto.InputBuilder.StakingUnbondingPath.$Shape; babylonStakingSlashingPath?: null; babylonUnbondingTimelockPath?: null; babylonUnbondingSlashingPath?: null }|{ variant?: "babylonStakingSlashingPath"; p2pk?: null; p2pkh?: null; p2wpkh?: null; p2trKeyPath?: null; brc20Inscribe?: null; babylonStakingTimelockPath?: null; babylonStakingUnbondingPath?: null; babylonStakingSlashingPath: TW.BabylonStaking.Proto.InputBuilder.StakingSlashingPath.$Shape; babylonUnbondingTimelockPath?: null; babylonUnbondingSlashingPath?: null }|{ variant?: "babylonUnbondingTimelockPath"; p2pk?: null; p2pkh?: null; p2wpkh?: null; p2trKeyPath?: null; brc20Inscribe?: null; babylonStakingTimelockPath?: null; babylonStakingUnbondingPath?: null; babylonStakingSlashingPath?: null; babylonUnbondingTimelockPath: TW.BabylonStaking.Proto.InputBuilder.UnbondingTimelockPath.$Shape; babylonUnbondingSlashingPath?: null }|{ variant?: "babylonUnbondingSlashingPath"; p2pk?: null; p2pkh?: null; p2wpkh?: null; p2trKeyPath?: null; brc20Inscribe?: null; babylonStakingTimelockPath?: null; babylonStakingUnbondingPath?: null; babylonStakingSlashingPath?: null; babylonUnbondingTimelockPath?: null; babylonUnbondingSlashingPath: TW.BabylonStaking.Proto.InputBuilder.UnbondingSlashingPath.$Shape })
                    );
                }

                /**
                 * Properties of an InputTaprootScriptPath.
                 * @deprecated Use TW.BitcoinV2.Proto.Input.InputTaprootScriptPath.$Properties instead.
                 */
                interface IInputTaprootScriptPath extends TW.BitcoinV2.Proto.Input.InputTaprootScriptPath.$Properties {
                }

                /** Represents an InputTaprootScriptPath. */
                class InputTaprootScriptPath {

                    /**
                     * Constructs a new InputTaprootScriptPath.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BitcoinV2.Proto.Input.InputTaprootScriptPath.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** InputTaprootScriptPath payload. */
                    payload: Uint8Array;

                    /** InputTaprootScriptPath controlBlock. */
                    controlBlock: Uint8Array;

                    /**
                     * Encodes the specified InputTaprootScriptPath message. Does not implicitly {@link TW.BitcoinV2.Proto.Input.InputTaprootScriptPath.verify|verify} messages.
                     * @param message InputTaprootScriptPath message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.BitcoinV2.Proto.Input.InputTaprootScriptPath.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InputTaprootScriptPath message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.BitcoinV2.Proto.Input.InputTaprootScriptPath & TW.BitcoinV2.Proto.Input.InputTaprootScriptPath.$Shape} InputTaprootScriptPath
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.Input.InputTaprootScriptPath & TW.BitcoinV2.Proto.Input.InputTaprootScriptPath.$Shape;

                    /**
                     * Gets the type url for InputTaprootScriptPath
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace InputTaprootScriptPath {

                    /** Properties of an InputTaprootScriptPath. */
                    interface $Properties {

                        /** InputTaprootScriptPath payload */
                        payload?: (Uint8Array|null);

                        /** InputTaprootScriptPath controlBlock */
                        controlBlock?: (Uint8Array|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an InputTaprootScriptPath. */
                    type $Shape = TW.BitcoinV2.Proto.Input.InputTaprootScriptPath.$Properties;
                }

                /**
                 * Properties of an InputBrc20Inscription.
                 * @deprecated Use TW.BitcoinV2.Proto.Input.InputBrc20Inscription.$Properties instead.
                 */
                interface IInputBrc20Inscription extends TW.BitcoinV2.Proto.Input.InputBrc20Inscription.$Properties {
                }

                /** Represents an InputBrc20Inscription. */
                class InputBrc20Inscription {

                    /**
                     * Constructs a new InputBrc20Inscription.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BitcoinV2.Proto.Input.InputBrc20Inscription.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** InputBrc20Inscription inscribeTo. */
                    inscribeTo: Uint8Array;

                    /** InputBrc20Inscription ticker. */
                    ticker: string;

                    /** InputBrc20Inscription transferAmount. */
                    transferAmount: string;

                    /**
                     * Encodes the specified InputBrc20Inscription message. Does not implicitly {@link TW.BitcoinV2.Proto.Input.InputBrc20Inscription.verify|verify} messages.
                     * @param message InputBrc20Inscription message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.BitcoinV2.Proto.Input.InputBrc20Inscription.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InputBrc20Inscription message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.BitcoinV2.Proto.Input.InputBrc20Inscription & TW.BitcoinV2.Proto.Input.InputBrc20Inscription.$Shape} InputBrc20Inscription
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.Input.InputBrc20Inscription & TW.BitcoinV2.Proto.Input.InputBrc20Inscription.$Shape;

                    /**
                     * Gets the type url for InputBrc20Inscription
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace InputBrc20Inscription {

                    /** Properties of an InputBrc20Inscription. */
                    interface $Properties {

                        /** InputBrc20Inscription inscribeTo */
                        inscribeTo?: (Uint8Array|null);

                        /** InputBrc20Inscription ticker */
                        ticker?: (string|null);

                        /** InputBrc20Inscription transferAmount */
                        transferAmount?: (string|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an InputBrc20Inscription. */
                    type $Shape = TW.BitcoinV2.Proto.Input.InputBrc20Inscription.$Properties;
                }
            }

            /**
             * Properties of an Output.
             * @deprecated Use TW.BitcoinV2.Proto.Output.$Properties instead.
             */
            interface IOutput extends TW.BitcoinV2.Proto.Output.$Properties {
            }

            /** Represents an Output. */
            class Output {

                /**
                 * Constructs a new Output.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BitcoinV2.Proto.Output.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Output value. */
                value: number;

                /** Output builder. */
                builder?: (TW.BitcoinV2.Proto.Output.OutputBuilder.$Properties|null);

                /** Output customScriptPubkey. */
                customScriptPubkey?: (Uint8Array|null);

                /** Output toAddress. */
                toAddress?: (string|null);

                /** Output toRecipient. */
                toRecipient?: ("builder"|"customScriptPubkey"|"toAddress");

                /**
                 * Encodes the specified Output message. Does not implicitly {@link TW.BitcoinV2.Proto.Output.verify|verify} messages.
                 * @param message Output message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.BitcoinV2.Proto.Output.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Output message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.BitcoinV2.Proto.Output & TW.BitcoinV2.Proto.Output.$Shape} Output
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.Output & TW.BitcoinV2.Proto.Output.$Shape;

                /**
                 * Gets the type url for Output
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Output {

                /** Properties of an Output. */
                interface $Properties {

                    /** Output value */
                    value?: (number|null);

                    /** Output builder */
                    builder?: (TW.BitcoinV2.Proto.Output.OutputBuilder.$Properties|null);

                    /** Output customScriptPubkey */
                    customScriptPubkey?: (Uint8Array|null);

                    /** Output toAddress */
                    toAddress?: (string|null);

                    /** Output toRecipient */
                    toRecipient?: ("builder"|"customScriptPubkey"|"toAddress");

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Narrowed shape of an Output. */
                type $Shape = {
                  value?: number|null;
                  builder?: TW.BitcoinV2.Proto.Output.OutputBuilder.$Shape|null;
                  customScriptPubkey?: Uint8Array|null;
                  toAddress?: string|null;
                  $unknowns?: Uint8Array[];
                } & (
                  ({ toRecipient?: undefined; builder?: null; customScriptPubkey?: null; toAddress?: null }|{ toRecipient?: "builder"; builder: TW.BitcoinV2.Proto.Output.OutputBuilder.$Shape; customScriptPubkey?: null; toAddress?: null }|{ toRecipient?: "customScriptPubkey"; builder?: null; customScriptPubkey: Uint8Array; toAddress?: null }|{ toRecipient?: "toAddress"; builder?: null; customScriptPubkey?: null; toAddress: string })
                );

                /**
                 * Properties of an OutputBuilder.
                 * @deprecated Use TW.BitcoinV2.Proto.Output.OutputBuilder.$Properties instead.
                 */
                interface IOutputBuilder extends TW.BitcoinV2.Proto.Output.OutputBuilder.$Properties {
                }

                /** Represents an OutputBuilder. */
                class OutputBuilder {

                    /**
                     * Constructs a new OutputBuilder.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BitcoinV2.Proto.Output.OutputBuilder.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** OutputBuilder p2sh. */
                    p2sh?: (TW.BitcoinV2.Proto.Output.RedeemScriptOrHash.$Properties|null);

                    /** OutputBuilder p2pk. */
                    p2pk?: (Uint8Array|null);

                    /** OutputBuilder p2pkh. */
                    p2pkh?: (TW.BitcoinV2.Proto.PublicKeyOrHash.$Properties|null);

                    /** OutputBuilder p2wsh. */
                    p2wsh?: (TW.BitcoinV2.Proto.Output.RedeemScriptOrHash.$Properties|null);

                    /** OutputBuilder p2wpkh. */
                    p2wpkh?: (TW.BitcoinV2.Proto.PublicKeyOrHash.$Properties|null);

                    /** OutputBuilder p2trKeyPath. */
                    p2trKeyPath?: (Uint8Array|null);

                    /** OutputBuilder p2trScriptPath. */
                    p2trScriptPath?: (TW.BitcoinV2.Proto.Output.OutputTaprootScriptPath.$Properties|null);

                    /** OutputBuilder p2trDangerousAssumeTweaked. */
                    p2trDangerousAssumeTweaked?: (Uint8Array|null);

                    /** OutputBuilder brc20Inscribe. */
                    brc20Inscribe?: (TW.BitcoinV2.Proto.Output.OutputBrc20Inscription.$Properties|null);

                    /** OutputBuilder opReturn. */
                    opReturn?: (Uint8Array|null);

                    /** OutputBuilder babylonStaking. */
                    babylonStaking?: (TW.BabylonStaking.Proto.OutputBuilder.StakingOutput.$Properties|null);

                    /** OutputBuilder babylonUnbonding. */
                    babylonUnbonding?: (TW.BabylonStaking.Proto.OutputBuilder.UnbondingOutput.$Properties|null);

                    /** OutputBuilder babylonStakingOpReturn. */
                    babylonStakingOpReturn?: (TW.BabylonStaking.Proto.OutputBuilder.OpReturn.$Properties|null);

                    /** OutputBuilder variant. */
                    variant?: ("p2sh"|"p2pk"|"p2pkh"|"p2wsh"|"p2wpkh"|"p2trKeyPath"|"p2trScriptPath"|"p2trDangerousAssumeTweaked"|"brc20Inscribe"|"opReturn"|"babylonStaking"|"babylonUnbonding"|"babylonStakingOpReturn");

                    /**
                     * Encodes the specified OutputBuilder message. Does not implicitly {@link TW.BitcoinV2.Proto.Output.OutputBuilder.verify|verify} messages.
                     * @param message OutputBuilder message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.BitcoinV2.Proto.Output.OutputBuilder.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OutputBuilder message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.BitcoinV2.Proto.Output.OutputBuilder & TW.BitcoinV2.Proto.Output.OutputBuilder.$Shape} OutputBuilder
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.Output.OutputBuilder & TW.BitcoinV2.Proto.Output.OutputBuilder.$Shape;

                    /**
                     * Gets the type url for OutputBuilder
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace OutputBuilder {

                    /** Properties of an OutputBuilder. */
                    interface $Properties {

                        /** OutputBuilder p2sh */
                        p2sh?: (TW.BitcoinV2.Proto.Output.RedeemScriptOrHash.$Properties|null);

                        /** OutputBuilder p2pk */
                        p2pk?: (Uint8Array|null);

                        /** OutputBuilder p2pkh */
                        p2pkh?: (TW.BitcoinV2.Proto.PublicKeyOrHash.$Properties|null);

                        /** OutputBuilder p2wsh */
                        p2wsh?: (TW.BitcoinV2.Proto.Output.RedeemScriptOrHash.$Properties|null);

                        /** OutputBuilder p2wpkh */
                        p2wpkh?: (TW.BitcoinV2.Proto.PublicKeyOrHash.$Properties|null);

                        /** OutputBuilder p2trKeyPath */
                        p2trKeyPath?: (Uint8Array|null);

                        /** OutputBuilder p2trScriptPath */
                        p2trScriptPath?: (TW.BitcoinV2.Proto.Output.OutputTaprootScriptPath.$Properties|null);

                        /** OutputBuilder p2trDangerousAssumeTweaked */
                        p2trDangerousAssumeTweaked?: (Uint8Array|null);

                        /** OutputBuilder brc20Inscribe */
                        brc20Inscribe?: (TW.BitcoinV2.Proto.Output.OutputBrc20Inscription.$Properties|null);

                        /** OutputBuilder opReturn */
                        opReturn?: (Uint8Array|null);

                        /** OutputBuilder babylonStaking */
                        babylonStaking?: (TW.BabylonStaking.Proto.OutputBuilder.StakingOutput.$Properties|null);

                        /** OutputBuilder babylonUnbonding */
                        babylonUnbonding?: (TW.BabylonStaking.Proto.OutputBuilder.UnbondingOutput.$Properties|null);

                        /** OutputBuilder babylonStakingOpReturn */
                        babylonStakingOpReturn?: (TW.BabylonStaking.Proto.OutputBuilder.OpReturn.$Properties|null);

                        /** OutputBuilder variant */
                        variant?: ("p2sh"|"p2pk"|"p2pkh"|"p2wsh"|"p2wpkh"|"p2trKeyPath"|"p2trScriptPath"|"p2trDangerousAssumeTweaked"|"brc20Inscribe"|"opReturn"|"babylonStaking"|"babylonUnbonding"|"babylonStakingOpReturn");

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Narrowed shape of an OutputBuilder. */
                    type $Shape = {
                      p2sh?: TW.BitcoinV2.Proto.Output.RedeemScriptOrHash.$Shape|null;
                      p2pk?: Uint8Array|null;
                      p2pkh?: TW.BitcoinV2.Proto.PublicKeyOrHash.$Shape|null;
                      p2wsh?: TW.BitcoinV2.Proto.Output.RedeemScriptOrHash.$Shape|null;
                      p2wpkh?: TW.BitcoinV2.Proto.PublicKeyOrHash.$Shape|null;
                      p2trKeyPath?: Uint8Array|null;
                      p2trScriptPath?: TW.BitcoinV2.Proto.Output.OutputTaprootScriptPath.$Shape|null;
                      p2trDangerousAssumeTweaked?: Uint8Array|null;
                      brc20Inscribe?: TW.BitcoinV2.Proto.Output.OutputBrc20Inscription.$Shape|null;
                      opReturn?: Uint8Array|null;
                      babylonStaking?: TW.BabylonStaking.Proto.OutputBuilder.StakingOutput.$Shape|null;
                      babylonUnbonding?: TW.BabylonStaking.Proto.OutputBuilder.UnbondingOutput.$Shape|null;
                      babylonStakingOpReturn?: TW.BabylonStaking.Proto.OutputBuilder.OpReturn.$Shape|null;
                      $unknowns?: Uint8Array[];
                    } & (
                      ({ variant?: undefined; p2sh?: null; p2pk?: null; p2pkh?: null; p2wsh?: null; p2wpkh?: null; p2trKeyPath?: null; p2trScriptPath?: null; p2trDangerousAssumeTweaked?: null; brc20Inscribe?: null; opReturn?: null; babylonStaking?: null; babylonUnbonding?: null; babylonStakingOpReturn?: null }|{ variant?: "p2sh"; p2sh: TW.BitcoinV2.Proto.Output.RedeemScriptOrHash.$Shape; p2pk?: null; p2pkh?: null; p2wsh?: null; p2wpkh?: null; p2trKeyPath?: null; p2trScriptPath?: null; p2trDangerousAssumeTweaked?: null; brc20Inscribe?: null; opReturn?: null; babylonStaking?: null; babylonUnbonding?: null; babylonStakingOpReturn?: null }|{ variant?: "p2pk"; p2sh?: null; p2pk: Uint8Array; p2pkh?: null; p2wsh?: null; p2wpkh?: null; p2trKeyPath?: null; p2trScriptPath?: null; p2trDangerousAssumeTweaked?: null; brc20Inscribe?: null; opReturn?: null; babylonStaking?: null; babylonUnbonding?: null; babylonStakingOpReturn?: null }|{ variant?: "p2pkh"; p2sh?: null; p2pk?: null; p2pkh: TW.BitcoinV2.Proto.PublicKeyOrHash.$Shape; p2wsh?: null; p2wpkh?: null; p2trKeyPath?: null; p2trScriptPath?: null; p2trDangerousAssumeTweaked?: null; brc20Inscribe?: null; opReturn?: null; babylonStaking?: null; babylonUnbonding?: null; babylonStakingOpReturn?: null }|{ variant?: "p2wsh"; p2sh?: null; p2pk?: null; p2pkh?: null; p2wsh: TW.BitcoinV2.Proto.Output.RedeemScriptOrHash.$Shape; p2wpkh?: null; p2trKeyPath?: null; p2trScriptPath?: null; p2trDangerousAssumeTweaked?: null; brc20Inscribe?: null; opReturn?: null; babylonStaking?: null; babylonUnbonding?: null; babylonStakingOpReturn?: null }|{ variant?: "p2wpkh"; p2sh?: null; p2pk?: null; p2pkh?: null; p2wsh?: null; p2wpkh: TW.BitcoinV2.Proto.PublicKeyOrHash.$Shape; p2trKeyPath?: null; p2trScriptPath?: null; p2trDangerousAssumeTweaked?: null; brc20Inscribe?: null; opReturn?: null; babylonStaking?: null; babylonUnbonding?: null; babylonStakingOpReturn?: null }|{ variant?: "p2trKeyPath"; p2sh?: null; p2pk?: null; p2pkh?: null; p2wsh?: null; p2wpkh?: null; p2trKeyPath: Uint8Array; p2trScriptPath?: null; p2trDangerousAssumeTweaked?: null; brc20Inscribe?: null; opReturn?: null; babylonStaking?: null; babylonUnbonding?: null; babylonStakingOpReturn?: null }|{ variant?: "p2trScriptPath"; p2sh?: null; p2pk?: null; p2pkh?: null; p2wsh?: null; p2wpkh?: null; p2trKeyPath?: null; p2trScriptPath: TW.BitcoinV2.Proto.Output.OutputTaprootScriptPath.$Shape; p2trDangerousAssumeTweaked?: null; brc20Inscribe?: null; opReturn?: null; babylonStaking?: null; babylonUnbonding?: null; babylonStakingOpReturn?: null }|{ variant?: "p2trDangerousAssumeTweaked"; p2sh?: null; p2pk?: null; p2pkh?: null; p2wsh?: null; p2wpkh?: null; p2trKeyPath?: null; p2trScriptPath?: null; p2trDangerousAssumeTweaked: Uint8Array; brc20Inscribe?: null; opReturn?: null; babylonStaking?: null; babylonUnbonding?: null; babylonStakingOpReturn?: null }|{ variant?: "brc20Inscribe"; p2sh?: null; p2pk?: null; p2pkh?: null; p2wsh?: null; p2wpkh?: null; p2trKeyPath?: null; p2trScriptPath?: null; p2trDangerousAssumeTweaked?: null; brc20Inscribe: TW.BitcoinV2.Proto.Output.OutputBrc20Inscription.$Shape; opReturn?: null; babylonStaking?: null; babylonUnbonding?: null; babylonStakingOpReturn?: null }|{ variant?: "opReturn"; p2sh?: null; p2pk?: null; p2pkh?: null; p2wsh?: null; p2wpkh?: null; p2trKeyPath?: null; p2trScriptPath?: null; p2trDangerousAssumeTweaked?: null; brc20Inscribe?: null; opReturn: Uint8Array; babylonStaking?: null; babylonUnbonding?: null; babylonStakingOpReturn?: null }|{ variant?: "babylonStaking"; p2sh?: null; p2pk?: null; p2pkh?: null; p2wsh?: null; p2wpkh?: null; p2trKeyPath?: null; p2trScriptPath?: null; p2trDangerousAssumeTweaked?: null; brc20Inscribe?: null; opReturn?: null; babylonStaking: TW.BabylonStaking.Proto.OutputBuilder.StakingOutput.$Shape; babylonUnbonding?: null; babylonStakingOpReturn?: null }|{ variant?: "babylonUnbonding"; p2sh?: null; p2pk?: null; p2pkh?: null; p2wsh?: null; p2wpkh?: null; p2trKeyPath?: null; p2trScriptPath?: null; p2trDangerousAssumeTweaked?: null; brc20Inscribe?: null; opReturn?: null; babylonStaking?: null; babylonUnbonding: TW.BabylonStaking.Proto.OutputBuilder.UnbondingOutput.$Shape; babylonStakingOpReturn?: null }|{ variant?: "babylonStakingOpReturn"; p2sh?: null; p2pk?: null; p2pkh?: null; p2wsh?: null; p2wpkh?: null; p2trKeyPath?: null; p2trScriptPath?: null; p2trDangerousAssumeTweaked?: null; brc20Inscribe?: null; opReturn?: null; babylonStaking?: null; babylonUnbonding?: null; babylonStakingOpReturn: TW.BabylonStaking.Proto.OutputBuilder.OpReturn.$Shape })
                    );
                }

                /**
                 * Properties of a RedeemScriptOrHash.
                 * @deprecated Use TW.BitcoinV2.Proto.Output.RedeemScriptOrHash.$Properties instead.
                 */
                interface IRedeemScriptOrHash extends TW.BitcoinV2.Proto.Output.RedeemScriptOrHash.$Properties {
                }

                /** Represents a RedeemScriptOrHash. */
                class RedeemScriptOrHash {

                    /**
                     * Constructs a new RedeemScriptOrHash.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BitcoinV2.Proto.Output.RedeemScriptOrHash.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** RedeemScriptOrHash redeemScript. */
                    redeemScript?: (Uint8Array|null);

                    /** RedeemScriptOrHash hash. */
                    hash?: (Uint8Array|null);

                    /** RedeemScriptOrHash variant. */
                    variant?: ("redeemScript"|"hash");

                    /**
                     * Encodes the specified RedeemScriptOrHash message. Does not implicitly {@link TW.BitcoinV2.Proto.Output.RedeemScriptOrHash.verify|verify} messages.
                     * @param message RedeemScriptOrHash message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.BitcoinV2.Proto.Output.RedeemScriptOrHash.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RedeemScriptOrHash message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.BitcoinV2.Proto.Output.RedeemScriptOrHash & TW.BitcoinV2.Proto.Output.RedeemScriptOrHash.$Shape} RedeemScriptOrHash
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.Output.RedeemScriptOrHash & TW.BitcoinV2.Proto.Output.RedeemScriptOrHash.$Shape;

                    /**
                     * Gets the type url for RedeemScriptOrHash
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace RedeemScriptOrHash {

                    /** Properties of a RedeemScriptOrHash. */
                    interface $Properties {

                        /** RedeemScriptOrHash redeemScript */
                        redeemScript?: (Uint8Array|null);

                        /** RedeemScriptOrHash hash */
                        hash?: (Uint8Array|null);

                        /** RedeemScriptOrHash variant */
                        variant?: ("redeemScript"|"hash");

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Narrowed shape of a RedeemScriptOrHash. */
                    type $Shape = {
                      redeemScript?: Uint8Array|null;
                      hash?: Uint8Array|null;
                      $unknowns?: Uint8Array[];
                    } & (
                      ({ variant?: undefined; redeemScript?: null; hash?: null }|{ variant?: "redeemScript"; redeemScript: Uint8Array; hash?: null }|{ variant?: "hash"; redeemScript?: null; hash: Uint8Array })
                    );
                }

                /**
                 * Properties of an OutputTaprootScriptPath.
                 * @deprecated Use TW.BitcoinV2.Proto.Output.OutputTaprootScriptPath.$Properties instead.
                 */
                interface IOutputTaprootScriptPath extends TW.BitcoinV2.Proto.Output.OutputTaprootScriptPath.$Properties {
                }

                /** Represents an OutputTaprootScriptPath. */
                class OutputTaprootScriptPath {

                    /**
                     * Constructs a new OutputTaprootScriptPath.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BitcoinV2.Proto.Output.OutputTaprootScriptPath.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** OutputTaprootScriptPath internalKey. */
                    internalKey: Uint8Array;

                    /** OutputTaprootScriptPath merkleRoot. */
                    merkleRoot: Uint8Array;

                    /**
                     * Encodes the specified OutputTaprootScriptPath message. Does not implicitly {@link TW.BitcoinV2.Proto.Output.OutputTaprootScriptPath.verify|verify} messages.
                     * @param message OutputTaprootScriptPath message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.BitcoinV2.Proto.Output.OutputTaprootScriptPath.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OutputTaprootScriptPath message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.BitcoinV2.Proto.Output.OutputTaprootScriptPath & TW.BitcoinV2.Proto.Output.OutputTaprootScriptPath.$Shape} OutputTaprootScriptPath
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.Output.OutputTaprootScriptPath & TW.BitcoinV2.Proto.Output.OutputTaprootScriptPath.$Shape;

                    /**
                     * Gets the type url for OutputTaprootScriptPath
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace OutputTaprootScriptPath {

                    /** Properties of an OutputTaprootScriptPath. */
                    interface $Properties {

                        /** OutputTaprootScriptPath internalKey */
                        internalKey?: (Uint8Array|null);

                        /** OutputTaprootScriptPath merkleRoot */
                        merkleRoot?: (Uint8Array|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an OutputTaprootScriptPath. */
                    type $Shape = TW.BitcoinV2.Proto.Output.OutputTaprootScriptPath.$Properties;
                }

                /**
                 * Properties of an OutputBrc20Inscription.
                 * @deprecated Use TW.BitcoinV2.Proto.Output.OutputBrc20Inscription.$Properties instead.
                 */
                interface IOutputBrc20Inscription extends TW.BitcoinV2.Proto.Output.OutputBrc20Inscription.$Properties {
                }

                /** Represents an OutputBrc20Inscription. */
                class OutputBrc20Inscription {

                    /**
                     * Constructs a new OutputBrc20Inscription.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BitcoinV2.Proto.Output.OutputBrc20Inscription.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** OutputBrc20Inscription inscribeTo. */
                    inscribeTo: Uint8Array;

                    /** OutputBrc20Inscription ticker. */
                    ticker: string;

                    /** OutputBrc20Inscription transferAmount. */
                    transferAmount: string;

                    /**
                     * Encodes the specified OutputBrc20Inscription message. Does not implicitly {@link TW.BitcoinV2.Proto.Output.OutputBrc20Inscription.verify|verify} messages.
                     * @param message OutputBrc20Inscription message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.BitcoinV2.Proto.Output.OutputBrc20Inscription.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OutputBrc20Inscription message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.BitcoinV2.Proto.Output.OutputBrc20Inscription & TW.BitcoinV2.Proto.Output.OutputBrc20Inscription.$Shape} OutputBrc20Inscription
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.Output.OutputBrc20Inscription & TW.BitcoinV2.Proto.Output.OutputBrc20Inscription.$Shape;

                    /**
                     * Gets the type url for OutputBrc20Inscription
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace OutputBrc20Inscription {

                    /** Properties of an OutputBrc20Inscription. */
                    interface $Properties {

                        /** OutputBrc20Inscription inscribeTo */
                        inscribeTo?: (Uint8Array|null);

                        /** OutputBrc20Inscription ticker */
                        ticker?: (string|null);

                        /** OutputBrc20Inscription transferAmount */
                        transferAmount?: (string|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an OutputBrc20Inscription. */
                    type $Shape = TW.BitcoinV2.Proto.Output.OutputBrc20Inscription.$Properties;
                }
            }

            /**
             * Properties of a ChainInfo.
             * @deprecated Use TW.BitcoinV2.Proto.ChainInfo.$Properties instead.
             */
            interface IChainInfo extends TW.BitcoinV2.Proto.ChainInfo.$Properties {
            }

            /** Represents a ChainInfo. */
            class ChainInfo {

                /**
                 * Constructs a new ChainInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BitcoinV2.Proto.ChainInfo.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** ChainInfo p2pkhPrefix. */
                p2pkhPrefix: number;

                /** ChainInfo p2shPrefix. */
                p2shPrefix: number;

                /** ChainInfo hrp. */
                hrp: string;

                /**
                 * Encodes the specified ChainInfo message. Does not implicitly {@link TW.BitcoinV2.Proto.ChainInfo.verify|verify} messages.
                 * @param message ChainInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.BitcoinV2.Proto.ChainInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ChainInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.BitcoinV2.Proto.ChainInfo & TW.BitcoinV2.Proto.ChainInfo.$Shape} ChainInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.ChainInfo & TW.BitcoinV2.Proto.ChainInfo.$Shape;

                /**
                 * Gets the type url for ChainInfo
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace ChainInfo {

                /** Properties of a ChainInfo. */
                interface $Properties {

                    /** ChainInfo p2pkhPrefix */
                    p2pkhPrefix?: (number|null);

                    /** ChainInfo p2shPrefix */
                    p2shPrefix?: (number|null);

                    /** ChainInfo hrp */
                    hrp?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a ChainInfo. */
                type $Shape = TW.BitcoinV2.Proto.ChainInfo.$Properties;
            }

            /** TransactionVersion enum. */
            enum TransactionVersion {

                /** UseDefault value */
                UseDefault = 0,

                /** V1 value */
                V1 = 1,

                /** V2 value */
                V2 = 2
            }

            /**
             * Properties of a TransactionBuilder.
             * @deprecated Use TW.BitcoinV2.Proto.TransactionBuilder.$Properties instead.
             */
            interface ITransactionBuilder extends TW.BitcoinV2.Proto.TransactionBuilder.$Properties {
            }

            /** Represents a TransactionBuilder. */
            class TransactionBuilder {

                /**
                 * Constructs a new TransactionBuilder.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BitcoinV2.Proto.TransactionBuilder.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** TransactionBuilder version. */
                version: TW.BitcoinV2.Proto.TransactionVersion;

                /** TransactionBuilder lockTime. */
                lockTime: number;

                /** TransactionBuilder inputs. */
                inputs: TW.BitcoinV2.Proto.Input.$Properties[];

                /** TransactionBuilder outputs. */
                outputs: TW.BitcoinV2.Proto.Output.$Properties[];

                /** TransactionBuilder inputSelector. */
                inputSelector: TW.BitcoinV2.Proto.InputSelector;

                /** TransactionBuilder feePerVb. */
                feePerVb: number;

                /** TransactionBuilder changeOutput. */
                changeOutput?: (TW.BitcoinV2.Proto.Output.$Properties|null);

                /** TransactionBuilder maxAmountOutput. */
                maxAmountOutput?: (TW.BitcoinV2.Proto.Output.$Properties|null);

                /** TransactionBuilder fixedDustThreshold. */
                fixedDustThreshold?: (number|null);

                /** TransactionBuilder zcashExtraData. */
                zcashExtraData?: (TW.Zcash.Proto.TransactionBuilderExtraData.$Properties|null);

                /** TransactionBuilder decredExtraData. */
                decredExtraData?: (TW.DecredV2.Proto.TransactionBuilderExtraData.$Properties|null);

                /** TransactionBuilder dustPolicy. */
                dustPolicy?: "fixedDustThreshold";

                /** TransactionBuilder chainSpecific. */
                chainSpecific?: ("zcashExtraData"|"decredExtraData");

                /**
                 * Encodes the specified TransactionBuilder message. Does not implicitly {@link TW.BitcoinV2.Proto.TransactionBuilder.verify|verify} messages.
                 * @param message TransactionBuilder message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.BitcoinV2.Proto.TransactionBuilder.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionBuilder message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.BitcoinV2.Proto.TransactionBuilder & TW.BitcoinV2.Proto.TransactionBuilder.$Shape} TransactionBuilder
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.TransactionBuilder & TW.BitcoinV2.Proto.TransactionBuilder.$Shape;

                /**
                 * Gets the type url for TransactionBuilder
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace TransactionBuilder {

                /** Properties of a TransactionBuilder. */
                interface $Properties {

                    /** TransactionBuilder version */
                    version?: (TW.BitcoinV2.Proto.TransactionVersion|null);

                    /** TransactionBuilder lockTime */
                    lockTime?: (number|null);

                    /** TransactionBuilder inputs */
                    inputs?: (TW.BitcoinV2.Proto.Input.$Properties[]|null);

                    /** TransactionBuilder outputs */
                    outputs?: (TW.BitcoinV2.Proto.Output.$Properties[]|null);

                    /** TransactionBuilder inputSelector */
                    inputSelector?: (TW.BitcoinV2.Proto.InputSelector|null);

                    /** TransactionBuilder feePerVb */
                    feePerVb?: (number|null);

                    /** TransactionBuilder changeOutput */
                    changeOutput?: (TW.BitcoinV2.Proto.Output.$Properties|null);

                    /** TransactionBuilder maxAmountOutput */
                    maxAmountOutput?: (TW.BitcoinV2.Proto.Output.$Properties|null);

                    /** TransactionBuilder fixedDustThreshold */
                    fixedDustThreshold?: (number|null);

                    /** TransactionBuilder zcashExtraData */
                    zcashExtraData?: (TW.Zcash.Proto.TransactionBuilderExtraData.$Properties|null);

                    /** TransactionBuilder decredExtraData */
                    decredExtraData?: (TW.DecredV2.Proto.TransactionBuilderExtraData.$Properties|null);

                    /** TransactionBuilder dustPolicy */
                    dustPolicy?: "fixedDustThreshold";

                    /** TransactionBuilder chainSpecific */
                    chainSpecific?: ("zcashExtraData"|"decredExtraData");

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Narrowed shape of a TransactionBuilder. */
                type $Shape = {
                  version?: TW.BitcoinV2.Proto.TransactionVersion|null;
                  lockTime?: number|null;
                  inputs?: TW.BitcoinV2.Proto.Input.$Shape[]|null;
                  outputs?: TW.BitcoinV2.Proto.Output.$Shape[]|null;
                  inputSelector?: TW.BitcoinV2.Proto.InputSelector|null;
                  feePerVb?: number|null;
                  changeOutput?: TW.BitcoinV2.Proto.Output.$Shape|null;
                  maxAmountOutput?: TW.BitcoinV2.Proto.Output.$Shape|null;
                  fixedDustThreshold?: number|null;
                  zcashExtraData?: TW.Zcash.Proto.TransactionBuilderExtraData.$Shape|null;
                  decredExtraData?: TW.DecredV2.Proto.TransactionBuilderExtraData.$Shape|null;
                  $unknowns?: Uint8Array[];
                } & (
                  ({ dustPolicy?: undefined; fixedDustThreshold?: null }|{ dustPolicy?: "fixedDustThreshold"; fixedDustThreshold: number })
                ) & (
                  ({ chainSpecific?: undefined; zcashExtraData?: null; decredExtraData?: null }|{ chainSpecific?: "zcashExtraData"; zcashExtraData: TW.Zcash.Proto.TransactionBuilderExtraData.$Shape; decredExtraData?: null }|{ chainSpecific?: "decredExtraData"; zcashExtraData?: null; decredExtraData: TW.DecredV2.Proto.TransactionBuilderExtraData.$Shape })
                );
            }

            /**
             * Properties of a Psbt.
             * @deprecated Use TW.BitcoinV2.Proto.Psbt.$Properties instead.
             */
            interface IPsbt extends TW.BitcoinV2.Proto.Psbt.$Properties {
            }

            /** Represents a Psbt. */
            class Psbt {

                /**
                 * Constructs a new Psbt.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BitcoinV2.Proto.Psbt.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Psbt psbt. */
                psbt: Uint8Array;

                /**
                 * Encodes the specified Psbt message. Does not implicitly {@link TW.BitcoinV2.Proto.Psbt.verify|verify} messages.
                 * @param message Psbt message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.BitcoinV2.Proto.Psbt.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Psbt message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.BitcoinV2.Proto.Psbt & TW.BitcoinV2.Proto.Psbt.$Shape} Psbt
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.Psbt & TW.BitcoinV2.Proto.Psbt.$Shape;

                /**
                 * Gets the type url for Psbt
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Psbt {

                /** Properties of a Psbt. */
                interface $Properties {

                    /** Psbt psbt */
                    psbt?: (Uint8Array|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a Psbt. */
                type $Shape = TW.BitcoinV2.Proto.Psbt.$Properties;
            }

            /**
             * Properties of a SigningInput.
             * @deprecated Use TW.BitcoinV2.Proto.SigningInput.$Properties instead.
             */
            interface ISigningInput extends TW.BitcoinV2.Proto.SigningInput.$Properties {
            }

            /** Represents a SigningInput. */
            class SigningInput {

                /**
                 * Constructs a new SigningInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BitcoinV2.Proto.SigningInput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** SigningInput privateKeys. */
                privateKeys: Uint8Array[];

                /** SigningInput publicKeys. */
                publicKeys: Uint8Array[];

                /** SigningInput chainInfo. */
                chainInfo?: (TW.BitcoinV2.Proto.ChainInfo.$Properties|null);

                /** SigningInput dangerousUseFixedSchnorrRng. */
                dangerousUseFixedSchnorrRng: boolean;

                /** SigningInput builder. */
                builder?: (TW.BitcoinV2.Proto.TransactionBuilder.$Properties|null);

                /** SigningInput psbt. */
                psbt?: (TW.BitcoinV2.Proto.Psbt.$Properties|null);

                /** SigningInput transaction. */
                transaction?: ("builder"|"psbt");

                /**
                 * Encodes the specified SigningInput message. Does not implicitly {@link TW.BitcoinV2.Proto.SigningInput.verify|verify} messages.
                 * @param message SigningInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.BitcoinV2.Proto.SigningInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.BitcoinV2.Proto.SigningInput & TW.BitcoinV2.Proto.SigningInput.$Shape} SigningInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.SigningInput & TW.BitcoinV2.Proto.SigningInput.$Shape;

                /**
                 * Gets the type url for SigningInput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace SigningInput {

                /** Properties of a SigningInput. */
                interface $Properties {

                    /** SigningInput privateKeys */
                    privateKeys?: (Uint8Array[]|null);

                    /** SigningInput publicKeys */
                    publicKeys?: (Uint8Array[]|null);

                    /** SigningInput chainInfo */
                    chainInfo?: (TW.BitcoinV2.Proto.ChainInfo.$Properties|null);

                    /** SigningInput dangerousUseFixedSchnorrRng */
                    dangerousUseFixedSchnorrRng?: (boolean|null);

                    /** SigningInput builder */
                    builder?: (TW.BitcoinV2.Proto.TransactionBuilder.$Properties|null);

                    /** SigningInput psbt */
                    psbt?: (TW.BitcoinV2.Proto.Psbt.$Properties|null);

                    /** SigningInput transaction */
                    transaction?: ("builder"|"psbt");

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Narrowed shape of a SigningInput. */
                type $Shape = {
                  privateKeys?: Uint8Array[]|null;
                  publicKeys?: Uint8Array[]|null;
                  chainInfo?: TW.BitcoinV2.Proto.ChainInfo.$Shape|null;
                  dangerousUseFixedSchnorrRng?: boolean|null;
                  builder?: TW.BitcoinV2.Proto.TransactionBuilder.$Shape|null;
                  psbt?: TW.BitcoinV2.Proto.Psbt.$Shape|null;
                  $unknowns?: Uint8Array[];
                } & (
                  ({ transaction?: undefined; builder?: null; psbt?: null }|{ transaction?: "builder"; builder: TW.BitcoinV2.Proto.TransactionBuilder.$Shape; psbt?: null }|{ transaction?: "psbt"; builder?: null; psbt: TW.BitcoinV2.Proto.Psbt.$Shape })
                );
            }

            /**
             * Properties of a TransactionPlan.
             * @deprecated Use TW.BitcoinV2.Proto.TransactionPlan.$Properties instead.
             */
            interface ITransactionPlan extends TW.BitcoinV2.Proto.TransactionPlan.$Properties {
            }

            /** Represents a TransactionPlan. */
            class TransactionPlan {

                /**
                 * Constructs a new TransactionPlan.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BitcoinV2.Proto.TransactionPlan.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** TransactionPlan error. */
                error: TW.Common.Proto.SigningError;

                /** TransactionPlan errorMessage. */
                errorMessage: string;

                /** TransactionPlan inputs. */
                inputs: TW.BitcoinV2.Proto.Input.$Properties[];

                /** TransactionPlan outputs. */
                outputs: TW.BitcoinV2.Proto.Output.$Properties[];

                /** TransactionPlan availableAmount. */
                availableAmount: number;

                /** TransactionPlan sendAmount. */
                sendAmount: number;

                /** TransactionPlan vsizeEstimate. */
                vsizeEstimate: number;

                /** TransactionPlan feeEstimate. */
                feeEstimate: number;

                /** TransactionPlan change. */
                change: number;

                /**
                 * Encodes the specified TransactionPlan message. Does not implicitly {@link TW.BitcoinV2.Proto.TransactionPlan.verify|verify} messages.
                 * @param message TransactionPlan message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.BitcoinV2.Proto.TransactionPlan.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionPlan message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.BitcoinV2.Proto.TransactionPlan & TW.BitcoinV2.Proto.TransactionPlan.$Shape} TransactionPlan
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.TransactionPlan & TW.BitcoinV2.Proto.TransactionPlan.$Shape;

                /**
                 * Gets the type url for TransactionPlan
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace TransactionPlan {

                /** Properties of a TransactionPlan. */
                interface $Properties {

                    /** TransactionPlan error */
                    error?: (TW.Common.Proto.SigningError|null);

                    /** TransactionPlan errorMessage */
                    errorMessage?: (string|null);

                    /** TransactionPlan inputs */
                    inputs?: (TW.BitcoinV2.Proto.Input.$Properties[]|null);

                    /** TransactionPlan outputs */
                    outputs?: (TW.BitcoinV2.Proto.Output.$Properties[]|null);

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

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a TransactionPlan. */
                type $Shape = {
                  error?: TW.Common.Proto.SigningError|null;
                  errorMessage?: string|null;
                  inputs?: TW.BitcoinV2.Proto.Input.$Shape[]|null;
                  outputs?: TW.BitcoinV2.Proto.Output.$Shape[]|null;
                  availableAmount?: number|null;
                  sendAmount?: number|null;
                  vsizeEstimate?: number|null;
                  feeEstimate?: number|null;
                  change?: number|null;
                  $unknowns?: Uint8Array[];
                };
            }

            /**
             * Properties of a PreSigningOutput.
             * @deprecated Use TW.BitcoinV2.Proto.PreSigningOutput.$Properties instead.
             */
            interface IPreSigningOutput extends TW.BitcoinV2.Proto.PreSigningOutput.$Properties {
            }

            /** Represents a PreSigningOutput. */
            class PreSigningOutput {

                /**
                 * Constructs a new PreSigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BitcoinV2.Proto.PreSigningOutput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** PreSigningOutput error. */
                error: TW.Common.Proto.SigningError;

                /** PreSigningOutput errorMessage. */
                errorMessage: string;

                /** PreSigningOutput sighashes. */
                sighashes: TW.BitcoinV2.Proto.PreSigningOutput.Sighash.$Properties[];

                /**
                 * Encodes the specified PreSigningOutput message. Does not implicitly {@link TW.BitcoinV2.Proto.PreSigningOutput.verify|verify} messages.
                 * @param message PreSigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.BitcoinV2.Proto.PreSigningOutput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PreSigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.BitcoinV2.Proto.PreSigningOutput & TW.BitcoinV2.Proto.PreSigningOutput.$Shape} PreSigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.PreSigningOutput & TW.BitcoinV2.Proto.PreSigningOutput.$Shape;

                /**
                 * Gets the type url for PreSigningOutput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace PreSigningOutput {

                /** Properties of a PreSigningOutput. */
                interface $Properties {

                    /** PreSigningOutput error */
                    error?: (TW.Common.Proto.SigningError|null);

                    /** PreSigningOutput errorMessage */
                    errorMessage?: (string|null);

                    /** PreSigningOutput sighashes */
                    sighashes?: (TW.BitcoinV2.Proto.PreSigningOutput.Sighash.$Properties[]|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a PreSigningOutput. */
                type $Shape = TW.BitcoinV2.Proto.PreSigningOutput.$Properties;

                /** SigningMethod enum. */
                enum SigningMethod {

                    /** Legacy value */
                    Legacy = 0,

                    /** Segwit value */
                    Segwit = 1,

                    /** Taproot value */
                    Taproot = 2
                }

                /**
                 * Properties of a Sighash.
                 * @deprecated Use TW.BitcoinV2.Proto.PreSigningOutput.Sighash.$Properties instead.
                 */
                interface ISighash extends TW.BitcoinV2.Proto.PreSigningOutput.Sighash.$Properties {
                }

                /** Represents a Sighash. */
                class Sighash {

                    /**
                     * Constructs a new Sighash.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BitcoinV2.Proto.PreSigningOutput.Sighash.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** Sighash publicKey. */
                    publicKey: Uint8Array;

                    /** Sighash sighash. */
                    sighash: Uint8Array;

                    /** Sighash signingMethod. */
                    signingMethod: TW.BitcoinV2.Proto.PreSigningOutput.SigningMethod;

                    /** Sighash tweak. */
                    tweak?: (TW.BitcoinV2.Proto.PreSigningOutput.TaprootTweak.$Properties|null);

                    /**
                     * Encodes the specified Sighash message. Does not implicitly {@link TW.BitcoinV2.Proto.PreSigningOutput.Sighash.verify|verify} messages.
                     * @param message Sighash message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.BitcoinV2.Proto.PreSigningOutput.Sighash.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Sighash message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.BitcoinV2.Proto.PreSigningOutput.Sighash & TW.BitcoinV2.Proto.PreSigningOutput.Sighash.$Shape} Sighash
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.PreSigningOutput.Sighash & TW.BitcoinV2.Proto.PreSigningOutput.Sighash.$Shape;

                    /**
                     * Gets the type url for Sighash
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace Sighash {

                    /** Properties of a Sighash. */
                    interface $Properties {

                        /** Sighash publicKey */
                        publicKey?: (Uint8Array|null);

                        /** Sighash sighash */
                        sighash?: (Uint8Array|null);

                        /** Sighash signingMethod */
                        signingMethod?: (TW.BitcoinV2.Proto.PreSigningOutput.SigningMethod|null);

                        /** Sighash tweak */
                        tweak?: (TW.BitcoinV2.Proto.PreSigningOutput.TaprootTweak.$Properties|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a Sighash. */
                    type $Shape = TW.BitcoinV2.Proto.PreSigningOutput.Sighash.$Properties;
                }

                /**
                 * Properties of a TaprootTweak.
                 * @deprecated Use TW.BitcoinV2.Proto.PreSigningOutput.TaprootTweak.$Properties instead.
                 */
                interface ITaprootTweak extends TW.BitcoinV2.Proto.PreSigningOutput.TaprootTweak.$Properties {
                }

                /** Represents a TaprootTweak. */
                class TaprootTweak {

                    /**
                     * Constructs a new TaprootTweak.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.BitcoinV2.Proto.PreSigningOutput.TaprootTweak.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** TaprootTweak merkleRoot. */
                    merkleRoot: Uint8Array;

                    /**
                     * Encodes the specified TaprootTweak message. Does not implicitly {@link TW.BitcoinV2.Proto.PreSigningOutput.TaprootTweak.verify|verify} messages.
                     * @param message TaprootTweak message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.BitcoinV2.Proto.PreSigningOutput.TaprootTweak.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TaprootTweak message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.BitcoinV2.Proto.PreSigningOutput.TaprootTweak & TW.BitcoinV2.Proto.PreSigningOutput.TaprootTweak.$Shape} TaprootTweak
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.PreSigningOutput.TaprootTweak & TW.BitcoinV2.Proto.PreSigningOutput.TaprootTweak.$Shape;

                    /**
                     * Gets the type url for TaprootTweak
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace TaprootTweak {

                    /** Properties of a TaprootTweak. */
                    interface $Properties {

                        /** TaprootTweak merkleRoot */
                        merkleRoot?: (Uint8Array|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a TaprootTweak. */
                    type $Shape = TW.BitcoinV2.Proto.PreSigningOutput.TaprootTweak.$Properties;
                }
            }

            /**
             * Properties of a SigningOutput.
             * @deprecated Use TW.BitcoinV2.Proto.SigningOutput.$Properties instead.
             */
            interface ISigningOutput extends TW.BitcoinV2.Proto.SigningOutput.$Properties {
            }

            /** Represents a SigningOutput. */
            class SigningOutput {

                /**
                 * Constructs a new SigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.BitcoinV2.Proto.SigningOutput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** SigningOutput error. */
                error: TW.Common.Proto.SigningError;

                /** SigningOutput errorMessage. */
                errorMessage: string;

                /** SigningOutput encoded. */
                encoded: Uint8Array;

                /** SigningOutput txid. */
                txid: Uint8Array;

                /** SigningOutput vsize. */
                vsize: number;

                /** SigningOutput weight. */
                weight: number;

                /** SigningOutput fee. */
                fee: number;

                /** SigningOutput psbt. */
                psbt?: (TW.BitcoinV2.Proto.Psbt.$Properties|null);

                /** SigningOutput bitcoin. */
                bitcoin?: (TW.Utxo.Proto.Transaction.$Properties|null);

                /** SigningOutput zcash. */
                zcash?: (TW.Zcash.Proto.Transaction.$Properties|null);

                /** SigningOutput decred. */
                decred?: (TW.DecredV2.Proto.Transaction.$Properties|null);

                /** SigningOutput transaction. */
                transaction?: ("bitcoin"|"zcash"|"decred");

                /**
                 * Encodes the specified SigningOutput message. Does not implicitly {@link TW.BitcoinV2.Proto.SigningOutput.verify|verify} messages.
                 * @param message SigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.BitcoinV2.Proto.SigningOutput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.BitcoinV2.Proto.SigningOutput & TW.BitcoinV2.Proto.SigningOutput.$Shape} SigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.BitcoinV2.Proto.SigningOutput & TW.BitcoinV2.Proto.SigningOutput.$Shape;

                /**
                 * Gets the type url for SigningOutput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace SigningOutput {

                /** Properties of a SigningOutput. */
                interface $Properties {

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
                    psbt?: (TW.BitcoinV2.Proto.Psbt.$Properties|null);

                    /** SigningOutput bitcoin */
                    bitcoin?: (TW.Utxo.Proto.Transaction.$Properties|null);

                    /** SigningOutput zcash */
                    zcash?: (TW.Zcash.Proto.Transaction.$Properties|null);

                    /** SigningOutput decred */
                    decred?: (TW.DecredV2.Proto.Transaction.$Properties|null);

                    /** SigningOutput transaction */
                    transaction?: ("bitcoin"|"zcash"|"decred");

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Narrowed shape of a SigningOutput. */
                type $Shape = {
                  error?: TW.Common.Proto.SigningError|null;
                  errorMessage?: string|null;
                  encoded?: Uint8Array|null;
                  txid?: Uint8Array|null;
                  vsize?: number|null;
                  weight?: number|null;
                  fee?: number|null;
                  psbt?: TW.BitcoinV2.Proto.Psbt.$Shape|null;
                  bitcoin?: TW.Utxo.Proto.Transaction.$Shape|null;
                  zcash?: TW.Zcash.Proto.Transaction.$Shape|null;
                  decred?: TW.DecredV2.Proto.Transaction.$Shape|null;
                  $unknowns?: Uint8Array[];
                } & (
                  ({ transaction?: undefined; bitcoin?: null; zcash?: null; decred?: null }|{ transaction?: "bitcoin"; bitcoin: TW.Utxo.Proto.Transaction.$Shape; zcash?: null; decred?: null }|{ transaction?: "zcash"; bitcoin?: null; zcash: TW.Zcash.Proto.Transaction.$Shape; decred?: null }|{ transaction?: "decred"; bitcoin?: null; zcash?: null; decred: TW.DecredV2.Proto.Transaction.$Shape })
                );
            }
        }
    }

    /** Namespace Common. */
    namespace Common {

        /** Namespace Proto. */
        namespace Proto {

            /** SigningError enum. */
            enum SigningError {

                /** OK value */
                OK = 0,

                /** Error_general value */
                Error_general = 1,

                /** Error_internal value */
                Error_internal = 2,

                /** Error_low_balance value */
                Error_low_balance = 3,

                /** Error_zero_amount_requested value */
                Error_zero_amount_requested = 4,

                /** Error_missing_private_key value */
                Error_missing_private_key = 5,

                /** Error_invalid_private_key value */
                Error_invalid_private_key = 15,

                /** Error_invalid_address value */
                Error_invalid_address = 16,

                /** Error_invalid_utxo value */
                Error_invalid_utxo = 17,

                /** Error_invalid_utxo_amount value */
                Error_invalid_utxo_amount = 18,

                /** Error_wrong_fee value */
                Error_wrong_fee = 6,

                /** Error_signing value */
                Error_signing = 7,

                /** Error_tx_too_big value */
                Error_tx_too_big = 8,

                /** Error_missing_input_utxos value */
                Error_missing_input_utxos = 9,

                /** Error_not_enough_utxos value */
                Error_not_enough_utxos = 10,

                /** Error_script_redeem value */
                Error_script_redeem = 11,

                /** Error_script_output value */
                Error_script_output = 12,

                /** Error_script_witness_program value */
                Error_script_witness_program = 13,

                /** Error_invalid_memo value */
                Error_invalid_memo = 14,

                /** Error_input_parse value */
                Error_input_parse = 19,

                /** Error_no_support_n2n value */
                Error_no_support_n2n = 20,

                /** Error_signatures_count value */
                Error_signatures_count = 21,

                /** Error_invalid_params value */
                Error_invalid_params = 22,

                /** Error_invalid_requested_token_amount value */
                Error_invalid_requested_token_amount = 23,

                /** Error_not_supported value */
                Error_not_supported = 24,

                /** Error_dust_amount_requested value */
                Error_dust_amount_requested = 25,

                /** Error_tx_hash_mismatch value */
                Error_tx_hash_mismatch = 26
            }
        }
    }

    /** Namespace DecredV2. */
    namespace DecredV2 {

        /** Namespace Proto. */
        namespace Proto {

            /**
             * Properties of an OutPoint.
             * @deprecated Use TW.DecredV2.Proto.OutPoint.$Properties instead.
             */
            interface IOutPoint extends TW.DecredV2.Proto.OutPoint.$Properties {
            }

            /** Represents an OutPoint. */
            class OutPoint {

                /**
                 * Constructs a new OutPoint.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.DecredV2.Proto.OutPoint.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** OutPoint hash. */
                hash: Uint8Array;

                /** OutPoint vout. */
                vout: number;

                /** OutPoint tree. */
                tree: number;

                /**
                 * Encodes the specified OutPoint message. Does not implicitly {@link TW.DecredV2.Proto.OutPoint.verify|verify} messages.
                 * @param message OutPoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.DecredV2.Proto.OutPoint.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OutPoint message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.DecredV2.Proto.OutPoint & TW.DecredV2.Proto.OutPoint.$Shape} OutPoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.DecredV2.Proto.OutPoint & TW.DecredV2.Proto.OutPoint.$Shape;

                /**
                 * Gets the type url for OutPoint
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace OutPoint {

                /** Properties of an OutPoint. */
                interface $Properties {

                    /** OutPoint hash */
                    hash?: (Uint8Array|null);

                    /** OutPoint vout */
                    vout?: (number|null);

                    /** OutPoint tree */
                    tree?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an OutPoint. */
                type $Shape = TW.DecredV2.Proto.OutPoint.$Properties;
            }

            /**
             * Properties of a Transaction.
             * @deprecated Use TW.DecredV2.Proto.Transaction.$Properties instead.
             */
            interface ITransaction extends TW.DecredV2.Proto.Transaction.$Properties {
            }

            /** Represents a Transaction. */
            class Transaction {

                /**
                 * Constructs a new Transaction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.DecredV2.Proto.Transaction.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Transaction serializeType. */
                serializeType: number;

                /** Transaction version. */
                version: number;

                /** Transaction inputs. */
                inputs: TW.DecredV2.Proto.TransactionInput.$Properties[];

                /** Transaction outputs. */
                outputs: TW.DecredV2.Proto.TransactionOutput.$Properties[];

                /** Transaction lockTime. */
                lockTime: number;

                /** Transaction expiry. */
                expiry: number;

                /**
                 * Encodes the specified Transaction message. Does not implicitly {@link TW.DecredV2.Proto.Transaction.verify|verify} messages.
                 * @param message Transaction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.DecredV2.Proto.Transaction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Transaction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.DecredV2.Proto.Transaction & TW.DecredV2.Proto.Transaction.$Shape} Transaction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.DecredV2.Proto.Transaction & TW.DecredV2.Proto.Transaction.$Shape;

                /**
                 * Gets the type url for Transaction
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Transaction {

                /** Properties of a Transaction. */
                interface $Properties {

                    /** Transaction serializeType */
                    serializeType?: (number|null);

                    /** Transaction version */
                    version?: (number|null);

                    /** Transaction inputs */
                    inputs?: (TW.DecredV2.Proto.TransactionInput.$Properties[]|null);

                    /** Transaction outputs */
                    outputs?: (TW.DecredV2.Proto.TransactionOutput.$Properties[]|null);

                    /** Transaction lockTime */
                    lockTime?: (number|null);

                    /** Transaction expiry */
                    expiry?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a Transaction. */
                type $Shape = TW.DecredV2.Proto.Transaction.$Properties;
            }

            /**
             * Properties of a TransactionInput.
             * @deprecated Use TW.DecredV2.Proto.TransactionInput.$Properties instead.
             */
            interface ITransactionInput extends TW.DecredV2.Proto.TransactionInput.$Properties {
            }

            /** Represents a TransactionInput. */
            class TransactionInput {

                /**
                 * Constructs a new TransactionInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.DecredV2.Proto.TransactionInput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** TransactionInput outPoint. */
                outPoint?: (TW.DecredV2.Proto.OutPoint.$Properties|null);

                /** TransactionInput sequence. */
                sequence: number;

                /** TransactionInput value. */
                value: number;

                /** TransactionInput blockHeight. */
                blockHeight: number;

                /** TransactionInput blockIndex. */
                blockIndex: number;

                /** TransactionInput scriptSig. */
                scriptSig: Uint8Array;

                /**
                 * Encodes the specified TransactionInput message. Does not implicitly {@link TW.DecredV2.Proto.TransactionInput.verify|verify} messages.
                 * @param message TransactionInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.DecredV2.Proto.TransactionInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.DecredV2.Proto.TransactionInput & TW.DecredV2.Proto.TransactionInput.$Shape} TransactionInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.DecredV2.Proto.TransactionInput & TW.DecredV2.Proto.TransactionInput.$Shape;

                /**
                 * Gets the type url for TransactionInput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace TransactionInput {

                /** Properties of a TransactionInput. */
                interface $Properties {

                    /** TransactionInput outPoint */
                    outPoint?: (TW.DecredV2.Proto.OutPoint.$Properties|null);

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

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a TransactionInput. */
                type $Shape = TW.DecredV2.Proto.TransactionInput.$Properties;
            }

            /**
             * Properties of a TransactionOutput.
             * @deprecated Use TW.DecredV2.Proto.TransactionOutput.$Properties instead.
             */
            interface ITransactionOutput extends TW.DecredV2.Proto.TransactionOutput.$Properties {
            }

            /** Represents a TransactionOutput. */
            class TransactionOutput {

                /**
                 * Constructs a new TransactionOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.DecredV2.Proto.TransactionOutput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** TransactionOutput value. */
                value: number;

                /** TransactionOutput version. */
                version: number;

                /** TransactionOutput script. */
                script: Uint8Array;

                /**
                 * Encodes the specified TransactionOutput message. Does not implicitly {@link TW.DecredV2.Proto.TransactionOutput.verify|verify} messages.
                 * @param message TransactionOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.DecredV2.Proto.TransactionOutput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.DecredV2.Proto.TransactionOutput & TW.DecredV2.Proto.TransactionOutput.$Shape} TransactionOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.DecredV2.Proto.TransactionOutput & TW.DecredV2.Proto.TransactionOutput.$Shape;

                /**
                 * Gets the type url for TransactionOutput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace TransactionOutput {

                /** Properties of a TransactionOutput. */
                interface $Properties {

                    /** TransactionOutput value */
                    value?: (number|null);

                    /** TransactionOutput version */
                    version?: (number|null);

                    /** TransactionOutput script */
                    script?: (Uint8Array|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a TransactionOutput. */
                type $Shape = TW.DecredV2.Proto.TransactionOutput.$Properties;
            }

            /**
             * Properties of a TransactionBuilderExtraData.
             * @deprecated Use TW.DecredV2.Proto.TransactionBuilderExtraData.$Properties instead.
             */
            interface ITransactionBuilderExtraData extends TW.DecredV2.Proto.TransactionBuilderExtraData.$Properties {
            }

            /** Represents a TransactionBuilderExtraData. */
            class TransactionBuilderExtraData {

                /**
                 * Constructs a new TransactionBuilderExtraData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.DecredV2.Proto.TransactionBuilderExtraData.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** TransactionBuilderExtraData expiryHeight. */
                expiryHeight: number;

                /**
                 * Encodes the specified TransactionBuilderExtraData message. Does not implicitly {@link TW.DecredV2.Proto.TransactionBuilderExtraData.verify|verify} messages.
                 * @param message TransactionBuilderExtraData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.DecredV2.Proto.TransactionBuilderExtraData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionBuilderExtraData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.DecredV2.Proto.TransactionBuilderExtraData & TW.DecredV2.Proto.TransactionBuilderExtraData.$Shape} TransactionBuilderExtraData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.DecredV2.Proto.TransactionBuilderExtraData & TW.DecredV2.Proto.TransactionBuilderExtraData.$Shape;

                /**
                 * Gets the type url for TransactionBuilderExtraData
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace TransactionBuilderExtraData {

                /** Properties of a TransactionBuilderExtraData. */
                interface $Properties {

                    /** TransactionBuilderExtraData expiryHeight */
                    expiryHeight?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a TransactionBuilderExtraData. */
                type $Shape = TW.DecredV2.Proto.TransactionBuilderExtraData.$Properties;
            }
        }
    }

    /** Namespace Utxo. */
    namespace Utxo {

        /** Namespace Proto. */
        namespace Proto {

            /**
             * Properties of an OutPoint.
             * @deprecated Use TW.Utxo.Proto.OutPoint.$Properties instead.
             */
            interface IOutPoint extends TW.Utxo.Proto.OutPoint.$Properties {
            }

            /** Represents an OutPoint. */
            class OutPoint {

                /**
                 * Constructs a new OutPoint.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Utxo.Proto.OutPoint.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** OutPoint hash. */
                hash: Uint8Array;

                /** OutPoint vout. */
                vout: number;

                /**
                 * Encodes the specified OutPoint message. Does not implicitly {@link TW.Utxo.Proto.OutPoint.verify|verify} messages.
                 * @param message OutPoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Utxo.Proto.OutPoint.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OutPoint message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Utxo.Proto.OutPoint & TW.Utxo.Proto.OutPoint.$Shape} OutPoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Utxo.Proto.OutPoint & TW.Utxo.Proto.OutPoint.$Shape;

                /**
                 * Gets the type url for OutPoint
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace OutPoint {

                /** Properties of an OutPoint. */
                interface $Properties {

                    /** OutPoint hash */
                    hash?: (Uint8Array|null);

                    /** OutPoint vout */
                    vout?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an OutPoint. */
                type $Shape = TW.Utxo.Proto.OutPoint.$Properties;
            }

            /**
             * Properties of a TransactionInput.
             * @deprecated Use TW.Utxo.Proto.TransactionInput.$Properties instead.
             */
            interface ITransactionInput extends TW.Utxo.Proto.TransactionInput.$Properties {
            }

            /** Represents a TransactionInput. */
            class TransactionInput {

                /**
                 * Constructs a new TransactionInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Utxo.Proto.TransactionInput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** TransactionInput outPoint. */
                outPoint?: (TW.Utxo.Proto.OutPoint.$Properties|null);

                /** TransactionInput sequence. */
                sequence: number;

                /** TransactionInput scriptSig. */
                scriptSig: Uint8Array;

                /** TransactionInput witnessItems. */
                witnessItems: Uint8Array[];

                /**
                 * Encodes the specified TransactionInput message. Does not implicitly {@link TW.Utxo.Proto.TransactionInput.verify|verify} messages.
                 * @param message TransactionInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Utxo.Proto.TransactionInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Utxo.Proto.TransactionInput & TW.Utxo.Proto.TransactionInput.$Shape} TransactionInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Utxo.Proto.TransactionInput & TW.Utxo.Proto.TransactionInput.$Shape;

                /**
                 * Gets the type url for TransactionInput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace TransactionInput {

                /** Properties of a TransactionInput. */
                interface $Properties {

                    /** TransactionInput outPoint */
                    outPoint?: (TW.Utxo.Proto.OutPoint.$Properties|null);

                    /** TransactionInput sequence */
                    sequence?: (number|null);

                    /** TransactionInput scriptSig */
                    scriptSig?: (Uint8Array|null);

                    /** TransactionInput witnessItems */
                    witnessItems?: (Uint8Array[]|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a TransactionInput. */
                type $Shape = TW.Utxo.Proto.TransactionInput.$Properties;
            }

            /**
             * Properties of a TransactionOutput.
             * @deprecated Use TW.Utxo.Proto.TransactionOutput.$Properties instead.
             */
            interface ITransactionOutput extends TW.Utxo.Proto.TransactionOutput.$Properties {
            }

            /** Represents a TransactionOutput. */
            class TransactionOutput {

                /**
                 * Constructs a new TransactionOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Utxo.Proto.TransactionOutput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** TransactionOutput scriptPubkey. */
                scriptPubkey: Uint8Array;

                /** TransactionOutput value. */
                value: number;

                /**
                 * Encodes the specified TransactionOutput message. Does not implicitly {@link TW.Utxo.Proto.TransactionOutput.verify|verify} messages.
                 * @param message TransactionOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Utxo.Proto.TransactionOutput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Utxo.Proto.TransactionOutput & TW.Utxo.Proto.TransactionOutput.$Shape} TransactionOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Utxo.Proto.TransactionOutput & TW.Utxo.Proto.TransactionOutput.$Shape;

                /**
                 * Gets the type url for TransactionOutput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace TransactionOutput {

                /** Properties of a TransactionOutput. */
                interface $Properties {

                    /** TransactionOutput scriptPubkey */
                    scriptPubkey?: (Uint8Array|null);

                    /** TransactionOutput value */
                    value?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a TransactionOutput. */
                type $Shape = TW.Utxo.Proto.TransactionOutput.$Properties;
            }

            /**
             * Properties of a Transaction.
             * @deprecated Use TW.Utxo.Proto.Transaction.$Properties instead.
             */
            interface ITransaction extends TW.Utxo.Proto.Transaction.$Properties {
            }

            /** Represents a Transaction. */
            class Transaction {

                /**
                 * Constructs a new Transaction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Utxo.Proto.Transaction.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Transaction version. */
                version: number;

                /** Transaction lockTime. */
                lockTime: number;

                /** Transaction inputs. */
                inputs: TW.Utxo.Proto.TransactionInput.$Properties[];

                /** Transaction outputs. */
                outputs: TW.Utxo.Proto.TransactionOutput.$Properties[];

                /**
                 * Encodes the specified Transaction message. Does not implicitly {@link TW.Utxo.Proto.Transaction.verify|verify} messages.
                 * @param message Transaction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Utxo.Proto.Transaction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Transaction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Utxo.Proto.Transaction & TW.Utxo.Proto.Transaction.$Shape} Transaction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Utxo.Proto.Transaction & TW.Utxo.Proto.Transaction.$Shape;

                /**
                 * Gets the type url for Transaction
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Transaction {

                /** Properties of a Transaction. */
                interface $Properties {

                    /** Transaction version */
                    version?: (number|null);

                    /** Transaction lockTime */
                    lockTime?: (number|null);

                    /** Transaction inputs */
                    inputs?: (TW.Utxo.Proto.TransactionInput.$Properties[]|null);

                    /** Transaction outputs */
                    outputs?: (TW.Utxo.Proto.TransactionOutput.$Properties[]|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a Transaction. */
                type $Shape = TW.Utxo.Proto.Transaction.$Properties;
            }
        }
    }

    /** Namespace Zcash. */
    namespace Zcash {

        /** Namespace Proto. */
        namespace Proto {

            /**
             * Properties of a TransactionBuilderExtraData.
             * @deprecated Use TW.Zcash.Proto.TransactionBuilderExtraData.$Properties instead.
             */
            interface ITransactionBuilderExtraData extends TW.Zcash.Proto.TransactionBuilderExtraData.$Properties {
            }

            /** Represents a TransactionBuilderExtraData. */
            class TransactionBuilderExtraData {

                /**
                 * Constructs a new TransactionBuilderExtraData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Zcash.Proto.TransactionBuilderExtraData.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** TransactionBuilderExtraData branchId. */
                branchId: Uint8Array;

                /** TransactionBuilderExtraData expiryHeight. */
                expiryHeight: number;

                /** TransactionBuilderExtraData zip_0317. */
                zip_0317: boolean;

                /**
                 * Encodes the specified TransactionBuilderExtraData message. Does not implicitly {@link TW.Zcash.Proto.TransactionBuilderExtraData.verify|verify} messages.
                 * @param message TransactionBuilderExtraData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Zcash.Proto.TransactionBuilderExtraData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransactionBuilderExtraData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Zcash.Proto.TransactionBuilderExtraData & TW.Zcash.Proto.TransactionBuilderExtraData.$Shape} TransactionBuilderExtraData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Zcash.Proto.TransactionBuilderExtraData & TW.Zcash.Proto.TransactionBuilderExtraData.$Shape;

                /**
                 * Gets the type url for TransactionBuilderExtraData
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace TransactionBuilderExtraData {

                /** Properties of a TransactionBuilderExtraData. */
                interface $Properties {

                    /** TransactionBuilderExtraData branchId */
                    branchId?: (Uint8Array|null);

                    /** TransactionBuilderExtraData expiryHeight */
                    expiryHeight?: (number|null);

                    /** TransactionBuilderExtraData zip_0317 */
                    zip_0317?: (boolean|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a TransactionBuilderExtraData. */
                type $Shape = TW.Zcash.Proto.TransactionBuilderExtraData.$Properties;
            }

            /**
             * Properties of a Transaction.
             * @deprecated Use TW.Zcash.Proto.Transaction.$Properties instead.
             */
            interface ITransaction extends TW.Zcash.Proto.Transaction.$Properties {
            }

            /** Represents a Transaction. */
            class Transaction {

                /**
                 * Constructs a new Transaction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Zcash.Proto.Transaction.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Currently, version 4 (0x80000004) is supported only. */
                version: number;

                /** Transaction versionGroupId. */
                versionGroupId: number;

                /** Transaction inputs. */
                inputs: TW.Utxo.Proto.TransactionInput.$Properties[];

                /** Transaction outputs. */
                outputs: TW.Utxo.Proto.TransactionOutput.$Properties[];

                /** Transaction lockTime. */
                lockTime: number;

                /** Transaction expiryHeight. */
                expiryHeight: number;

                /** Transaction saplingValueBalance. */
                saplingValueBalance: number;

                /** Transaction branchId. */
                branchId: Uint8Array;

                /**
                 * Encodes the specified Transaction message. Does not implicitly {@link TW.Zcash.Proto.Transaction.verify|verify} messages.
                 * @param message Transaction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Zcash.Proto.Transaction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Transaction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Zcash.Proto.Transaction & TW.Zcash.Proto.Transaction.$Shape} Transaction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Zcash.Proto.Transaction & TW.Zcash.Proto.Transaction.$Shape;

                /**
                 * Gets the type url for Transaction
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Transaction {

                /** Properties of a Transaction. */
                interface $Properties {

                    /** Currently, version 4 (0x80000004) is supported only. */
                    version?: (number|null);

                    /** Transaction versionGroupId */
                    versionGroupId?: (number|null);

                    /** Transaction inputs */
                    inputs?: (TW.Utxo.Proto.TransactionInput.$Properties[]|null);

                    /** Transaction outputs */
                    outputs?: (TW.Utxo.Proto.TransactionOutput.$Properties[]|null);

                    /** Transaction lockTime */
                    lockTime?: (number|null);

                    /** Transaction expiryHeight */
                    expiryHeight?: (number|null);

                    /** Transaction saplingValueBalance */
                    saplingValueBalance?: (number|null);

                    /** Transaction branchId */
                    branchId?: (Uint8Array|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a Transaction. */
                type $Shape = TW.Zcash.Proto.Transaction.$Properties;
            }
        }
    }

    /** Namespace Ethereum. */
    namespace Ethereum {

        /** Namespace Proto. */
        namespace Proto {

            /**
             * Properties of a Transaction.
             * @deprecated Use TW.Ethereum.Proto.Transaction.$Properties instead.
             */
            interface ITransaction extends TW.Ethereum.Proto.Transaction.$Properties {
            }

            /** Represents a Transaction. */
            class Transaction {

                /**
                 * Constructs a new Transaction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ethereum.Proto.Transaction.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Transaction transfer. */
                transfer?: (TW.Ethereum.Proto.Transaction.Transfer.$Properties|null);

                /** Transaction erc20Transfer. */
                erc20Transfer?: (TW.Ethereum.Proto.Transaction.ERC20Transfer.$Properties|null);

                /** Transaction erc20Approve. */
                erc20Approve?: (TW.Ethereum.Proto.Transaction.ERC20Approve.$Properties|null);

                /** Transaction erc721Transfer. */
                erc721Transfer?: (TW.Ethereum.Proto.Transaction.ERC721Transfer.$Properties|null);

                /** Transaction erc1155Transfer. */
                erc1155Transfer?: (TW.Ethereum.Proto.Transaction.ERC1155Transfer.$Properties|null);

                /** Transaction contractGeneric. */
                contractGeneric?: (TW.Ethereum.Proto.Transaction.ContractGeneric.$Properties|null);

                /** Transaction scwBatch. */
                scwBatch?: (TW.Ethereum.Proto.Transaction.SCWalletBatch.$Properties|null);

                /** Transaction scwExecute. */
                scwExecute?: (TW.Ethereum.Proto.Transaction.SCWalletExecute.$Properties|null);

                /** Transaction transactionOneof. */
                transactionOneof?: ("transfer"|"erc20Transfer"|"erc20Approve"|"erc721Transfer"|"erc1155Transfer"|"contractGeneric"|"scwBatch"|"scwExecute");

                /**
                 * Encodes the specified Transaction message. Does not implicitly {@link TW.Ethereum.Proto.Transaction.verify|verify} messages.
                 * @param message Transaction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Ethereum.Proto.Transaction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Transaction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Ethereum.Proto.Transaction & TW.Ethereum.Proto.Transaction.$Shape} Transaction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.Transaction & TW.Ethereum.Proto.Transaction.$Shape;

                /**
                 * Gets the type url for Transaction
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Transaction {

                /** Properties of a Transaction. */
                interface $Properties {

                    /** Transaction transfer */
                    transfer?: (TW.Ethereum.Proto.Transaction.Transfer.$Properties|null);

                    /** Transaction erc20Transfer */
                    erc20Transfer?: (TW.Ethereum.Proto.Transaction.ERC20Transfer.$Properties|null);

                    /** Transaction erc20Approve */
                    erc20Approve?: (TW.Ethereum.Proto.Transaction.ERC20Approve.$Properties|null);

                    /** Transaction erc721Transfer */
                    erc721Transfer?: (TW.Ethereum.Proto.Transaction.ERC721Transfer.$Properties|null);

                    /** Transaction erc1155Transfer */
                    erc1155Transfer?: (TW.Ethereum.Proto.Transaction.ERC1155Transfer.$Properties|null);

                    /** Transaction contractGeneric */
                    contractGeneric?: (TW.Ethereum.Proto.Transaction.ContractGeneric.$Properties|null);

                    /** Transaction scwBatch */
                    scwBatch?: (TW.Ethereum.Proto.Transaction.SCWalletBatch.$Properties|null);

                    /** Transaction scwExecute */
                    scwExecute?: (TW.Ethereum.Proto.Transaction.SCWalletExecute.$Properties|null);

                    /** Transaction transactionOneof */
                    transactionOneof?: ("transfer"|"erc20Transfer"|"erc20Approve"|"erc721Transfer"|"erc1155Transfer"|"contractGeneric"|"scwBatch"|"scwExecute");

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Narrowed shape of a Transaction. */
                type $Shape = {
                  transfer?: TW.Ethereum.Proto.Transaction.Transfer.$Shape|null;
                  erc20Transfer?: TW.Ethereum.Proto.Transaction.ERC20Transfer.$Shape|null;
                  erc20Approve?: TW.Ethereum.Proto.Transaction.ERC20Approve.$Shape|null;
                  erc721Transfer?: TW.Ethereum.Proto.Transaction.ERC721Transfer.$Shape|null;
                  erc1155Transfer?: TW.Ethereum.Proto.Transaction.ERC1155Transfer.$Shape|null;
                  contractGeneric?: TW.Ethereum.Proto.Transaction.ContractGeneric.$Shape|null;
                  scwBatch?: TW.Ethereum.Proto.Transaction.SCWalletBatch.$Shape|null;
                  scwExecute?: TW.Ethereum.Proto.Transaction.SCWalletExecute.$Shape|null;
                  $unknowns?: Uint8Array[];
                } & (
                  ({ transactionOneof?: undefined; transfer?: null; erc20Transfer?: null; erc20Approve?: null; erc721Transfer?: null; erc1155Transfer?: null; contractGeneric?: null; scwBatch?: null; scwExecute?: null }|{ transactionOneof?: "transfer"; transfer: TW.Ethereum.Proto.Transaction.Transfer.$Shape; erc20Transfer?: null; erc20Approve?: null; erc721Transfer?: null; erc1155Transfer?: null; contractGeneric?: null; scwBatch?: null; scwExecute?: null }|{ transactionOneof?: "erc20Transfer"; transfer?: null; erc20Transfer: TW.Ethereum.Proto.Transaction.ERC20Transfer.$Shape; erc20Approve?: null; erc721Transfer?: null; erc1155Transfer?: null; contractGeneric?: null; scwBatch?: null; scwExecute?: null }|{ transactionOneof?: "erc20Approve"; transfer?: null; erc20Transfer?: null; erc20Approve: TW.Ethereum.Proto.Transaction.ERC20Approve.$Shape; erc721Transfer?: null; erc1155Transfer?: null; contractGeneric?: null; scwBatch?: null; scwExecute?: null }|{ transactionOneof?: "erc721Transfer"; transfer?: null; erc20Transfer?: null; erc20Approve?: null; erc721Transfer: TW.Ethereum.Proto.Transaction.ERC721Transfer.$Shape; erc1155Transfer?: null; contractGeneric?: null; scwBatch?: null; scwExecute?: null }|{ transactionOneof?: "erc1155Transfer"; transfer?: null; erc20Transfer?: null; erc20Approve?: null; erc721Transfer?: null; erc1155Transfer: TW.Ethereum.Proto.Transaction.ERC1155Transfer.$Shape; contractGeneric?: null; scwBatch?: null; scwExecute?: null }|{ transactionOneof?: "contractGeneric"; transfer?: null; erc20Transfer?: null; erc20Approve?: null; erc721Transfer?: null; erc1155Transfer?: null; contractGeneric: TW.Ethereum.Proto.Transaction.ContractGeneric.$Shape; scwBatch?: null; scwExecute?: null }|{ transactionOneof?: "scwBatch"; transfer?: null; erc20Transfer?: null; erc20Approve?: null; erc721Transfer?: null; erc1155Transfer?: null; contractGeneric?: null; scwBatch: TW.Ethereum.Proto.Transaction.SCWalletBatch.$Shape; scwExecute?: null }|{ transactionOneof?: "scwExecute"; transfer?: null; erc20Transfer?: null; erc20Approve?: null; erc721Transfer?: null; erc1155Transfer?: null; contractGeneric?: null; scwBatch?: null; scwExecute: TW.Ethereum.Proto.Transaction.SCWalletExecute.$Shape })
                );

                /**
                 * Properties of a Transfer.
                 * @deprecated Use TW.Ethereum.Proto.Transaction.Transfer.$Properties instead.
                 */
                interface ITransfer extends TW.Ethereum.Proto.Transaction.Transfer.$Properties {
                }

                /** Represents a Transfer. */
                class Transfer {

                    /**
                     * Constructs a new Transfer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Ethereum.Proto.Transaction.Transfer.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** Transfer amount. */
                    amount: Uint8Array;

                    /** Transfer data. */
                    data: Uint8Array;

                    /**
                     * Encodes the specified Transfer message. Does not implicitly {@link TW.Ethereum.Proto.Transaction.Transfer.verify|verify} messages.
                     * @param message Transfer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.Ethereum.Proto.Transaction.Transfer.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Transfer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.Ethereum.Proto.Transaction.Transfer & TW.Ethereum.Proto.Transaction.Transfer.$Shape} Transfer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.Transaction.Transfer & TW.Ethereum.Proto.Transaction.Transfer.$Shape;

                    /**
                     * Gets the type url for Transfer
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace Transfer {

                    /** Properties of a Transfer. */
                    interface $Properties {

                        /** Transfer amount */
                        amount?: (Uint8Array|null);

                        /** Transfer data */
                        data?: (Uint8Array|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a Transfer. */
                    type $Shape = TW.Ethereum.Proto.Transaction.Transfer.$Properties;
                }

                /**
                 * Properties of a ERC20Transfer.
                 * @deprecated Use TW.Ethereum.Proto.Transaction.ERC20Transfer.$Properties instead.
                 */
                interface IERC20Transfer extends TW.Ethereum.Proto.Transaction.ERC20Transfer.$Properties {
                }

                /** Represents a ERC20Transfer. */
                class ERC20Transfer {

                    /**
                     * Constructs a new ERC20Transfer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Ethereum.Proto.Transaction.ERC20Transfer.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ERC20Transfer to. */
                    to: string;

                    /** ERC20Transfer amount. */
                    amount: Uint8Array;

                    /**
                     * Encodes the specified ERC20Transfer message. Does not implicitly {@link TW.Ethereum.Proto.Transaction.ERC20Transfer.verify|verify} messages.
                     * @param message ERC20Transfer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.Ethereum.Proto.Transaction.ERC20Transfer.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ERC20Transfer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.Ethereum.Proto.Transaction.ERC20Transfer & TW.Ethereum.Proto.Transaction.ERC20Transfer.$Shape} ERC20Transfer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.Transaction.ERC20Transfer & TW.Ethereum.Proto.Transaction.ERC20Transfer.$Shape;

                    /**
                     * Gets the type url for ERC20Transfer
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ERC20Transfer {

                    /** Properties of a ERC20Transfer. */
                    interface $Properties {

                        /** ERC20Transfer to */
                        to?: (string|null);

                        /** ERC20Transfer amount */
                        amount?: (Uint8Array|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a ERC20Transfer. */
                    type $Shape = TW.Ethereum.Proto.Transaction.ERC20Transfer.$Properties;
                }

                /**
                 * Properties of a ERC20Approve.
                 * @deprecated Use TW.Ethereum.Proto.Transaction.ERC20Approve.$Properties instead.
                 */
                interface IERC20Approve extends TW.Ethereum.Proto.Transaction.ERC20Approve.$Properties {
                }

                /** Represents a ERC20Approve. */
                class ERC20Approve {

                    /**
                     * Constructs a new ERC20Approve.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Ethereum.Proto.Transaction.ERC20Approve.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ERC20Approve spender. */
                    spender: string;

                    /** ERC20Approve amount. */
                    amount: Uint8Array;

                    /**
                     * Encodes the specified ERC20Approve message. Does not implicitly {@link TW.Ethereum.Proto.Transaction.ERC20Approve.verify|verify} messages.
                     * @param message ERC20Approve message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.Ethereum.Proto.Transaction.ERC20Approve.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ERC20Approve message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.Ethereum.Proto.Transaction.ERC20Approve & TW.Ethereum.Proto.Transaction.ERC20Approve.$Shape} ERC20Approve
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.Transaction.ERC20Approve & TW.Ethereum.Proto.Transaction.ERC20Approve.$Shape;

                    /**
                     * Gets the type url for ERC20Approve
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ERC20Approve {

                    /** Properties of a ERC20Approve. */
                    interface $Properties {

                        /** ERC20Approve spender */
                        spender?: (string|null);

                        /** ERC20Approve amount */
                        amount?: (Uint8Array|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a ERC20Approve. */
                    type $Shape = TW.Ethereum.Proto.Transaction.ERC20Approve.$Properties;
                }

                /**
                 * Properties of a ERC721Transfer.
                 * @deprecated Use TW.Ethereum.Proto.Transaction.ERC721Transfer.$Properties instead.
                 */
                interface IERC721Transfer extends TW.Ethereum.Proto.Transaction.ERC721Transfer.$Properties {
                }

                /** Represents a ERC721Transfer. */
                class ERC721Transfer {

                    /**
                     * Constructs a new ERC721Transfer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Ethereum.Proto.Transaction.ERC721Transfer.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ERC721Transfer from. */
                    from: string;

                    /** ERC721Transfer to. */
                    to: string;

                    /** ERC721Transfer tokenId. */
                    tokenId: Uint8Array;

                    /**
                     * Encodes the specified ERC721Transfer message. Does not implicitly {@link TW.Ethereum.Proto.Transaction.ERC721Transfer.verify|verify} messages.
                     * @param message ERC721Transfer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.Ethereum.Proto.Transaction.ERC721Transfer.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ERC721Transfer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.Ethereum.Proto.Transaction.ERC721Transfer & TW.Ethereum.Proto.Transaction.ERC721Transfer.$Shape} ERC721Transfer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.Transaction.ERC721Transfer & TW.Ethereum.Proto.Transaction.ERC721Transfer.$Shape;

                    /**
                     * Gets the type url for ERC721Transfer
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ERC721Transfer {

                    /** Properties of a ERC721Transfer. */
                    interface $Properties {

                        /** ERC721Transfer from */
                        from?: (string|null);

                        /** ERC721Transfer to */
                        to?: (string|null);

                        /** ERC721Transfer tokenId */
                        tokenId?: (Uint8Array|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a ERC721Transfer. */
                    type $Shape = TW.Ethereum.Proto.Transaction.ERC721Transfer.$Properties;
                }

                /**
                 * Properties of a ERC1155Transfer.
                 * @deprecated Use TW.Ethereum.Proto.Transaction.ERC1155Transfer.$Properties instead.
                 */
                interface IERC1155Transfer extends TW.Ethereum.Proto.Transaction.ERC1155Transfer.$Properties {
                }

                /** Represents a ERC1155Transfer. */
                class ERC1155Transfer {

                    /**
                     * Constructs a new ERC1155Transfer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Ethereum.Proto.Transaction.ERC1155Transfer.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ERC1155Transfer from. */
                    from: string;

                    /** ERC1155Transfer to. */
                    to: string;

                    /** ERC1155Transfer tokenId. */
                    tokenId: Uint8Array;

                    /** ERC1155Transfer value. */
                    value: Uint8Array;

                    /** ERC1155Transfer data. */
                    data: Uint8Array;

                    /**
                     * Encodes the specified ERC1155Transfer message. Does not implicitly {@link TW.Ethereum.Proto.Transaction.ERC1155Transfer.verify|verify} messages.
                     * @param message ERC1155Transfer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.Ethereum.Proto.Transaction.ERC1155Transfer.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ERC1155Transfer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.Ethereum.Proto.Transaction.ERC1155Transfer & TW.Ethereum.Proto.Transaction.ERC1155Transfer.$Shape} ERC1155Transfer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.Transaction.ERC1155Transfer & TW.Ethereum.Proto.Transaction.ERC1155Transfer.$Shape;

                    /**
                     * Gets the type url for ERC1155Transfer
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ERC1155Transfer {

                    /** Properties of a ERC1155Transfer. */
                    interface $Properties {

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

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a ERC1155Transfer. */
                    type $Shape = TW.Ethereum.Proto.Transaction.ERC1155Transfer.$Properties;
                }

                /**
                 * Properties of a ContractGeneric.
                 * @deprecated Use TW.Ethereum.Proto.Transaction.ContractGeneric.$Properties instead.
                 */
                interface IContractGeneric extends TW.Ethereum.Proto.Transaction.ContractGeneric.$Properties {
                }

                /** Represents a ContractGeneric. */
                class ContractGeneric {

                    /**
                     * Constructs a new ContractGeneric.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Ethereum.Proto.Transaction.ContractGeneric.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ContractGeneric amount. */
                    amount: Uint8Array;

                    /** ContractGeneric data. */
                    data: Uint8Array;

                    /**
                     * Encodes the specified ContractGeneric message. Does not implicitly {@link TW.Ethereum.Proto.Transaction.ContractGeneric.verify|verify} messages.
                     * @param message ContractGeneric message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.Ethereum.Proto.Transaction.ContractGeneric.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ContractGeneric message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.Ethereum.Proto.Transaction.ContractGeneric & TW.Ethereum.Proto.Transaction.ContractGeneric.$Shape} ContractGeneric
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.Transaction.ContractGeneric & TW.Ethereum.Proto.Transaction.ContractGeneric.$Shape;

                    /**
                     * Gets the type url for ContractGeneric
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ContractGeneric {

                    /** Properties of a ContractGeneric. */
                    interface $Properties {

                        /** ContractGeneric amount */
                        amount?: (Uint8Array|null);

                        /** ContractGeneric data */
                        data?: (Uint8Array|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a ContractGeneric. */
                    type $Shape = TW.Ethereum.Proto.Transaction.ContractGeneric.$Properties;
                }

                /**
                 * Properties of a SCWalletBatch.
                 * @deprecated Use TW.Ethereum.Proto.Transaction.SCWalletBatch.$Properties instead.
                 */
                interface ISCWalletBatch extends TW.Ethereum.Proto.Transaction.SCWalletBatch.$Properties {
                }

                /** Represents a SCWalletBatch. */
                class SCWalletBatch {

                    /**
                     * Constructs a new SCWalletBatch.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Ethereum.Proto.Transaction.SCWalletBatch.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** SCWalletBatch calls. */
                    calls: TW.Ethereum.Proto.Transaction.SCWalletBatch.BatchedCall.$Properties[];

                    /** SCWalletBatch walletType. */
                    walletType: TW.Ethereum.Proto.SCWalletType;

                    /**
                     * Encodes the specified SCWalletBatch message. Does not implicitly {@link TW.Ethereum.Proto.Transaction.SCWalletBatch.verify|verify} messages.
                     * @param message SCWalletBatch message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.Ethereum.Proto.Transaction.SCWalletBatch.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SCWalletBatch message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.Ethereum.Proto.Transaction.SCWalletBatch & TW.Ethereum.Proto.Transaction.SCWalletBatch.$Shape} SCWalletBatch
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.Transaction.SCWalletBatch & TW.Ethereum.Proto.Transaction.SCWalletBatch.$Shape;

                    /**
                     * Gets the type url for SCWalletBatch
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace SCWalletBatch {

                    /** Properties of a SCWalletBatch. */
                    interface $Properties {

                        /** SCWalletBatch calls */
                        calls?: (TW.Ethereum.Proto.Transaction.SCWalletBatch.BatchedCall.$Properties[]|null);

                        /** SCWalletBatch walletType */
                        walletType?: (TW.Ethereum.Proto.SCWalletType|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a SCWalletBatch. */
                    type $Shape = TW.Ethereum.Proto.Transaction.SCWalletBatch.$Properties;

                    /**
                     * Properties of a BatchedCall.
                     * @deprecated Use TW.Ethereum.Proto.Transaction.SCWalletBatch.BatchedCall.$Properties instead.
                     */
                    interface IBatchedCall extends TW.Ethereum.Proto.Transaction.SCWalletBatch.BatchedCall.$Properties {
                    }

                    /** Represents a BatchedCall. */
                    class BatchedCall {

                        /**
                         * Constructs a new BatchedCall.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: TW.Ethereum.Proto.Transaction.SCWalletBatch.BatchedCall.$Properties);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];

                        /** BatchedCall address. */
                        address: string;

                        /** BatchedCall amount. */
                        amount: Uint8Array;

                        /** BatchedCall payload. */
                        payload: Uint8Array;

                        /**
                         * Encodes the specified BatchedCall message. Does not implicitly {@link TW.Ethereum.Proto.Transaction.SCWalletBatch.BatchedCall.verify|verify} messages.
                         * @param message BatchedCall message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        static encode(message: TW.Ethereum.Proto.Transaction.SCWalletBatch.BatchedCall.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BatchedCall message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns {TW.Ethereum.Proto.Transaction.SCWalletBatch.BatchedCall & TW.Ethereum.Proto.Transaction.SCWalletBatch.BatchedCall.$Shape} BatchedCall
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.Transaction.SCWalletBatch.BatchedCall & TW.Ethereum.Proto.Transaction.SCWalletBatch.BatchedCall.$Shape;

                        /**
                         * Gets the type url for BatchedCall
                         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                         * @returns The type url
                         */
                        static getTypeUrl(prefix?: string): string;
                    }

                    namespace BatchedCall {

                        /** Properties of a BatchedCall. */
                        interface $Properties {

                            /** BatchedCall address */
                            address?: (string|null);

                            /** BatchedCall amount */
                            amount?: (Uint8Array|null);

                            /** BatchedCall payload */
                            payload?: (Uint8Array|null);

                            /** Unknown fields preserved while decoding when enabled */
                            $unknowns?: Uint8Array[];
                        }

                        /** Shape of a BatchedCall. */
                        type $Shape = TW.Ethereum.Proto.Transaction.SCWalletBatch.BatchedCall.$Properties;
                    }
                }

                /**
                 * Properties of a SCWalletExecute.
                 * @deprecated Use TW.Ethereum.Proto.Transaction.SCWalletExecute.$Properties instead.
                 */
                interface ISCWalletExecute extends TW.Ethereum.Proto.Transaction.SCWalletExecute.$Properties {
                }

                /** Represents a SCWalletExecute. */
                class SCWalletExecute {

                    /**
                     * Constructs a new SCWalletExecute.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Ethereum.Proto.Transaction.SCWalletExecute.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** SCWalletExecute transaction. */
                    transaction?: (TW.Ethereum.Proto.Transaction.$Properties|null);

                    /** SCWalletExecute walletType. */
                    walletType: TW.Ethereum.Proto.SCWalletType;

                    /**
                     * Encodes the specified SCWalletExecute message. Does not implicitly {@link TW.Ethereum.Proto.Transaction.SCWalletExecute.verify|verify} messages.
                     * @param message SCWalletExecute message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.Ethereum.Proto.Transaction.SCWalletExecute.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SCWalletExecute message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.Ethereum.Proto.Transaction.SCWalletExecute & TW.Ethereum.Proto.Transaction.SCWalletExecute.$Shape} SCWalletExecute
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.Transaction.SCWalletExecute & TW.Ethereum.Proto.Transaction.SCWalletExecute.$Shape;

                    /**
                     * Gets the type url for SCWalletExecute
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace SCWalletExecute {

                    /** Properties of a SCWalletExecute. */
                    interface $Properties {

                        /** SCWalletExecute transaction */
                        transaction?: (TW.Ethereum.Proto.Transaction.$Properties|null);

                        /** SCWalletExecute walletType */
                        walletType?: (TW.Ethereum.Proto.SCWalletType|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a SCWalletExecute. */
                    type $Shape = {
                      transaction?: TW.Ethereum.Proto.Transaction.$Shape|null;
                      walletType?: TW.Ethereum.Proto.SCWalletType|null;
                      $unknowns?: Uint8Array[];
                    };
                }
            }

            /** TransactionMode enum. */
            enum TransactionMode {

                /** Legacy value */
                Legacy = 0,

                /** Enveloped value */
                Enveloped = 1,

                /** UserOp value */
                UserOp = 2,

                /** SetCode value */
                SetCode = 4
            }

            /**
             * Properties of a UserOperation.
             * @deprecated Use TW.Ethereum.Proto.UserOperation.$Properties instead.
             */
            interface IUserOperation extends TW.Ethereum.Proto.UserOperation.$Properties {
            }

            /** Represents a UserOperation. */
            class UserOperation {

                /**
                 * Constructs a new UserOperation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ethereum.Proto.UserOperation.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** UserOperation entryPoint. */
                entryPoint: string;

                /** UserOperation initCode. */
                initCode: Uint8Array;

                /** UserOperation sender. */
                sender: string;

                /** UserOperation preVerificationGas. */
                preVerificationGas: Uint8Array;

                /** UserOperation verificationGasLimit. */
                verificationGasLimit: Uint8Array;

                /** UserOperation paymasterAndData. */
                paymasterAndData: Uint8Array;

                /**
                 * Encodes the specified UserOperation message. Does not implicitly {@link TW.Ethereum.Proto.UserOperation.verify|verify} messages.
                 * @param message UserOperation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Ethereum.Proto.UserOperation.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UserOperation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Ethereum.Proto.UserOperation & TW.Ethereum.Proto.UserOperation.$Shape} UserOperation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.UserOperation & TW.Ethereum.Proto.UserOperation.$Shape;

                /**
                 * Gets the type url for UserOperation
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace UserOperation {

                /** Properties of a UserOperation. */
                interface $Properties {

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

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a UserOperation. */
                type $Shape = TW.Ethereum.Proto.UserOperation.$Properties;
            }

            /**
             * Properties of a UserOperationV0_7.
             * @deprecated Use TW.Ethereum.Proto.UserOperationV0_7.$Properties instead.
             */
            interface IUserOperationV0_7 extends TW.Ethereum.Proto.UserOperationV0_7.$Properties {
            }

            /** Represents a UserOperationV0_7. */
            class UserOperationV0_7 {

                /**
                 * Constructs a new UserOperationV0_7.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ethereum.Proto.UserOperationV0_7.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** UserOperationV0_7 entryPoint. */
                entryPoint: string;

                /** UserOperationV0_7 factory. */
                factory: string;

                /** UserOperationV0_7 factoryData. */
                factoryData: Uint8Array;

                /** UserOperationV0_7 sender. */
                sender: string;

                /** UserOperationV0_7 preVerificationGas. */
                preVerificationGas: Uint8Array;

                /** UserOperationV0_7 verificationGasLimit. */
                verificationGasLimit: Uint8Array;

                /** UserOperationV0_7 paymaster. */
                paymaster: string;

                /** UserOperationV0_7 paymasterVerificationGasLimit. */
                paymasterVerificationGasLimit: Uint8Array;

                /** UserOperationV0_7 paymasterPostOpGasLimit. */
                paymasterPostOpGasLimit: Uint8Array;

                /** UserOperationV0_7 paymasterData. */
                paymasterData: Uint8Array;

                /**
                 * Encodes the specified UserOperationV0_7 message. Does not implicitly {@link TW.Ethereum.Proto.UserOperationV0_7.verify|verify} messages.
                 * @param message UserOperationV0_7 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Ethereum.Proto.UserOperationV0_7.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UserOperationV0_7 message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Ethereum.Proto.UserOperationV0_7 & TW.Ethereum.Proto.UserOperationV0_7.$Shape} UserOperationV0_7
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.UserOperationV0_7 & TW.Ethereum.Proto.UserOperationV0_7.$Shape;

                /**
                 * Gets the type url for UserOperationV0_7
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace UserOperationV0_7 {

                /** Properties of a UserOperationV0_7. */
                interface $Properties {

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

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a UserOperationV0_7. */
                type $Shape = TW.Ethereum.Proto.UserOperationV0_7.$Properties;
            }

            /**
             * Properties of an Access.
             * @deprecated Use TW.Ethereum.Proto.Access.$Properties instead.
             */
            interface IAccess extends TW.Ethereum.Proto.Access.$Properties {
            }

            /** Represents an Access. */
            class Access {

                /**
                 * Constructs a new Access.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ethereum.Proto.Access.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Access address. */
                address: string;

                /** Access storedKeys. */
                storedKeys: Uint8Array[];

                /**
                 * Encodes the specified Access message. Does not implicitly {@link TW.Ethereum.Proto.Access.verify|verify} messages.
                 * @param message Access message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Ethereum.Proto.Access.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Access message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Ethereum.Proto.Access & TW.Ethereum.Proto.Access.$Shape} Access
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.Access & TW.Ethereum.Proto.Access.$Shape;

                /**
                 * Gets the type url for Access
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Access {

                /** Properties of an Access. */
                interface $Properties {

                    /** Access address */
                    address?: (string|null);

                    /** Access storedKeys */
                    storedKeys?: (Uint8Array[]|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an Access. */
                type $Shape = TW.Ethereum.Proto.Access.$Properties;
            }

            /**
             * Properties of an Authorization.
             * @deprecated Use TW.Ethereum.Proto.Authorization.$Properties instead.
             */
            interface IAuthorization extends TW.Ethereum.Proto.Authorization.$Properties {
            }

            /** Represents an Authorization. */
            class Authorization {

                /**
                 * Constructs a new Authorization.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ethereum.Proto.Authorization.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Authorization address. */
                address: string;

                /** Authorization customSignature. */
                customSignature?: (TW.Ethereum.Proto.AuthorizationCustomSignature.$Properties|null);

                /**
                 * Encodes the specified Authorization message. Does not implicitly {@link TW.Ethereum.Proto.Authorization.verify|verify} messages.
                 * @param message Authorization message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Ethereum.Proto.Authorization.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Authorization message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Ethereum.Proto.Authorization & TW.Ethereum.Proto.Authorization.$Shape} Authorization
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.Authorization & TW.Ethereum.Proto.Authorization.$Shape;

                /**
                 * Gets the type url for Authorization
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Authorization {

                /** Properties of an Authorization. */
                interface $Properties {

                    /** Authorization address */
                    address?: (string|null);

                    /** Authorization customSignature */
                    customSignature?: (TW.Ethereum.Proto.AuthorizationCustomSignature.$Properties|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an Authorization. */
                type $Shape = TW.Ethereum.Proto.Authorization.$Properties;
            }

            /**
             * Properties of an AuthorizationCustomSignature.
             * @deprecated Use TW.Ethereum.Proto.AuthorizationCustomSignature.$Properties instead.
             */
            interface IAuthorizationCustomSignature extends TW.Ethereum.Proto.AuthorizationCustomSignature.$Properties {
            }

            /** Represents an AuthorizationCustomSignature. */
            class AuthorizationCustomSignature {

                /**
                 * Constructs a new AuthorizationCustomSignature.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ethereum.Proto.AuthorizationCustomSignature.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** AuthorizationCustomSignature chainId. */
                chainId: Uint8Array;

                /** AuthorizationCustomSignature nonce. */
                nonce: Uint8Array;

                /** AuthorizationCustomSignature signature. */
                signature: string;

                /**
                 * Encodes the specified AuthorizationCustomSignature message. Does not implicitly {@link TW.Ethereum.Proto.AuthorizationCustomSignature.verify|verify} messages.
                 * @param message AuthorizationCustomSignature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Ethereum.Proto.AuthorizationCustomSignature.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuthorizationCustomSignature message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Ethereum.Proto.AuthorizationCustomSignature & TW.Ethereum.Proto.AuthorizationCustomSignature.$Shape} AuthorizationCustomSignature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.AuthorizationCustomSignature & TW.Ethereum.Proto.AuthorizationCustomSignature.$Shape;

                /**
                 * Gets the type url for AuthorizationCustomSignature
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace AuthorizationCustomSignature {

                /** Properties of an AuthorizationCustomSignature. */
                interface $Properties {

                    /** AuthorizationCustomSignature chainId */
                    chainId?: (Uint8Array|null);

                    /** AuthorizationCustomSignature nonce */
                    nonce?: (Uint8Array|null);

                    /** AuthorizationCustomSignature signature */
                    signature?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an AuthorizationCustomSignature. */
                type $Shape = TW.Ethereum.Proto.AuthorizationCustomSignature.$Properties;
            }

            /** SCWalletType enum. */
            enum SCWalletType {

                /** SimpleAccount value */
                SimpleAccount = 0,

                /** Biz4337 value */
                Biz4337 = 1,

                /** Biz value */
                Biz = 2
            }

            /**
             * Properties of a SigningInput.
             * @deprecated Use TW.Ethereum.Proto.SigningInput.$Properties instead.
             */
            interface ISigningInput extends TW.Ethereum.Proto.SigningInput.$Properties {
            }

            /** Represents a SigningInput. */
            class SigningInput {

                /**
                 * Constructs a new SigningInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ethereum.Proto.SigningInput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** SigningInput chainId. */
                chainId: Uint8Array;

                /** SigningInput nonce. */
                nonce: Uint8Array;

                /** SigningInput txMode. */
                txMode: TW.Ethereum.Proto.TransactionMode;

                /** SigningInput gasPrice. */
                gasPrice: Uint8Array;

                /** SigningInput gasLimit. */
                gasLimit: Uint8Array;

                /** SigningInput maxInclusionFeePerGas. */
                maxInclusionFeePerGas: Uint8Array;

                /** SigningInput maxFeePerGas. */
                maxFeePerGas: Uint8Array;

                /** SigningInput toAddress. */
                toAddress: string;

                /** SigningInput privateKey. */
                privateKey: Uint8Array;

                /** SigningInput transaction. */
                transaction?: (TW.Ethereum.Proto.Transaction.$Properties|null);

                /** SigningInput userOperation. */
                userOperation?: (TW.Ethereum.Proto.UserOperation.$Properties|null);

                /** SigningInput userOperationV0_7. */
                userOperationV0_7?: (TW.Ethereum.Proto.UserOperationV0_7.$Properties|null);

                /** SigningInput accessList. */
                accessList: TW.Ethereum.Proto.Access.$Properties[];

                /** SigningInput eip7702Authorization. */
                eip7702Authorization?: (TW.Ethereum.Proto.Authorization.$Properties|null);

                /** SigningInput userOperationOneof. */
                userOperationOneof?: ("userOperation"|"userOperationV0_7");

                /**
                 * Encodes the specified SigningInput message. Does not implicitly {@link TW.Ethereum.Proto.SigningInput.verify|verify} messages.
                 * @param message SigningInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Ethereum.Proto.SigningInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Ethereum.Proto.SigningInput & TW.Ethereum.Proto.SigningInput.$Shape} SigningInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.SigningInput & TW.Ethereum.Proto.SigningInput.$Shape;

                /**
                 * Gets the type url for SigningInput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace SigningInput {

                /** Properties of a SigningInput. */
                interface $Properties {

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
                    transaction?: (TW.Ethereum.Proto.Transaction.$Properties|null);

                    /** SigningInput userOperation */
                    userOperation?: (TW.Ethereum.Proto.UserOperation.$Properties|null);

                    /** SigningInput userOperationV0_7 */
                    userOperationV0_7?: (TW.Ethereum.Proto.UserOperationV0_7.$Properties|null);

                    /** SigningInput accessList */
                    accessList?: (TW.Ethereum.Proto.Access.$Properties[]|null);

                    /** SigningInput eip7702Authorization */
                    eip7702Authorization?: (TW.Ethereum.Proto.Authorization.$Properties|null);

                    /** SigningInput userOperationOneof */
                    userOperationOneof?: ("userOperation"|"userOperationV0_7");

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Narrowed shape of a SigningInput. */
                type $Shape = {
                  chainId?: Uint8Array|null;
                  nonce?: Uint8Array|null;
                  txMode?: TW.Ethereum.Proto.TransactionMode|null;
                  gasPrice?: Uint8Array|null;
                  gasLimit?: Uint8Array|null;
                  maxInclusionFeePerGas?: Uint8Array|null;
                  maxFeePerGas?: Uint8Array|null;
                  toAddress?: string|null;
                  privateKey?: Uint8Array|null;
                  transaction?: TW.Ethereum.Proto.Transaction.$Shape|null;
                  userOperation?: TW.Ethereum.Proto.UserOperation.$Shape|null;
                  userOperationV0_7?: TW.Ethereum.Proto.UserOperationV0_7.$Shape|null;
                  accessList?: TW.Ethereum.Proto.Access.$Shape[]|null;
                  eip7702Authorization?: TW.Ethereum.Proto.Authorization.$Shape|null;
                  $unknowns?: Uint8Array[];
                } & (
                  ({ userOperationOneof?: undefined; userOperation?: null; userOperationV0_7?: null }|{ userOperationOneof?: "userOperation"; userOperation: TW.Ethereum.Proto.UserOperation.$Shape; userOperationV0_7?: null }|{ userOperationOneof?: "userOperationV0_7"; userOperation?: null; userOperationV0_7: TW.Ethereum.Proto.UserOperationV0_7.$Shape })
                );
            }

            /**
             * Properties of a SigningOutput.
             * @deprecated Use TW.Ethereum.Proto.SigningOutput.$Properties instead.
             */
            interface ISigningOutput extends TW.Ethereum.Proto.SigningOutput.$Properties {
            }

            /** Represents a SigningOutput. */
            class SigningOutput {

                /**
                 * Constructs a new SigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ethereum.Proto.SigningOutput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** SigningOutput encoded. */
                encoded: Uint8Array;

                /** SigningOutput v. */
                v: Uint8Array;

                /** SigningOutput r. */
                r: Uint8Array;

                /** SigningOutput s. */
                s: Uint8Array;

                /** SigningOutput data. */
                data: Uint8Array;

                /** SigningOutput error. */
                error: TW.Common.Proto.SigningError;

                /** SigningOutput errorMessage. */
                errorMessage: string;

                /** SigningOutput preHash. */
                preHash: Uint8Array;

                /**
                 * Encodes the specified SigningOutput message. Does not implicitly {@link TW.Ethereum.Proto.SigningOutput.verify|verify} messages.
                 * @param message SigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Ethereum.Proto.SigningOutput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Ethereum.Proto.SigningOutput & TW.Ethereum.Proto.SigningOutput.$Shape} SigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.SigningOutput & TW.Ethereum.Proto.SigningOutput.$Shape;

                /**
                 * Gets the type url for SigningOutput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace SigningOutput {

                /** Properties of a SigningOutput. */
                interface $Properties {

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

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a SigningOutput. */
                type $Shape = TW.Ethereum.Proto.SigningOutput.$Properties;
            }

            /** MessageType enum. */
            enum MessageType {

                /** MessageType_legacy value */
                MessageType_legacy = 0,

                /** MessageType_eip155 value */
                MessageType_eip155 = 1,

                /** MessageType_typed value */
                MessageType_typed = 2,

                /** MessageType_typed_eip155 value */
                MessageType_typed_eip155 = 3,

                /** MessageType_immutable_x value */
                MessageType_immutable_x = 4,

                /** MessageType_eip7702_authorization value */
                MessageType_eip7702_authorization = 5
            }

            /**
             * Properties of a MaybeChainId.
             * @deprecated Use TW.Ethereum.Proto.MaybeChainId.$Properties instead.
             */
            interface IMaybeChainId extends TW.Ethereum.Proto.MaybeChainId.$Properties {
            }

            /** Represents a MaybeChainId. */
            class MaybeChainId {

                /**
                 * Constructs a new MaybeChainId.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ethereum.Proto.MaybeChainId.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** MaybeChainId chainId. */
                chainId: number;

                /**
                 * Encodes the specified MaybeChainId message. Does not implicitly {@link TW.Ethereum.Proto.MaybeChainId.verify|verify} messages.
                 * @param message MaybeChainId message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Ethereum.Proto.MaybeChainId.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MaybeChainId message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Ethereum.Proto.MaybeChainId & TW.Ethereum.Proto.MaybeChainId.$Shape} MaybeChainId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.MaybeChainId & TW.Ethereum.Proto.MaybeChainId.$Shape;

                /**
                 * Gets the type url for MaybeChainId
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace MaybeChainId {

                /** Properties of a MaybeChainId. */
                interface $Properties {

                    /** MaybeChainId chainId */
                    chainId?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a MaybeChainId. */
                type $Shape = TW.Ethereum.Proto.MaybeChainId.$Properties;
            }

            /**
             * Properties of a MessageSigningInput.
             * @deprecated Use TW.Ethereum.Proto.MessageSigningInput.$Properties instead.
             */
            interface IMessageSigningInput extends TW.Ethereum.Proto.MessageSigningInput.$Properties {
            }

            /** Represents a MessageSigningInput. */
            class MessageSigningInput {

                /**
                 * Constructs a new MessageSigningInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ethereum.Proto.MessageSigningInput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** MessageSigningInput privateKey. */
                privateKey: Uint8Array;

                /** MessageSigningInput message. */
                message: string;

                /** MessageSigningInput chainId. */
                chainId?: (TW.Ethereum.Proto.MaybeChainId.$Properties|null);

                /** MessageSigningInput messageType. */
                messageType: TW.Ethereum.Proto.MessageType;

                /**
                 * Encodes the specified MessageSigningInput message. Does not implicitly {@link TW.Ethereum.Proto.MessageSigningInput.verify|verify} messages.
                 * @param message MessageSigningInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Ethereum.Proto.MessageSigningInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageSigningInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Ethereum.Proto.MessageSigningInput & TW.Ethereum.Proto.MessageSigningInput.$Shape} MessageSigningInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.MessageSigningInput & TW.Ethereum.Proto.MessageSigningInput.$Shape;

                /**
                 * Gets the type url for MessageSigningInput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace MessageSigningInput {

                /** Properties of a MessageSigningInput. */
                interface $Properties {

                    /** MessageSigningInput privateKey */
                    privateKey?: (Uint8Array|null);

                    /** MessageSigningInput message */
                    message?: (string|null);

                    /** MessageSigningInput chainId */
                    chainId?: (TW.Ethereum.Proto.MaybeChainId.$Properties|null);

                    /** MessageSigningInput messageType */
                    messageType?: (TW.Ethereum.Proto.MessageType|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a MessageSigningInput. */
                type $Shape = TW.Ethereum.Proto.MessageSigningInput.$Properties;
            }

            /**
             * Properties of a MessageSigningOutput.
             * @deprecated Use TW.Ethereum.Proto.MessageSigningOutput.$Properties instead.
             */
            interface IMessageSigningOutput extends TW.Ethereum.Proto.MessageSigningOutput.$Properties {
            }

            /** Represents a MessageSigningOutput. */
            class MessageSigningOutput {

                /**
                 * Constructs a new MessageSigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ethereum.Proto.MessageSigningOutput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** MessageSigningOutput signature. */
                signature: string;

                /** MessageSigningOutput error. */
                error: TW.Common.Proto.SigningError;

                /** MessageSigningOutput errorMessage. */
                errorMessage: string;

                /**
                 * Encodes the specified MessageSigningOutput message. Does not implicitly {@link TW.Ethereum.Proto.MessageSigningOutput.verify|verify} messages.
                 * @param message MessageSigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Ethereum.Proto.MessageSigningOutput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageSigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Ethereum.Proto.MessageSigningOutput & TW.Ethereum.Proto.MessageSigningOutput.$Shape} MessageSigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.MessageSigningOutput & TW.Ethereum.Proto.MessageSigningOutput.$Shape;

                /**
                 * Gets the type url for MessageSigningOutput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace MessageSigningOutput {

                /** Properties of a MessageSigningOutput. */
                interface $Properties {

                    /** MessageSigningOutput signature */
                    signature?: (string|null);

                    /** MessageSigningOutput error */
                    error?: (TW.Common.Proto.SigningError|null);

                    /** MessageSigningOutput errorMessage */
                    errorMessage?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a MessageSigningOutput. */
                type $Shape = TW.Ethereum.Proto.MessageSigningOutput.$Properties;
            }

            /**
             * Properties of a MessageVerifyingInput.
             * @deprecated Use TW.Ethereum.Proto.MessageVerifyingInput.$Properties instead.
             */
            interface IMessageVerifyingInput extends TW.Ethereum.Proto.MessageVerifyingInput.$Properties {
            }

            /** Represents a MessageVerifyingInput. */
            class MessageVerifyingInput {

                /**
                 * Constructs a new MessageVerifyingInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Ethereum.Proto.MessageVerifyingInput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** MessageVerifyingInput message. */
                message: string;

                /** MessageVerifyingInput publicKey. */
                publicKey: Uint8Array;

                /** MessageVerifyingInput signature. */
                signature: string;

                /**
                 * Encodes the specified MessageVerifyingInput message. Does not implicitly {@link TW.Ethereum.Proto.MessageVerifyingInput.verify|verify} messages.
                 * @param message MessageVerifyingInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Ethereum.Proto.MessageVerifyingInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageVerifyingInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Ethereum.Proto.MessageVerifyingInput & TW.Ethereum.Proto.MessageVerifyingInput.$Shape} MessageVerifyingInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Ethereum.Proto.MessageVerifyingInput & TW.Ethereum.Proto.MessageVerifyingInput.$Shape;

                /**
                 * Gets the type url for MessageVerifyingInput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace MessageVerifyingInput {

                /** Properties of a MessageVerifyingInput. */
                interface $Properties {

                    /** MessageVerifyingInput message */
                    message?: (string|null);

                    /** MessageVerifyingInput publicKey */
                    publicKey?: (Uint8Array|null);

                    /** MessageVerifyingInput signature */
                    signature?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a MessageVerifyingInput. */
                type $Shape = TW.Ethereum.Proto.MessageVerifyingInput.$Properties;
            }
        }
    }

    /** Namespace Solana. */
    namespace Solana {

        /** Namespace Proto. */
        namespace Proto {

            /**
             * Properties of a Transfer.
             * @deprecated Use TW.Solana.Proto.Transfer.$Properties instead.
             */
            interface ITransfer extends TW.Solana.Proto.Transfer.$Properties {
            }

            /** Represents a Transfer. */
            class Transfer {

                /**
                 * Constructs a new Transfer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.Transfer.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Transfer recipient. */
                recipient: string;

                /** Transfer value. */
                value: number;

                /** Transfer memo. */
                memo: string;

                /** Transfer references. */
                references: string[];

                /**
                 * Encodes the specified Transfer message. Does not implicitly {@link TW.Solana.Proto.Transfer.verify|verify} messages.
                 * @param message Transfer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.Transfer.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Transfer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.Transfer & TW.Solana.Proto.Transfer.$Shape} Transfer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.Transfer & TW.Solana.Proto.Transfer.$Shape;

                /**
                 * Gets the type url for Transfer
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Transfer {

                /** Properties of a Transfer. */
                interface $Properties {

                    /** Transfer recipient */
                    recipient?: (string|null);

                    /** Transfer value */
                    value?: (number|null);

                    /** Transfer memo */
                    memo?: (string|null);

                    /** Transfer references */
                    references?: (string[]|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a Transfer. */
                type $Shape = TW.Solana.Proto.Transfer.$Properties;
            }

            /**
             * Properties of a DelegateStake.
             * @deprecated Use TW.Solana.Proto.DelegateStake.$Properties instead.
             */
            interface IDelegateStake extends TW.Solana.Proto.DelegateStake.$Properties {
            }

            /** Represents a DelegateStake. */
            class DelegateStake {

                /**
                 * Constructs a new DelegateStake.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.DelegateStake.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** DelegateStake validatorPubkey. */
                validatorPubkey: string;

                /** DelegateStake value. */
                value: number;

                /** DelegateStake stakeAccount. */
                stakeAccount: string;

                /**
                 * Encodes the specified DelegateStake message. Does not implicitly {@link TW.Solana.Proto.DelegateStake.verify|verify} messages.
                 * @param message DelegateStake message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.DelegateStake.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DelegateStake message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.DelegateStake & TW.Solana.Proto.DelegateStake.$Shape} DelegateStake
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.DelegateStake & TW.Solana.Proto.DelegateStake.$Shape;

                /**
                 * Gets the type url for DelegateStake
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace DelegateStake {

                /** Properties of a DelegateStake. */
                interface $Properties {

                    /** DelegateStake validatorPubkey */
                    validatorPubkey?: (string|null);

                    /** DelegateStake value */
                    value?: (number|null);

                    /** DelegateStake stakeAccount */
                    stakeAccount?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a DelegateStake. */
                type $Shape = TW.Solana.Proto.DelegateStake.$Properties;
            }

            /**
             * Properties of a DeactivateStake.
             * @deprecated Use TW.Solana.Proto.DeactivateStake.$Properties instead.
             */
            interface IDeactivateStake extends TW.Solana.Proto.DeactivateStake.$Properties {
            }

            /** Represents a DeactivateStake. */
            class DeactivateStake {

                /**
                 * Constructs a new DeactivateStake.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.DeactivateStake.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** DeactivateStake stakeAccount. */
                stakeAccount: string;

                /**
                 * Encodes the specified DeactivateStake message. Does not implicitly {@link TW.Solana.Proto.DeactivateStake.verify|verify} messages.
                 * @param message DeactivateStake message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.DeactivateStake.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeactivateStake message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.DeactivateStake & TW.Solana.Proto.DeactivateStake.$Shape} DeactivateStake
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.DeactivateStake & TW.Solana.Proto.DeactivateStake.$Shape;

                /**
                 * Gets the type url for DeactivateStake
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace DeactivateStake {

                /** Properties of a DeactivateStake. */
                interface $Properties {

                    /** DeactivateStake stakeAccount */
                    stakeAccount?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a DeactivateStake. */
                type $Shape = TW.Solana.Proto.DeactivateStake.$Properties;
            }

            /**
             * Properties of a DeactivateAllStake.
             * @deprecated Use TW.Solana.Proto.DeactivateAllStake.$Properties instead.
             */
            interface IDeactivateAllStake extends TW.Solana.Proto.DeactivateAllStake.$Properties {
            }

            /** Represents a DeactivateAllStake. */
            class DeactivateAllStake {

                /**
                 * Constructs a new DeactivateAllStake.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.DeactivateAllStake.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** DeactivateAllStake stakeAccounts. */
                stakeAccounts: string[];

                /**
                 * Encodes the specified DeactivateAllStake message. Does not implicitly {@link TW.Solana.Proto.DeactivateAllStake.verify|verify} messages.
                 * @param message DeactivateAllStake message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.DeactivateAllStake.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeactivateAllStake message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.DeactivateAllStake & TW.Solana.Proto.DeactivateAllStake.$Shape} DeactivateAllStake
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.DeactivateAllStake & TW.Solana.Proto.DeactivateAllStake.$Shape;

                /**
                 * Gets the type url for DeactivateAllStake
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace DeactivateAllStake {

                /** Properties of a DeactivateAllStake. */
                interface $Properties {

                    /** DeactivateAllStake stakeAccounts */
                    stakeAccounts?: (string[]|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a DeactivateAllStake. */
                type $Shape = TW.Solana.Proto.DeactivateAllStake.$Properties;
            }

            /**
             * Properties of a WithdrawStake.
             * @deprecated Use TW.Solana.Proto.WithdrawStake.$Properties instead.
             */
            interface IWithdrawStake extends TW.Solana.Proto.WithdrawStake.$Properties {
            }

            /** Represents a WithdrawStake. */
            class WithdrawStake {

                /**
                 * Constructs a new WithdrawStake.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.WithdrawStake.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** WithdrawStake stakeAccount. */
                stakeAccount: string;

                /** WithdrawStake value. */
                value: number;

                /**
                 * Encodes the specified WithdrawStake message. Does not implicitly {@link TW.Solana.Proto.WithdrawStake.verify|verify} messages.
                 * @param message WithdrawStake message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.WithdrawStake.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WithdrawStake message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.WithdrawStake & TW.Solana.Proto.WithdrawStake.$Shape} WithdrawStake
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.WithdrawStake & TW.Solana.Proto.WithdrawStake.$Shape;

                /**
                 * Gets the type url for WithdrawStake
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace WithdrawStake {

                /** Properties of a WithdrawStake. */
                interface $Properties {

                    /** WithdrawStake stakeAccount */
                    stakeAccount?: (string|null);

                    /** WithdrawStake value */
                    value?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a WithdrawStake. */
                type $Shape = TW.Solana.Proto.WithdrawStake.$Properties;
            }

            /**
             * Properties of a StakeAccountValue.
             * @deprecated Use TW.Solana.Proto.StakeAccountValue.$Properties instead.
             */
            interface IStakeAccountValue extends TW.Solana.Proto.StakeAccountValue.$Properties {
            }

            /** Represents a StakeAccountValue. */
            class StakeAccountValue {

                /**
                 * Constructs a new StakeAccountValue.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.StakeAccountValue.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** StakeAccountValue stakeAccount. */
                stakeAccount: string;

                /** StakeAccountValue value. */
                value: number;

                /**
                 * Encodes the specified StakeAccountValue message. Does not implicitly {@link TW.Solana.Proto.StakeAccountValue.verify|verify} messages.
                 * @param message StakeAccountValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.StakeAccountValue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StakeAccountValue message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.StakeAccountValue & TW.Solana.Proto.StakeAccountValue.$Shape} StakeAccountValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.StakeAccountValue & TW.Solana.Proto.StakeAccountValue.$Shape;

                /**
                 * Gets the type url for StakeAccountValue
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace StakeAccountValue {

                /** Properties of a StakeAccountValue. */
                interface $Properties {

                    /** StakeAccountValue stakeAccount */
                    stakeAccount?: (string|null);

                    /** StakeAccountValue value */
                    value?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a StakeAccountValue. */
                type $Shape = TW.Solana.Proto.StakeAccountValue.$Properties;
            }

            /**
             * Properties of a WithdrawAllStake.
             * @deprecated Use TW.Solana.Proto.WithdrawAllStake.$Properties instead.
             */
            interface IWithdrawAllStake extends TW.Solana.Proto.WithdrawAllStake.$Properties {
            }

            /** Represents a WithdrawAllStake. */
            class WithdrawAllStake {

                /**
                 * Constructs a new WithdrawAllStake.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.WithdrawAllStake.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** WithdrawAllStake stakeAccounts. */
                stakeAccounts: TW.Solana.Proto.StakeAccountValue.$Properties[];

                /**
                 * Encodes the specified WithdrawAllStake message. Does not implicitly {@link TW.Solana.Proto.WithdrawAllStake.verify|verify} messages.
                 * @param message WithdrawAllStake message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.WithdrawAllStake.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WithdrawAllStake message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.WithdrawAllStake & TW.Solana.Proto.WithdrawAllStake.$Shape} WithdrawAllStake
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.WithdrawAllStake & TW.Solana.Proto.WithdrawAllStake.$Shape;

                /**
                 * Gets the type url for WithdrawAllStake
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace WithdrawAllStake {

                /** Properties of a WithdrawAllStake. */
                interface $Properties {

                    /** WithdrawAllStake stakeAccounts */
                    stakeAccounts?: (TW.Solana.Proto.StakeAccountValue.$Properties[]|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a WithdrawAllStake. */
                type $Shape = TW.Solana.Proto.WithdrawAllStake.$Properties;
            }

            /** TokenProgramId enum. */
            enum TokenProgramId {

                /** TokenProgram value */
                TokenProgram = 0,

                /** Token2022Program value */
                Token2022Program = 1
            }

            /**
             * Properties of a CreateTokenAccount.
             * @deprecated Use TW.Solana.Proto.CreateTokenAccount.$Properties instead.
             */
            interface ICreateTokenAccount extends TW.Solana.Proto.CreateTokenAccount.$Properties {
            }

            /** Represents a CreateTokenAccount. */
            class CreateTokenAccount {

                /**
                 * Constructs a new CreateTokenAccount.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.CreateTokenAccount.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** CreateTokenAccount mainAddress. */
                mainAddress: string;

                /** CreateTokenAccount tokenMintAddress. */
                tokenMintAddress: string;

                /** CreateTokenAccount tokenAddress. */
                tokenAddress: string;

                /** CreateTokenAccount tokenProgramId. */
                tokenProgramId: TW.Solana.Proto.TokenProgramId;

                /**
                 * Encodes the specified CreateTokenAccount message. Does not implicitly {@link TW.Solana.Proto.CreateTokenAccount.verify|verify} messages.
                 * @param message CreateTokenAccount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.CreateTokenAccount.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateTokenAccount message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.CreateTokenAccount & TW.Solana.Proto.CreateTokenAccount.$Shape} CreateTokenAccount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.CreateTokenAccount & TW.Solana.Proto.CreateTokenAccount.$Shape;

                /**
                 * Gets the type url for CreateTokenAccount
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace CreateTokenAccount {

                /** Properties of a CreateTokenAccount. */
                interface $Properties {

                    /** CreateTokenAccount mainAddress */
                    mainAddress?: (string|null);

                    /** CreateTokenAccount tokenMintAddress */
                    tokenMintAddress?: (string|null);

                    /** CreateTokenAccount tokenAddress */
                    tokenAddress?: (string|null);

                    /** CreateTokenAccount tokenProgramId */
                    tokenProgramId?: (TW.Solana.Proto.TokenProgramId|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a CreateTokenAccount. */
                type $Shape = TW.Solana.Proto.CreateTokenAccount.$Properties;
            }

            /**
             * Properties of a TokenTransfer.
             * @deprecated Use TW.Solana.Proto.TokenTransfer.$Properties instead.
             */
            interface ITokenTransfer extends TW.Solana.Proto.TokenTransfer.$Properties {
            }

            /** Represents a TokenTransfer. */
            class TokenTransfer {

                /**
                 * Constructs a new TokenTransfer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.TokenTransfer.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** TokenTransfer tokenMintAddress. */
                tokenMintAddress: string;

                /** TokenTransfer senderTokenAddress. */
                senderTokenAddress: string;

                /** TokenTransfer recipientTokenAddress. */
                recipientTokenAddress: string;

                /** TokenTransfer amount. */
                amount: number;

                /** TokenTransfer decimals. */
                decimals: number;

                /** TokenTransfer memo. */
                memo: string;

                /** TokenTransfer references. */
                references: string[];

                /** TokenTransfer tokenProgramId. */
                tokenProgramId: TW.Solana.Proto.TokenProgramId;

                /**
                 * Encodes the specified TokenTransfer message. Does not implicitly {@link TW.Solana.Proto.TokenTransfer.verify|verify} messages.
                 * @param message TokenTransfer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.TokenTransfer.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TokenTransfer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.TokenTransfer & TW.Solana.Proto.TokenTransfer.$Shape} TokenTransfer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.TokenTransfer & TW.Solana.Proto.TokenTransfer.$Shape;

                /**
                 * Gets the type url for TokenTransfer
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace TokenTransfer {

                /** Properties of a TokenTransfer. */
                interface $Properties {

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

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a TokenTransfer. */
                type $Shape = TW.Solana.Proto.TokenTransfer.$Properties;
            }

            /**
             * Properties of a CreateAndTransferToken.
             * @deprecated Use TW.Solana.Proto.CreateAndTransferToken.$Properties instead.
             */
            interface ICreateAndTransferToken extends TW.Solana.Proto.CreateAndTransferToken.$Properties {
            }

            /** Represents a CreateAndTransferToken. */
            class CreateAndTransferToken {

                /**
                 * Constructs a new CreateAndTransferToken.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.CreateAndTransferToken.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** CreateAndTransferToken recipientMainAddress. */
                recipientMainAddress: string;

                /** CreateAndTransferToken tokenMintAddress. */
                tokenMintAddress: string;

                /** CreateAndTransferToken recipientTokenAddress. */
                recipientTokenAddress: string;

                /** CreateAndTransferToken senderTokenAddress. */
                senderTokenAddress: string;

                /** CreateAndTransferToken amount. */
                amount: number;

                /** CreateAndTransferToken decimals. */
                decimals: number;

                /** CreateAndTransferToken memo. */
                memo: string;

                /** CreateAndTransferToken references. */
                references: string[];

                /** CreateAndTransferToken tokenProgramId. */
                tokenProgramId: TW.Solana.Proto.TokenProgramId;

                /**
                 * Encodes the specified CreateAndTransferToken message. Does not implicitly {@link TW.Solana.Proto.CreateAndTransferToken.verify|verify} messages.
                 * @param message CreateAndTransferToken message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.CreateAndTransferToken.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateAndTransferToken message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.CreateAndTransferToken & TW.Solana.Proto.CreateAndTransferToken.$Shape} CreateAndTransferToken
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.CreateAndTransferToken & TW.Solana.Proto.CreateAndTransferToken.$Shape;

                /**
                 * Gets the type url for CreateAndTransferToken
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace CreateAndTransferToken {

                /** Properties of a CreateAndTransferToken. */
                interface $Properties {

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

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a CreateAndTransferToken. */
                type $Shape = TW.Solana.Proto.CreateAndTransferToken.$Properties;
            }

            /**
             * Properties of a TokenTransferToFeePayer.
             * @deprecated Use TW.Solana.Proto.TokenTransferToFeePayer.$Properties instead.
             */
            interface ITokenTransferToFeePayer extends TW.Solana.Proto.TokenTransferToFeePayer.$Properties {
            }

            /** Represents a TokenTransferToFeePayer. */
            class TokenTransferToFeePayer {

                /**
                 * Constructs a new TokenTransferToFeePayer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.TokenTransferToFeePayer.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** TokenTransferToFeePayer feeTokenMintAddress. */
                feeTokenMintAddress: string;

                /** TokenTransferToFeePayer feeRecipientTokenAddress. */
                feeRecipientTokenAddress: string;

                /** TokenTransferToFeePayer feeAmount. */
                feeAmount: number;

                /** TokenTransferToFeePayer feeSenderTokenAddress. */
                feeSenderTokenAddress: string;

                /** TokenTransferToFeePayer feeDecimals. */
                feeDecimals: number;

                /** TokenTransferToFeePayer feeTokenProgramId. */
                feeTokenProgramId: TW.Solana.Proto.TokenProgramId;

                /**
                 * Encodes the specified TokenTransferToFeePayer message. Does not implicitly {@link TW.Solana.Proto.TokenTransferToFeePayer.verify|verify} messages.
                 * @param message TokenTransferToFeePayer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.TokenTransferToFeePayer.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TokenTransferToFeePayer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.TokenTransferToFeePayer & TW.Solana.Proto.TokenTransferToFeePayer.$Shape} TokenTransferToFeePayer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.TokenTransferToFeePayer & TW.Solana.Proto.TokenTransferToFeePayer.$Shape;

                /**
                 * Gets the type url for TokenTransferToFeePayer
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace TokenTransferToFeePayer {

                /** Properties of a TokenTransferToFeePayer. */
                interface $Properties {

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

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a TokenTransferToFeePayer. */
                type $Shape = TW.Solana.Proto.TokenTransferToFeePayer.$Properties;
            }

            /**
             * Properties of a CreateNonceAccount.
             * @deprecated Use TW.Solana.Proto.CreateNonceAccount.$Properties instead.
             */
            interface ICreateNonceAccount extends TW.Solana.Proto.CreateNonceAccount.$Properties {
            }

            /** Represents a CreateNonceAccount. */
            class CreateNonceAccount {

                /**
                 * Constructs a new CreateNonceAccount.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.CreateNonceAccount.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** CreateNonceAccount nonceAccount. */
                nonceAccount: string;

                /** CreateNonceAccount rent. */
                rent: number;

                /** CreateNonceAccount nonceAccountPrivateKey. */
                nonceAccountPrivateKey: Uint8Array;

                /**
                 * Encodes the specified CreateNonceAccount message. Does not implicitly {@link TW.Solana.Proto.CreateNonceAccount.verify|verify} messages.
                 * @param message CreateNonceAccount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.CreateNonceAccount.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateNonceAccount message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.CreateNonceAccount & TW.Solana.Proto.CreateNonceAccount.$Shape} CreateNonceAccount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.CreateNonceAccount & TW.Solana.Proto.CreateNonceAccount.$Shape;

                /**
                 * Gets the type url for CreateNonceAccount
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace CreateNonceAccount {

                /** Properties of a CreateNonceAccount. */
                interface $Properties {

                    /** CreateNonceAccount nonceAccount */
                    nonceAccount?: (string|null);

                    /** CreateNonceAccount rent */
                    rent?: (number|null);

                    /** CreateNonceAccount nonceAccountPrivateKey */
                    nonceAccountPrivateKey?: (Uint8Array|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a CreateNonceAccount. */
                type $Shape = TW.Solana.Proto.CreateNonceAccount.$Properties;
            }

            /**
             * Properties of a WithdrawNonceAccount.
             * @deprecated Use TW.Solana.Proto.WithdrawNonceAccount.$Properties instead.
             */
            interface IWithdrawNonceAccount extends TW.Solana.Proto.WithdrawNonceAccount.$Properties {
            }

            /** Represents a WithdrawNonceAccount. */
            class WithdrawNonceAccount {

                /**
                 * Constructs a new WithdrawNonceAccount.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.WithdrawNonceAccount.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** WithdrawNonceAccount nonceAccount. */
                nonceAccount: string;

                /** WithdrawNonceAccount recipient. */
                recipient: string;

                /** WithdrawNonceAccount value. */
                value: number;

                /**
                 * Encodes the specified WithdrawNonceAccount message. Does not implicitly {@link TW.Solana.Proto.WithdrawNonceAccount.verify|verify} messages.
                 * @param message WithdrawNonceAccount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.WithdrawNonceAccount.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WithdrawNonceAccount message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.WithdrawNonceAccount & TW.Solana.Proto.WithdrawNonceAccount.$Shape} WithdrawNonceAccount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.WithdrawNonceAccount & TW.Solana.Proto.WithdrawNonceAccount.$Shape;

                /**
                 * Gets the type url for WithdrawNonceAccount
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace WithdrawNonceAccount {

                /** Properties of a WithdrawNonceAccount. */
                interface $Properties {

                    /** WithdrawNonceAccount nonceAccount */
                    nonceAccount?: (string|null);

                    /** WithdrawNonceAccount recipient */
                    recipient?: (string|null);

                    /** WithdrawNonceAccount value */
                    value?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a WithdrawNonceAccount. */
                type $Shape = TW.Solana.Proto.WithdrawNonceAccount.$Properties;
            }

            /**
             * Properties of an AdvanceNonceAccount.
             * @deprecated Use TW.Solana.Proto.AdvanceNonceAccount.$Properties instead.
             */
            interface IAdvanceNonceAccount extends TW.Solana.Proto.AdvanceNonceAccount.$Properties {
            }

            /** Represents an AdvanceNonceAccount. */
            class AdvanceNonceAccount {

                /**
                 * Constructs a new AdvanceNonceAccount.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.AdvanceNonceAccount.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** AdvanceNonceAccount nonceAccount. */
                nonceAccount: string;

                /**
                 * Encodes the specified AdvanceNonceAccount message. Does not implicitly {@link TW.Solana.Proto.AdvanceNonceAccount.verify|verify} messages.
                 * @param message AdvanceNonceAccount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.AdvanceNonceAccount.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AdvanceNonceAccount message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.AdvanceNonceAccount & TW.Solana.Proto.AdvanceNonceAccount.$Shape} AdvanceNonceAccount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.AdvanceNonceAccount & TW.Solana.Proto.AdvanceNonceAccount.$Shape;

                /**
                 * Gets the type url for AdvanceNonceAccount
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace AdvanceNonceAccount {

                /** Properties of an AdvanceNonceAccount. */
                interface $Properties {

                    /** AdvanceNonceAccount nonceAccount */
                    nonceAccount?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an AdvanceNonceAccount. */
                type $Shape = TW.Solana.Proto.AdvanceNonceAccount.$Properties;
            }

            /**
             * Properties of a PubkeySignature.
             * @deprecated Use TW.Solana.Proto.PubkeySignature.$Properties instead.
             */
            interface IPubkeySignature extends TW.Solana.Proto.PubkeySignature.$Properties {
            }

            /** Represents a PubkeySignature. */
            class PubkeySignature {

                /**
                 * Constructs a new PubkeySignature.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.PubkeySignature.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** PubkeySignature pubkey. */
                pubkey: string;

                /** PubkeySignature signature. */
                signature: string;

                /**
                 * Encodes the specified PubkeySignature message. Does not implicitly {@link TW.Solana.Proto.PubkeySignature.verify|verify} messages.
                 * @param message PubkeySignature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.PubkeySignature.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PubkeySignature message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.PubkeySignature & TW.Solana.Proto.PubkeySignature.$Shape} PubkeySignature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.PubkeySignature & TW.Solana.Proto.PubkeySignature.$Shape;

                /**
                 * Gets the type url for PubkeySignature
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace PubkeySignature {

                /** Properties of a PubkeySignature. */
                interface $Properties {

                    /** PubkeySignature pubkey */
                    pubkey?: (string|null);

                    /** PubkeySignature signature */
                    signature?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a PubkeySignature. */
                type $Shape = TW.Solana.Proto.PubkeySignature.$Properties;
            }

            /**
             * Properties of a RawMessage.
             * @deprecated Use TW.Solana.Proto.RawMessage.$Properties instead.
             */
            interface IRawMessage extends TW.Solana.Proto.RawMessage.$Properties {
            }

            /** Represents a RawMessage. */
            class RawMessage {

                /**
                 * Constructs a new RawMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.RawMessage.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** RawMessage signatures. */
                signatures: TW.Solana.Proto.PubkeySignature.$Properties[];

                /** RawMessage legacy. */
                legacy?: (TW.Solana.Proto.RawMessage.MessageLegacy.$Properties|null);

                /** RawMessage v0. */
                v0?: (TW.Solana.Proto.RawMessage.MessageV0.$Properties|null);

                /** RawMessage message. */
                message?: ("legacy"|"v0");

                /**
                 * Encodes the specified RawMessage message. Does not implicitly {@link TW.Solana.Proto.RawMessage.verify|verify} messages.
                 * @param message RawMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.RawMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RawMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.RawMessage & TW.Solana.Proto.RawMessage.$Shape} RawMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.RawMessage & TW.Solana.Proto.RawMessage.$Shape;

                /**
                 * Gets the type url for RawMessage
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace RawMessage {

                /** Properties of a RawMessage. */
                interface $Properties {

                    /** RawMessage signatures */
                    signatures?: (TW.Solana.Proto.PubkeySignature.$Properties[]|null);

                    /** RawMessage legacy */
                    legacy?: (TW.Solana.Proto.RawMessage.MessageLegacy.$Properties|null);

                    /** RawMessage v0 */
                    v0?: (TW.Solana.Proto.RawMessage.MessageV0.$Properties|null);

                    /** RawMessage message */
                    message?: ("legacy"|"v0");

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Narrowed shape of a RawMessage. */
                type $Shape = {
                  signatures?: TW.Solana.Proto.PubkeySignature.$Shape[]|null;
                  legacy?: TW.Solana.Proto.RawMessage.MessageLegacy.$Shape|null;
                  v0?: TW.Solana.Proto.RawMessage.MessageV0.$Shape|null;
                  $unknowns?: Uint8Array[];
                } & (
                  ({ message?: undefined; legacy?: null; v0?: null }|{ message?: "legacy"; legacy: TW.Solana.Proto.RawMessage.MessageLegacy.$Shape; v0?: null }|{ message?: "v0"; legacy?: null; v0: TW.Solana.Proto.RawMessage.MessageV0.$Shape })
                );

                /**
                 * Properties of a MessageHeader.
                 * @deprecated Use TW.Solana.Proto.RawMessage.MessageHeader.$Properties instead.
                 */
                interface IMessageHeader extends TW.Solana.Proto.RawMessage.MessageHeader.$Properties {
                }

                /** Represents a MessageHeader. */
                class MessageHeader {

                    /**
                     * Constructs a new MessageHeader.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Solana.Proto.RawMessage.MessageHeader.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** MessageHeader numRequiredSignatures. */
                    numRequiredSignatures: number;

                    /** MessageHeader numReadonlySignedAccounts. */
                    numReadonlySignedAccounts: number;

                    /** MessageHeader numReadonlyUnsignedAccounts. */
                    numReadonlyUnsignedAccounts: number;

                    /**
                     * Encodes the specified MessageHeader message. Does not implicitly {@link TW.Solana.Proto.RawMessage.MessageHeader.verify|verify} messages.
                     * @param message MessageHeader message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.Solana.Proto.RawMessage.MessageHeader.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MessageHeader message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.Solana.Proto.RawMessage.MessageHeader & TW.Solana.Proto.RawMessage.MessageHeader.$Shape} MessageHeader
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.RawMessage.MessageHeader & TW.Solana.Proto.RawMessage.MessageHeader.$Shape;

                    /**
                     * Gets the type url for MessageHeader
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace MessageHeader {

                    /** Properties of a MessageHeader. */
                    interface $Properties {

                        /** MessageHeader numRequiredSignatures */
                        numRequiredSignatures?: (number|null);

                        /** MessageHeader numReadonlySignedAccounts */
                        numReadonlySignedAccounts?: (number|null);

                        /** MessageHeader numReadonlyUnsignedAccounts */
                        numReadonlyUnsignedAccounts?: (number|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a MessageHeader. */
                    type $Shape = TW.Solana.Proto.RawMessage.MessageHeader.$Properties;
                }

                /**
                 * Properties of an Instruction.
                 * @deprecated Use TW.Solana.Proto.RawMessage.Instruction.$Properties instead.
                 */
                interface IInstruction extends TW.Solana.Proto.RawMessage.Instruction.$Properties {
                }

                /** Represents an Instruction. */
                class Instruction {

                    /**
                     * Constructs a new Instruction.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Solana.Proto.RawMessage.Instruction.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** Instruction programId. */
                    programId: number;

                    /** Instruction accounts. */
                    accounts: number[];

                    /** Instruction programData. */
                    programData: Uint8Array;

                    /**
                     * Encodes the specified Instruction message. Does not implicitly {@link TW.Solana.Proto.RawMessage.Instruction.verify|verify} messages.
                     * @param message Instruction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.Solana.Proto.RawMessage.Instruction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Instruction message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.Solana.Proto.RawMessage.Instruction & TW.Solana.Proto.RawMessage.Instruction.$Shape} Instruction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.RawMessage.Instruction & TW.Solana.Proto.RawMessage.Instruction.$Shape;

                    /**
                     * Gets the type url for Instruction
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace Instruction {

                    /** Properties of an Instruction. */
                    interface $Properties {

                        /** Instruction programId */
                        programId?: (number|null);

                        /** Instruction accounts */
                        accounts?: (number[]|null);

                        /** Instruction programData */
                        programData?: (Uint8Array|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an Instruction. */
                    type $Shape = TW.Solana.Proto.RawMessage.Instruction.$Properties;
                }

                /**
                 * Properties of a MessageAddressTableLookup.
                 * @deprecated Use TW.Solana.Proto.RawMessage.MessageAddressTableLookup.$Properties instead.
                 */
                interface IMessageAddressTableLookup extends TW.Solana.Proto.RawMessage.MessageAddressTableLookup.$Properties {
                }

                /** Represents a MessageAddressTableLookup. */
                class MessageAddressTableLookup {

                    /**
                     * Constructs a new MessageAddressTableLookup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Solana.Proto.RawMessage.MessageAddressTableLookup.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** MessageAddressTableLookup accountKey. */
                    accountKey: string;

                    /** MessageAddressTableLookup writableIndexes. */
                    writableIndexes: number[];

                    /** MessageAddressTableLookup readonlyIndexes. */
                    readonlyIndexes: number[];

                    /**
                     * Encodes the specified MessageAddressTableLookup message. Does not implicitly {@link TW.Solana.Proto.RawMessage.MessageAddressTableLookup.verify|verify} messages.
                     * @param message MessageAddressTableLookup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.Solana.Proto.RawMessage.MessageAddressTableLookup.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MessageAddressTableLookup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.Solana.Proto.RawMessage.MessageAddressTableLookup & TW.Solana.Proto.RawMessage.MessageAddressTableLookup.$Shape} MessageAddressTableLookup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.RawMessage.MessageAddressTableLookup & TW.Solana.Proto.RawMessage.MessageAddressTableLookup.$Shape;

                    /**
                     * Gets the type url for MessageAddressTableLookup
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace MessageAddressTableLookup {

                    /** Properties of a MessageAddressTableLookup. */
                    interface $Properties {

                        /** MessageAddressTableLookup accountKey */
                        accountKey?: (string|null);

                        /** MessageAddressTableLookup writableIndexes */
                        writableIndexes?: (number[]|null);

                        /** MessageAddressTableLookup readonlyIndexes */
                        readonlyIndexes?: (number[]|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a MessageAddressTableLookup. */
                    type $Shape = TW.Solana.Proto.RawMessage.MessageAddressTableLookup.$Properties;
                }

                /**
                 * Properties of a MessageLegacy.
                 * @deprecated Use TW.Solana.Proto.RawMessage.MessageLegacy.$Properties instead.
                 */
                interface IMessageLegacy extends TW.Solana.Proto.RawMessage.MessageLegacy.$Properties {
                }

                /** Represents a MessageLegacy. */
                class MessageLegacy {

                    /**
                     * Constructs a new MessageLegacy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Solana.Proto.RawMessage.MessageLegacy.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** MessageLegacy header. */
                    header?: (TW.Solana.Proto.RawMessage.MessageHeader.$Properties|null);

                    /** MessageLegacy accountKeys. */
                    accountKeys: string[];

                    /** MessageLegacy recentBlockhash. */
                    recentBlockhash: string;

                    /** MessageLegacy instructions. */
                    instructions: TW.Solana.Proto.RawMessage.Instruction.$Properties[];

                    /**
                     * Encodes the specified MessageLegacy message. Does not implicitly {@link TW.Solana.Proto.RawMessage.MessageLegacy.verify|verify} messages.
                     * @param message MessageLegacy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.Solana.Proto.RawMessage.MessageLegacy.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MessageLegacy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.Solana.Proto.RawMessage.MessageLegacy & TW.Solana.Proto.RawMessage.MessageLegacy.$Shape} MessageLegacy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.RawMessage.MessageLegacy & TW.Solana.Proto.RawMessage.MessageLegacy.$Shape;

                    /**
                     * Gets the type url for MessageLegacy
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace MessageLegacy {

                    /** Properties of a MessageLegacy. */
                    interface $Properties {

                        /** MessageLegacy header */
                        header?: (TW.Solana.Proto.RawMessage.MessageHeader.$Properties|null);

                        /** MessageLegacy accountKeys */
                        accountKeys?: (string[]|null);

                        /** MessageLegacy recentBlockhash */
                        recentBlockhash?: (string|null);

                        /** MessageLegacy instructions */
                        instructions?: (TW.Solana.Proto.RawMessage.Instruction.$Properties[]|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a MessageLegacy. */
                    type $Shape = TW.Solana.Proto.RawMessage.MessageLegacy.$Properties;
                }

                /**
                 * Properties of a MessageV0.
                 * @deprecated Use TW.Solana.Proto.RawMessage.MessageV0.$Properties instead.
                 */
                interface IMessageV0 extends TW.Solana.Proto.RawMessage.MessageV0.$Properties {
                }

                /** Represents a MessageV0. */
                class MessageV0 {

                    /**
                     * Constructs a new MessageV0.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Solana.Proto.RawMessage.MessageV0.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** MessageV0 header. */
                    header?: (TW.Solana.Proto.RawMessage.MessageHeader.$Properties|null);

                    /** MessageV0 accountKeys. */
                    accountKeys: string[];

                    /** MessageV0 recentBlockhash. */
                    recentBlockhash: string;

                    /** MessageV0 instructions. */
                    instructions: TW.Solana.Proto.RawMessage.Instruction.$Properties[];

                    /** MessageV0 addressTableLookups. */
                    addressTableLookups: TW.Solana.Proto.RawMessage.MessageAddressTableLookup.$Properties[];

                    /**
                     * Encodes the specified MessageV0 message. Does not implicitly {@link TW.Solana.Proto.RawMessage.MessageV0.verify|verify} messages.
                     * @param message MessageV0 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.Solana.Proto.RawMessage.MessageV0.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MessageV0 message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.Solana.Proto.RawMessage.MessageV0 & TW.Solana.Proto.RawMessage.MessageV0.$Shape} MessageV0
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.RawMessage.MessageV0 & TW.Solana.Proto.RawMessage.MessageV0.$Shape;

                    /**
                     * Gets the type url for MessageV0
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace MessageV0 {

                    /** Properties of a MessageV0. */
                    interface $Properties {

                        /** MessageV0 header */
                        header?: (TW.Solana.Proto.RawMessage.MessageHeader.$Properties|null);

                        /** MessageV0 accountKeys */
                        accountKeys?: (string[]|null);

                        /** MessageV0 recentBlockhash */
                        recentBlockhash?: (string|null);

                        /** MessageV0 instructions */
                        instructions?: (TW.Solana.Proto.RawMessage.Instruction.$Properties[]|null);

                        /** MessageV0 addressTableLookups */
                        addressTableLookups?: (TW.Solana.Proto.RawMessage.MessageAddressTableLookup.$Properties[]|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a MessageV0. */
                    type $Shape = TW.Solana.Proto.RawMessage.MessageV0.$Properties;
                }
            }

            /**
             * Properties of a DecodingTransactionOutput.
             * @deprecated Use TW.Solana.Proto.DecodingTransactionOutput.$Properties instead.
             */
            interface IDecodingTransactionOutput extends TW.Solana.Proto.DecodingTransactionOutput.$Properties {
            }

            /** Represents a DecodingTransactionOutput. */
            class DecodingTransactionOutput {

                /**
                 * Constructs a new DecodingTransactionOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.DecodingTransactionOutput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** DecodingTransactionOutput transaction. */
                transaction?: (TW.Solana.Proto.RawMessage.$Properties|null);

                /** DecodingTransactionOutput error. */
                error: TW.Common.Proto.SigningError;

                /** DecodingTransactionOutput errorMessage. */
                errorMessage: string;

                /**
                 * Encodes the specified DecodingTransactionOutput message. Does not implicitly {@link TW.Solana.Proto.DecodingTransactionOutput.verify|verify} messages.
                 * @param message DecodingTransactionOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.DecodingTransactionOutput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DecodingTransactionOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.DecodingTransactionOutput & TW.Solana.Proto.DecodingTransactionOutput.$Shape} DecodingTransactionOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.DecodingTransactionOutput & TW.Solana.Proto.DecodingTransactionOutput.$Shape;

                /**
                 * Gets the type url for DecodingTransactionOutput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace DecodingTransactionOutput {

                /** Properties of a DecodingTransactionOutput. */
                interface $Properties {

                    /** DecodingTransactionOutput transaction */
                    transaction?: (TW.Solana.Proto.RawMessage.$Properties|null);

                    /** DecodingTransactionOutput error */
                    error?: (TW.Common.Proto.SigningError|null);

                    /** DecodingTransactionOutput errorMessage */
                    errorMessage?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a DecodingTransactionOutput. */
                type $Shape = {
                  transaction?: TW.Solana.Proto.RawMessage.$Shape|null;
                  error?: TW.Common.Proto.SigningError|null;
                  errorMessage?: string|null;
                  $unknowns?: Uint8Array[];
                };
            }

            /** Encoding enum. */
            enum Encoding {

                /** Base58 value */
                Base58 = 0,

                /** Base64 value */
                Base64 = 1
            }

            /**
             * Properties of a PriorityFeePrice.
             * @deprecated Use TW.Solana.Proto.PriorityFeePrice.$Properties instead.
             */
            interface IPriorityFeePrice extends TW.Solana.Proto.PriorityFeePrice.$Properties {
            }

            /** Represents a PriorityFeePrice. */
            class PriorityFeePrice {

                /**
                 * Constructs a new PriorityFeePrice.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.PriorityFeePrice.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** PriorityFeePrice price. */
                price: number;

                /**
                 * Encodes the specified PriorityFeePrice message. Does not implicitly {@link TW.Solana.Proto.PriorityFeePrice.verify|verify} messages.
                 * @param message PriorityFeePrice message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.PriorityFeePrice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PriorityFeePrice message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.PriorityFeePrice & TW.Solana.Proto.PriorityFeePrice.$Shape} PriorityFeePrice
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.PriorityFeePrice & TW.Solana.Proto.PriorityFeePrice.$Shape;

                /**
                 * Gets the type url for PriorityFeePrice
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace PriorityFeePrice {

                /** Properties of a PriorityFeePrice. */
                interface $Properties {

                    /** PriorityFeePrice price */
                    price?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a PriorityFeePrice. */
                type $Shape = TW.Solana.Proto.PriorityFeePrice.$Properties;
            }

            /**
             * Properties of a PriorityFeeLimit.
             * @deprecated Use TW.Solana.Proto.PriorityFeeLimit.$Properties instead.
             */
            interface IPriorityFeeLimit extends TW.Solana.Proto.PriorityFeeLimit.$Properties {
            }

            /** Represents a PriorityFeeLimit. */
            class PriorityFeeLimit {

                /**
                 * Constructs a new PriorityFeeLimit.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.PriorityFeeLimit.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** PriorityFeeLimit limit. */
                limit: number;

                /**
                 * Encodes the specified PriorityFeeLimit message. Does not implicitly {@link TW.Solana.Proto.PriorityFeeLimit.verify|verify} messages.
                 * @param message PriorityFeeLimit message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.PriorityFeeLimit.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PriorityFeeLimit message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.PriorityFeeLimit & TW.Solana.Proto.PriorityFeeLimit.$Shape} PriorityFeeLimit
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.PriorityFeeLimit & TW.Solana.Proto.PriorityFeeLimit.$Shape;

                /**
                 * Gets the type url for PriorityFeeLimit
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace PriorityFeeLimit {

                /** Properties of a PriorityFeeLimit. */
                interface $Properties {

                    /** PriorityFeeLimit limit */
                    limit?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a PriorityFeeLimit. */
                type $Shape = TW.Solana.Proto.PriorityFeeLimit.$Properties;
            }

            /**
             * Properties of a SigningInput.
             * @deprecated Use TW.Solana.Proto.SigningInput.$Properties instead.
             */
            interface ISigningInput extends TW.Solana.Proto.SigningInput.$Properties {
            }

            /** Represents a SigningInput. */
            class SigningInput {

                /**
                 * Constructs a new SigningInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.SigningInput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** SigningInput privateKey. */
                privateKey: Uint8Array;

                /** SigningInput recentBlockhash. */
                recentBlockhash: string;

                /** SigningInput v0Msg. */
                v0Msg: boolean;

                /** SigningInput transferTransaction. */
                transferTransaction?: (TW.Solana.Proto.Transfer.$Properties|null);

                /** SigningInput delegateStakeTransaction. */
                delegateStakeTransaction?: (TW.Solana.Proto.DelegateStake.$Properties|null);

                /** SigningInput deactivateStakeTransaction. */
                deactivateStakeTransaction?: (TW.Solana.Proto.DeactivateStake.$Properties|null);

                /** SigningInput deactivateAllStakeTransaction. */
                deactivateAllStakeTransaction?: (TW.Solana.Proto.DeactivateAllStake.$Properties|null);

                /** SigningInput withdrawTransaction. */
                withdrawTransaction?: (TW.Solana.Proto.WithdrawStake.$Properties|null);

                /** SigningInput withdrawAllTransaction. */
                withdrawAllTransaction?: (TW.Solana.Proto.WithdrawAllStake.$Properties|null);

                /** SigningInput createTokenAccountTransaction. */
                createTokenAccountTransaction?: (TW.Solana.Proto.CreateTokenAccount.$Properties|null);

                /** SigningInput tokenTransferTransaction. */
                tokenTransferTransaction?: (TW.Solana.Proto.TokenTransfer.$Properties|null);

                /** SigningInput createAndTransferTokenTransaction. */
                createAndTransferTokenTransaction?: (TW.Solana.Proto.CreateAndTransferToken.$Properties|null);

                /** SigningInput createNonceAccount. */
                createNonceAccount?: (TW.Solana.Proto.CreateNonceAccount.$Properties|null);

                /** SigningInput withdrawNonceAccount. */
                withdrawNonceAccount?: (TW.Solana.Proto.WithdrawNonceAccount.$Properties|null);

                /** SigningInput advanceNonceAccount. */
                advanceNonceAccount?: (TW.Solana.Proto.AdvanceNonceAccount.$Properties|null);

                /** SigningInput sender. */
                sender: string;

                /** SigningInput nonceAccount. */
                nonceAccount: string;

                /** SigningInput feePayerPrivateKey. */
                feePayerPrivateKey: Uint8Array;

                /** SigningInput feePayer. */
                feePayer: string;

                /** SigningInput rawMessage. */
                rawMessage?: (TW.Solana.Proto.RawMessage.$Properties|null);

                /** SigningInput txEncoding. */
                txEncoding: TW.Solana.Proto.Encoding;

                /** SigningInput priorityFeePrice. */
                priorityFeePrice?: (TW.Solana.Proto.PriorityFeePrice.$Properties|null);

                /** SigningInput priorityFeeLimit. */
                priorityFeeLimit?: (TW.Solana.Proto.PriorityFeeLimit.$Properties|null);

                /** SigningInput tokenTransferToFeePayer. */
                tokenTransferToFeePayer?: (TW.Solana.Proto.TokenTransferToFeePayer.$Properties|null);

                /** SigningInput transferToFeePayer. */
                transferToFeePayer?: (TW.Solana.Proto.Transfer.$Properties|null);

                /** SigningInput transactionType. */
                transactionType?: ("transferTransaction"|"delegateStakeTransaction"|"deactivateStakeTransaction"|"deactivateAllStakeTransaction"|"withdrawTransaction"|"withdrawAllTransaction"|"createTokenAccountTransaction"|"tokenTransferTransaction"|"createAndTransferTokenTransaction"|"createNonceAccount"|"withdrawNonceAccount"|"advanceNonceAccount");

                /**
                 * Encodes the specified SigningInput message. Does not implicitly {@link TW.Solana.Proto.SigningInput.verify|verify} messages.
                 * @param message SigningInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.SigningInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.SigningInput & TW.Solana.Proto.SigningInput.$Shape} SigningInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.SigningInput & TW.Solana.Proto.SigningInput.$Shape;

                /**
                 * Gets the type url for SigningInput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace SigningInput {

                /** Properties of a SigningInput. */
                interface $Properties {

                    /** SigningInput privateKey */
                    privateKey?: (Uint8Array|null);

                    /** SigningInput recentBlockhash */
                    recentBlockhash?: (string|null);

                    /** SigningInput v0Msg */
                    v0Msg?: (boolean|null);

                    /** SigningInput transferTransaction */
                    transferTransaction?: (TW.Solana.Proto.Transfer.$Properties|null);

                    /** SigningInput delegateStakeTransaction */
                    delegateStakeTransaction?: (TW.Solana.Proto.DelegateStake.$Properties|null);

                    /** SigningInput deactivateStakeTransaction */
                    deactivateStakeTransaction?: (TW.Solana.Proto.DeactivateStake.$Properties|null);

                    /** SigningInput deactivateAllStakeTransaction */
                    deactivateAllStakeTransaction?: (TW.Solana.Proto.DeactivateAllStake.$Properties|null);

                    /** SigningInput withdrawTransaction */
                    withdrawTransaction?: (TW.Solana.Proto.WithdrawStake.$Properties|null);

                    /** SigningInput withdrawAllTransaction */
                    withdrawAllTransaction?: (TW.Solana.Proto.WithdrawAllStake.$Properties|null);

                    /** SigningInput createTokenAccountTransaction */
                    createTokenAccountTransaction?: (TW.Solana.Proto.CreateTokenAccount.$Properties|null);

                    /** SigningInput tokenTransferTransaction */
                    tokenTransferTransaction?: (TW.Solana.Proto.TokenTransfer.$Properties|null);

                    /** SigningInput createAndTransferTokenTransaction */
                    createAndTransferTokenTransaction?: (TW.Solana.Proto.CreateAndTransferToken.$Properties|null);

                    /** SigningInput createNonceAccount */
                    createNonceAccount?: (TW.Solana.Proto.CreateNonceAccount.$Properties|null);

                    /** SigningInput withdrawNonceAccount */
                    withdrawNonceAccount?: (TW.Solana.Proto.WithdrawNonceAccount.$Properties|null);

                    /** SigningInput advanceNonceAccount */
                    advanceNonceAccount?: (TW.Solana.Proto.AdvanceNonceAccount.$Properties|null);

                    /** SigningInput sender */
                    sender?: (string|null);

                    /** SigningInput nonceAccount */
                    nonceAccount?: (string|null);

                    /** SigningInput feePayerPrivateKey */
                    feePayerPrivateKey?: (Uint8Array|null);

                    /** SigningInput feePayer */
                    feePayer?: (string|null);

                    /** SigningInput rawMessage */
                    rawMessage?: (TW.Solana.Proto.RawMessage.$Properties|null);

                    /** SigningInput txEncoding */
                    txEncoding?: (TW.Solana.Proto.Encoding|null);

                    /** SigningInput priorityFeePrice */
                    priorityFeePrice?: (TW.Solana.Proto.PriorityFeePrice.$Properties|null);

                    /** SigningInput priorityFeeLimit */
                    priorityFeeLimit?: (TW.Solana.Proto.PriorityFeeLimit.$Properties|null);

                    /** SigningInput tokenTransferToFeePayer */
                    tokenTransferToFeePayer?: (TW.Solana.Proto.TokenTransferToFeePayer.$Properties|null);

                    /** SigningInput transferToFeePayer */
                    transferToFeePayer?: (TW.Solana.Proto.Transfer.$Properties|null);

                    /** SigningInput transactionType */
                    transactionType?: ("transferTransaction"|"delegateStakeTransaction"|"deactivateStakeTransaction"|"deactivateAllStakeTransaction"|"withdrawTransaction"|"withdrawAllTransaction"|"createTokenAccountTransaction"|"tokenTransferTransaction"|"createAndTransferTokenTransaction"|"createNonceAccount"|"withdrawNonceAccount"|"advanceNonceAccount");

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Narrowed shape of a SigningInput. */
                type $Shape = {
                  privateKey?: Uint8Array|null;
                  recentBlockhash?: string|null;
                  v0Msg?: boolean|null;
                  transferTransaction?: TW.Solana.Proto.Transfer.$Shape|null;
                  delegateStakeTransaction?: TW.Solana.Proto.DelegateStake.$Shape|null;
                  deactivateStakeTransaction?: TW.Solana.Proto.DeactivateStake.$Shape|null;
                  deactivateAllStakeTransaction?: TW.Solana.Proto.DeactivateAllStake.$Shape|null;
                  withdrawTransaction?: TW.Solana.Proto.WithdrawStake.$Shape|null;
                  withdrawAllTransaction?: TW.Solana.Proto.WithdrawAllStake.$Shape|null;
                  createTokenAccountTransaction?: TW.Solana.Proto.CreateTokenAccount.$Shape|null;
                  tokenTransferTransaction?: TW.Solana.Proto.TokenTransfer.$Shape|null;
                  createAndTransferTokenTransaction?: TW.Solana.Proto.CreateAndTransferToken.$Shape|null;
                  createNonceAccount?: TW.Solana.Proto.CreateNonceAccount.$Shape|null;
                  withdrawNonceAccount?: TW.Solana.Proto.WithdrawNonceAccount.$Shape|null;
                  advanceNonceAccount?: TW.Solana.Proto.AdvanceNonceAccount.$Shape|null;
                  sender?: string|null;
                  nonceAccount?: string|null;
                  feePayerPrivateKey?: Uint8Array|null;
                  feePayer?: string|null;
                  rawMessage?: TW.Solana.Proto.RawMessage.$Shape|null;
                  txEncoding?: TW.Solana.Proto.Encoding|null;
                  priorityFeePrice?: TW.Solana.Proto.PriorityFeePrice.$Shape|null;
                  priorityFeeLimit?: TW.Solana.Proto.PriorityFeeLimit.$Shape|null;
                  tokenTransferToFeePayer?: TW.Solana.Proto.TokenTransferToFeePayer.$Shape|null;
                  transferToFeePayer?: TW.Solana.Proto.Transfer.$Shape|null;
                  $unknowns?: Uint8Array[];
                } & (
                  ({ transactionType?: undefined; transferTransaction?: null; delegateStakeTransaction?: null; deactivateStakeTransaction?: null; deactivateAllStakeTransaction?: null; withdrawTransaction?: null; withdrawAllTransaction?: null; createTokenAccountTransaction?: null; tokenTransferTransaction?: null; createAndTransferTokenTransaction?: null; createNonceAccount?: null; withdrawNonceAccount?: null; advanceNonceAccount?: null }|{ transactionType?: "transferTransaction"; transferTransaction: TW.Solana.Proto.Transfer.$Shape; delegateStakeTransaction?: null; deactivateStakeTransaction?: null; deactivateAllStakeTransaction?: null; withdrawTransaction?: null; withdrawAllTransaction?: null; createTokenAccountTransaction?: null; tokenTransferTransaction?: null; createAndTransferTokenTransaction?: null; createNonceAccount?: null; withdrawNonceAccount?: null; advanceNonceAccount?: null }|{ transactionType?: "delegateStakeTransaction"; transferTransaction?: null; delegateStakeTransaction: TW.Solana.Proto.DelegateStake.$Shape; deactivateStakeTransaction?: null; deactivateAllStakeTransaction?: null; withdrawTransaction?: null; withdrawAllTransaction?: null; createTokenAccountTransaction?: null; tokenTransferTransaction?: null; createAndTransferTokenTransaction?: null; createNonceAccount?: null; withdrawNonceAccount?: null; advanceNonceAccount?: null }|{ transactionType?: "deactivateStakeTransaction"; transferTransaction?: null; delegateStakeTransaction?: null; deactivateStakeTransaction: TW.Solana.Proto.DeactivateStake.$Shape; deactivateAllStakeTransaction?: null; withdrawTransaction?: null; withdrawAllTransaction?: null; createTokenAccountTransaction?: null; tokenTransferTransaction?: null; createAndTransferTokenTransaction?: null; createNonceAccount?: null; withdrawNonceAccount?: null; advanceNonceAccount?: null }|{ transactionType?: "deactivateAllStakeTransaction"; transferTransaction?: null; delegateStakeTransaction?: null; deactivateStakeTransaction?: null; deactivateAllStakeTransaction: TW.Solana.Proto.DeactivateAllStake.$Shape; withdrawTransaction?: null; withdrawAllTransaction?: null; createTokenAccountTransaction?: null; tokenTransferTransaction?: null; createAndTransferTokenTransaction?: null; createNonceAccount?: null; withdrawNonceAccount?: null; advanceNonceAccount?: null }|{ transactionType?: "withdrawTransaction"; transferTransaction?: null; delegateStakeTransaction?: null; deactivateStakeTransaction?: null; deactivateAllStakeTransaction?: null; withdrawTransaction: TW.Solana.Proto.WithdrawStake.$Shape; withdrawAllTransaction?: null; createTokenAccountTransaction?: null; tokenTransferTransaction?: null; createAndTransferTokenTransaction?: null; createNonceAccount?: null; withdrawNonceAccount?: null; advanceNonceAccount?: null }|{ transactionType?: "withdrawAllTransaction"; transferTransaction?: null; delegateStakeTransaction?: null; deactivateStakeTransaction?: null; deactivateAllStakeTransaction?: null; withdrawTransaction?: null; withdrawAllTransaction: TW.Solana.Proto.WithdrawAllStake.$Shape; createTokenAccountTransaction?: null; tokenTransferTransaction?: null; createAndTransferTokenTransaction?: null; createNonceAccount?: null; withdrawNonceAccount?: null; advanceNonceAccount?: null }|{ transactionType?: "createTokenAccountTransaction"; transferTransaction?: null; delegateStakeTransaction?: null; deactivateStakeTransaction?: null; deactivateAllStakeTransaction?: null; withdrawTransaction?: null; withdrawAllTransaction?: null; createTokenAccountTransaction: TW.Solana.Proto.CreateTokenAccount.$Shape; tokenTransferTransaction?: null; createAndTransferTokenTransaction?: null; createNonceAccount?: null; withdrawNonceAccount?: null; advanceNonceAccount?: null }|{ transactionType?: "tokenTransferTransaction"; transferTransaction?: null; delegateStakeTransaction?: null; deactivateStakeTransaction?: null; deactivateAllStakeTransaction?: null; withdrawTransaction?: null; withdrawAllTransaction?: null; createTokenAccountTransaction?: null; tokenTransferTransaction: TW.Solana.Proto.TokenTransfer.$Shape; createAndTransferTokenTransaction?: null; createNonceAccount?: null; withdrawNonceAccount?: null; advanceNonceAccount?: null }|{ transactionType?: "createAndTransferTokenTransaction"; transferTransaction?: null; delegateStakeTransaction?: null; deactivateStakeTransaction?: null; deactivateAllStakeTransaction?: null; withdrawTransaction?: null; withdrawAllTransaction?: null; createTokenAccountTransaction?: null; tokenTransferTransaction?: null; createAndTransferTokenTransaction: TW.Solana.Proto.CreateAndTransferToken.$Shape; createNonceAccount?: null; withdrawNonceAccount?: null; advanceNonceAccount?: null }|{ transactionType?: "createNonceAccount"; transferTransaction?: null; delegateStakeTransaction?: null; deactivateStakeTransaction?: null; deactivateAllStakeTransaction?: null; withdrawTransaction?: null; withdrawAllTransaction?: null; createTokenAccountTransaction?: null; tokenTransferTransaction?: null; createAndTransferTokenTransaction?: null; createNonceAccount: TW.Solana.Proto.CreateNonceAccount.$Shape; withdrawNonceAccount?: null; advanceNonceAccount?: null }|{ transactionType?: "withdrawNonceAccount"; transferTransaction?: null; delegateStakeTransaction?: null; deactivateStakeTransaction?: null; deactivateAllStakeTransaction?: null; withdrawTransaction?: null; withdrawAllTransaction?: null; createTokenAccountTransaction?: null; tokenTransferTransaction?: null; createAndTransferTokenTransaction?: null; createNonceAccount?: null; withdrawNonceAccount: TW.Solana.Proto.WithdrawNonceAccount.$Shape; advanceNonceAccount?: null }|{ transactionType?: "advanceNonceAccount"; transferTransaction?: null; delegateStakeTransaction?: null; deactivateStakeTransaction?: null; deactivateAllStakeTransaction?: null; withdrawTransaction?: null; withdrawAllTransaction?: null; createTokenAccountTransaction?: null; tokenTransferTransaction?: null; createAndTransferTokenTransaction?: null; createNonceAccount?: null; withdrawNonceAccount?: null; advanceNonceAccount: TW.Solana.Proto.AdvanceNonceAccount.$Shape })
                );
            }

            /**
             * Properties of a SigningOutput.
             * @deprecated Use TW.Solana.Proto.SigningOutput.$Properties instead.
             */
            interface ISigningOutput extends TW.Solana.Proto.SigningOutput.$Properties {
            }

            /** Represents a SigningOutput. */
            class SigningOutput {

                /**
                 * Constructs a new SigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.SigningOutput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** SigningOutput encoded. */
                encoded: string;

                /** SigningOutput error. */
                error: TW.Common.Proto.SigningError;

                /** SigningOutput errorMessage. */
                errorMessage: string;

                /** SigningOutput unsignedTx. */
                unsignedTx: string;

                /** SigningOutput signatures. */
                signatures: TW.Solana.Proto.PubkeySignature.$Properties[];

                /**
                 * Encodes the specified SigningOutput message. Does not implicitly {@link TW.Solana.Proto.SigningOutput.verify|verify} messages.
                 * @param message SigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.SigningOutput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.SigningOutput & TW.Solana.Proto.SigningOutput.$Shape} SigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.SigningOutput & TW.Solana.Proto.SigningOutput.$Shape;

                /**
                 * Gets the type url for SigningOutput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace SigningOutput {

                /** Properties of a SigningOutput. */
                interface $Properties {

                    /** SigningOutput encoded */
                    encoded?: (string|null);

                    /** SigningOutput error */
                    error?: (TW.Common.Proto.SigningError|null);

                    /** SigningOutput errorMessage */
                    errorMessage?: (string|null);

                    /** SigningOutput unsignedTx */
                    unsignedTx?: (string|null);

                    /** SigningOutput signatures */
                    signatures?: (TW.Solana.Proto.PubkeySignature.$Properties[]|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a SigningOutput. */
                type $Shape = TW.Solana.Proto.SigningOutput.$Properties;
            }

            /**
             * Properties of a PreSigningOutput.
             * @deprecated Use TW.Solana.Proto.PreSigningOutput.$Properties instead.
             */
            interface IPreSigningOutput extends TW.Solana.Proto.PreSigningOutput.$Properties {
            }

            /** Transaction pre-signing output */
            class PreSigningOutput {

                /**
                 * Constructs a new PreSigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.PreSigningOutput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** PreSigningOutput signers. */
                signers: Uint8Array[];

                /** PreSigningOutput data. */
                data: Uint8Array;

                /** PreSigningOutput error. */
                error: TW.Common.Proto.SigningError;

                /** PreSigningOutput errorMessage. */
                errorMessage: string;

                /**
                 * Encodes the specified PreSigningOutput message. Does not implicitly {@link TW.Solana.Proto.PreSigningOutput.verify|verify} messages.
                 * @param message PreSigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.PreSigningOutput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PreSigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.PreSigningOutput & TW.Solana.Proto.PreSigningOutput.$Shape} PreSigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.PreSigningOutput & TW.Solana.Proto.PreSigningOutput.$Shape;

                /**
                 * Gets the type url for PreSigningOutput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace PreSigningOutput {

                /** Properties of a PreSigningOutput. */
                interface $Properties {

                    /** PreSigningOutput signers */
                    signers?: (Uint8Array[]|null);

                    /** PreSigningOutput data */
                    data?: (Uint8Array|null);

                    /** PreSigningOutput error */
                    error?: (TW.Common.Proto.SigningError|null);

                    /** PreSigningOutput errorMessage */
                    errorMessage?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a PreSigningOutput. */
                type $Shape = TW.Solana.Proto.PreSigningOutput.$Properties;
            }

            /** MessageType enum. */
            enum MessageType {

                /** MessageType_raw value */
                MessageType_raw = 0,

                /** MessageType_offchain_v0 value */
                MessageType_offchain_v0 = 1
            }

            /** MessageFormat enum. */
            enum MessageFormat {

                /** MessageFormat_utf8 value */
                MessageFormat_utf8 = 0,

                /** MessageFormat_restricted_ascii value */
                MessageFormat_restricted_ascii = 1
            }

            /**
             * Properties of a StructuredField.
             * @deprecated Use TW.Solana.Proto.StructuredField.$Properties instead.
             */
            interface IStructuredField extends TW.Solana.Proto.StructuredField.$Properties {
            }

            /** Represents a StructuredField. */
            class StructuredField {

                /**
                 * Constructs a new StructuredField.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.StructuredField.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** StructuredField label. */
                label: string;

                /** StructuredField value. */
                value: string;

                /**
                 * Encodes the specified StructuredField message. Does not implicitly {@link TW.Solana.Proto.StructuredField.verify|verify} messages.
                 * @param message StructuredField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.StructuredField.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StructuredField message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.StructuredField & TW.Solana.Proto.StructuredField.$Shape} StructuredField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.StructuredField & TW.Solana.Proto.StructuredField.$Shape;

                /**
                 * Gets the type url for StructuredField
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace StructuredField {

                /** Properties of a StructuredField. */
                interface $Properties {

                    /** StructuredField label */
                    label?: (string|null);

                    /** StructuredField value */
                    value?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a StructuredField. */
                type $Shape = TW.Solana.Proto.StructuredField.$Properties;
            }

            /**
             * Properties of a StructuredMessage.
             * @deprecated Use TW.Solana.Proto.StructuredMessage.$Properties instead.
             */
            interface IStructuredMessage extends TW.Solana.Proto.StructuredMessage.$Properties {
            }

            /** Represents a StructuredMessage. */
            class StructuredMessage {

                /**
                 * Constructs a new StructuredMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.StructuredMessage.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** StructuredMessage header. */
                header: string;

                /** StructuredMessage fields. */
                fields: TW.Solana.Proto.StructuredField.$Properties[];

                /** StructuredMessage statement. */
                statement: string;

                /**
                 * Encodes the specified StructuredMessage message. Does not implicitly {@link TW.Solana.Proto.StructuredMessage.verify|verify} messages.
                 * @param message StructuredMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.StructuredMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StructuredMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.StructuredMessage & TW.Solana.Proto.StructuredMessage.$Shape} StructuredMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.StructuredMessage & TW.Solana.Proto.StructuredMessage.$Shape;

                /**
                 * Gets the type url for StructuredMessage
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace StructuredMessage {

                /** Properties of a StructuredMessage. */
                interface $Properties {

                    /** StructuredMessage header */
                    header?: (string|null);

                    /** StructuredMessage fields */
                    fields?: (TW.Solana.Proto.StructuredField.$Properties[]|null);

                    /** StructuredMessage statement */
                    statement?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a StructuredMessage. */
                type $Shape = TW.Solana.Proto.StructuredMessage.$Properties;
            }

            /**
             * Properties of a MessageSigningInput.
             * @deprecated Use TW.Solana.Proto.MessageSigningInput.$Properties instead.
             */
            interface IMessageSigningInput extends TW.Solana.Proto.MessageSigningInput.$Properties {
            }

            /** Represents a MessageSigningInput. */
            class MessageSigningInput {

                /**
                 * Constructs a new MessageSigningInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.MessageSigningInput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** MessageSigningInput privateKey. */
                privateKey: Uint8Array;

                /** MessageSigningInput publicKey. */
                publicKey: Uint8Array;

                /** MessageSigningInput messageType. */
                messageType: TW.Solana.Proto.MessageType;

                /** MessageSigningInput applicationDomain. */
                applicationDomain: Uint8Array;

                /** MessageSigningInput messageFormat. */
                messageFormat: TW.Solana.Proto.MessageFormat;

                /** MessageSigningInput message. */
                message?: (string|null);

                /** MessageSigningInput structuredMessage. */
                structuredMessage?: (TW.Solana.Proto.StructuredMessage.$Properties|null);

                /** MessageSigningInput messagePayload. */
                messagePayload?: ("message"|"structuredMessage");

                /**
                 * Encodes the specified MessageSigningInput message. Does not implicitly {@link TW.Solana.Proto.MessageSigningInput.verify|verify} messages.
                 * @param message MessageSigningInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.MessageSigningInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageSigningInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.MessageSigningInput & TW.Solana.Proto.MessageSigningInput.$Shape} MessageSigningInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.MessageSigningInput & TW.Solana.Proto.MessageSigningInput.$Shape;

                /**
                 * Gets the type url for MessageSigningInput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace MessageSigningInput {

                /** Properties of a MessageSigningInput. */
                interface $Properties {

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
                    structuredMessage?: (TW.Solana.Proto.StructuredMessage.$Properties|null);

                    /** MessageSigningInput messagePayload */
                    messagePayload?: ("message"|"structuredMessage");

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Narrowed shape of a MessageSigningInput. */
                type $Shape = {
                  privateKey?: Uint8Array|null;
                  publicKey?: Uint8Array|null;
                  messageType?: TW.Solana.Proto.MessageType|null;
                  applicationDomain?: Uint8Array|null;
                  messageFormat?: TW.Solana.Proto.MessageFormat|null;
                  message?: string|null;
                  structuredMessage?: TW.Solana.Proto.StructuredMessage.$Shape|null;
                  $unknowns?: Uint8Array[];
                } & (
                  ({ messagePayload?: undefined; message?: null; structuredMessage?: null }|{ messagePayload?: "message"; message: string; structuredMessage?: null }|{ messagePayload?: "structuredMessage"; message?: null; structuredMessage: TW.Solana.Proto.StructuredMessage.$Shape })
                );
            }

            /**
             * Properties of a MessageSigningOutput.
             * @deprecated Use TW.Solana.Proto.MessageSigningOutput.$Properties instead.
             */
            interface IMessageSigningOutput extends TW.Solana.Proto.MessageSigningOutput.$Properties {
            }

            /** Represents a MessageSigningOutput. */
            class MessageSigningOutput {

                /**
                 * Constructs a new MessageSigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.MessageSigningOutput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** MessageSigningOutput signature. */
                signature: string;

                /** MessageSigningOutput error. */
                error: TW.Common.Proto.SigningError;

                /** MessageSigningOutput errorMessage. */
                errorMessage: string;

                /**
                 * Encodes the specified MessageSigningOutput message. Does not implicitly {@link TW.Solana.Proto.MessageSigningOutput.verify|verify} messages.
                 * @param message MessageSigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.MessageSigningOutput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageSigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.MessageSigningOutput & TW.Solana.Proto.MessageSigningOutput.$Shape} MessageSigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.MessageSigningOutput & TW.Solana.Proto.MessageSigningOutput.$Shape;

                /**
                 * Gets the type url for MessageSigningOutput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace MessageSigningOutput {

                /** Properties of a MessageSigningOutput. */
                interface $Properties {

                    /** MessageSigningOutput signature */
                    signature?: (string|null);

                    /** MessageSigningOutput error */
                    error?: (TW.Common.Proto.SigningError|null);

                    /** MessageSigningOutput errorMessage */
                    errorMessage?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a MessageSigningOutput. */
                type $Shape = TW.Solana.Proto.MessageSigningOutput.$Properties;
            }

            /**
             * Properties of a MessageVerifyingInput.
             * @deprecated Use TW.Solana.Proto.MessageVerifyingInput.$Properties instead.
             */
            interface IMessageVerifyingInput extends TW.Solana.Proto.MessageVerifyingInput.$Properties {
            }

            /** Represents a MessageVerifyingInput. */
            class MessageVerifyingInput {

                /**
                 * Constructs a new MessageVerifyingInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Solana.Proto.MessageVerifyingInput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** MessageVerifyingInput publicKey. */
                publicKey: Uint8Array;

                /** MessageVerifyingInput signature. */
                signature: string;

                /** MessageVerifyingInput messageType. */
                messageType: TW.Solana.Proto.MessageType;

                /** MessageVerifyingInput applicationDomain. */
                applicationDomain: Uint8Array;

                /** MessageVerifyingInput messageFormat. */
                messageFormat: TW.Solana.Proto.MessageFormat;

                /** MessageVerifyingInput message. */
                message?: (string|null);

                /** MessageVerifyingInput structuredMessage. */
                structuredMessage?: (TW.Solana.Proto.StructuredMessage.$Properties|null);

                /** MessageVerifyingInput messagePayload. */
                messagePayload?: ("message"|"structuredMessage");

                /**
                 * Encodes the specified MessageVerifyingInput message. Does not implicitly {@link TW.Solana.Proto.MessageVerifyingInput.verify|verify} messages.
                 * @param message MessageVerifyingInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Solana.Proto.MessageVerifyingInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageVerifyingInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Solana.Proto.MessageVerifyingInput & TW.Solana.Proto.MessageVerifyingInput.$Shape} MessageVerifyingInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Solana.Proto.MessageVerifyingInput & TW.Solana.Proto.MessageVerifyingInput.$Shape;

                /**
                 * Gets the type url for MessageVerifyingInput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace MessageVerifyingInput {

                /** Properties of a MessageVerifyingInput. */
                interface $Properties {

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
                    structuredMessage?: (TW.Solana.Proto.StructuredMessage.$Properties|null);

                    /** MessageVerifyingInput messagePayload */
                    messagePayload?: ("message"|"structuredMessage");

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Narrowed shape of a MessageVerifyingInput. */
                type $Shape = {
                  publicKey?: Uint8Array|null;
                  signature?: string|null;
                  messageType?: TW.Solana.Proto.MessageType|null;
                  applicationDomain?: Uint8Array|null;
                  messageFormat?: TW.Solana.Proto.MessageFormat|null;
                  message?: string|null;
                  structuredMessage?: TW.Solana.Proto.StructuredMessage.$Shape|null;
                  $unknowns?: Uint8Array[];
                } & (
                  ({ messagePayload?: undefined; message?: null; structuredMessage?: null }|{ messagePayload?: "message"; message: string; structuredMessage?: null }|{ messagePayload?: "structuredMessage"; message?: null; structuredMessage: TW.Solana.Proto.StructuredMessage.$Shape })
                );
            }
        }
    }

    /** Namespace TxCompiler. */
    namespace TxCompiler {

        /** Namespace Proto. */
        namespace Proto {

            /**
             * Properties of a PreSigningOutput.
             * @deprecated Use TW.TxCompiler.Proto.PreSigningOutput.$Properties instead.
             */
            interface IPreSigningOutput extends TW.TxCompiler.Proto.PreSigningOutput.$Properties {
            }

            /** Transaction pre-signing output */
            class PreSigningOutput {

                /**
                 * Constructs a new PreSigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.TxCompiler.Proto.PreSigningOutput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Pre-image data hash that will be used for signing */
                dataHash: Uint8Array;

                /** Pre-image data */
                data: Uint8Array;

                /** error code, 0 is ok, other codes will be treated as errors */
                error: TW.Common.Proto.SigningError;

                /** error code description */
                errorMessage: string;

                /**
                 * Encodes the specified PreSigningOutput message. Does not implicitly {@link TW.TxCompiler.Proto.PreSigningOutput.verify|verify} messages.
                 * @param message PreSigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.TxCompiler.Proto.PreSigningOutput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PreSigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.TxCompiler.Proto.PreSigningOutput & TW.TxCompiler.Proto.PreSigningOutput.$Shape} PreSigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.TxCompiler.Proto.PreSigningOutput & TW.TxCompiler.Proto.PreSigningOutput.$Shape;

                /**
                 * Gets the type url for PreSigningOutput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace PreSigningOutput {

                /** Properties of a PreSigningOutput. */
                interface $Properties {

                    /** Pre-image data hash that will be used for signing */
                    dataHash?: (Uint8Array|null);

                    /** Pre-image data */
                    data?: (Uint8Array|null);

                    /** error code, 0 is ok, other codes will be treated as errors */
                    error?: (TW.Common.Proto.SigningError|null);

                    /** error code description */
                    errorMessage?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a PreSigningOutput. */
                type $Shape = TW.TxCompiler.Proto.PreSigningOutput.$Properties;
            }
        }
    }

    /** Namespace Tron. */
    namespace Tron {

        /** Namespace Proto. */
        namespace Proto {

            /**
             * Properties of a TransferContract.
             * @deprecated Use TW.Tron.Proto.TransferContract.$Properties instead.
             */
            interface ITransferContract extends TW.Tron.Proto.TransferContract.$Properties {
            }

            /** Represents a TransferContract. */
            class TransferContract {

                /**
                 * Constructs a new TransferContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.TransferContract.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** TransferContract ownerAddress. */
                ownerAddress: string;

                /** TransferContract toAddress. */
                toAddress: string;

                /** TransferContract amount. */
                amount: number;

                /**
                 * Encodes the specified TransferContract message. Does not implicitly {@link TW.Tron.Proto.TransferContract.verify|verify} messages.
                 * @param message TransferContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Tron.Proto.TransferContract.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransferContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Tron.Proto.TransferContract & TW.Tron.Proto.TransferContract.$Shape} TransferContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.TransferContract & TW.Tron.Proto.TransferContract.$Shape;

                /**
                 * Gets the type url for TransferContract
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace TransferContract {

                /** Properties of a TransferContract. */
                interface $Properties {

                    /** TransferContract ownerAddress */
                    ownerAddress?: (string|null);

                    /** TransferContract toAddress */
                    toAddress?: (string|null);

                    /** TransferContract amount */
                    amount?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a TransferContract. */
                type $Shape = TW.Tron.Proto.TransferContract.$Properties;
            }

            /**
             * Properties of a TransferAssetContract.
             * @deprecated Use TW.Tron.Proto.TransferAssetContract.$Properties instead.
             */
            interface ITransferAssetContract extends TW.Tron.Proto.TransferAssetContract.$Properties {
            }

            /** Represents a TransferAssetContract. */
            class TransferAssetContract {

                /**
                 * Constructs a new TransferAssetContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.TransferAssetContract.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** TransferAssetContract assetName. */
                assetName: string;

                /** TransferAssetContract ownerAddress. */
                ownerAddress: string;

                /** TransferAssetContract toAddress. */
                toAddress: string;

                /** TransferAssetContract amount. */
                amount: number;

                /**
                 * Encodes the specified TransferAssetContract message. Does not implicitly {@link TW.Tron.Proto.TransferAssetContract.verify|verify} messages.
                 * @param message TransferAssetContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Tron.Proto.TransferAssetContract.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransferAssetContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Tron.Proto.TransferAssetContract & TW.Tron.Proto.TransferAssetContract.$Shape} TransferAssetContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.TransferAssetContract & TW.Tron.Proto.TransferAssetContract.$Shape;

                /**
                 * Gets the type url for TransferAssetContract
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace TransferAssetContract {

                /** Properties of a TransferAssetContract. */
                interface $Properties {

                    /** TransferAssetContract assetName */
                    assetName?: (string|null);

                    /** TransferAssetContract ownerAddress */
                    ownerAddress?: (string|null);

                    /** TransferAssetContract toAddress */
                    toAddress?: (string|null);

                    /** TransferAssetContract amount */
                    amount?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a TransferAssetContract. */
                type $Shape = TW.Tron.Proto.TransferAssetContract.$Properties;
            }

            /**
             * Properties of a TransferTRC20Contract.
             * @deprecated Use TW.Tron.Proto.TransferTRC20Contract.$Properties instead.
             */
            interface ITransferTRC20Contract extends TW.Tron.Proto.TransferTRC20Contract.$Properties {
            }

            /** Represents a TransferTRC20Contract. */
            class TransferTRC20Contract {

                /**
                 * Constructs a new TransferTRC20Contract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.TransferTRC20Contract.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** TransferTRC20Contract contractAddress. */
                contractAddress: string;

                /** TransferTRC20Contract ownerAddress. */
                ownerAddress: string;

                /** TransferTRC20Contract toAddress. */
                toAddress: string;

                /** TransferTRC20Contract amount. */
                amount: Uint8Array;

                /**
                 * Encodes the specified TransferTRC20Contract message. Does not implicitly {@link TW.Tron.Proto.TransferTRC20Contract.verify|verify} messages.
                 * @param message TransferTRC20Contract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Tron.Proto.TransferTRC20Contract.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransferTRC20Contract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Tron.Proto.TransferTRC20Contract & TW.Tron.Proto.TransferTRC20Contract.$Shape} TransferTRC20Contract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.TransferTRC20Contract & TW.Tron.Proto.TransferTRC20Contract.$Shape;

                /**
                 * Gets the type url for TransferTRC20Contract
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace TransferTRC20Contract {

                /** Properties of a TransferTRC20Contract. */
                interface $Properties {

                    /** TransferTRC20Contract contractAddress */
                    contractAddress?: (string|null);

                    /** TransferTRC20Contract ownerAddress */
                    ownerAddress?: (string|null);

                    /** TransferTRC20Contract toAddress */
                    toAddress?: (string|null);

                    /** TransferTRC20Contract amount */
                    amount?: (Uint8Array|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a TransferTRC20Contract. */
                type $Shape = TW.Tron.Proto.TransferTRC20Contract.$Properties;
            }

            /**
             * Properties of a FreezeBalanceContract.
             * @deprecated Use TW.Tron.Proto.FreezeBalanceContract.$Properties instead.
             */
            interface IFreezeBalanceContract extends TW.Tron.Proto.FreezeBalanceContract.$Properties {
            }

            /** Represents a FreezeBalanceContract. */
            class FreezeBalanceContract {

                /**
                 * Constructs a new FreezeBalanceContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.FreezeBalanceContract.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** FreezeBalanceContract ownerAddress. */
                ownerAddress: string;

                /** FreezeBalanceContract frozenBalance. */
                frozenBalance: number;

                /** FreezeBalanceContract frozenDuration. */
                frozenDuration: number;

                /** FreezeBalanceContract resource. */
                resource: string;

                /** FreezeBalanceContract receiverAddress. */
                receiverAddress: string;

                /**
                 * Encodes the specified FreezeBalanceContract message. Does not implicitly {@link TW.Tron.Proto.FreezeBalanceContract.verify|verify} messages.
                 * @param message FreezeBalanceContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Tron.Proto.FreezeBalanceContract.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FreezeBalanceContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Tron.Proto.FreezeBalanceContract & TW.Tron.Proto.FreezeBalanceContract.$Shape} FreezeBalanceContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.FreezeBalanceContract & TW.Tron.Proto.FreezeBalanceContract.$Shape;

                /**
                 * Gets the type url for FreezeBalanceContract
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace FreezeBalanceContract {

                /** Properties of a FreezeBalanceContract. */
                interface $Properties {

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

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a FreezeBalanceContract. */
                type $Shape = TW.Tron.Proto.FreezeBalanceContract.$Properties;
            }

            /**
             * Properties of a FreezeBalanceV2Contract.
             * @deprecated Use TW.Tron.Proto.FreezeBalanceV2Contract.$Properties instead.
             */
            interface IFreezeBalanceV2Contract extends TW.Tron.Proto.FreezeBalanceV2Contract.$Properties {
            }

            /** Represents a FreezeBalanceV2Contract. */
            class FreezeBalanceV2Contract {

                /**
                 * Constructs a new FreezeBalanceV2Contract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.FreezeBalanceV2Contract.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** FreezeBalanceV2Contract ownerAddress. */
                ownerAddress: string;

                /** FreezeBalanceV2Contract frozenBalance. */
                frozenBalance: number;

                /** FreezeBalanceV2Contract resource. */
                resource: string;

                /**
                 * Encodes the specified FreezeBalanceV2Contract message. Does not implicitly {@link TW.Tron.Proto.FreezeBalanceV2Contract.verify|verify} messages.
                 * @param message FreezeBalanceV2Contract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Tron.Proto.FreezeBalanceV2Contract.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FreezeBalanceV2Contract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Tron.Proto.FreezeBalanceV2Contract & TW.Tron.Proto.FreezeBalanceV2Contract.$Shape} FreezeBalanceV2Contract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.FreezeBalanceV2Contract & TW.Tron.Proto.FreezeBalanceV2Contract.$Shape;

                /**
                 * Gets the type url for FreezeBalanceV2Contract
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace FreezeBalanceV2Contract {

                /** Properties of a FreezeBalanceV2Contract. */
                interface $Properties {

                    /** FreezeBalanceV2Contract ownerAddress */
                    ownerAddress?: (string|null);

                    /** FreezeBalanceV2Contract frozenBalance */
                    frozenBalance?: (number|null);

                    /** FreezeBalanceV2Contract resource */
                    resource?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a FreezeBalanceV2Contract. */
                type $Shape = TW.Tron.Proto.FreezeBalanceV2Contract.$Properties;
            }

            /**
             * Properties of an UnfreezeBalanceV2Contract.
             * @deprecated Use TW.Tron.Proto.UnfreezeBalanceV2Contract.$Properties instead.
             */
            interface IUnfreezeBalanceV2Contract extends TW.Tron.Proto.UnfreezeBalanceV2Contract.$Properties {
            }

            /** Represents an UnfreezeBalanceV2Contract. */
            class UnfreezeBalanceV2Contract {

                /**
                 * Constructs a new UnfreezeBalanceV2Contract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.UnfreezeBalanceV2Contract.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** UnfreezeBalanceV2Contract ownerAddress. */
                ownerAddress: string;

                /** UnfreezeBalanceV2Contract unfreezeBalance. */
                unfreezeBalance: number;

                /** UnfreezeBalanceV2Contract resource. */
                resource: string;

                /**
                 * Encodes the specified UnfreezeBalanceV2Contract message. Does not implicitly {@link TW.Tron.Proto.UnfreezeBalanceV2Contract.verify|verify} messages.
                 * @param message UnfreezeBalanceV2Contract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Tron.Proto.UnfreezeBalanceV2Contract.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UnfreezeBalanceV2Contract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Tron.Proto.UnfreezeBalanceV2Contract & TW.Tron.Proto.UnfreezeBalanceV2Contract.$Shape} UnfreezeBalanceV2Contract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.UnfreezeBalanceV2Contract & TW.Tron.Proto.UnfreezeBalanceV2Contract.$Shape;

                /**
                 * Gets the type url for UnfreezeBalanceV2Contract
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace UnfreezeBalanceV2Contract {

                /** Properties of an UnfreezeBalanceV2Contract. */
                interface $Properties {

                    /** UnfreezeBalanceV2Contract ownerAddress */
                    ownerAddress?: (string|null);

                    /** UnfreezeBalanceV2Contract unfreezeBalance */
                    unfreezeBalance?: (number|null);

                    /** UnfreezeBalanceV2Contract resource */
                    resource?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an UnfreezeBalanceV2Contract. */
                type $Shape = TW.Tron.Proto.UnfreezeBalanceV2Contract.$Properties;
            }

            /**
             * Properties of a WithdrawExpireUnfreezeContract.
             * @deprecated Use TW.Tron.Proto.WithdrawExpireUnfreezeContract.$Properties instead.
             */
            interface IWithdrawExpireUnfreezeContract extends TW.Tron.Proto.WithdrawExpireUnfreezeContract.$Properties {
            }

            /** Represents a WithdrawExpireUnfreezeContract. */
            class WithdrawExpireUnfreezeContract {

                /**
                 * Constructs a new WithdrawExpireUnfreezeContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.WithdrawExpireUnfreezeContract.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** WithdrawExpireUnfreezeContract ownerAddress. */
                ownerAddress: string;

                /**
                 * Encodes the specified WithdrawExpireUnfreezeContract message. Does not implicitly {@link TW.Tron.Proto.WithdrawExpireUnfreezeContract.verify|verify} messages.
                 * @param message WithdrawExpireUnfreezeContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Tron.Proto.WithdrawExpireUnfreezeContract.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WithdrawExpireUnfreezeContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Tron.Proto.WithdrawExpireUnfreezeContract & TW.Tron.Proto.WithdrawExpireUnfreezeContract.$Shape} WithdrawExpireUnfreezeContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.WithdrawExpireUnfreezeContract & TW.Tron.Proto.WithdrawExpireUnfreezeContract.$Shape;

                /**
                 * Gets the type url for WithdrawExpireUnfreezeContract
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace WithdrawExpireUnfreezeContract {

                /** Properties of a WithdrawExpireUnfreezeContract. */
                interface $Properties {

                    /** WithdrawExpireUnfreezeContract ownerAddress */
                    ownerAddress?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a WithdrawExpireUnfreezeContract. */
                type $Shape = TW.Tron.Proto.WithdrawExpireUnfreezeContract.$Properties;
            }

            /**
             * Properties of a DelegateResourceContract.
             * @deprecated Use TW.Tron.Proto.DelegateResourceContract.$Properties instead.
             */
            interface IDelegateResourceContract extends TW.Tron.Proto.DelegateResourceContract.$Properties {
            }

            /** Represents a DelegateResourceContract. */
            class DelegateResourceContract {

                /**
                 * Constructs a new DelegateResourceContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.DelegateResourceContract.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** DelegateResourceContract ownerAddress. */
                ownerAddress: string;

                /** DelegateResourceContract resource. */
                resource: string;

                /** DelegateResourceContract balance. */
                balance: number;

                /** DelegateResourceContract receiverAddress. */
                receiverAddress: string;

                /** DelegateResourceContract lock. */
                lock: boolean;

                /**
                 * Encodes the specified DelegateResourceContract message. Does not implicitly {@link TW.Tron.Proto.DelegateResourceContract.verify|verify} messages.
                 * @param message DelegateResourceContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Tron.Proto.DelegateResourceContract.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DelegateResourceContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Tron.Proto.DelegateResourceContract & TW.Tron.Proto.DelegateResourceContract.$Shape} DelegateResourceContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.DelegateResourceContract & TW.Tron.Proto.DelegateResourceContract.$Shape;

                /**
                 * Gets the type url for DelegateResourceContract
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace DelegateResourceContract {

                /** Properties of a DelegateResourceContract. */
                interface $Properties {

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

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a DelegateResourceContract. */
                type $Shape = TW.Tron.Proto.DelegateResourceContract.$Properties;
            }

            /**
             * Properties of an UnDelegateResourceContract.
             * @deprecated Use TW.Tron.Proto.UnDelegateResourceContract.$Properties instead.
             */
            interface IUnDelegateResourceContract extends TW.Tron.Proto.UnDelegateResourceContract.$Properties {
            }

            /** Represents an UnDelegateResourceContract. */
            class UnDelegateResourceContract {

                /**
                 * Constructs a new UnDelegateResourceContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.UnDelegateResourceContract.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** UnDelegateResourceContract ownerAddress. */
                ownerAddress: string;

                /** UnDelegateResourceContract resource. */
                resource: string;

                /** UnDelegateResourceContract balance. */
                balance: number;

                /** UnDelegateResourceContract receiverAddress. */
                receiverAddress: string;

                /**
                 * Encodes the specified UnDelegateResourceContract message. Does not implicitly {@link TW.Tron.Proto.UnDelegateResourceContract.verify|verify} messages.
                 * @param message UnDelegateResourceContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Tron.Proto.UnDelegateResourceContract.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UnDelegateResourceContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Tron.Proto.UnDelegateResourceContract & TW.Tron.Proto.UnDelegateResourceContract.$Shape} UnDelegateResourceContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.UnDelegateResourceContract & TW.Tron.Proto.UnDelegateResourceContract.$Shape;

                /**
                 * Gets the type url for UnDelegateResourceContract
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace UnDelegateResourceContract {

                /** Properties of an UnDelegateResourceContract. */
                interface $Properties {

                    /** UnDelegateResourceContract ownerAddress */
                    ownerAddress?: (string|null);

                    /** UnDelegateResourceContract resource */
                    resource?: (string|null);

                    /** UnDelegateResourceContract balance */
                    balance?: (number|null);

                    /** UnDelegateResourceContract receiverAddress */
                    receiverAddress?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an UnDelegateResourceContract. */
                type $Shape = TW.Tron.Proto.UnDelegateResourceContract.$Properties;
            }

            /**
             * Properties of an UnfreezeBalanceContract.
             * @deprecated Use TW.Tron.Proto.UnfreezeBalanceContract.$Properties instead.
             */
            interface IUnfreezeBalanceContract extends TW.Tron.Proto.UnfreezeBalanceContract.$Properties {
            }

            /** Represents an UnfreezeBalanceContract. */
            class UnfreezeBalanceContract {

                /**
                 * Constructs a new UnfreezeBalanceContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.UnfreezeBalanceContract.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** UnfreezeBalanceContract ownerAddress. */
                ownerAddress: string;

                /** UnfreezeBalanceContract resource. */
                resource: string;

                /** UnfreezeBalanceContract receiverAddress. */
                receiverAddress: string;

                /**
                 * Encodes the specified UnfreezeBalanceContract message. Does not implicitly {@link TW.Tron.Proto.UnfreezeBalanceContract.verify|verify} messages.
                 * @param message UnfreezeBalanceContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Tron.Proto.UnfreezeBalanceContract.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UnfreezeBalanceContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Tron.Proto.UnfreezeBalanceContract & TW.Tron.Proto.UnfreezeBalanceContract.$Shape} UnfreezeBalanceContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.UnfreezeBalanceContract & TW.Tron.Proto.UnfreezeBalanceContract.$Shape;

                /**
                 * Gets the type url for UnfreezeBalanceContract
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace UnfreezeBalanceContract {

                /** Properties of an UnfreezeBalanceContract. */
                interface $Properties {

                    /** UnfreezeBalanceContract ownerAddress */
                    ownerAddress?: (string|null);

                    /** UnfreezeBalanceContract resource */
                    resource?: (string|null);

                    /** UnfreezeBalanceContract receiverAddress */
                    receiverAddress?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an UnfreezeBalanceContract. */
                type $Shape = TW.Tron.Proto.UnfreezeBalanceContract.$Properties;
            }

            /**
             * Properties of an UnfreezeAssetContract.
             * @deprecated Use TW.Tron.Proto.UnfreezeAssetContract.$Properties instead.
             */
            interface IUnfreezeAssetContract extends TW.Tron.Proto.UnfreezeAssetContract.$Properties {
            }

            /** Represents an UnfreezeAssetContract. */
            class UnfreezeAssetContract {

                /**
                 * Constructs a new UnfreezeAssetContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.UnfreezeAssetContract.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** UnfreezeAssetContract ownerAddress. */
                ownerAddress: string;

                /**
                 * Encodes the specified UnfreezeAssetContract message. Does not implicitly {@link TW.Tron.Proto.UnfreezeAssetContract.verify|verify} messages.
                 * @param message UnfreezeAssetContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Tron.Proto.UnfreezeAssetContract.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UnfreezeAssetContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Tron.Proto.UnfreezeAssetContract & TW.Tron.Proto.UnfreezeAssetContract.$Shape} UnfreezeAssetContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.UnfreezeAssetContract & TW.Tron.Proto.UnfreezeAssetContract.$Shape;

                /**
                 * Gets the type url for UnfreezeAssetContract
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace UnfreezeAssetContract {

                /** Properties of an UnfreezeAssetContract. */
                interface $Properties {

                    /** UnfreezeAssetContract ownerAddress */
                    ownerAddress?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an UnfreezeAssetContract. */
                type $Shape = TW.Tron.Proto.UnfreezeAssetContract.$Properties;
            }

            /**
             * Properties of a VoteAssetContract.
             * @deprecated Use TW.Tron.Proto.VoteAssetContract.$Properties instead.
             */
            interface IVoteAssetContract extends TW.Tron.Proto.VoteAssetContract.$Properties {
            }

            /** Represents a VoteAssetContract. */
            class VoteAssetContract {

                /**
                 * Constructs a new VoteAssetContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.VoteAssetContract.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** VoteAssetContract ownerAddress. */
                ownerAddress: string;

                /** VoteAssetContract voteAddress. */
                voteAddress: string[];

                /** VoteAssetContract support. */
                support: boolean;

                /** VoteAssetContract count. */
                count: number;

                /**
                 * Encodes the specified VoteAssetContract message. Does not implicitly {@link TW.Tron.Proto.VoteAssetContract.verify|verify} messages.
                 * @param message VoteAssetContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Tron.Proto.VoteAssetContract.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VoteAssetContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Tron.Proto.VoteAssetContract & TW.Tron.Proto.VoteAssetContract.$Shape} VoteAssetContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.VoteAssetContract & TW.Tron.Proto.VoteAssetContract.$Shape;

                /**
                 * Gets the type url for VoteAssetContract
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace VoteAssetContract {

                /** Properties of a VoteAssetContract. */
                interface $Properties {

                    /** VoteAssetContract ownerAddress */
                    ownerAddress?: (string|null);

                    /** VoteAssetContract voteAddress */
                    voteAddress?: (string[]|null);

                    /** VoteAssetContract support */
                    support?: (boolean|null);

                    /** VoteAssetContract count */
                    count?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a VoteAssetContract. */
                type $Shape = TW.Tron.Proto.VoteAssetContract.$Properties;
            }

            /**
             * Properties of a VoteWitnessContract.
             * @deprecated Use TW.Tron.Proto.VoteWitnessContract.$Properties instead.
             */
            interface IVoteWitnessContract extends TW.Tron.Proto.VoteWitnessContract.$Properties {
            }

            /** Represents a VoteWitnessContract. */
            class VoteWitnessContract {

                /**
                 * Constructs a new VoteWitnessContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.VoteWitnessContract.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** VoteWitnessContract ownerAddress. */
                ownerAddress: string;

                /** VoteWitnessContract votes. */
                votes: TW.Tron.Proto.VoteWitnessContract.Vote.$Properties[];

                /** VoteWitnessContract support. */
                support: boolean;

                /**
                 * Encodes the specified VoteWitnessContract message. Does not implicitly {@link TW.Tron.Proto.VoteWitnessContract.verify|verify} messages.
                 * @param message VoteWitnessContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Tron.Proto.VoteWitnessContract.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VoteWitnessContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Tron.Proto.VoteWitnessContract & TW.Tron.Proto.VoteWitnessContract.$Shape} VoteWitnessContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.VoteWitnessContract & TW.Tron.Proto.VoteWitnessContract.$Shape;

                /**
                 * Gets the type url for VoteWitnessContract
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace VoteWitnessContract {

                /** Properties of a VoteWitnessContract. */
                interface $Properties {

                    /** VoteWitnessContract ownerAddress */
                    ownerAddress?: (string|null);

                    /** VoteWitnessContract votes */
                    votes?: (TW.Tron.Proto.VoteWitnessContract.Vote.$Properties[]|null);

                    /** VoteWitnessContract support */
                    support?: (boolean|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a VoteWitnessContract. */
                type $Shape = TW.Tron.Proto.VoteWitnessContract.$Properties;

                /**
                 * Properties of a Vote.
                 * @deprecated Use TW.Tron.Proto.VoteWitnessContract.Vote.$Properties instead.
                 */
                interface IVote extends TW.Tron.Proto.VoteWitnessContract.Vote.$Properties {
                }

                /** Represents a Vote. */
                class Vote {

                    /**
                     * Constructs a new Vote.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: TW.Tron.Proto.VoteWitnessContract.Vote.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** Vote voteAddress. */
                    voteAddress: string;

                    /** Vote voteCount. */
                    voteCount: number;

                    /**
                     * Encodes the specified Vote message. Does not implicitly {@link TW.Tron.Proto.VoteWitnessContract.Vote.verify|verify} messages.
                     * @param message Vote message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: TW.Tron.Proto.VoteWitnessContract.Vote.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Vote message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {TW.Tron.Proto.VoteWitnessContract.Vote & TW.Tron.Proto.VoteWitnessContract.Vote.$Shape} Vote
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.VoteWitnessContract.Vote & TW.Tron.Proto.VoteWitnessContract.Vote.$Shape;

                    /**
                     * Gets the type url for Vote
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace Vote {

                    /** Properties of a Vote. */
                    interface $Properties {

                        /** Vote voteAddress */
                        voteAddress?: (string|null);

                        /** Vote voteCount */
                        voteCount?: (number|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a Vote. */
                    type $Shape = TW.Tron.Proto.VoteWitnessContract.Vote.$Properties;
                }
            }

            /**
             * Properties of a WithdrawBalanceContract.
             * @deprecated Use TW.Tron.Proto.WithdrawBalanceContract.$Properties instead.
             */
            interface IWithdrawBalanceContract extends TW.Tron.Proto.WithdrawBalanceContract.$Properties {
            }

            /** Represents a WithdrawBalanceContract. */
            class WithdrawBalanceContract {

                /**
                 * Constructs a new WithdrawBalanceContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.WithdrawBalanceContract.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** WithdrawBalanceContract ownerAddress. */
                ownerAddress: string;

                /**
                 * Encodes the specified WithdrawBalanceContract message. Does not implicitly {@link TW.Tron.Proto.WithdrawBalanceContract.verify|verify} messages.
                 * @param message WithdrawBalanceContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Tron.Proto.WithdrawBalanceContract.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WithdrawBalanceContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Tron.Proto.WithdrawBalanceContract & TW.Tron.Proto.WithdrawBalanceContract.$Shape} WithdrawBalanceContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.WithdrawBalanceContract & TW.Tron.Proto.WithdrawBalanceContract.$Shape;

                /**
                 * Gets the type url for WithdrawBalanceContract
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace WithdrawBalanceContract {

                /** Properties of a WithdrawBalanceContract. */
                interface $Properties {

                    /** WithdrawBalanceContract ownerAddress */
                    ownerAddress?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a WithdrawBalanceContract. */
                type $Shape = TW.Tron.Proto.WithdrawBalanceContract.$Properties;
            }

            /**
             * Properties of a TriggerSmartContract.
             * @deprecated Use TW.Tron.Proto.TriggerSmartContract.$Properties instead.
             */
            interface ITriggerSmartContract extends TW.Tron.Proto.TriggerSmartContract.$Properties {
            }

            /** Represents a TriggerSmartContract. */
            class TriggerSmartContract {

                /**
                 * Constructs a new TriggerSmartContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.TriggerSmartContract.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** TriggerSmartContract ownerAddress. */
                ownerAddress: string;

                /** TriggerSmartContract contractAddress. */
                contractAddress: string;

                /** TriggerSmartContract callValue. */
                callValue: number;

                /** TriggerSmartContract data. */
                data: Uint8Array;

                /** TriggerSmartContract callTokenValue. */
                callTokenValue: number;

                /** TriggerSmartContract tokenId. */
                tokenId: number;

                /**
                 * Encodes the specified TriggerSmartContract message. Does not implicitly {@link TW.Tron.Proto.TriggerSmartContract.verify|verify} messages.
                 * @param message TriggerSmartContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Tron.Proto.TriggerSmartContract.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TriggerSmartContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Tron.Proto.TriggerSmartContract & TW.Tron.Proto.TriggerSmartContract.$Shape} TriggerSmartContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.TriggerSmartContract & TW.Tron.Proto.TriggerSmartContract.$Shape;

                /**
                 * Gets the type url for TriggerSmartContract
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace TriggerSmartContract {

                /** Properties of a TriggerSmartContract. */
                interface $Properties {

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

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a TriggerSmartContract. */
                type $Shape = TW.Tron.Proto.TriggerSmartContract.$Properties;
            }

            /**
             * Properties of a BlockHeader.
             * @deprecated Use TW.Tron.Proto.BlockHeader.$Properties instead.
             */
            interface IBlockHeader extends TW.Tron.Proto.BlockHeader.$Properties {
            }

            /** Represents a BlockHeader. */
            class BlockHeader {

                /**
                 * Constructs a new BlockHeader.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.BlockHeader.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** BlockHeader timestamp. */
                timestamp: number;

                /** BlockHeader txTrieRoot. */
                txTrieRoot: Uint8Array;

                /** BlockHeader parentHash. */
                parentHash: Uint8Array;

                /** BlockHeader number. */
                number: number;

                /** BlockHeader witnessAddress. */
                witnessAddress: Uint8Array;

                /** BlockHeader version. */
                version: number;

                /**
                 * Encodes the specified BlockHeader message. Does not implicitly {@link TW.Tron.Proto.BlockHeader.verify|verify} messages.
                 * @param message BlockHeader message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Tron.Proto.BlockHeader.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BlockHeader message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Tron.Proto.BlockHeader & TW.Tron.Proto.BlockHeader.$Shape} BlockHeader
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.BlockHeader & TW.Tron.Proto.BlockHeader.$Shape;

                /**
                 * Gets the type url for BlockHeader
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace BlockHeader {

                /** Properties of a BlockHeader. */
                interface $Properties {

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

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a BlockHeader. */
                type $Shape = TW.Tron.Proto.BlockHeader.$Properties;
            }

            /**
             * Properties of a Transaction.
             * @deprecated Use TW.Tron.Proto.Transaction.$Properties instead.
             */
            interface ITransaction extends TW.Tron.Proto.Transaction.$Properties {
            }

            /** Represents a Transaction. */
            class Transaction {

                /**
                 * Constructs a new Transaction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.Transaction.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Transaction timestamp. */
                timestamp: number;

                /** Transaction expiration. */
                expiration: number;

                /** Transaction blockHeader. */
                blockHeader?: (TW.Tron.Proto.BlockHeader.$Properties|null);

                /** Transaction feeLimit. */
                feeLimit: number;

                /** Transaction memo. */
                memo: string;

                /** Transaction transfer. */
                transfer?: (TW.Tron.Proto.TransferContract.$Properties|null);

                /** Transaction transferAsset. */
                transferAsset?: (TW.Tron.Proto.TransferAssetContract.$Properties|null);

                /** Transaction freezeBalance. */
                freezeBalance?: (TW.Tron.Proto.FreezeBalanceContract.$Properties|null);

                /** Transaction unfreezeBalance. */
                unfreezeBalance?: (TW.Tron.Proto.UnfreezeBalanceContract.$Properties|null);

                /** Transaction unfreezeAsset. */
                unfreezeAsset?: (TW.Tron.Proto.UnfreezeAssetContract.$Properties|null);

                /** Transaction withdrawBalance. */
                withdrawBalance?: (TW.Tron.Proto.WithdrawBalanceContract.$Properties|null);

                /** Transaction voteAsset. */
                voteAsset?: (TW.Tron.Proto.VoteAssetContract.$Properties|null);

                /** Transaction voteWitness. */
                voteWitness?: (TW.Tron.Proto.VoteWitnessContract.$Properties|null);

                /** Transaction triggerSmartContract. */
                triggerSmartContract?: (TW.Tron.Proto.TriggerSmartContract.$Properties|null);

                /** Transaction transferTrc20Contract. */
                transferTrc20Contract?: (TW.Tron.Proto.TransferTRC20Contract.$Properties|null);

                /** Transaction freezeBalanceV2. */
                freezeBalanceV2?: (TW.Tron.Proto.FreezeBalanceV2Contract.$Properties|null);

                /** Transaction unfreezeBalanceV2. */
                unfreezeBalanceV2?: (TW.Tron.Proto.UnfreezeBalanceV2Contract.$Properties|null);

                /** Transaction withdrawExpireUnfreeze. */
                withdrawExpireUnfreeze?: (TW.Tron.Proto.WithdrawExpireUnfreezeContract.$Properties|null);

                /** Transaction delegateResource. */
                delegateResource?: (TW.Tron.Proto.DelegateResourceContract.$Properties|null);

                /** Transaction undelegateResource. */
                undelegateResource?: (TW.Tron.Proto.UnDelegateResourceContract.$Properties|null);

                /** Transaction contractOneof. */
                contractOneof?: ("transfer"|"transferAsset"|"freezeBalance"|"unfreezeBalance"|"unfreezeAsset"|"withdrawBalance"|"voteAsset"|"voteWitness"|"triggerSmartContract"|"transferTrc20Contract"|"freezeBalanceV2"|"unfreezeBalanceV2"|"withdrawExpireUnfreeze"|"delegateResource"|"undelegateResource");

                /**
                 * Encodes the specified Transaction message. Does not implicitly {@link TW.Tron.Proto.Transaction.verify|verify} messages.
                 * @param message Transaction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Tron.Proto.Transaction.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Transaction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Tron.Proto.Transaction & TW.Tron.Proto.Transaction.$Shape} Transaction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.Transaction & TW.Tron.Proto.Transaction.$Shape;

                /**
                 * Gets the type url for Transaction
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Transaction {

                /** Properties of a Transaction. */
                interface $Properties {

                    /** Transaction timestamp */
                    timestamp?: (number|null);

                    /** Transaction expiration */
                    expiration?: (number|null);

                    /** Transaction blockHeader */
                    blockHeader?: (TW.Tron.Proto.BlockHeader.$Properties|null);

                    /** Transaction feeLimit */
                    feeLimit?: (number|null);

                    /** Transaction memo */
                    memo?: (string|null);

                    /** Transaction transfer */
                    transfer?: (TW.Tron.Proto.TransferContract.$Properties|null);

                    /** Transaction transferAsset */
                    transferAsset?: (TW.Tron.Proto.TransferAssetContract.$Properties|null);

                    /** Transaction freezeBalance */
                    freezeBalance?: (TW.Tron.Proto.FreezeBalanceContract.$Properties|null);

                    /** Transaction unfreezeBalance */
                    unfreezeBalance?: (TW.Tron.Proto.UnfreezeBalanceContract.$Properties|null);

                    /** Transaction unfreezeAsset */
                    unfreezeAsset?: (TW.Tron.Proto.UnfreezeAssetContract.$Properties|null);

                    /** Transaction withdrawBalance */
                    withdrawBalance?: (TW.Tron.Proto.WithdrawBalanceContract.$Properties|null);

                    /** Transaction voteAsset */
                    voteAsset?: (TW.Tron.Proto.VoteAssetContract.$Properties|null);

                    /** Transaction voteWitness */
                    voteWitness?: (TW.Tron.Proto.VoteWitnessContract.$Properties|null);

                    /** Transaction triggerSmartContract */
                    triggerSmartContract?: (TW.Tron.Proto.TriggerSmartContract.$Properties|null);

                    /** Transaction transferTrc20Contract */
                    transferTrc20Contract?: (TW.Tron.Proto.TransferTRC20Contract.$Properties|null);

                    /** Transaction freezeBalanceV2 */
                    freezeBalanceV2?: (TW.Tron.Proto.FreezeBalanceV2Contract.$Properties|null);

                    /** Transaction unfreezeBalanceV2 */
                    unfreezeBalanceV2?: (TW.Tron.Proto.UnfreezeBalanceV2Contract.$Properties|null);

                    /** Transaction withdrawExpireUnfreeze */
                    withdrawExpireUnfreeze?: (TW.Tron.Proto.WithdrawExpireUnfreezeContract.$Properties|null);

                    /** Transaction delegateResource */
                    delegateResource?: (TW.Tron.Proto.DelegateResourceContract.$Properties|null);

                    /** Transaction undelegateResource */
                    undelegateResource?: (TW.Tron.Proto.UnDelegateResourceContract.$Properties|null);

                    /** Transaction contractOneof */
                    contractOneof?: ("transfer"|"transferAsset"|"freezeBalance"|"unfreezeBalance"|"unfreezeAsset"|"withdrawBalance"|"voteAsset"|"voteWitness"|"triggerSmartContract"|"transferTrc20Contract"|"freezeBalanceV2"|"unfreezeBalanceV2"|"withdrawExpireUnfreeze"|"delegateResource"|"undelegateResource");

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Narrowed shape of a Transaction. */
                type $Shape = {
                  timestamp?: number|null;
                  expiration?: number|null;
                  blockHeader?: TW.Tron.Proto.BlockHeader.$Shape|null;
                  feeLimit?: number|null;
                  memo?: string|null;
                  transfer?: TW.Tron.Proto.TransferContract.$Shape|null;
                  transferAsset?: TW.Tron.Proto.TransferAssetContract.$Shape|null;
                  freezeBalance?: TW.Tron.Proto.FreezeBalanceContract.$Shape|null;
                  unfreezeBalance?: TW.Tron.Proto.UnfreezeBalanceContract.$Shape|null;
                  unfreezeAsset?: TW.Tron.Proto.UnfreezeAssetContract.$Shape|null;
                  withdrawBalance?: TW.Tron.Proto.WithdrawBalanceContract.$Shape|null;
                  voteAsset?: TW.Tron.Proto.VoteAssetContract.$Shape|null;
                  voteWitness?: TW.Tron.Proto.VoteWitnessContract.$Shape|null;
                  triggerSmartContract?: TW.Tron.Proto.TriggerSmartContract.$Shape|null;
                  transferTrc20Contract?: TW.Tron.Proto.TransferTRC20Contract.$Shape|null;
                  freezeBalanceV2?: TW.Tron.Proto.FreezeBalanceV2Contract.$Shape|null;
                  unfreezeBalanceV2?: TW.Tron.Proto.UnfreezeBalanceV2Contract.$Shape|null;
                  withdrawExpireUnfreeze?: TW.Tron.Proto.WithdrawExpireUnfreezeContract.$Shape|null;
                  delegateResource?: TW.Tron.Proto.DelegateResourceContract.$Shape|null;
                  undelegateResource?: TW.Tron.Proto.UnDelegateResourceContract.$Shape|null;
                  $unknowns?: Uint8Array[];
                } & (
                  ({ contractOneof?: undefined; transfer?: null; transferAsset?: null; freezeBalance?: null; unfreezeBalance?: null; unfreezeAsset?: null; withdrawBalance?: null; voteAsset?: null; voteWitness?: null; triggerSmartContract?: null; transferTrc20Contract?: null; freezeBalanceV2?: null; unfreezeBalanceV2?: null; withdrawExpireUnfreeze?: null; delegateResource?: null; undelegateResource?: null }|{ contractOneof?: "transfer"; transfer: TW.Tron.Proto.TransferContract.$Shape; transferAsset?: null; freezeBalance?: null; unfreezeBalance?: null; unfreezeAsset?: null; withdrawBalance?: null; voteAsset?: null; voteWitness?: null; triggerSmartContract?: null; transferTrc20Contract?: null; freezeBalanceV2?: null; unfreezeBalanceV2?: null; withdrawExpireUnfreeze?: null; delegateResource?: null; undelegateResource?: null }|{ contractOneof?: "transferAsset"; transfer?: null; transferAsset: TW.Tron.Proto.TransferAssetContract.$Shape; freezeBalance?: null; unfreezeBalance?: null; unfreezeAsset?: null; withdrawBalance?: null; voteAsset?: null; voteWitness?: null; triggerSmartContract?: null; transferTrc20Contract?: null; freezeBalanceV2?: null; unfreezeBalanceV2?: null; withdrawExpireUnfreeze?: null; delegateResource?: null; undelegateResource?: null }|{ contractOneof?: "freezeBalance"; transfer?: null; transferAsset?: null; freezeBalance: TW.Tron.Proto.FreezeBalanceContract.$Shape; unfreezeBalance?: null; unfreezeAsset?: null; withdrawBalance?: null; voteAsset?: null; voteWitness?: null; triggerSmartContract?: null; transferTrc20Contract?: null; freezeBalanceV2?: null; unfreezeBalanceV2?: null; withdrawExpireUnfreeze?: null; delegateResource?: null; undelegateResource?: null }|{ contractOneof?: "unfreezeBalance"; transfer?: null; transferAsset?: null; freezeBalance?: null; unfreezeBalance: TW.Tron.Proto.UnfreezeBalanceContract.$Shape; unfreezeAsset?: null; withdrawBalance?: null; voteAsset?: null; voteWitness?: null; triggerSmartContract?: null; transferTrc20Contract?: null; freezeBalanceV2?: null; unfreezeBalanceV2?: null; withdrawExpireUnfreeze?: null; delegateResource?: null; undelegateResource?: null }|{ contractOneof?: "unfreezeAsset"; transfer?: null; transferAsset?: null; freezeBalance?: null; unfreezeBalance?: null; unfreezeAsset: TW.Tron.Proto.UnfreezeAssetContract.$Shape; withdrawBalance?: null; voteAsset?: null; voteWitness?: null; triggerSmartContract?: null; transferTrc20Contract?: null; freezeBalanceV2?: null; unfreezeBalanceV2?: null; withdrawExpireUnfreeze?: null; delegateResource?: null; undelegateResource?: null }|{ contractOneof?: "withdrawBalance"; transfer?: null; transferAsset?: null; freezeBalance?: null; unfreezeBalance?: null; unfreezeAsset?: null; withdrawBalance: TW.Tron.Proto.WithdrawBalanceContract.$Shape; voteAsset?: null; voteWitness?: null; triggerSmartContract?: null; transferTrc20Contract?: null; freezeBalanceV2?: null; unfreezeBalanceV2?: null; withdrawExpireUnfreeze?: null; delegateResource?: null; undelegateResource?: null }|{ contractOneof?: "voteAsset"; transfer?: null; transferAsset?: null; freezeBalance?: null; unfreezeBalance?: null; unfreezeAsset?: null; withdrawBalance?: null; voteAsset: TW.Tron.Proto.VoteAssetContract.$Shape; voteWitness?: null; triggerSmartContract?: null; transferTrc20Contract?: null; freezeBalanceV2?: null; unfreezeBalanceV2?: null; withdrawExpireUnfreeze?: null; delegateResource?: null; undelegateResource?: null }|{ contractOneof?: "voteWitness"; transfer?: null; transferAsset?: null; freezeBalance?: null; unfreezeBalance?: null; unfreezeAsset?: null; withdrawBalance?: null; voteAsset?: null; voteWitness: TW.Tron.Proto.VoteWitnessContract.$Shape; triggerSmartContract?: null; transferTrc20Contract?: null; freezeBalanceV2?: null; unfreezeBalanceV2?: null; withdrawExpireUnfreeze?: null; delegateResource?: null; undelegateResource?: null }|{ contractOneof?: "triggerSmartContract"; transfer?: null; transferAsset?: null; freezeBalance?: null; unfreezeBalance?: null; unfreezeAsset?: null; withdrawBalance?: null; voteAsset?: null; voteWitness?: null; triggerSmartContract: TW.Tron.Proto.TriggerSmartContract.$Shape; transferTrc20Contract?: null; freezeBalanceV2?: null; unfreezeBalanceV2?: null; withdrawExpireUnfreeze?: null; delegateResource?: null; undelegateResource?: null }|{ contractOneof?: "transferTrc20Contract"; transfer?: null; transferAsset?: null; freezeBalance?: null; unfreezeBalance?: null; unfreezeAsset?: null; withdrawBalance?: null; voteAsset?: null; voteWitness?: null; triggerSmartContract?: null; transferTrc20Contract: TW.Tron.Proto.TransferTRC20Contract.$Shape; freezeBalanceV2?: null; unfreezeBalanceV2?: null; withdrawExpireUnfreeze?: null; delegateResource?: null; undelegateResource?: null }|{ contractOneof?: "freezeBalanceV2"; transfer?: null; transferAsset?: null; freezeBalance?: null; unfreezeBalance?: null; unfreezeAsset?: null; withdrawBalance?: null; voteAsset?: null; voteWitness?: null; triggerSmartContract?: null; transferTrc20Contract?: null; freezeBalanceV2: TW.Tron.Proto.FreezeBalanceV2Contract.$Shape; unfreezeBalanceV2?: null; withdrawExpireUnfreeze?: null; delegateResource?: null; undelegateResource?: null }|{ contractOneof?: "unfreezeBalanceV2"; transfer?: null; transferAsset?: null; freezeBalance?: null; unfreezeBalance?: null; unfreezeAsset?: null; withdrawBalance?: null; voteAsset?: null; voteWitness?: null; triggerSmartContract?: null; transferTrc20Contract?: null; freezeBalanceV2?: null; unfreezeBalanceV2: TW.Tron.Proto.UnfreezeBalanceV2Contract.$Shape; withdrawExpireUnfreeze?: null; delegateResource?: null; undelegateResource?: null }|{ contractOneof?: "withdrawExpireUnfreeze"; transfer?: null; transferAsset?: null; freezeBalance?: null; unfreezeBalance?: null; unfreezeAsset?: null; withdrawBalance?: null; voteAsset?: null; voteWitness?: null; triggerSmartContract?: null; transferTrc20Contract?: null; freezeBalanceV2?: null; unfreezeBalanceV2?: null; withdrawExpireUnfreeze: TW.Tron.Proto.WithdrawExpireUnfreezeContract.$Shape; delegateResource?: null; undelegateResource?: null }|{ contractOneof?: "delegateResource"; transfer?: null; transferAsset?: null; freezeBalance?: null; unfreezeBalance?: null; unfreezeAsset?: null; withdrawBalance?: null; voteAsset?: null; voteWitness?: null; triggerSmartContract?: null; transferTrc20Contract?: null; freezeBalanceV2?: null; unfreezeBalanceV2?: null; withdrawExpireUnfreeze?: null; delegateResource: TW.Tron.Proto.DelegateResourceContract.$Shape; undelegateResource?: null }|{ contractOneof?: "undelegateResource"; transfer?: null; transferAsset?: null; freezeBalance?: null; unfreezeBalance?: null; unfreezeAsset?: null; withdrawBalance?: null; voteAsset?: null; voteWitness?: null; triggerSmartContract?: null; transferTrc20Contract?: null; freezeBalanceV2?: null; unfreezeBalanceV2?: null; withdrawExpireUnfreeze?: null; delegateResource?: null; undelegateResource: TW.Tron.Proto.UnDelegateResourceContract.$Shape })
                );
            }

            /**
             * Properties of a SigningInput.
             * @deprecated Use TW.Tron.Proto.SigningInput.$Properties instead.
             */
            interface ISigningInput extends TW.Tron.Proto.SigningInput.$Properties {
            }

            /** Represents a SigningInput. */
            class SigningInput {

                /**
                 * Constructs a new SigningInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.SigningInput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** SigningInput transaction. */
                transaction?: (TW.Tron.Proto.Transaction.$Properties|null);

                /** SigningInput privateKey. */
                privateKey: Uint8Array;

                /** SigningInput rawJson. */
                rawJson: string;

                /**
                 * Encodes the specified SigningInput message. Does not implicitly {@link TW.Tron.Proto.SigningInput.verify|verify} messages.
                 * @param message SigningInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Tron.Proto.SigningInput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Tron.Proto.SigningInput & TW.Tron.Proto.SigningInput.$Shape} SigningInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.SigningInput & TW.Tron.Proto.SigningInput.$Shape;

                /**
                 * Gets the type url for SigningInput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace SigningInput {

                /** Properties of a SigningInput. */
                interface $Properties {

                    /** SigningInput transaction */
                    transaction?: (TW.Tron.Proto.Transaction.$Properties|null);

                    /** SigningInput privateKey */
                    privateKey?: (Uint8Array|null);

                    /** SigningInput rawJson */
                    rawJson?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a SigningInput. */
                type $Shape = {
                  transaction?: TW.Tron.Proto.Transaction.$Shape|null;
                  privateKey?: Uint8Array|null;
                  rawJson?: string|null;
                  $unknowns?: Uint8Array[];
                };
            }

            /**
             * Properties of a SigningOutput.
             * @deprecated Use TW.Tron.Proto.SigningOutput.$Properties instead.
             */
            interface ISigningOutput extends TW.Tron.Proto.SigningOutput.$Properties {
            }

            /** Represents a SigningOutput. */
            class SigningOutput {

                /**
                 * Constructs a new SigningOutput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: TW.Tron.Proto.SigningOutput.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** SigningOutput id. */
                id: Uint8Array;

                /** SigningOutput signature. */
                signature: Uint8Array;

                /** SigningOutput refBlockBytes. */
                refBlockBytes: Uint8Array;

                /** SigningOutput refBlockHash. */
                refBlockHash: Uint8Array;

                /** SigningOutput json. */
                json: string;

                /** SigningOutput error. */
                error: TW.Common.Proto.SigningError;

                /** SigningOutput errorMessage. */
                errorMessage: string;

                /**
                 * Encodes the specified SigningOutput message. Does not implicitly {@link TW.Tron.Proto.SigningOutput.verify|verify} messages.
                 * @param message SigningOutput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: TW.Tron.Proto.SigningOutput.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SigningOutput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {TW.Tron.Proto.SigningOutput & TW.Tron.Proto.SigningOutput.$Shape} SigningOutput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TW.Tron.Proto.SigningOutput & TW.Tron.Proto.SigningOutput.$Shape;

                /**
                 * Gets the type url for SigningOutput
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace SigningOutput {

                /** Properties of a SigningOutput. */
                interface $Properties {

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

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a SigningOutput. */
                type $Shape = TW.Tron.Proto.SigningOutput.$Properties;
            }
        }
    }
}
