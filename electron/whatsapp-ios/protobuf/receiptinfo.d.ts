import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace receiptinfo. */
export namespace receiptinfo {

    /** Properties of a MessageInfo. */
    interface IMessageInfo {

        /**
         * Legacy format of the receipt info for a single person.
         * Only observed messages containing 1 (legacy) OR 2-6
         */
        singleLegacy?: (receiptinfo.MessageInfo.IReceiptInfoSingleLegacy[]|null);

        /**
         * New format of the receipt info for a single person.
         * Only observed messages containing 1 (legacy) OR 2-6
         */
        single?: (receiptinfo.MessageInfo.IReceiptInfoSingle[]|null);

        /**
         * Timestamp when this message was sent.
         * UNIX epoch in seconds.
         * Assumed to be uint32, as this is easier
         * in JS (avoid type `long`).
         * This should work till around year 2100.
         */
        sentTimestampSeconds?: (number|null);

        /** Unknown. */
        unknown?: (number|null);

        /** Unknown. */
        unknown_2?: (number|null);

        /** Unknown. */
        unknown_3?: (number|null);

        /** Reactions to this message */
        reactions?: (receiptinfo.MessageInfo.IReactions|null);

        /** Poll info for this message */
        pollInfo?: (receiptinfo.MessageInfo.IPoll|null);

        /** Unknown string. Observed as empty */
        unknownString?: (string|null);
    }

    /** Represents a MessageInfo. */
    class MessageInfo implements IMessageInfo {

        /**
         * Constructs a new MessageInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: receiptinfo.IMessageInfo);

        /**
         * Legacy format of the receipt info for a single person.
         * Only observed messages containing 1 (legacy) OR 2-6
         */
        public singleLegacy: receiptinfo.MessageInfo.IReceiptInfoSingleLegacy[];

        /**
         * New format of the receipt info for a single person.
         * Only observed messages containing 1 (legacy) OR 2-6
         */
        public single: receiptinfo.MessageInfo.IReceiptInfoSingle[];

        /**
         * Timestamp when this message was sent.
         * UNIX epoch in seconds.
         * Assumed to be uint32, as this is easier
         * in JS (avoid type `long`).
         * This should work till around year 2100.
         */
        public sentTimestampSeconds?: (number|null);

        /** Unknown. */
        public unknown?: (number|null);

        /** Unknown. */
        public unknown_2?: (number|null);

        /** Unknown. */
        public unknown_3?: (number|null);

        /** Reactions to this message */
        public reactions?: (receiptinfo.MessageInfo.IReactions|null);

        /** Poll info for this message */
        public pollInfo?: (receiptinfo.MessageInfo.IPoll|null);

        /** Unknown string. Observed as empty */
        public unknownString?: (string|null);

        /** MessageInfo _sentTimestampSeconds. */
        public _sentTimestampSeconds?: "sentTimestampSeconds";

        /** MessageInfo _unknown. */
        public _unknown?: "unknown";

        /** MessageInfo _unknown_2. */
        public _unknown_2?: "unknown_2";

        /** MessageInfo _unknown_3. */
        public _unknown_3?: "unknown_3";

        /** MessageInfo _reactions. */
        public _reactions?: "reactions";

        /** MessageInfo _pollInfo. */
        public _pollInfo?: "pollInfo";

        /** MessageInfo _unknownString. */
        public _unknownString?: "unknownString";

        /**
         * Creates a new MessageInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageInfo instance
         */
        public static create(properties?: receiptinfo.IMessageInfo): receiptinfo.MessageInfo;

        /**
         * Encodes the specified MessageInfo message. Does not implicitly {@link receiptinfo.MessageInfo.verify|verify} messages.
         * @param message MessageInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: receiptinfo.IMessageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageInfo message, length delimited. Does not implicitly {@link receiptinfo.MessageInfo.verify|verify} messages.
         * @param message MessageInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: receiptinfo.IMessageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): receiptinfo.MessageInfo;

        /**
         * Decodes a MessageInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): receiptinfo.MessageInfo;

        /**
         * Verifies a MessageInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageInfo
         */
        public static fromObject(object: { [k: string]: any }): receiptinfo.MessageInfo;

