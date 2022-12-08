import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace message. */
export namespace message {

    /** Properties of a PushName. */
    interface IPushName {

        /** PushName timestampSeconds */
        timestampSeconds?: (number|null);

        /** PushName whatsAppJid */
        whatsAppJid?: (string|null);

        /** PushName maybeBoolean */
        maybeBoolean?: (number|null);
    }

    /** Represents a PushName. */
    class PushName implements IPushName {

        /**
         * Constructs a new PushName.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IPushName);

        /** PushName timestampSeconds. */
        public timestampSeconds: number;

        /** PushName whatsAppJid. */
        public whatsAppJid: string;

        /** PushName maybeBoolean. */
        public maybeBoolean: number;

        /**
         * Creates a new PushName instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PushName instance
         */
        public static create(properties?: message.IPushName): message.PushName;

        /**
         * Encodes the specified PushName message. Does not implicitly {@link message.PushName.verify|verify} messages.
         * @param message PushName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IPushName, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PushName message, length delimited. Does not implicitly {@link message.PushName.verify|verify} messages.
         * @param message PushName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IPushName, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PushName message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PushName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.PushName;

        /**
         * Decodes a PushName message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PushName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.PushName;

        /**
         * Verifies a PushName message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PushName message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PushName
         */
        public static fromObject(object: { [k: string]: any }): message.PushName;

        /**
         * Creates a plain object from a PushName message. Also converts values to other types if specified.
         * @param message PushName
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.PushName, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PushName to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PushName
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LastMessagePreview. */
    interface ILastMessagePreview {

        /** LastMessagePreview maybeBolean_3 */
        maybeBolean_3?: (number|null);

        /** LastMessagePreview maybeBolean_7 */
        maybeBolean_7?: (number|null);

        /** LastMessagePreview unknownNumber_11 */
        unknownNumber_11?: (number|null);

        /** LastMessagePreview unknownHexMaybeAppleContactId */
        unknownHexMaybeAppleContactId?: (string|null);

        /** LastMessagePreview unknownHex */
        unknownHex?: (string|null);

        /** LastMessagePreview unknownStringContainingChatSessionJid */
        unknownStringContainingChatSessionJid?: (string|null);

        /** LastMessagePreview lastReaction */
        lastReaction?: (message.LastMessagePreview.ILastReaction|null);

        /** LastMessagePreview unknownNumber_19 */
        unknownNumber_19?: (number|null);
    }

    /** Represents a LastMessagePreview. */
    class LastMessagePreview implements ILastMessagePreview {

        /**
         * Constructs a new LastMessagePreview.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.ILastMessagePreview);

        /** LastMessagePreview maybeBolean_3. */
        public maybeBolean_3: number;

        /** LastMessagePreview maybeBolean_7. */
        public maybeBolean_7: number;

        /** LastMessagePreview unknownNumber_11. */
        public unknownNumber_11: number;

        /** LastMessagePreview unknownHexMaybeAppleContactId. */
        public unknownHexMaybeAppleContactId: string;

        /** LastMessagePreview unknownHex. */
        public unknownHex: string;

        /** LastMessagePreview unknownStringContainingChatSessionJid. */
        public unknownStringContainingChatSessionJid: string;

        /** LastMessagePreview lastReaction. */
        public lastReaction?: (message.LastMessagePreview.ILastReaction|null);

        /** LastMessagePreview unknownNumber_19. */
        public unknownNumber_19: number;

        /**
         * Creates a new LastMessagePreview instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LastMessagePreview instance
         */
        public static create(properties?: message.ILastMessagePreview): message.LastMessagePreview;

        /**
         * Encodes the specified LastMessagePreview message. Does not implicitly {@link message.LastMessagePreview.verify|verify} messages.
         * @param message LastMessagePreview message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.ILastMessagePreview, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LastMessagePreview message, length delimited. Does not implicitly {@link message.LastMessagePreview.verify|verify} messages.
         * @param message LastMessagePreview message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.ILastMessagePreview, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LastMessagePreview message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LastMessagePreview
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.LastMessagePreview;

        /**
         * Decodes a LastMessagePreview message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LastMessagePreview
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.LastMessagePreview;

        /**
         * Verifies a LastMessagePreview message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LastMessagePreview message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LastMessagePreview
         */
        public static fromObject(object: { [k: string]: any }): message.LastMessagePreview;

        /**
         * Creates a plain object from a LastMessagePreview message. Also converts values to other types if specified.
         * @param message LastMessagePreview
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.LastMessagePreview, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LastMessagePreview to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LastMessagePreview
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace LastMessagePreview {

        /** Properties of a LastReaction. */
        interface ILastReaction {

            /** LastReaction unknownHex */
            unknownHex?: (string|null);

            /** LastReaction reaction */
            reaction?: (string|null);

            /** LastReaction timestampMilliseconds */
            timestampMilliseconds?: (number|null);

            /** LastReaction maybeBoolean */
            maybeBoolean?: (number|null);
        }

        /** Represents a LastReaction. */
        class LastReaction implements ILastReaction {

            /**
             * Constructs a new LastReaction.
             * @param [properties] Properties to set
             */
            constructor(properties?: message.LastMessagePreview.ILastReaction);

            /** LastReaction unknownHex. */
            public unknownHex: string;

            /** LastReaction reaction. */
            public reaction: string;

            /** LastReaction timestampMilliseconds. */
            public timestampMilliseconds: number;

            /** LastReaction maybeBoolean. */
            public maybeBoolean: number;

            /**
             * Creates a new LastReaction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LastReaction instance
             */
            public static create(properties?: message.LastMessagePreview.ILastReaction): message.LastMessagePreview.LastReaction;

            /**
             * Encodes the specified LastReaction message. Does not implicitly {@link message.LastMessagePreview.LastReaction.verify|verify} messages.
             * @param message LastReaction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: message.LastMessagePreview.ILastReaction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LastReaction message, length delimited. Does not implicitly {@link message.LastMessagePreview.LastReaction.verify|verify} messages.
             * @param message LastReaction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: message.LastMessagePreview.ILastReaction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LastReaction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LastReaction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.LastMessagePreview.LastReaction;

            /**
             * Decodes a LastReaction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LastReaction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.LastMessagePreview.LastReaction;

            /**
             * Verifies a LastReaction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LastReaction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LastReaction
             */
            public static fromObject(object: { [k: string]: any }): message.LastMessagePreview.LastReaction;

            /**
             * Creates a plain object from a LastReaction message. Also converts values to other types if specified.
             * @param message LastReaction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: message.LastMessagePreview.LastReaction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LastReaction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LastReaction
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
