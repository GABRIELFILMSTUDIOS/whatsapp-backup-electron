import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace mediaitem. */
export namespace mediaitem {

    /** Properties of a Metadata. */
    interface IMetadata {

        /** The originally sent URL, including URL params. */
        urlOriginal?: (string|null);

        /** The resolved URL, following any redirects and possibly stripping tracking params. Sometimes empty string. */
        urlLocationResolved?: (string|null);

        /** The preview text of this media (for external media, e.g. links) */
        externalMediaPreviewTextCache?: (string|null);

        /**
         * The url of this media on WhatsApps servers (without domain). It is stored there encrypted.
         * Prepend this with "https://mmg.whatsapp.net/" to download the file.
         */
        whatsappMediaDownloadLocationEncrypted?: (string|null);

        /** The `stanza id` (column `ZSTANZAID`) of the message this is a rely/reference to. */
        referencedMessageStanzaId?: (string|null);

        /**
         * The `JID` of the sender of the message this is a reply/reference to.
         * Apparently not set if referenced message was sent by self.
         */
        referencedMessageSenderJid?: (string|null);

        /**
         * The `JID` of the group of the message this is a reply/reference to.
         * Not set if this message is sent in the same group/chat as the message it is referencing.
         */
        referencedMessageChatJid?: (string|null);

        /** `JID`s of people mentioned in the message */
        mentionedJid?: (string[]|null);

        /** Metadata unknownNumber_11 */
        unknownNumber_11?: (number|null);

        /** Metadata unknownMaybeBoolean_13 */
        unknownMaybeBoolean_13?: (number|null);

        /** Metadata possiblyBool_15 */
        possiblyBool_15?: (number|null);

        /** Metadata unknownMaybeBoolean_16 */
        unknownMaybeBoolean_16?: (number|null);

        /** Metadata possiblyBool_17 */
        possiblyBool_17?: (number|null);

        /** Metadata referencedMessage */
        referencedMessage?: (mediaitem.Metadata.IReferencedMessage|null);

        /** Metadata unknownMaybeBoolean_30 */
        unknownMaybeBoolean_30?: (number|null);

        /** Metadata sticker */
        sticker?: (mediaitem.Metadata.ISticker|null);

        /** Metadata possiblyBool_46 */
        possiblyBool_46?: (number|null);

        /** Metadata cachedPreviewMedia */
        cachedPreviewMedia?: (mediaitem.Metadata.ICachedPreviewMedia|null);

        /** Metadata infoForMessageToBusiness */
        infoForMessageToBusiness?: (mediaitem.Metadata.IInfoForMessageToBusiness|null);

        /** Metadata unknownNumber_50 */
        unknownNumber_50?: (number|null);

        /** Metadata maybeVoiceMemoInfo */
        maybeVoiceMemoInfo?: (mediaitem.Metadata.IMaybeVoiceMemoInfo|null);

        /** Metadata unknownBytes_68 */
        unknownBytes_68?: (Uint8Array|null);

        /** Metadata possiblyBool_70 */
        possiblyBool_70?: (number|null);

        /** Metadata unknownNumber_72 */
        unknownNumber_72?: (number|null);

        /** Metadata unkownString_73 */
        unkownString_73?: (string|null);
    }

    /** Represents a Metadata. */
    class Metadata implements IMetadata {

        /**
         * Constructs a new Metadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: mediaitem.IMetadata);

        /** The originally sent URL, including URL params. */
        public urlOriginal?: (string|null);

        /** The resolved URL, following any redirects and possibly stripping tracking params. Sometimes empty string. */
        public urlLocationResolved?: (string|null);

        /** The preview text of this media (for external media, e.g. links) */
        public externalMediaPreviewTextCache?: (string|null);

        /**
         * The url of this media on WhatsApps servers (without domain). It is stored there encrypted.
         * Prepend this with "https://mmg.whatsapp.net/" to download the file.
         */
        public whatsappMediaDownloadLocationEncrypted?: (string|null);

        /** The `stanza id` (column `ZSTANZAID`) of the message this is a rely/reference to. */
        public referencedMessageStanzaId?: (string|null);

        /**
         * The `JID` of the sender of the message this is a reply/reference to.
         * Apparently not set if referenced message was sent by self.
         */
        public referencedMessageSenderJid?: (string|null);

        /**
         * The `JID` of the group of the message this is a reply/reference to.
         * Not set if this message is sent in the same group/chat as the message it is referencing.
         */
        public referencedMessageChatJid?: (string|null);

        /** `JID`s of people mentioned in the message */
        public mentionedJid: string[];

        /** Metadata unknownNumber_11. */
        public unknownNumber_11?: (number|null);

        /** Metadata unknownMaybeBoolean_13. */
        public unknownMaybeBoolean_13?: (number|null);

        /** Metadata possiblyBool_15. */
        public possiblyBool_15?: (number|null);

        /** Metadata unknownMaybeBoolean_16. */
        public unknownMaybeBoolean_16?: (number|null);

        /** Metadata possiblyBool_17. */
        public possiblyBool_17?: (number|null);

        /** Metadata referencedMessage. */
        public referencedMessage?: (mediaitem.Metadata.IReferencedMessage|null);

        /** Metadata unknownMaybeBoolean_30. */
        public unknownMaybeBoolean_30?: (number|null);

        /** Metadata sticker. */
        public sticker?: (mediaitem.Metadata.ISticker|null);

        /** Metadata possiblyBool_46. */
        public possiblyBool_46?: (number|null);

        /** Metadata cachedPreviewMedia. */
        public cachedPreviewMedia?: (mediaitem.Metadata.ICachedPreviewMedia|null);

        /** Metadata infoForMessageToBusiness. */
        public infoForMessageToBusiness?: (mediaitem.Metadata.IInfoForMessageToBusiness|null);

        /** Metadata unknownNumber_50. */
        public unknownNumber_50?: (number|null);

        /** Metadata maybeVoiceMemoInfo. */
        public maybeVoiceMemoInfo?: (mediaitem.Metadata.IMaybeVoiceMemoInfo|null);