        /**
         * Creates a plain object from a MessageInfo message. Also converts values to other types if specified.
         * @param message MessageInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: receiptinfo.MessageInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MessageInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace MessageInfo {

        /** Properties of a ReceiptInfoSingleLegacy. */
        interface IReceiptInfoSingleLegacy {

            /** phone number of the person */
            phoneNumber?: (string|null);

            /** ReceiptInfoSingleLegacy unknownNumber */
            unknownNumber?: (number|null);

            /** Timestamp when this message was received by this person. UNIX epoch in seconds. */
            receivedTimestampSeconds?: (number|null);

            /** Timestamp when this message was read by this person. UNIX epoch in seconds. */
            readTimestampSeconds?: (number|null);

            /** Timestamp of ??? (maybe when played for voice messages?). UNIX epoch in seconds. */
            playedTimestampSeconds?: (number|null);
        }

        /**
         * Receipt info for a single recipient.
         * Old format, does not appear for newer messages.
         */
        class ReceiptInfoSingleLegacy implements IReceiptInfoSingleLegacy {

            /**
             * Constructs a new ReceiptInfoSingleLegacy.
             * @param [properties] Properties to set
             */
            constructor(properties?: receiptinfo.MessageInfo.IReceiptInfoSingleLegacy);

            /** phone number of the person */
            public phoneNumber?: (string|null);

            /** ReceiptInfoSingleLegacy unknownNumber. */
            public unknownNumber?: (number|null);

            /** Timestamp when this message was received by this person. UNIX epoch in seconds. */
            public receivedTimestampSeconds?: (number|null);

            /** Timestamp when this message was read by this person. UNIX epoch in seconds. */
            public readTimestampSeconds?: (number|null);

            /** Timestamp of ??? (maybe when played for voice messages?). UNIX epoch in seconds. */
            public playedTimestampSeconds?: (number|null);

            /** ReceiptInfoSingleLegacy _phoneNumber. */
            public _phoneNumber?: "phoneNumber";

            /** ReceiptInfoSingleLegacy _unknownNumber. */
            public _unknownNumber?: "unknownNumber";

            /** ReceiptInfoSingleLegacy _receivedTimestampSeconds. */
            public _receivedTimestampSeconds?: "receivedTimestampSeconds";

            /** ReceiptInfoSingleLegacy _readTimestampSeconds. */
            public _readTimestampSeconds?: "readTimestampSeconds";

            /** ReceiptInfoSingleLegacy _playedTimestampSeconds. */
            public _playedTimestampSeconds?: "playedTimestampSeconds";

            /**
             * Creates a new ReceiptInfoSingleLegacy instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReceiptInfoSingleLegacy instance
             */
            public static create(properties?: receiptinfo.MessageInfo.IReceiptInfoSingleLegacy): receiptinfo.MessageInfo.ReceiptInfoSingleLegacy;

            /**
             * Encodes the specified ReceiptInfoSingleLegacy message. Does not implicitly {@link receiptinfo.MessageInfo.ReceiptInfoSingleLegacy.verify|verify} messages.
             * @param message ReceiptInfoSingleLegacy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: receiptinfo.MessageInfo.IReceiptInfoSingleLegacy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReceiptInfoSingleLegacy message, length delimited. Does not implicitly {@link receiptinfo.MessageInfo.ReceiptInfoSingleLegacy.verify|verify} messages.
             * @param message ReceiptInfoSingleLegacy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: receiptinfo.MessageInfo.IReceiptInfoSingleLegacy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReceiptInfoSingleLegacy message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReceiptInfoSingleLegacy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): receiptinfo.MessageInfo.ReceiptInfoSingleLegacy;

            /**
             * Decodes a ReceiptInfoSingleLegacy message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReceiptInfoSingleLegacy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): receiptinfo.MessageInfo.ReceiptInfoSingleLegacy;

            /**
             * Verifies a ReceiptInfoSingleLegacy message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReceiptInfoSingleLegacy message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReceiptInfoSingleLegacy
             */
            public static fromObject(object: { [k: string]: any }): receiptinfo.MessageInfo.ReceiptInfoSingleLegacy;

