/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.mediaitem = (function() {
    
        /**
         * Namespace mediaitem.
         * @exports mediaitem
         * @namespace
         */
        var mediaitem = {};
    
        mediaitem.Metadata = (function() {
    
            /**
             * Properties of a Metadata.
             * @memberof mediaitem
             * @interface IMetadata
             * @property {string|null} [urlOriginal] The originally sent URL, including URL params.
             * @property {string|null} [urlLocationResolved] The resolved URL, following any redirects and possibly stripping tracking params. Sometimes empty string.
             * @property {string|null} [externalMediaPreviewTextCache] The preview text of this media (for external media, e.g. links)
             * @property {string|null} [whatsappMediaDownloadLocationEncrypted] The url of this media on WhatsApps servers (without domain). It is stored there encrypted.
             * Prepend this with "https://mmg.whatsapp.net/" to download the file.
             * @property {string|null} [referencedMessageStanzaId] The `stanza id` (column `ZSTANZAID`) of the message this is a rely/reference to.
             * @property {string|null} [referencedMessageSenderJid] The `JID` of the sender of the message this is a reply/reference to.
             * Apparently not set if referenced message was sent by self.
             * @property {string|null} [referencedMessageChatJid] The `JID` of the group of the message this is a reply/reference to.
             * Not set if this message is sent in the same group/chat as the message it is referencing.
             * @property {Array.<string>|null} [mentionedJid] `JID`s of people mentioned in the message
             * @property {number|null} [unknownNumber_11] Metadata unknownNumber_11
             * @property {number|null} [unknownMaybeBoolean_13] Metadata unknownMaybeBoolean_13
             * @property {number|null} [possiblyBool_15] Metadata possiblyBool_15
             * @property {number|null} [unknownMaybeBoolean_16] Metadata unknownMaybeBoolean_16
             * @property {number|null} [possiblyBool_17] Metadata possiblyBool_17
             * @property {mediaitem.Metadata.IReferencedMessage|null} [referencedMessage] Metadata referencedMessage
             * @property {number|null} [unknownMaybeBoolean_30] Metadata unknownMaybeBoolean_30
             * @property {mediaitem.Metadata.ISticker|null} [sticker] Metadata sticker
             * @property {number|null} [possiblyBool_46] Metadata possiblyBool_46
             * @property {mediaitem.Metadata.ICachedPreviewMedia|null} [cachedPreviewMedia] Metadata cachedPreviewMedia
             * @property {mediaitem.Metadata.IInfoForMessageToBusiness|null} [infoForMessageToBusiness] Metadata infoForMessageToBusiness
             * @property {number|null} [unknownNumber_50] Metadata unknownNumber_50
             * @property {mediaitem.Metadata.IMaybeVoiceMemoInfo|null} [maybeVoiceMemoInfo] Metadata maybeVoiceMemoInfo
             * @property {Uint8Array|null} [unknownBytes_68] Metadata unknownBytes_68
             * @property {number|null} [possiblyBool_70] Metadata possiblyBool_70
             * @property {number|null} [unknownNumber_72] Metadata unknownNumber_72
             * @property {string|null} [unkownString_73] Metadata unkownString_73
             */
    
            /**
             * Constructs a new Metadata.
             * @memberof mediaitem
             * @classdesc Represents a Metadata.
             * @implements IMetadata
             * @constructor
             * @param {mediaitem.IMetadata=} [properties] Properties to set
             */
            function Metadata(properties) {
                this.mentionedJid = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * The originally sent URL, including URL params.
             * @member {string|null|undefined} urlOriginal
             * @memberof mediaitem.Metadata
             * @instance
             */
            Metadata.prototype.urlOriginal = null;
    
            /**
             * The resolved URL, following any redirects and possibly stripping tracking params. Sometimes empty string.
             * @member {string|null|undefined} urlLocationResolved
             * @memberof mediaitem.Metadata
             * @instance
             */
            Metadata.prototype.urlLocationResolved = null;
    
            /**
             * The preview text of this media (for external media, e.g. links)
             * @member {string|null|undefined} externalMediaPreviewTextCache
             * @memberof mediaitem.Metadata
             * @instance
             */
            Metadata.prototype.externalMediaPreviewTextCache = null;
    
            /**
             * The url of this media on WhatsApps servers (without domain). It is stored there encrypted.
             * Prepend this with "https://mmg.whatsapp.net/" to download the file.
             * @member {string|null|undefined} whatsappMediaDownloadLocationEncrypted
             * @memberof mediaitem.Metadata
             * @instance
             */
            Metadata.prototype.whatsappMediaDownloadLocationEncrypted = null;
    
            /**
             * The `stanza id` (column `ZSTANZAID`) of the message this is a rely/reference to.
             * @member {string|null|undefined} referencedMessageStanzaId
             * @memberof mediaitem.Metadata
             * @instance
             */
            Metadata.prototype.referencedMessageStanzaId = null;
    
            /**
             * The `JID` of the sender of the message this is a reply/reference to.
             * Apparently not set if referenced message was sent by self.
             * @member {string|null|undefined} referencedMessageSenderJid
             * @memberof mediaitem.Metadata
             * @instance
             */
            Metadata.prototype.referencedMessageSenderJid = null;
    
            /**
             * The `JID` of the group of the message this is a reply/reference to.
             * Not set if this message is sent in the same group/chat as the message it is referencing.
             * @member {string|null|undefined} referencedMessageChatJid
             * @memberof mediaitem.Metadata
             * @instance
             */
            Metadata.prototype.referencedMessageChatJid = null;
    
            /**
             * `JID`s of people mentioned in the message
             * @member {Array.<string>} mentionedJid
             * @memberof mediaitem.Metadata
             * @instance
             */
            Metadata.prototype.mentionedJid = $util.emptyArray;
    
            /**
             * Metadata unknownNumber_11.
             * @member {number|null|undefined} unknownNumber_11
             * @memberof mediaitem.Metadata
             * @instance
             */
            Metadata.prototype.unknownNumber_11 = null;
    
            /**
             * Metadata unknownMaybeBoolean_13.
             * @member {number|null|undefined} unknownMaybeBoolean_13
             * @memberof mediaitem.Metadata
             * @instance
             */
            Metadata.prototype.unknownMaybeBoolean_13 = null;
    
            /**
             * Metadata possiblyBool_15.
             * @member {number|null|undefined} possiblyBool_15
             * @memberof mediaitem.Metadata
             * @instance
             */
            Metadata.prototype.possiblyBool_15 = null;
    
            /**
             * Metadata unknownMaybeBoolean_16.
             * @member {number|null|undefined} unknownMaybeBoolean_16
             * @memberof mediaitem.Metadata
             * @instance
             */
            Metadata.prototype.unknownMaybeBoolean_16 = null;
    
            /**
             * Metadata possiblyBool_17.
             * @member {number|null|undefined} possiblyBool_17
             * @memberof mediaitem.Metadata
             * @instance
             */
            Metadata.prototype.possiblyBool_17 = null;
    
            /**
             * Metadata referencedMessage.
             * @member {mediaitem.Metadata.IReferencedMessage|null|undefined} referencedMessage
             * @memberof mediaitem.Metadata
             * @instance
             */
            Metadata.prototype.referencedMessage = null;
    
            /**
             * Metadata unknownMaybeBoolean_30.
             * @member {number|null|undefined} unknownMaybeBoolean_30
             * @memberof mediaitem.Metadata
             * @instance
             */
            Metadata.prototype.unknownMaybeBoolean_30 = null;
    
            /**
             * Metadata sticker.
             * @member {mediaitem.Metadata.ISticker|null|undefined} sticker
             * @memberof mediaitem.Metadata
             * @instance
             */
            Metadata.prototype.sticker = null;
    
            /**
             * Metadata possiblyBool_46.
             * @member {number|null|undefined} possiblyBool_46
             * @memberof mediaitem.Metadata
             * @instance
             */
            Metadata.prototype.possiblyBool_46 = null;
    
            /**
             * Metadata cachedPreviewMedia.
             * @member {mediaitem.Metadata.ICachedPreviewMedia|null|undefined} cachedPreviewMedia
             * @memberof mediaitem.Metadata
             * @instance
             */
            Metadata.prototype.cachedPreviewMedia = null;
    
            /**
             * Metadata infoForMessageToBusiness.
             * @member {mediaitem.Metadata.IInfoForMessageToBusiness|null|undefined} infoForMessageToBusiness
             * @memberof mediaitem.Metadata
             * @instance
             */
            Metadata.prototype.infoForMessageToBusiness = null;
    
            /**
             * Metadata unknownNumber_50.
             * @member {number|null|undefined} unknownNumber_50
             * @memberof mediaitem.Metadata
             * @instance
             */
            Metadata.prototype.unknownNumber_50 = null;
    
            /**
             * Metadata maybeVoiceMemoInfo.
             * @member {mediaitem.Metadata.IMaybeVoiceMemoInfo|null|undefined} maybeVoiceMemoInfo
             * @memberof mediaitem.Metadata
             * @instance
             */
            Metadata.prototype.maybeVoiceMemoInfo = null;
    
            /**
             * Metadata unknownBytes_68.
             * @member {Uint8Array|null|undefined} unknownBytes_68
             * @memberof mediaitem.Metadata
             * @instance
             */
            Metadata.prototype.unknownBytes_68 = null;
    
            /**
             * Metadata possiblyBool_70.
             * @member {number|null|undefined} possiblyBool_70
             * @memberof mediaitem.Metadata
             * @instance
             */
            Metadata.prototype.possiblyBool_70 = null;
    
            /**
             * Metadata unknownNumber_72.
             * @member {number|null|undefined} unknownNumber_72
             * @memberof mediaitem.Metadata
             * @instance
             */
            Metadata.prototype.unknownNumber_72 = null;
    
            /**
             * Metadata unkownString_73.
             * @member {string|null|undefined} unkownString_73
             * @memberof mediaitem.Metadata
             * @instance
             */
            Metadata.prototype.unkownString_73 = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * Metadata _urlOriginal.
             * @member {"urlOriginal"|undefined} _urlOriginal
             * @memberof mediaitem.Metadata
             * @instance
             */
            Object.defineProperty(Metadata.prototype, "_urlOriginal", {
                get: $util.oneOfGetter($oneOfFields = ["urlOriginal"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Metadata _urlLocationResolved.
             * @member {"urlLocationResolved"|undefined} _urlLocationResolved
             * @memberof mediaitem.Metadata
             * @instance
             */
            Object.defineProperty(Metadata.prototype, "_urlLocationResolved", {
                get: $util.oneOfGetter($oneOfFields = ["urlLocationResolved"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Metadata _externalMediaPreviewTextCache.
             * @member {"externalMediaPreviewTextCache"|undefined} _externalMediaPreviewTextCache
             * @memberof mediaitem.Metadata
             * @instance
             */
            Object.defineProperty(Metadata.prototype, "_externalMediaPreviewTextCache", {
                get: $util.oneOfGetter($oneOfFields = ["externalMediaPreviewTextCache"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Metadata _whatsappMediaDownloadLocationEncrypted.
             * @member {"whatsappMediaDownloadLocationEncrypted"|undefined} _whatsappMediaDownloadLocationEncrypted
             * @memberof mediaitem.Metadata
             * @instance
             */
            Object.defineProperty(Metadata.prototype, "_whatsappMediaDownloadLocationEncrypted", {
                get: $util.oneOfGetter($oneOfFields = ["whatsappMediaDownloadLocationEncrypted"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Metadata _referencedMessageStanzaId.
             * @member {"referencedMessageStanzaId"|undefined} _referencedMessageStanzaId
             * @memberof mediaitem.Metadata
             * @instance
             */
            Object.defineProperty(Metadata.prototype, "_referencedMessageStanzaId", {
                get: $util.oneOfGetter($oneOfFields = ["referencedMessageStanzaId"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Metadata _referencedMessageSenderJid.
             * @member {"referencedMessageSenderJid"|undefined} _referencedMessageSenderJid
             * @memberof mediaitem.Metadata
             * @instance
             */
            Object.defineProperty(Metadata.prototype, "_referencedMessageSenderJid", {
                get: $util.oneOfGetter($oneOfFields = ["referencedMessageSenderJid"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Metadata _referencedMessageChatJid.
             * @member {"referencedMessageChatJid"|undefined} _referencedMessageChatJid
             * @memberof mediaitem.Metadata
             * @instance
             */
            Object.defineProperty(Metadata.prototype, "_referencedMessageChatJid", {
                get: $util.oneOfGetter($oneOfFields = ["referencedMessageChatJid"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Metadata _unknownNumber_11.
             * @member {"unknownNumber_11"|undefined} _unknownNumber_11
             * @memberof mediaitem.Metadata
             * @instance
             */
            Object.defineProperty(Metadata.prototype, "_unknownNumber_11", {
                get: $util.oneOfGetter($oneOfFields = ["unknownNumber_11"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Metadata _unknownMaybeBoolean_13.
             * @member {"unknownMaybeBoolean_13"|undefined} _unknownMaybeBoolean_13
             * @memberof mediaitem.Metadata
             * @instance
             */
            Object.defineProperty(Metadata.prototype, "_unknownMaybeBoolean_13", {
                get: $util.oneOfGetter($oneOfFields = ["unknownMaybeBoolean_13"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Metadata _possiblyBool_15.
             * @member {"possiblyBool_15"|undefined} _possiblyBool_15
             * @memberof mediaitem.Metadata
             * @instance
             */
            Object.defineProperty(Metadata.prototype, "_possiblyBool_15", {
                get: $util.oneOfGetter($oneOfFields = ["possiblyBool_15"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Metadata _unknownMaybeBoolean_16.
             * @member {"unknownMaybeBoolean_16"|undefined} _unknownMaybeBoolean_16
             * @memberof mediaitem.Metadata
             * @instance
             */
            Object.defineProperty(Metadata.prototype, "_unknownMaybeBoolean_16", {
                get: $util.oneOfGetter($oneOfFields = ["unknownMaybeBoolean_16"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Metadata _possiblyBool_17.
             * @member {"possiblyBool_17"|undefined} _possiblyBool_17
             * @memberof mediaitem.Metadata
             * @instance
             */
            Object.defineProperty(Metadata.prototype, "_possiblyBool_17", {
                get: $util.oneOfGetter($oneOfFields = ["possiblyBool_17"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Metadata _referencedMessage.
             * @member {"referencedMessage"|undefined} _referencedMessage
             * @memberof mediaitem.Metadata
             * @instance
             */
            Object.defineProperty(Metadata.prototype, "_referencedMessage", {
                get: $util.oneOfGetter($oneOfFields = ["referencedMessage"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Metadata _unknownMaybeBoolean_30.
             * @member {"unknownMaybeBoolean_30"|undefined} _unknownMaybeBoolean_30
             * @memberof mediaitem.Metadata
             * @instance
             */
            Object.defineProperty(Metadata.prototype, "_unknownMaybeBoolean_30", {
                get: $util.oneOfGetter($oneOfFields = ["unknownMaybeBoolean_30"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Metadata _sticker.
             * @member {"sticker"|undefined} _sticker
             * @memberof mediaitem.Metadata
             * @instance
             */
            Object.defineProperty(Metadata.prototype, "_sticker", {
                get: $util.oneOfGetter($oneOfFields = ["sticker"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Metadata _possiblyBool_46.
             * @member {"possiblyBool_46"|undefined} _possiblyBool_46
             * @memberof mediaitem.Metadata
             * @instance
             */
            Object.defineProperty(Metadata.prototype, "_possiblyBool_46", {
                get: $util.oneOfGetter($oneOfFields = ["possiblyBool_46"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Metadata _cachedPreviewMedia.
             * @member {"cachedPreviewMedia"|undefined} _cachedPreviewMedia
             * @memberof mediaitem.Metadata
             * @instance
             */
            Object.defineProperty(Metadata.prototype, "_cachedPreviewMedia", {
                get: $util.oneOfGetter($oneOfFields = ["cachedPreviewMedia"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Metadata _infoForMessageToBusiness.
             * @member {"infoForMessageToBusiness"|undefined} _infoForMessageToBusiness
             * @memberof mediaitem.Metadata
             * @instance
             */
            Object.defineProperty(Metadata.prototype, "_infoForMessageToBusiness", {
                get: $util.oneOfGetter($oneOfFields = ["infoForMessageToBusiness"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Metadata _unknownNumber_50.
             * @member {"unknownNumber_50"|undefined} _unknownNumber_50
             * @memberof mediaitem.Metadata
             * @instance
             */
            Object.defineProperty(Metadata.prototype, "_unknownNumber_50", {
                get: $util.oneOfGetter($oneOfFields = ["unknownNumber_50"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Metadata _maybeVoiceMemoInfo.
             * @member {"maybeVoiceMemoInfo"|undefined} _maybeVoiceMemoInfo
             * @memberof mediaitem.Metadata
             * @instance
             */
            Object.defineProperty(Metadata.prototype, "_maybeVoiceMemoInfo", {
                get: $util.oneOfGetter($oneOfFields = ["maybeVoiceMemoInfo"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Metadata _unknownBytes_68.
             * @member {"unknownBytes_68"|undefined} _unknownBytes_68
             * @memberof mediaitem.Metadata
             * @instance
             */
            Object.defineProperty(Metadata.prototype, "_unknownBytes_68", {
                get: $util.oneOfGetter($oneOfFields = ["unknownBytes_68"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Metadata _possiblyBool_70.
             * @member {"possiblyBool_70"|undefined} _possiblyBool_70
             * @memberof mediaitem.Metadata
             * @instance
             */
            Object.defineProperty(Metadata.prototype, "_possiblyBool_70", {
                get: $util.oneOfGetter($oneOfFields = ["possiblyBool_70"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Metadata _unknownNumber_72.
             * @member {"unknownNumber_72"|undefined} _unknownNumber_72
             * @memberof mediaitem.Metadata
             * @instance
             */
            Object.defineProperty(Metadata.prototype, "_unknownNumber_72", {
                get: $util.oneOfGetter($oneOfFields = ["unknownNumber_72"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Metadata _unkownString_73.
             * @member {"unkownString_73"|undefined} _unkownString_73
             * @memberof mediaitem.Metadata
             * @instance
             */
            Object.defineProperty(Metadata.prototype, "_unkownString_73", {
                get: $util.oneOfGetter($oneOfFields = ["unkownString_73"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new Metadata instance using the specified properties.
             * @function create
             * @memberof mediaitem.Metadata
             * @static
             * @param {mediaitem.IMetadata=} [properties] Properties to set
             * @returns {mediaitem.Metadata} Metadata instance
             */
            Metadata.create = function create(properties) {
                return new Metadata(properties);
            };
    
            /**
             * Encodes the specified Metadata message. Does not implicitly {@link mediaitem.Metadata.verify|verify} messages.
             * @function encode
             * @memberof mediaitem.Metadata
             * @static
             * @param {mediaitem.IMetadata} message Metadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Metadata.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.urlOriginal != null && Object.hasOwnProperty.call(message, "urlOriginal"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.urlOriginal);
                if (message.urlLocationResolved != null && Object.hasOwnProperty.call(message, "urlLocationResolved"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.urlLocationResolved);
                if (message.externalMediaPreviewTextCache != null && Object.hasOwnProperty.call(message, "externalMediaPreviewTextCache"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.externalMediaPreviewTextCache);
                if (message.whatsappMediaDownloadLocationEncrypted != null && Object.hasOwnProperty.call(message, "whatsappMediaDownloadLocationEncrypted"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.whatsappMediaDownloadLocationEncrypted);
                if (message.referencedMessageStanzaId != null && Object.hasOwnProperty.call(message, "referencedMessageStanzaId"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.referencedMessageStanzaId);
                if (message.referencedMessageSenderJid != null && Object.hasOwnProperty.call(message, "referencedMessageSenderJid"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.referencedMessageSenderJid);
                if (message.referencedMessageChatJid != null && Object.hasOwnProperty.call(message, "referencedMessageChatJid"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.referencedMessageChatJid);
                if (message.mentionedJid != null && message.mentionedJid.length)
                    for (var i = 0; i < message.mentionedJid.length; ++i)
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.mentionedJid[i]);
                if (message.unknownNumber_11 != null && Object.hasOwnProperty.call(message, "unknownNumber_11"))
                    writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.unknownNumber_11);
                if (message.unknownMaybeBoolean_13 != null && Object.hasOwnProperty.call(message, "unknownMaybeBoolean_13"))
                    writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.unknownMaybeBoolean_13);
                if (message.possiblyBool_15 != null && Object.hasOwnProperty.call(message, "possiblyBool_15"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.possiblyBool_15);
                if (message.unknownMaybeBoolean_16 != null && Object.hasOwnProperty.call(message, "unknownMaybeBoolean_16"))
                    writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.unknownMaybeBoolean_16);
                if (message.possiblyBool_17 != null && Object.hasOwnProperty.call(message, "possiblyBool_17"))
                    writer.uint32(/* id 17, wireType 0 =*/136).uint32(message.possiblyBool_17);
                if (message.referencedMessage != null && Object.hasOwnProperty.call(message, "referencedMessage"))
                    $root.mediaitem.Metadata.ReferencedMessage.encode(message.referencedMessage, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
                if (message.unknownMaybeBoolean_30 != null && Object.hasOwnProperty.call(message, "unknownMaybeBoolean_30"))
                    writer.uint32(/* id 30, wireType 0 =*/240).uint32(message.unknownMaybeBoolean_30);
                if (message.sticker != null && Object.hasOwnProperty.call(message, "sticker"))
                    $root.mediaitem.Metadata.Sticker.encode(message.sticker, writer.uint32(/* id 32, wireType 2 =*/258).fork()).ldelim();
                if (message.possiblyBool_46 != null && Object.hasOwnProperty.call(message, "possiblyBool_46"))
                    writer.uint32(/* id 46, wireType 0 =*/368).uint32(message.possiblyBool_46);
                if (message.cachedPreviewMedia != null && Object.hasOwnProperty.call(message, "cachedPreviewMedia"))
                    $root.mediaitem.Metadata.CachedPreviewMedia.encode(message.cachedPreviewMedia, writer.uint32(/* id 47, wireType 2 =*/378).fork()).ldelim();
                if (message.infoForMessageToBusiness != null && Object.hasOwnProperty.call(message, "infoForMessageToBusiness"))
                    $root.mediaitem.Metadata.InfoForMessageToBusiness.encode(message.infoForMessageToBusiness, writer.uint32(/* id 48, wireType 2 =*/386).fork()).ldelim();
                if (message.unknownNumber_50 != null && Object.hasOwnProperty.call(message, "unknownNumber_50"))
                    writer.uint32(/* id 50, wireType 0 =*/400).uint32(message.unknownNumber_50);
                if (message.maybeVoiceMemoInfo != null && Object.hasOwnProperty.call(message, "maybeVoiceMemoInfo"))
                    $root.mediaitem.Metadata.MaybeVoiceMemoInfo.encode(message.maybeVoiceMemoInfo, writer.uint32(/* id 55, wireType 2 =*/442).fork()).ldelim();
                if (message.unknownBytes_68 != null && Object.hasOwnProperty.call(message, "unknownBytes_68"))
                    writer.uint32(/* id 68, wireType 2 =*/546).bytes(message.unknownBytes_68);
                if (message.possiblyBool_70 != null && Object.hasOwnProperty.call(message, "possiblyBool_70"))
                    writer.uint32(/* id 70, wireType 0 =*/560).uint32(message.possiblyBool_70);
                if (message.unknownNumber_72 != null && Object.hasOwnProperty.call(message, "unknownNumber_72"))
                    writer.uint32(/* id 72, wireType 0 =*/576).uint32(message.unknownNumber_72);
                if (message.unkownString_73 != null && Object.hasOwnProperty.call(message, "unkownString_73"))
                    writer.uint32(/* id 73, wireType 2 =*/586).string(message.unkownString_73);
                return writer;
            };
    
            /**
             * Encodes the specified Metadata message, length delimited. Does not implicitly {@link mediaitem.Metadata.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mediaitem.Metadata
             * @static
             * @param {mediaitem.IMetadata} message Metadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Metadata.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Metadata message from the specified reader or buffer.
             * @function decode
             * @memberof mediaitem.Metadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mediaitem.Metadata} Metadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Metadata.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mediaitem.Metadata();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.urlOriginal = reader.string();
                            break;
                        }
                    case 2: {
                            message.urlLocationResolved = reader.string();
                            break;
                        }
                    case 3: {
                            message.externalMediaPreviewTextCache = reader.string();
                            break;
                        }
                    case 4: {
                            message.whatsappMediaDownloadLocationEncrypted = reader.string();
                            break;
                        }
                    case 5: {
                            message.referencedMessageStanzaId = reader.string();
                            break;
                        }
                    case 6: {
                            message.referencedMessageSenderJid = reader.string();
                            break;
                        }
                    case 7: {
                            message.referencedMessageChatJid = reader.string();
                            break;
                        }
                    case 8: {
                            if (!(message.mentionedJid && message.mentionedJid.length))
                                message.mentionedJid = [];
                            message.mentionedJid.push(reader.string());
                            break;
                        }
                    case 11: {
                            message.unknownNumber_11 = reader.uint32();
                            break;
                        }
                    case 13: {
                            message.unknownMaybeBoolean_13 = reader.uint32();
                            break;
                        }
                    case 15: {
                            message.possiblyBool_15 = reader.uint32();
                            break;
                        }
                    case 16: {
                            message.unknownMaybeBoolean_16 = reader.uint32();
                            break;
                        }
                    case 17: {
                            message.possiblyBool_17 = reader.uint32();
                            break;
                        }
                    case 19: {
                            message.referencedMessage = $root.mediaitem.Metadata.ReferencedMessage.decode(reader, reader.uint32());
                            break;
                        }
                    case 30: {
                            message.unknownMaybeBoolean_30 = reader.uint32();
                            break;
                        }
                    case 32: {
                            message.sticker = $root.mediaitem.Metadata.Sticker.decode(reader, reader.uint32());
                            break;
                        }
                    case 46: {
                            message.possiblyBool_46 = reader.uint32();
                            break;
                        }
                    case 47: {
                            message.cachedPreviewMedia = $root.mediaitem.Metadata.CachedPreviewMedia.decode(reader, reader.uint32());
                            break;
                        }
                    case 48: {
                            message.infoForMessageToBusiness = $root.mediaitem.Metadata.InfoForMessageToBusiness.decode(reader, reader.uint32());
                            break;
                        }
                    case 50: {
                            message.unknownNumber_50 = reader.uint32();
                            break;
                        }
                    case 55: {
                            message.maybeVoiceMemoInfo = $root.mediaitem.Metadata.MaybeVoiceMemoInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 68: {
                            message.unknownBytes_68 = reader.bytes();
                            break;
                        }
                    case 70: {
                            message.possiblyBool_70 = reader.uint32();
                            break;
                        }
                    case 72: {
                            message.unknownNumber_72 = reader.uint32();
                            break;
                        }
                    case 73: {
                            message.unkownString_73 = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Metadata message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mediaitem.Metadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mediaitem.Metadata} Metadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Metadata.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Metadata message.
             * @function verify
             * @memberof mediaitem.Metadata
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Metadata.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.urlOriginal != null && message.hasOwnProperty("urlOriginal")) {
                    properties._urlOriginal = 1;
                    if (!$util.isString(message.urlOriginal))
                        return "urlOriginal: string expected";
                }
                if (message.urlLocationResolved != null && message.hasOwnProperty("urlLocationResolved")) {
                    properties._urlLocationResolved = 1;
                    if (!$util.isString(message.urlLocationResolved))
                        return "urlLocationResolved: string expected";
                }
                if (message.externalMediaPreviewTextCache != null && message.hasOwnProperty("externalMediaPreviewTextCache")) {
                    properties._externalMediaPreviewTextCache = 1;
                    if (!$util.isString(message.externalMediaPreviewTextCache))
                        return "externalMediaPreviewTextCache: string expected";
                }
                if (message.whatsappMediaDownloadLocationEncrypted != null && message.hasOwnProperty("whatsappMediaDownloadLocationEncrypted")) {
                    properties._whatsappMediaDownloadLocationEncrypted = 1;
                    if (!$util.isString(message.whatsappMediaDownloadLocationEncrypted))
                        return "whatsappMediaDownloadLocationEncrypted: string expected";
                }
                if (message.referencedMessageStanzaId != null && message.hasOwnProperty("referencedMessageStanzaId")) {
                    properties._referencedMessageStanzaId = 1;
                    if (!$util.isString(message.referencedMessageStanzaId))
                        return "referencedMessageStanzaId: string expected";
                }
                if (message.referencedMessageSenderJid != null && message.hasOwnProperty("referencedMessageSenderJid")) {
                    properties._referencedMessageSenderJid = 1;
                    if (!$util.isString(message.referencedMessageSenderJid))
                        return "referencedMessageSenderJid: string expected";
                }
                if (message.referencedMessageChatJid != null && message.hasOwnProperty("referencedMessageChatJid")) {
                    properties._referencedMessageChatJid = 1;
                    if (!$util.isString(message.referencedMessageChatJid))
                        return "referencedMessageChatJid: string expected";
                }
                if (message.mentionedJid != null && message.hasOwnProperty("mentionedJid")) {
                    if (!Array.isArray(message.mentionedJid))
                        return "mentionedJid: array expected";
                    for (var i = 0; i < message.mentionedJid.length; ++i)
                        if (!$util.isString(message.mentionedJid[i]))
                            return "mentionedJid: string[] expected";
                }
                if (message.unknownNumber_11 != null && message.hasOwnProperty("unknownNumber_11")) {
                    properties._unknownNumber_11 = 1;
                    if (!$util.isInteger(message.unknownNumber_11))
                        return "unknownNumber_11: integer expected";
                }
                if (message.unknownMaybeBoolean_13 != null && message.hasOwnProperty("unknownMaybeBoolean_13")) {
                    properties._unknownMaybeBoolean_13 = 1;
                    if (!$util.isInteger(message.unknownMaybeBoolean_13))
                        return "unknownMaybeBoolean_13: integer expected";
                }
                if (message.possiblyBool_15 != null && message.hasOwnProperty("possiblyBool_15")) {
                    properties._possiblyBool_15 = 1;
                    if (!$util.isInteger(message.possiblyBool_15))
                        return "possiblyBool_15: integer expected";
                }
                if (message.unknownMaybeBoolean_16 != null && message.hasOwnProperty("unknownMaybeBoolean_16")) {
                    properties._unknownMaybeBoolean_16 = 1;
                    if (!$util.isInteger(message.unknownMaybeBoolean_16))
                        return "unknownMaybeBoolean_16: integer expected";
                }
                if (message.possiblyBool_17 != null && message.hasOwnProperty("possiblyBool_17")) {
                    properties._possiblyBool_17 = 1;
                    if (!$util.isInteger(message.possiblyBool_17))
                        return "possiblyBool_17: integer expected";
                }
                if (message.referencedMessage != null && message.hasOwnProperty("referencedMessage")) {
                    properties._referencedMessage = 1;
                    {
                        var error = $root.mediaitem.Metadata.ReferencedMessage.verify(message.referencedMessage);
                        if (error)
                            return "referencedMessage." + error;
                    }
                }
                if (message.unknownMaybeBoolean_30 != null && message.hasOwnProperty("unknownMaybeBoolean_30")) {
                    properties._unknownMaybeBoolean_30 = 1;
                    if (!$util.isInteger(message.unknownMaybeBoolean_30))
                        return "unknownMaybeBoolean_30: integer expected";
                }
                if (message.sticker != null && message.hasOwnProperty("sticker")) {
                    properties._sticker = 1;
                    {
                        var error = $root.mediaitem.Metadata.Sticker.verify(message.sticker);
                        if (error)
                            return "sticker." + error;
                    }
                }
                if (message.possiblyBool_46 != null && message.hasOwnProperty("possiblyBool_46")) {
                    properties._possiblyBool_46 = 1;
                    if (!$util.isInteger(message.possiblyBool_46))
                        return "possiblyBool_46: integer expected";
                }
                if (message.cachedPreviewMedia != null && message.hasOwnProperty("cachedPreviewMedia")) {
                    properties._cachedPreviewMedia = 1;
                    {
                        var error = $root.mediaitem.Metadata.CachedPreviewMedia.verify(message.cachedPreviewMedia);
                        if (error)
                            return "cachedPreviewMedia." + error;
                    }
                }
                if (message.infoForMessageToBusiness != null && message.hasOwnProperty("infoForMessageToBusiness")) {
                    properties._infoForMessageToBusiness = 1;
                    {
                        var error = $root.mediaitem.Metadata.InfoForMessageToBusiness.verify(message.infoForMessageToBusiness);
                        if (error)
                            return "infoForMessageToBusiness." + error;
                    }
                }
                if (message.unknownNumber_50 != null && message.hasOwnProperty("unknownNumber_50")) {
                    properties._unknownNumber_50 = 1;
                    if (!$util.isInteger(message.unknownNumber_50))
                        return "unknownNumber_50: integer expected";
                }
                if (message.maybeVoiceMemoInfo != null && message.hasOwnProperty("maybeVoiceMemoInfo")) {
                    properties._maybeVoiceMemoInfo = 1;
                    {
                        var error = $root.mediaitem.Metadata.MaybeVoiceMemoInfo.verify(message.maybeVoiceMemoInfo);
                        if (error)
                            return "maybeVoiceMemoInfo." + error;
                    }
                }
                if (message.unknownBytes_68 != null && message.hasOwnProperty("unknownBytes_68")) {
                    properties._unknownBytes_68 = 1;
                    if (!(message.unknownBytes_68 && typeof message.unknownBytes_68.length === "number" || $util.isString(message.unknownBytes_68)))
                        return "unknownBytes_68: buffer expected";
                }
                if (message.possiblyBool_70 != null && message.hasOwnProperty("possiblyBool_70")) {
                    properties._possiblyBool_70 = 1;
                    if (!$util.isInteger(message.possiblyBool_70))
                        return "possiblyBool_70: integer expected";
                }
                if (message.unknownNumber_72 != null && message.hasOwnProperty("unknownNumber_72")) {
                    properties._unknownNumber_72 = 1;
                    if (!$util.isInteger(message.unknownNumber_72))
                        return "unknownNumber_72: integer expected";
                }
                if (message.unkownString_73 != null && message.hasOwnProperty("unkownString_73")) {
                    properties._unkownString_73 = 1;
                    if (!$util.isString(message.unkownString_73))
                        return "unkownString_73: string expected";
                }
                return null;
            };
    
            /**
             * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mediaitem.Metadata
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mediaitem.Metadata} Metadata
             */
            Metadata.fromObject = function fromObject(object) {
                if (object instanceof $root.mediaitem.Metadata)
                    return object;
                var message = new $root.mediaitem.Metadata();
                if (object.urlOriginal != null)
                    message.urlOriginal = String(object.urlOriginal);
                if (object.urlLocationResolved != null)
                    message.urlLocationResolved = String(object.urlLocationResolved);
                if (object.externalMediaPreviewTextCache != null)
                    message.externalMediaPreviewTextCache = String(object.externalMediaPreviewTextCache);
                if (object.whatsappMediaDownloadLocationEncrypted != null)
                    message.whatsappMediaDownloadLocationEncrypted = String(object.whatsappMediaDownloadLocationEncrypted);
                if (object.referencedMessageStanzaId != null)
                    message.referencedMessageStanzaId = String(object.referencedMessageStanzaId);
                if (object.referencedMessageSenderJid != null)
                    message.referencedMessageSenderJid = String(object.referencedMessageSenderJid);
                if (object.referencedMessageChatJid != null)
                    message.referencedMessageChatJid = String(object.referencedMessageChatJid);
                if (object.mentionedJid) {
                    if (!Array.isArray(object.mentionedJid))
                        throw TypeError(".mediaitem.Metadata.mentionedJid: array expected");
                    message.mentionedJid = [];
                    for (var i = 0; i < object.mentionedJid.length; ++i)
                        message.mentionedJid[i] = String(object.mentionedJid[i]);
                }
                if (object.unknownNumber_11 != null)
                    message.unknownNumber_11 = object.unknownNumber_11 >>> 0;
                if (object.unknownMaybeBoolean_13 != null)
                    message.unknownMaybeBoolean_13 = object.unknownMaybeBoolean_13 >>> 0;
                if (object.possiblyBool_15 != null)
                    message.possiblyBool_15 = object.possiblyBool_15 >>> 0;
                if (object.unknownMaybeBoolean_16 != null)
                    message.unknownMaybeBoolean_16 = object.unknownMaybeBoolean_16 >>> 0;
                if (object.possiblyBool_17 != null)
                    message.possiblyBool_17 = object.possiblyBool_17 >>> 0;
                if (object.referencedMessage != null) {
                    if (typeof object.referencedMessage !== "object")
                        throw TypeError(".mediaitem.Metadata.referencedMessage: object expected");
                    message.referencedMessage = $root.mediaitem.Metadata.ReferencedMessage.fromObject(object.referencedMessage);
                }
                if (object.unknownMaybeBoolean_30 != null)
                    message.unknownMaybeBoolean_30 = object.unknownMaybeBoolean_30 >>> 0;
                if (object.sticker != null) {
                    if (typeof object.sticker !== "object")
                        throw TypeError(".mediaitem.Metadata.sticker: object expected");
                    message.sticker = $root.mediaitem.Metadata.Sticker.fromObject(object.sticker);
                }
                if (object.possiblyBool_46 != null)
                    message.possiblyBool_46 = object.possiblyBool_46 >>> 0;
                if (object.cachedPreviewMedia != null) {
                    if (typeof object.cachedPreviewMedia !== "object")
                        throw TypeError(".mediaitem.Metadata.cachedPreviewMedia: object expected");
                    message.cachedPreviewMedia = $root.mediaitem.Metadata.CachedPreviewMedia.fromObject(object.cachedPreviewMedia);
                }
                if (object.infoForMessageToBusiness != null) {
                    if (typeof object.infoForMessageToBusiness !== "object")
                        throw TypeError(".mediaitem.Metadata.infoForMessageToBusiness: object expected");
                    message.infoForMessageToBusiness = $root.mediaitem.Metadata.InfoForMessageToBusiness.fromObject(object.infoForMessageToBusiness);
                }
                if (object.unknownNumber_50 != null)
                    message.unknownNumber_50 = object.unknownNumber_50 >>> 0;
                if (object.maybeVoiceMemoInfo != null) {
                    if (typeof object.maybeVoiceMemoInfo !== "object")
                        throw TypeError(".mediaitem.Metadata.maybeVoiceMemoInfo: object expected");
                    message.maybeVoiceMemoInfo = $root.mediaitem.Metadata.MaybeVoiceMemoInfo.fromObject(object.maybeVoiceMemoInfo);
                }
                if (object.unknownBytes_68 != null)
                    if (typeof object.unknownBytes_68 === "string")
                        $util.base64.decode(object.unknownBytes_68, message.unknownBytes_68 = $util.newBuffer($util.base64.length(object.unknownBytes_68)), 0);
                    else if (object.unknownBytes_68.length >= 0)
                        message.unknownBytes_68 = object.unknownBytes_68;
                if (object.possiblyBool_70 != null)
                    message.possiblyBool_70 = object.possiblyBool_70 >>> 0;
                if (object.unknownNumber_72 != null)
                    message.unknownNumber_72 = object.unknownNumber_72 >>> 0;
                if (object.unkownString_73 != null)
                    message.unkownString_73 = String(object.unkownString_73);
                return message;
            };
    
            /**
             * Creates a plain object from a Metadata message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mediaitem.Metadata
             * @static
             * @param {mediaitem.Metadata} message Metadata
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Metadata.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.mentionedJid = [];
                if (message.urlOriginal != null && message.hasOwnProperty("urlOriginal")) {
                    object.urlOriginal = message.urlOriginal;
                    if (options.oneofs)
                        object._urlOriginal = "urlOriginal";
                }
                if (message.urlLocationResolved != null && message.hasOwnProperty("urlLocationResolved")) {
                    object.urlLocationResolved = message.urlLocationResolved;
                    if (options.oneofs)
                        object._urlLocationResolved = "urlLocationResolved";
                }
                if (message.externalMediaPreviewTextCache != null && message.hasOwnProperty("externalMediaPreviewTextCache")) {
                    object.externalMediaPreviewTextCache = message.externalMediaPreviewTextCache;
                    if (options.oneofs)
                        object._externalMediaPreviewTextCache = "externalMediaPreviewTextCache";
                }
                if (message.whatsappMediaDownloadLocationEncrypted != null && message.hasOwnProperty("whatsappMediaDownloadLocationEncrypted")) {
                    object.whatsappMediaDownloadLocationEncrypted = message.whatsappMediaDownloadLocationEncrypted;
                    if (options.oneofs)
                        object._whatsappMediaDownloadLocationEncrypted = "whatsappMediaDownloadLocationEncrypted";
                }
                if (message.referencedMessageStanzaId != null && message.hasOwnProperty("referencedMessageStanzaId")) {
                    object.referencedMessageStanzaId = message.referencedMessageStanzaId;
                    if (options.oneofs)
                        object._referencedMessageStanzaId = "referencedMessageStanzaId";
                }
                if (message.referencedMessageSenderJid != null && message.hasOwnProperty("referencedMessageSenderJid")) {
                    object.referencedMessageSenderJid = message.referencedMessageSenderJid;
                    if (options.oneofs)
                        object._referencedMessageSenderJid = "referencedMessageSenderJid";
                }
                if (message.referencedMessageChatJid != null && message.hasOwnProperty("referencedMessageChatJid")) {
                    object.referencedMessageChatJid = message.referencedMessageChatJid;
                    if (options.oneofs)
                        object._referencedMessageChatJid = "referencedMessageChatJid";
                }
                if (message.mentionedJid && message.mentionedJid.length) {
                    object.mentionedJid = [];
                    for (var j = 0; j < message.mentionedJid.length; ++j)
                        object.mentionedJid[j] = message.mentionedJid[j];
                }
                if (message.unknownNumber_11 != null && message.hasOwnProperty("unknownNumber_11")) {
                    object.unknownNumber_11 = message.unknownNumber_11;
                    if (options.oneofs)
                        object._unknownNumber_11 = "unknownNumber_11";
                }
                if (message.unknownMaybeBoolean_13 != null && message.hasOwnProperty("unknownMaybeBoolean_13")) {
                    object.unknownMaybeBoolean_13 = message.unknownMaybeBoolean_13;
                    if (options.oneofs)
                        object._unknownMaybeBoolean_13 = "unknownMaybeBoolean_13";
                }
                if (message.possiblyBool_15 != null && message.hasOwnProperty("possiblyBool_15")) {
                    object.possiblyBool_15 = message.possiblyBool_15;
                    if (options.oneofs)
                        object._possiblyBool_15 = "possiblyBool_15";
                }
                if (message.unknownMaybeBoolean_16 != null && message.hasOwnProperty("unknownMaybeBoolean_16")) {
                    object.unknownMaybeBoolean_16 = message.unknownMaybeBoolean_16;
                    if (options.oneofs)
                        object._unknownMaybeBoolean_16 = "unknownMaybeBoolean_16";
                }
                if (message.possiblyBool_17 != null && message.hasOwnProperty("possiblyBool_17")) {
                    object.possiblyBool_17 = message.possiblyBool_17;
                    if (options.oneofs)
                        object._possiblyBool_17 = "possiblyBool_17";
                }
                if (message.referencedMessage != null && message.hasOwnProperty("referencedMessage")) {
                    object.referencedMessage = $root.mediaitem.Metadata.ReferencedMessage.toObject(message.referencedMessage, options);
                    if (options.oneofs)
                        object._referencedMessage = "referencedMessage";
                }
                if (message.unknownMaybeBoolean_30 != null && message.hasOwnProperty("unknownMaybeBoolean_30")) {
                    object.unknownMaybeBoolean_30 = message.unknownMaybeBoolean_30;
                    if (options.oneofs)
                        object._unknownMaybeBoolean_30 = "unknownMaybeBoolean_30";
                }
                if (message.sticker != null && message.hasOwnProperty("sticker")) {
                    object.sticker = $root.mediaitem.Metadata.Sticker.toObject(message.sticker, options);
                    if (options.oneofs)
                        object._sticker = "sticker";
                }
                if (message.possiblyBool_46 != null && message.hasOwnProperty("possiblyBool_46")) {
                    object.possiblyBool_46 = message.possiblyBool_46;
                    if (options.oneofs)
                        object._possiblyBool_46 = "possiblyBool_46";
                }
                if (message.cachedPreviewMedia != null && message.hasOwnProperty("cachedPreviewMedia")) {
                    object.cachedPreviewMedia = $root.mediaitem.Metadata.CachedPreviewMedia.toObject(message.cachedPreviewMedia, options);
                    if (options.oneofs)
                        object._cachedPreviewMedia = "cachedPreviewMedia";
                }
                if (message.infoForMessageToBusiness != null && message.hasOwnProperty("infoForMessageToBusiness")) {
                    object.infoForMessageToBusiness = $root.mediaitem.Metadata.InfoForMessageToBusiness.toObject(message.infoForMessageToBusiness, options);
                    if (options.oneofs)
                        object._infoForMessageToBusiness = "infoForMessageToBusiness";
                }
                if (message.unknownNumber_50 != null && message.hasOwnProperty("unknownNumber_50")) {
                    object.unknownNumber_50 = message.unknownNumber_50;
                    if (options.oneofs)
                        object._unknownNumber_50 = "unknownNumber_50";
                }
                if (message.maybeVoiceMemoInfo != null && message.hasOwnProperty("maybeVoiceMemoInfo")) {
                    object.maybeVoiceMemoInfo = $root.mediaitem.Metadata.MaybeVoiceMemoInfo.toObject(message.maybeVoiceMemoInfo, options);
                    if (options.oneofs)
                        object._maybeVoiceMemoInfo = "maybeVoiceMemoInfo";
                }
                if (message.unknownBytes_68 != null && message.hasOwnProperty("unknownBytes_68")) {
                    object.unknownBytes_68 = options.bytes === String ? $util.base64.encode(message.unknownBytes_68, 0, message.unknownBytes_68.length) : options.bytes === Array ? Array.prototype.slice.call(message.unknownBytes_68) : message.unknownBytes_68;
                    if (options.oneofs)
                        object._unknownBytes_68 = "unknownBytes_68";
                }
                if (message.possiblyBool_70 != null && message.hasOwnProperty("possiblyBool_70")) {
                    object.possiblyBool_70 = message.possiblyBool_70;
                    if (options.oneofs)
                        object._possiblyBool_70 = "possiblyBool_70";
                }
                if (message.unknownNumber_72 != null && message.hasOwnProperty("unknownNumber_72")) {
                    object.unknownNumber_72 = message.unknownNumber_72;
                    if (options.oneofs)
                        object._unknownNumber_72 = "unknownNumber_72";
                }
                if (message.unkownString_73 != null && message.hasOwnProperty("unkownString_73")) {
                    object.unkownString_73 = message.unkownString_73;
                    if (options.oneofs)
                        object._unkownString_73 = "unkownString_73";
                }
                return object;
            };
    
            /**
             * Converts this Metadata to JSON.
             * @function toJSON
             * @memberof mediaitem.Metadata
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Metadata.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for Metadata
             * @function getTypeUrl
             * @memberof mediaitem.Metadata
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Metadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/mediaitem.Metadata";
            };
    
            Metadata.ReferencedMessage = (function() {
    
                /**
                 * Properties of a ReferencedMessage.
                 * @memberof mediaitem.Metadata
                 * @interface IReferencedMessage
                 * @property {string|null} [text] ReferencedMessage text
                 * @property {mediaitem.Metadata.ReferencedMessage.IAttachedMedia|null} [attachedMedia] ReferencedMessage attachedMedia
                 * @property {mediaitem.Metadata.ReferencedMessage.IAttachedWebsite|null} [attachedWebsite] ReferencedMessage attachedWebsite
                 * @property {mediaitem.Metadata.ReferencedMessage.IAttachedPDF|null} [attachedPdf] ReferencedMessage attachedPdf
                 */
    
                /**
                 * Constructs a new ReferencedMessage.
                 * @memberof mediaitem.Metadata
                 * @classdesc Represents a ReferencedMessage.
                 * @implements IReferencedMessage
                 * @constructor
                 * @param {mediaitem.Metadata.IReferencedMessage=} [properties] Properties to set
                 */
                function ReferencedMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ReferencedMessage text.
                 * @member {string|null|undefined} text
                 * @memberof mediaitem.Metadata.ReferencedMessage
                 * @instance
                 */
                ReferencedMessage.prototype.text = null;
    
                /**
                 * ReferencedMessage attachedMedia.
                 * @member {mediaitem.Metadata.ReferencedMessage.IAttachedMedia|null|undefined} attachedMedia
                 * @memberof mediaitem.Metadata.ReferencedMessage
                 * @instance
                 */
                ReferencedMessage.prototype.attachedMedia = null;
    
                /**
                 * ReferencedMessage attachedWebsite.
                 * @member {mediaitem.Metadata.ReferencedMessage.IAttachedWebsite|null|undefined} attachedWebsite
                 * @memberof mediaitem.Metadata.ReferencedMessage
                 * @instance
                 */
                ReferencedMessage.prototype.attachedWebsite = null;
    
                /**
                 * ReferencedMessage attachedPdf.
                 * @member {mediaitem.Metadata.ReferencedMessage.IAttachedPDF|null|undefined} attachedPdf
                 * @memberof mediaitem.Metadata.ReferencedMessage
                 * @instance
                 */
                ReferencedMessage.prototype.attachedPdf = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * ReferencedMessage _text.
                 * @member {"text"|undefined} _text
                 * @memberof mediaitem.Metadata.ReferencedMessage
                 * @instance
                 */
                Object.defineProperty(ReferencedMessage.prototype, "_text", {
                    get: $util.oneOfGetter($oneOfFields = ["text"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * ReferencedMessage _attachedMedia.
                 * @member {"attachedMedia"|undefined} _attachedMedia
                 * @memberof mediaitem.Metadata.ReferencedMessage
                 * @instance
                 */
                Object.defineProperty(ReferencedMessage.prototype, "_attachedMedia", {
                    get: $util.oneOfGetter($oneOfFields = ["attachedMedia"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * ReferencedMessage _attachedWebsite.
                 * @member {"attachedWebsite"|undefined} _attachedWebsite
                 * @memberof mediaitem.Metadata.ReferencedMessage
                 * @instance
                 */
                Object.defineProperty(ReferencedMessage.prototype, "_attachedWebsite", {
                    get: $util.oneOfGetter($oneOfFields = ["attachedWebsite"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * ReferencedMessage _attachedPdf.
                 * @member {"attachedPdf"|undefined} _attachedPdf
                 * @memberof mediaitem.Metadata.ReferencedMessage
                 * @instance
                 */
                Object.defineProperty(ReferencedMessage.prototype, "_attachedPdf", {
                    get: $util.oneOfGetter($oneOfFields = ["attachedPdf"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new ReferencedMessage instance using the specified properties.
                 * @function create
                 * @memberof mediaitem.Metadata.ReferencedMessage
                 * @static
                 * @param {mediaitem.Metadata.IReferencedMessage=} [properties] Properties to set
                 * @returns {mediaitem.Metadata.ReferencedMessage} ReferencedMessage instance
                 */
                ReferencedMessage.create = function create(properties) {
                    return new ReferencedMessage(properties);
                };
    
                /**
                 * Encodes the specified ReferencedMessage message. Does not implicitly {@link mediaitem.Metadata.ReferencedMessage.verify|verify} messages.
                 * @function encode
                 * @memberof mediaitem.Metadata.ReferencedMessage
                 * @static
                 * @param {mediaitem.Metadata.IReferencedMessage} message ReferencedMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReferencedMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
                    if (message.attachedMedia != null && Object.hasOwnProperty.call(message, "attachedMedia"))
                        $root.mediaitem.Metadata.ReferencedMessage.AttachedMedia.encode(message.attachedMedia, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.attachedWebsite != null && Object.hasOwnProperty.call(message, "attachedWebsite"))
                        $root.mediaitem.Metadata.ReferencedMessage.AttachedWebsite.encode(message.attachedWebsite, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.attachedPdf != null && Object.hasOwnProperty.call(message, "attachedPdf"))
                        $root.mediaitem.Metadata.ReferencedMessage.AttachedPDF.encode(message.attachedPdf, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ReferencedMessage message, length delimited. Does not implicitly {@link mediaitem.Metadata.ReferencedMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof mediaitem.Metadata.ReferencedMessage
                 * @static
                 * @param {mediaitem.Metadata.IReferencedMessage} message ReferencedMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReferencedMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ReferencedMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof mediaitem.Metadata.ReferencedMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {mediaitem.Metadata.ReferencedMessage} ReferencedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReferencedMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mediaitem.Metadata.ReferencedMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.text = reader.string();
                                break;
                            }
                        case 3: {
                                message.attachedMedia = $root.mediaitem.Metadata.ReferencedMessage.AttachedMedia.decode(reader, reader.uint32());
                                break;
                            }
                        case 6: {
                                message.attachedWebsite = $root.mediaitem.Metadata.ReferencedMessage.AttachedWebsite.decode(reader, reader.uint32());
                                break;
                            }
                        case 7: {
                                message.attachedPdf = $root.mediaitem.Metadata.ReferencedMessage.AttachedPDF.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ReferencedMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof mediaitem.Metadata.ReferencedMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {mediaitem.Metadata.ReferencedMessage} ReferencedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReferencedMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ReferencedMessage message.
                 * @function verify
                 * @memberof mediaitem.Metadata.ReferencedMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReferencedMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.text != null && message.hasOwnProperty("text")) {
                        properties._text = 1;
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    }
                    if (message.attachedMedia != null && message.hasOwnProperty("attachedMedia")) {
                        properties._attachedMedia = 1;
                        {
                            var error = $root.mediaitem.Metadata.ReferencedMessage.AttachedMedia.verify(message.attachedMedia);
                            if (error)
                                return "attachedMedia." + error;
                        }
                    }
                    if (message.attachedWebsite != null && message.hasOwnProperty("attachedWebsite")) {
                        properties._attachedWebsite = 1;
                        {
                            var error = $root.mediaitem.Metadata.ReferencedMessage.AttachedWebsite.verify(message.attachedWebsite);
                            if (error)
                                return "attachedWebsite." + error;
                        }
                    }
                    if (message.attachedPdf != null && message.hasOwnProperty("attachedPdf")) {
                        properties._attachedPdf = 1;
                        {
                            var error = $root.mediaitem.Metadata.ReferencedMessage.AttachedPDF.verify(message.attachedPdf);
                            if (error)
                                return "attachedPdf." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a ReferencedMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof mediaitem.Metadata.ReferencedMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {mediaitem.Metadata.ReferencedMessage} ReferencedMessage
                 */
                ReferencedMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.mediaitem.Metadata.ReferencedMessage)
                        return object;
                    var message = new $root.mediaitem.Metadata.ReferencedMessage();
                    if (object.text != null)
                        message.text = String(object.text);
                    if (object.attachedMedia != null) {
                        if (typeof object.attachedMedia !== "object")
                            throw TypeError(".mediaitem.Metadata.ReferencedMessage.attachedMedia: object expected");
                        message.attachedMedia = $root.mediaitem.Metadata.ReferencedMessage.AttachedMedia.fromObject(object.attachedMedia);
                    }
                    if (object.attachedWebsite != null) {
                        if (typeof object.attachedWebsite !== "object")
                            throw TypeError(".mediaitem.Metadata.ReferencedMessage.attachedWebsite: object expected");
                        message.attachedWebsite = $root.mediaitem.Metadata.ReferencedMessage.AttachedWebsite.fromObject(object.attachedWebsite);
                    }
                    if (object.attachedPdf != null) {
                        if (typeof object.attachedPdf !== "object")
                            throw TypeError(".mediaitem.Metadata.ReferencedMessage.attachedPdf: object expected");
                        message.attachedPdf = $root.mediaitem.Metadata.ReferencedMessage.AttachedPDF.fromObject(object.attachedPdf);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ReferencedMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof mediaitem.Metadata.ReferencedMessage
                 * @static
                 * @param {mediaitem.Metadata.ReferencedMessage} message ReferencedMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReferencedMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.text != null && message.hasOwnProperty("text")) {
                        object.text = message.text;
                        if (options.oneofs)
                            object._text = "text";
                    }
                    if (message.attachedMedia != null && message.hasOwnProperty("attachedMedia")) {
                        object.attachedMedia = $root.mediaitem.Metadata.ReferencedMessage.AttachedMedia.toObject(message.attachedMedia, options);
                        if (options.oneofs)
                            object._attachedMedia = "attachedMedia";
                    }
                    if (message.attachedWebsite != null && message.hasOwnProperty("attachedWebsite")) {
                        object.attachedWebsite = $root.mediaitem.Metadata.ReferencedMessage.AttachedWebsite.toObject(message.attachedWebsite, options);
                        if (options.oneofs)
                            object._attachedWebsite = "attachedWebsite";
                    }
                    if (message.attachedPdf != null && message.hasOwnProperty("attachedPdf")) {
                        object.attachedPdf = $root.mediaitem.Metadata.ReferencedMessage.AttachedPDF.toObject(message.attachedPdf, options);
                        if (options.oneofs)
                            object._attachedPdf = "attachedPdf";
                    }
                    return object;
                };
    
                /**
                 * Converts this ReferencedMessage to JSON.
                 * @function toJSON
                 * @memberof mediaitem.Metadata.ReferencedMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReferencedMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for ReferencedMessage
                 * @function getTypeUrl
                 * @memberof mediaitem.Metadata.ReferencedMessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ReferencedMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/mediaitem.Metadata.ReferencedMessage";
                };
    
                ReferencedMessage.AttachedMedia = (function() {
    
                    /**
                     * Properties of an AttachedMedia.
                     * @memberof mediaitem.Metadata.ReferencedMessage
                     * @interface IAttachedMedia
                     * @property {string|null} [whatsappDownloadUrl] Format "https://mmg.whatsapp.net/ *.enc"
                     * @property {string|null} [mimeType] MIME-Type of this media
                     * @property {string|null} [mediaDecriptionMessageText] Text of the description the sender sent with
                     * this message.
                     * @property {Uint8Array|null} [unknownBytes_4] AttachedMedia unknownBytes_4
                     * @property {number|null} [unknownNumber_5] AttachedMedia unknownNumber_5
                     * @property {number|null} [unknownNumber_6] AttachedMedia unknownNumber_6
                     * @property {number|null} [unknownNumber_7] AttachedMedia unknownNumber_7
                     * @property {Uint8Array|null} [unknownBytes_8] AttachedMedia unknownBytes_8
                     * @property {Uint8Array|null} [unknownBytes_9] AttachedMedia unknownBytes_9
                     * @property {string|null} [whatsappDownloadUrlLong] Another url to download the media from.
                     * Appears to hold same contents as the url
                     * at `whatsapp_download_url`, but has a significantly
                     * longer format and misses the domain.
                     * Format: "*.enc?*"
                     * @property {number|null} [mediaTimestampUnixMilliseconds] Appears to be timestamp of the referenced media
                     * @property {Uint8Array|null} [unknownBytes_16] AttachedMedia unknownBytes_16
                     * @property {Uint8Array|null} [unknownBytes_18] AttachedMedia unknownBytes_18
                     * @property {number|null} [unknownNumber_19] AttachedMedia unknownNumber_19
                     * @property {Uint8Array|null} [unknownBytes_21] AttachedMedia unknownBytes_21
                     * @property {Array.<number>|null} [unknownNumber_22] AttachedMedia unknownNumber_22
                     * @property {Uint8Array|null} [unknownBytes_23] AttachedMedia unknownBytes_23
                     * @property {number|null} [maybeBoolean_25] AttachedMedia maybeBoolean_25
                     */
    
                    /**
                     * Constructs a new AttachedMedia.
                     * @memberof mediaitem.Metadata.ReferencedMessage
                     * @classdesc Represents an AttachedMedia.
                     * @implements IAttachedMedia
                     * @constructor
                     * @param {mediaitem.Metadata.ReferencedMessage.IAttachedMedia=} [properties] Properties to set
                     */
                    function AttachedMedia(properties) {
                        this.unknownNumber_22 = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Format "https://mmg.whatsapp.net/ *.enc"
                     * @member {string|null|undefined} whatsappDownloadUrl
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    AttachedMedia.prototype.whatsappDownloadUrl = null;
    
                    /**
                     * MIME-Type of this media
                     * @member {string|null|undefined} mimeType
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    AttachedMedia.prototype.mimeType = null;
    
                    /**
                     * Text of the description the sender sent with
                     * this message.
                     * @member {string|null|undefined} mediaDecriptionMessageText
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    AttachedMedia.prototype.mediaDecriptionMessageText = null;
    
                    /**
                     * AttachedMedia unknownBytes_4.
                     * @member {Uint8Array|null|undefined} unknownBytes_4
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    AttachedMedia.prototype.unknownBytes_4 = null;
    
                    /**
                     * AttachedMedia unknownNumber_5.
                     * @member {number|null|undefined} unknownNumber_5
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    AttachedMedia.prototype.unknownNumber_5 = null;
    
                    /**
                     * AttachedMedia unknownNumber_6.
                     * @member {number|null|undefined} unknownNumber_6
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    AttachedMedia.prototype.unknownNumber_6 = null;
    
                    /**
                     * AttachedMedia unknownNumber_7.
                     * @member {number|null|undefined} unknownNumber_7
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    AttachedMedia.prototype.unknownNumber_7 = null;
    
                    /**
                     * AttachedMedia unknownBytes_8.
                     * @member {Uint8Array|null|undefined} unknownBytes_8
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    AttachedMedia.prototype.unknownBytes_8 = null;
    
                    /**
                     * AttachedMedia unknownBytes_9.
                     * @member {Uint8Array|null|undefined} unknownBytes_9
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    AttachedMedia.prototype.unknownBytes_9 = null;
    
                    /**
                     * Another url to download the media from.
                     * Appears to hold same contents as the url
                     * at `whatsapp_download_url`, but has a significantly
                     * longer format and misses the domain.
                     * Format: "*.enc?*"
                     * @member {string|null|undefined} whatsappDownloadUrlLong
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    AttachedMedia.prototype.whatsappDownloadUrlLong = null;
    
                    /**
                     * Appears to be timestamp of the referenced media
                     * @member {number|null|undefined} mediaTimestampUnixMilliseconds
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    AttachedMedia.prototype.mediaTimestampUnixMilliseconds = null;
    
                    /**
                     * AttachedMedia unknownBytes_16.
                     * @member {Uint8Array|null|undefined} unknownBytes_16
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    AttachedMedia.prototype.unknownBytes_16 = null;
    
                    /**
                     * AttachedMedia unknownBytes_18.
                     * @member {Uint8Array|null|undefined} unknownBytes_18
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    AttachedMedia.prototype.unknownBytes_18 = null;
    
                    /**
                     * AttachedMedia unknownNumber_19.
                     * @member {number|null|undefined} unknownNumber_19
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    AttachedMedia.prototype.unknownNumber_19 = null;
    
                    /**
                     * AttachedMedia unknownBytes_21.
                     * @member {Uint8Array|null|undefined} unknownBytes_21
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    AttachedMedia.prototype.unknownBytes_21 = null;
    
                    /**
                     * AttachedMedia unknownNumber_22.
                     * @member {Array.<number>} unknownNumber_22
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    AttachedMedia.prototype.unknownNumber_22 = $util.emptyArray;
    
                    /**
                     * AttachedMedia unknownBytes_23.
                     * @member {Uint8Array|null|undefined} unknownBytes_23
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    AttachedMedia.prototype.unknownBytes_23 = null;
    
                    /**
                     * AttachedMedia maybeBoolean_25.
                     * @member {number|null|undefined} maybeBoolean_25
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    AttachedMedia.prototype.maybeBoolean_25 = null;
    
                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;
    
                    /**
                     * AttachedMedia _whatsappDownloadUrl.
                     * @member {"whatsappDownloadUrl"|undefined} _whatsappDownloadUrl
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    Object.defineProperty(AttachedMedia.prototype, "_whatsappDownloadUrl", {
                        get: $util.oneOfGetter($oneOfFields = ["whatsappDownloadUrl"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedMedia _mimeType.
                     * @member {"mimeType"|undefined} _mimeType
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    Object.defineProperty(AttachedMedia.prototype, "_mimeType", {
                        get: $util.oneOfGetter($oneOfFields = ["mimeType"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedMedia _mediaDecriptionMessageText.
                     * @member {"mediaDecriptionMessageText"|undefined} _mediaDecriptionMessageText
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    Object.defineProperty(AttachedMedia.prototype, "_mediaDecriptionMessageText", {
                        get: $util.oneOfGetter($oneOfFields = ["mediaDecriptionMessageText"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedMedia _unknownBytes_4.
                     * @member {"unknownBytes_4"|undefined} _unknownBytes_4
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    Object.defineProperty(AttachedMedia.prototype, "_unknownBytes_4", {
                        get: $util.oneOfGetter($oneOfFields = ["unknownBytes_4"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedMedia _unknownNumber_5.
                     * @member {"unknownNumber_5"|undefined} _unknownNumber_5
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    Object.defineProperty(AttachedMedia.prototype, "_unknownNumber_5", {
                        get: $util.oneOfGetter($oneOfFields = ["unknownNumber_5"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedMedia _unknownNumber_6.
                     * @member {"unknownNumber_6"|undefined} _unknownNumber_6
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    Object.defineProperty(AttachedMedia.prototype, "_unknownNumber_6", {
                        get: $util.oneOfGetter($oneOfFields = ["unknownNumber_6"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedMedia _unknownNumber_7.
                     * @member {"unknownNumber_7"|undefined} _unknownNumber_7
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    Object.defineProperty(AttachedMedia.prototype, "_unknownNumber_7", {
                        get: $util.oneOfGetter($oneOfFields = ["unknownNumber_7"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedMedia _unknownBytes_8.
                     * @member {"unknownBytes_8"|undefined} _unknownBytes_8
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    Object.defineProperty(AttachedMedia.prototype, "_unknownBytes_8", {
                        get: $util.oneOfGetter($oneOfFields = ["unknownBytes_8"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedMedia _unknownBytes_9.
                     * @member {"unknownBytes_9"|undefined} _unknownBytes_9
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    Object.defineProperty(AttachedMedia.prototype, "_unknownBytes_9", {
                        get: $util.oneOfGetter($oneOfFields = ["unknownBytes_9"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedMedia _whatsappDownloadUrlLong.
                     * @member {"whatsappDownloadUrlLong"|undefined} _whatsappDownloadUrlLong
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    Object.defineProperty(AttachedMedia.prototype, "_whatsappDownloadUrlLong", {
                        get: $util.oneOfGetter($oneOfFields = ["whatsappDownloadUrlLong"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedMedia _mediaTimestampUnixMilliseconds.
                     * @member {"mediaTimestampUnixMilliseconds"|undefined} _mediaTimestampUnixMilliseconds
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    Object.defineProperty(AttachedMedia.prototype, "_mediaTimestampUnixMilliseconds", {
                        get: $util.oneOfGetter($oneOfFields = ["mediaTimestampUnixMilliseconds"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedMedia _unknownBytes_16.
                     * @member {"unknownBytes_16"|undefined} _unknownBytes_16
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    Object.defineProperty(AttachedMedia.prototype, "_unknownBytes_16", {
                        get: $util.oneOfGetter($oneOfFields = ["unknownBytes_16"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedMedia _unknownBytes_18.
                     * @member {"unknownBytes_18"|undefined} _unknownBytes_18
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    Object.defineProperty(AttachedMedia.prototype, "_unknownBytes_18", {
                        get: $util.oneOfGetter($oneOfFields = ["unknownBytes_18"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedMedia _unknownNumber_19.
                     * @member {"unknownNumber_19"|undefined} _unknownNumber_19
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    Object.defineProperty(AttachedMedia.prototype, "_unknownNumber_19", {
                        get: $util.oneOfGetter($oneOfFields = ["unknownNumber_19"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedMedia _unknownBytes_21.
                     * @member {"unknownBytes_21"|undefined} _unknownBytes_21
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    Object.defineProperty(AttachedMedia.prototype, "_unknownBytes_21", {
                        get: $util.oneOfGetter($oneOfFields = ["unknownBytes_21"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedMedia _unknownBytes_23.
                     * @member {"unknownBytes_23"|undefined} _unknownBytes_23
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    Object.defineProperty(AttachedMedia.prototype, "_unknownBytes_23", {
                        get: $util.oneOfGetter($oneOfFields = ["unknownBytes_23"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedMedia _maybeBoolean_25.
                     * @member {"maybeBoolean_25"|undefined} _maybeBoolean_25
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     */
                    Object.defineProperty(AttachedMedia.prototype, "_maybeBoolean_25", {
                        get: $util.oneOfGetter($oneOfFields = ["maybeBoolean_25"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * Creates a new AttachedMedia instance using the specified properties.
                     * @function create
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @static
                     * @param {mediaitem.Metadata.ReferencedMessage.IAttachedMedia=} [properties] Properties to set
                     * @returns {mediaitem.Metadata.ReferencedMessage.AttachedMedia} AttachedMedia instance
                     */
                    AttachedMedia.create = function create(properties) {
                        return new AttachedMedia(properties);
                    };
    
                    /**
                     * Encodes the specified AttachedMedia message. Does not implicitly {@link mediaitem.Metadata.ReferencedMessage.AttachedMedia.verify|verify} messages.
                     * @function encode
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @static
                     * @param {mediaitem.Metadata.ReferencedMessage.IAttachedMedia} message AttachedMedia message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AttachedMedia.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.whatsappDownloadUrl != null && Object.hasOwnProperty.call(message, "whatsappDownloadUrl"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.whatsappDownloadUrl);
                        if (message.mimeType != null && Object.hasOwnProperty.call(message, "mimeType"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.mimeType);
                        if (message.mediaDecriptionMessageText != null && Object.hasOwnProperty.call(message, "mediaDecriptionMessageText"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.mediaDecriptionMessageText);
                        if (message.unknownBytes_4 != null && Object.hasOwnProperty.call(message, "unknownBytes_4"))
                            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.unknownBytes_4);
                        if (message.unknownNumber_5 != null && Object.hasOwnProperty.call(message, "unknownNumber_5"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.unknownNumber_5);
                        if (message.unknownNumber_6 != null && Object.hasOwnProperty.call(message, "unknownNumber_6"))
                            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.unknownNumber_6);
                        if (message.unknownNumber_7 != null && Object.hasOwnProperty.call(message, "unknownNumber_7"))
                            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.unknownNumber_7);
                        if (message.unknownBytes_8 != null && Object.hasOwnProperty.call(message, "unknownBytes_8"))
                            writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.unknownBytes_8);
                        if (message.unknownBytes_9 != null && Object.hasOwnProperty.call(message, "unknownBytes_9"))
                            writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.unknownBytes_9);
                        if (message.whatsappDownloadUrlLong != null && Object.hasOwnProperty.call(message, "whatsappDownloadUrlLong"))
                            writer.uint32(/* id 11, wireType 2 =*/90).string(message.whatsappDownloadUrlLong);
                        if (message.mediaTimestampUnixMilliseconds != null && Object.hasOwnProperty.call(message, "mediaTimestampUnixMilliseconds"))
                            writer.uint32(/* id 12, wireType 0 =*/96).uint64(message.mediaTimestampUnixMilliseconds);
                        if (message.unknownBytes_16 != null && Object.hasOwnProperty.call(message, "unknownBytes_16"))
                            writer.uint32(/* id 16, wireType 2 =*/130).bytes(message.unknownBytes_16);
                        if (message.unknownBytes_18 != null && Object.hasOwnProperty.call(message, "unknownBytes_18"))
                            writer.uint32(/* id 18, wireType 2 =*/146).bytes(message.unknownBytes_18);
                        if (message.unknownNumber_19 != null && Object.hasOwnProperty.call(message, "unknownNumber_19"))
                            writer.uint32(/* id 19, wireType 0 =*/152).uint32(message.unknownNumber_19);
                        if (message.unknownBytes_21 != null && Object.hasOwnProperty.call(message, "unknownBytes_21"))
                            writer.uint32(/* id 21, wireType 2 =*/170).bytes(message.unknownBytes_21);
                        if (message.unknownNumber_22 != null && message.unknownNumber_22.length) {
                            writer.uint32(/* id 22, wireType 2 =*/178).fork();
                            for (var i = 0; i < message.unknownNumber_22.length; ++i)
                                writer.uint32(message.unknownNumber_22[i]);
                            writer.ldelim();
                        }
                        if (message.unknownBytes_23 != null && Object.hasOwnProperty.call(message, "unknownBytes_23"))
                            writer.uint32(/* id 23, wireType 2 =*/186).bytes(message.unknownBytes_23);
                        if (message.maybeBoolean_25 != null && Object.hasOwnProperty.call(message, "maybeBoolean_25"))
                            writer.uint32(/* id 25, wireType 0 =*/200).uint32(message.maybeBoolean_25);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified AttachedMedia message, length delimited. Does not implicitly {@link mediaitem.Metadata.ReferencedMessage.AttachedMedia.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @static
                     * @param {mediaitem.Metadata.ReferencedMessage.IAttachedMedia} message AttachedMedia message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AttachedMedia.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an AttachedMedia message from the specified reader or buffer.
                     * @function decode
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {mediaitem.Metadata.ReferencedMessage.AttachedMedia} AttachedMedia
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AttachedMedia.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mediaitem.Metadata.ReferencedMessage.AttachedMedia();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.whatsappDownloadUrl = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.mimeType = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.mediaDecriptionMessageText = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.unknownBytes_4 = reader.bytes();
                                    break;
                                }
                            case 5: {
                                    message.unknownNumber_5 = reader.uint32();
                                    break;
                                }
                            case 6: {
                                    message.unknownNumber_6 = reader.uint32();
                                    break;
                                }
                            case 7: {
                                    message.unknownNumber_7 = reader.uint32();
                                    break;
                                }
                            case 8: {
                                    message.unknownBytes_8 = reader.bytes();
                                    break;
                                }
                            case 9: {
                                    message.unknownBytes_9 = reader.bytes();
                                    break;
                                }
                            case 11: {
                                    message.whatsappDownloadUrlLong = reader.string();
                                    break;
                                }
                            case 12: {
                                    message.mediaTimestampUnixMilliseconds = reader.uint64();
                                    break;
                                }
                            case 16: {
                                    message.unknownBytes_16 = reader.bytes();
                                    break;
                                }
                            case 18: {
                                    message.unknownBytes_18 = reader.bytes();
                                    break;
                                }
                            case 19: {
                                    message.unknownNumber_19 = reader.uint32();
                                    break;
                                }
                            case 21: {
                                    message.unknownBytes_21 = reader.bytes();
                                    break;
                                }
                            case 22: {
                                    if (!(message.unknownNumber_22 && message.unknownNumber_22.length))
                                        message.unknownNumber_22 = [];
                                    if ((tag & 7) === 2) {
                                        var end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.unknownNumber_22.push(reader.uint32());
                                    } else
                                        message.unknownNumber_22.push(reader.uint32());
                                    break;
                                }
                            case 23: {
                                    message.unknownBytes_23 = reader.bytes();
                                    break;
                                }
                            case 25: {
                                    message.maybeBoolean_25 = reader.uint32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an AttachedMedia message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {mediaitem.Metadata.ReferencedMessage.AttachedMedia} AttachedMedia
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AttachedMedia.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an AttachedMedia message.
                     * @function verify
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    AttachedMedia.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.whatsappDownloadUrl != null && message.hasOwnProperty("whatsappDownloadUrl")) {
                            properties._whatsappDownloadUrl = 1;
                            if (!$util.isString(message.whatsappDownloadUrl))
                                return "whatsappDownloadUrl: string expected";
                        }
                        if (message.mimeType != null && message.hasOwnProperty("mimeType")) {
                            properties._mimeType = 1;
                            if (!$util.isString(message.mimeType))
                                return "mimeType: string expected";
                        }
                        if (message.mediaDecriptionMessageText != null && message.hasOwnProperty("mediaDecriptionMessageText")) {
                            properties._mediaDecriptionMessageText = 1;
                            if (!$util.isString(message.mediaDecriptionMessageText))
                                return "mediaDecriptionMessageText: string expected";
                        }
                        if (message.unknownBytes_4 != null && message.hasOwnProperty("unknownBytes_4")) {
                            properties._unknownBytes_4 = 1;
                            if (!(message.unknownBytes_4 && typeof message.unknownBytes_4.length === "number" || $util.isString(message.unknownBytes_4)))
                                return "unknownBytes_4: buffer expected";
                        }
                        if (message.unknownNumber_5 != null && message.hasOwnProperty("unknownNumber_5")) {
                            properties._unknownNumber_5 = 1;
                            if (!$util.isInteger(message.unknownNumber_5))
                                return "unknownNumber_5: integer expected";
                        }
                        if (message.unknownNumber_6 != null && message.hasOwnProperty("unknownNumber_6")) {
                            properties._unknownNumber_6 = 1;
                            if (!$util.isInteger(message.unknownNumber_6))
                                return "unknownNumber_6: integer expected";
                        }
                        if (message.unknownNumber_7 != null && message.hasOwnProperty("unknownNumber_7")) {
                            properties._unknownNumber_7 = 1;
                            if (!$util.isInteger(message.unknownNumber_7))
                                return "unknownNumber_7: integer expected";
                        }
                        if (message.unknownBytes_8 != null && message.hasOwnProperty("unknownBytes_8")) {
                            properties._unknownBytes_8 = 1;
                            if (!(message.unknownBytes_8 && typeof message.unknownBytes_8.length === "number" || $util.isString(message.unknownBytes_8)))
                                return "unknownBytes_8: buffer expected";
                        }
                        if (message.unknownBytes_9 != null && message.hasOwnProperty("unknownBytes_9")) {
                            properties._unknownBytes_9 = 1;
                            if (!(message.unknownBytes_9 && typeof message.unknownBytes_9.length === "number" || $util.isString(message.unknownBytes_9)))
                                return "unknownBytes_9: buffer expected";
                        }
                        if (message.whatsappDownloadUrlLong != null && message.hasOwnProperty("whatsappDownloadUrlLong")) {
                            properties._whatsappDownloadUrlLong = 1;
                            if (!$util.isString(message.whatsappDownloadUrlLong))
                                return "whatsappDownloadUrlLong: string expected";
                        }
                        if (message.mediaTimestampUnixMilliseconds != null && message.hasOwnProperty("mediaTimestampUnixMilliseconds")) {
                            properties._mediaTimestampUnixMilliseconds = 1;
                            if (!$util.isInteger(message.mediaTimestampUnixMilliseconds) && !(message.mediaTimestampUnixMilliseconds && $util.isInteger(message.mediaTimestampUnixMilliseconds.low) && $util.isInteger(message.mediaTimestampUnixMilliseconds.high)))
                                return "mediaTimestampUnixMilliseconds: integer|Long expected";
                        }
                        if (message.unknownBytes_16 != null && message.hasOwnProperty("unknownBytes_16")) {
                            properties._unknownBytes_16 = 1;
                            if (!(message.unknownBytes_16 && typeof message.unknownBytes_16.length === "number" || $util.isString(message.unknownBytes_16)))
                                return "unknownBytes_16: buffer expected";
                        }
                        if (message.unknownBytes_18 != null && message.hasOwnProperty("unknownBytes_18")) {
                            properties._unknownBytes_18 = 1;
                            if (!(message.unknownBytes_18 && typeof message.unknownBytes_18.length === "number" || $util.isString(message.unknownBytes_18)))
                                return "unknownBytes_18: buffer expected";
                        }
                        if (message.unknownNumber_19 != null && message.hasOwnProperty("unknownNumber_19")) {
                            properties._unknownNumber_19 = 1;
                            if (!$util.isInteger(message.unknownNumber_19))
                                return "unknownNumber_19: integer expected";
                        }
                        if (message.unknownBytes_21 != null && message.hasOwnProperty("unknownBytes_21")) {
                            properties._unknownBytes_21 = 1;
                            if (!(message.unknownBytes_21 && typeof message.unknownBytes_21.length === "number" || $util.isString(message.unknownBytes_21)))
                                return "unknownBytes_21: buffer expected";
                        }
                        if (message.unknownNumber_22 != null && message.hasOwnProperty("unknownNumber_22")) {
                            if (!Array.isArray(message.unknownNumber_22))
                                return "unknownNumber_22: array expected";
                            for (var i = 0; i < message.unknownNumber_22.length; ++i)
                                if (!$util.isInteger(message.unknownNumber_22[i]))
                                    return "unknownNumber_22: integer[] expected";
                        }
                        if (message.unknownBytes_23 != null && message.hasOwnProperty("unknownBytes_23")) {
                            properties._unknownBytes_23 = 1;
                            if (!(message.unknownBytes_23 && typeof message.unknownBytes_23.length === "number" || $util.isString(message.unknownBytes_23)))
                                return "unknownBytes_23: buffer expected";
                        }
                        if (message.maybeBoolean_25 != null && message.hasOwnProperty("maybeBoolean_25")) {
                            properties._maybeBoolean_25 = 1;
                            if (!$util.isInteger(message.maybeBoolean_25))
                                return "maybeBoolean_25: integer expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates an AttachedMedia message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {mediaitem.Metadata.ReferencedMessage.AttachedMedia} AttachedMedia
                     */
                    AttachedMedia.fromObject = function fromObject(object) {
                        if (object instanceof $root.mediaitem.Metadata.ReferencedMessage.AttachedMedia)
                            return object;
                        var message = new $root.mediaitem.Metadata.ReferencedMessage.AttachedMedia();
                        if (object.whatsappDownloadUrl != null)
                            message.whatsappDownloadUrl = String(object.whatsappDownloadUrl);
                        if (object.mimeType != null)
                            message.mimeType = String(object.mimeType);
                        if (object.mediaDecriptionMessageText != null)
                            message.mediaDecriptionMessageText = String(object.mediaDecriptionMessageText);
                        if (object.unknownBytes_4 != null)
                            if (typeof object.unknownBytes_4 === "string")
                                $util.base64.decode(object.unknownBytes_4, message.unknownBytes_4 = $util.newBuffer($util.base64.length(object.unknownBytes_4)), 0);
                            else if (object.unknownBytes_4.length >= 0)
                                message.unknownBytes_4 = object.unknownBytes_4;
                        if (object.unknownNumber_5 != null)
                            message.unknownNumber_5 = object.unknownNumber_5 >>> 0;
                        if (object.unknownNumber_6 != null)
                            message.unknownNumber_6 = object.unknownNumber_6 >>> 0;
                        if (object.unknownNumber_7 != null)
                            message.unknownNumber_7 = object.unknownNumber_7 >>> 0;
                        if (object.unknownBytes_8 != null)
                            if (typeof object.unknownBytes_8 === "string")
                                $util.base64.decode(object.unknownBytes_8, message.unknownBytes_8 = $util.newBuffer($util.base64.length(object.unknownBytes_8)), 0);
                            else if (object.unknownBytes_8.length >= 0)
                                message.unknownBytes_8 = object.unknownBytes_8;
                        if (object.unknownBytes_9 != null)
                            if (typeof object.unknownBytes_9 === "string")
                                $util.base64.decode(object.unknownBytes_9, message.unknownBytes_9 = $util.newBuffer($util.base64.length(object.unknownBytes_9)), 0);
                            else if (object.unknownBytes_9.length >= 0)
                                message.unknownBytes_9 = object.unknownBytes_9;
                        if (object.whatsappDownloadUrlLong != null)
                            message.whatsappDownloadUrlLong = String(object.whatsappDownloadUrlLong);
                        if (object.mediaTimestampUnixMilliseconds != null)
                            if ($util.Long)
                                (message.mediaTimestampUnixMilliseconds = $util.Long.fromValue(object.mediaTimestampUnixMilliseconds)).unsigned = true;
                            else if (typeof object.mediaTimestampUnixMilliseconds === "string")
                                message.mediaTimestampUnixMilliseconds = parseInt(object.mediaTimestampUnixMilliseconds, 10);
                            else if (typeof object.mediaTimestampUnixMilliseconds === "number")
                                message.mediaTimestampUnixMilliseconds = object.mediaTimestampUnixMilliseconds;
                            else if (typeof object.mediaTimestampUnixMilliseconds === "object")
                                message.mediaTimestampUnixMilliseconds = new $util.LongBits(object.mediaTimestampUnixMilliseconds.low >>> 0, object.mediaTimestampUnixMilliseconds.high >>> 0).toNumber(true);
                        if (object.unknownBytes_16 != null)
                            if (typeof object.unknownBytes_16 === "string")
                                $util.base64.decode(object.unknownBytes_16, message.unknownBytes_16 = $util.newBuffer($util.base64.length(object.unknownBytes_16)), 0);
                            else if (object.unknownBytes_16.length >= 0)
                                message.unknownBytes_16 = object.unknownBytes_16;
                        if (object.unknownBytes_18 != null)
                            if (typeof object.unknownBytes_18 === "string")
                                $util.base64.decode(object.unknownBytes_18, message.unknownBytes_18 = $util.newBuffer($util.base64.length(object.unknownBytes_18)), 0);
                            else if (object.unknownBytes_18.length >= 0)
                                message.unknownBytes_18 = object.unknownBytes_18;
                        if (object.unknownNumber_19 != null)
                            message.unknownNumber_19 = object.unknownNumber_19 >>> 0;
                        if (object.unknownBytes_21 != null)
                            if (typeof object.unknownBytes_21 === "string")
                                $util.base64.decode(object.unknownBytes_21, message.unknownBytes_21 = $util.newBuffer($util.base64.length(object.unknownBytes_21)), 0);
                            else if (object.unknownBytes_21.length >= 0)
                                message.unknownBytes_21 = object.unknownBytes_21;
                        if (object.unknownNumber_22) {
                            if (!Array.isArray(object.unknownNumber_22))
                                throw TypeError(".mediaitem.Metadata.ReferencedMessage.AttachedMedia.unknownNumber_22: array expected");
                            message.unknownNumber_22 = [];
                            for (var i = 0; i < object.unknownNumber_22.length; ++i)
                                message.unknownNumber_22[i] = object.unknownNumber_22[i] >>> 0;
                        }
                        if (object.unknownBytes_23 != null)
                            if (typeof object.unknownBytes_23 === "string")
                                $util.base64.decode(object.unknownBytes_23, message.unknownBytes_23 = $util.newBuffer($util.base64.length(object.unknownBytes_23)), 0);
                            else if (object.unknownBytes_23.length >= 0)
                                message.unknownBytes_23 = object.unknownBytes_23;
                        if (object.maybeBoolean_25 != null)
                            message.maybeBoolean_25 = object.maybeBoolean_25 >>> 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an AttachedMedia message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @static
                     * @param {mediaitem.Metadata.ReferencedMessage.AttachedMedia} message AttachedMedia
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    AttachedMedia.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.unknownNumber_22 = [];
                        if (message.whatsappDownloadUrl != null && message.hasOwnProperty("whatsappDownloadUrl")) {
                            object.whatsappDownloadUrl = message.whatsappDownloadUrl;
                            if (options.oneofs)
                                object._whatsappDownloadUrl = "whatsappDownloadUrl";
                        }
                        if (message.mimeType != null && message.hasOwnProperty("mimeType")) {
                            object.mimeType = message.mimeType;
                            if (options.oneofs)
                                object._mimeType = "mimeType";
                        }
                        if (message.mediaDecriptionMessageText != null && message.hasOwnProperty("mediaDecriptionMessageText")) {
                            object.mediaDecriptionMessageText = message.mediaDecriptionMessageText;
                            if (options.oneofs)
                                object._mediaDecriptionMessageText = "mediaDecriptionMessageText";
                        }
                        if (message.unknownBytes_4 != null && message.hasOwnProperty("unknownBytes_4")) {
                            object.unknownBytes_4 = options.bytes === String ? $util.base64.encode(message.unknownBytes_4, 0, message.unknownBytes_4.length) : options.bytes === Array ? Array.prototype.slice.call(message.unknownBytes_4) : message.unknownBytes_4;
                            if (options.oneofs)
                                object._unknownBytes_4 = "unknownBytes_4";
                        }
                        if (message.unknownNumber_5 != null && message.hasOwnProperty("unknownNumber_5")) {
                            object.unknownNumber_5 = message.unknownNumber_5;
                            if (options.oneofs)
                                object._unknownNumber_5 = "unknownNumber_5";
                        }
                        if (message.unknownNumber_6 != null && message.hasOwnProperty("unknownNumber_6")) {
                            object.unknownNumber_6 = message.unknownNumber_6;
                            if (options.oneofs)
                                object._unknownNumber_6 = "unknownNumber_6";
                        }
                        if (message.unknownNumber_7 != null && message.hasOwnProperty("unknownNumber_7")) {
                            object.unknownNumber_7 = message.unknownNumber_7;
                            if (options.oneofs)
                                object._unknownNumber_7 = "unknownNumber_7";
                        }
                        if (message.unknownBytes_8 != null && message.hasOwnProperty("unknownBytes_8")) {
                            object.unknownBytes_8 = options.bytes === String ? $util.base64.encode(message.unknownBytes_8, 0, message.unknownBytes_8.length) : options.bytes === Array ? Array.prototype.slice.call(message.unknownBytes_8) : message.unknownBytes_8;
                            if (options.oneofs)
                                object._unknownBytes_8 = "unknownBytes_8";
                        }
                        if (message.unknownBytes_9 != null && message.hasOwnProperty("unknownBytes_9")) {
                            object.unknownBytes_9 = options.bytes === String ? $util.base64.encode(message.unknownBytes_9, 0, message.unknownBytes_9.length) : options.bytes === Array ? Array.prototype.slice.call(message.unknownBytes_9) : message.unknownBytes_9;
                            if (options.oneofs)
                                object._unknownBytes_9 = "unknownBytes_9";
                        }
                        if (message.whatsappDownloadUrlLong != null && message.hasOwnProperty("whatsappDownloadUrlLong")) {
                            object.whatsappDownloadUrlLong = message.whatsappDownloadUrlLong;
                            if (options.oneofs)
                                object._whatsappDownloadUrlLong = "whatsappDownloadUrlLong";
                        }
                        if (message.mediaTimestampUnixMilliseconds != null && message.hasOwnProperty("mediaTimestampUnixMilliseconds")) {
                            if (typeof message.mediaTimestampUnixMilliseconds === "number")
                                object.mediaTimestampUnixMilliseconds = options.longs === String ? String(message.mediaTimestampUnixMilliseconds) : message.mediaTimestampUnixMilliseconds;
                            else
                                object.mediaTimestampUnixMilliseconds = options.longs === String ? $util.Long.prototype.toString.call(message.mediaTimestampUnixMilliseconds) : options.longs === Number ? new $util.LongBits(message.mediaTimestampUnixMilliseconds.low >>> 0, message.mediaTimestampUnixMilliseconds.high >>> 0).toNumber(true) : message.mediaTimestampUnixMilliseconds;
                            if (options.oneofs)
                                object._mediaTimestampUnixMilliseconds = "mediaTimestampUnixMilliseconds";
                        }
                        if (message.unknownBytes_16 != null && message.hasOwnProperty("unknownBytes_16")) {
                            object.unknownBytes_16 = options.bytes === String ? $util.base64.encode(message.unknownBytes_16, 0, message.unknownBytes_16.length) : options.bytes === Array ? Array.prototype.slice.call(message.unknownBytes_16) : message.unknownBytes_16;
                            if (options.oneofs)
                                object._unknownBytes_16 = "unknownBytes_16";
                        }
                        if (message.unknownBytes_18 != null && message.hasOwnProperty("unknownBytes_18")) {
                            object.unknownBytes_18 = options.bytes === String ? $util.base64.encode(message.unknownBytes_18, 0, message.unknownBytes_18.length) : options.bytes === Array ? Array.prototype.slice.call(message.unknownBytes_18) : message.unknownBytes_18;
                            if (options.oneofs)
                                object._unknownBytes_18 = "unknownBytes_18";
                        }
                        if (message.unknownNumber_19 != null && message.hasOwnProperty("unknownNumber_19")) {
                            object.unknownNumber_19 = message.unknownNumber_19;
                            if (options.oneofs)
                                object._unknownNumber_19 = "unknownNumber_19";
                        }
                        if (message.unknownBytes_21 != null && message.hasOwnProperty("unknownBytes_21")) {
                            object.unknownBytes_21 = options.bytes === String ? $util.base64.encode(message.unknownBytes_21, 0, message.unknownBytes_21.length) : options.bytes === Array ? Array.prototype.slice.call(message.unknownBytes_21) : message.unknownBytes_21;
                            if (options.oneofs)
                                object._unknownBytes_21 = "unknownBytes_21";
                        }
                        if (message.unknownNumber_22 && message.unknownNumber_22.length) {
                            object.unknownNumber_22 = [];
                            for (var j = 0; j < message.unknownNumber_22.length; ++j)
                                object.unknownNumber_22[j] = message.unknownNumber_22[j];
                        }
                        if (message.unknownBytes_23 != null && message.hasOwnProperty("unknownBytes_23")) {
                            object.unknownBytes_23 = options.bytes === String ? $util.base64.encode(message.unknownBytes_23, 0, message.unknownBytes_23.length) : options.bytes === Array ? Array.prototype.slice.call(message.unknownBytes_23) : message.unknownBytes_23;
                            if (options.oneofs)
                                object._unknownBytes_23 = "unknownBytes_23";
                        }
                        if (message.maybeBoolean_25 != null && message.hasOwnProperty("maybeBoolean_25")) {
                            object.maybeBoolean_25 = message.maybeBoolean_25;
                            if (options.oneofs)
                                object._maybeBoolean_25 = "maybeBoolean_25";
                        }
                        return object;
                    };
    
                    /**
                     * Converts this AttachedMedia to JSON.
                     * @function toJSON
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    AttachedMedia.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for AttachedMedia
                     * @function getTypeUrl
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedMedia
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    AttachedMedia.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/mediaitem.Metadata.ReferencedMessage.AttachedMedia";
                    };
    
                    return AttachedMedia;
                })();
    
                ReferencedMessage.AttachedWebsite = (function() {
    
                    /**
                     * Properties of an AttachedWebsite.
                     * @memberof mediaitem.Metadata.ReferencedMessage
                     * @interface IAttachedWebsite
                     * @property {string|null} [url_1] The URL of the attached media.
                     * I have no idea why there are multiple, they were always observed as being identical
                     * @property {string|null} [url_2] The URL of the attached media.
                     * I have no idea why there are multiple, they were always observed as being identical
                     * @property {string|null} [url_4] The URL of the attached media. Sometimes this field is an empty string
                     * @property {string|null} [url_5] The URL of the attached media. Sometimes this field is empty
                     * @property {string|null} [preview] preview text to be displayed in the app
                     * @property {number|null} [maybeBoolean_10] AttachedWebsite maybeBoolean_10
                     * @property {Uint8Array|null} [unknownBytes_16] AttachedWebsite unknownBytes_16
                     * @property {mediaitem.Metadata.ReferencedMessage.AttachedWebsite.IAdditionalInfo|null} [additionalInfo] AttachedWebsite additionalInfo
                     * @property {string|null} [previewMediaWhatsappDownloadUrlLong] AttachedWebsite previewMediaWhatsappDownloadUrlLong
                     * @property {Uint8Array|null} [unknownBytes_20] AttachedWebsite unknownBytes_20
                     * @property {Uint8Array|null} [unknownBytes_21] AttachedWebsite unknownBytes_21
                     * @property {Uint8Array|null} [unknownBytes_22] AttachedWebsite unknownBytes_22
                     * @property {number|null} [timestampUnixMilliseconds] AttachedWebsite timestampUnixMilliseconds
                     * @property {number|null} [unknownNumber_24] AttachedWebsite unknownNumber_24
                     * @property {number|null} [unknownNumber_25] AttachedWebsite unknownNumber_25
                     * @property {number|null} [maybeBoolean_29] AttachedWebsite maybeBoolean_29
                     */
    
                    /**
                     * Constructs a new AttachedWebsite.
                     * @memberof mediaitem.Metadata.ReferencedMessage
                     * @classdesc Represents an AttachedWebsite.
                     * @implements IAttachedWebsite
                     * @constructor
                     * @param {mediaitem.Metadata.ReferencedMessage.IAttachedWebsite=} [properties] Properties to set
                     */
                    function AttachedWebsite(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * The URL of the attached media.
                     * I have no idea why there are multiple, they were always observed as being identical
                     * @member {string|null|undefined} url_1
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    AttachedWebsite.prototype.url_1 = null;
    
                    /**
                     * The URL of the attached media.
                     * I have no idea why there are multiple, they were always observed as being identical
                     * @member {string|null|undefined} url_2
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    AttachedWebsite.prototype.url_2 = null;
    
                    /**
                     * The URL of the attached media. Sometimes this field is an empty string
                     * @member {string|null|undefined} url_4
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    AttachedWebsite.prototype.url_4 = null;
    
                    /**
                     * The URL of the attached media. Sometimes this field is empty
                     * @member {string|null|undefined} url_5
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    AttachedWebsite.prototype.url_5 = null;
    
                    /**
                     * preview text to be displayed in the app
                     * @member {string|null|undefined} preview
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    AttachedWebsite.prototype.preview = null;
    
                    /**
                     * AttachedWebsite maybeBoolean_10.
                     * @member {number|null|undefined} maybeBoolean_10
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    AttachedWebsite.prototype.maybeBoolean_10 = null;
    
                    /**
                     * AttachedWebsite unknownBytes_16.
                     * @member {Uint8Array|null|undefined} unknownBytes_16
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    AttachedWebsite.prototype.unknownBytes_16 = null;
    
                    /**
                     * AttachedWebsite additionalInfo.
                     * @member {mediaitem.Metadata.ReferencedMessage.AttachedWebsite.IAdditionalInfo|null|undefined} additionalInfo
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    AttachedWebsite.prototype.additionalInfo = null;
    
                    /**
                     * AttachedWebsite previewMediaWhatsappDownloadUrlLong.
                     * @member {string|null|undefined} previewMediaWhatsappDownloadUrlLong
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    AttachedWebsite.prototype.previewMediaWhatsappDownloadUrlLong = null;
    
                    /**
                     * AttachedWebsite unknownBytes_20.
                     * @member {Uint8Array|null|undefined} unknownBytes_20
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    AttachedWebsite.prototype.unknownBytes_20 = null;
    
                    /**
                     * AttachedWebsite unknownBytes_21.
                     * @member {Uint8Array|null|undefined} unknownBytes_21
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    AttachedWebsite.prototype.unknownBytes_21 = null;
    
                    /**
                     * AttachedWebsite unknownBytes_22.
                     * @member {Uint8Array|null|undefined} unknownBytes_22
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    AttachedWebsite.prototype.unknownBytes_22 = null;
    
                    /**
                     * AttachedWebsite timestampUnixMilliseconds.
                     * @member {number|null|undefined} timestampUnixMilliseconds
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    AttachedWebsite.prototype.timestampUnixMilliseconds = null;
    
                    /**
                     * AttachedWebsite unknownNumber_24.
                     * @member {number|null|undefined} unknownNumber_24
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    AttachedWebsite.prototype.unknownNumber_24 = null;
    
                    /**
                     * AttachedWebsite unknownNumber_25.
                     * @member {number|null|undefined} unknownNumber_25
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    AttachedWebsite.prototype.unknownNumber_25 = null;
    
                    /**
                     * AttachedWebsite maybeBoolean_29.
                     * @member {number|null|undefined} maybeBoolean_29
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    AttachedWebsite.prototype.maybeBoolean_29 = null;
    
                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;
    
                    /**
                     * AttachedWebsite _url_1.
                     * @member {"url_1"|undefined} _url_1
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    Object.defineProperty(AttachedWebsite.prototype, "_url_1", {
                        get: $util.oneOfGetter($oneOfFields = ["url_1"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedWebsite _url_2.
                     * @member {"url_2"|undefined} _url_2
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    Object.defineProperty(AttachedWebsite.prototype, "_url_2", {
                        get: $util.oneOfGetter($oneOfFields = ["url_2"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedWebsite _url_4.
                     * @member {"url_4"|undefined} _url_4
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    Object.defineProperty(AttachedWebsite.prototype, "_url_4", {
                        get: $util.oneOfGetter($oneOfFields = ["url_4"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedWebsite _url_5.
                     * @member {"url_5"|undefined} _url_5
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    Object.defineProperty(AttachedWebsite.prototype, "_url_5", {
                        get: $util.oneOfGetter($oneOfFields = ["url_5"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedWebsite _preview.
                     * @member {"preview"|undefined} _preview
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    Object.defineProperty(AttachedWebsite.prototype, "_preview", {
                        get: $util.oneOfGetter($oneOfFields = ["preview"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedWebsite _maybeBoolean_10.
                     * @member {"maybeBoolean_10"|undefined} _maybeBoolean_10
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    Object.defineProperty(AttachedWebsite.prototype, "_maybeBoolean_10", {
                        get: $util.oneOfGetter($oneOfFields = ["maybeBoolean_10"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedWebsite _unknownBytes_16.
                     * @member {"unknownBytes_16"|undefined} _unknownBytes_16
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    Object.defineProperty(AttachedWebsite.prototype, "_unknownBytes_16", {
                        get: $util.oneOfGetter($oneOfFields = ["unknownBytes_16"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedWebsite _additionalInfo.
                     * @member {"additionalInfo"|undefined} _additionalInfo
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    Object.defineProperty(AttachedWebsite.prototype, "_additionalInfo", {
                        get: $util.oneOfGetter($oneOfFields = ["additionalInfo"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedWebsite _previewMediaWhatsappDownloadUrlLong.
                     * @member {"previewMediaWhatsappDownloadUrlLong"|undefined} _previewMediaWhatsappDownloadUrlLong
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    Object.defineProperty(AttachedWebsite.prototype, "_previewMediaWhatsappDownloadUrlLong", {
                        get: $util.oneOfGetter($oneOfFields = ["previewMediaWhatsappDownloadUrlLong"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedWebsite _unknownBytes_20.
                     * @member {"unknownBytes_20"|undefined} _unknownBytes_20
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    Object.defineProperty(AttachedWebsite.prototype, "_unknownBytes_20", {
                        get: $util.oneOfGetter($oneOfFields = ["unknownBytes_20"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedWebsite _unknownBytes_21.
                     * @member {"unknownBytes_21"|undefined} _unknownBytes_21
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    Object.defineProperty(AttachedWebsite.prototype, "_unknownBytes_21", {
                        get: $util.oneOfGetter($oneOfFields = ["unknownBytes_21"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedWebsite _unknownBytes_22.
                     * @member {"unknownBytes_22"|undefined} _unknownBytes_22
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    Object.defineProperty(AttachedWebsite.prototype, "_unknownBytes_22", {
                        get: $util.oneOfGetter($oneOfFields = ["unknownBytes_22"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedWebsite _timestampUnixMilliseconds.
                     * @member {"timestampUnixMilliseconds"|undefined} _timestampUnixMilliseconds
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    Object.defineProperty(AttachedWebsite.prototype, "_timestampUnixMilliseconds", {
                        get: $util.oneOfGetter($oneOfFields = ["timestampUnixMilliseconds"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedWebsite _unknownNumber_24.
                     * @member {"unknownNumber_24"|undefined} _unknownNumber_24
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    Object.defineProperty(AttachedWebsite.prototype, "_unknownNumber_24", {
                        get: $util.oneOfGetter($oneOfFields = ["unknownNumber_24"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedWebsite _unknownNumber_25.
                     * @member {"unknownNumber_25"|undefined} _unknownNumber_25
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    Object.defineProperty(AttachedWebsite.prototype, "_unknownNumber_25", {
                        get: $util.oneOfGetter($oneOfFields = ["unknownNumber_25"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedWebsite _maybeBoolean_29.
                     * @member {"maybeBoolean_29"|undefined} _maybeBoolean_29
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     */
                    Object.defineProperty(AttachedWebsite.prototype, "_maybeBoolean_29", {
                        get: $util.oneOfGetter($oneOfFields = ["maybeBoolean_29"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * Creates a new AttachedWebsite instance using the specified properties.
                     * @function create
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @static
                     * @param {mediaitem.Metadata.ReferencedMessage.IAttachedWebsite=} [properties] Properties to set
                     * @returns {mediaitem.Metadata.ReferencedMessage.AttachedWebsite} AttachedWebsite instance
                     */
                    AttachedWebsite.create = function create(properties) {
                        return new AttachedWebsite(properties);
                    };
    
                    /**
                     * Encodes the specified AttachedWebsite message. Does not implicitly {@link mediaitem.Metadata.ReferencedMessage.AttachedWebsite.verify|verify} messages.
                     * @function encode
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @static
                     * @param {mediaitem.Metadata.ReferencedMessage.IAttachedWebsite} message AttachedWebsite message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AttachedWebsite.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.url_1 != null && Object.hasOwnProperty.call(message, "url_1"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.url_1);
                        if (message.url_2 != null && Object.hasOwnProperty.call(message, "url_2"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.url_2);
                        if (message.url_4 != null && Object.hasOwnProperty.call(message, "url_4"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.url_4);
                        if (message.url_5 != null && Object.hasOwnProperty.call(message, "url_5"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.url_5);
                        if (message.preview != null && Object.hasOwnProperty.call(message, "preview"))
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.preview);
                        if (message.maybeBoolean_10 != null && Object.hasOwnProperty.call(message, "maybeBoolean_10"))
                            writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.maybeBoolean_10);
                        if (message.unknownBytes_16 != null && Object.hasOwnProperty.call(message, "unknownBytes_16"))
                            writer.uint32(/* id 16, wireType 2 =*/130).bytes(message.unknownBytes_16);
                        if (message.additionalInfo != null && Object.hasOwnProperty.call(message, "additionalInfo"))
                            $root.mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo.encode(message.additionalInfo, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
                        if (message.previewMediaWhatsappDownloadUrlLong != null && Object.hasOwnProperty.call(message, "previewMediaWhatsappDownloadUrlLong"))
                            writer.uint32(/* id 19, wireType 2 =*/154).string(message.previewMediaWhatsappDownloadUrlLong);
                        if (message.unknownBytes_20 != null && Object.hasOwnProperty.call(message, "unknownBytes_20"))
                            writer.uint32(/* id 20, wireType 2 =*/162).bytes(message.unknownBytes_20);
                        if (message.unknownBytes_21 != null && Object.hasOwnProperty.call(message, "unknownBytes_21"))
                            writer.uint32(/* id 21, wireType 2 =*/170).bytes(message.unknownBytes_21);
                        if (message.unknownBytes_22 != null && Object.hasOwnProperty.call(message, "unknownBytes_22"))
                            writer.uint32(/* id 22, wireType 2 =*/178).bytes(message.unknownBytes_22);
                        if (message.timestampUnixMilliseconds != null && Object.hasOwnProperty.call(message, "timestampUnixMilliseconds"))
                            writer.uint32(/* id 23, wireType 0 =*/184).uint64(message.timestampUnixMilliseconds);
                        if (message.unknownNumber_24 != null && Object.hasOwnProperty.call(message, "unknownNumber_24"))
                            writer.uint32(/* id 24, wireType 0 =*/192).uint32(message.unknownNumber_24);
                        if (message.unknownNumber_25 != null && Object.hasOwnProperty.call(message, "unknownNumber_25"))
                            writer.uint32(/* id 25, wireType 0 =*/200).uint32(message.unknownNumber_25);
                        if (message.maybeBoolean_29 != null && Object.hasOwnProperty.call(message, "maybeBoolean_29"))
                            writer.uint32(/* id 29, wireType 0 =*/232).uint32(message.maybeBoolean_29);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified AttachedWebsite message, length delimited. Does not implicitly {@link mediaitem.Metadata.ReferencedMessage.AttachedWebsite.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @static
                     * @param {mediaitem.Metadata.ReferencedMessage.IAttachedWebsite} message AttachedWebsite message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AttachedWebsite.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an AttachedWebsite message from the specified reader or buffer.
                     * @function decode
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {mediaitem.Metadata.ReferencedMessage.AttachedWebsite} AttachedWebsite
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AttachedWebsite.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mediaitem.Metadata.ReferencedMessage.AttachedWebsite();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.url_1 = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.url_2 = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.url_4 = reader.string();
                                    break;
                                }
                            case 5: {
                                    message.url_5 = reader.string();
                                    break;
                                }
                            case 6: {
                                    message.preview = reader.string();
                                    break;
                                }
                            case 10: {
                                    message.maybeBoolean_10 = reader.uint32();
                                    break;
                                }
                            case 16: {
                                    message.unknownBytes_16 = reader.bytes();
                                    break;
                                }
                            case 17: {
                                    message.additionalInfo = $root.mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo.decode(reader, reader.uint32());
                                    break;
                                }
                            case 19: {
                                    message.previewMediaWhatsappDownloadUrlLong = reader.string();
                                    break;
                                }
                            case 20: {
                                    message.unknownBytes_20 = reader.bytes();
                                    break;
                                }
                            case 21: {
                                    message.unknownBytes_21 = reader.bytes();
                                    break;
                                }
                            case 22: {
                                    message.unknownBytes_22 = reader.bytes();
                                    break;
                                }
                            case 23: {
                                    message.timestampUnixMilliseconds = reader.uint64();
                                    break;
                                }
                            case 24: {
                                    message.unknownNumber_24 = reader.uint32();
                                    break;
                                }
                            case 25: {
                                    message.unknownNumber_25 = reader.uint32();
                                    break;
                                }
                            case 29: {
                                    message.maybeBoolean_29 = reader.uint32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an AttachedWebsite message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {mediaitem.Metadata.ReferencedMessage.AttachedWebsite} AttachedWebsite
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AttachedWebsite.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an AttachedWebsite message.
                     * @function verify
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    AttachedWebsite.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.url_1 != null && message.hasOwnProperty("url_1")) {
                            properties._url_1 = 1;
                            if (!$util.isString(message.url_1))
                                return "url_1: string expected";
                        }
                        if (message.url_2 != null && message.hasOwnProperty("url_2")) {
                            properties._url_2 = 1;
                            if (!$util.isString(message.url_2))
                                return "url_2: string expected";
                        }
                        if (message.url_4 != null && message.hasOwnProperty("url_4")) {
                            properties._url_4 = 1;
                            if (!$util.isString(message.url_4))
                                return "url_4: string expected";
                        }
                        if (message.url_5 != null && message.hasOwnProperty("url_5")) {
                            properties._url_5 = 1;
                            if (!$util.isString(message.url_5))
                                return "url_5: string expected";
                        }
                        if (message.preview != null && message.hasOwnProperty("preview")) {
                            properties._preview = 1;
                            if (!$util.isString(message.preview))
                                return "preview: string expected";
                        }
                        if (message.maybeBoolean_10 != null && message.hasOwnProperty("maybeBoolean_10")) {
                            properties._maybeBoolean_10 = 1;
                            if (!$util.isInteger(message.maybeBoolean_10))
                                return "maybeBoolean_10: integer expected";
                        }
                        if (message.unknownBytes_16 != null && message.hasOwnProperty("unknownBytes_16")) {
                            properties._unknownBytes_16 = 1;
                            if (!(message.unknownBytes_16 && typeof message.unknownBytes_16.length === "number" || $util.isString(message.unknownBytes_16)))
                                return "unknownBytes_16: buffer expected";
                        }
                        if (message.additionalInfo != null && message.hasOwnProperty("additionalInfo")) {
                            properties._additionalInfo = 1;
                            {
                                var error = $root.mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo.verify(message.additionalInfo);
                                if (error)
                                    return "additionalInfo." + error;
                            }
                        }
                        if (message.previewMediaWhatsappDownloadUrlLong != null && message.hasOwnProperty("previewMediaWhatsappDownloadUrlLong")) {
                            properties._previewMediaWhatsappDownloadUrlLong = 1;
                            if (!$util.isString(message.previewMediaWhatsappDownloadUrlLong))
                                return "previewMediaWhatsappDownloadUrlLong: string expected";
                        }
                        if (message.unknownBytes_20 != null && message.hasOwnProperty("unknownBytes_20")) {
                            properties._unknownBytes_20 = 1;
                            if (!(message.unknownBytes_20 && typeof message.unknownBytes_20.length === "number" || $util.isString(message.unknownBytes_20)))
                                return "unknownBytes_20: buffer expected";
                        }
                        if (message.unknownBytes_21 != null && message.hasOwnProperty("unknownBytes_21")) {
                            properties._unknownBytes_21 = 1;
                            if (!(message.unknownBytes_21 && typeof message.unknownBytes_21.length === "number" || $util.isString(message.unknownBytes_21)))
                                return "unknownBytes_21: buffer expected";
                        }
                        if (message.unknownBytes_22 != null && message.hasOwnProperty("unknownBytes_22")) {
                            properties._unknownBytes_22 = 1;
                            if (!(message.unknownBytes_22 && typeof message.unknownBytes_22.length === "number" || $util.isString(message.unknownBytes_22)))
                                return "unknownBytes_22: buffer expected";
                        }
                        if (message.timestampUnixMilliseconds != null && message.hasOwnProperty("timestampUnixMilliseconds")) {
                            properties._timestampUnixMilliseconds = 1;
                            if (!$util.isInteger(message.timestampUnixMilliseconds) && !(message.timestampUnixMilliseconds && $util.isInteger(message.timestampUnixMilliseconds.low) && $util.isInteger(message.timestampUnixMilliseconds.high)))
                                return "timestampUnixMilliseconds: integer|Long expected";
                        }
                        if (message.unknownNumber_24 != null && message.hasOwnProperty("unknownNumber_24")) {
                            properties._unknownNumber_24 = 1;
                            if (!$util.isInteger(message.unknownNumber_24))
                                return "unknownNumber_24: integer expected";
                        }
                        if (message.unknownNumber_25 != null && message.hasOwnProperty("unknownNumber_25")) {
                            properties._unknownNumber_25 = 1;
                            if (!$util.isInteger(message.unknownNumber_25))
                                return "unknownNumber_25: integer expected";
                        }
                        if (message.maybeBoolean_29 != null && message.hasOwnProperty("maybeBoolean_29")) {
                            properties._maybeBoolean_29 = 1;
                            if (!$util.isInteger(message.maybeBoolean_29))
                                return "maybeBoolean_29: integer expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates an AttachedWebsite message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {mediaitem.Metadata.ReferencedMessage.AttachedWebsite} AttachedWebsite
                     */
                    AttachedWebsite.fromObject = function fromObject(object) {
                        if (object instanceof $root.mediaitem.Metadata.ReferencedMessage.AttachedWebsite)
                            return object;
                        var message = new $root.mediaitem.Metadata.ReferencedMessage.AttachedWebsite();
                        if (object.url_1 != null)
                            message.url_1 = String(object.url_1);
                        if (object.url_2 != null)
                            message.url_2 = String(object.url_2);
                        if (object.url_4 != null)
                            message.url_4 = String(object.url_4);
                        if (object.url_5 != null)
                            message.url_5 = String(object.url_5);
                        if (object.preview != null)
                            message.preview = String(object.preview);
                        if (object.maybeBoolean_10 != null)
                            message.maybeBoolean_10 = object.maybeBoolean_10 >>> 0;
                        if (object.unknownBytes_16 != null)
                            if (typeof object.unknownBytes_16 === "string")
                                $util.base64.decode(object.unknownBytes_16, message.unknownBytes_16 = $util.newBuffer($util.base64.length(object.unknownBytes_16)), 0);
                            else if (object.unknownBytes_16.length >= 0)
                                message.unknownBytes_16 = object.unknownBytes_16;
                        if (object.additionalInfo != null) {
                            if (typeof object.additionalInfo !== "object")
                                throw TypeError(".mediaitem.Metadata.ReferencedMessage.AttachedWebsite.additionalInfo: object expected");
                            message.additionalInfo = $root.mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo.fromObject(object.additionalInfo);
                        }
                        if (object.previewMediaWhatsappDownloadUrlLong != null)
                            message.previewMediaWhatsappDownloadUrlLong = String(object.previewMediaWhatsappDownloadUrlLong);
                        if (object.unknownBytes_20 != null)
                            if (typeof object.unknownBytes_20 === "string")
                                $util.base64.decode(object.unknownBytes_20, message.unknownBytes_20 = $util.newBuffer($util.base64.length(object.unknownBytes_20)), 0);
                            else if (object.unknownBytes_20.length >= 0)
                                message.unknownBytes_20 = object.unknownBytes_20;
                        if (object.unknownBytes_21 != null)
                            if (typeof object.unknownBytes_21 === "string")
                                $util.base64.decode(object.unknownBytes_21, message.unknownBytes_21 = $util.newBuffer($util.base64.length(object.unknownBytes_21)), 0);
                            else if (object.unknownBytes_21.length >= 0)
                                message.unknownBytes_21 = object.unknownBytes_21;
                        if (object.unknownBytes_22 != null)
                            if (typeof object.unknownBytes_22 === "string")
                                $util.base64.decode(object.unknownBytes_22, message.unknownBytes_22 = $util.newBuffer($util.base64.length(object.unknownBytes_22)), 0);
                            else if (object.unknownBytes_22.length >= 0)
                                message.unknownBytes_22 = object.unknownBytes_22;
                        if (object.timestampUnixMilliseconds != null)
                            if ($util.Long)
                                (message.timestampUnixMilliseconds = $util.Long.fromValue(object.timestampUnixMilliseconds)).unsigned = true;
                            else if (typeof object.timestampUnixMilliseconds === "string")
                                message.timestampUnixMilliseconds = parseInt(object.timestampUnixMilliseconds, 10);
                            else if (typeof object.timestampUnixMilliseconds === "number")
                                message.timestampUnixMilliseconds = object.timestampUnixMilliseconds;
                            else if (typeof object.timestampUnixMilliseconds === "object")
                                message.timestampUnixMilliseconds = new $util.LongBits(object.timestampUnixMilliseconds.low >>> 0, object.timestampUnixMilliseconds.high >>> 0).toNumber(true);
                        if (object.unknownNumber_24 != null)
                            message.unknownNumber_24 = object.unknownNumber_24 >>> 0;
                        if (object.unknownNumber_25 != null)
                            message.unknownNumber_25 = object.unknownNumber_25 >>> 0;
                        if (object.maybeBoolean_29 != null)
                            message.maybeBoolean_29 = object.maybeBoolean_29 >>> 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an AttachedWebsite message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @static
                     * @param {mediaitem.Metadata.ReferencedMessage.AttachedWebsite} message AttachedWebsite
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    AttachedWebsite.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.url_1 != null && message.hasOwnProperty("url_1")) {
                            object.url_1 = message.url_1;
                            if (options.oneofs)
                                object._url_1 = "url_1";
                        }
                        if (message.url_2 != null && message.hasOwnProperty("url_2")) {
                            object.url_2 = message.url_2;
                            if (options.oneofs)
                                object._url_2 = "url_2";
                        }
                        if (message.url_4 != null && message.hasOwnProperty("url_4")) {
                            object.url_4 = message.url_4;
                            if (options.oneofs)
                                object._url_4 = "url_4";
                        }
                        if (message.url_5 != null && message.hasOwnProperty("url_5")) {
                            object.url_5 = message.url_5;
                            if (options.oneofs)
                                object._url_5 = "url_5";
                        }
                        if (message.preview != null && message.hasOwnProperty("preview")) {
                            object.preview = message.preview;
                            if (options.oneofs)
                                object._preview = "preview";
                        }
                        if (message.maybeBoolean_10 != null && message.hasOwnProperty("maybeBoolean_10")) {
                            object.maybeBoolean_10 = message.maybeBoolean_10;
                            if (options.oneofs)
                                object._maybeBoolean_10 = "maybeBoolean_10";
                        }
                        if (message.unknownBytes_16 != null && message.hasOwnProperty("unknownBytes_16")) {
                            object.unknownBytes_16 = options.bytes === String ? $util.base64.encode(message.unknownBytes_16, 0, message.unknownBytes_16.length) : options.bytes === Array ? Array.prototype.slice.call(message.unknownBytes_16) : message.unknownBytes_16;
                            if (options.oneofs)
                                object._unknownBytes_16 = "unknownBytes_16";
                        }
                        if (message.additionalInfo != null && message.hasOwnProperty("additionalInfo")) {
                            object.additionalInfo = $root.mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo.toObject(message.additionalInfo, options);
                            if (options.oneofs)
                                object._additionalInfo = "additionalInfo";
                        }
                        if (message.previewMediaWhatsappDownloadUrlLong != null && message.hasOwnProperty("previewMediaWhatsappDownloadUrlLong")) {
                            object.previewMediaWhatsappDownloadUrlLong = message.previewMediaWhatsappDownloadUrlLong;
                            if (options.oneofs)
                                object._previewMediaWhatsappDownloadUrlLong = "previewMediaWhatsappDownloadUrlLong";
                        }
                        if (message.unknownBytes_20 != null && message.hasOwnProperty("unknownBytes_20")) {
                            object.unknownBytes_20 = options.bytes === String ? $util.base64.encode(message.unknownBytes_20, 0, message.unknownBytes_20.length) : options.bytes === Array ? Array.prototype.slice.call(message.unknownBytes_20) : message.unknownBytes_20;
                            if (options.oneofs)
                                object._unknownBytes_20 = "unknownBytes_20";
                        }
                        if (message.unknownBytes_21 != null && message.hasOwnProperty("unknownBytes_21")) {
                            object.unknownBytes_21 = options.bytes === String ? $util.base64.encode(message.unknownBytes_21, 0, message.unknownBytes_21.length) : options.bytes === Array ? Array.prototype.slice.call(message.unknownBytes_21) : message.unknownBytes_21;
                            if (options.oneofs)
                                object._unknownBytes_21 = "unknownBytes_21";
                        }
                        if (message.unknownBytes_22 != null && message.hasOwnProperty("unknownBytes_22")) {
                            object.unknownBytes_22 = options.bytes === String ? $util.base64.encode(message.unknownBytes_22, 0, message.unknownBytes_22.length) : options.bytes === Array ? Array.prototype.slice.call(message.unknownBytes_22) : message.unknownBytes_22;
                            if (options.oneofs)
                                object._unknownBytes_22 = "unknownBytes_22";
                        }
                        if (message.timestampUnixMilliseconds != null && message.hasOwnProperty("timestampUnixMilliseconds")) {
                            if (typeof message.timestampUnixMilliseconds === "number")
                                object.timestampUnixMilliseconds = options.longs === String ? String(message.timestampUnixMilliseconds) : message.timestampUnixMilliseconds;
                            else
                                object.timestampUnixMilliseconds = options.longs === String ? $util.Long.prototype.toString.call(message.timestampUnixMilliseconds) : options.longs === Number ? new $util.LongBits(message.timestampUnixMilliseconds.low >>> 0, message.timestampUnixMilliseconds.high >>> 0).toNumber(true) : message.timestampUnixMilliseconds;
                            if (options.oneofs)
                                object._timestampUnixMilliseconds = "timestampUnixMilliseconds";
                        }
                        if (message.unknownNumber_24 != null && message.hasOwnProperty("unknownNumber_24")) {
                            object.unknownNumber_24 = message.unknownNumber_24;
                            if (options.oneofs)
                                object._unknownNumber_24 = "unknownNumber_24";
                        }
                        if (message.unknownNumber_25 != null && message.hasOwnProperty("unknownNumber_25")) {
                            object.unknownNumber_25 = message.unknownNumber_25;
                            if (options.oneofs)
                                object._unknownNumber_25 = "unknownNumber_25";
                        }
                        if (message.maybeBoolean_29 != null && message.hasOwnProperty("maybeBoolean_29")) {
                            object.maybeBoolean_29 = message.maybeBoolean_29;
                            if (options.oneofs)
                                object._maybeBoolean_29 = "maybeBoolean_29";
                        }
                        return object;
                    };
    
                    /**
                     * Converts this AttachedWebsite to JSON.
                     * @function toJSON
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    AttachedWebsite.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for AttachedWebsite
                     * @function getTypeUrl
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    AttachedWebsite.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/mediaitem.Metadata.ReferencedMessage.AttachedWebsite";
                    };
    
                    AttachedWebsite.AdditionalInfo = (function() {
    
                        /**
                         * Properties of an AdditionalInfo.
                         * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                         * @interface IAdditionalInfo
                         * @property {Array.<string>|null} [mentionedJid] AdditionalInfo mentionedJid
                         */
    
                        /**
                         * Constructs a new AdditionalInfo.
                         * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite
                         * @classdesc Represents an AdditionalInfo.
                         * @implements IAdditionalInfo
                         * @constructor
                         * @param {mediaitem.Metadata.ReferencedMessage.AttachedWebsite.IAdditionalInfo=} [properties] Properties to set
                         */
                        function AdditionalInfo(properties) {
                            this.mentionedJid = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * AdditionalInfo mentionedJid.
                         * @member {Array.<string>} mentionedJid
                         * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo
                         * @instance
                         */
                        AdditionalInfo.prototype.mentionedJid = $util.emptyArray;
    
                        /**
                         * Creates a new AdditionalInfo instance using the specified properties.
                         * @function create
                         * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo
                         * @static
                         * @param {mediaitem.Metadata.ReferencedMessage.AttachedWebsite.IAdditionalInfo=} [properties] Properties to set
                         * @returns {mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo} AdditionalInfo instance
                         */
                        AdditionalInfo.create = function create(properties) {
                            return new AdditionalInfo(properties);
                        };
    
                        /**
                         * Encodes the specified AdditionalInfo message. Does not implicitly {@link mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo.verify|verify} messages.
                         * @function encode
                         * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo
                         * @static
                         * @param {mediaitem.Metadata.ReferencedMessage.AttachedWebsite.IAdditionalInfo} message AdditionalInfo message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AdditionalInfo.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.mentionedJid != null && message.mentionedJid.length)
                                for (var i = 0; i < message.mentionedJid.length; ++i)
                                    writer.uint32(/* id 15, wireType 2 =*/122).string(message.mentionedJid[i]);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified AdditionalInfo message, length delimited. Does not implicitly {@link mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo
                         * @static
                         * @param {mediaitem.Metadata.ReferencedMessage.AttachedWebsite.IAdditionalInfo} message AdditionalInfo message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AdditionalInfo.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an AdditionalInfo message from the specified reader or buffer.
                         * @function decode
                         * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo} AdditionalInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AdditionalInfo.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 15: {
                                        if (!(message.mentionedJid && message.mentionedJid.length))
                                            message.mentionedJid = [];
                                        message.mentionedJid.push(reader.string());
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes an AdditionalInfo message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo} AdditionalInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AdditionalInfo.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an AdditionalInfo message.
                         * @function verify
                         * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        AdditionalInfo.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.mentionedJid != null && message.hasOwnProperty("mentionedJid")) {
                                if (!Array.isArray(message.mentionedJid))
                                    return "mentionedJid: array expected";
                                for (var i = 0; i < message.mentionedJid.length; ++i)
                                    if (!$util.isString(message.mentionedJid[i]))
                                        return "mentionedJid: string[] expected";
                            }
                            return null;
                        };
    
                        /**
                         * Creates an AdditionalInfo message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo} AdditionalInfo
                         */
                        AdditionalInfo.fromObject = function fromObject(object) {
                            if (object instanceof $root.mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo)
                                return object;
                            var message = new $root.mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo();
                            if (object.mentionedJid) {
                                if (!Array.isArray(object.mentionedJid))
                                    throw TypeError(".mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo.mentionedJid: array expected");
                                message.mentionedJid = [];
                                for (var i = 0; i < object.mentionedJid.length; ++i)
                                    message.mentionedJid[i] = String(object.mentionedJid[i]);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an AdditionalInfo message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo
                         * @static
                         * @param {mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo} message AdditionalInfo
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        AdditionalInfo.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.mentionedJid = [];
                            if (message.mentionedJid && message.mentionedJid.length) {
                                object.mentionedJid = [];
                                for (var j = 0; j < message.mentionedJid.length; ++j)
                                    object.mentionedJid[j] = message.mentionedJid[j];
                            }
                            return object;
                        };
    
                        /**
                         * Converts this AdditionalInfo to JSON.
                         * @function toJSON
                         * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        AdditionalInfo.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for AdditionalInfo
                         * @function getTypeUrl
                         * @memberof mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        AdditionalInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/mediaitem.Metadata.ReferencedMessage.AttachedWebsite.AdditionalInfo";
                        };
    
                        return AdditionalInfo;
                    })();
    
                    return AttachedWebsite;
                })();
    
                ReferencedMessage.AttachedPDF = (function() {
    
                    /**
                     * Properties of an AttachedPDF.
                     * @memberof mediaitem.Metadata.ReferencedMessage
                     * @interface IAttachedPDF
                     * @property {string|null} [whatsappDownloadUrl] Format "https://mmg.whatsapp.net/ *.enc"
                     * @property {string|null} [mimeType] MIME-Type of this media
                     * @property {string|null} [title] Title of this media. Set e.g. for PDFs.
                     * @property {Uint8Array|null} [unknownBytes_4] AttachedPDF unknownBytes_4
                     * @property {number|null} [unknownNumber_5] AttachedPDF unknownNumber_5
                     * @property {number|null} [unknownNumber_6] AttachedPDF unknownNumber_6
                     * @property {number|null} [unknownNumber_7] AttachedPDF unknownNumber_7
                     * @property {string|null} [fileName] File name of the PDF, including extension
                     * @property {Uint8Array|null} [unknownBytes_9] AttachedPDF unknownBytes_9
                     * @property {string|null} [whatsappDownloadUrlLong] Another url to download the media from.
                     * Appears to hold same contents as the url
                     * at `whatsapp_download_url`, but has a significantly
                     * longer format and misses the domain.
                     * Format: "*.enc?*"
                     * @property {number|null} [mediaTimestampUnixMilliseconds] Appears to be timestamp of the referenced media
                     * @property {number|null} [maybeBoolean_12] AttachedPDF maybeBoolean_12
                     * @property {Uint8Array|null} [unknownBytes_16] AttachedPDF unknownBytes_16
                     */
    
                    /**
                     * Constructs a new AttachedPDF.
                     * @memberof mediaitem.Metadata.ReferencedMessage
                     * @classdesc Represents an AttachedPDF.
                     * @implements IAttachedPDF
                     * @constructor
                     * @param {mediaitem.Metadata.ReferencedMessage.IAttachedPDF=} [properties] Properties to set
                     */
                    function AttachedPDF(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Format "https://mmg.whatsapp.net/ *.enc"
                     * @member {string|null|undefined} whatsappDownloadUrl
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     */
                    AttachedPDF.prototype.whatsappDownloadUrl = null;
    
                    /**
                     * MIME-Type of this media
                     * @member {string|null|undefined} mimeType
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     */
                    AttachedPDF.prototype.mimeType = null;
    
                    /**
                     * Title of this media. Set e.g. for PDFs.
                     * @member {string|null|undefined} title
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     */
                    AttachedPDF.prototype.title = null;
    
                    /**
                     * AttachedPDF unknownBytes_4.
                     * @member {Uint8Array|null|undefined} unknownBytes_4
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     */
                    AttachedPDF.prototype.unknownBytes_4 = null;
    
                    /**
                     * AttachedPDF unknownNumber_5.
                     * @member {number|null|undefined} unknownNumber_5
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     */
                    AttachedPDF.prototype.unknownNumber_5 = null;
    
                    /**
                     * AttachedPDF unknownNumber_6.
                     * @member {number|null|undefined} unknownNumber_6
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     */
                    AttachedPDF.prototype.unknownNumber_6 = null;
    
                    /**
                     * AttachedPDF unknownNumber_7.
                     * @member {number|null|undefined} unknownNumber_7
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     */
                    AttachedPDF.prototype.unknownNumber_7 = null;
    
                    /**
                     * File name of the PDF, including extension
                     * @member {string|null|undefined} fileName
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     */
                    AttachedPDF.prototype.fileName = null;
    
                    /**
                     * AttachedPDF unknownBytes_9.
                     * @member {Uint8Array|null|undefined} unknownBytes_9
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     */
                    AttachedPDF.prototype.unknownBytes_9 = null;
    
                    /**
                     * Another url to download the media from.
                     * Appears to hold same contents as the url
                     * at `whatsapp_download_url`, but has a significantly
                     * longer format and misses the domain.
                     * Format: "*.enc?*"
                     * @member {string|null|undefined} whatsappDownloadUrlLong
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     */
                    AttachedPDF.prototype.whatsappDownloadUrlLong = null;
    
                    /**
                     * Appears to be timestamp of the referenced media
                     * @member {number|null|undefined} mediaTimestampUnixMilliseconds
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     */
                    AttachedPDF.prototype.mediaTimestampUnixMilliseconds = null;
    
                    /**
                     * AttachedPDF maybeBoolean_12.
                     * @member {number|null|undefined} maybeBoolean_12
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     */
                    AttachedPDF.prototype.maybeBoolean_12 = null;
    
                    /**
                     * AttachedPDF unknownBytes_16.
                     * @member {Uint8Array|null|undefined} unknownBytes_16
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     */
                    AttachedPDF.prototype.unknownBytes_16 = null;
    
                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;
    
                    /**
                     * AttachedPDF _whatsappDownloadUrl.
                     * @member {"whatsappDownloadUrl"|undefined} _whatsappDownloadUrl
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     */
                    Object.defineProperty(AttachedPDF.prototype, "_whatsappDownloadUrl", {
                        get: $util.oneOfGetter($oneOfFields = ["whatsappDownloadUrl"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedPDF _mimeType.
                     * @member {"mimeType"|undefined} _mimeType
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     */
                    Object.defineProperty(AttachedPDF.prototype, "_mimeType", {
                        get: $util.oneOfGetter($oneOfFields = ["mimeType"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedPDF _title.
                     * @member {"title"|undefined} _title
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     */
                    Object.defineProperty(AttachedPDF.prototype, "_title", {
                        get: $util.oneOfGetter($oneOfFields = ["title"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedPDF _unknownBytes_4.
                     * @member {"unknownBytes_4"|undefined} _unknownBytes_4
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     */
                    Object.defineProperty(AttachedPDF.prototype, "_unknownBytes_4", {
                        get: $util.oneOfGetter($oneOfFields = ["unknownBytes_4"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedPDF _unknownNumber_5.
                     * @member {"unknownNumber_5"|undefined} _unknownNumber_5
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     */
                    Object.defineProperty(AttachedPDF.prototype, "_unknownNumber_5", {
                        get: $util.oneOfGetter($oneOfFields = ["unknownNumber_5"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedPDF _unknownNumber_6.
                     * @member {"unknownNumber_6"|undefined} _unknownNumber_6
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     */
                    Object.defineProperty(AttachedPDF.prototype, "_unknownNumber_6", {
                        get: $util.oneOfGetter($oneOfFields = ["unknownNumber_6"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedPDF _unknownNumber_7.
                     * @member {"unknownNumber_7"|undefined} _unknownNumber_7
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     */
                    Object.defineProperty(AttachedPDF.prototype, "_unknownNumber_7", {
                        get: $util.oneOfGetter($oneOfFields = ["unknownNumber_7"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedPDF _fileName.
                     * @member {"fileName"|undefined} _fileName
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     */
                    Object.defineProperty(AttachedPDF.prototype, "_fileName", {
                        get: $util.oneOfGetter($oneOfFields = ["fileName"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedPDF _unknownBytes_9.
                     * @member {"unknownBytes_9"|undefined} _unknownBytes_9
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     */
                    Object.defineProperty(AttachedPDF.prototype, "_unknownBytes_9", {
                        get: $util.oneOfGetter($oneOfFields = ["unknownBytes_9"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedPDF _whatsappDownloadUrlLong.
                     * @member {"whatsappDownloadUrlLong"|undefined} _whatsappDownloadUrlLong
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     */
                    Object.defineProperty(AttachedPDF.prototype, "_whatsappDownloadUrlLong", {
                        get: $util.oneOfGetter($oneOfFields = ["whatsappDownloadUrlLong"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedPDF _mediaTimestampUnixMilliseconds.
                     * @member {"mediaTimestampUnixMilliseconds"|undefined} _mediaTimestampUnixMilliseconds
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     */
                    Object.defineProperty(AttachedPDF.prototype, "_mediaTimestampUnixMilliseconds", {
                        get: $util.oneOfGetter($oneOfFields = ["mediaTimestampUnixMilliseconds"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedPDF _maybeBoolean_12.
                     * @member {"maybeBoolean_12"|undefined} _maybeBoolean_12
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     */
                    Object.defineProperty(AttachedPDF.prototype, "_maybeBoolean_12", {
                        get: $util.oneOfGetter($oneOfFields = ["maybeBoolean_12"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * AttachedPDF _unknownBytes_16.
                     * @member {"unknownBytes_16"|undefined} _unknownBytes_16
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     */
                    Object.defineProperty(AttachedPDF.prototype, "_unknownBytes_16", {
                        get: $util.oneOfGetter($oneOfFields = ["unknownBytes_16"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * Creates a new AttachedPDF instance using the specified properties.
                     * @function create
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @static
                     * @param {mediaitem.Metadata.ReferencedMessage.IAttachedPDF=} [properties] Properties to set
                     * @returns {mediaitem.Metadata.ReferencedMessage.AttachedPDF} AttachedPDF instance
                     */
                    AttachedPDF.create = function create(properties) {
                        return new AttachedPDF(properties);
                    };
    
                    /**
                     * Encodes the specified AttachedPDF message. Does not implicitly {@link mediaitem.Metadata.ReferencedMessage.AttachedPDF.verify|verify} messages.
                     * @function encode
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @static
                     * @param {mediaitem.Metadata.ReferencedMessage.IAttachedPDF} message AttachedPDF message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AttachedPDF.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.whatsappDownloadUrl != null && Object.hasOwnProperty.call(message, "whatsappDownloadUrl"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.whatsappDownloadUrl);
                        if (message.mimeType != null && Object.hasOwnProperty.call(message, "mimeType"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.mimeType);
                        if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
                        if (message.unknownBytes_4 != null && Object.hasOwnProperty.call(message, "unknownBytes_4"))
                            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.unknownBytes_4);
                        if (message.unknownNumber_5 != null && Object.hasOwnProperty.call(message, "unknownNumber_5"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.unknownNumber_5);
                        if (message.unknownNumber_6 != null && Object.hasOwnProperty.call(message, "unknownNumber_6"))
                            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.unknownNumber_6);
                        if (message.unknownNumber_7 != null && Object.hasOwnProperty.call(message, "unknownNumber_7"))
                            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.unknownNumber_7);
                        if (message.fileName != null && Object.hasOwnProperty.call(message, "fileName"))
                            writer.uint32(/* id 8, wireType 2 =*/66).string(message.fileName);
                        if (message.unknownBytes_9 != null && Object.hasOwnProperty.call(message, "unknownBytes_9"))
                            writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.unknownBytes_9);
                        if (message.whatsappDownloadUrlLong != null && Object.hasOwnProperty.call(message, "whatsappDownloadUrlLong"))
                            writer.uint32(/* id 10, wireType 2 =*/82).string(message.whatsappDownloadUrlLong);
                        if (message.mediaTimestampUnixMilliseconds != null && Object.hasOwnProperty.call(message, "mediaTimestampUnixMilliseconds"))
                            writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.mediaTimestampUnixMilliseconds);
                        if (message.maybeBoolean_12 != null && Object.hasOwnProperty.call(message, "maybeBoolean_12"))
                            writer.uint32(/* id 12, wireType 0 =*/96).uint64(message.maybeBoolean_12);
                        if (message.unknownBytes_16 != null && Object.hasOwnProperty.call(message, "unknownBytes_16"))
                            writer.uint32(/* id 16, wireType 2 =*/130).bytes(message.unknownBytes_16);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified AttachedPDF message, length delimited. Does not implicitly {@link mediaitem.Metadata.ReferencedMessage.AttachedPDF.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @static
                     * @param {mediaitem.Metadata.ReferencedMessage.IAttachedPDF} message AttachedPDF message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AttachedPDF.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an AttachedPDF message from the specified reader or buffer.
                     * @function decode
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {mediaitem.Metadata.ReferencedMessage.AttachedPDF} AttachedPDF
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AttachedPDF.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mediaitem.Metadata.ReferencedMessage.AttachedPDF();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.whatsappDownloadUrl = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.mimeType = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.title = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.unknownBytes_4 = reader.bytes();
                                    break;
                                }
                            case 5: {
                                    message.unknownNumber_5 = reader.uint32();
                                    break;
                                }
                            case 6: {
                                    message.unknownNumber_6 = reader.uint32();
                                    break;
                                }
                            case 7: {
                                    message.unknownNumber_7 = reader.uint32();
                                    break;
                                }
                            case 8: {
                                    message.fileName = reader.string();
                                    break;
                                }
                            case 9: {
                                    message.unknownBytes_9 = reader.bytes();
                                    break;
                                }
                            case 10: {
                                    message.whatsappDownloadUrlLong = reader.string();
                                    break;
                                }
                            case 11: {
                                    message.mediaTimestampUnixMilliseconds = reader.uint64();
                                    break;
                                }
                            case 12: {
                                    message.maybeBoolean_12 = reader.uint64();
                                    break;
                                }
                            case 16: {
                                    message.unknownBytes_16 = reader.bytes();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an AttachedPDF message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {mediaitem.Metadata.ReferencedMessage.AttachedPDF} AttachedPDF
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AttachedPDF.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an AttachedPDF message.
                     * @function verify
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    AttachedPDF.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.whatsappDownloadUrl != null && message.hasOwnProperty("whatsappDownloadUrl")) {
                            properties._whatsappDownloadUrl = 1;
                            if (!$util.isString(message.whatsappDownloadUrl))
                                return "whatsappDownloadUrl: string expected";
                        }
                        if (message.mimeType != null && message.hasOwnProperty("mimeType")) {
                            properties._mimeType = 1;
                            if (!$util.isString(message.mimeType))
                                return "mimeType: string expected";
                        }
                        if (message.title != null && message.hasOwnProperty("title")) {
                            properties._title = 1;
                            if (!$util.isString(message.title))
                                return "title: string expected";
                        }
                        if (message.unknownBytes_4 != null && message.hasOwnProperty("unknownBytes_4")) {
                            properties._unknownBytes_4 = 1;
                            if (!(message.unknownBytes_4 && typeof message.unknownBytes_4.length === "number" || $util.isString(message.unknownBytes_4)))
                                return "unknownBytes_4: buffer expected";
                        }
                        if (message.unknownNumber_5 != null && message.hasOwnProperty("unknownNumber_5")) {
                            properties._unknownNumber_5 = 1;
                            if (!$util.isInteger(message.unknownNumber_5))
                                return "unknownNumber_5: integer expected";
                        }
                        if (message.unknownNumber_6 != null && message.hasOwnProperty("unknownNumber_6")) {
                            properties._unknownNumber_6 = 1;
                            if (!$util.isInteger(message.unknownNumber_6))
                                return "unknownNumber_6: integer expected";
                        }
                        if (message.unknownNumber_7 != null && message.hasOwnProperty("unknownNumber_7")) {
                            properties._unknownNumber_7 = 1;
                            if (!$util.isInteger(message.unknownNumber_7))
                                return "unknownNumber_7: integer expected";
                        }
                        if (message.fileName != null && message.hasOwnProperty("fileName")) {
                            properties._fileName = 1;
                            if (!$util.isString(message.fileName))
                                return "fileName: string expected";
                        }
                        if (message.unknownBytes_9 != null && message.hasOwnProperty("unknownBytes_9")) {
                            properties._unknownBytes_9 = 1;
                            if (!(message.unknownBytes_9 && typeof message.unknownBytes_9.length === "number" || $util.isString(message.unknownBytes_9)))
                                return "unknownBytes_9: buffer expected";
                        }
                        if (message.whatsappDownloadUrlLong != null && message.hasOwnProperty("whatsappDownloadUrlLong")) {
                            properties._whatsappDownloadUrlLong = 1;
                            if (!$util.isString(message.whatsappDownloadUrlLong))
                                return "whatsappDownloadUrlLong: string expected";
                        }
                        if (message.mediaTimestampUnixMilliseconds != null && message.hasOwnProperty("mediaTimestampUnixMilliseconds")) {
                            properties._mediaTimestampUnixMilliseconds = 1;
                            if (!$util.isInteger(message.mediaTimestampUnixMilliseconds) && !(message.mediaTimestampUnixMilliseconds && $util.isInteger(message.mediaTimestampUnixMilliseconds.low) && $util.isInteger(message.mediaTimestampUnixMilliseconds.high)))
                                return "mediaTimestampUnixMilliseconds: integer|Long expected";
                        }
                        if (message.maybeBoolean_12 != null && message.hasOwnProperty("maybeBoolean_12")) {
                            properties._maybeBoolean_12 = 1;
                            if (!$util.isInteger(message.maybeBoolean_12) && !(message.maybeBoolean_12 && $util.isInteger(message.maybeBoolean_12.low) && $util.isInteger(message.maybeBoolean_12.high)))
                                return "maybeBoolean_12: integer|Long expected";
                        }
                        if (message.unknownBytes_16 != null && message.hasOwnProperty("unknownBytes_16")) {
                            properties._unknownBytes_16 = 1;
                            if (!(message.unknownBytes_16 && typeof message.unknownBytes_16.length === "number" || $util.isString(message.unknownBytes_16)))
                                return "unknownBytes_16: buffer expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates an AttachedPDF message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {mediaitem.Metadata.ReferencedMessage.AttachedPDF} AttachedPDF
                     */
                    AttachedPDF.fromObject = function fromObject(object) {
                        if (object instanceof $root.mediaitem.Metadata.ReferencedMessage.AttachedPDF)
                            return object;
                        var message = new $root.mediaitem.Metadata.ReferencedMessage.AttachedPDF();
                        if (object.whatsappDownloadUrl != null)
                            message.whatsappDownloadUrl = String(object.whatsappDownloadUrl);
                        if (object.mimeType != null)
                            message.mimeType = String(object.mimeType);
                        if (object.title != null)
                            message.title = String(object.title);
                        if (object.unknownBytes_4 != null)
                            if (typeof object.unknownBytes_4 === "string")
                                $util.base64.decode(object.unknownBytes_4, message.unknownBytes_4 = $util.newBuffer($util.base64.length(object.unknownBytes_4)), 0);
                            else if (object.unknownBytes_4.length >= 0)
                                message.unknownBytes_4 = object.unknownBytes_4;
                        if (object.unknownNumber_5 != null)
                            message.unknownNumber_5 = object.unknownNumber_5 >>> 0;
                        if (object.unknownNumber_6 != null)
                            message.unknownNumber_6 = object.unknownNumber_6 >>> 0;
                        if (object.unknownNumber_7 != null)
                            message.unknownNumber_7 = object.unknownNumber_7 >>> 0;
                        if (object.fileName != null)
                            message.fileName = String(object.fileName);
                        if (object.unknownBytes_9 != null)
                            if (typeof object.unknownBytes_9 === "string")
                                $util.base64.decode(object.unknownBytes_9, message.unknownBytes_9 = $util.newBuffer($util.base64.length(object.unknownBytes_9)), 0);
                            else if (object.unknownBytes_9.length >= 0)
                                message.unknownBytes_9 = object.unknownBytes_9;
                        if (object.whatsappDownloadUrlLong != null)
                            message.whatsappDownloadUrlLong = String(object.whatsappDownloadUrlLong);
                        if (object.mediaTimestampUnixMilliseconds != null)
                            if ($util.Long)
                                (message.mediaTimestampUnixMilliseconds = $util.Long.fromValue(object.mediaTimestampUnixMilliseconds)).unsigned = true;
                            else if (typeof object.mediaTimestampUnixMilliseconds === "string")
                                message.mediaTimestampUnixMilliseconds = parseInt(object.mediaTimestampUnixMilliseconds, 10);
                            else if (typeof object.mediaTimestampUnixMilliseconds === "number")
                                message.mediaTimestampUnixMilliseconds = object.mediaTimestampUnixMilliseconds;
                            else if (typeof object.mediaTimestampUnixMilliseconds === "object")
                                message.mediaTimestampUnixMilliseconds = new $util.LongBits(object.mediaTimestampUnixMilliseconds.low >>> 0, object.mediaTimestampUnixMilliseconds.high >>> 0).toNumber(true);
                        if (object.maybeBoolean_12 != null)
                            if ($util.Long)
                                (message.maybeBoolean_12 = $util.Long.fromValue(object.maybeBoolean_12)).unsigned = true;
                            else if (typeof object.maybeBoolean_12 === "string")
                                message.maybeBoolean_12 = parseInt(object.maybeBoolean_12, 10);
                            else if (typeof object.maybeBoolean_12 === "number")
                                message.maybeBoolean_12 = object.maybeBoolean_12;
                            else if (typeof object.maybeBoolean_12 === "object")
                                message.maybeBoolean_12 = new $util.LongBits(object.maybeBoolean_12.low >>> 0, object.maybeBoolean_12.high >>> 0).toNumber(true);
                        if (object.unknownBytes_16 != null)
                            if (typeof object.unknownBytes_16 === "string")
                                $util.base64.decode(object.unknownBytes_16, message.unknownBytes_16 = $util.newBuffer($util.base64.length(object.unknownBytes_16)), 0);
                            else if (object.unknownBytes_16.length >= 0)
                                message.unknownBytes_16 = object.unknownBytes_16;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an AttachedPDF message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @static
                     * @param {mediaitem.Metadata.ReferencedMessage.AttachedPDF} message AttachedPDF
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    AttachedPDF.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.whatsappDownloadUrl != null && message.hasOwnProperty("whatsappDownloadUrl")) {
                            object.whatsappDownloadUrl = message.whatsappDownloadUrl;
                            if (options.oneofs)
                                object._whatsappDownloadUrl = "whatsappDownloadUrl";
                        }
                        if (message.mimeType != null && message.hasOwnProperty("mimeType")) {
                            object.mimeType = message.mimeType;
                            if (options.oneofs)
                                object._mimeType = "mimeType";
                        }
                        if (message.title != null && message.hasOwnProperty("title")) {
                            object.title = message.title;
                            if (options.oneofs)
                                object._title = "title";
                        }
                        if (message.unknownBytes_4 != null && message.hasOwnProperty("unknownBytes_4")) {
                            object.unknownBytes_4 = options.bytes === String ? $util.base64.encode(message.unknownBytes_4, 0, message.unknownBytes_4.length) : options.bytes === Array ? Array.prototype.slice.call(message.unknownBytes_4) : message.unknownBytes_4;
                            if (options.oneofs)
                                object._unknownBytes_4 = "unknownBytes_4";
                        }
                        if (message.unknownNumber_5 != null && message.hasOwnProperty("unknownNumber_5")) {
                            object.unknownNumber_5 = message.unknownNumber_5;
                            if (options.oneofs)
                                object._unknownNumber_5 = "unknownNumber_5";
                        }
                        if (message.unknownNumber_6 != null && message.hasOwnProperty("unknownNumber_6")) {
                            object.unknownNumber_6 = message.unknownNumber_6;
                            if (options.oneofs)
                                object._unknownNumber_6 = "unknownNumber_6";
                        }
                        if (message.unknownNumber_7 != null && message.hasOwnProperty("unknownNumber_7")) {
                            object.unknownNumber_7 = message.unknownNumber_7;
                            if (options.oneofs)
                                object._unknownNumber_7 = "unknownNumber_7";
                        }
                        if (message.fileName != null && message.hasOwnProperty("fileName")) {
                            object.fileName = message.fileName;
                            if (options.oneofs)
                                object._fileName = "fileName";
                        }
                        if (message.unknownBytes_9 != null && message.hasOwnProperty("unknownBytes_9")) {
                            object.unknownBytes_9 = options.bytes === String ? $util.base64.encode(message.unknownBytes_9, 0, message.unknownBytes_9.length) : options.bytes === Array ? Array.prototype.slice.call(message.unknownBytes_9) : message.unknownBytes_9;
                            if (options.oneofs)
                                object._unknownBytes_9 = "unknownBytes_9";
                        }
                        if (message.whatsappDownloadUrlLong != null && message.hasOwnProperty("whatsappDownloadUrlLong")) {
                            object.whatsappDownloadUrlLong = message.whatsappDownloadUrlLong;
                            if (options.oneofs)
                                object._whatsappDownloadUrlLong = "whatsappDownloadUrlLong";
                        }
                        if (message.mediaTimestampUnixMilliseconds != null && message.hasOwnProperty("mediaTimestampUnixMilliseconds")) {
                            if (typeof message.mediaTimestampUnixMilliseconds === "number")
                                object.mediaTimestampUnixMilliseconds = options.longs === String ? String(message.mediaTimestampUnixMilliseconds) : message.mediaTimestampUnixMilliseconds;
                            else
                                object.mediaTimestampUnixMilliseconds = options.longs === String ? $util.Long.prototype.toString.call(message.mediaTimestampUnixMilliseconds) : options.longs === Number ? new $util.LongBits(message.mediaTimestampUnixMilliseconds.low >>> 0, message.mediaTimestampUnixMilliseconds.high >>> 0).toNumber(true) : message.mediaTimestampUnixMilliseconds;
                            if (options.oneofs)
                                object._mediaTimestampUnixMilliseconds = "mediaTimestampUnixMilliseconds";
                        }
                        if (message.maybeBoolean_12 != null && message.hasOwnProperty("maybeBoolean_12")) {
                            if (typeof message.maybeBoolean_12 === "number")
                                object.maybeBoolean_12 = options.longs === String ? String(message.maybeBoolean_12) : message.maybeBoolean_12;
                            else
                                object.maybeBoolean_12 = options.longs === String ? $util.Long.prototype.toString.call(message.maybeBoolean_12) : options.longs === Number ? new $util.LongBits(message.maybeBoolean_12.low >>> 0, message.maybeBoolean_12.high >>> 0).toNumber(true) : message.maybeBoolean_12;
                            if (options.oneofs)
                                object._maybeBoolean_12 = "maybeBoolean_12";
                        }
                        if (message.unknownBytes_16 != null && message.hasOwnProperty("unknownBytes_16")) {
                            object.unknownBytes_16 = options.bytes === String ? $util.base64.encode(message.unknownBytes_16, 0, message.unknownBytes_16.length) : options.bytes === Array ? Array.prototype.slice.call(message.unknownBytes_16) : message.unknownBytes_16;
                            if (options.oneofs)
                                object._unknownBytes_16 = "unknownBytes_16";
                        }
                        return object;
                    };
    
                    /**
                     * Converts this AttachedPDF to JSON.
                     * @function toJSON
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    AttachedPDF.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for AttachedPDF
                     * @function getTypeUrl
                     * @memberof mediaitem.Metadata.ReferencedMessage.AttachedPDF
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    AttachedPDF.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/mediaitem.Metadata.ReferencedMessage.AttachedPDF";
                    };
    
                    return AttachedPDF;
                })();
    
                return ReferencedMessage;
            })();
    
            Metadata.CachedPreviewMedia = (function() {
    
                /**
                 * Properties of a CachedPreviewMedia.
                 * @memberof mediaitem.Metadata
                 * @interface ICachedPreviewMedia
                 * @property {number|null} [unkownNumber_3] CachedPreviewMedia unkownNumber_3
                 * @property {number|null} [unknownNumber_4] CachedPreviewMedia unknownNumber_4
                 * @property {string|null} [whatsappDownloadUrlLong] Another url to download the media from.
                 * Appears to hold same contents as the url
                 * at `whatsapp_download_url`, but has a significantly
                 * longer format and misses the domain.
                 * Format: "*.enc?*"
                 * @property {Uint8Array|null} [unknownBytes_6] CachedPreviewMedia unknownBytes_6
                 * @property {Uint8Array|null} [unknownBytes_7] CachedPreviewMedia unknownBytes_7
                 * @property {string|null} [localPath] The local path (relative to /Message) of this preview
                 * media.
                 * @property {number|null} [timestampUnixMilliseconds] CachedPreviewMedia timestampUnixMilliseconds
                 */
    
                /**
                 * Constructs a new CachedPreviewMedia.
                 * @memberof mediaitem.Metadata
                 * @classdesc Represents a CachedPreviewMedia.
                 * @implements ICachedPreviewMedia
                 * @constructor
                 * @param {mediaitem.Metadata.ICachedPreviewMedia=} [properties] Properties to set
                 */
                function CachedPreviewMedia(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * CachedPreviewMedia unkownNumber_3.
                 * @member {number|null|undefined} unkownNumber_3
                 * @memberof mediaitem.Metadata.CachedPreviewMedia
                 * @instance
                 */
                CachedPreviewMedia.prototype.unkownNumber_3 = null;
    
                /**
                 * CachedPreviewMedia unknownNumber_4.
                 * @member {number|null|undefined} unknownNumber_4
                 * @memberof mediaitem.Metadata.CachedPreviewMedia
                 * @instance
                 */
                CachedPreviewMedia.prototype.unknownNumber_4 = null;
    
                /**
                 * Another url to download the media from.
                 * Appears to hold same contents as the url
                 * at `whatsapp_download_url`, but has a significantly
                 * longer format and misses the domain.
                 * Format: "*.enc?*"
                 * @member {string|null|undefined} whatsappDownloadUrlLong
                 * @memberof mediaitem.Metadata.CachedPreviewMedia
                 * @instance
                 */
                CachedPreviewMedia.prototype.whatsappDownloadUrlLong = null;
    
                /**
                 * CachedPreviewMedia unknownBytes_6.
                 * @member {Uint8Array|null|undefined} unknownBytes_6
                 * @memberof mediaitem.Metadata.CachedPreviewMedia
                 * @instance
                 */
                CachedPreviewMedia.prototype.unknownBytes_6 = null;
    
                /**
                 * CachedPreviewMedia unknownBytes_7.
                 * @member {Uint8Array|null|undefined} unknownBytes_7
                 * @memberof mediaitem.Metadata.CachedPreviewMedia
                 * @instance
                 */
                CachedPreviewMedia.prototype.unknownBytes_7 = null;
    
                /**
                 * The local path (relative to /Message) of this preview
                 * media.
                 * @member {string|null|undefined} localPath
                 * @memberof mediaitem.Metadata.CachedPreviewMedia
                 * @instance
                 */
                CachedPreviewMedia.prototype.localPath = null;
    
                /**
                 * CachedPreviewMedia timestampUnixMilliseconds.
                 * @member {number|null|undefined} timestampUnixMilliseconds
                 * @memberof mediaitem.Metadata.CachedPreviewMedia
                 * @instance
                 */
                CachedPreviewMedia.prototype.timestampUnixMilliseconds = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * CachedPreviewMedia _unkownNumber_3.
                 * @member {"unkownNumber_3"|undefined} _unkownNumber_3
                 * @memberof mediaitem.Metadata.CachedPreviewMedia
                 * @instance
                 */
                Object.defineProperty(CachedPreviewMedia.prototype, "_unkownNumber_3", {
                    get: $util.oneOfGetter($oneOfFields = ["unkownNumber_3"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * CachedPreviewMedia _unknownNumber_4.
                 * @member {"unknownNumber_4"|undefined} _unknownNumber_4
                 * @memberof mediaitem.Metadata.CachedPreviewMedia
                 * @instance
                 */
                Object.defineProperty(CachedPreviewMedia.prototype, "_unknownNumber_4", {
                    get: $util.oneOfGetter($oneOfFields = ["unknownNumber_4"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * CachedPreviewMedia _whatsappDownloadUrlLong.
                 * @member {"whatsappDownloadUrlLong"|undefined} _whatsappDownloadUrlLong
                 * @memberof mediaitem.Metadata.CachedPreviewMedia
                 * @instance
                 */
                Object.defineProperty(CachedPreviewMedia.prototype, "_whatsappDownloadUrlLong", {
                    get: $util.oneOfGetter($oneOfFields = ["whatsappDownloadUrlLong"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * CachedPreviewMedia _unknownBytes_6.
                 * @member {"unknownBytes_6"|undefined} _unknownBytes_6
                 * @memberof mediaitem.Metadata.CachedPreviewMedia
                 * @instance
                 */
                Object.defineProperty(CachedPreviewMedia.prototype, "_unknownBytes_6", {
                    get: $util.oneOfGetter($oneOfFields = ["unknownBytes_6"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * CachedPreviewMedia _unknownBytes_7.
                 * @member {"unknownBytes_7"|undefined} _unknownBytes_7
                 * @memberof mediaitem.Metadata.CachedPreviewMedia
                 * @instance
                 */
                Object.defineProperty(CachedPreviewMedia.prototype, "_unknownBytes_7", {
                    get: $util.oneOfGetter($oneOfFields = ["unknownBytes_7"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * CachedPreviewMedia _localPath.
                 * @member {"localPath"|undefined} _localPath
                 * @memberof mediaitem.Metadata.CachedPreviewMedia
                 * @instance
                 */
                Object.defineProperty(CachedPreviewMedia.prototype, "_localPath", {
                    get: $util.oneOfGetter($oneOfFields = ["localPath"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * CachedPreviewMedia _timestampUnixMilliseconds.
                 * @member {"timestampUnixMilliseconds"|undefined} _timestampUnixMilliseconds
                 * @memberof mediaitem.Metadata.CachedPreviewMedia
                 * @instance
                 */
                Object.defineProperty(CachedPreviewMedia.prototype, "_timestampUnixMilliseconds", {
                    get: $util.oneOfGetter($oneOfFields = ["timestampUnixMilliseconds"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new CachedPreviewMedia instance using the specified properties.
                 * @function create
                 * @memberof mediaitem.Metadata.CachedPreviewMedia
                 * @static
                 * @param {mediaitem.Metadata.ICachedPreviewMedia=} [properties] Properties to set
                 * @returns {mediaitem.Metadata.CachedPreviewMedia} CachedPreviewMedia instance
                 */
                CachedPreviewMedia.create = function create(properties) {
                    return new CachedPreviewMedia(properties);
                };
    
                /**
                 * Encodes the specified CachedPreviewMedia message. Does not implicitly {@link mediaitem.Metadata.CachedPreviewMedia.verify|verify} messages.
                 * @function encode
                 * @memberof mediaitem.Metadata.CachedPreviewMedia
                 * @static
                 * @param {mediaitem.Metadata.ICachedPreviewMedia} message CachedPreviewMedia message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CachedPreviewMedia.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.unkownNumber_3 != null && Object.hasOwnProperty.call(message, "unkownNumber_3"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.unkownNumber_3);
                    if (message.unknownNumber_4 != null && Object.hasOwnProperty.call(message, "unknownNumber_4"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.unknownNumber_4);
                    if (message.whatsappDownloadUrlLong != null && Object.hasOwnProperty.call(message, "whatsappDownloadUrlLong"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.whatsappDownloadUrlLong);
                    if (message.unknownBytes_6 != null && Object.hasOwnProperty.call(message, "unknownBytes_6"))
                        writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.unknownBytes_6);
                    if (message.unknownBytes_7 != null && Object.hasOwnProperty.call(message, "unknownBytes_7"))
                        writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.unknownBytes_7);
                    if (message.localPath != null && Object.hasOwnProperty.call(message, "localPath"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.localPath);
                    if (message.timestampUnixMilliseconds != null && Object.hasOwnProperty.call(message, "timestampUnixMilliseconds"))
                        writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.timestampUnixMilliseconds);
                    return writer;
                };
    
                /**
                 * Encodes the specified CachedPreviewMedia message, length delimited. Does not implicitly {@link mediaitem.Metadata.CachedPreviewMedia.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof mediaitem.Metadata.CachedPreviewMedia
                 * @static
                 * @param {mediaitem.Metadata.ICachedPreviewMedia} message CachedPreviewMedia message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CachedPreviewMedia.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a CachedPreviewMedia message from the specified reader or buffer.
                 * @function decode
                 * @memberof mediaitem.Metadata.CachedPreviewMedia
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {mediaitem.Metadata.CachedPreviewMedia} CachedPreviewMedia
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CachedPreviewMedia.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mediaitem.Metadata.CachedPreviewMedia();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 3: {
                                message.unkownNumber_3 = reader.uint32();
                                break;
                            }
                        case 4: {
                                message.unknownNumber_4 = reader.uint32();
                                break;
                            }
                        case 5: {
                                message.whatsappDownloadUrlLong = reader.string();
                                break;
                            }
                        case 6: {
                                message.unknownBytes_6 = reader.bytes();
                                break;
                            }
                        case 7: {
                                message.unknownBytes_7 = reader.bytes();
                                break;
                            }
                        case 8: {
                                message.localPath = reader.string();
                                break;
                            }
                        case 9: {
                                message.timestampUnixMilliseconds = reader.uint64();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a CachedPreviewMedia message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof mediaitem.Metadata.CachedPreviewMedia
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {mediaitem.Metadata.CachedPreviewMedia} CachedPreviewMedia
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CachedPreviewMedia.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a CachedPreviewMedia message.
                 * @function verify
                 * @memberof mediaitem.Metadata.CachedPreviewMedia
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CachedPreviewMedia.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.unkownNumber_3 != null && message.hasOwnProperty("unkownNumber_3")) {
                        properties._unkownNumber_3 = 1;
                        if (!$util.isInteger(message.unkownNumber_3))
                            return "unkownNumber_3: integer expected";
                    }
                    if (message.unknownNumber_4 != null && message.hasOwnProperty("unknownNumber_4")) {
                        properties._unknownNumber_4 = 1;
                        if (!$util.isInteger(message.unknownNumber_4))
                            return "unknownNumber_4: integer expected";
                    }
                    if (message.whatsappDownloadUrlLong != null && message.hasOwnProperty("whatsappDownloadUrlLong")) {
                        properties._whatsappDownloadUrlLong = 1;
                        if (!$util.isString(message.whatsappDownloadUrlLong))
                            return "whatsappDownloadUrlLong: string expected";
                    }
                    if (message.unknownBytes_6 != null && message.hasOwnProperty("unknownBytes_6")) {
                        properties._unknownBytes_6 = 1;
                        if (!(message.unknownBytes_6 && typeof message.unknownBytes_6.length === "number" || $util.isString(message.unknownBytes_6)))
                            return "unknownBytes_6: buffer expected";
                    }
                    if (message.unknownBytes_7 != null && message.hasOwnProperty("unknownBytes_7")) {
                        properties._unknownBytes_7 = 1;
                        if (!(message.unknownBytes_7 && typeof message.unknownBytes_7.length === "number" || $util.isString(message.unknownBytes_7)))
                            return "unknownBytes_7: buffer expected";
                    }
                    if (message.localPath != null && message.hasOwnProperty("localPath")) {
                        properties._localPath = 1;
                        if (!$util.isString(message.localPath))
                            return "localPath: string expected";
                    }
                    if (message.timestampUnixMilliseconds != null && message.hasOwnProperty("timestampUnixMilliseconds")) {
                        properties._timestampUnixMilliseconds = 1;
                        if (!$util.isInteger(message.timestampUnixMilliseconds) && !(message.timestampUnixMilliseconds && $util.isInteger(message.timestampUnixMilliseconds.low) && $util.isInteger(message.timestampUnixMilliseconds.high)))
                            return "timestampUnixMilliseconds: integer|Long expected";
                    }
                    return null;
                };
    
                /**
                 * Creates a CachedPreviewMedia message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof mediaitem.Metadata.CachedPreviewMedia
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {mediaitem.Metadata.CachedPreviewMedia} CachedPreviewMedia
                 */
                CachedPreviewMedia.fromObject = function fromObject(object) {
                    if (object instanceof $root.mediaitem.Metadata.CachedPreviewMedia)
                        return object;
                    var message = new $root.mediaitem.Metadata.CachedPreviewMedia();
                    if (object.unkownNumber_3 != null)
                        message.unkownNumber_3 = object.unkownNumber_3 >>> 0;
                    if (object.unknownNumber_4 != null)
                        message.unknownNumber_4 = object.unknownNumber_4 >>> 0;
                    if (object.whatsappDownloadUrlLong != null)
                        message.whatsappDownloadUrlLong = String(object.whatsappDownloadUrlLong);
                    if (object.unknownBytes_6 != null)
                        if (typeof object.unknownBytes_6 === "string")
                            $util.base64.decode(object.unknownBytes_6, message.unknownBytes_6 = $util.newBuffer($util.base64.length(object.unknownBytes_6)), 0);
                        else if (object.unknownBytes_6.length >= 0)
                            message.unknownBytes_6 = object.unknownBytes_6;
                    if (object.unknownBytes_7 != null)
                        if (typeof object.unknownBytes_7 === "string")
                            $util.base64.decode(object.unknownBytes_7, message.unknownBytes_7 = $util.newBuffer($util.base64.length(object.unknownBytes_7)), 0);
                        else if (object.unknownBytes_7.length >= 0)
                            message.unknownBytes_7 = object.unknownBytes_7;
                    if (object.localPath != null)
                        message.localPath = String(object.localPath);
                    if (object.timestampUnixMilliseconds != null)
                        if ($util.Long)
                            (message.timestampUnixMilliseconds = $util.Long.fromValue(object.timestampUnixMilliseconds)).unsigned = true;
                        else if (typeof object.timestampUnixMilliseconds === "string")
                            message.timestampUnixMilliseconds = parseInt(object.timestampUnixMilliseconds, 10);
                        else if (typeof object.timestampUnixMilliseconds === "number")
                            message.timestampUnixMilliseconds = object.timestampUnixMilliseconds;
                        else if (typeof object.timestampUnixMilliseconds === "object")
                            message.timestampUnixMilliseconds = new $util.LongBits(object.timestampUnixMilliseconds.low >>> 0, object.timestampUnixMilliseconds.high >>> 0).toNumber(true);
                    return message;
                };
    
                /**
                 * Creates a plain object from a CachedPreviewMedia message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof mediaitem.Metadata.CachedPreviewMedia
                 * @static
                 * @param {mediaitem.Metadata.CachedPreviewMedia} message CachedPreviewMedia
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CachedPreviewMedia.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.unkownNumber_3 != null && message.hasOwnProperty("unkownNumber_3")) {
                        object.unkownNumber_3 = message.unkownNumber_3;
                        if (options.oneofs)
                            object._unkownNumber_3 = "unkownNumber_3";
                    }
                    if (message.unknownNumber_4 != null && message.hasOwnProperty("unknownNumber_4")) {
                        object.unknownNumber_4 = message.unknownNumber_4;
                        if (options.oneofs)
                            object._unknownNumber_4 = "unknownNumber_4";
                    }
                    if (message.whatsappDownloadUrlLong != null && message.hasOwnProperty("whatsappDownloadUrlLong")) {
                        object.whatsappDownloadUrlLong = message.whatsappDownloadUrlLong;
                        if (options.oneofs)
                            object._whatsappDownloadUrlLong = "whatsappDownloadUrlLong";
                    }
                    if (message.unknownBytes_6 != null && message.hasOwnProperty("unknownBytes_6")) {
                        object.unknownBytes_6 = options.bytes === String ? $util.base64.encode(message.unknownBytes_6, 0, message.unknownBytes_6.length) : options.bytes === Array ? Array.prototype.slice.call(message.unknownBytes_6) : message.unknownBytes_6;
                        if (options.oneofs)
                            object._unknownBytes_6 = "unknownBytes_6";
                    }
                    if (message.unknownBytes_7 != null && message.hasOwnProperty("unknownBytes_7")) {
                        object.unknownBytes_7 = options.bytes === String ? $util.base64.encode(message.unknownBytes_7, 0, message.unknownBytes_7.length) : options.bytes === Array ? Array.prototype.slice.call(message.unknownBytes_7) : message.unknownBytes_7;
                        if (options.oneofs)
                            object._unknownBytes_7 = "unknownBytes_7";
                    }
                    if (message.localPath != null && message.hasOwnProperty("localPath")) {
                        object.localPath = message.localPath;
                        if (options.oneofs)
                            object._localPath = "localPath";
                    }
                    if (message.timestampUnixMilliseconds != null && message.hasOwnProperty("timestampUnixMilliseconds")) {
                        if (typeof message.timestampUnixMilliseconds === "number")
                            object.timestampUnixMilliseconds = options.longs === String ? String(message.timestampUnixMilliseconds) : message.timestampUnixMilliseconds;
                        else
                            object.timestampUnixMilliseconds = options.longs === String ? $util.Long.prototype.toString.call(message.timestampUnixMilliseconds) : options.longs === Number ? new $util.LongBits(message.timestampUnixMilliseconds.low >>> 0, message.timestampUnixMilliseconds.high >>> 0).toNumber(true) : message.timestampUnixMilliseconds;
                        if (options.oneofs)
                            object._timestampUnixMilliseconds = "timestampUnixMilliseconds";
                    }
                    return object;
                };
    
                /**
                 * Converts this CachedPreviewMedia to JSON.
                 * @function toJSON
                 * @memberof mediaitem.Metadata.CachedPreviewMedia
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CachedPreviewMedia.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for CachedPreviewMedia
                 * @function getTypeUrl
                 * @memberof mediaitem.Metadata.CachedPreviewMedia
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CachedPreviewMedia.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/mediaitem.Metadata.CachedPreviewMedia";
                };
    
                return CachedPreviewMedia;
            })();
    
            Metadata.InfoForMessageToBusiness = (function() {
    
                /**
                 * Properties of an InfoForMessageToBusiness.
                 * @memberof mediaitem.Metadata
                 * @interface IInfoForMessageToBusiness
                 * @property {number|null} [maybeBoolean_2] InfoForMessageToBusiness maybeBoolean_2
                 */
    
                /**
                 * Constructs a new InfoForMessageToBusiness.
                 * @memberof mediaitem.Metadata
                 * @classdesc Represents an InfoForMessageToBusiness.
                 * @implements IInfoForMessageToBusiness
                 * @constructor
                 * @param {mediaitem.Metadata.IInfoForMessageToBusiness=} [properties] Properties to set
                 */
                function InfoForMessageToBusiness(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * InfoForMessageToBusiness maybeBoolean_2.
                 * @member {number|null|undefined} maybeBoolean_2
                 * @memberof mediaitem.Metadata.InfoForMessageToBusiness
                 * @instance
                 */
                InfoForMessageToBusiness.prototype.maybeBoolean_2 = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * InfoForMessageToBusiness _maybeBoolean_2.
                 * @member {"maybeBoolean_2"|undefined} _maybeBoolean_2
                 * @memberof mediaitem.Metadata.InfoForMessageToBusiness
                 * @instance
                 */
                Object.defineProperty(InfoForMessageToBusiness.prototype, "_maybeBoolean_2", {
                    get: $util.oneOfGetter($oneOfFields = ["maybeBoolean_2"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new InfoForMessageToBusiness instance using the specified properties.
                 * @function create
                 * @memberof mediaitem.Metadata.InfoForMessageToBusiness
                 * @static
                 * @param {mediaitem.Metadata.IInfoForMessageToBusiness=} [properties] Properties to set
                 * @returns {mediaitem.Metadata.InfoForMessageToBusiness} InfoForMessageToBusiness instance
                 */
                InfoForMessageToBusiness.create = function create(properties) {
                    return new InfoForMessageToBusiness(properties);
                };
    
                /**
                 * Encodes the specified InfoForMessageToBusiness message. Does not implicitly {@link mediaitem.Metadata.InfoForMessageToBusiness.verify|verify} messages.
                 * @function encode
                 * @memberof mediaitem.Metadata.InfoForMessageToBusiness
                 * @static
                 * @param {mediaitem.Metadata.IInfoForMessageToBusiness} message InfoForMessageToBusiness message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                InfoForMessageToBusiness.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.maybeBoolean_2 != null && Object.hasOwnProperty.call(message, "maybeBoolean_2"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.maybeBoolean_2);
                    return writer;
                };
    
                /**
                 * Encodes the specified InfoForMessageToBusiness message, length delimited. Does not implicitly {@link mediaitem.Metadata.InfoForMessageToBusiness.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof mediaitem.Metadata.InfoForMessageToBusiness
                 * @static
                 * @param {mediaitem.Metadata.IInfoForMessageToBusiness} message InfoForMessageToBusiness message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                InfoForMessageToBusiness.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an InfoForMessageToBusiness message from the specified reader or buffer.
                 * @function decode
                 * @memberof mediaitem.Metadata.InfoForMessageToBusiness
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {mediaitem.Metadata.InfoForMessageToBusiness} InfoForMessageToBusiness
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                InfoForMessageToBusiness.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mediaitem.Metadata.InfoForMessageToBusiness();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2: {
                                message.maybeBoolean_2 = reader.uint32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an InfoForMessageToBusiness message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof mediaitem.Metadata.InfoForMessageToBusiness
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {mediaitem.Metadata.InfoForMessageToBusiness} InfoForMessageToBusiness
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                InfoForMessageToBusiness.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an InfoForMessageToBusiness message.
                 * @function verify
                 * @memberof mediaitem.Metadata.InfoForMessageToBusiness
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                InfoForMessageToBusiness.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.maybeBoolean_2 != null && message.hasOwnProperty("maybeBoolean_2")) {
                        properties._maybeBoolean_2 = 1;
                        if (!$util.isInteger(message.maybeBoolean_2))
                            return "maybeBoolean_2: integer expected";
                    }
                    return null;
                };
    
                /**
                 * Creates an InfoForMessageToBusiness message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof mediaitem.Metadata.InfoForMessageToBusiness
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {mediaitem.Metadata.InfoForMessageToBusiness} InfoForMessageToBusiness
                 */
                InfoForMessageToBusiness.fromObject = function fromObject(object) {
                    if (object instanceof $root.mediaitem.Metadata.InfoForMessageToBusiness)
                        return object;
                    var message = new $root.mediaitem.Metadata.InfoForMessageToBusiness();
                    if (object.maybeBoolean_2 != null)
                        message.maybeBoolean_2 = object.maybeBoolean_2 >>> 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from an InfoForMessageToBusiness message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof mediaitem.Metadata.InfoForMessageToBusiness
                 * @static
                 * @param {mediaitem.Metadata.InfoForMessageToBusiness} message InfoForMessageToBusiness
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                InfoForMessageToBusiness.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.maybeBoolean_2 != null && message.hasOwnProperty("maybeBoolean_2")) {
                        object.maybeBoolean_2 = message.maybeBoolean_2;
                        if (options.oneofs)
                            object._maybeBoolean_2 = "maybeBoolean_2";
                    }
                    return object;
                };
    
                /**
                 * Converts this InfoForMessageToBusiness to JSON.
                 * @function toJSON
                 * @memberof mediaitem.Metadata.InfoForMessageToBusiness
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                InfoForMessageToBusiness.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for InfoForMessageToBusiness
                 * @function getTypeUrl
                 * @memberof mediaitem.Metadata.InfoForMessageToBusiness
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                InfoForMessageToBusiness.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/mediaitem.Metadata.InfoForMessageToBusiness";
                };
    
                return InfoForMessageToBusiness;
            })();
    
            Metadata.Sticker = (function() {
    
                /**
                 * Properties of a Sticker.
                 * @memberof mediaitem.Metadata
                 * @interface ISticker
                 * @property {number|null} [maybeBoolean_3] Sticker maybeBoolean_3
                 * @property {number|null} [timestampUnixMilliseconds] Sticker timestampUnixMilliseconds
                 */
    
                /**
                 * Constructs a new Sticker.
                 * @memberof mediaitem.Metadata
                 * @classdesc Represents a Sticker.
                 * @implements ISticker
                 * @constructor
                 * @param {mediaitem.Metadata.ISticker=} [properties] Properties to set
                 */
                function Sticker(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Sticker maybeBoolean_3.
                 * @member {number|null|undefined} maybeBoolean_3
                 * @memberof mediaitem.Metadata.Sticker
                 * @instance
                 */
                Sticker.prototype.maybeBoolean_3 = null;
    
                /**
                 * Sticker timestampUnixMilliseconds.
                 * @member {number|null|undefined} timestampUnixMilliseconds
                 * @memberof mediaitem.Metadata.Sticker
                 * @instance
                 */
                Sticker.prototype.timestampUnixMilliseconds = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * Sticker _maybeBoolean_3.
                 * @member {"maybeBoolean_3"|undefined} _maybeBoolean_3
                 * @memberof mediaitem.Metadata.Sticker
                 * @instance
                 */
                Object.defineProperty(Sticker.prototype, "_maybeBoolean_3", {
                    get: $util.oneOfGetter($oneOfFields = ["maybeBoolean_3"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Sticker _timestampUnixMilliseconds.
                 * @member {"timestampUnixMilliseconds"|undefined} _timestampUnixMilliseconds
                 * @memberof mediaitem.Metadata.Sticker
                 * @instance
                 */
                Object.defineProperty(Sticker.prototype, "_timestampUnixMilliseconds", {
                    get: $util.oneOfGetter($oneOfFields = ["timestampUnixMilliseconds"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new Sticker instance using the specified properties.
                 * @function create
                 * @memberof mediaitem.Metadata.Sticker
                 * @static
                 * @param {mediaitem.Metadata.ISticker=} [properties] Properties to set
                 * @returns {mediaitem.Metadata.Sticker} Sticker instance
                 */
                Sticker.create = function create(properties) {
                    return new Sticker(properties);
                };
    
                /**
                 * Encodes the specified Sticker message. Does not implicitly {@link mediaitem.Metadata.Sticker.verify|verify} messages.
                 * @function encode
                 * @memberof mediaitem.Metadata.Sticker
                 * @static
                 * @param {mediaitem.Metadata.ISticker} message Sticker message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Sticker.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.maybeBoolean_3 != null && Object.hasOwnProperty.call(message, "maybeBoolean_3"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.maybeBoolean_3);
                    if (message.timestampUnixMilliseconds != null && Object.hasOwnProperty.call(message, "timestampUnixMilliseconds"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.timestampUnixMilliseconds);
                    return writer;
                };
    
                /**
                 * Encodes the specified Sticker message, length delimited. Does not implicitly {@link mediaitem.Metadata.Sticker.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof mediaitem.Metadata.Sticker
                 * @static
                 * @param {mediaitem.Metadata.ISticker} message Sticker message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Sticker.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Sticker message from the specified reader or buffer.
                 * @function decode
                 * @memberof mediaitem.Metadata.Sticker
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {mediaitem.Metadata.Sticker} Sticker
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Sticker.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mediaitem.Metadata.Sticker();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 3: {
                                message.maybeBoolean_3 = reader.uint32();
                                break;
                            }
                        case 4: {
                                message.timestampUnixMilliseconds = reader.uint64();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Sticker message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof mediaitem.Metadata.Sticker
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {mediaitem.Metadata.Sticker} Sticker
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Sticker.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Sticker message.
                 * @function verify
                 * @memberof mediaitem.Metadata.Sticker
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Sticker.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.maybeBoolean_3 != null && message.hasOwnProperty("maybeBoolean_3")) {
                        properties._maybeBoolean_3 = 1;
                        if (!$util.isInteger(message.maybeBoolean_3))
                            return "maybeBoolean_3: integer expected";
                    }
                    if (message.timestampUnixMilliseconds != null && message.hasOwnProperty("timestampUnixMilliseconds")) {
                        properties._timestampUnixMilliseconds = 1;
                        if (!$util.isInteger(message.timestampUnixMilliseconds) && !(message.timestampUnixMilliseconds && $util.isInteger(message.timestampUnixMilliseconds.low) && $util.isInteger(message.timestampUnixMilliseconds.high)))
                            return "timestampUnixMilliseconds: integer|Long expected";
                    }
                    return null;
                };
    
                /**
                 * Creates a Sticker message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof mediaitem.Metadata.Sticker
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {mediaitem.Metadata.Sticker} Sticker
                 */
                Sticker.fromObject = function fromObject(object) {
                    if (object instanceof $root.mediaitem.Metadata.Sticker)
                        return object;
                    var message = new $root.mediaitem.Metadata.Sticker();
                    if (object.maybeBoolean_3 != null)
                        message.maybeBoolean_3 = object.maybeBoolean_3 >>> 0;
                    if (object.timestampUnixMilliseconds != null)
                        if ($util.Long)
                            (message.timestampUnixMilliseconds = $util.Long.fromValue(object.timestampUnixMilliseconds)).unsigned = true;
                        else if (typeof object.timestampUnixMilliseconds === "string")
                            message.timestampUnixMilliseconds = parseInt(object.timestampUnixMilliseconds, 10);
                        else if (typeof object.timestampUnixMilliseconds === "number")
                            message.timestampUnixMilliseconds = object.timestampUnixMilliseconds;
                        else if (typeof object.timestampUnixMilliseconds === "object")
                            message.timestampUnixMilliseconds = new $util.LongBits(object.timestampUnixMilliseconds.low >>> 0, object.timestampUnixMilliseconds.high >>> 0).toNumber(true);
                    return message;
                };
    
                /**
                 * Creates a plain object from a Sticker message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof mediaitem.Metadata.Sticker
                 * @static
                 * @param {mediaitem.Metadata.Sticker} message Sticker
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Sticker.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.maybeBoolean_3 != null && message.hasOwnProperty("maybeBoolean_3")) {
                        object.maybeBoolean_3 = message.maybeBoolean_3;
                        if (options.oneofs)
                            object._maybeBoolean_3 = "maybeBoolean_3";
                    }
                    if (message.timestampUnixMilliseconds != null && message.hasOwnProperty("timestampUnixMilliseconds")) {
                        if (typeof message.timestampUnixMilliseconds === "number")
                            object.timestampUnixMilliseconds = options.longs === String ? String(message.timestampUnixMilliseconds) : message.timestampUnixMilliseconds;
                        else
                            object.timestampUnixMilliseconds = options.longs === String ? $util.Long.prototype.toString.call(message.timestampUnixMilliseconds) : options.longs === Number ? new $util.LongBits(message.timestampUnixMilliseconds.low >>> 0, message.timestampUnixMilliseconds.high >>> 0).toNumber(true) : message.timestampUnixMilliseconds;
                        if (options.oneofs)
                            object._timestampUnixMilliseconds = "timestampUnixMilliseconds";
                    }
                    return object;
                };
    
                /**
                 * Converts this Sticker to JSON.
                 * @function toJSON
                 * @memberof mediaitem.Metadata.Sticker
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Sticker.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for Sticker
                 * @function getTypeUrl
                 * @memberof mediaitem.Metadata.Sticker
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Sticker.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/mediaitem.Metadata.Sticker";
                };
    
                return Sticker;
            })();
    
            Metadata.MaybeVoiceMemoInfo = (function() {
    
                /**
                 * Properties of a MaybeVoiceMemoInfo.
                 * @memberof mediaitem.Metadata
                 * @interface IMaybeVoiceMemoInfo
                 * @property {string|null} [maybeString] MaybeVoiceMemoInfo maybeString
                 */
    
                /**
                 * Constructs a new MaybeVoiceMemoInfo.
                 * @memberof mediaitem.Metadata
                 * @classdesc Represents a MaybeVoiceMemoInfo.
                 * @implements IMaybeVoiceMemoInfo
                 * @constructor
                 * @param {mediaitem.Metadata.IMaybeVoiceMemoInfo=} [properties] Properties to set
                 */
                function MaybeVoiceMemoInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MaybeVoiceMemoInfo maybeString.
                 * @member {string|null|undefined} maybeString
                 * @memberof mediaitem.Metadata.MaybeVoiceMemoInfo
                 * @instance
                 */
                MaybeVoiceMemoInfo.prototype.maybeString = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * MaybeVoiceMemoInfo _maybeString.
                 * @member {"maybeString"|undefined} _maybeString
                 * @memberof mediaitem.Metadata.MaybeVoiceMemoInfo
                 * @instance
                 */
                Object.defineProperty(MaybeVoiceMemoInfo.prototype, "_maybeString", {
                    get: $util.oneOfGetter($oneOfFields = ["maybeString"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new MaybeVoiceMemoInfo instance using the specified properties.
                 * @function create
                 * @memberof mediaitem.Metadata.MaybeVoiceMemoInfo
                 * @static
                 * @param {mediaitem.Metadata.IMaybeVoiceMemoInfo=} [properties] Properties to set
                 * @returns {mediaitem.Metadata.MaybeVoiceMemoInfo} MaybeVoiceMemoInfo instance
                 */
                MaybeVoiceMemoInfo.create = function create(properties) {
                    return new MaybeVoiceMemoInfo(properties);
                };
    
                /**
                 * Encodes the specified MaybeVoiceMemoInfo message. Does not implicitly {@link mediaitem.Metadata.MaybeVoiceMemoInfo.verify|verify} messages.
                 * @function encode
                 * @memberof mediaitem.Metadata.MaybeVoiceMemoInfo
                 * @static
                 * @param {mediaitem.Metadata.IMaybeVoiceMemoInfo} message MaybeVoiceMemoInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MaybeVoiceMemoInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.maybeString != null && Object.hasOwnProperty.call(message, "maybeString"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.maybeString);
                    return writer;
                };
    
                /**
                 * Encodes the specified MaybeVoiceMemoInfo message, length delimited. Does not implicitly {@link mediaitem.Metadata.MaybeVoiceMemoInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof mediaitem.Metadata.MaybeVoiceMemoInfo
                 * @static
                 * @param {mediaitem.Metadata.IMaybeVoiceMemoInfo} message MaybeVoiceMemoInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MaybeVoiceMemoInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MaybeVoiceMemoInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof mediaitem.Metadata.MaybeVoiceMemoInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {mediaitem.Metadata.MaybeVoiceMemoInfo} MaybeVoiceMemoInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MaybeVoiceMemoInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mediaitem.Metadata.MaybeVoiceMemoInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.maybeString = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MaybeVoiceMemoInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof mediaitem.Metadata.MaybeVoiceMemoInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {mediaitem.Metadata.MaybeVoiceMemoInfo} MaybeVoiceMemoInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MaybeVoiceMemoInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MaybeVoiceMemoInfo message.
                 * @function verify
                 * @memberof mediaitem.Metadata.MaybeVoiceMemoInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MaybeVoiceMemoInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.maybeString != null && message.hasOwnProperty("maybeString")) {
                        properties._maybeString = 1;
                        if (!$util.isString(message.maybeString))
                            return "maybeString: string expected";
                    }
                    return null;
                };
    
                /**
                 * Creates a MaybeVoiceMemoInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof mediaitem.Metadata.MaybeVoiceMemoInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {mediaitem.Metadata.MaybeVoiceMemoInfo} MaybeVoiceMemoInfo
                 */
                MaybeVoiceMemoInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.mediaitem.Metadata.MaybeVoiceMemoInfo)
                        return object;
                    var message = new $root.mediaitem.Metadata.MaybeVoiceMemoInfo();
                    if (object.maybeString != null)
                        message.maybeString = String(object.maybeString);
                    return message;
                };
    
                /**
                 * Creates a plain object from a MaybeVoiceMemoInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof mediaitem.Metadata.MaybeVoiceMemoInfo
                 * @static
                 * @param {mediaitem.Metadata.MaybeVoiceMemoInfo} message MaybeVoiceMemoInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MaybeVoiceMemoInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.maybeString != null && message.hasOwnProperty("maybeString")) {
                        object.maybeString = message.maybeString;
                        if (options.oneofs)
                            object._maybeString = "maybeString";
                    }
                    return object;
                };
    
                /**
                 * Converts this MaybeVoiceMemoInfo to JSON.
                 * @function toJSON
                 * @memberof mediaitem.Metadata.MaybeVoiceMemoInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MaybeVoiceMemoInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for MaybeVoiceMemoInfo
                 * @function getTypeUrl
                 * @memberof mediaitem.Metadata.MaybeVoiceMemoInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MaybeVoiceMemoInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/mediaitem.Metadata.MaybeVoiceMemoInfo";
                };
    
                return MaybeVoiceMemoInfo;
            })();
    
            return Metadata;
        })();
    
        return mediaitem;
    })();

    return $root;
});