        /** Metadata unknownBytes_68. */
        public unknownBytes_68?: (Uint8Array|null);

        /** Metadata possiblyBool_70. */
        public possiblyBool_70?: (number|null);

        /** Metadata unknownNumber_72. */
        public unknownNumber_72?: (number|null);

        /** Metadata unkownString_73. */
        public unkownString_73?: (string|null);

        /** Metadata _urlOriginal. */
        public _urlOriginal?: "urlOriginal";

        /** Metadata _urlLocationResolved. */
        public _urlLocationResolved?: "urlLocationResolved";

        /** Metadata _externalMediaPreviewTextCache. */
        public _externalMediaPreviewTextCache?: "externalMediaPreviewTextCache";

        /** Metadata _whatsappMediaDownloadLocationEncrypted. */
        public _whatsappMediaDownloadLocationEncrypted?: "whatsappMediaDownloadLocationEncrypted";

        /** Metadata _referencedMessageStanzaId. */
        public _referencedMessageStanzaId?: "referencedMessageStanzaId";

        /** Metadata _referencedMessageSenderJid. */
        public _referencedMessageSenderJid?: "referencedMessageSenderJid";

        /** Metadata _referencedMessageChatJid. */
        public _referencedMessageChatJid?: "referencedMessageChatJid";

        /** Metadata _unknownNumber_11. */
        public _unknownNumber_11?: "unknownNumber_11";

        /** Metadata _unknownMaybeBoolean_13. */
        public _unknownMaybeBoolean_13?: "unknownMaybeBoolean_13";

        /** Metadata _possiblyBool_15. */
        public _possiblyBool_15?: "possiblyBool_15";

        /** Metadata _unknownMaybeBoolean_16. */
        public _unknownMaybeBoolean_16?: "unknownMaybeBoolean_16";

        /** Metadata _possiblyBool_17. */
        public _possiblyBool_17?: "possiblyBool_17";

        /** Metadata _referencedMessage. */
        public _referencedMessage?: "referencedMessage";

        /** Metadata _unknownMaybeBoolean_30. */
        public _unknownMaybeBoolean_30?: "unknownMaybeBoolean_30";

        /** Metadata _sticker. */
        public _sticker?: "sticker";

        /** Metadata _possiblyBool_46. */
        public _possiblyBool_46?: "possiblyBool_46";

        /** Metadata _cachedPreviewMedia. */
        public _cachedPreviewMedia?: "cachedPreviewMedia";

        /** Metadata _infoForMessageToBusiness. */
        public _infoForMessageToBusiness?: "infoForMessageToBusiness";

        /** Metadata _unknownNumber_50. */
        public _unknownNumber_50?: "unknownNumber_50";

        /** Metadata _maybeVoiceMemoInfo. */
        public _maybeVoiceMemoInfo?: "maybeVoiceMemoInfo";

        /** Metadata _unknownBytes_68. */
        public _unknownBytes_68?: "unknownBytes_68";

        /** Metadata _possiblyBool_70. */
        public _possiblyBool_70?: "possiblyBool_70";

        /** Metadata _unknownNumber_72. */
        public _unknownNumber_72?: "unknownNumber_72";

        /** Metadata _unkownString_73. */
        public _unkownString_73?: "unkownString_73";

        /**
         * Creates a new Metadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Metadata instance
         */
        public static create(properties?: mediaitem.IMetadata): mediaitem.Metadata;

        /**
         * Encodes the specified Metadata message. Does not implicitly {@link mediaitem.Metadata.verify|verify} messages.
         * @param message Metadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mediaitem.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Metadata message, length delimited. Does not implicitly {@link mediaitem.Metadata.verify|verify} messages.
         * @param message Metadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mediaitem.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Metadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediaitem.Metadata;

        /**
         * Decodes a Metadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mediaitem.Metadata;

        /**
         * Verifies a Metadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Metadata
         */
        public static fromObject(object: { [k: string]: any }): mediaitem.Metadata;

        /**
         * Creates a plain object from a Metadata message. Also converts values to other types if specified.
         * @param message Metadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mediaitem.Metadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Metadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Metadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Metadata {

        /** Properties of a ReferencedMessage. */
        interface IReferencedMessage {

            /** ReferencedMessage text */
            text?: (string|null);

            /** ReferencedMessage attachedMedia */
            attachedMedia?: (mediaitem.Metadata.ReferencedMessage.IAttachedMedia|null);

            /** ReferencedMessage attachedWebsite */
            attachedWebsite?: (mediaitem.Metadata.ReferencedMessage.IAttachedWebsite|null);

            /** ReferencedMessage attachedPdf */
            attachedPdf?: (mediaitem.Metadata.ReferencedMessage.IAttachedPDF|null);
        }

        /** Represents a ReferencedMessage. */
        class ReferencedMessage implements IReferencedMessage {

            /**
             * Constructs a new ReferencedMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediaitem.Metadata.IReferencedMessage);

            /** ReferencedMessage text. */
            public text?: (string|null);

            /** ReferencedMessage attachedMedia. */
            public attachedMedia?: (mediaitem.Metadata.ReferencedMessage.IAttachedMedia|null);

            /** ReferencedMessage attachedWebsite. */
            public attachedWebsite?: (mediaitem.Metadata.ReferencedMessage.IAttachedWebsite|null);

            /** ReferencedMessage attachedPdf. */
            public attachedPdf?: (mediaitem.Metadata.ReferencedMessage.IAttachedPDF|null);

            /** ReferencedMessage _text. */
            public _text?: "text";

            /** ReferencedMessage _attachedMedia. */
            public _attachedMedia?: "attachedMedia";

            /** ReferencedMessage _attachedWebsite. */
            public _attachedWebsite?: "attachedWebsite";

            /** ReferencedMessage _attachedPdf. */
            public _attachedPdf?: "attachedPdf";