            /**
             * Creates a plain object from a ReceiptInfoSingleLegacy message. Also converts values to other types if specified.
             * @param message ReceiptInfoSingleLegacy
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: receiptinfo.MessageInfo.ReceiptInfoSingleLegacy, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReceiptInfoSingleLegacy to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ReceiptInfoSingleLegacy
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ReceiptInfoSingle. */
        interface IReceiptInfoSingle {

            /**
             * Phone number of the person, obfuscated:
             * turn bytes into hex -> read from third character = phone number
             */
            phoneNumber?: (Uint8Array|null);

            /**
             * Offset from sent_timestamp when this message (in parent)
             * was received by this person. UNIX epoch in seconds.
             */
            offsetReceivedTimestampSeconds?: (number|null);

            /**
             * Offset from sent_timestamp when this message (in parent)
             * was read by this person. UNIX epoch in seconds.
             */
            offsetReadTimestampSeconds?: (number|null);

            /**
             * Only observed once. Probably:
             * Offset from sent_timestamp when this message (in parent)
             * was played by this person. UNIX epoch in seconds.
             */
            offsetPlayedTimestampSeconds?: (number|null);

            /** ReceiptInfoSingle unknownThingOne */
            unknownThingOne?: (receiptinfo.MessageInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing[]|null);

            /** ReceiptInfoSingle unknownThingTwo */
            unknownThingTwo?: (receiptinfo.MessageInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing[]|null);
        }

        /** Receipt info for a single recipient, new format. */
        class ReceiptInfoSingle implements IReceiptInfoSingle {

            /**
             * Constructs a new ReceiptInfoSingle.
             * @param [properties] Properties to set
             */
            constructor(properties?: receiptinfo.MessageInfo.IReceiptInfoSingle);

            /**
             * Phone number of the person, obfuscated:
             * turn bytes into hex -> read from third character = phone number
             */
            public phoneNumber?: (Uint8Array|null);

            /**
             * Offset from sent_timestamp when this message (in parent)
             * was received by this person. UNIX epoch in seconds.
             */
            public offsetReceivedTimestampSeconds?: (number|null);

            /**
             * Offset from sent_timestamp when this message (in parent)
             * was read by this person. UNIX epoch in seconds.
             */
            public offsetReadTimestampSeconds?: (number|null);

            /**
             * Only observed once. Probably:
             * Offset from sent_timestamp when this message (in parent)
             * was played by this person. UNIX epoch in seconds.
             */
            public offsetPlayedTimestampSeconds?: (number|null);

            /** ReceiptInfoSingle unknownThingOne. */
            public unknownThingOne: receiptinfo.MessageInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing[];

            /** ReceiptInfoSingle unknownThingTwo. */
            public unknownThingTwo: receiptinfo.MessageInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing[];

            /** ReceiptInfoSingle _phoneNumber. */
            public _phoneNumber?: "phoneNumber";

            /** ReceiptInfoSingle _offsetReceivedTimestampSeconds. */
            public _offsetReceivedTimestampSeconds?: "offsetReceivedTimestampSeconds";

            /** ReceiptInfoSingle _offsetReadTimestampSeconds. */
            public _offsetReadTimestampSeconds?: "offsetReadTimestampSeconds";

            /** ReceiptInfoSingle _offsetPlayedTimestampSeconds. */
            public _offsetPlayedTimestampSeconds?: "offsetPlayedTimestampSeconds";

            /**
             * Creates a new ReceiptInfoSingle instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReceiptInfoSingle instance
             */
            public static create(properties?: receiptinfo.MessageInfo.IReceiptInfoSingle): receiptinfo.MessageInfo.ReceiptInfoSingle;

            /**
             * Encodes the specified ReceiptInfoSingle message. Does not implicitly {@link receiptinfo.MessageInfo.ReceiptInfoSingle.verify|verify} messages.
             * @param message ReceiptInfoSingle message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: receiptinfo.MessageInfo.IReceiptInfoSingle, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReceiptInfoSingle message, length delimited. Does not implicitly {@link receiptinfo.MessageInfo.ReceiptInfoSingle.verify|verify} messages.
             * @param message ReceiptInfoSingle message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: receiptinfo.MessageInfo.IReceiptInfoSingle, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReceiptInfoSingle message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReceiptInfoSingle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): receiptinfo.MessageInfo.ReceiptInfoSingle;

            /**
             * Decodes a ReceiptInfoSingle message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReceiptInfoSingle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): receiptinfo.MessageInfo.ReceiptInfoSingle;

            /**
             * Verifies a ReceiptInfoSingle message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReceiptInfoSingle message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReceiptInfoSingle
             */
            public static fromObject(object: { [k: string]: any }): receiptinfo.MessageInfo.ReceiptInfoSingle;

