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
    
    $root.message = (function() {
    
        /**
         * Namespace message.
         * @exports message
         * @namespace
         */
        var message = {};
    
        message.PushName = (function() {
    
            /**
             * Properties of a PushName.
             * @memberof message
             * @interface IPushName
             * @property {number|null} [timestampSeconds] PushName timestampSeconds
             * @property {string|null} [whatsAppJid] PushName whatsAppJid
             * @property {number|null} [maybeBoolean] PushName maybeBoolean
             */
    
            /**
             * Constructs a new PushName.
             * @memberof message
             * @classdesc Represents a PushName.
             * @implements IPushName
             * @constructor
             * @param {message.IPushName=} [properties] Properties to set
             */
            function PushName(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PushName timestampSeconds.
             * @member {number} timestampSeconds
             * @memberof message.PushName
             * @instance
             */
            PushName.prototype.timestampSeconds = 0;
    
            /**
             * PushName whatsAppJid.
             * @member {string} whatsAppJid
             * @memberof message.PushName
             * @instance
             */
            PushName.prototype.whatsAppJid = "";
    
            /**
             * PushName maybeBoolean.
             * @member {number} maybeBoolean
             * @memberof message.PushName
             * @instance
             */
            PushName.prototype.maybeBoolean = 0;
    
            /**
             * Creates a new PushName instance using the specified properties.
             * @function create
             * @memberof message.PushName
             * @static
             * @param {message.IPushName=} [properties] Properties to set
             * @returns {message.PushName} PushName instance
             */
            PushName.create = function create(properties) {
                return new PushName(properties);
            };
    
            /**
             * Encodes the specified PushName message. Does not implicitly {@link message.PushName.verify|verify} messages.
             * @function encode
             * @memberof message.PushName
             * @static
             * @param {message.IPushName} message PushName message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PushName.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.timestampSeconds != null && Object.hasOwnProperty.call(message, "timestampSeconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.timestampSeconds);
                if (message.whatsAppJid != null && Object.hasOwnProperty.call(message, "whatsAppJid"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.whatsAppJid);
                if (message.maybeBoolean != null && Object.hasOwnProperty.call(message, "maybeBoolean"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.maybeBoolean);
                return writer;
            };
    
            /**
             * Encodes the specified PushName message, length delimited. Does not implicitly {@link message.PushName.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.PushName
             * @static
             * @param {message.IPushName} message PushName message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PushName.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PushName message from the specified reader or buffer.
             * @function decode
             * @memberof message.PushName
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.PushName} PushName
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PushName.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.PushName();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.timestampSeconds = reader.uint32();
                            break;
                        }
                    case 3: {
                            message.whatsAppJid = reader.string();
                            break;
                        }
                    case 4: {
                            message.maybeBoolean = reader.uint32();
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
             * Decodes a PushName message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.PushName
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.PushName} PushName
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PushName.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PushName message.
             * @function verify
             * @memberof message.PushName
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PushName.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.timestampSeconds != null && message.hasOwnProperty("timestampSeconds"))
                    if (!$util.isInteger(message.timestampSeconds))
                        return "timestampSeconds: integer expected";
                if (message.whatsAppJid != null && message.hasOwnProperty("whatsAppJid"))
                    if (!$util.isString(message.whatsAppJid))
                        return "whatsAppJid: string expected";
                if (message.maybeBoolean != null && message.hasOwnProperty("maybeBoolean"))
                    if (!$util.isInteger(message.maybeBoolean))
                        return "maybeBoolean: integer expected";
                return null;
            };
    
            /**
             * Creates a PushName message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.PushName
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.PushName} PushName
             */
            PushName.fromObject = function fromObject(object) {
                if (object instanceof $root.message.PushName)
                    return object;
                var message = new $root.message.PushName();
                if (object.timestampSeconds != null)
                    message.timestampSeconds = object.timestampSeconds >>> 0;
                if (object.whatsAppJid != null)
                    message.whatsAppJid = String(object.whatsAppJid);
                if (object.maybeBoolean != null)
                    message.maybeBoolean = object.maybeBoolean >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a PushName message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.PushName
             * @static
             * @param {message.PushName} message PushName
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PushName.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.timestampSeconds = 0;
                    object.whatsAppJid = "";
                    object.maybeBoolean = 0;
                }
                if (message.timestampSeconds != null && message.hasOwnProperty("timestampSeconds"))
                    object.timestampSeconds = message.timestampSeconds;
                if (message.whatsAppJid != null && message.hasOwnProperty("whatsAppJid"))
                    object.whatsAppJid = message.whatsAppJid;
                if (message.maybeBoolean != null && message.hasOwnProperty("maybeBoolean"))
                    object.maybeBoolean = message.maybeBoolean;
                return object;
            };
    
            /**
             * Converts this PushName to JSON.
             * @function toJSON
             * @memberof message.PushName
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PushName.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for PushName
             * @function getTypeUrl
             * @memberof message.PushName
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PushName.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/message.PushName";
            };
    
            return PushName;
        })();
    
        message.LastMessagePreview = (function() {
    
            /**
             * Properties of a LastMessagePreview.
             * @memberof message
             * @interface ILastMessagePreview
             * @property {number|null} [maybeBolean_3] LastMessagePreview maybeBolean_3
             * @property {number|null} [maybeBolean_7] LastMessagePreview maybeBolean_7
             * @property {number|null} [unknownNumber_11] LastMessagePreview unknownNumber_11
             * @property {string|null} [unknownHexMaybeAppleContactId] LastMessagePreview unknownHexMaybeAppleContactId
             * @property {string|null} [unknownHex] LastMessagePreview unknownHex
             * @property {string|null} [unknownStringContainingChatSessionJid] LastMessagePreview unknownStringContainingChatSessionJid
             * @property {message.LastMessagePreview.ILastReaction|null} [lastReaction] LastMessagePreview lastReaction
             * @property {number|null} [unknownNumber_19] LastMessagePreview unknownNumber_19
             */
    
            /**
             * Constructs a new LastMessagePreview.
             * @memberof message
             * @classdesc Represents a LastMessagePreview.
             * @implements ILastMessagePreview
             * @constructor
             * @param {message.ILastMessagePreview=} [properties] Properties to set
             */
            function LastMessagePreview(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * LastMessagePreview maybeBolean_3.
             * @member {number} maybeBolean_3
             * @memberof message.LastMessagePreview
             * @instance
             */
            LastMessagePreview.prototype.maybeBolean_3 = 0;
    
            /**
             * LastMessagePreview maybeBolean_7.
             * @member {number} maybeBolean_7
             * @memberof message.LastMessagePreview
             * @instance
             */
            LastMessagePreview.prototype.maybeBolean_7 = 0;
    
            /**
             * LastMessagePreview unknownNumber_11.
             * @member {number} unknownNumber_11
             * @memberof message.LastMessagePreview
             * @instance
             */
            LastMessagePreview.prototype.unknownNumber_11 = 0;
    
            /**
             * LastMessagePreview unknownHexMaybeAppleContactId.
             * @member {string} unknownHexMaybeAppleContactId
             * @memberof message.LastMessagePreview
             * @instance
             */
            LastMessagePreview.prototype.unknownHexMaybeAppleContactId = "";
    
            /**
             * LastMessagePreview unknownHex.
             * @member {string} unknownHex
             * @memberof message.LastMessagePreview
             * @instance
             */
            LastMessagePreview.prototype.unknownHex = "";
    
            /**
             * LastMessagePreview unknownStringContainingChatSessionJid.
             * @member {string} unknownStringContainingChatSessionJid
             * @memberof message.LastMessagePreview
             * @instance
             */
            LastMessagePreview.prototype.unknownStringContainingChatSessionJid = "";
    
            /**
             * LastMessagePreview lastReaction.
             * @member {message.LastMessagePreview.ILastReaction|null|undefined} lastReaction
             * @memberof message.LastMessagePreview
             * @instance
             */
            LastMessagePreview.prototype.lastReaction = null;
    
            /**
             * LastMessagePreview unknownNumber_19.
             * @member {number} unknownNumber_19
             * @memberof message.LastMessagePreview
             * @instance
             */
            LastMessagePreview.prototype.unknownNumber_19 = 0;
    
            /**
             * Creates a new LastMessagePreview instance using the specified properties.
             * @function create
             * @memberof message.LastMessagePreview
             * @static
             * @param {message.ILastMessagePreview=} [properties] Properties to set
             * @returns {message.LastMessagePreview} LastMessagePreview instance
             */
            LastMessagePreview.create = function create(properties) {
                return new LastMessagePreview(properties);
            };
    
            /**
             * Encodes the specified LastMessagePreview message. Does not implicitly {@link message.LastMessagePreview.verify|verify} messages.
             * @function encode
             * @memberof message.LastMessagePreview
             * @static
             * @param {message.ILastMessagePreview} message LastMessagePreview message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LastMessagePreview.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.maybeBolean_3 != null && Object.hasOwnProperty.call(message, "maybeBolean_3"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.maybeBolean_3);
                if (message.maybeBolean_7 != null && Object.hasOwnProperty.call(message, "maybeBolean_7"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.maybeBolean_7);
                if (message.unknownNumber_11 != null && Object.hasOwnProperty.call(message, "unknownNumber_11"))
                    writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.unknownNumber_11);
                if (message.unknownHexMaybeAppleContactId != null && Object.hasOwnProperty.call(message, "unknownHexMaybeAppleContactId"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.unknownHexMaybeAppleContactId);
                if (message.unknownHex != null && Object.hasOwnProperty.call(message, "unknownHex"))
                    writer.uint32(/* id 13, wireType 2 =*/106).string(message.unknownHex);
                if (message.unknownStringContainingChatSessionJid != null && Object.hasOwnProperty.call(message, "unknownStringContainingChatSessionJid"))
                    writer.uint32(/* id 17, wireType 2 =*/138).string(message.unknownStringContainingChatSessionJid);
                if (message.lastReaction != null && Object.hasOwnProperty.call(message, "lastReaction"))
                    $root.message.LastMessagePreview.LastReaction.encode(message.lastReaction, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
                if (message.unknownNumber_19 != null && Object.hasOwnProperty.call(message, "unknownNumber_19"))
                    writer.uint32(/* id 19, wireType 0 =*/152).uint32(message.unknownNumber_19);
                return writer;
            };
    
            /**
             * Encodes the specified LastMessagePreview message, length delimited. Does not implicitly {@link message.LastMessagePreview.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.LastMessagePreview
             * @static
             * @param {message.ILastMessagePreview} message LastMessagePreview message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LastMessagePreview.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a LastMessagePreview message from the specified reader or buffer.
             * @function decode
             * @memberof message.LastMessagePreview
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.LastMessagePreview} LastMessagePreview
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LastMessagePreview.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.LastMessagePreview();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 3: {
                            message.maybeBolean_3 = reader.uint32();
                            break;
                        }
                    case 7: {
                            message.maybeBolean_7 = reader.uint32();
                            break;
                        }
                    case 11: {
                            message.unknownNumber_11 = reader.uint32();
                            break;
                        }
                    case 12: {
                            message.unknownHexMaybeAppleContactId = reader.string();
                            break;
                        }
                    case 13: {
                            message.unknownHex = reader.string();
                            break;
                        }
                    case 17: {
                            message.unknownStringContainingChatSessionJid = reader.string();
                            break;
                        }
                    case 18: {
                            message.lastReaction = $root.message.LastMessagePreview.LastReaction.decode(reader, reader.uint32());
                            break;
                        }
                    case 19: {
                            message.unknownNumber_19 = reader.uint32();
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
             * Decodes a LastMessagePreview message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.LastMessagePreview
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.LastMessagePreview} LastMessagePreview
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LastMessagePreview.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a LastMessagePreview message.
             * @function verify
             * @memberof message.LastMessagePreview
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LastMessagePreview.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.maybeBolean_3 != null && message.hasOwnProperty("maybeBolean_3"))
                    if (!$util.isInteger(message.maybeBolean_3))
                        return "maybeBolean_3: integer expected";
                if (message.maybeBolean_7 != null && message.hasOwnProperty("maybeBolean_7"))
                    if (!$util.isInteger(message.maybeBolean_7))
                        return "maybeBolean_7: integer expected";
                if (message.unknownNumber_11 != null && message.hasOwnProperty("unknownNumber_11"))
                    if (!$util.isInteger(message.unknownNumber_11))
                        return "unknownNumber_11: integer expected";
                if (message.unknownHexMaybeAppleContactId != null && message.hasOwnProperty("unknownHexMaybeAppleContactId"))
                    if (!$util.isString(message.unknownHexMaybeAppleContactId))
                        return "unknownHexMaybeAppleContactId: string expected";
                if (message.unknownHex != null && message.hasOwnProperty("unknownHex"))
                    if (!$util.isString(message.unknownHex))
                        return "unknownHex: string expected";
                if (message.unknownStringContainingChatSessionJid != null && message.hasOwnProperty("unknownStringContainingChatSessionJid"))
                    if (!$util.isString(message.unknownStringContainingChatSessionJid))
                        return "unknownStringContainingChatSessionJid: string expected";
                if (message.lastReaction != null && message.hasOwnProperty("lastReaction")) {
                    var error = $root.message.LastMessagePreview.LastReaction.verify(message.lastReaction);
                    if (error)
                        return "lastReaction." + error;
                }
                if (message.unknownNumber_19 != null && message.hasOwnProperty("unknownNumber_19"))
                    if (!$util.isInteger(message.unknownNumber_19))
                        return "unknownNumber_19: integer expected";
                return null;
            };
    
            /**
             * Creates a LastMessagePreview message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.LastMessagePreview
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.LastMessagePreview} LastMessagePreview
             */
            LastMessagePreview.fromObject = function fromObject(object) {
                if (object instanceof $root.message.LastMessagePreview)
                    return object;
                var message = new $root.message.LastMessagePreview();
                if (object.maybeBolean_3 != null)
                    message.maybeBolean_3 = object.maybeBolean_3 >>> 0;
                if (object.maybeBolean_7 != null)
                    message.maybeBolean_7 = object.maybeBolean_7 >>> 0;
                if (object.unknownNumber_11 != null)
                    message.unknownNumber_11 = object.unknownNumber_11 >>> 0;
                if (object.unknownHexMaybeAppleContactId != null)
                    message.unknownHexMaybeAppleContactId = String(object.unknownHexMaybeAppleContactId);
                if (object.unknownHex != null)
                    message.unknownHex = String(object.unknownHex);
                if (object.unknownStringContainingChatSessionJid != null)
                    message.unknownStringContainingChatSessionJid = String(object.unknownStringContainingChatSessionJid);
                if (object.lastReaction != null) {
                    if (typeof object.lastReaction !== "object")
                        throw TypeError(".message.LastMessagePreview.lastReaction: object expected");
                    message.lastReaction = $root.message.LastMessagePreview.LastReaction.fromObject(object.lastReaction);
                }
                if (object.unknownNumber_19 != null)
                    message.unknownNumber_19 = object.unknownNumber_19 >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a LastMessagePreview message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.LastMessagePreview
             * @static
             * @param {message.LastMessagePreview} message LastMessagePreview
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LastMessagePreview.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.maybeBolean_3 = 0;
                    object.maybeBolean_7 = 0;
                    object.unknownNumber_11 = 0;
                    object.unknownHexMaybeAppleContactId = "";
                    object.unknownHex = "";
                    object.unknownStringContainingChatSessionJid = "";
                    object.lastReaction = null;
                    object.unknownNumber_19 = 0;
                }
                if (message.maybeBolean_3 != null && message.hasOwnProperty("maybeBolean_3"))
                    object.maybeBolean_3 = message.maybeBolean_3;
                if (message.maybeBolean_7 != null && message.hasOwnProperty("maybeBolean_7"))
                    object.maybeBolean_7 = message.maybeBolean_7;
                if (message.unknownNumber_11 != null && message.hasOwnProperty("unknownNumber_11"))
                    object.unknownNumber_11 = message.unknownNumber_11;
                if (message.unknownHexMaybeAppleContactId != null && message.hasOwnProperty("unknownHexMaybeAppleContactId"))
                    object.unknownHexMaybeAppleContactId = message.unknownHexMaybeAppleContactId;
                if (message.unknownHex != null && message.hasOwnProperty("unknownHex"))
                    object.unknownHex = message.unknownHex;
                if (message.unknownStringContainingChatSessionJid != null && message.hasOwnProperty("unknownStringContainingChatSessionJid"))
                    object.unknownStringContainingChatSessionJid = message.unknownStringContainingChatSessionJid;
                if (message.lastReaction != null && message.hasOwnProperty("lastReaction"))
                    object.lastReaction = $root.message.LastMessagePreview.LastReaction.toObject(message.lastReaction, options);
                if (message.unknownNumber_19 != null && message.hasOwnProperty("unknownNumber_19"))
                    object.unknownNumber_19 = message.unknownNumber_19;
                return object;
            };
    
            /**
             * Converts this LastMessagePreview to JSON.
             * @function toJSON
             * @memberof message.LastMessagePreview
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LastMessagePreview.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for LastMessagePreview
             * @function getTypeUrl
             * @memberof message.LastMessagePreview
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LastMessagePreview.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/message.LastMessagePreview";
            };
    
            LastMessagePreview.LastReaction = (function() {
    
                /**
                 * Properties of a LastReaction.
                 * @memberof message.LastMessagePreview
                 * @interface ILastReaction
                 * @property {string|null} [unknownHex] LastReaction unknownHex
                 * @property {string|null} [reaction] LastReaction reaction
                 * @property {number|null} [timestampMilliseconds] LastReaction timestampMilliseconds
                 * @property {number|null} [maybeBoolean] LastReaction maybeBoolean
                 */
    
                /**
                 * Constructs a new LastReaction.
                 * @memberof message.LastMessagePreview
                 * @classdesc Represents a LastReaction.
                 * @implements ILastReaction
                 * @constructor
                 * @param {message.LastMessagePreview.ILastReaction=} [properties] Properties to set
                 */
                function LastReaction(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * LastReaction unknownHex.
                 * @member {string} unknownHex
                 * @memberof message.LastMessagePreview.LastReaction
                 * @instance
                 */
                LastReaction.prototype.unknownHex = "";
    
                /**
                 * LastReaction reaction.
                 * @member {string} reaction
                 * @memberof message.LastMessagePreview.LastReaction
                 * @instance
                 */
                LastReaction.prototype.reaction = "";
    
                /**
                 * LastReaction timestampMilliseconds.
                 * @member {number} timestampMilliseconds
                 * @memberof message.LastMessagePreview.LastReaction
                 * @instance
                 */
                LastReaction.prototype.timestampMilliseconds = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * LastReaction maybeBoolean.
                 * @member {number} maybeBoolean
                 * @memberof message.LastMessagePreview.LastReaction
                 * @instance
                 */
                LastReaction.prototype.maybeBoolean = 0;
    
                /**
                 * Creates a new LastReaction instance using the specified properties.
                 * @function create
                 * @memberof message.LastMessagePreview.LastReaction
                 * @static
                 * @param {message.LastMessagePreview.ILastReaction=} [properties] Properties to set
                 * @returns {message.LastMessagePreview.LastReaction} LastReaction instance
                 */
                LastReaction.create = function create(properties) {
                    return new LastReaction(properties);
                };
    
                /**
                 * Encodes the specified LastReaction message. Does not implicitly {@link message.LastMessagePreview.LastReaction.verify|verify} messages.
                 * @function encode
                 * @memberof message.LastMessagePreview.LastReaction
                 * @static
                 * @param {message.LastMessagePreview.ILastReaction} message LastReaction message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LastReaction.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.unknownHex != null && Object.hasOwnProperty.call(message, "unknownHex"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.unknownHex);
                    if (message.reaction != null && Object.hasOwnProperty.call(message, "reaction"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.reaction);
                    if (message.timestampMilliseconds != null && Object.hasOwnProperty.call(message, "timestampMilliseconds"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.timestampMilliseconds);
                    if (message.maybeBoolean != null && Object.hasOwnProperty.call(message, "maybeBoolean"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.maybeBoolean);
                    return writer;
                };
    
                /**
                 * Encodes the specified LastReaction message, length delimited. Does not implicitly {@link message.LastMessagePreview.LastReaction.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof message.LastMessagePreview.LastReaction
                 * @static
                 * @param {message.LastMessagePreview.ILastReaction} message LastReaction message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LastReaction.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a LastReaction message from the specified reader or buffer.
                 * @function decode
                 * @memberof message.LastMessagePreview.LastReaction
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {message.LastMessagePreview.LastReaction} LastReaction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LastReaction.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.LastMessagePreview.LastReaction();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.unknownHex = reader.string();
                                break;
                            }
                        case 2: {
                                message.reaction = reader.string();
                                break;
                            }
                        case 3: {
                                message.timestampMilliseconds = reader.uint64();
                                break;
                            }
                        case 4: {
                                message.maybeBoolean = reader.uint32();
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
                 * Decodes a LastReaction message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof message.LastMessagePreview.LastReaction
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {message.LastMessagePreview.LastReaction} LastReaction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LastReaction.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a LastReaction message.
                 * @function verify
                 * @memberof message.LastMessagePreview.LastReaction
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LastReaction.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.unknownHex != null && message.hasOwnProperty("unknownHex"))
                        if (!$util.isString(message.unknownHex))
                            return "unknownHex: string expected";
                    if (message.reaction != null && message.hasOwnProperty("reaction"))
                        if (!$util.isString(message.reaction))
                            return "reaction: string expected";
                    if (message.timestampMilliseconds != null && message.hasOwnProperty("timestampMilliseconds"))
                        if (!$util.isInteger(message.timestampMilliseconds) && !(message.timestampMilliseconds && $util.isInteger(message.timestampMilliseconds.low) && $util.isInteger(message.timestampMilliseconds.high)))
                            return "timestampMilliseconds: integer|Long expected";
                    if (message.maybeBoolean != null && message.hasOwnProperty("maybeBoolean"))
                        if (!$util.isInteger(message.maybeBoolean))
                            return "maybeBoolean: integer expected";
                    return null;
                };
    
                /**
                 * Creates a LastReaction message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof message.LastMessagePreview.LastReaction
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {message.LastMessagePreview.LastReaction} LastReaction
                 */
                LastReaction.fromObject = function fromObject(object) {
                    if (object instanceof $root.message.LastMessagePreview.LastReaction)
                        return object;
                    var message = new $root.message.LastMessagePreview.LastReaction();
                    if (object.unknownHex != null)
                        message.unknownHex = String(object.unknownHex);
                    if (object.reaction != null)
                        message.reaction = String(object.reaction);
                    if (object.timestampMilliseconds != null)
                        if ($util.Long)
                            (message.timestampMilliseconds = $util.Long.fromValue(object.timestampMilliseconds)).unsigned = true;
                        else if (typeof object.timestampMilliseconds === "string")
                            message.timestampMilliseconds = parseInt(object.timestampMilliseconds, 10);
                        else if (typeof object.timestampMilliseconds === "number")
                            message.timestampMilliseconds = object.timestampMilliseconds;
                        else if (typeof object.timestampMilliseconds === "object")
                            message.timestampMilliseconds = new $util.LongBits(object.timestampMilliseconds.low >>> 0, object.timestampMilliseconds.high >>> 0).toNumber(true);
                    if (object.maybeBoolean != null)
                        message.maybeBoolean = object.maybeBoolean >>> 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a LastReaction message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof message.LastMessagePreview.LastReaction
                 * @static
                 * @param {message.LastMessagePreview.LastReaction} message LastReaction
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LastReaction.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.unknownHex = "";
                        object.reaction = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.timestampMilliseconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.timestampMilliseconds = options.longs === String ? "0" : 0;
                        object.maybeBoolean = 0;
                    }
                    if (message.unknownHex != null && message.hasOwnProperty("unknownHex"))
                        object.unknownHex = message.unknownHex;
                    if (message.reaction != null && message.hasOwnProperty("reaction"))
                        object.reaction = message.reaction;
                    if (message.timestampMilliseconds != null && message.hasOwnProperty("timestampMilliseconds"))
                        if (typeof message.timestampMilliseconds === "number")
                            object.timestampMilliseconds = options.longs === String ? String(message.timestampMilliseconds) : message.timestampMilliseconds;
                        else
                            object.timestampMilliseconds = options.longs === String ? $util.Long.prototype.toString.call(message.timestampMilliseconds) : options.longs === Number ? new $util.LongBits(message.timestampMilliseconds.low >>> 0, message.timestampMilliseconds.high >>> 0).toNumber(true) : message.timestampMilliseconds;
                    if (message.maybeBoolean != null && message.hasOwnProperty("maybeBoolean"))
                        object.maybeBoolean = message.maybeBoolean;
                    return object;
                };
    
                /**
                 * Converts this LastReaction to JSON.
                 * @function toJSON
                 * @memberof message.LastMessagePreview.LastReaction
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LastReaction.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for LastReaction
                 * @function getTypeUrl
                 * @memberof message.LastMessagePreview.LastReaction
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                LastReaction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/message.LastMessagePreview.LastReaction";
                };
    
                return LastReaction;
            })();
    
            return LastMessagePreview;
        })();
    
        return message;
    })();

    return $root;
});