            /**
             * Creates a new ReferencedMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReferencedMessage instance
             */
            public static create(properties?: mediaitem.Metadata.IReferencedMessage): mediaitem.Metadata.ReferencedMessage;

            /**
             * Encodes the specified ReferencedMessage message. Does not implicitly {@link mediaitem.Metadata.ReferencedMessage.verify|verify} messages.
             * @param message ReferencedMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mediaitem.Metadata.IReferencedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReferencedMessage message, length delimited. Does not implicitly {@link mediaitem.Metadata.ReferencedMessage.verify|verify} messages.
             * @param message ReferencedMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mediaitem.Metadata.IReferencedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReferencedMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReferencedMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediaitem.Metadata.ReferencedMessage;

            /**
             * Decodes a ReferencedMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReferencedMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mediaitem.Metadata.ReferencedMessage;

            /**
             * Verifies a ReferencedMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReferencedMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReferencedMessage
             */
            public static fromObject(object: { [k: string]: any }): mediaitem.Metadata.ReferencedMessage;

            /**
             * Creates a plain object from a ReferencedMessage message. Also converts values to other types if specified.
             * @param message ReferencedMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mediaitem.Metadata.ReferencedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReferencedMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ReferencedMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ReferencedMessage {

            /** Properties of an AttachedMedia. */
            interface IAttachedMedia {

                /** Format "https://mmg.whatsapp.net/ *.enc" */
                whatsappDownloadUrl?: (string|null);

                /** MIME-Type of this media */
                mimeType?: (string|null);

                /**
                 * Text of the description the sender sent with
                 * this message.
                 */
                mediaDecriptionMessageText?: (string|null);

                /** AttachedMedia unknownBytes_4 */
                unknownBytes_4?: (Uint8Array|null);

                /** AttachedMedia unknownNumber_5 */
                unknownNumber_5?: (number|null);

                /** AttachedMedia unknownNumber_6 */
                unknownNumber_6?: (number|null);

                /** AttachedMedia unknownNumber_7 */
                unknownNumber_7?: (number|null);

                /** AttachedMedia unknownBytes_8 */
                unknownBytes_8?: (Uint8Array|null);

                /** AttachedMedia unknownBytes_9 */
                unknownBytes_9?: (Uint8Array|null);

                /**
                 * Another url to download the media from.
                 * Appears to hold same contents as the url
                 * at `whatsapp_download_url`, but has a significantly
                 * longer format and misses the domain.
                 * Format: "*.enc?*"
                 */
                whatsappDownloadUrlLong?: (string|null);

                /** Appears to be timestamp of the referenced media */
                mediaTimestampUnixMilliseconds?: (number|null);

                /** AttachedMedia unknownBytes_16 */
                unknownBytes_16?: (Uint8Array|null);

                /** AttachedMedia unknownBytes_18 */
                unknownBytes_18?: (Uint8Array|null);

                /** AttachedMedia unknownNumber_19 */
                unknownNumber_19?: (number|null);

                /** AttachedMedia unknownBytes_21 */
                unknownBytes_21?: (Uint8Array|null);

                /** AttachedMedia unknownNumber_22 */
                unknownNumber_22?: (number[]|null);

                /** AttachedMedia unknownBytes_23 */
                unknownBytes_23?: (Uint8Array|null);

                /** AttachedMedia maybeBoolean_25 */
                maybeBoolean_25?: (number|null);
            }

            /** Represents an AttachedMedia. */
            class AttachedMedia implements IAttachedMedia {

                /**
                 * Constructs a new AttachedMedia.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mediaitem.Metadata.ReferencedMessage.IAttachedMedia);

                /** Format "https://mmg.whatsapp.net/ *.enc" */
                public whatsappDownloadUrl?: (string|null);

                /** MIME-Type of this media */
                public mimeType?: (string|null);

                /**
                 * Text of the description the sender sent with
                 * this message.
                 */
                public mediaDecriptionMessageText?: (string|null);

                /** AttachedMedia unknownBytes_4. */
                public unknownBytes_4?: (Uint8Array|null);

                /** AttachedMedia unknownNumber_5. */
                public unknownNumber_5?: (number|null);

                /** AttachedMedia unknownNumber_6. */
                public unknownNumber_6?: (number|null);

                /** AttachedMedia unknownNumber_7. */
                public unknownNumber_7?: (number|null);

                /** AttachedMedia unknownBytes_8. */
                public unknownBytes_8?: (Uint8Array|null);

                /** AttachedMedia unknownBytes_9. */
                public unknownBytes_9?: (Uint8Array|null);

                /**
                 * Another url to download the media from.
                 * Appears to hold same contents as the url
                 * at `whatsapp_download_url`, but has a significantly
                 * longer format and misses the domain.
                 * Format: "*.enc?*"
                 */
                public whatsappDownloadUrlLong?: (string|null);

                /** Appears to be timestamp of the referenced media */
                public mediaTimestampUnixMilliseconds?: (number|null);

                /** AttachedMedia unknownBytes_16. */
                public unknownBytes_16?: (Uint8Array|null);

                /** AttachedMedia unknownBytes_18. */
                public unknownBytes_18?: (Uint8Array|null);

                /** AttachedMedia unknownNumber_19. */
                public unknownNumber_19?: (number|null);

                /** AttachedMedia unknownBytes_21. */
                public unknownBytes_21?: (Uint8Array|null);

                /** AttachedMedia unknownNumber_22. */
                public unknownNumber_22: number[];

                /** AttachedMedia unknownBytes_23. */
                public unknownBytes_23?: (Uint8Array|null);

                /** AttachedMedia maybeBoolean_25. */
                public maybeBoolean_25?: (number|null);

                /** AttachedMedia _whatsappDownloadUrl. */
                public _whatsappDownloadUrl?: "whatsappDownloadUrl";

                /** AttachedMedia _mimeType. */
                public _mimeType?: "mimeType";

                /** AttachedMedia _mediaDecriptionMessageText. */
                public _mediaDecriptionMessageText?: "mediaDecriptionMessageText";