            /**
             * Creates a plain object from a ReceiptInfoSingle message. Also converts values to other types if specified.
             * @param message ReceiptInfoSingle
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: receiptinfo.MessageInfo.ReceiptInfoSingle, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReceiptInfoSingle to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ReceiptInfoSingle
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ReceiptInfoSingle {

            /** Properties of a ReceiptInfoSingleUnkownThing. */
            interface IReceiptInfoSingleUnkownThing {

                /** ReceiptInfoSingleUnkownThing one */
                one?: (number|null);

                /** ReceiptInfoSingleUnkownThing two */
                two?: (number|null);
            }

            /** Represents a ReceiptInfoSingleUnkownThing. */
            class ReceiptInfoSingleUnkownThing implements IReceiptInfoSingleUnkownThing {

                /**
                 * Constructs a new ReceiptInfoSingleUnkownThing.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: receiptinfo.MessageInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing);

                /** ReceiptInfoSingleUnkownThing one. */
                public one?: (number|null);

                /** ReceiptInfoSingleUnkownThing two. */
                public two?: (number|null);

                /** ReceiptInfoSingleUnkownThing _one. */
                public _one?: "one";

                /** ReceiptInfoSingleUnkownThing _two. */
                public _two?: "two";

                /**
                 * Creates a new ReceiptInfoSingleUnkownThing instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReceiptInfoSingleUnkownThing instance
                 */
                public static create(properties?: receiptinfo.MessageInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing): receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing;

                /**
                 * Encodes the specified ReceiptInfoSingleUnkownThing message. Does not implicitly {@link receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.verify|verify} messages.
                 * @param message ReceiptInfoSingleUnkownThing message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: receiptinfo.MessageInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReceiptInfoSingleUnkownThing message, length delimited. Does not implicitly {@link receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.verify|verify} messages.
                 * @param message ReceiptInfoSingleUnkownThing message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: receiptinfo.MessageInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReceiptInfoSingleUnkownThing message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReceiptInfoSingleUnkownThing
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing;

                /**
                 * Decodes a ReceiptInfoSingleUnkownThing message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReceiptInfoSingleUnkownThing
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing;

                /**
                 * Verifies a ReceiptInfoSingleUnkownThing message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReceiptInfoSingleUnkownThing message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReceiptInfoSingleUnkownThing
                 */
                public static fromObject(object: { [k: string]: any }): receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing;

                /**
                 * Creates a plain object from a ReceiptInfoSingleUnkownThing message. Also converts values to other types if specified.
                 * @param message ReceiptInfoSingleUnkownThing
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReceiptInfoSingleUnkownThing to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ReceiptInfoSingleUnkownThing
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a Reactions. */
        interface IReactions {

            /** A single reaction */
            reaction?: (receiptinfo.MessageInfo.Reactions.IReaction[]|null);
        }

        /** Reactions to a message. */
        class Reactions implements IReactions {

            /**
             * Constructs a new Reactions.
             * @param [properties] Properties to set
             */
            constructor(properties?: receiptinfo.MessageInfo.IReactions);

            /** A single reaction */
            public reaction: receiptinfo.MessageInfo.Reactions.IReaction[];

            /**
             * Creates a new Reactions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Reactions instance
             */
            public static create(properties?: receiptinfo.MessageInfo.IReactions): receiptinfo.MessageInfo.Reactions;

            /**
             * Encodes the specified Reactions message. Does not implicitly {@link receiptinfo.MessageInfo.Reactions.verify|verify} messages.
             * @param message Reactions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: receiptinfo.MessageInfo.IReactions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Reactions message, length delimited. Does not implicitly {@link receiptinfo.MessageInfo.Reactions.verify|verify} messages.
             * @param message Reactions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: receiptinfo.MessageInfo.IReactions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Reactions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Reactions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): receiptinfo.MessageInfo.Reactions;

            /**
             * Decodes a Reactions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Reactions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): receiptinfo.MessageInfo.Reactions;

            /**
             * Verifies a Reactions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Reactions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Reactions
             */
            public static fromObject(object: { [k: string]: any }): receiptinfo.MessageInfo.Reactions;

