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
    
    $root.receiptinfo = (function() {
    
        /**
         * Namespace receiptinfo.
         * @exports receiptinfo
         * @namespace
         */
        var receiptinfo = {};
    
        receiptinfo.MessageInfo = (function() {
    
            /**
             * Properties of a MessageInfo.
             * @memberof receiptinfo
             * @interface IMessageInfo
             * @property {Array.<receiptinfo.MessageInfo.IReceiptInfoSingleLegacy>|null} [singleLegacy] Legacy format of the receipt info for a single person.
             * Only observed messages containing 1 (legacy) OR 2-6
             * @property {Array.<receiptinfo.MessageInfo.IReceiptInfoSingle>|null} [single] New format of the receipt info for a single person.
             * Only observed messages containing 1 (legacy) OR 2-6
             * @property {number|null} [sentTimestampSeconds] Timestamp when this message was sent.
             * UNIX epoch in seconds.
             * Assumed to be uint32, as this is easier
             * in JS (avoid type `long`).
             * This should work till around year 2100.
             * @property {number|null} [unknown] Unknown.
             * @property {number|null} [unknown_2] Unknown.
             * @property {number|null} [unknown_3] Unknown.
             * @property {receiptinfo.MessageInfo.IReactions|null} [reactions] Reactions to this message
             * @property {receiptinfo.MessageInfo.IPoll|null} [pollInfo] Poll info for this message
             * @property {string|null} [unknownString] Unknown string. Observed as empty
             */
    
            /**
             * Constructs a new MessageInfo.
             * @memberof receiptinfo
             * @classdesc Represents a MessageInfo.
             * @implements IMessageInfo
             * @constructor
             * @param {receiptinfo.IMessageInfo=} [properties] Properties to set
             */
            function MessageInfo(properties) {
                this.singleLegacy = [];
                this.single = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Legacy format of the receipt info for a single person.
             * Only observed messages containing 1 (legacy) OR 2-6
             * @member {Array.<receiptinfo.MessageInfo.IReceiptInfoSingleLegacy>} singleLegacy
             * @memberof receiptinfo.MessageInfo
             * @instance
             */
            MessageInfo.prototype.singleLegacy = $util.emptyArray;
    
            /**
             * New format of the receipt info for a single person.
             * Only observed messages containing 1 (legacy) OR 2-6
             * @member {Array.<receiptinfo.MessageInfo.IReceiptInfoSingle>} single
             * @memberof receiptinfo.MessageInfo
             * @instance
             */
            MessageInfo.prototype.single = $util.emptyArray;
    
            /**
             * Timestamp when this message was sent.
             * UNIX epoch in seconds.
             * Assumed to be uint32, as this is easier
             * in JS (avoid type `long`).
             * This should work till around year 2100.
             * @member {number|null|undefined} sentTimestampSeconds
             * @memberof receiptinfo.MessageInfo
             * @instance
             */
            MessageInfo.prototype.sentTimestampSeconds = null;
    
            /**
             * Unknown.
             * @member {number|null|undefined} unknown
             * @memberof receiptinfo.MessageInfo
             * @instance
             */
            MessageInfo.prototype.unknown = null;
    
            /**
             * Unknown.
             * @member {number|null|undefined} unknown_2
             * @memberof receiptinfo.MessageInfo
             * @instance
             */
            MessageInfo.prototype.unknown_2 = null;
    
            /**
             * Unknown.
             * @member {number|null|undefined} unknown_3
             * @memberof receiptinfo.MessageInfo
             * @instance
             */
            MessageInfo.prototype.unknown_3 = null;
    
            /**
             * Reactions to this message
             * @member {receiptinfo.MessageInfo.IReactions|null|undefined} reactions
             * @memberof receiptinfo.MessageInfo
             * @instance
             */
            MessageInfo.prototype.reactions = null;
    
            /**
             * Poll info for this message
             * @member {receiptinfo.MessageInfo.IPoll|null|undefined} pollInfo
             * @memberof receiptinfo.MessageInfo
             * @instance
             */
            MessageInfo.prototype.pollInfo = null;
    
            /**
             * Unknown string. Observed as empty
             * @member {string|null|undefined} unknownString
             * @memberof receiptinfo.MessageInfo
             * @instance
             */
            MessageInfo.prototype.unknownString = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * MessageInfo _sentTimestampSeconds.
             * @member {"sentTimestampSeconds"|undefined} _sentTimestampSeconds
             * @memberof receiptinfo.MessageInfo
             * @instance
             */
            Object.defineProperty(MessageInfo.prototype, "_sentTimestampSeconds", {
                get: $util.oneOfGetter($oneOfFields = ["sentTimestampSeconds"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * MessageInfo _unknown.
             * @member {"unknown"|undefined} _unknown
             * @memberof receiptinfo.MessageInfo
             * @instance
             */
            Object.defineProperty(MessageInfo.prototype, "_unknown", {
                get: $util.oneOfGetter($oneOfFields = ["unknown"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * MessageInfo _unknown_2.
             * @member {"unknown_2"|undefined} _unknown_2
             * @memberof receiptinfo.MessageInfo
             * @instance
             */
            Object.defineProperty(MessageInfo.prototype, "_unknown_2", {
                get: $util.oneOfGetter($oneOfFields = ["unknown_2"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * MessageInfo _unknown_3.
             * @member {"unknown_3"|undefined} _unknown_3
             * @memberof receiptinfo.MessageInfo
             * @instance
             */
            Object.defineProperty(MessageInfo.prototype, "_unknown_3", {
                get: $util.oneOfGetter($oneOfFields = ["unknown_3"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * MessageInfo _reactions.
             * @member {"reactions"|undefined} _reactions
             * @memberof receiptinfo.MessageInfo
             * @instance
             */
            Object.defineProperty(MessageInfo.prototype, "_reactions", {
                get: $util.oneOfGetter($oneOfFields = ["reactions"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * MessageInfo _pollInfo.
             * @member {"pollInfo"|undefined} _pollInfo
             * @memberof receiptinfo.MessageInfo
             * @instance
             */
            Object.defineProperty(MessageInfo.prototype, "_pollInfo", {
                get: $util.oneOfGetter($oneOfFields = ["pollInfo"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * MessageInfo _unknownString.
             * @member {"unknownString"|undefined} _unknownString
             * @memberof receiptinfo.MessageInfo
             * @instance
             */
            Object.defineProperty(MessageInfo.prototype, "_unknownString", {
                get: $util.oneOfGetter($oneOfFields = ["unknownString"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new MessageInfo instance using the specified properties.
             * @function create
             * @memberof receiptinfo.MessageInfo
             * @static
             * @param {receiptinfo.IMessageInfo=} [properties] Properties to set
             * @returns {receiptinfo.MessageInfo} MessageInfo instance
             */
            MessageInfo.create = function create(properties) {
                return new MessageInfo(properties);
            };
    
            /**
             * Encodes the specified MessageInfo message. Does not implicitly {@link receiptinfo.MessageInfo.verify|verify} messages.
             * @function encode
             * @memberof receiptinfo.MessageInfo
             * @static
             * @param {receiptinfo.IMessageInfo} message MessageInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.singleLegacy != null && message.singleLegacy.length)
                    for (var i = 0; i < message.singleLegacy.length; ++i)
                        $root.receiptinfo.MessageInfo.ReceiptInfoSingleLegacy.encode(message.singleLegacy[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.single != null && message.single.length)
                    for (var i = 0; i < message.single.length; ++i)
                        $root.receiptinfo.MessageInfo.ReceiptInfoSingle.encode(message.single[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.sentTimestampSeconds != null && Object.hasOwnProperty.call(message, "sentTimestampSeconds"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.sentTimestampSeconds);
                if (message.unknown != null && Object.hasOwnProperty.call(message, "unknown"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.unknown);
                if (message.unknown_2 != null && Object.hasOwnProperty.call(message, "unknown_2"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.unknown_2);
                if (message.unknown_3 != null && Object.hasOwnProperty.call(message, "unknown_3"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.unknown_3);
                if (message.reactions != null && Object.hasOwnProperty.call(message, "reactions"))
                    $root.receiptinfo.MessageInfo.Reactions.encode(message.reactions, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.pollInfo != null && Object.hasOwnProperty.call(message, "pollInfo"))
                    $root.receiptinfo.MessageInfo.Poll.encode(message.pollInfo, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.unknownString != null && Object.hasOwnProperty.call(message, "unknownString"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.unknownString);
                return writer;
            };
    
            /**
             * Encodes the specified MessageInfo message, length delimited. Does not implicitly {@link receiptinfo.MessageInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof receiptinfo.MessageInfo
             * @static
             * @param {receiptinfo.IMessageInfo} message MessageInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MessageInfo message from the specified reader or buffer.
             * @function decode
             * @memberof receiptinfo.MessageInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {receiptinfo.MessageInfo} MessageInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.receiptinfo.MessageInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.singleLegacy && message.singleLegacy.length))
                                message.singleLegacy = [];
                            message.singleLegacy.push($root.receiptinfo.MessageInfo.ReceiptInfoSingleLegacy.decode(reader, reader.uint32()));
                            break;
                        }
                    case 2: {
                            if (!(message.single && message.single.length))
                                message.single = [];
                            message.single.push($root.receiptinfo.MessageInfo.ReceiptInfoSingle.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.sentTimestampSeconds = reader.uint32();
                            break;
                        }
                    case 4: {
                            message.unknown = reader.uint32();
                            break;
                        }
                    case 5: {
                            message.unknown_2 = reader.uint32();
                            break;
                        }
                    case 6: {
                            message.unknown_3 = reader.uint32();
                            break;
                        }
                    case 7: {
                            message.reactions = $root.receiptinfo.MessageInfo.Reactions.decode(reader, reader.uint32());
                            break;
                        }
                    case 8: {
                            message.pollInfo = $root.receiptinfo.MessageInfo.Poll.decode(reader, reader.uint32());
                            break;
                        }
                    case 10: {
                            message.unknownString = reader.string();
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
             * Decodes a MessageInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof receiptinfo.MessageInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {receiptinfo.MessageInfo} MessageInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MessageInfo message.
             * @function verify
             * @memberof receiptinfo.MessageInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.singleLegacy != null && message.hasOwnProperty("singleLegacy")) {
                    if (!Array.isArray(message.singleLegacy))
                        return "singleLegacy: array expected";
                    for (var i = 0; i < message.singleLegacy.length; ++i) {
                        var error = $root.receiptinfo.MessageInfo.ReceiptInfoSingleLegacy.verify(message.singleLegacy[i]);
                        if (error)
                            return "singleLegacy." + error;
                    }
                }
                if (message.single != null && message.hasOwnProperty("single")) {
                    if (!Array.isArray(message.single))
                        return "single: array expected";
                    for (var i = 0; i < message.single.length; ++i) {
                        var error = $root.receiptinfo.MessageInfo.ReceiptInfoSingle.verify(message.single[i]);
                        if (error)
                            return "single." + error;
                    }
                }
                if (message.sentTimestampSeconds != null && message.hasOwnProperty("sentTimestampSeconds")) {
                    properties._sentTimestampSeconds = 1;
                    if (!$util.isInteger(message.sentTimestampSeconds))
                        return "sentTimestampSeconds: integer expected";
                }
                if (message.unknown != null && message.hasOwnProperty("unknown")) {
                    properties._unknown = 1;
                    if (!$util.isInteger(message.unknown))
                        return "unknown: integer expected";
                }
                if (message.unknown_2 != null && message.hasOwnProperty("unknown_2")) {
                    properties._unknown_2 = 1;
                    if (!$util.isInteger(message.unknown_2))
                        return "unknown_2: integer expected";
                }
                if (message.unknown_3 != null && message.hasOwnProperty("unknown_3")) {
                    properties._unknown_3 = 1;
                    if (!$util.isInteger(message.unknown_3))
                        return "unknown_3: integer expected";
                }
                if (message.reactions != null && message.hasOwnProperty("reactions")) {
                    properties._reactions = 1;
                    {
                        var error = $root.receiptinfo.MessageInfo.Reactions.verify(message.reactions);
                        if (error)
                            return "reactions." + error;
                    }
                }
                if (message.pollInfo != null && message.hasOwnProperty("pollInfo")) {
                    properties._pollInfo = 1;
                    {
                        var error = $root.receiptinfo.MessageInfo.Poll.verify(message.pollInfo);
                        if (error)
                            return "pollInfo." + error;
                    }
                }
                if (message.unknownString != null && message.hasOwnProperty("unknownString")) {
                    properties._unknownString = 1;
                    if (!$util.isString(message.unknownString))
                        return "unknownString: string expected";
                }
                return null;
            };
    
            /**
             * Creates a MessageInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof receiptinfo.MessageInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {receiptinfo.MessageInfo} MessageInfo
             */
            MessageInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.receiptinfo.MessageInfo)
                    return object;
                var message = new $root.receiptinfo.MessageInfo();
                if (object.singleLegacy) {
                    if (!Array.isArray(object.singleLegacy))
                        throw TypeError(".receiptinfo.MessageInfo.singleLegacy: array expected");
                    message.singleLegacy = [];
                    for (var i = 0; i < object.singleLegacy.length; ++i) {
                        if (typeof object.singleLegacy[i] !== "object")
                            throw TypeError(".receiptinfo.MessageInfo.singleLegacy: object expected");
                        message.singleLegacy[i] = $root.receiptinfo.MessageInfo.ReceiptInfoSingleLegacy.fromObject(object.singleLegacy[i]);
                    }
                }
                if (object.single) {
                    if (!Array.isArray(object.single))
                        throw TypeError(".receiptinfo.MessageInfo.single: array expected");
                    message.single = [];
                    for (var i = 0; i < object.single.length; ++i) {
                        if (typeof object.single[i] !== "object")
                            throw TypeError(".receiptinfo.MessageInfo.single: object expected");
                        message.single[i] = $root.receiptinfo.MessageInfo.ReceiptInfoSingle.fromObject(object.single[i]);
                    }
                }
                if (object.sentTimestampSeconds != null)
                    message.sentTimestampSeconds = object.sentTimestampSeconds >>> 0;
                if (object.unknown != null)
                    message.unknown = object.unknown >>> 0;
                if (object.unknown_2 != null)
                    message.unknown_2 = object.unknown_2 >>> 0;
                if (object.unknown_3 != null)
                    message.unknown_3 = object.unknown_3 >>> 0;
                if (object.reactions != null) {
                    if (typeof object.reactions !== "object")
                        throw TypeError(".receiptinfo.MessageInfo.reactions: object expected");
                    message.reactions = $root.receiptinfo.MessageInfo.Reactions.fromObject(object.reactions);
                }
                if (object.pollInfo != null) {
                    if (typeof object.pollInfo !== "object")
                        throw TypeError(".receiptinfo.MessageInfo.pollInfo: object expected");
                    message.pollInfo = $root.receiptinfo.MessageInfo.Poll.fromObject(object.pollInfo);
                }
                if (object.unknownString != null)
                    message.unknownString = String(object.unknownString);
                return message;
            };
    
            /**
             * Creates a plain object from a MessageInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof receiptinfo.MessageInfo
             * @static
             * @param {receiptinfo.MessageInfo} message MessageInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.singleLegacy = [];
                    object.single = [];
                }
                if (message.singleLegacy && message.singleLegacy.length) {
                    object.singleLegacy = [];
                    for (var j = 0; j < message.singleLegacy.length; ++j)
                        object.singleLegacy[j] = $root.receiptinfo.MessageInfo.ReceiptInfoSingleLegacy.toObject(message.singleLegacy[j], options);
                }
                if (message.single && message.single.length) {
                    object.single = [];
                    for (var j = 0; j < message.single.length; ++j)
                        object.single[j] = $root.receiptinfo.MessageInfo.ReceiptInfoSingle.toObject(message.single[j], options);
                }
                if (message.sentTimestampSeconds != null && message.hasOwnProperty("sentTimestampSeconds")) {
                    object.sentTimestampSeconds = message.sentTimestampSeconds;
                    if (options.oneofs)
                        object._sentTimestampSeconds = "sentTimestampSeconds";
                }
                if (message.unknown != null && message.hasOwnProperty("unknown")) {
                    object.unknown = message.unknown;
                    if (options.oneofs)
                        object._unknown = "unknown";
                }
                if (message.unknown_2 != null && message.hasOwnProperty("unknown_2")) {
                    object.unknown_2 = message.unknown_2;
                    if (options.oneofs)
                        object._unknown_2 = "unknown_2";
                }
                if (message.unknown_3 != null && message.hasOwnProperty("unknown_3")) {
                    object.unknown_3 = message.unknown_3;
                    if (options.oneofs)
                        object._unknown_3 = "unknown_3";
                }
                if (message.reactions != null && message.hasOwnProperty("reactions")) {
                    object.reactions = $root.receiptinfo.MessageInfo.Reactions.toObject(message.reactions, options);
                    if (options.oneofs)
                        object._reactions = "reactions";
                }
                if (message.pollInfo != null && message.hasOwnProperty("pollInfo")) {
                    object.pollInfo = $root.receiptinfo.MessageInfo.Poll.toObject(message.pollInfo, options);
                    if (options.oneofs)
                        object._pollInfo = "pollInfo";
                }
                if (message.unknownString != null && message.hasOwnProperty("unknownString")) {
                    object.unknownString = message.unknownString;
                    if (options.oneofs)
                        object._unknownString = "unknownString";
                }
                return object;
            };
    
            /**
             * Converts this MessageInfo to JSON.
             * @function toJSON
             * @memberof receiptinfo.MessageInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for MessageInfo
             * @function getTypeUrl
             * @memberof receiptinfo.MessageInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MessageInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/receiptinfo.MessageInfo";
            };
    
            MessageInfo.ReceiptInfoSingleLegacy = (function() {
    
                /**
                 * Properties of a ReceiptInfoSingleLegacy.
                 * @memberof receiptinfo.MessageInfo
                 * @interface IReceiptInfoSingleLegacy
                 * @property {string|null} [phoneNumber] phone number of the person
                 * @property {number|null} [unknownNumber] ReceiptInfoSingleLegacy unknownNumber
                 * @property {number|null} [receivedTimestampSeconds] Timestamp when this message was received by this person. UNIX epoch in seconds.
                 * @property {number|null} [readTimestampSeconds] Timestamp when this message was read by this person. UNIX epoch in seconds.
                 * @property {number|null} [playedTimestampSeconds] Timestamp of ??? (maybe when played for voice messages?). UNIX epoch in seconds.
                 */
    
                /**
                 * Constructs a new ReceiptInfoSingleLegacy.
                 * @memberof receiptinfo.MessageInfo
                 * @classdesc Receipt info for a single recipient.
                 * Old format, does not appear for newer messages.
                 * @implements IReceiptInfoSingleLegacy
                 * @constructor
                 * @param {receiptinfo.MessageInfo.IReceiptInfoSingleLegacy=} [properties] Properties to set
                 */
                function ReceiptInfoSingleLegacy(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * phone number of the person
                 * @member {string|null|undefined} phoneNumber
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingleLegacy
                 * @instance
                 */
                ReceiptInfoSingleLegacy.prototype.phoneNumber = null;
    
                /**
                 * ReceiptInfoSingleLegacy unknownNumber.
                 * @member {number|null|undefined} unknownNumber
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingleLegacy
                 * @instance
                 */
                ReceiptInfoSingleLegacy.prototype.unknownNumber = null;
    
                /**
                 * Timestamp when this message was received by this person. UNIX epoch in seconds.
                 * @member {number|null|undefined} receivedTimestampSeconds
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingleLegacy
                 * @instance
                 */
                ReceiptInfoSingleLegacy.prototype.receivedTimestampSeconds = null;
    
                /**
                 * Timestamp when this message was read by this person. UNIX epoch in seconds.
                 * @member {number|null|undefined} readTimestampSeconds
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingleLegacy
                 * @instance
                 */
                ReceiptInfoSingleLegacy.prototype.readTimestampSeconds = null;
    
                /**
                 * Timestamp of ??? (maybe when played for voice messages?). UNIX epoch in seconds.
                 * @member {number|null|undefined} playedTimestampSeconds
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingleLegacy
                 * @instance
                 */
                ReceiptInfoSingleLegacy.prototype.playedTimestampSeconds = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * ReceiptInfoSingleLegacy _phoneNumber.
                 * @member {"phoneNumber"|undefined} _phoneNumber
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingleLegacy
                 * @instance
                 */
                Object.defineProperty(ReceiptInfoSingleLegacy.prototype, "_phoneNumber", {
                    get: $util.oneOfGetter($oneOfFields = ["phoneNumber"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * ReceiptInfoSingleLegacy _unknownNumber.
                 * @member {"unknownNumber"|undefined} _unknownNumber
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingleLegacy
                 * @instance
                 */
                Object.defineProperty(ReceiptInfoSingleLegacy.prototype, "_unknownNumber", {
                    get: $util.oneOfGetter($oneOfFields = ["unknownNumber"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * ReceiptInfoSingleLegacy _receivedTimestampSeconds.
                 * @member {"receivedTimestampSeconds"|undefined} _receivedTimestampSeconds
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingleLegacy
                 * @instance
                 */
                Object.defineProperty(ReceiptInfoSingleLegacy.prototype, "_receivedTimestampSeconds", {
                    get: $util.oneOfGetter($oneOfFields = ["receivedTimestampSeconds"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * ReceiptInfoSingleLegacy _readTimestampSeconds.
                 * @member {"readTimestampSeconds"|undefined} _readTimestampSeconds
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingleLegacy
                 * @instance
                 */
                Object.defineProperty(ReceiptInfoSingleLegacy.prototype, "_readTimestampSeconds", {
                    get: $util.oneOfGetter($oneOfFields = ["readTimestampSeconds"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * ReceiptInfoSingleLegacy _playedTimestampSeconds.
                 * @member {"playedTimestampSeconds"|undefined} _playedTimestampSeconds
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingleLegacy
                 * @instance
                 */
                Object.defineProperty(ReceiptInfoSingleLegacy.prototype, "_playedTimestampSeconds", {
                    get: $util.oneOfGetter($oneOfFields = ["playedTimestampSeconds"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new ReceiptInfoSingleLegacy instance using the specified properties.
                 * @function create
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingleLegacy
                 * @static
                 * @param {receiptinfo.MessageInfo.IReceiptInfoSingleLegacy=} [properties] Properties to set
                 * @returns {receiptinfo.MessageInfo.ReceiptInfoSingleLegacy} ReceiptInfoSingleLegacy instance
                 */
                ReceiptInfoSingleLegacy.create = function create(properties) {
                    return new ReceiptInfoSingleLegacy(properties);
                };
    
                /**
                 * Encodes the specified ReceiptInfoSingleLegacy message. Does not implicitly {@link receiptinfo.MessageInfo.ReceiptInfoSingleLegacy.verify|verify} messages.
                 * @function encode
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingleLegacy
                 * @static
                 * @param {receiptinfo.MessageInfo.IReceiptInfoSingleLegacy} message ReceiptInfoSingleLegacy message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReceiptInfoSingleLegacy.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.phoneNumber != null && Object.hasOwnProperty.call(message, "phoneNumber"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.phoneNumber);
                    if (message.unknownNumber != null && Object.hasOwnProperty.call(message, "unknownNumber"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.unknownNumber);
                    if (message.receivedTimestampSeconds != null && Object.hasOwnProperty.call(message, "receivedTimestampSeconds"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.receivedTimestampSeconds);
                    if (message.readTimestampSeconds != null && Object.hasOwnProperty.call(message, "readTimestampSeconds"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.readTimestampSeconds);
                    if (message.playedTimestampSeconds != null && Object.hasOwnProperty.call(message, "playedTimestampSeconds"))
                        writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.playedTimestampSeconds);
                    return writer;
                };
    
                /**
                 * Encodes the specified ReceiptInfoSingleLegacy message, length delimited. Does not implicitly {@link receiptinfo.MessageInfo.ReceiptInfoSingleLegacy.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingleLegacy
                 * @static
                 * @param {receiptinfo.MessageInfo.IReceiptInfoSingleLegacy} message ReceiptInfoSingleLegacy message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReceiptInfoSingleLegacy.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ReceiptInfoSingleLegacy message from the specified reader or buffer.
                 * @function decode
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingleLegacy
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {receiptinfo.MessageInfo.ReceiptInfoSingleLegacy} ReceiptInfoSingleLegacy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReceiptInfoSingleLegacy.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.receiptinfo.MessageInfo.ReceiptInfoSingleLegacy();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.phoneNumber = reader.string();
                                break;
                            }
                        case 2: {
                                message.unknownNumber = reader.uint32();
                                break;
                            }
                        case 3: {
                                message.receivedTimestampSeconds = reader.uint32();
                                break;
                            }
                        case 4: {
                                message.readTimestampSeconds = reader.uint32();
                                break;
                            }
                        case 5: {
                                message.playedTimestampSeconds = reader.uint32();
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
                 * Decodes a ReceiptInfoSingleLegacy message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingleLegacy
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {receiptinfo.MessageInfo.ReceiptInfoSingleLegacy} ReceiptInfoSingleLegacy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReceiptInfoSingleLegacy.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ReceiptInfoSingleLegacy message.
                 * @function verify
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingleLegacy
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReceiptInfoSingleLegacy.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber")) {
                        properties._phoneNumber = 1;
                        if (!$util.isString(message.phoneNumber))
                            return "phoneNumber: string expected";
                    }
                    if (message.unknownNumber != null && message.hasOwnProperty("unknownNumber")) {
                        properties._unknownNumber = 1;
                        if (!$util.isInteger(message.unknownNumber))
                            return "unknownNumber: integer expected";
                    }
                    if (message.receivedTimestampSeconds != null && message.hasOwnProperty("receivedTimestampSeconds")) {
                        properties._receivedTimestampSeconds = 1;
                        if (!$util.isInteger(message.receivedTimestampSeconds))
                            return "receivedTimestampSeconds: integer expected";
                    }
                    if (message.readTimestampSeconds != null && message.hasOwnProperty("readTimestampSeconds")) {
                        properties._readTimestampSeconds = 1;
                        if (!$util.isInteger(message.readTimestampSeconds))
                            return "readTimestampSeconds: integer expected";
                    }
                    if (message.playedTimestampSeconds != null && message.hasOwnProperty("playedTimestampSeconds")) {
                        properties._playedTimestampSeconds = 1;
                        if (!$util.isInteger(message.playedTimestampSeconds))
                            return "playedTimestampSeconds: integer expected";
                    }
                    return null;
                };
    
                /**
                 * Creates a ReceiptInfoSingleLegacy message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingleLegacy
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {receiptinfo.MessageInfo.ReceiptInfoSingleLegacy} ReceiptInfoSingleLegacy
                 */
                ReceiptInfoSingleLegacy.fromObject = function fromObject(object) {
                    if (object instanceof $root.receiptinfo.MessageInfo.ReceiptInfoSingleLegacy)
                        return object;
                    var message = new $root.receiptinfo.MessageInfo.ReceiptInfoSingleLegacy();
                    if (object.phoneNumber != null)
                        message.phoneNumber = String(object.phoneNumber);
                    if (object.unknownNumber != null)
                        message.unknownNumber = object.unknownNumber >>> 0;
                    if (object.receivedTimestampSeconds != null)
                        message.receivedTimestampSeconds = object.receivedTimestampSeconds >>> 0;
                    if (object.readTimestampSeconds != null)
                        message.readTimestampSeconds = object.readTimestampSeconds >>> 0;
                    if (object.playedTimestampSeconds != null)
                        message.playedTimestampSeconds = object.playedTimestampSeconds >>> 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a ReceiptInfoSingleLegacy message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingleLegacy
                 * @static
                 * @param {receiptinfo.MessageInfo.ReceiptInfoSingleLegacy} message ReceiptInfoSingleLegacy
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReceiptInfoSingleLegacy.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber")) {
                        object.phoneNumber = message.phoneNumber;
                        if (options.oneofs)
                            object._phoneNumber = "phoneNumber";
                    }
                    if (message.unknownNumber != null && message.hasOwnProperty("unknownNumber")) {
                        object.unknownNumber = message.unknownNumber;
                        if (options.oneofs)
                            object._unknownNumber = "unknownNumber";
                    }
                    if (message.receivedTimestampSeconds != null && message.hasOwnProperty("receivedTimestampSeconds")) {
                        object.receivedTimestampSeconds = message.receivedTimestampSeconds;
                        if (options.oneofs)
                            object._receivedTimestampSeconds = "receivedTimestampSeconds";
                    }
                    if (message.readTimestampSeconds != null && message.hasOwnProperty("readTimestampSeconds")) {
                        object.readTimestampSeconds = message.readTimestampSeconds;
                        if (options.oneofs)
                            object._readTimestampSeconds = "readTimestampSeconds";
                    }
                    if (message.playedTimestampSeconds != null && message.hasOwnProperty("playedTimestampSeconds")) {
                        object.playedTimestampSeconds = message.playedTimestampSeconds;
                        if (options.oneofs)
                            object._playedTimestampSeconds = "playedTimestampSeconds";
                    }
                    return object;
                };
    
                /**
                 * Converts this ReceiptInfoSingleLegacy to JSON.
                 * @function toJSON
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingleLegacy
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReceiptInfoSingleLegacy.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for ReceiptInfoSingleLegacy
                 * @function getTypeUrl
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingleLegacy
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ReceiptInfoSingleLegacy.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/receiptinfo.MessageInfo.ReceiptInfoSingleLegacy";
                };
    
                return ReceiptInfoSingleLegacy;
            })();
    
            MessageInfo.ReceiptInfoSingle = (function() {
    
                /**
                 * Properties of a ReceiptInfoSingle.
                 * @memberof receiptinfo.MessageInfo
                 * @interface IReceiptInfoSingle
                 * @property {Uint8Array|null} [phoneNumber] Phone number of the person, obfuscated:
                 * turn bytes into hex -> read from third character = phone number
                 * @property {number|null} [offsetReceivedTimestampSeconds] Offset from sent_timestamp when this message (in parent)
                 * was received by this person. UNIX epoch in seconds.
                 * @property {number|null} [offsetReadTimestampSeconds] Offset from sent_timestamp when this message (in parent)
                 * was read by this person. UNIX epoch in seconds.
                 * @property {number|null} [offsetPlayedTimestampSeconds] Only observed once. Probably:
                 * Offset from sent_timestamp when this message (in parent)
                 * was played by this person. UNIX epoch in seconds.
                 * @property {Array.<receiptinfo.MessageInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing>|null} [unknownThingOne] ReceiptInfoSingle unknownThingOne
                 * @property {Array.<receiptinfo.MessageInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing>|null} [unknownThingTwo] ReceiptInfoSingle unknownThingTwo
                 */
    
                /**
                 * Constructs a new ReceiptInfoSingle.
                 * @memberof receiptinfo.MessageInfo
                 * @classdesc Receipt info for a single recipient, new format.
                 * @implements IReceiptInfoSingle
                 * @constructor
                 * @param {receiptinfo.MessageInfo.IReceiptInfoSingle=} [properties] Properties to set
                 */
                function ReceiptInfoSingle(properties) {
                    this.unknownThingOne = [];
                    this.unknownThingTwo = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Phone number of the person, obfuscated:
                 * turn bytes into hex -> read from third character = phone number
                 * @member {Uint8Array|null|undefined} phoneNumber
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle
                 * @instance
                 */
                ReceiptInfoSingle.prototype.phoneNumber = null;
    
                /**
                 * Offset from sent_timestamp when this message (in parent)
                 * was received by this person. UNIX epoch in seconds.
                 * @member {number|null|undefined} offsetReceivedTimestampSeconds
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle
                 * @instance
                 */
                ReceiptInfoSingle.prototype.offsetReceivedTimestampSeconds = null;
    
                /**
                 * Offset from sent_timestamp when this message (in parent)
                 * was read by this person. UNIX epoch in seconds.
                 * @member {number|null|undefined} offsetReadTimestampSeconds
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle
                 * @instance
                 */
                ReceiptInfoSingle.prototype.offsetReadTimestampSeconds = null;
    
                /**
                 * Only observed once. Probably:
                 * Offset from sent_timestamp when this message (in parent)
                 * was played by this person. UNIX epoch in seconds.
                 * @member {number|null|undefined} offsetPlayedTimestampSeconds
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle
                 * @instance
                 */
                ReceiptInfoSingle.prototype.offsetPlayedTimestampSeconds = null;
    
                /**
                 * ReceiptInfoSingle unknownThingOne.
                 * @member {Array.<receiptinfo.MessageInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing>} unknownThingOne
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle
                 * @instance
                 */
                ReceiptInfoSingle.prototype.unknownThingOne = $util.emptyArray;
    
                /**
                 * ReceiptInfoSingle unknownThingTwo.
                 * @member {Array.<receiptinfo.MessageInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing>} unknownThingTwo
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle
                 * @instance
                 */
                ReceiptInfoSingle.prototype.unknownThingTwo = $util.emptyArray;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * ReceiptInfoSingle _phoneNumber.
                 * @member {"phoneNumber"|undefined} _phoneNumber
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle
                 * @instance
                 */
                Object.defineProperty(ReceiptInfoSingle.prototype, "_phoneNumber", {
                    get: $util.oneOfGetter($oneOfFields = ["phoneNumber"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * ReceiptInfoSingle _offsetReceivedTimestampSeconds.
                 * @member {"offsetReceivedTimestampSeconds"|undefined} _offsetReceivedTimestampSeconds
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle
                 * @instance
                 */
                Object.defineProperty(ReceiptInfoSingle.prototype, "_offsetReceivedTimestampSeconds", {
                    get: $util.oneOfGetter($oneOfFields = ["offsetReceivedTimestampSeconds"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * ReceiptInfoSingle _offsetReadTimestampSeconds.
                 * @member {"offsetReadTimestampSeconds"|undefined} _offsetReadTimestampSeconds
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle
                 * @instance
                 */
                Object.defineProperty(ReceiptInfoSingle.prototype, "_offsetReadTimestampSeconds", {
                    get: $util.oneOfGetter($oneOfFields = ["offsetReadTimestampSeconds"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * ReceiptInfoSingle _offsetPlayedTimestampSeconds.
                 * @member {"offsetPlayedTimestampSeconds"|undefined} _offsetPlayedTimestampSeconds
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle
                 * @instance
                 */
                Object.defineProperty(ReceiptInfoSingle.prototype, "_offsetPlayedTimestampSeconds", {
                    get: $util.oneOfGetter($oneOfFields = ["offsetPlayedTimestampSeconds"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new ReceiptInfoSingle instance using the specified properties.
                 * @function create
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle
                 * @static
                 * @param {receiptinfo.MessageInfo.IReceiptInfoSingle=} [properties] Properties to set
                 * @returns {receiptinfo.MessageInfo.ReceiptInfoSingle} ReceiptInfoSingle instance
                 */
                ReceiptInfoSingle.create = function create(properties) {
                    return new ReceiptInfoSingle(properties);
                };
    
                /**
                 * Encodes the specified ReceiptInfoSingle message. Does not implicitly {@link receiptinfo.MessageInfo.ReceiptInfoSingle.verify|verify} messages.
                 * @function encode
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle
                 * @static
                 * @param {receiptinfo.MessageInfo.IReceiptInfoSingle} message ReceiptInfoSingle message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReceiptInfoSingle.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.phoneNumber != null && Object.hasOwnProperty.call(message, "phoneNumber"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.phoneNumber);
                    if (message.offsetReceivedTimestampSeconds != null && Object.hasOwnProperty.call(message, "offsetReceivedTimestampSeconds"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.offsetReceivedTimestampSeconds);
                    if (message.offsetReadTimestampSeconds != null && Object.hasOwnProperty.call(message, "offsetReadTimestampSeconds"))
                        writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.offsetReadTimestampSeconds);
                    if (message.offsetPlayedTimestampSeconds != null && Object.hasOwnProperty.call(message, "offsetPlayedTimestampSeconds"))
                        writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.offsetPlayedTimestampSeconds);
                    if (message.unknownThingOne != null && message.unknownThingOne.length)
                        for (var i = 0; i < message.unknownThingOne.length; ++i)
                            $root.receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.encode(message.unknownThingOne[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.unknownThingTwo != null && message.unknownThingTwo.length)
                        for (var i = 0; i < message.unknownThingTwo.length; ++i)
                            $root.receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.encode(message.unknownThingTwo[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ReceiptInfoSingle message, length delimited. Does not implicitly {@link receiptinfo.MessageInfo.ReceiptInfoSingle.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle
                 * @static
                 * @param {receiptinfo.MessageInfo.IReceiptInfoSingle} message ReceiptInfoSingle message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReceiptInfoSingle.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ReceiptInfoSingle message from the specified reader or buffer.
                 * @function decode
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {receiptinfo.MessageInfo.ReceiptInfoSingle} ReceiptInfoSingle
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReceiptInfoSingle.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.receiptinfo.MessageInfo.ReceiptInfoSingle();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.phoneNumber = reader.bytes();
                                break;
                            }
                        case 4: {
                                message.offsetReceivedTimestampSeconds = reader.uint32();
                                break;
                            }
                        case 5: {
                                message.offsetReadTimestampSeconds = reader.uint32();
                                break;
                            }
                        case 6: {
                                message.offsetPlayedTimestampSeconds = reader.uint32();
                                break;
                            }
                        case 9: {
                                if (!(message.unknownThingOne && message.unknownThingOne.length))
                                    message.unknownThingOne = [];
                                message.unknownThingOne.push($root.receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.decode(reader, reader.uint32()));
                                break;
                            }
                        case 10: {
                                if (!(message.unknownThingTwo && message.unknownThingTwo.length))
                                    message.unknownThingTwo = [];
                                message.unknownThingTwo.push($root.receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.decode(reader, reader.uint32()));
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
                 * Decodes a ReceiptInfoSingle message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {receiptinfo.MessageInfo.ReceiptInfoSingle} ReceiptInfoSingle
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReceiptInfoSingle.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ReceiptInfoSingle message.
                 * @function verify
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReceiptInfoSingle.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber")) {
                        properties._phoneNumber = 1;
                        if (!(message.phoneNumber && typeof message.phoneNumber.length === "number" || $util.isString(message.phoneNumber)))
                            return "phoneNumber: buffer expected";
                    }
                    if (message.offsetReceivedTimestampSeconds != null && message.hasOwnProperty("offsetReceivedTimestampSeconds")) {
                        properties._offsetReceivedTimestampSeconds = 1;
                        if (!$util.isInteger(message.offsetReceivedTimestampSeconds))
                            return "offsetReceivedTimestampSeconds: integer expected";
                    }
                    if (message.offsetReadTimestampSeconds != null && message.hasOwnProperty("offsetReadTimestampSeconds")) {
                        properties._offsetReadTimestampSeconds = 1;
                        if (!$util.isInteger(message.offsetReadTimestampSeconds))
                            return "offsetReadTimestampSeconds: integer expected";
                    }
                    if (message.offsetPlayedTimestampSeconds != null && message.hasOwnProperty("offsetPlayedTimestampSeconds")) {
                        properties._offsetPlayedTimestampSeconds = 1;
                        if (!$util.isInteger(message.offsetPlayedTimestampSeconds))
                            return "offsetPlayedTimestampSeconds: integer expected";
                    }
                    if (message.unknownThingOne != null && message.hasOwnProperty("unknownThingOne")) {
                        if (!Array.isArray(message.unknownThingOne))
                            return "unknownThingOne: array expected";
                        for (var i = 0; i < message.unknownThingOne.length; ++i) {
                            var error = $root.receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.verify(message.unknownThingOne[i]);
                            if (error)
                                return "unknownThingOne." + error;
                        }
                    }
                    if (message.unknownThingTwo != null && message.hasOwnProperty("unknownThingTwo")) {
                        if (!Array.isArray(message.unknownThingTwo))
                            return "unknownThingTwo: array expected";
                        for (var i = 0; i < message.unknownThingTwo.length; ++i) {
                            var error = $root.receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.verify(message.unknownThingTwo[i]);
                            if (error)
                                return "unknownThingTwo." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a ReceiptInfoSingle message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {receiptinfo.MessageInfo.ReceiptInfoSingle} ReceiptInfoSingle
                 */
                ReceiptInfoSingle.fromObject = function fromObject(object) {
                    if (object instanceof $root.receiptinfo.MessageInfo.ReceiptInfoSingle)
                        return object;
                    var message = new $root.receiptinfo.MessageInfo.ReceiptInfoSingle();
                    if (object.phoneNumber != null)
                        if (typeof object.phoneNumber === "string")
                            $util.base64.decode(object.phoneNumber, message.phoneNumber = $util.newBuffer($util.base64.length(object.phoneNumber)), 0);
                        else if (object.phoneNumber.length >= 0)
                            message.phoneNumber = object.phoneNumber;
                    if (object.offsetReceivedTimestampSeconds != null)
                        message.offsetReceivedTimestampSeconds = object.offsetReceivedTimestampSeconds >>> 0;
                    if (object.offsetReadTimestampSeconds != null)
                        message.offsetReadTimestampSeconds = object.offsetReadTimestampSeconds >>> 0;
                    if (object.offsetPlayedTimestampSeconds != null)
                        message.offsetPlayedTimestampSeconds = object.offsetPlayedTimestampSeconds >>> 0;
                    if (object.unknownThingOne) {
                        if (!Array.isArray(object.unknownThingOne))
                            throw TypeError(".receiptinfo.MessageInfo.ReceiptInfoSingle.unknownThingOne: array expected");
                        message.unknownThingOne = [];
                        for (var i = 0; i < object.unknownThingOne.length; ++i) {
                            if (typeof object.unknownThingOne[i] !== "object")
                                throw TypeError(".receiptinfo.MessageInfo.ReceiptInfoSingle.unknownThingOne: object expected");
                            message.unknownThingOne[i] = $root.receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.fromObject(object.unknownThingOne[i]);
                        }
                    }
                    if (object.unknownThingTwo) {
                        if (!Array.isArray(object.unknownThingTwo))
                            throw TypeError(".receiptinfo.MessageInfo.ReceiptInfoSingle.unknownThingTwo: array expected");
                        message.unknownThingTwo = [];
                        for (var i = 0; i < object.unknownThingTwo.length; ++i) {
                            if (typeof object.unknownThingTwo[i] !== "object")
                                throw TypeError(".receiptinfo.MessageInfo.ReceiptInfoSingle.unknownThingTwo: object expected");
                            message.unknownThingTwo[i] = $root.receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.fromObject(object.unknownThingTwo[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ReceiptInfoSingle message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle
                 * @static
                 * @param {receiptinfo.MessageInfo.ReceiptInfoSingle} message ReceiptInfoSingle
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReceiptInfoSingle.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.unknownThingOne = [];
                        object.unknownThingTwo = [];
                    }
                    if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber")) {
                        object.phoneNumber = options.bytes === String ? $util.base64.encode(message.phoneNumber, 0, message.phoneNumber.length) : options.bytes === Array ? Array.prototype.slice.call(message.phoneNumber) : message.phoneNumber;
                        if (options.oneofs)
                            object._phoneNumber = "phoneNumber";
                    }
                    if (message.offsetReceivedTimestampSeconds != null && message.hasOwnProperty("offsetReceivedTimestampSeconds")) {
                        object.offsetReceivedTimestampSeconds = message.offsetReceivedTimestampSeconds;
                        if (options.oneofs)
                            object._offsetReceivedTimestampSeconds = "offsetReceivedTimestampSeconds";
                    }
                    if (message.offsetReadTimestampSeconds != null && message.hasOwnProperty("offsetReadTimestampSeconds")) {
                        object.offsetReadTimestampSeconds = message.offsetReadTimestampSeconds;
                        if (options.oneofs)
                            object._offsetReadTimestampSeconds = "offsetReadTimestampSeconds";
                    }
                    if (message.offsetPlayedTimestampSeconds != null && message.hasOwnProperty("offsetPlayedTimestampSeconds")) {
                        object.offsetPlayedTimestampSeconds = message.offsetPlayedTimestampSeconds;
                        if (options.oneofs)
                            object._offsetPlayedTimestampSeconds = "offsetPlayedTimestampSeconds";
                    }
                    if (message.unknownThingOne && message.unknownThingOne.length) {
                        object.unknownThingOne = [];
                        for (var j = 0; j < message.unknownThingOne.length; ++j)
                            object.unknownThingOne[j] = $root.receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.toObject(message.unknownThingOne[j], options);
                    }
                    if (message.unknownThingTwo && message.unknownThingTwo.length) {
                        object.unknownThingTwo = [];
                        for (var j = 0; j < message.unknownThingTwo.length; ++j)
                            object.unknownThingTwo[j] = $root.receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.toObject(message.unknownThingTwo[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this ReceiptInfoSingle to JSON.
                 * @function toJSON
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReceiptInfoSingle.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for ReceiptInfoSingle
                 * @function getTypeUrl
                 * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ReceiptInfoSingle.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/receiptinfo.MessageInfo.ReceiptInfoSingle";
                };
    
                ReceiptInfoSingle.ReceiptInfoSingleUnkownThing = (function() {
    
                    /**
                     * Properties of a ReceiptInfoSingleUnkownThing.
                     * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle
                     * @interface IReceiptInfoSingleUnkownThing
                     * @property {number|null} [one] ReceiptInfoSingleUnkownThing one
                     * @property {number|null} [two] ReceiptInfoSingleUnkownThing two
                     */
    
                    /**
                     * Constructs a new ReceiptInfoSingleUnkownThing.
                     * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle
                     * @classdesc Represents a ReceiptInfoSingleUnkownThing.
                     * @implements IReceiptInfoSingleUnkownThing
                     * @constructor
                     * @param {receiptinfo.MessageInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing=} [properties] Properties to set
                     */
                    function ReceiptInfoSingleUnkownThing(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ReceiptInfoSingleUnkownThing one.
                     * @member {number|null|undefined} one
                     * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                     * @instance
                     */
                    ReceiptInfoSingleUnkownThing.prototype.one = null;
    
                    /**
                     * ReceiptInfoSingleUnkownThing two.
                     * @member {number|null|undefined} two
                     * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                     * @instance
                     */
                    ReceiptInfoSingleUnkownThing.prototype.two = null;
    
                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;
    
                    /**
                     * ReceiptInfoSingleUnkownThing _one.
                     * @member {"one"|undefined} _one
                     * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                     * @instance
                     */
                    Object.defineProperty(ReceiptInfoSingleUnkownThing.prototype, "_one", {
                        get: $util.oneOfGetter($oneOfFields = ["one"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * ReceiptInfoSingleUnkownThing _two.
                     * @member {"two"|undefined} _two
                     * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                     * @instance
                     */
                    Object.defineProperty(ReceiptInfoSingleUnkownThing.prototype, "_two", {
                        get: $util.oneOfGetter($oneOfFields = ["two"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * Creates a new ReceiptInfoSingleUnkownThing instance using the specified properties.
                     * @function create
                     * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                     * @static
                     * @param {receiptinfo.MessageInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing=} [properties] Properties to set
                     * @returns {receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing} ReceiptInfoSingleUnkownThing instance
                     */
                    ReceiptInfoSingleUnkownThing.create = function create(properties) {
                        return new ReceiptInfoSingleUnkownThing(properties);
                    };
    
                    /**
                     * Encodes the specified ReceiptInfoSingleUnkownThing message. Does not implicitly {@link receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.verify|verify} messages.
                     * @function encode
                     * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                     * @static
                     * @param {receiptinfo.MessageInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing} message ReceiptInfoSingleUnkownThing message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReceiptInfoSingleUnkownThing.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.one != null && Object.hasOwnProperty.call(message, "one"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.one);
                        if (message.two != null && Object.hasOwnProperty.call(message, "two"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.two);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReceiptInfoSingleUnkownThing message, length delimited. Does not implicitly {@link receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                     * @static
                     * @param {receiptinfo.MessageInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing} message ReceiptInfoSingleUnkownThing message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReceiptInfoSingleUnkownThing.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReceiptInfoSingleUnkownThing message from the specified reader or buffer.
                     * @function decode
                     * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing} ReceiptInfoSingleUnkownThing
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReceiptInfoSingleUnkownThing.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.one = reader.uint32();
                                    break;
                                }
                            case 2: {
                                    message.two = reader.uint32();
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
                     * Decodes a ReceiptInfoSingleUnkownThing message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing} ReceiptInfoSingleUnkownThing
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReceiptInfoSingleUnkownThing.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReceiptInfoSingleUnkownThing message.
                     * @function verify
                     * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReceiptInfoSingleUnkownThing.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.one != null && message.hasOwnProperty("one")) {
                            properties._one = 1;
                            if (!$util.isInteger(message.one))
                                return "one: integer expected";
                        }
                        if (message.two != null && message.hasOwnProperty("two")) {
                            properties._two = 1;
                            if (!$util.isInteger(message.two))
                                return "two: integer expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a ReceiptInfoSingleUnkownThing message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing} ReceiptInfoSingleUnkownThing
                     */
                    ReceiptInfoSingleUnkownThing.fromObject = function fromObject(object) {
                        if (object instanceof $root.receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing)
                            return object;
                        var message = new $root.receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing();
                        if (object.one != null)
                            message.one = object.one >>> 0;
                        if (object.two != null)
                            message.two = object.two >>> 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReceiptInfoSingleUnkownThing message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                     * @static
                     * @param {receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing} message ReceiptInfoSingleUnkownThing
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReceiptInfoSingleUnkownThing.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.one != null && message.hasOwnProperty("one")) {
                            object.one = message.one;
                            if (options.oneofs)
                                object._one = "one";
                        }
                        if (message.two != null && message.hasOwnProperty("two")) {
                            object.two = message.two;
                            if (options.oneofs)
                                object._two = "two";
                        }
                        return object;
                    };
    
                    /**
                     * Converts this ReceiptInfoSingleUnkownThing to JSON.
                     * @function toJSON
                     * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReceiptInfoSingleUnkownThing.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for ReceiptInfoSingleUnkownThing
                     * @function getTypeUrl
                     * @memberof receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ReceiptInfoSingleUnkownThing.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/receiptinfo.MessageInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing";
                    };
    
                    return ReceiptInfoSingleUnkownThing;
                })();
    
                return ReceiptInfoSingle;
            })();
    
            MessageInfo.Reactions = (function() {
    
                /**
                 * Properties of a Reactions.
                 * @memberof receiptinfo.MessageInfo
                 * @interface IReactions
                 * @property {Array.<receiptinfo.MessageInfo.Reactions.IReaction>|null} [reaction] A single reaction
                 */
    
                /**
                 * Constructs a new Reactions.
                 * @memberof receiptinfo.MessageInfo
                 * @classdesc Reactions to a message.
                 * @implements IReactions
                 * @constructor
                 * @param {receiptinfo.MessageInfo.IReactions=} [properties] Properties to set
                 */
                function Reactions(properties) {
                    this.reaction = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * A single reaction
                 * @member {Array.<receiptinfo.MessageInfo.Reactions.IReaction>} reaction
                 * @memberof receiptinfo.MessageInfo.Reactions
                 * @instance
                 */
                Reactions.prototype.reaction = $util.emptyArray;
    
                /**
                 * Creates a new Reactions instance using the specified properties.
                 * @function create
                 * @memberof receiptinfo.MessageInfo.Reactions
                 * @static
                 * @param {receiptinfo.MessageInfo.IReactions=} [properties] Properties to set
                 * @returns {receiptinfo.MessageInfo.Reactions} Reactions instance
                 */
                Reactions.create = function create(properties) {
                    return new Reactions(properties);
                };
    
                /**
                 * Encodes the specified Reactions message. Does not implicitly {@link receiptinfo.MessageInfo.Reactions.verify|verify} messages.
                 * @function encode
                 * @memberof receiptinfo.MessageInfo.Reactions
                 * @static
                 * @param {receiptinfo.MessageInfo.IReactions} message Reactions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Reactions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.reaction != null && message.reaction.length)
                        for (var i = 0; i < message.reaction.length; ++i)
                            $root.receiptinfo.MessageInfo.Reactions.Reaction.encode(message.reaction[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified Reactions message, length delimited. Does not implicitly {@link receiptinfo.MessageInfo.Reactions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof receiptinfo.MessageInfo.Reactions
                 * @static
                 * @param {receiptinfo.MessageInfo.IReactions} message Reactions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Reactions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Reactions message from the specified reader or buffer.
                 * @function decode
                 * @memberof receiptinfo.MessageInfo.Reactions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {receiptinfo.MessageInfo.Reactions} Reactions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Reactions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.receiptinfo.MessageInfo.Reactions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.reaction && message.reaction.length))
                                    message.reaction = [];
                                message.reaction.push($root.receiptinfo.MessageInfo.Reactions.Reaction.decode(reader, reader.uint32()));
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
                 * Decodes a Reactions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof receiptinfo.MessageInfo.Reactions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {receiptinfo.MessageInfo.Reactions} Reactions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Reactions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Reactions message.
                 * @function verify
                 * @memberof receiptinfo.MessageInfo.Reactions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Reactions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.reaction != null && message.hasOwnProperty("reaction")) {
                        if (!Array.isArray(message.reaction))
                            return "reaction: array expected";
                        for (var i = 0; i < message.reaction.length; ++i) {
                            var error = $root.receiptinfo.MessageInfo.Reactions.Reaction.verify(message.reaction[i]);
                            if (error)
                                return "reaction." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a Reactions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof receiptinfo.MessageInfo.Reactions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {receiptinfo.MessageInfo.Reactions} Reactions
                 */
                Reactions.fromObject = function fromObject(object) {
                    if (object instanceof $root.receiptinfo.MessageInfo.Reactions)
                        return object;
                    var message = new $root.receiptinfo.MessageInfo.Reactions();
                    if (object.reaction) {
                        if (!Array.isArray(object.reaction))
                            throw TypeError(".receiptinfo.MessageInfo.Reactions.reaction: array expected");
                        message.reaction = [];
                        for (var i = 0; i < object.reaction.length; ++i) {
                            if (typeof object.reaction[i] !== "object")
                                throw TypeError(".receiptinfo.MessageInfo.Reactions.reaction: object expected");
                            message.reaction[i] = $root.receiptinfo.MessageInfo.Reactions.Reaction.fromObject(object.reaction[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a Reactions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof receiptinfo.MessageInfo.Reactions
                 * @static
                 * @param {receiptinfo.MessageInfo.Reactions} message Reactions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Reactions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.reaction = [];
                    if (message.reaction && message.reaction.length) {
                        object.reaction = [];
                        for (var j = 0; j < message.reaction.length; ++j)
                            object.reaction[j] = $root.receiptinfo.MessageInfo.Reactions.Reaction.toObject(message.reaction[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this Reactions to JSON.
                 * @function toJSON
                 * @memberof receiptinfo.MessageInfo.Reactions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Reactions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for Reactions
                 * @function getTypeUrl
                 * @memberof receiptinfo.MessageInfo.Reactions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Reactions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/receiptinfo.MessageInfo.Reactions";
                };
    
                Reactions.Reaction = (function() {
    
                    /**
                     * Properties of a Reaction.
                     * @memberof receiptinfo.MessageInfo.Reactions
                     * @interface IReaction
                     * @property {string|null} [unknownHex] Unknown. Appears to be a string containing characters 0-9,A-F
                     * @property {string|null} [whatsAppJID] WhatsAppJID of person reacting to the message
                     * @property {string|null} [emoji] The reaction emoji
                     * @property {number|null} [reactionTimestampMilliseconds] Timestamp when this reaction was sent.
                     * UNIX epoch in milliseconds
                     * @property {number|null} [unkonwnThingTwo] Unknown
                     */
    
                    /**
                     * Constructs a new Reaction.
                     * @memberof receiptinfo.MessageInfo.Reactions
                     * @classdesc A reaction to a message.
                     * @implements IReaction
                     * @constructor
                     * @param {receiptinfo.MessageInfo.Reactions.IReaction=} [properties] Properties to set
                     */
                    function Reaction(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Unknown. Appears to be a string containing characters 0-9,A-F
                     * @member {string} unknownHex
                     * @memberof receiptinfo.MessageInfo.Reactions.Reaction
                     * @instance
                     */
                    Reaction.prototype.unknownHex = "";
    
                    /**
                     * WhatsAppJID of person reacting to the message
                     * @member {string|null|undefined} whatsAppJID
                     * @memberof receiptinfo.MessageInfo.Reactions.Reaction
                     * @instance
                     */
                    Reaction.prototype.whatsAppJID = null;
    
                    /**
                     * The reaction emoji
                     * @member {string} emoji
                     * @memberof receiptinfo.MessageInfo.Reactions.Reaction
                     * @instance
                     */
                    Reaction.prototype.emoji = "";
    
                    /**
                     * Timestamp when this reaction was sent.
                     * UNIX epoch in milliseconds
                     * @member {number} reactionTimestampMilliseconds
                     * @memberof receiptinfo.MessageInfo.Reactions.Reaction
                     * @instance
                     */
                    Reaction.prototype.reactionTimestampMilliseconds = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                    /**
                     * Unknown
                     * @member {number} unkonwnThingTwo
                     * @memberof receiptinfo.MessageInfo.Reactions.Reaction
                     * @instance
                     */
                    Reaction.prototype.unkonwnThingTwo = 0;
    
                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;
    
                    /**
                     * Reaction _whatsAppJID.
                     * @member {"whatsAppJID"|undefined} _whatsAppJID
                     * @memberof receiptinfo.MessageInfo.Reactions.Reaction
                     * @instance
                     */
                    Object.defineProperty(Reaction.prototype, "_whatsAppJID", {
                        get: $util.oneOfGetter($oneOfFields = ["whatsAppJID"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * Creates a new Reaction instance using the specified properties.
                     * @function create
                     * @memberof receiptinfo.MessageInfo.Reactions.Reaction
                     * @static
                     * @param {receiptinfo.MessageInfo.Reactions.IReaction=} [properties] Properties to set
                     * @returns {receiptinfo.MessageInfo.Reactions.Reaction} Reaction instance
                     */
                    Reaction.create = function create(properties) {
                        return new Reaction(properties);
                    };
    
                    /**
                     * Encodes the specified Reaction message. Does not implicitly {@link receiptinfo.MessageInfo.Reactions.Reaction.verify|verify} messages.
                     * @function encode
                     * @memberof receiptinfo.MessageInfo.Reactions.Reaction
                     * @static
                     * @param {receiptinfo.MessageInfo.Reactions.IReaction} message Reaction message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Reaction.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.unknownHex != null && Object.hasOwnProperty.call(message, "unknownHex"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.unknownHex);
                        if (message.whatsAppJID != null && Object.hasOwnProperty.call(message, "whatsAppJID"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.whatsAppJID);
                        if (message.emoji != null && Object.hasOwnProperty.call(message, "emoji"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.emoji);
                        if (message.reactionTimestampMilliseconds != null && Object.hasOwnProperty.call(message, "reactionTimestampMilliseconds"))
                            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.reactionTimestampMilliseconds);
                        if (message.unkonwnThingTwo != null && Object.hasOwnProperty.call(message, "unkonwnThingTwo"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.unkonwnThingTwo);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Reaction message, length delimited. Does not implicitly {@link receiptinfo.MessageInfo.Reactions.Reaction.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof receiptinfo.MessageInfo.Reactions.Reaction
                     * @static
                     * @param {receiptinfo.MessageInfo.Reactions.IReaction} message Reaction message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Reaction.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Reaction message from the specified reader or buffer.
                     * @function decode
                     * @memberof receiptinfo.MessageInfo.Reactions.Reaction
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {receiptinfo.MessageInfo.Reactions.Reaction} Reaction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Reaction.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.receiptinfo.MessageInfo.Reactions.Reaction();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.unknownHex = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.whatsAppJID = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.emoji = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.reactionTimestampMilliseconds = reader.uint64();
                                    break;
                                }
                            case 5: {
                                    message.unkonwnThingTwo = reader.uint32();
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
                     * Decodes a Reaction message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof receiptinfo.MessageInfo.Reactions.Reaction
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {receiptinfo.MessageInfo.Reactions.Reaction} Reaction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Reaction.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Reaction message.
                     * @function verify
                     * @memberof receiptinfo.MessageInfo.Reactions.Reaction
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Reaction.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.unknownHex != null && message.hasOwnProperty("unknownHex"))
                            if (!$util.isString(message.unknownHex))
                                return "unknownHex: string expected";
                        if (message.whatsAppJID != null && message.hasOwnProperty("whatsAppJID")) {
                            properties._whatsAppJID = 1;
                            if (!$util.isString(message.whatsAppJID))
                                return "whatsAppJID: string expected";
                        }
                        if (message.emoji != null && message.hasOwnProperty("emoji"))
                            if (!$util.isString(message.emoji))
                                return "emoji: string expected";
                        if (message.reactionTimestampMilliseconds != null && message.hasOwnProperty("reactionTimestampMilliseconds"))
                            if (!$util.isInteger(message.reactionTimestampMilliseconds) && !(message.reactionTimestampMilliseconds && $util.isInteger(message.reactionTimestampMilliseconds.low) && $util.isInteger(message.reactionTimestampMilliseconds.high)))
                                return "reactionTimestampMilliseconds: integer|Long expected";
                        if (message.unkonwnThingTwo != null && message.hasOwnProperty("unkonwnThingTwo"))
                            if (!$util.isInteger(message.unkonwnThingTwo))
                                return "unkonwnThingTwo: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a Reaction message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof receiptinfo.MessageInfo.Reactions.Reaction
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {receiptinfo.MessageInfo.Reactions.Reaction} Reaction
                     */
                    Reaction.fromObject = function fromObject(object) {
                        if (object instanceof $root.receiptinfo.MessageInfo.Reactions.Reaction)
                            return object;
                        var message = new $root.receiptinfo.MessageInfo.Reactions.Reaction();
                        if (object.unknownHex != null)
                            message.unknownHex = String(object.unknownHex);
                        if (object.whatsAppJID != null)
                            message.whatsAppJID = String(object.whatsAppJID);
                        if (object.emoji != null)
                            message.emoji = String(object.emoji);
                        if (object.reactionTimestampMilliseconds != null)
                            if ($util.Long)
                                (message.reactionTimestampMilliseconds = $util.Long.fromValue(object.reactionTimestampMilliseconds)).unsigned = true;
                            else if (typeof object.reactionTimestampMilliseconds === "string")
                                message.reactionTimestampMilliseconds = parseInt(object.reactionTimestampMilliseconds, 10);
                            else if (typeof object.reactionTimestampMilliseconds === "number")
                                message.reactionTimestampMilliseconds = object.reactionTimestampMilliseconds;
                            else if (typeof object.reactionTimestampMilliseconds === "object")
                                message.reactionTimestampMilliseconds = new $util.LongBits(object.reactionTimestampMilliseconds.low >>> 0, object.reactionTimestampMilliseconds.high >>> 0).toNumber(true);
                        if (object.unkonwnThingTwo != null)
                            message.unkonwnThingTwo = object.unkonwnThingTwo >>> 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Reaction message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof receiptinfo.MessageInfo.Reactions.Reaction
                     * @static
                     * @param {receiptinfo.MessageInfo.Reactions.Reaction} message Reaction
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Reaction.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.unknownHex = "";
                            object.emoji = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.reactionTimestampMilliseconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.reactionTimestampMilliseconds = options.longs === String ? "0" : 0;
                            object.unkonwnThingTwo = 0;
                        }
                        if (message.unknownHex != null && message.hasOwnProperty("unknownHex"))
                            object.unknownHex = message.unknownHex;
                        if (message.whatsAppJID != null && message.hasOwnProperty("whatsAppJID")) {
                            object.whatsAppJID = message.whatsAppJID;
                            if (options.oneofs)
                                object._whatsAppJID = "whatsAppJID";
                        }
                        if (message.emoji != null && message.hasOwnProperty("emoji"))
                            object.emoji = message.emoji;
                        if (message.reactionTimestampMilliseconds != null && message.hasOwnProperty("reactionTimestampMilliseconds"))
                            if (typeof message.reactionTimestampMilliseconds === "number")
                                object.reactionTimestampMilliseconds = options.longs === String ? String(message.reactionTimestampMilliseconds) : message.reactionTimestampMilliseconds;
                            else
                                object.reactionTimestampMilliseconds = options.longs === String ? $util.Long.prototype.toString.call(message.reactionTimestampMilliseconds) : options.longs === Number ? new $util.LongBits(message.reactionTimestampMilliseconds.low >>> 0, message.reactionTimestampMilliseconds.high >>> 0).toNumber(true) : message.reactionTimestampMilliseconds;
                        if (message.unkonwnThingTwo != null && message.hasOwnProperty("unkonwnThingTwo"))
                            object.unkonwnThingTwo = message.unkonwnThingTwo;
                        return object;
                    };
    
                    /**
                     * Converts this Reaction to JSON.
                     * @function toJSON
                     * @memberof receiptinfo.MessageInfo.Reactions.Reaction
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Reaction.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for Reaction
                     * @function getTypeUrl
                     * @memberof receiptinfo.MessageInfo.Reactions.Reaction
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Reaction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/receiptinfo.MessageInfo.Reactions.Reaction";
                    };
    
                    return Reaction;
                })();
    
                return Reactions;
            })();
    
            MessageInfo.Poll = (function() {
    
                /**
                 * Properties of a Poll.
                 * @memberof receiptinfo.MessageInfo
                 * @interface IPoll
                 * @property {string|null} [title] Title of the poll.
                 * @property {Array.<receiptinfo.MessageInfo.Poll.IPollOption>|null} [option] Options of the poll
                 * @property {number|null} [unknownThing_1] Unknown
                 * @property {Array.<receiptinfo.MessageInfo.Poll.IPollResponse>|null} [theirResponse] Response from people that are not the phone owner
                 * @property {receiptinfo.MessageInfo.Poll.IPollResponse|null} [ownResponse] Own response
                 * @property {number|null} [unknownThing_2] Unknown
                 * @property {receiptinfo.MessageInfo.Poll.IUnkownMessage|null} [unkownThing_3] Unknown
                 */
    
                /**
                 * Constructs a new Poll.
                 * @memberof receiptinfo.MessageInfo
                 * @classdesc Contains information on the poll (if this message is a poll).
                 * @implements IPoll
                 * @constructor
                 * @param {receiptinfo.MessageInfo.IPoll=} [properties] Properties to set
                 */
                function Poll(properties) {
                    this.option = [];
                    this.theirResponse = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Title of the poll.
                 * @member {string} title
                 * @memberof receiptinfo.MessageInfo.Poll
                 * @instance
                 */
                Poll.prototype.title = "";
    
                /**
                 * Options of the poll
                 * @member {Array.<receiptinfo.MessageInfo.Poll.IPollOption>} option
                 * @memberof receiptinfo.MessageInfo.Poll
                 * @instance
                 */
                Poll.prototype.option = $util.emptyArray;
    
                /**
                 * Unknown
                 * @member {number|null|undefined} unknownThing_1
                 * @memberof receiptinfo.MessageInfo.Poll
                 * @instance
                 */
                Poll.prototype.unknownThing_1 = null;
    
                /**
                 * Response from people that are not the phone owner
                 * @member {Array.<receiptinfo.MessageInfo.Poll.IPollResponse>} theirResponse
                 * @memberof receiptinfo.MessageInfo.Poll
                 * @instance
                 */
                Poll.prototype.theirResponse = $util.emptyArray;
    
                /**
                 * Own response
                 * @member {receiptinfo.MessageInfo.Poll.IPollResponse|null|undefined} ownResponse
                 * @memberof receiptinfo.MessageInfo.Poll
                 * @instance
                 */
                Poll.prototype.ownResponse = null;
    
                /**
                 * Unknown
                 * @member {number|null|undefined} unknownThing_2
                 * @memberof receiptinfo.MessageInfo.Poll
                 * @instance
                 */
                Poll.prototype.unknownThing_2 = null;
    
                /**
                 * Unknown
                 * @member {receiptinfo.MessageInfo.Poll.IUnkownMessage|null|undefined} unkownThing_3
                 * @memberof receiptinfo.MessageInfo.Poll
                 * @instance
                 */
                Poll.prototype.unkownThing_3 = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * Poll _unknownThing_1.
                 * @member {"unknownThing_1"|undefined} _unknownThing_1
                 * @memberof receiptinfo.MessageInfo.Poll
                 * @instance
                 */
                Object.defineProperty(Poll.prototype, "_unknownThing_1", {
                    get: $util.oneOfGetter($oneOfFields = ["unknownThing_1"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Poll _ownResponse.
                 * @member {"ownResponse"|undefined} _ownResponse
                 * @memberof receiptinfo.MessageInfo.Poll
                 * @instance
                 */
                Object.defineProperty(Poll.prototype, "_ownResponse", {
                    get: $util.oneOfGetter($oneOfFields = ["ownResponse"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Poll _unknownThing_2.
                 * @member {"unknownThing_2"|undefined} _unknownThing_2
                 * @memberof receiptinfo.MessageInfo.Poll
                 * @instance
                 */
                Object.defineProperty(Poll.prototype, "_unknownThing_2", {
                    get: $util.oneOfGetter($oneOfFields = ["unknownThing_2"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Poll _unkownThing_3.
                 * @member {"unkownThing_3"|undefined} _unkownThing_3
                 * @memberof receiptinfo.MessageInfo.Poll
                 * @instance
                 */
                Object.defineProperty(Poll.prototype, "_unkownThing_3", {
                    get: $util.oneOfGetter($oneOfFields = ["unkownThing_3"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new Poll instance using the specified properties.
                 * @function create
                 * @memberof receiptinfo.MessageInfo.Poll
                 * @static
                 * @param {receiptinfo.MessageInfo.IPoll=} [properties] Properties to set
                 * @returns {receiptinfo.MessageInfo.Poll} Poll instance
                 */
                Poll.create = function create(properties) {
                    return new Poll(properties);
                };
    
                /**
                 * Encodes the specified Poll message. Does not implicitly {@link receiptinfo.MessageInfo.Poll.verify|verify} messages.
                 * @function encode
                 * @memberof receiptinfo.MessageInfo.Poll
                 * @static
                 * @param {receiptinfo.MessageInfo.IPoll} message Poll message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Poll.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
                    if (message.option != null && message.option.length)
                        for (var i = 0; i < message.option.length; ++i)
                            $root.receiptinfo.MessageInfo.Poll.PollOption.encode(message.option[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.unknownThing_1 != null && Object.hasOwnProperty.call(message, "unknownThing_1"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.unknownThing_1);
                    if (message.theirResponse != null && message.theirResponse.length)
                        for (var i = 0; i < message.theirResponse.length; ++i)
                            $root.receiptinfo.MessageInfo.Poll.PollResponse.encode(message.theirResponse[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.ownResponse != null && Object.hasOwnProperty.call(message, "ownResponse"))
                        $root.receiptinfo.MessageInfo.Poll.PollResponse.encode(message.ownResponse, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.unknownThing_2 != null && Object.hasOwnProperty.call(message, "unknownThing_2"))
                        writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.unknownThing_2);
                    if (message.unkownThing_3 != null && Object.hasOwnProperty.call(message, "unkownThing_3"))
                        $root.receiptinfo.MessageInfo.Poll.UnkownMessage.encode(message.unkownThing_3, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified Poll message, length delimited. Does not implicitly {@link receiptinfo.MessageInfo.Poll.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof receiptinfo.MessageInfo.Poll
                 * @static
                 * @param {receiptinfo.MessageInfo.IPoll} message Poll message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Poll.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Poll message from the specified reader or buffer.
                 * @function decode
                 * @memberof receiptinfo.MessageInfo.Poll
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {receiptinfo.MessageInfo.Poll} Poll
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Poll.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.receiptinfo.MessageInfo.Poll();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2: {
                                message.title = reader.string();
                                break;
                            }
                        case 3: {
                                if (!(message.option && message.option.length))
                                    message.option = [];
                                message.option.push($root.receiptinfo.MessageInfo.Poll.PollOption.decode(reader, reader.uint32()));
                                break;
                            }
                        case 4: {
                                message.unknownThing_1 = reader.uint64();
                                break;
                            }
                        case 5: {
                                if (!(message.theirResponse && message.theirResponse.length))
                                    message.theirResponse = [];
                                message.theirResponse.push($root.receiptinfo.MessageInfo.Poll.PollResponse.decode(reader, reader.uint32()));
                                break;
                            }
                        case 6: {
                                message.ownResponse = $root.receiptinfo.MessageInfo.Poll.PollResponse.decode(reader, reader.uint32());
                                break;
                            }
                        case 7: {
                                message.unknownThing_2 = reader.uint64();
                                break;
                            }
                        case 8: {
                                message.unkownThing_3 = $root.receiptinfo.MessageInfo.Poll.UnkownMessage.decode(reader, reader.uint32());
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
                 * Decodes a Poll message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof receiptinfo.MessageInfo.Poll
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {receiptinfo.MessageInfo.Poll} Poll
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Poll.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Poll message.
                 * @function verify
                 * @memberof receiptinfo.MessageInfo.Poll
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Poll.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.title != null && message.hasOwnProperty("title"))
                        if (!$util.isString(message.title))
                            return "title: string expected";
                    if (message.option != null && message.hasOwnProperty("option")) {
                        if (!Array.isArray(message.option))
                            return "option: array expected";
                        for (var i = 0; i < message.option.length; ++i) {
                            var error = $root.receiptinfo.MessageInfo.Poll.PollOption.verify(message.option[i]);
                            if (error)
                                return "option." + error;
                        }
                    }
                    if (message.unknownThing_1 != null && message.hasOwnProperty("unknownThing_1")) {
                        properties._unknownThing_1 = 1;
                        if (!$util.isInteger(message.unknownThing_1) && !(message.unknownThing_1 && $util.isInteger(message.unknownThing_1.low) && $util.isInteger(message.unknownThing_1.high)))
                            return "unknownThing_1: integer|Long expected";
                    }
                    if (message.theirResponse != null && message.hasOwnProperty("theirResponse")) {
                        if (!Array.isArray(message.theirResponse))
                            return "theirResponse: array expected";
                        for (var i = 0; i < message.theirResponse.length; ++i) {
                            var error = $root.receiptinfo.MessageInfo.Poll.PollResponse.verify(message.theirResponse[i]);
                            if (error)
                                return "theirResponse." + error;
                        }
                    }
                    if (message.ownResponse != null && message.hasOwnProperty("ownResponse")) {
                        properties._ownResponse = 1;
                        {
                            var error = $root.receiptinfo.MessageInfo.Poll.PollResponse.verify(message.ownResponse);
                            if (error)
                                return "ownResponse." + error;
                        }
                    }
                    if (message.unknownThing_2 != null && message.hasOwnProperty("unknownThing_2")) {
                        properties._unknownThing_2 = 1;
                        if (!$util.isInteger(message.unknownThing_2) && !(message.unknownThing_2 && $util.isInteger(message.unknownThing_2.low) && $util.isInteger(message.unknownThing_2.high)))
                            return "unknownThing_2: integer|Long expected";
                    }
                    if (message.unkownThing_3 != null && message.hasOwnProperty("unkownThing_3")) {
                        properties._unkownThing_3 = 1;
                        {
                            var error = $root.receiptinfo.MessageInfo.Poll.UnkownMessage.verify(message.unkownThing_3);
                            if (error)
                                return "unkownThing_3." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a Poll message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof receiptinfo.MessageInfo.Poll
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {receiptinfo.MessageInfo.Poll} Poll
                 */
                Poll.fromObject = function fromObject(object) {
                    if (object instanceof $root.receiptinfo.MessageInfo.Poll)
                        return object;
                    var message = new $root.receiptinfo.MessageInfo.Poll();
                    if (object.title != null)
                        message.title = String(object.title);
                    if (object.option) {
                        if (!Array.isArray(object.option))
                            throw TypeError(".receiptinfo.MessageInfo.Poll.option: array expected");
                        message.option = [];
                        for (var i = 0; i < object.option.length; ++i) {
                            if (typeof object.option[i] !== "object")
                                throw TypeError(".receiptinfo.MessageInfo.Poll.option: object expected");
                            message.option[i] = $root.receiptinfo.MessageInfo.Poll.PollOption.fromObject(object.option[i]);
                        }
                    }
                    if (object.unknownThing_1 != null)
                        if ($util.Long)
                            (message.unknownThing_1 = $util.Long.fromValue(object.unknownThing_1)).unsigned = true;
                        else if (typeof object.unknownThing_1 === "string")
                            message.unknownThing_1 = parseInt(object.unknownThing_1, 10);
                        else if (typeof object.unknownThing_1 === "number")
                            message.unknownThing_1 = object.unknownThing_1;
                        else if (typeof object.unknownThing_1 === "object")
                            message.unknownThing_1 = new $util.LongBits(object.unknownThing_1.low >>> 0, object.unknownThing_1.high >>> 0).toNumber(true);
                    if (object.theirResponse) {
                        if (!Array.isArray(object.theirResponse))
                            throw TypeError(".receiptinfo.MessageInfo.Poll.theirResponse: array expected");
                        message.theirResponse = [];
                        for (var i = 0; i < object.theirResponse.length; ++i) {
                            if (typeof object.theirResponse[i] !== "object")
                                throw TypeError(".receiptinfo.MessageInfo.Poll.theirResponse: object expected");
                            message.theirResponse[i] = $root.receiptinfo.MessageInfo.Poll.PollResponse.fromObject(object.theirResponse[i]);
                        }
                    }
                    if (object.ownResponse != null) {
                        if (typeof object.ownResponse !== "object")
                            throw TypeError(".receiptinfo.MessageInfo.Poll.ownResponse: object expected");
                        message.ownResponse = $root.receiptinfo.MessageInfo.Poll.PollResponse.fromObject(object.ownResponse);
                    }
                    if (object.unknownThing_2 != null)
                        if ($util.Long)
                            (message.unknownThing_2 = $util.Long.fromValue(object.unknownThing_2)).unsigned = true;
                        else if (typeof object.unknownThing_2 === "string")
                            message.unknownThing_2 = parseInt(object.unknownThing_2, 10);
                        else if (typeof object.unknownThing_2 === "number")
                            message.unknownThing_2 = object.unknownThing_2;
                        else if (typeof object.unknownThing_2 === "object")
                            message.unknownThing_2 = new $util.LongBits(object.unknownThing_2.low >>> 0, object.unknownThing_2.high >>> 0).toNumber(true);
                    if (object.unkownThing_3 != null) {
                        if (typeof object.unkownThing_3 !== "object")
                            throw TypeError(".receiptinfo.MessageInfo.Poll.unkownThing_3: object expected");
                        message.unkownThing_3 = $root.receiptinfo.MessageInfo.Poll.UnkownMessage.fromObject(object.unkownThing_3);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a Poll message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof receiptinfo.MessageInfo.Poll
                 * @static
                 * @param {receiptinfo.MessageInfo.Poll} message Poll
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Poll.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.option = [];
                        object.theirResponse = [];
                    }
                    if (options.defaults)
                        object.title = "";
                    if (message.title != null && message.hasOwnProperty("title"))
                        object.title = message.title;
                    if (message.option && message.option.length) {
                        object.option = [];
                        for (var j = 0; j < message.option.length; ++j)
                            object.option[j] = $root.receiptinfo.MessageInfo.Poll.PollOption.toObject(message.option[j], options);
                    }
                    if (message.unknownThing_1 != null && message.hasOwnProperty("unknownThing_1")) {
                        if (typeof message.unknownThing_1 === "number")
                            object.unknownThing_1 = options.longs === String ? String(message.unknownThing_1) : message.unknownThing_1;
                        else
                            object.unknownThing_1 = options.longs === String ? $util.Long.prototype.toString.call(message.unknownThing_1) : options.longs === Number ? new $util.LongBits(message.unknownThing_1.low >>> 0, message.unknownThing_1.high >>> 0).toNumber(true) : message.unknownThing_1;
                        if (options.oneofs)
                            object._unknownThing_1 = "unknownThing_1";
                    }
                    if (message.theirResponse && message.theirResponse.length) {
                        object.theirResponse = [];
                        for (var j = 0; j < message.theirResponse.length; ++j)
                            object.theirResponse[j] = $root.receiptinfo.MessageInfo.Poll.PollResponse.toObject(message.theirResponse[j], options);
                    }
                    if (message.ownResponse != null && message.hasOwnProperty("ownResponse")) {
                        object.ownResponse = $root.receiptinfo.MessageInfo.Poll.PollResponse.toObject(message.ownResponse, options);
                        if (options.oneofs)
                            object._ownResponse = "ownResponse";
                    }
                    if (message.unknownThing_2 != null && message.hasOwnProperty("unknownThing_2")) {
                        if (typeof message.unknownThing_2 === "number")
                            object.unknownThing_2 = options.longs === String ? String(message.unknownThing_2) : message.unknownThing_2;
                        else
                            object.unknownThing_2 = options.longs === String ? $util.Long.prototype.toString.call(message.unknownThing_2) : options.longs === Number ? new $util.LongBits(message.unknownThing_2.low >>> 0, message.unknownThing_2.high >>> 0).toNumber(true) : message.unknownThing_2;
                        if (options.oneofs)
                            object._unknownThing_2 = "unknownThing_2";
                    }
                    if (message.unkownThing_3 != null && message.hasOwnProperty("unkownThing_3")) {
                        object.unkownThing_3 = $root.receiptinfo.MessageInfo.Poll.UnkownMessage.toObject(message.unkownThing_3, options);
                        if (options.oneofs)
                            object._unkownThing_3 = "unkownThing_3";
                    }
                    return object;
                };
    
                /**
                 * Converts this Poll to JSON.
                 * @function toJSON
                 * @memberof receiptinfo.MessageInfo.Poll
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Poll.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for Poll
                 * @function getTypeUrl
                 * @memberof receiptinfo.MessageInfo.Poll
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Poll.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/receiptinfo.MessageInfo.Poll";
                };
    
                Poll.PollOption = (function() {
    
                    /**
                     * Properties of a PollOption.
                     * @memberof receiptinfo.MessageInfo.Poll
                     * @interface IPollOption
                     * @property {string|null} [title] Option title
                     */
    
                    /**
                     * Constructs a new PollOption.
                     * @memberof receiptinfo.MessageInfo.Poll
                     * @classdesc An option to the poll.
                     * @implements IPollOption
                     * @constructor
                     * @param {receiptinfo.MessageInfo.Poll.IPollOption=} [properties] Properties to set
                     */
                    function PollOption(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Option title
                     * @member {string} title
                     * @memberof receiptinfo.MessageInfo.Poll.PollOption
                     * @instance
                     */
                    PollOption.prototype.title = "";
    
                    /**
                     * Creates a new PollOption instance using the specified properties.
                     * @function create
                     * @memberof receiptinfo.MessageInfo.Poll.PollOption
                     * @static
                     * @param {receiptinfo.MessageInfo.Poll.IPollOption=} [properties] Properties to set
                     * @returns {receiptinfo.MessageInfo.Poll.PollOption} PollOption instance
                     */
                    PollOption.create = function create(properties) {
                        return new PollOption(properties);
                    };
    
                    /**
                     * Encodes the specified PollOption message. Does not implicitly {@link receiptinfo.MessageInfo.Poll.PollOption.verify|verify} messages.
                     * @function encode
                     * @memberof receiptinfo.MessageInfo.Poll.PollOption
                     * @static
                     * @param {receiptinfo.MessageInfo.Poll.IPollOption} message PollOption message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PollOption.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified PollOption message, length delimited. Does not implicitly {@link receiptinfo.MessageInfo.Poll.PollOption.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof receiptinfo.MessageInfo.Poll.PollOption
                     * @static
                     * @param {receiptinfo.MessageInfo.Poll.IPollOption} message PollOption message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PollOption.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a PollOption message from the specified reader or buffer.
                     * @function decode
                     * @memberof receiptinfo.MessageInfo.Poll.PollOption
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {receiptinfo.MessageInfo.Poll.PollOption} PollOption
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PollOption.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.receiptinfo.MessageInfo.Poll.PollOption();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.title = reader.string();
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
                     * Decodes a PollOption message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof receiptinfo.MessageInfo.Poll.PollOption
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {receiptinfo.MessageInfo.Poll.PollOption} PollOption
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PollOption.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a PollOption message.
                     * @function verify
                     * @memberof receiptinfo.MessageInfo.Poll.PollOption
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PollOption.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.title != null && message.hasOwnProperty("title"))
                            if (!$util.isString(message.title))
                                return "title: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a PollOption message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof receiptinfo.MessageInfo.Poll.PollOption
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {receiptinfo.MessageInfo.Poll.PollOption} PollOption
                     */
                    PollOption.fromObject = function fromObject(object) {
                        if (object instanceof $root.receiptinfo.MessageInfo.Poll.PollOption)
                            return object;
                        var message = new $root.receiptinfo.MessageInfo.Poll.PollOption();
                        if (object.title != null)
                            message.title = String(object.title);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a PollOption message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof receiptinfo.MessageInfo.Poll.PollOption
                     * @static
                     * @param {receiptinfo.MessageInfo.Poll.PollOption} message PollOption
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PollOption.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.title = "";
                        if (message.title != null && message.hasOwnProperty("title"))
                            object.title = message.title;
                        return object;
                    };
    
                    /**
                     * Converts this PollOption to JSON.
                     * @function toJSON
                     * @memberof receiptinfo.MessageInfo.Poll.PollOption
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PollOption.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for PollOption
                     * @function getTypeUrl
                     * @memberof receiptinfo.MessageInfo.Poll.PollOption
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    PollOption.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/receiptinfo.MessageInfo.Poll.PollOption";
                    };
    
                    return PollOption;
                })();
    
                Poll.PollResponse = (function() {
    
                    /**
                     * Properties of a PollResponse.
                     * @memberof receiptinfo.MessageInfo.Poll
                     * @interface IPollResponse
                     * @property {Array.<number>|null} [votedOption] Voted options, indexed by 0
                     * @property {number|null} [timestampMilliseconds] Timestamp when this person responded to the poll.
                     * UNIX epoch in milliseconds.
                     * Only one timestamp is saved, even if there are multiple
                     * `voted_option`s. Timestamp is timestamp of last response.
                     * @property {string|null} [unkownHex] PollResponse unkownHex
                     * @property {string|null} [whatsAppJid] WhatsAppJID of the respondent.
                     * not set if own response.
                     * @property {number|null} [otherTimestamp] PollResponse otherTimestamp
                     */
    
                    /**
                     * Constructs a new PollResponse.
                     * @memberof receiptinfo.MessageInfo.Poll
                     * @classdesc The response to the poll from a single person.
                     * @implements IPollResponse
                     * @constructor
                     * @param {receiptinfo.MessageInfo.Poll.IPollResponse=} [properties] Properties to set
                     */
                    function PollResponse(properties) {
                        this.votedOption = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Voted options, indexed by 0
                     * @member {Array.<number>} votedOption
                     * @memberof receiptinfo.MessageInfo.Poll.PollResponse
                     * @instance
                     */
                    PollResponse.prototype.votedOption = $util.emptyArray;
    
                    /**
                     * Timestamp when this person responded to the poll.
                     * UNIX epoch in milliseconds.
                     * Only one timestamp is saved, even if there are multiple
                     * `voted_option`s. Timestamp is timestamp of last response.
                     * @member {number} timestampMilliseconds
                     * @memberof receiptinfo.MessageInfo.Poll.PollResponse
                     * @instance
                     */
                    PollResponse.prototype.timestampMilliseconds = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                    /**
                     * PollResponse unkownHex.
                     * @member {string} unkownHex
                     * @memberof receiptinfo.MessageInfo.Poll.PollResponse
                     * @instance
                     */
                    PollResponse.prototype.unkownHex = "";
    
                    /**
                     * WhatsAppJID of the respondent.
                     * not set if own response.
                     * @member {string|null|undefined} whatsAppJid
                     * @memberof receiptinfo.MessageInfo.Poll.PollResponse
                     * @instance
                     */
                    PollResponse.prototype.whatsAppJid = null;
    
                    /**
                     * PollResponse otherTimestamp.
                     * @member {number|null|undefined} otherTimestamp
                     * @memberof receiptinfo.MessageInfo.Poll.PollResponse
                     * @instance
                     */
                    PollResponse.prototype.otherTimestamp = null;
    
                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;
    
                    /**
                     * PollResponse _whatsAppJid.
                     * @member {"whatsAppJid"|undefined} _whatsAppJid
                     * @memberof receiptinfo.MessageInfo.Poll.PollResponse
                     * @instance
                     */
                    Object.defineProperty(PollResponse.prototype, "_whatsAppJid", {
                        get: $util.oneOfGetter($oneOfFields = ["whatsAppJid"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * PollResponse _otherTimestamp.
                     * @member {"otherTimestamp"|undefined} _otherTimestamp
                     * @memberof receiptinfo.MessageInfo.Poll.PollResponse
                     * @instance
                     */
                    Object.defineProperty(PollResponse.prototype, "_otherTimestamp", {
                        get: $util.oneOfGetter($oneOfFields = ["otherTimestamp"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * Creates a new PollResponse instance using the specified properties.
                     * @function create
                     * @memberof receiptinfo.MessageInfo.Poll.PollResponse
                     * @static
                     * @param {receiptinfo.MessageInfo.Poll.IPollResponse=} [properties] Properties to set
                     * @returns {receiptinfo.MessageInfo.Poll.PollResponse} PollResponse instance
                     */
                    PollResponse.create = function create(properties) {
                        return new PollResponse(properties);
                    };
    
                    /**
                     * Encodes the specified PollResponse message. Does not implicitly {@link receiptinfo.MessageInfo.Poll.PollResponse.verify|verify} messages.
                     * @function encode
                     * @memberof receiptinfo.MessageInfo.Poll.PollResponse
                     * @static
                     * @param {receiptinfo.MessageInfo.Poll.IPollResponse} message PollResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PollResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.votedOption != null && message.votedOption.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.votedOption.length; ++i)
                                writer.uint32(message.votedOption[i]);
                            writer.ldelim();
                        }
                        if (message.timestampMilliseconds != null && Object.hasOwnProperty.call(message, "timestampMilliseconds"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.timestampMilliseconds);
                        if (message.unkownHex != null && Object.hasOwnProperty.call(message, "unkownHex"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.unkownHex);
                        if (message.whatsAppJid != null && Object.hasOwnProperty.call(message, "whatsAppJid"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.whatsAppJid);
                        if (message.otherTimestamp != null && Object.hasOwnProperty.call(message, "otherTimestamp"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.otherTimestamp);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified PollResponse message, length delimited. Does not implicitly {@link receiptinfo.MessageInfo.Poll.PollResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof receiptinfo.MessageInfo.Poll.PollResponse
                     * @static
                     * @param {receiptinfo.MessageInfo.Poll.IPollResponse} message PollResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PollResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a PollResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof receiptinfo.MessageInfo.Poll.PollResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {receiptinfo.MessageInfo.Poll.PollResponse} PollResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PollResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.receiptinfo.MessageInfo.Poll.PollResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.votedOption && message.votedOption.length))
                                        message.votedOption = [];
                                    if ((tag & 7) === 2) {
                                        var end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.votedOption.push(reader.uint32());
                                    } else
                                        message.votedOption.push(reader.uint32());
                                    break;
                                }
                            case 2: {
                                    message.timestampMilliseconds = reader.uint64();
                                    break;
                                }
                            case 3: {
                                    message.unkownHex = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.whatsAppJid = reader.string();
                                    break;
                                }
                            case 5: {
                                    message.otherTimestamp = reader.uint64();
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
                     * Decodes a PollResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof receiptinfo.MessageInfo.Poll.PollResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {receiptinfo.MessageInfo.Poll.PollResponse} PollResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PollResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a PollResponse message.
                     * @function verify
                     * @memberof receiptinfo.MessageInfo.Poll.PollResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PollResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.votedOption != null && message.hasOwnProperty("votedOption")) {
                            if (!Array.isArray(message.votedOption))
                                return "votedOption: array expected";
                            for (var i = 0; i < message.votedOption.length; ++i)
                                if (!$util.isInteger(message.votedOption[i]))
                                    return "votedOption: integer[] expected";
                        }
                        if (message.timestampMilliseconds != null && message.hasOwnProperty("timestampMilliseconds"))
                            if (!$util.isInteger(message.timestampMilliseconds) && !(message.timestampMilliseconds && $util.isInteger(message.timestampMilliseconds.low) && $util.isInteger(message.timestampMilliseconds.high)))
                                return "timestampMilliseconds: integer|Long expected";
                        if (message.unkownHex != null && message.hasOwnProperty("unkownHex"))
                            if (!$util.isString(message.unkownHex))
                                return "unkownHex: string expected";
                        if (message.whatsAppJid != null && message.hasOwnProperty("whatsAppJid")) {
                            properties._whatsAppJid = 1;
                            if (!$util.isString(message.whatsAppJid))
                                return "whatsAppJid: string expected";
                        }
                        if (message.otherTimestamp != null && message.hasOwnProperty("otherTimestamp")) {
                            properties._otherTimestamp = 1;
                            if (!$util.isInteger(message.otherTimestamp) && !(message.otherTimestamp && $util.isInteger(message.otherTimestamp.low) && $util.isInteger(message.otherTimestamp.high)))
                                return "otherTimestamp: integer|Long expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a PollResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof receiptinfo.MessageInfo.Poll.PollResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {receiptinfo.MessageInfo.Poll.PollResponse} PollResponse
                     */
                    PollResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.receiptinfo.MessageInfo.Poll.PollResponse)
                            return object;
                        var message = new $root.receiptinfo.MessageInfo.Poll.PollResponse();
                        if (object.votedOption) {
                            if (!Array.isArray(object.votedOption))
                                throw TypeError(".receiptinfo.MessageInfo.Poll.PollResponse.votedOption: array expected");
                            message.votedOption = [];
                            for (var i = 0; i < object.votedOption.length; ++i)
                                message.votedOption[i] = object.votedOption[i] >>> 0;
                        }
                        if (object.timestampMilliseconds != null)
                            if ($util.Long)
                                (message.timestampMilliseconds = $util.Long.fromValue(object.timestampMilliseconds)).unsigned = true;
                            else if (typeof object.timestampMilliseconds === "string")
                                message.timestampMilliseconds = parseInt(object.timestampMilliseconds, 10);
                            else if (typeof object.timestampMilliseconds === "number")
                                message.timestampMilliseconds = object.timestampMilliseconds;
                            else if (typeof object.timestampMilliseconds === "object")
                                message.timestampMilliseconds = new $util.LongBits(object.timestampMilliseconds.low >>> 0, object.timestampMilliseconds.high >>> 0).toNumber(true);
                        if (object.unkownHex != null)
                            message.unkownHex = String(object.unkownHex);
                        if (object.whatsAppJid != null)
                            message.whatsAppJid = String(object.whatsAppJid);
                        if (object.otherTimestamp != null)
                            if ($util.Long)
                                (message.otherTimestamp = $util.Long.fromValue(object.otherTimestamp)).unsigned = true;
                            else if (typeof object.otherTimestamp === "string")
                                message.otherTimestamp = parseInt(object.otherTimestamp, 10);
                            else if (typeof object.otherTimestamp === "number")
                                message.otherTimestamp = object.otherTimestamp;
                            else if (typeof object.otherTimestamp === "object")
                                message.otherTimestamp = new $util.LongBits(object.otherTimestamp.low >>> 0, object.otherTimestamp.high >>> 0).toNumber(true);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a PollResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof receiptinfo.MessageInfo.Poll.PollResponse
                     * @static
                     * @param {receiptinfo.MessageInfo.Poll.PollResponse} message PollResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PollResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.votedOption = [];
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.timestampMilliseconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.timestampMilliseconds = options.longs === String ? "0" : 0;
                            object.unkownHex = "";
                        }
                        if (message.votedOption && message.votedOption.length) {
                            object.votedOption = [];
                            for (var j = 0; j < message.votedOption.length; ++j)
                                object.votedOption[j] = message.votedOption[j];
                        }
                        if (message.timestampMilliseconds != null && message.hasOwnProperty("timestampMilliseconds"))
                            if (typeof message.timestampMilliseconds === "number")
                                object.timestampMilliseconds = options.longs === String ? String(message.timestampMilliseconds) : message.timestampMilliseconds;
                            else
                                object.timestampMilliseconds = options.longs === String ? $util.Long.prototype.toString.call(message.timestampMilliseconds) : options.longs === Number ? new $util.LongBits(message.timestampMilliseconds.low >>> 0, message.timestampMilliseconds.high >>> 0).toNumber(true) : message.timestampMilliseconds;
                        if (message.unkownHex != null && message.hasOwnProperty("unkownHex"))
                            object.unkownHex = message.unkownHex;
                        if (message.whatsAppJid != null && message.hasOwnProperty("whatsAppJid")) {
                            object.whatsAppJid = message.whatsAppJid;
                            if (options.oneofs)
                                object._whatsAppJid = "whatsAppJid";
                        }
                        if (message.otherTimestamp != null && message.hasOwnProperty("otherTimestamp")) {
                            if (typeof message.otherTimestamp === "number")
                                object.otherTimestamp = options.longs === String ? String(message.otherTimestamp) : message.otherTimestamp;
                            else
                                object.otherTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.otherTimestamp) : options.longs === Number ? new $util.LongBits(message.otherTimestamp.low >>> 0, message.otherTimestamp.high >>> 0).toNumber(true) : message.otherTimestamp;
                            if (options.oneofs)
                                object._otherTimestamp = "otherTimestamp";
                        }
                        return object;
                    };
    
                    /**
                     * Converts this PollResponse to JSON.
                     * @function toJSON
                     * @memberof receiptinfo.MessageInfo.Poll.PollResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PollResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for PollResponse
                     * @function getTypeUrl
                     * @memberof receiptinfo.MessageInfo.Poll.PollResponse
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    PollResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/receiptinfo.MessageInfo.Poll.PollResponse";
                    };
    
                    return PollResponse;
                })();
    
                Poll.UnkownMessage = (function() {
    
                    /**
                     * Properties of an UnkownMessage.
                     * @memberof receiptinfo.MessageInfo.Poll
                     * @interface IUnkownMessage
                     * @property {number|null} [unknownField] UnkownMessage unknownField
                     */
    
                    /**
                     * Constructs a new UnkownMessage.
                     * @memberof receiptinfo.MessageInfo.Poll
                     * @classdesc Unknown.
                     * @implements IUnkownMessage
                     * @constructor
                     * @param {receiptinfo.MessageInfo.Poll.IUnkownMessage=} [properties] Properties to set
                     */
                    function UnkownMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * UnkownMessage unknownField.
                     * @member {number} unknownField
                     * @memberof receiptinfo.MessageInfo.Poll.UnkownMessage
                     * @instance
                     */
                    UnkownMessage.prototype.unknownField = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                    /**
                     * Creates a new UnkownMessage instance using the specified properties.
                     * @function create
                     * @memberof receiptinfo.MessageInfo.Poll.UnkownMessage
                     * @static
                     * @param {receiptinfo.MessageInfo.Poll.IUnkownMessage=} [properties] Properties to set
                     * @returns {receiptinfo.MessageInfo.Poll.UnkownMessage} UnkownMessage instance
                     */
                    UnkownMessage.create = function create(properties) {
                        return new UnkownMessage(properties);
                    };
    
                    /**
                     * Encodes the specified UnkownMessage message. Does not implicitly {@link receiptinfo.MessageInfo.Poll.UnkownMessage.verify|verify} messages.
                     * @function encode
                     * @memberof receiptinfo.MessageInfo.Poll.UnkownMessage
                     * @static
                     * @param {receiptinfo.MessageInfo.Poll.IUnkownMessage} message UnkownMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UnkownMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.unknownField != null && Object.hasOwnProperty.call(message, "unknownField"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.unknownField);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UnkownMessage message, length delimited. Does not implicitly {@link receiptinfo.MessageInfo.Poll.UnkownMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof receiptinfo.MessageInfo.Poll.UnkownMessage
                     * @static
                     * @param {receiptinfo.MessageInfo.Poll.IUnkownMessage} message UnkownMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UnkownMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an UnkownMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof receiptinfo.MessageInfo.Poll.UnkownMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {receiptinfo.MessageInfo.Poll.UnkownMessage} UnkownMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UnkownMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.receiptinfo.MessageInfo.Poll.UnkownMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.unknownField = reader.uint64();
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
                     * Decodes an UnkownMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof receiptinfo.MessageInfo.Poll.UnkownMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {receiptinfo.MessageInfo.Poll.UnkownMessage} UnkownMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UnkownMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an UnkownMessage message.
                     * @function verify
                     * @memberof receiptinfo.MessageInfo.Poll.UnkownMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UnkownMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.unknownField != null && message.hasOwnProperty("unknownField"))
                            if (!$util.isInteger(message.unknownField) && !(message.unknownField && $util.isInteger(message.unknownField.low) && $util.isInteger(message.unknownField.high)))
                                return "unknownField: integer|Long expected";
                        return null;
                    };
    
                    /**
                     * Creates an UnkownMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof receiptinfo.MessageInfo.Poll.UnkownMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {receiptinfo.MessageInfo.Poll.UnkownMessage} UnkownMessage
                     */
                    UnkownMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.receiptinfo.MessageInfo.Poll.UnkownMessage)
                            return object;
                        var message = new $root.receiptinfo.MessageInfo.Poll.UnkownMessage();
                        if (object.unknownField != null)
                            if ($util.Long)
                                (message.unknownField = $util.Long.fromValue(object.unknownField)).unsigned = true;
                            else if (typeof object.unknownField === "string")
                                message.unknownField = parseInt(object.unknownField, 10);
                            else if (typeof object.unknownField === "number")
                                message.unknownField = object.unknownField;
                            else if (typeof object.unknownField === "object")
                                message.unknownField = new $util.LongBits(object.unknownField.low >>> 0, object.unknownField.high >>> 0).toNumber(true);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an UnkownMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof receiptinfo.MessageInfo.Poll.UnkownMessage
                     * @static
                     * @param {receiptinfo.MessageInfo.Poll.UnkownMessage} message UnkownMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UnkownMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.unknownField = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.unknownField = options.longs === String ? "0" : 0;
                        if (message.unknownField != null && message.hasOwnProperty("unknownField"))
                            if (typeof message.unknownField === "number")
                                object.unknownField = options.longs === String ? String(message.unknownField) : message.unknownField;
                            else
                                object.unknownField = options.longs === String ? $util.Long.prototype.toString.call(message.unknownField) : options.longs === Number ? new $util.LongBits(message.unknownField.low >>> 0, message.unknownField.high >>> 0).toNumber(true) : message.unknownField;
                        return object;
                    };
    
                    /**
                     * Converts this UnkownMessage to JSON.
                     * @function toJSON
                     * @memberof receiptinfo.MessageInfo.Poll.UnkownMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UnkownMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for UnkownMessage
                     * @function getTypeUrl
                     * @memberof receiptinfo.MessageInfo.Poll.UnkownMessage
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    UnkownMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/receiptinfo.MessageInfo.Poll.UnkownMessage";
                    };
    
                    return UnkownMessage;
                })();
    
                return Poll;
            })();
    
            return MessageInfo;
        })();
    
        return receiptinfo;
    })();

    return $root;
});