                /** AttachedMedia _unknownBytes_4. */
                public _unknownBytes_4?: "unknownBytes_4";

                /** AttachedMedia _unknownNumber_5. */
                public _unknownNumber_5?: "unknownNumber_5";

                /** AttachedMedia _unknownNumber_6. */
                public _unknownNumber_6?: "unknownNumber_6";

                /** AttachedMedia _unknownNumber_7. */
                public _unknownNumber_7?: "unknownNumber_7";

                /** AttachedMedia _unknownBytes_8. */
                public _unknownBytes_8?: "unknownBytes_8";

                /** AttachedMedia _unknownBytes_9. */
                public _unknownBytes_9?: "unknownBytes_9";

                /** AttachedMedia _whatsappDownloadUrlLong. */
                public _whatsappDownloadUrlLong?: "whatsappDownloadUrlLong";

                /** AttachedMedia _mediaTimestampUnixMilliseconds. */
                public _mediaTimestampUnixMilliseconds?: "mediaTimestampUnixMilliseconds";

                /** AttachedMedia _unknownBytes_16. */
                public _unknownBytes_16?: "unknownBytes_16";

                /** AttachedMedia _unknownBytes_18. */
                public _unknownBytes_18?: "unknownBytes_18";

                /** AttachedMedia _unknownNumber_19. */
                public _unknownNumber_19?: "unknownNumber_19";

                /** AttachedMedia _unknownBytes_21. */
                public _unknownBytes_21?: "unknownBytes_21";

                /** AttachedMedia _unknownBytes_23. */
                public _unknownBytes_23?: "unknownBytes_23";

                /** AttachedMedia _maybeBoolean_25. */
                public _maybeBoolean_25?: "maybeBoolean_25";

                /**
                 * Creates a new AttachedMedia instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AttachedMedia instance
                 */
                public static create(properties?: mediaitem.Metadata.ReferencedMessage.IAttachedMedia): mediaitem.Metadata.ReferencedMessage.AttachedMedia;

                /**
                 * Encodes the specified AttachedMedia message. Does not implicitly {@link mediaitem.Metadata.ReferencedMessage.AttachedMedia.verify|verify} messages.
                 * @param message AttachedMedia message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mediaitem.Metadata.ReferencedMessage.IAttachedMedia, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AttachedMedia message, length delimited. Does not implicitly {@link mediaitem.Metadata.ReferencedMessage.AttachedMedia.verify|verify} messages.
                 * @param message AttachedMedia message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mediaitem.Metadata.ReferencedMessage.IAttachedMedia, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AttachedMedia message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AttachedMedia
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediaitem.Metadata.ReferencedMessage.AttachedMedia;

                /**
                 * Decodes an AttachedMedia message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AttachedMedia
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mediaitem.Metadata.ReferencedMessage.AttachedMedia;

                /**
                 * Verifies an AttachedMedia message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AttachedMedia message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AttachedMedia
                 */
                public static fromObject(object: { [k: string]: any }): mediaitem.Metadata.ReferencedMessage.AttachedMedia;

                /**
                 * Creates a plain object from an AttachedMedia message. Also converts values to other types if specified.
                 * @param message AttachedMedia
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mediaitem.Metadata.ReferencedMessage.AttachedMedia, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AttachedMedia to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AttachedMedia
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AttachedWebsite. */
            interface IAttachedWebsite {

                /**
                 * The URL of the attached media.
                 * I have no idea why there are multiple, they were always observed as being identical
                 */
                url_1?: (string|null);

                /**
                 * The URL of the attached media.
                 * I have no idea why there are multiple, they were always observed as being identical
                 */
                url_2?: (string|null);

                /** The URL of the attached media. Sometimes this field is an empty string */
                url_4?: (string|null);

                /** The URL of the attached media. Sometimes this field is empty */
                url_5?: (string|null);

                /** preview text to be displayed in the app */
                preview?: (string|null);

                /** AttachedWebsite maybeBoolean_10 */
                maybeBoolean_10?: (number|null);

                /** AttachedWebsite unknownBytes_16 */
                unknownBytes_16?: (Uint8Array|null);

                /** AttachedWebsite additionalInfo */
                additionalInfo?: (mediaitem.Metadata.ReferencedMessage.AttachedWebsite.IAdditionalInfo|null);

                /** AttachedWebsite previewMediaWhatsappDownloadUrlLong */
                previewMediaWhatsappDownloadUrlLong?: (string|null);

                /** AttachedWebsite unknownBytes_20 */
                unknownBytes_20?: (Uint8Array|null);

                /** AttachedWebsite unknownBytes_21 */
                unknownBytes_21?: (Uint8Array|null);

                /** AttachedWebsite unknownBytes_22 */
                unknownBytes_22?: (Uint8Array|null);

                /** AttachedWebsite timestampUnixMilliseconds */
                timestampUnixMilliseconds?: (number|null);

                /** AttachedWebsite unknownNumber_24 */
                unknownNumber_24?: (number|null);

                /** AttachedWebsite unknownNumber_25 */
                unknownNumber_25?: (number|null);

                /** AttachedWebsite maybeBoolean_29 */
                maybeBoolean_29?: (number|null);
            }

            /** Represents an AttachedWebsite. */
            class AttachedWebsite implements IAttachedWebsite {

                /**
                 * Constructs a new AttachedWebsite.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mediaitem.Metadata.ReferencedMessage.IAttachedWebsite);

                /**
                 * The URL of the attached media.
                 * I have no idea why there are multiple, they were always observed as being identical
                 */
                public url_1?: (string|null);

                /**
                 * The URL of the attached media.
                 * I have no idea why there are multiple, they were always observed as being identical
                 */
                public url_2?: (string|null);

                /** The URL of the attached media. Sometimes this field is an empty string */
                public url_4?: (string|null);

                /** The URL of the attached media. Sometimes this field is empty */
                public url_5?: (string|null);

                /** preview text to be displayed in the app */
                public preview?: (string|null);

                /** AttachedWebsite maybeBoolean_10. */
                public maybeBoolean_10?: (number|null);