            /**
             * Creates a plain object from a Reactions message. Also converts values to other types if specified.
             * @param message Reactions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: receiptinfo.MessageInfo.Reactions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Reactions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Reactions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace Reactions {

            /** Properties of a Reaction. */
            interface IReaction {

                /** Unknown. Appears to be a string containing characters 0-9,A-F */
                unknownHex?: (string|null);

                /** WhatsAppJID of person reacting to the message */
                whatsAppJID?: (string|null);

                /** The reaction emoji */
                emoji?: (string|null);

                /**
                 * Timestamp when this reaction was sent.
                 * UNIX epoch in milliseconds
                 */
                reactionTimestampMilliseconds?: (number|null);

                /** Unknown */
                unkonwnThingTwo?: (number|null);
            }

            /** A reaction to a message. */
            class Reaction implements IReaction {

                /**
                 * Constructs a new Reaction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: receiptinfo.MessageInfo.Reactions.IReaction);

                /** Unknown. Appears to be a string containing characters 0-9,A-F */
                public unknownHex: string;

                /** WhatsAppJID of person reacting to the message */
                public whatsAppJID?: (string|null);

                /** The reaction emoji */
                public emoji: string;

                /**
                 * Timestamp when this reaction was sent.
                 * UNIX epoch in milliseconds
                 */
                public reactionTimestampMilliseconds: number;

                /** Unknown */
                public unkonwnThingTwo: number;

                /** Reaction _whatsAppJID. */
                public _whatsAppJID?: "whatsAppJID";

                /**
                 * Creates a new Reaction instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Reaction instance
                 */
                public static create(properties?: receiptinfo.MessageInfo.Reactions.IReaction): receiptinfo.MessageInfo.Reactions.Reaction;

                /**
                 * Encodes the specified Reaction message. Does not implicitly {@link receiptinfo.MessageInfo.Reactions.Reaction.verify|verify} messages.
                 * @param message Reaction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: receiptinfo.MessageInfo.Reactions.IReaction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Reaction message, length delimited. Does not implicitly {@link receiptinfo.MessageInfo.Reactions.Reaction.verify|verify} messages.
                 * @param message Reaction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: receiptinfo.MessageInfo.Reactions.IReaction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Reaction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Reaction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): receiptinfo.MessageInfo.Reactions.Reaction;

                /**
                 * Decodes a Reaction message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Reaction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): receiptinfo.MessageInfo.Reactions.Reaction;

                /**
                 * Verifies a Reaction message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Reaction message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Reaction
                 */
                public static fromObject(object: { [k: string]: any }): receiptinfo.MessageInfo.Reactions.Reaction;

                /**
                 * Creates a plain object from a Reaction message. Also converts values to other types if specified.
                 * @param message Reaction
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: receiptinfo.MessageInfo.Reactions.Reaction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Reaction to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Reaction
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a Poll. */
        interface IPoll {

            /** Title of the poll. */
            title?: (string|null);

            /** Options of the poll */
            option?: (receiptinfo.MessageInfo.Poll.IPollOption[]|null);

            /** Unknown */
            unknownThing_1?: (number|null);

            /** Response from people that are not the phone owner */
            theirResponse?: (receiptinfo.MessageInfo.Poll.IPollResponse[]|null);

            /** Own response */
            ownResponse?: (receiptinfo.MessageInfo.Poll.IPollResponse|null);

            /** Unknown */
            unknownThing_2?: (number|null);

            /** Unknown */
            unkownThing_3?: (receiptinfo.MessageInfo.Poll.IUnkownMessage|null);
        }

        /** Contains information on the poll (if this message is a poll). */
        class Poll implements IPoll {

            /**
             * Constructs a new Poll.
             * @param [properties] Properties to set
             */
            constructor(properties?: receiptinfo.MessageInfo.IPoll);

            /** Title of the poll. */
            public title: string;

            /** Options of the poll */
            public option: receiptinfo.MessageInfo.Poll.IPollOption[];