                /** AttachedWebsite unknownBytes_16. */
                public unknownBytes_16?: (Uint8Array|null);

                /** AttachedWebsite additionalInfo. */
                public additionalInfo?: (mediaitem.Metadata.ReferencedMessage.AttachedWebsite.IAdditionalInfo|null);

                /** AttachedWebsite previewMediaWhatsappDownloadUrlLong. */
                public previewMediaWhatsappDownloadUrlLong?: (string|null);

                /** AttachedWebsite unknownBytes_20. */
                public unknownBytes_20?: (Uint8Array|null);

                /** AttachedWebsite unknownBytes_21. */
                public unknownBytes_21?: (Uint8Array|null);

                /** AttachedWebsite unknownBytes_22. */
                public unknownBytes_22?: (Uint8Array|null);

                /** AttachedWebsite timestampUnixMilliseconds. */
                public timestampUnixMilliseconds?: (number|null);

                /** AttachedWebsite unknownNumber_24. */
                public unknownNumber_24?: (number|null);

                /** AttachedWebsite unknownNumber_25. */
                public unknownNumber_25?: (number|null);

                /** AttachedWebsite maybeBoolean_29. */
                public maybeBoolean_29?: (number|null);

                /** AttachedWebsite _url_1. */
                public _url_1?: "url_1";

                /** AttachedWebsite _url_2. */
                public _url_2?: "url_2";

                /** AttachedWebsite _url_4. */
                public _url_4?: "url_4";

                /** AttachedWebsite _url_5. */
                public _url_5?: "url_5";

                /** AttachedWebsite _preview. */
                public _preview?: "preview";

                /** AttachedWebsite _maybeBoolean_10. */
                public _maybeBoolean_10?: "maybeBoolean_10";

                /** AttachedWebsite _unknownBytes_16. */
                public _unknownBytes_16?: "unknownBytes_16";

                /** AttachedWebsite _additionalInfo. */
                public _additionalInfo?: "additionalInfo";

                /** AttachedWebsite _previewMediaWhatsappDownloadUrlLong. */
                public _previewMediaWhatsappDownloadUrlLong?: "previewMediaWhatsappDownloadUrlLong";

                /** AttachedWebsite _unknownBytes_20. */
                public _unknownBytes_20?: "unknownBytes_20";

                /** AttachedWebsite _unknownBytes_21. */
                public _unknownBytes_21?: "unknownBytes_21";

                /** AttachedWebsite _unknownBytes_22. */
                public _unknownBytes_22?: "unknownBytes_22";

                /** AttachedWebsite _timestampUnixMilliseconds. */
                public _timestampUnixMilliseconds?: "timestampUnixMilliseconds";

                /** AttachedWebsite _unknownNumber_24. */
                public _unknownNumber_24?: "unknownNumber_24";

                /** AttachedWebsite _unknownNumber_25. */
                public _unknownNumber_25?: "unknownNumber_25";

                /** AttachedWebsite _maybeBoolean_29. */
                public _maybeBoolean_29?: "maybeBoolean_29";

                /**
                 * Creates a new AttachedWebsite instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AttachedWebsite instance
                 */
                public static create(properties?: mediaitem.Metadata.ReferencedMessage.IAttachedWebsite): mediaitem.Metadata.ReferencedMessage.AttachedWebsite;

                /**
                 * Encodes the specified AttachedWebsite message. Does not implicitly {@link mediaitem.Metadata.ReferencedMessage.AttachedWebsite.verify|verify} messages.
                 * @param message AttachedWebsite message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mediaitem.Metadata.ReferencedMessage.IAttachedWebsite, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AttachedWebsite message, length delimited. Does not implicitly {@link mediaitem.Metadata.ReferencedMessage.AttachedWebsite.verify|verify} messages.
                 * @param message AttachedWebsite message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mediaitem.Metadata.ReferencedMessage.IAttachedWebsite, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AttachedWebsite message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AttachedWebsite
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediaitem.Metadata.ReferencedMessage.AttachedWebsite;

                /**
                 * Decodes an AttachedWebsite message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AttachedWebsite
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mediaitem.Metadata.ReferencedMessage.AttachedWebsite;

                /**
                 * Verifies an AttachedWebsite message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AttachedWebsite message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AttachedWebsite
                 */
                public static fromObject(object: { [k: string]: any }): mediaitem.Metadata.ReferencedMessage.AttachedWebsite;

                /**
                 * Creates a plain object from an AttachedWebsite message. Also converts values to other types if specified.
                 * @param message AttachedWebsite
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mediaitem.Metadata.ReferencedMessage.AttachedWebsite, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AttachedWebsite to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AttachedWebsite
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace AttachedWebsite {

                /** Properties of an AdditionalInfo. */
                interface IAdditionalInfo {

                    /** AdditionalInfo mentionedJid */
                    mentionedJid?: (string[]|null);
                }

                /** Represents an AdditionalInfo. */
                class AdditionalInfo implements IAdditionalInfo {

                    /**
                     * Constructs a new AdditionalInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: mediaitem.Metadata.ReferencedMessage.AttachedWebsite.IAdditionalInfo);

                    /** AdditionalInfo mentionedJid. */
                    public mentionedJid: string[];

                    /**
                     * Creates a new AdditionalInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AdditionalInfo instance
                     */
                    public static create(properties?: mediaitem.Metadata.ReferencedMessage.AttachedWebsite.IAdditionalInfo): mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo;

                    /**
                     * Encodes the specified AdditionalInfo message. Does not implicitly {@link mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo.verify|verify} messages.
                     * @param message AdditionalInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: mediaitem.Metadata.ReferencedMessage.AttachedWebsite.IAdditionalInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AdditionalInfo message, length delimited. Does not implicitly {@link mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo.verify|verify} messages.
                     * @param message AdditionalInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: mediaitem.Metadata.ReferencedMessage.AttachedWebsite.IAdditionalInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AdditionalInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AdditionalInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo;

                    /**
                     * Decodes an AdditionalInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AdditionalInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo;

                    /**
                     * Verifies an AdditionalInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AdditionalInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AdditionalInfo
                     */
                    public static fromObject(object: { [k: string]: any }): mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo;