            /** Unknown */
            public unknownThing_1?: (number|null);

            /** Response from people that are not the phone owner */
            public theirResponse: receiptinfo.MessageInfo.Poll.IPollResponse[];

            /** Own response */
            public ownResponse?: (receiptinfo.MessageInfo.Poll.IPollResponse|null);

            /** Unknown */
            public unknownThing_2?: (number|null);

            /** Unknown */
            public unkownThing_3?: (receiptinfo.MessageInfo.Poll.IUnkownMessage|null);

            /** Poll _unknownThing_1. */
            public _unknownThing_1?: "unknownThing_1";

            /** Poll _ownResponse. */
            public _ownResponse?: "ownResponse";

            /** Poll _unknownThing_2. */
            public _unknownThing_2?: "unknownThing_2";

            /** Poll _unkownThing_3. */
            public _unkownThing_3?: "unkownThing_3";

            /**
             * Creates a new Poll instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Poll instance
             */
            public static create(properties?: receiptinfo.MessageInfo.IPoll): receiptinfo.MessageInfo.Poll;

            /**
             * Encodes the specified Poll message. Does not implicitly {@link receiptinfo.MessageInfo.Poll.verify|verify} messages.
             * @param message Poll message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: receiptinfo.MessageInfo.IPoll, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Poll message, length delimited. Does not implicitly {@link receiptinfo.MessageInfo.Poll.verify|verify} messages.
             * @param message Poll message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: receiptinfo.MessageInfo.IPoll, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Poll message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Poll
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): receiptinfo.MessageInfo.Poll;

            /**
             * Decodes a Poll message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Poll
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): receiptinfo.MessageInfo.Poll;

            /**
             * Verifies a Poll message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Poll message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Poll
             */
            public static fromObject(object: { [k: string]: any }): receiptinfo.MessageInfo.Poll;

            /**
             * Creates a plain object from a Poll message. Also converts values to other types if specified.
             * @param message Poll
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: receiptinfo.MessageInfo.Poll, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Poll to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Poll
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace Poll {

            /** Properties of a PollOption. */
            interface IPollOption {

                /** Option title */
                title?: (string|null);
            }

            /** An option to the poll. */
            class PollOption implements IPollOption {

                /**
                 * Constructs a new PollOption.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: receiptinfo.MessageInfo.Poll.IPollOption);

                /** Option title */
                public title: string;

                /**
                 * Creates a new PollOption instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PollOption instance
                 */
                public static create(properties?: receiptinfo.MessageInfo.Poll.IPollOption): receiptinfo.MessageInfo.Poll.PollOption;

                /**
                 * Encodes the specified PollOption message. Does not implicitly {@link receiptinfo.MessageInfo.Poll.PollOption.verify|verify} messages.
                 * @param message PollOption message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: receiptinfo.MessageInfo.Poll.IPollOption, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PollOption message, length delimited. Does not implicitly {@link receiptinfo.MessageInfo.Poll.PollOption.verify|verify} messages.
                 * @param message PollOption message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: receiptinfo.MessageInfo.Poll.IPollOption, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PollOption message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PollOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): receiptinfo.MessageInfo.Poll.PollOption;

                /**
                 * Decodes a PollOption message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PollOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): receiptinfo.MessageInfo.Poll.PollOption;

                /**
                 * Verifies a PollOption message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PollOption message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PollOption
                 */
                public static fromObject(object: { [k: string]: any }): receiptinfo.MessageInfo.Poll.PollOption;

                /**
                 * Creates a plain object from a PollOption message. Also converts values to other types if specified.
                 * @param message PollOption
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: receiptinfo.MessageInfo.Poll.PollOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PollOption to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PollOption
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PollResponse. */
            interface IPollResponse {

                /** Voted options, indexed by 0 */
                votedOption?: (number[]|null);

                /**
                 * Timestamp when this person responded to the poll.
                 * UNIX epoch in milliseconds.
                 * Only one timestamp is saved, even if there are multiple
                 * `voted_option`s. Timestamp is timestamp of last response.
                 */
                timestampMilliseconds?: (number|null);

                /** PollResponse unkownHex */
                unkownHex?: (string|null);

                /**
                 * WhatsAppJID of the respondent.
                 * not set if own response.
                 */
                whatsAppJid?: (string|null);