                    /**
                     * Creates a plain object from an AdditionalInfo message. Also converts values to other types if specified.
                     * @param message AdditionalInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AdditionalInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AdditionalInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of an AttachedPDF. */
            interface IAttachedPDF {

                /** Format "https://mmg.whatsapp.net/ *.enc" */
                whatsappDownloadUrl?: (string|null);

                /** MIME-Type of this media */
                mimeType?: (string|null);

                /** Title of this media. Set e.g. for PDFs. */
                title?: (string|null);

                /** AttachedPDF unknownBytes_4 */
                unknownBytes_4?: (Uint8Array|null);

                /** AttachedPDF unknownNumber_5 */
                unknownNumber_5?: (number|null);

                /** AttachedPDF unknownNumber_6 */
                unknownNumber_6?: (number|null);

                /** AttachedPDF unknownNumber_7 */
                unknownNumber_7?: (number|null);

                /** File name of the PDF, including extension */
                fileName?: (string|null);

                /** AttachedPDF unknownBytes_9 */
                unknownBytes_9?: (Uint8Array|null);

                /**
                 * Another url to download the media from.
                 * Appears to hold same contents as the url
                 * at `whatsapp_download_url`, but has a significantly
                 * longer format and misses the domain.
                 * Format: "*.enc?*"
                 */
                whatsappDownloadUrlLong?: (string|null);

                /** Appears to be timestamp of the referenced media */
                mediaTimestampUnixMilliseconds?: (number|null);

                /** AttachedPDF maybeBoolean_12 */
                maybeBoolean_12?: (number|null);

                /** AttachedPDF unknownBytes_16 */
                unknownBytes_16?: (Uint8Array|null);
            }

            /** Represents an AttachedPDF. */
            class AttachedPDF implements IAttachedPDF {

                /**
                 * Constructs a new AttachedPDF.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mediaitem.Metadata.ReferencedMessage.IAttachedPDF);

                /** Format "https://mmg.whatsapp.net/ *.enc" */
                public whatsappDownloadUrl?: (string|null);

                /** MIME-Type of this media */
                public mimeType?: (string|null);

                /** Title of this media. Set e.g. for PDFs. */
                public title?: (string|null);

                /** AttachedPDF unknownBytes_4. */
                public unknownBytes_4?: (Uint8Array|null);

                /** AttachedPDF unknownNumber_5. */
                public unknownNumber_5?: (number|null);

                /** AttachedPDF unknownNumber_6. */
                public unknownNumber_6?: (number|null);

                /** AttachedPDF unknownNumber_7. */
                public unknownNumber_7?: (number|null);

                /** File name of the PDF, including extension */
                public fileName?: (string|null);

                /** AttachedPDF unknownBytes_9. */
                public unknownBytes_9?: (Uint8Array|null);

                /**
                 * Another url to download the media from.
                 * Appears to hold same contents as the url
                 * at `whatsapp_download_url`, but has a significantly
                 * longer format and misses the domain.
                 * Format: "*.enc?*"
                 */
                public whatsappDownloadUrlLong?: (string|null);

                /** Appears to be timestamp of the referenced media */
                public mediaTimestampUnixMilliseconds?: (number|null);

                /** AttachedPDF maybeBoolean_12. */
                public maybeBoolean_12?: (number|null);

                /** AttachedPDF unknownBytes_16. */
                public unknownBytes_16?: (Uint8Array|null);

                /** AttachedPDF _whatsappDownloadUrl. */
                public _whatsappDownloadUrl?: "whatsappDownloadUrl";

                /** AttachedPDF _mimeType. */
                public _mimeType?: "mimeType";

                /** AttachedPDF _title. */
                public _title?: "title";

                /** AttachedPDF _unknownBytes_4. */
                public _unknownBytes_4?: "unknownBytes_4";

                /** AttachedPDF _unknownNumber_5. */
                public _unknownNumber_5?: "unknownNumber_5";

                /** AttachedPDF _unknownNumber_6. */
                public _unknownNumber_6?: "unknownNumber_6";

                /** AttachedPDF _unknownNumber_7. */
                public _unknownNumber_7?: "unknownNumber_7";

                /** AttachedPDF _fileName. */
                public _fileName?: "fileName";

                /** AttachedPDF _unknownBytes_9. */
                public _unknownBytes_9?: "unknownBytes_9";

                /** AttachedPDF _whatsappDownloadUrlLong. */
                public _whatsappDownloadUrlLong?: "whatsappDownloadUrlLong";

                /** AttachedPDF _mediaTimestampUnixMilliseconds. */
                public _mediaTimestampUnixMilliseconds?: "mediaTimestampUnixMilliseconds";

                /** AttachedPDF _maybeBoolean_12. */
                public _maybeBoolean_12?: "maybeBoolean_12";

                /** AttachedPDF _unknownBytes_16. */
                public _unknownBytes_16?: "unknownBytes_16";

                /**
                 * Creates a new AttachedPDF instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AttachedPDF instance
                 */
                public static create(properties?: mediaitem.Metadata.ReferencedMessage.IAttachedPDF): mediaitem.Metadata.ReferencedMessage.AttachedPDF;

                /**
                 * Encodes the specified AttachedPDF message. Does not implicitly {@link mediaitem.Metadata.ReferencedMessage.AttachedPDF.verify|verify} messages.
                 * @param message AttachedPDF message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mediaitem.Metadata.ReferencedMessage.IAttachedPDF, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AttachedPDF message, length delimited. Does not implicitly {@link mediaitem.Metadata.ReferencedMessage.AttachedPDF.verify|verify} messages.
                 * @param message AttachedPDF message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mediaitem.Metadata.ReferencedMessage.IAttachedPDF, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AttachedPDF message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AttachedPDF
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediaitem.Metadata.ReferencedMessage.AttachedPDF;

                /**
                 * Decodes an AttachedPDF message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AttachedPDF
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mediaitem.Metadata.ReferencedMessage.AttachedPDF;

                /**
                 * Verifies an AttachedPDF message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AttachedPDF message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AttachedPDF
                 */
                public static fromObject(object: { [k: string]: any }): mediaitem.Metadata.ReferencedMessage.AttachedPDF;

                /**
                 * Creates a plain object from an AttachedPDF message. Also converts values to other types if specified.
                 * @param message AttachedPDF
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mediaitem.Metadata.ReferencedMessage.AttachedPDF, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AttachedPDF to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AttachedPDF
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a CachedPreviewMedia. */
        interface ICachedPreviewMedia {

            /** CachedPreviewMedia unkownNumber_3 */
            unkownNumber_3?: (number|null);

            /** CachedPreviewMedia unknownNumber_4 */
            unknownNumber_4?: (number|null);

            /**
             * Another url to download the media from.
             * Appears to hold same contents as the url
             * at `whatsapp_download_url`, but has a significantly
             * longer format and misses the domain.
             * Format: "*.enc?*"
             */
            whatsappDownloadUrlLong?: (string|null);

            /** CachedPreviewMedia unknownBytes_6 */
            unknownBytes_6?: (Uint8Array|null);

            /** CachedPreviewMedia unknownBytes_7 */
            unknownBytes_7?: (Uint8Array|null);

            /**
             * The local path (relative to /Message) of this preview
             * media.
             */
            localPath?: (string|null);

            /** CachedPreviewMedia timestampUnixMilliseconds */
            timestampUnixMilliseconds?: (number|null);
        }

        /** Represents a CachedPreviewMedia. */
        class CachedPreviewMedia implements ICachedPreviewMedia {

            /**
             * Constructs a new CachedPreviewMedia.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediaitem.Metadata.ICachedPreviewMedia);

            /** CachedPreviewMedia unkownNumber_3. */
            public unkownNumber_3?: (number|null);

            /** CachedPreviewMedia unknownNumber_4. */
            public unknownNumber_4?: (number|null);

            /**
             * Another url to download the media from.
             * Appears to hold same contents as the url
             * at `whatsapp_download_url`, but has a significantly
             * longer format and misses the domain.
             * Format: "*.enc?*"
             */
            public whatsappDownloadUrlLong?: (string|null);

            /** CachedPreviewMedia unknownBytes_6. */
            public unknownBytes_6?: (Uint8Array|null);

            /** CachedPreviewMedia unknownBytes_7. */
            public unknownBytes_7?: (Uint8Array|null);

            /**
             * The local path (relative to /Message) of this preview
             * media.
             */
            public localPath?: (string|null);

            /** CachedPreviewMedia timestampUnixMilliseconds. */
            public timestampUnixMilliseconds?: (number|null);

            /** CachedPreviewMedia _unkownNumber_3. */
            public _unkownNumber_3?: "unkownNumber_3";

            /** CachedPreviewMedia _unknownNumber_4. */
            public _unknownNumber_4?: "unknownNumber_4";

            /** CachedPreviewMedia _whatsappDownloadUrlLong. */
            public _whatsappDownloadUrlLong?: "whatsappDownloadUrlLong";

            /** CachedPreviewMedia _unknownBytes_6. */
            public _unknownBytes_6?: "unknownBytes_6";

            /** CachedPreviewMedia _unknownBytes_7. */
            public _unknownBytes_7?: "unknownBytes_7";

            /** CachedPreviewMedia _localPath. */
            public _localPath?: "localPath";

            /** CachedPreviewMedia _timestampUnixMilliseconds. */
            public _timestampUnixMilliseconds?: "timestampUnixMilliseconds";

            /**
             * Creates a new CachedPreviewMedia instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CachedPreviewMedia instance
             */
            public static create(properties?: mediaitem.Metadata.ICachedPreviewMedia): mediaitem.Metadata.CachedPreviewMedia;

            /**
             * Encodes the specified CachedPreviewMedia message. Does not implicitly {@link mediaitem.Metadata.CachedPreviewMedia.verify|verify} messages.
             * @param message CachedPreviewMedia message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mediaitem.Metadata.ICachedPreviewMedia, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CachedPreviewMedia message, length delimited. Does not implicitly {@link mediaitem.Metadata.CachedPreviewMedia.verify|verify} messages.
             * @param message CachedPreviewMedia message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mediaitem.Metadata.ICachedPreviewMedia, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CachedPreviewMedia message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CachedPreviewMedia
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediaitem.Metadata.CachedPreviewMedia;

            /**
             * Decodes a CachedPreviewMedia message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CachedPreviewMedia
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mediaitem.Metadata.CachedPreviewMedia;

            /**
             * Verifies a CachedPreviewMedia message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CachedPreviewMedia message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CachedPreviewMedia
             */
            public static fromObject(object: { [k: string]: any }): mediaitem.Metadata.CachedPreviewMedia;

            /**
             * Creates a plain object from a CachedPreviewMedia message. Also converts values to other types if specified.
             * @param message CachedPreviewMedia
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mediaitem.Metadata.CachedPreviewMedia, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CachedPreviewMedia to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CachedPreviewMedia
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an InfoForMessageToBusiness. */
        interface IInfoForMessageToBusiness {

            /** InfoForMessageToBusiness maybeBoolean_2 */
            maybeBoolean_2?: (number|null);
        }

        /** Represents an InfoForMessageToBusiness. */
        class InfoForMessageToBusiness implements IInfoForMessageToBusiness {

            /**
             * Constructs a new InfoForMessageToBusiness.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediaitem.Metadata.IInfoForMessageToBusiness);

            /** InfoForMessageToBusiness maybeBoolean_2. */
            public maybeBoolean_2?: (number|null);

            /** InfoForMessageToBusiness _maybeBoolean_2. */
            public _maybeBoolean_2?: "maybeBoolean_2";