                /** PollResponse otherTimestamp */
                otherTimestamp?: (number|null);
            }

            /** The response to the poll from a single person. */
            class PollResponse implements IPollResponse {

                /**
                 * Constructs a new PollResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: receiptinfo.MessageInfo.Poll.IPollResponse);

                /** Voted options, indexed by 0 */
                public votedOption: number[];

                /**
                 * Timestamp when this person responded to the poll.
                 * UNIX epoch in milliseconds.
                 * Only one timestamp is saved, even if there are multiple
                 * `voted_option`s. Timestamp is timestamp of last response.
                 */
                public timestampMilliseconds: number;

                /** PollResponse unkownHex. */
                public unkownHex: string;

                /**
                 * WhatsAppJID of the respondent.
                 * not set if own response.
                 */
                public whatsAppJid?: (string|null);

                /** PollResponse otherTimestamp. */
                public otherTimestamp?: (number|null);

                /** PollResponse _whatsAppJid. */
                public _whatsAppJid?: "whatsAppJid";

                /** PollResponse _otherTimestamp. */
                public _otherTimestamp?: "otherTimestamp";

                /**
                 * Creates a new PollResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PollResponse instance
                 */
                public static create(properties?: receiptinfo.MessageInfo.Poll.IPollResponse): receiptinfo.MessageInfo.Poll.PollResponse;

                /**
                 * Encodes the specified PollResponse message. Does not implicitly {@link receiptinfo.MessageInfo.Poll.PollResponse.verify|verify} messages.
                 * @param message PollResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: receiptinfo.MessageInfo.Poll.IPollResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PollResponse message, length delimited. Does not implicitly {@link receiptinfo.MessageInfo.Poll.PollResponse.verify|verify} messages.
                 * @param message PollResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: receiptinfo.MessageInfo.Poll.IPollResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PollResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PollResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): receiptinfo.MessageInfo.Poll.PollResponse;

                /**
                 * Decodes a PollResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PollResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): receiptinfo.MessageInfo.Poll.PollResponse;

                /**
                 * Verifies a PollResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PollResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PollResponse
                 */
                public static fromObject(object: { [k: string]: any }): receiptinfo.MessageInfo.Poll.PollResponse;

                /**
                 * Creates a plain object from a PollResponse message. Also converts values to other types if specified.
                 * @param message PollResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: receiptinfo.MessageInfo.Poll.PollResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PollResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PollResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UnkownMessage. */
            interface IUnkownMessage {

                /** UnkownMessage unknownField */
                unknownField?: (number|null);
            }

            /** Unknown. */
            class UnkownMessage implements IUnkownMessage {

                /**
                 * Constructs a new UnkownMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: receiptinfo.MessageInfo.Poll.IUnkownMessage);

                /** UnkownMessage unknownField. */
                public unknownField: number;

                /**
                 * Creates a new UnkownMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UnkownMessage instance
                 */
                public static create(properties?: receiptinfo.MessageInfo.Poll.IUnkownMessage): receiptinfo.MessageInfo.Poll.UnkownMessage;

                /**
                 * Encodes the specified UnkownMessage message. Does not implicitly {@link receiptinfo.MessageInfo.Poll.UnkownMessage.verify|verify} messages.
                 * @param message UnkownMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: receiptinfo.MessageInfo.Poll.IUnkownMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UnkownMessage message, length delimited. Does not implicitly {@link receiptinfo.MessageInfo.Poll.UnkownMessage.verify|verify} messages.
                 * @param message UnkownMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: receiptinfo.MessageInfo.Poll.IUnkownMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UnkownMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UnkownMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): receiptinfo.MessageInfo.Poll.UnkownMessage;

                /**
                 * Decodes an UnkownMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UnkownMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): receiptinfo.MessageInfo.Poll.UnkownMessage;

                /**
                 * Verifies an UnkownMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UnkownMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UnkownMessage
                 */
                public static fromObject(object: { [k: string]: any }): receiptinfo.MessageInfo.Poll.UnkownMessage;

                /**
                 * Creates a plain object from an UnkownMessage message. Also converts values to other types if specified.
                 * @param message UnkownMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: receiptinfo.MessageInfo.Poll.UnkownMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UnkownMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UnkownMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }
}