            /**
             * Creates a new InfoForMessageToBusiness instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InfoForMessageToBusiness instance
             */
            public static create(properties?: mediaitem.Metadata.IInfoForMessageToBusiness): mediaitem.Metadata.InfoForMessageToBusiness;

            /**
             * Encodes the specified InfoForMessageToBusiness message. Does not implicitly {@link mediaitem.Metadata.InfoForMessageToBusiness.verify|verify} messages.
             * @param message InfoForMessageToBusiness message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mediaitem.Metadata.IInfoForMessageToBusiness, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InfoForMessageToBusiness message, length delimited. Does not implicitly {@link mediaitem.Metadata.InfoForMessageToBusiness.verify|verify} messages.
             * @param message InfoForMessageToBusiness message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mediaitem.Metadata.IInfoForMessageToBusiness, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InfoForMessageToBusiness message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InfoForMessageToBusiness
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediaitem.Metadata.InfoForMessageToBusiness;

            /**
             * Decodes an InfoForMessageToBusiness message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InfoForMessageToBusiness
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mediaitem.Metadata.InfoForMessageToBusiness;

            /**
             * Verifies an InfoForMessageToBusiness message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InfoForMessageToBusiness message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InfoForMessageToBusiness
             */
            public static fromObject(object: { [k: string]: any }): mediaitem.Metadata.InfoForMessageToBusiness;

            /**
             * Creates a plain object from an InfoForMessageToBusiness message. Also converts values to other types if specified.
             * @param message InfoForMessageToBusiness
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mediaitem.Metadata.InfoForMessageToBusiness, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InfoForMessageToBusiness to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for InfoForMessageToBusiness
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Sticker. */
        interface ISticker {

            /** Sticker maybeBoolean_3 */
            maybeBoolean_3?: (number|null);

            /** Sticker timestampUnixMilliseconds */
            timestampUnixMilliseconds?: (number|null);
        }

        /** Represents a Sticker. */
        class Sticker implements ISticker {

            /**
             * Constructs a new Sticker.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediaitem.Metadata.ISticker);

            /** Sticker maybeBoolean_3. */
            public maybeBoolean_3?: (number|null);

            /** Sticker timestampUnixMilliseconds. */
            public timestampUnixMilliseconds?: (number|null);

            /** Sticker _maybeBoolean_3. */
            public _maybeBoolean_3?: "maybeBoolean_3";

            /** Sticker _timestampUnixMilliseconds. */
            public _timestampUnixMilliseconds?: "timestampUnixMilliseconds";

            /**
             * Creates a new Sticker instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Sticker instance
             */
            public static create(properties?: mediaitem.Metadata.ISticker): mediaitem.Metadata.Sticker;

            /**
             * Encodes the specified Sticker message. Does not implicitly {@link mediaitem.Metadata.Sticker.verify|verify} messages.
             * @param message Sticker message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mediaitem.Metadata.ISticker, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Sticker message, length delimited. Does not implicitly {@link mediaitem.Metadata.Sticker.verify|verify} messages.
             * @param message Sticker message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mediaitem.Metadata.ISticker, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Sticker message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Sticker
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediaitem.Metadata.Sticker;

            /**
             * Decodes a Sticker message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Sticker
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mediaitem.Metadata.Sticker;

            /**
             * Verifies a Sticker message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Sticker message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Sticker
             */
            public static fromObject(object: { [k: string]: any }): mediaitem.Metadata.Sticker;

            /**
             * Creates a plain object from a Sticker message. Also converts values to other types if specified.
             * @param message Sticker
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mediaitem.Metadata.Sticker, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Sticker to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Sticker
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MaybeVoiceMemoInfo. */
        interface IMaybeVoiceMemoInfo {

            /** MaybeVoiceMemoInfo maybeString */
            maybeString?: (string|null);
        }

        /** Represents a MaybeVoiceMemoInfo. */
        class MaybeVoiceMemoInfo implements IMaybeVoiceMemoInfo {

            /**
             * Constructs a new MaybeVoiceMemoInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: mediaitem.Metadata.IMaybeVoiceMemoInfo);

            /** MaybeVoiceMemoInfo maybeString. */
            public maybeString?: (string|null);

            /** MaybeVoiceMemoInfo _maybeString. */
            public _maybeString?: "maybeString";

            /**
             * Creates a new MaybeVoiceMemoInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MaybeVoiceMemoInfo instance
             */
            public static create(properties?: mediaitem.Metadata.IMaybeVoiceMemoInfo): mediaitem.Metadata.MaybeVoiceMemoInfo;

            /**
             * Encodes the specified MaybeVoiceMemoInfo message. Does not implicitly {@link mediaitem.Metadata.MaybeVoiceMemoInfo.verify|verify} messages.
             * @param message MaybeVoiceMemoInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mediaitem.Metadata.IMaybeVoiceMemoInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MaybeVoiceMemoInfo message, length delimited. Does not implicitly {@link mediaitem.Metadata.MaybeVoiceMemoInfo.verify|verify} messages.
             * @param message MaybeVoiceMemoInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mediaitem.Metadata.IMaybeVoiceMemoInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MaybeVoiceMemoInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MaybeVoiceMemoInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mediaitem.Metadata.MaybeVoiceMemoInfo;

            /**
             * Decodes a MaybeVoiceMemoInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MaybeVoiceMemoInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mediaitem.Metadata.MaybeVoiceMemoInfo;

            /**
             * Verifies a MaybeVoiceMemoInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MaybeVoiceMemoInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MaybeVoiceMemoInfo
             */
            public static fromObject(object: { [k: string]: any }): mediaitem.Metadata.MaybeVoiceMemoInfo;

            /**
             * Creates a plain object from a MaybeVoiceMemoInfo message. Also converts values to other types if specified.
             * @param message MaybeVoiceMemoInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mediaitem.Metadata.MaybeVoiceMemoInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MaybeVoiceMemoInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MaybeVoiceMemoInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
