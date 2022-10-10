/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const whatsappbackup = $root.whatsappbackup = (() => {

    /**
     * Namespace whatsappbackup.
     * @exports whatsappbackup
     * @namespace
     */
    const whatsappbackup = {};

    whatsappbackup.ReceiptInfo = (function() {

        /**
         * Properties of a ReceiptInfo.
         * @memberof whatsappbackup
         * @interface IReceiptInfo
         * @property {Array.<whatsappbackup.ReceiptInfo.IReceiptInfoSingleLegacy>|null} [singleLegacy] ReceiptInfo singleLegacy
         * @property {Array.<whatsappbackup.ReceiptInfo.IReceiptInfoSingle>|null} [single] ReceiptInfo single
         * @property {number|null} [sentTimestamp] ReceiptInfo sentTimestamp
         * @property {number|null} [unknown] ReceiptInfo unknown
         * @property {number|null} [unknown_2] ReceiptInfo unknown_2
         * @property {number|null} [unknown_3] ReceiptInfo unknown_3
         */

        /**
         * Constructs a new ReceiptInfo.
         * @memberof whatsappbackup
         * @classdesc Represents a ReceiptInfo.
         * @implements IReceiptInfo
         * @constructor
         * @param {whatsappbackup.IReceiptInfo=} [properties] Properties to set
         */
        function ReceiptInfo(properties) {
            this.singleLegacy = [];
            this.single = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReceiptInfo singleLegacy.
         * @member {Array.<whatsappbackup.ReceiptInfo.IReceiptInfoSingleLegacy>} singleLegacy
         * @memberof whatsappbackup.ReceiptInfo
         * @instance
         */
        ReceiptInfo.prototype.singleLegacy = $util.emptyArray;

        /**
         * ReceiptInfo single.
         * @member {Array.<whatsappbackup.ReceiptInfo.IReceiptInfoSingle>} single
         * @memberof whatsappbackup.ReceiptInfo
         * @instance
         */
        ReceiptInfo.prototype.single = $util.emptyArray;

        /**
         * ReceiptInfo sentTimestamp.
         * @member {number|null|undefined} sentTimestamp
         * @memberof whatsappbackup.ReceiptInfo
         * @instance
         */
        ReceiptInfo.prototype.sentTimestamp = null;

        /**
         * ReceiptInfo unknown.
         * @member {number|null|undefined} unknown
         * @memberof whatsappbackup.ReceiptInfo
         * @instance
         */
        ReceiptInfo.prototype.unknown = null;

        /**
         * ReceiptInfo unknown_2.
         * @member {number|null|undefined} unknown_2
         * @memberof whatsappbackup.ReceiptInfo
         * @instance
         */
        ReceiptInfo.prototype.unknown_2 = null;

        /**
         * ReceiptInfo unknown_3.
         * @member {number|null|undefined} unknown_3
         * @memberof whatsappbackup.ReceiptInfo
         * @instance
         */
        ReceiptInfo.prototype.unknown_3 = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * ReceiptInfo _sentTimestamp.
         * @member {"sentTimestamp"|undefined} _sentTimestamp
         * @memberof whatsappbackup.ReceiptInfo
         * @instance
         */
        Object.defineProperty(ReceiptInfo.prototype, "_sentTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["sentTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * ReceiptInfo _unknown.
         * @member {"unknown"|undefined} _unknown
         * @memberof whatsappbackup.ReceiptInfo
         * @instance
         */
        Object.defineProperty(ReceiptInfo.prototype, "_unknown", {
            get: $util.oneOfGetter($oneOfFields = ["unknown"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * ReceiptInfo _unknown_2.
         * @member {"unknown_2"|undefined} _unknown_2
         * @memberof whatsappbackup.ReceiptInfo
         * @instance
         */
        Object.defineProperty(ReceiptInfo.prototype, "_unknown_2", {
            get: $util.oneOfGetter($oneOfFields = ["unknown_2"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * ReceiptInfo _unknown_3.
         * @member {"unknown_3"|undefined} _unknown_3
         * @memberof whatsappbackup.ReceiptInfo
         * @instance
         */
        Object.defineProperty(ReceiptInfo.prototype, "_unknown_3", {
            get: $util.oneOfGetter($oneOfFields = ["unknown_3"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ReceiptInfo instance using the specified properties.
         * @function create
         * @memberof whatsappbackup.ReceiptInfo
         * @static
         * @param {whatsappbackup.IReceiptInfo=} [properties] Properties to set
         * @returns {whatsappbackup.ReceiptInfo} ReceiptInfo instance
         */
        ReceiptInfo.create = function create(properties) {
            return new ReceiptInfo(properties);
        };

        /**
         * Encodes the specified ReceiptInfo message. Does not implicitly {@link whatsappbackup.ReceiptInfo.verify|verify} messages.
         * @function encode
         * @memberof whatsappbackup.ReceiptInfo
         * @static
         * @param {whatsappbackup.IReceiptInfo} message ReceiptInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.singleLegacy != null && message.singleLegacy.length)
                for (let i = 0; i < message.singleLegacy.length; ++i)
                    $root.whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy.encode(message.singleLegacy[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.single != null && message.single.length)
                for (let i = 0; i < message.single.length; ++i)
                    $root.whatsappbackup.ReceiptInfo.ReceiptInfoSingle.encode(message.single[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.sentTimestamp != null && Object.hasOwnProperty.call(message, "sentTimestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sentTimestamp);
            if (message.unknown != null && Object.hasOwnProperty.call(message, "unknown"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.unknown);
            if (message.unknown_2 != null && Object.hasOwnProperty.call(message, "unknown_2"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.unknown_2);
            if (message.unknown_3 != null && Object.hasOwnProperty.call(message, "unknown_3"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.unknown_3);
            return writer;
        };

        /**
         * Encodes the specified ReceiptInfo message, length delimited. Does not implicitly {@link whatsappbackup.ReceiptInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof whatsappbackup.ReceiptInfo
         * @static
         * @param {whatsappbackup.IReceiptInfo} message ReceiptInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReceiptInfo message from the specified reader or buffer.
         * @function decode
         * @memberof whatsappbackup.ReceiptInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {whatsappbackup.ReceiptInfo} ReceiptInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whatsappbackup.ReceiptInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.singleLegacy && message.singleLegacy.length))
                            message.singleLegacy = [];
                        message.singleLegacy.push($root.whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        if (!(message.single && message.single.length))
                            message.single = [];
                        message.single.push($root.whatsappbackup.ReceiptInfo.ReceiptInfoSingle.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.sentTimestamp = reader.int32();
                        break;
                    }
                case 4: {
                        message.unknown = reader.int32();
                        break;
                    }
                case 5: {
                        message.unknown_2 = reader.int32();
                        break;
                    }
                case 6: {
                        message.unknown_3 = reader.int32();
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
         * Decodes a ReceiptInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof whatsappbackup.ReceiptInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {whatsappbackup.ReceiptInfo} ReceiptInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReceiptInfo message.
         * @function verify
         * @memberof whatsappbackup.ReceiptInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReceiptInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.singleLegacy != null && message.hasOwnProperty("singleLegacy")) {
                if (!Array.isArray(message.singleLegacy))
                    return "singleLegacy: array expected";
                for (let i = 0; i < message.singleLegacy.length; ++i) {
                    let error = $root.whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy.verify(message.singleLegacy[i]);
                    if (error)
                        return "singleLegacy." + error;
                }
            }
            if (message.single != null && message.hasOwnProperty("single")) {
                if (!Array.isArray(message.single))
                    return "single: array expected";
                for (let i = 0; i < message.single.length; ++i) {
                    let error = $root.whatsappbackup.ReceiptInfo.ReceiptInfoSingle.verify(message.single[i]);
                    if (error)
                        return "single." + error;
                }
            }
            if (message.sentTimestamp != null && message.hasOwnProperty("sentTimestamp")) {
                properties._sentTimestamp = 1;
                if (!$util.isInteger(message.sentTimestamp))
                    return "sentTimestamp: integer expected";
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
            return null;
        };

        /**
         * Creates a ReceiptInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof whatsappbackup.ReceiptInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {whatsappbackup.ReceiptInfo} ReceiptInfo
         */
        ReceiptInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.whatsappbackup.ReceiptInfo)
                return object;
            let message = new $root.whatsappbackup.ReceiptInfo();
            if (object.singleLegacy) {
                if (!Array.isArray(object.singleLegacy))
                    throw TypeError(".whatsappbackup.ReceiptInfo.singleLegacy: array expected");
                message.singleLegacy = [];
                for (let i = 0; i < object.singleLegacy.length; ++i) {
                    if (typeof object.singleLegacy[i] !== "object")
                        throw TypeError(".whatsappbackup.ReceiptInfo.singleLegacy: object expected");
                    message.singleLegacy[i] = $root.whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy.fromObject(object.singleLegacy[i]);
                }
            }
            if (object.single) {
                if (!Array.isArray(object.single))
                    throw TypeError(".whatsappbackup.ReceiptInfo.single: array expected");
                message.single = [];
                for (let i = 0; i < object.single.length; ++i) {
                    if (typeof object.single[i] !== "object")
                        throw TypeError(".whatsappbackup.ReceiptInfo.single: object expected");
                    message.single[i] = $root.whatsappbackup.ReceiptInfo.ReceiptInfoSingle.fromObject(object.single[i]);
                }
            }
            if (object.sentTimestamp != null)
                message.sentTimestamp = object.sentTimestamp | 0;
            if (object.unknown != null)
                message.unknown = object.unknown | 0;
            if (object.unknown_2 != null)
                message.unknown_2 = object.unknown_2 | 0;
            if (object.unknown_3 != null)
                message.unknown_3 = object.unknown_3 | 0;
            return message;
        };

        /**
         * Creates a plain object from a ReceiptInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof whatsappbackup.ReceiptInfo
         * @static
         * @param {whatsappbackup.ReceiptInfo} message ReceiptInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReceiptInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.singleLegacy = [];
                object.single = [];
            }
            if (message.singleLegacy && message.singleLegacy.length) {
                object.singleLegacy = [];
                for (let j = 0; j < message.singleLegacy.length; ++j)
                    object.singleLegacy[j] = $root.whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy.toObject(message.singleLegacy[j], options);
            }
            if (message.single && message.single.length) {
                object.single = [];
                for (let j = 0; j < message.single.length; ++j)
                    object.single[j] = $root.whatsappbackup.ReceiptInfo.ReceiptInfoSingle.toObject(message.single[j], options);
            }
            if (message.sentTimestamp != null && message.hasOwnProperty("sentTimestamp")) {
                object.sentTimestamp = message.sentTimestamp;
                if (options.oneofs)
                    object._sentTimestamp = "sentTimestamp";
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
            return object;
        };

        /**
         * Converts this ReceiptInfo to JSON.
         * @function toJSON
         * @memberof whatsappbackup.ReceiptInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReceiptInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReceiptInfo
         * @function getTypeUrl
         * @memberof whatsappbackup.ReceiptInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReceiptInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/whatsappbackup.ReceiptInfo";
        };

        ReceiptInfo.ReceiptInfoSingleLegacy = (function() {

            /**
             * Properties of a ReceiptInfoSingleLegacy.
             * @memberof whatsappbackup.ReceiptInfo
             * @interface IReceiptInfoSingleLegacy
             * @property {string|null} [phoneNumber] ReceiptInfoSingleLegacy phoneNumber
             * @property {number|null} [unknownNumber] ReceiptInfoSingleLegacy unknownNumber
             * @property {number|null} [receivedTimestamp] ReceiptInfoSingleLegacy receivedTimestamp
             * @property {number|null} [readTimestamp] ReceiptInfoSingleLegacy readTimestamp
             * @property {number|null} [unkownTimestamp] ReceiptInfoSingleLegacy unkownTimestamp
             */

            /**
             * Constructs a new ReceiptInfoSingleLegacy.
             * @memberof whatsappbackup.ReceiptInfo
             * @classdesc Represents a ReceiptInfoSingleLegacy.
             * @implements IReceiptInfoSingleLegacy
             * @constructor
             * @param {whatsappbackup.ReceiptInfo.IReceiptInfoSingleLegacy=} [properties] Properties to set
             */
            function ReceiptInfoSingleLegacy(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReceiptInfoSingleLegacy phoneNumber.
             * @member {string|null|undefined} phoneNumber
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy
             * @instance
             */
            ReceiptInfoSingleLegacy.prototype.phoneNumber = null;

            /**
             * ReceiptInfoSingleLegacy unknownNumber.
             * @member {number|null|undefined} unknownNumber
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy
             * @instance
             */
            ReceiptInfoSingleLegacy.prototype.unknownNumber = null;

            /**
             * ReceiptInfoSingleLegacy receivedTimestamp.
             * @member {number|null|undefined} receivedTimestamp
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy
             * @instance
             */
            ReceiptInfoSingleLegacy.prototype.receivedTimestamp = null;

            /**
             * ReceiptInfoSingleLegacy readTimestamp.
             * @member {number|null|undefined} readTimestamp
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy
             * @instance
             */
            ReceiptInfoSingleLegacy.prototype.readTimestamp = null;

            /**
             * ReceiptInfoSingleLegacy unkownTimestamp.
             * @member {number|null|undefined} unkownTimestamp
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy
             * @instance
             */
            ReceiptInfoSingleLegacy.prototype.unkownTimestamp = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * ReceiptInfoSingleLegacy _phoneNumber.
             * @member {"phoneNumber"|undefined} _phoneNumber
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy
             * @instance
             */
            Object.defineProperty(ReceiptInfoSingleLegacy.prototype, "_phoneNumber", {
                get: $util.oneOfGetter($oneOfFields = ["phoneNumber"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * ReceiptInfoSingleLegacy _unknownNumber.
             * @member {"unknownNumber"|undefined} _unknownNumber
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy
             * @instance
             */
            Object.defineProperty(ReceiptInfoSingleLegacy.prototype, "_unknownNumber", {
                get: $util.oneOfGetter($oneOfFields = ["unknownNumber"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * ReceiptInfoSingleLegacy _receivedTimestamp.
             * @member {"receivedTimestamp"|undefined} _receivedTimestamp
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy
             * @instance
             */
            Object.defineProperty(ReceiptInfoSingleLegacy.prototype, "_receivedTimestamp", {
                get: $util.oneOfGetter($oneOfFields = ["receivedTimestamp"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * ReceiptInfoSingleLegacy _readTimestamp.
             * @member {"readTimestamp"|undefined} _readTimestamp
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy
             * @instance
             */
            Object.defineProperty(ReceiptInfoSingleLegacy.prototype, "_readTimestamp", {
                get: $util.oneOfGetter($oneOfFields = ["readTimestamp"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * ReceiptInfoSingleLegacy _unkownTimestamp.
             * @member {"unkownTimestamp"|undefined} _unkownTimestamp
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy
             * @instance
             */
            Object.defineProperty(ReceiptInfoSingleLegacy.prototype, "_unkownTimestamp", {
                get: $util.oneOfGetter($oneOfFields = ["unkownTimestamp"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ReceiptInfoSingleLegacy instance using the specified properties.
             * @function create
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy
             * @static
             * @param {whatsappbackup.ReceiptInfo.IReceiptInfoSingleLegacy=} [properties] Properties to set
             * @returns {whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy} ReceiptInfoSingleLegacy instance
             */
            ReceiptInfoSingleLegacy.create = function create(properties) {
                return new ReceiptInfoSingleLegacy(properties);
            };

            /**
             * Encodes the specified ReceiptInfoSingleLegacy message. Does not implicitly {@link whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy.verify|verify} messages.
             * @function encode
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy
             * @static
             * @param {whatsappbackup.ReceiptInfo.IReceiptInfoSingleLegacy} message ReceiptInfoSingleLegacy message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReceiptInfoSingleLegacy.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.phoneNumber != null && Object.hasOwnProperty.call(message, "phoneNumber"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.phoneNumber);
                if (message.unknownNumber != null && Object.hasOwnProperty.call(message, "unknownNumber"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.unknownNumber);
                if (message.receivedTimestamp != null && Object.hasOwnProperty.call(message, "receivedTimestamp"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.receivedTimestamp);
                if (message.readTimestamp != null && Object.hasOwnProperty.call(message, "readTimestamp"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.readTimestamp);
                if (message.unkownTimestamp != null && Object.hasOwnProperty.call(message, "unkownTimestamp"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.unkownTimestamp);
                return writer;
            };

            /**
             * Encodes the specified ReceiptInfoSingleLegacy message, length delimited. Does not implicitly {@link whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy.verify|verify} messages.
             * @function encodeDelimited
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy
             * @static
             * @param {whatsappbackup.ReceiptInfo.IReceiptInfoSingleLegacy} message ReceiptInfoSingleLegacy message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReceiptInfoSingleLegacy.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReceiptInfoSingleLegacy message from the specified reader or buffer.
             * @function decode
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy} ReceiptInfoSingleLegacy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReceiptInfoSingleLegacy.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.phoneNumber = reader.string();
                            break;
                        }
                    case 2: {
                            message.unknownNumber = reader.int32();
                            break;
                        }
                    case 3: {
                            message.receivedTimestamp = reader.int32();
                            break;
                        }
                    case 4: {
                            message.readTimestamp = reader.int32();
                            break;
                        }
                    case 5: {
                            message.unkownTimestamp = reader.int32();
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
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy} ReceiptInfoSingleLegacy
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
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReceiptInfoSingleLegacy.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
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
                if (message.receivedTimestamp != null && message.hasOwnProperty("receivedTimestamp")) {
                    properties._receivedTimestamp = 1;
                    if (!$util.isInteger(message.receivedTimestamp))
                        return "receivedTimestamp: integer expected";
                }
                if (message.readTimestamp != null && message.hasOwnProperty("readTimestamp")) {
                    properties._readTimestamp = 1;
                    if (!$util.isInteger(message.readTimestamp))
                        return "readTimestamp: integer expected";
                }
                if (message.unkownTimestamp != null && message.hasOwnProperty("unkownTimestamp")) {
                    properties._unkownTimestamp = 1;
                    if (!$util.isInteger(message.unkownTimestamp))
                        return "unkownTimestamp: integer expected";
                }
                return null;
            };

            /**
             * Creates a ReceiptInfoSingleLegacy message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy} ReceiptInfoSingleLegacy
             */
            ReceiptInfoSingleLegacy.fromObject = function fromObject(object) {
                if (object instanceof $root.whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy)
                    return object;
                let message = new $root.whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy();
                if (object.phoneNumber != null)
                    message.phoneNumber = String(object.phoneNumber);
                if (object.unknownNumber != null)
                    message.unknownNumber = object.unknownNumber | 0;
                if (object.receivedTimestamp != null)
                    message.receivedTimestamp = object.receivedTimestamp | 0;
                if (object.readTimestamp != null)
                    message.readTimestamp = object.readTimestamp | 0;
                if (object.unkownTimestamp != null)
                    message.unkownTimestamp = object.unkownTimestamp | 0;
                return message;
            };

            /**
             * Creates a plain object from a ReceiptInfoSingleLegacy message. Also converts values to other types if specified.
             * @function toObject
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy
             * @static
             * @param {whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy} message ReceiptInfoSingleLegacy
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReceiptInfoSingleLegacy.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
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
                if (message.receivedTimestamp != null && message.hasOwnProperty("receivedTimestamp")) {
                    object.receivedTimestamp = message.receivedTimestamp;
                    if (options.oneofs)
                        object._receivedTimestamp = "receivedTimestamp";
                }
                if (message.readTimestamp != null && message.hasOwnProperty("readTimestamp")) {
                    object.readTimestamp = message.readTimestamp;
                    if (options.oneofs)
                        object._readTimestamp = "readTimestamp";
                }
                if (message.unkownTimestamp != null && message.hasOwnProperty("unkownTimestamp")) {
                    object.unkownTimestamp = message.unkownTimestamp;
                    if (options.oneofs)
                        object._unkownTimestamp = "unkownTimestamp";
                }
                return object;
            };

            /**
             * Converts this ReceiptInfoSingleLegacy to JSON.
             * @function toJSON
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReceiptInfoSingleLegacy.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ReceiptInfoSingleLegacy
             * @function getTypeUrl
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReceiptInfoSingleLegacy.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy";
            };

            return ReceiptInfoSingleLegacy;
        })();

        ReceiptInfo.ReceiptInfoSingle = (function() {

            /**
             * Properties of a ReceiptInfoSingle.
             * @memberof whatsappbackup.ReceiptInfo
             * @interface IReceiptInfoSingle
             * @property {Uint8Array|null} [phoneNumber] ReceiptInfoSingle phoneNumber
             * @property {number|null} [offsetReceivedTimestamp] ReceiptInfoSingle offsetReceivedTimestamp
             * @property {number|null} [offsetReadTimestamp] ReceiptInfoSingle offsetReadTimestamp
             * @property {number|null} [unknownOnlyOnce] ReceiptInfoSingle unknownOnlyOnce
             * @property {Array.<whatsappbackup.ReceiptInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing>|null} [unknownThingOne] ReceiptInfoSingle unknownThingOne
             * @property {Array.<whatsappbackup.ReceiptInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing>|null} [unknownThingTwo] ReceiptInfoSingle unknownThingTwo
             */

            /**
             * Constructs a new ReceiptInfoSingle.
             * @memberof whatsappbackup.ReceiptInfo
             * @classdesc Represents a ReceiptInfoSingle.
             * @implements IReceiptInfoSingle
             * @constructor
             * @param {whatsappbackup.ReceiptInfo.IReceiptInfoSingle=} [properties] Properties to set
             */
            function ReceiptInfoSingle(properties) {
                this.unknownThingOne = [];
                this.unknownThingTwo = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReceiptInfoSingle phoneNumber.
             * @member {Uint8Array|null|undefined} phoneNumber
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle
             * @instance
             */
            ReceiptInfoSingle.prototype.phoneNumber = null;

            /**
             * ReceiptInfoSingle offsetReceivedTimestamp.
             * @member {number|null|undefined} offsetReceivedTimestamp
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle
             * @instance
             */
            ReceiptInfoSingle.prototype.offsetReceivedTimestamp = null;

            /**
             * ReceiptInfoSingle offsetReadTimestamp.
             * @member {number|null|undefined} offsetReadTimestamp
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle
             * @instance
             */
            ReceiptInfoSingle.prototype.offsetReadTimestamp = null;

            /**
             * ReceiptInfoSingle unknownOnlyOnce.
             * @member {number|null|undefined} unknownOnlyOnce
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle
             * @instance
             */
            ReceiptInfoSingle.prototype.unknownOnlyOnce = null;

            /**
             * ReceiptInfoSingle unknownThingOne.
             * @member {Array.<whatsappbackup.ReceiptInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing>} unknownThingOne
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle
             * @instance
             */
            ReceiptInfoSingle.prototype.unknownThingOne = $util.emptyArray;

            /**
             * ReceiptInfoSingle unknownThingTwo.
             * @member {Array.<whatsappbackup.ReceiptInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing>} unknownThingTwo
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle
             * @instance
             */
            ReceiptInfoSingle.prototype.unknownThingTwo = $util.emptyArray;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * ReceiptInfoSingle _phoneNumber.
             * @member {"phoneNumber"|undefined} _phoneNumber
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle
             * @instance
             */
            Object.defineProperty(ReceiptInfoSingle.prototype, "_phoneNumber", {
                get: $util.oneOfGetter($oneOfFields = ["phoneNumber"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * ReceiptInfoSingle _offsetReceivedTimestamp.
             * @member {"offsetReceivedTimestamp"|undefined} _offsetReceivedTimestamp
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle
             * @instance
             */
            Object.defineProperty(ReceiptInfoSingle.prototype, "_offsetReceivedTimestamp", {
                get: $util.oneOfGetter($oneOfFields = ["offsetReceivedTimestamp"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * ReceiptInfoSingle _offsetReadTimestamp.
             * @member {"offsetReadTimestamp"|undefined} _offsetReadTimestamp
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle
             * @instance
             */
            Object.defineProperty(ReceiptInfoSingle.prototype, "_offsetReadTimestamp", {
                get: $util.oneOfGetter($oneOfFields = ["offsetReadTimestamp"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * ReceiptInfoSingle _unknownOnlyOnce.
             * @member {"unknownOnlyOnce"|undefined} _unknownOnlyOnce
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle
             * @instance
             */
            Object.defineProperty(ReceiptInfoSingle.prototype, "_unknownOnlyOnce", {
                get: $util.oneOfGetter($oneOfFields = ["unknownOnlyOnce"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ReceiptInfoSingle instance using the specified properties.
             * @function create
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle
             * @static
             * @param {whatsappbackup.ReceiptInfo.IReceiptInfoSingle=} [properties] Properties to set
             * @returns {whatsappbackup.ReceiptInfo.ReceiptInfoSingle} ReceiptInfoSingle instance
             */
            ReceiptInfoSingle.create = function create(properties) {
                return new ReceiptInfoSingle(properties);
            };

            /**
             * Encodes the specified ReceiptInfoSingle message. Does not implicitly {@link whatsappbackup.ReceiptInfo.ReceiptInfoSingle.verify|verify} messages.
             * @function encode
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle
             * @static
             * @param {whatsappbackup.ReceiptInfo.IReceiptInfoSingle} message ReceiptInfoSingle message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReceiptInfoSingle.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.phoneNumber != null && Object.hasOwnProperty.call(message, "phoneNumber"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.phoneNumber);
                if (message.offsetReceivedTimestamp != null && Object.hasOwnProperty.call(message, "offsetReceivedTimestamp"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.offsetReceivedTimestamp);
                if (message.offsetReadTimestamp != null && Object.hasOwnProperty.call(message, "offsetReadTimestamp"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.offsetReadTimestamp);
                if (message.unknownOnlyOnce != null && Object.hasOwnProperty.call(message, "unknownOnlyOnce"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.unknownOnlyOnce);
                if (message.unknownThingOne != null && message.unknownThingOne.length)
                    for (let i = 0; i < message.unknownThingOne.length; ++i)
                        $root.whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.encode(message.unknownThingOne[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.unknownThingTwo != null && message.unknownThingTwo.length)
                    for (let i = 0; i < message.unknownThingTwo.length; ++i)
                        $root.whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.encode(message.unknownThingTwo[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ReceiptInfoSingle message, length delimited. Does not implicitly {@link whatsappbackup.ReceiptInfo.ReceiptInfoSingle.verify|verify} messages.
             * @function encodeDelimited
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle
             * @static
             * @param {whatsappbackup.ReceiptInfo.IReceiptInfoSingle} message ReceiptInfoSingle message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReceiptInfoSingle.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReceiptInfoSingle message from the specified reader or buffer.
             * @function decode
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {whatsappbackup.ReceiptInfo.ReceiptInfoSingle} ReceiptInfoSingle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReceiptInfoSingle.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whatsappbackup.ReceiptInfo.ReceiptInfoSingle();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.phoneNumber = reader.bytes();
                            break;
                        }
                    case 4: {
                            message.offsetReceivedTimestamp = reader.int32();
                            break;
                        }
                    case 5: {
                            message.offsetReadTimestamp = reader.int32();
                            break;
                        }
                    case 6: {
                            message.unknownOnlyOnce = reader.int32();
                            break;
                        }
                    case 9: {
                            if (!(message.unknownThingOne && message.unknownThingOne.length))
                                message.unknownThingOne = [];
                            message.unknownThingOne.push($root.whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.decode(reader, reader.uint32()));
                            break;
                        }
                    case 10: {
                            if (!(message.unknownThingTwo && message.unknownThingTwo.length))
                                message.unknownThingTwo = [];
                            message.unknownThingTwo.push($root.whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.decode(reader, reader.uint32()));
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
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {whatsappbackup.ReceiptInfo.ReceiptInfoSingle} ReceiptInfoSingle
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
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReceiptInfoSingle.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber")) {
                    properties._phoneNumber = 1;
                    if (!(message.phoneNumber && typeof message.phoneNumber.length === "number" || $util.isString(message.phoneNumber)))
                        return "phoneNumber: buffer expected";
                }
                if (message.offsetReceivedTimestamp != null && message.hasOwnProperty("offsetReceivedTimestamp")) {
                    properties._offsetReceivedTimestamp = 1;
                    if (!$util.isInteger(message.offsetReceivedTimestamp))
                        return "offsetReceivedTimestamp: integer expected";
                }
                if (message.offsetReadTimestamp != null && message.hasOwnProperty("offsetReadTimestamp")) {
                    properties._offsetReadTimestamp = 1;
                    if (!$util.isInteger(message.offsetReadTimestamp))
                        return "offsetReadTimestamp: integer expected";
                }
                if (message.unknownOnlyOnce != null && message.hasOwnProperty("unknownOnlyOnce")) {
                    properties._unknownOnlyOnce = 1;
                    if (!$util.isInteger(message.unknownOnlyOnce))
                        return "unknownOnlyOnce: integer expected";
                }
                if (message.unknownThingOne != null && message.hasOwnProperty("unknownThingOne")) {
                    if (!Array.isArray(message.unknownThingOne))
                        return "unknownThingOne: array expected";
                    for (let i = 0; i < message.unknownThingOne.length; ++i) {
                        let error = $root.whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.verify(message.unknownThingOne[i]);
                        if (error)
                            return "unknownThingOne." + error;
                    }
                }
                if (message.unknownThingTwo != null && message.hasOwnProperty("unknownThingTwo")) {
                    if (!Array.isArray(message.unknownThingTwo))
                        return "unknownThingTwo: array expected";
                    for (let i = 0; i < message.unknownThingTwo.length; ++i) {
                        let error = $root.whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.verify(message.unknownThingTwo[i]);
                        if (error)
                            return "unknownThingTwo." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ReceiptInfoSingle message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {whatsappbackup.ReceiptInfo.ReceiptInfoSingle} ReceiptInfoSingle
             */
            ReceiptInfoSingle.fromObject = function fromObject(object) {
                if (object instanceof $root.whatsappbackup.ReceiptInfo.ReceiptInfoSingle)
                    return object;
                let message = new $root.whatsappbackup.ReceiptInfo.ReceiptInfoSingle();
                if (object.phoneNumber != null)
                    if (typeof object.phoneNumber === "string")
                        $util.base64.decode(object.phoneNumber, message.phoneNumber = $util.newBuffer($util.base64.length(object.phoneNumber)), 0);
                    else if (object.phoneNumber.length >= 0)
                        message.phoneNumber = object.phoneNumber;
                if (object.offsetReceivedTimestamp != null)
                    message.offsetReceivedTimestamp = object.offsetReceivedTimestamp | 0;
                if (object.offsetReadTimestamp != null)
                    message.offsetReadTimestamp = object.offsetReadTimestamp | 0;
                if (object.unknownOnlyOnce != null)
                    message.unknownOnlyOnce = object.unknownOnlyOnce | 0;
                if (object.unknownThingOne) {
                    if (!Array.isArray(object.unknownThingOne))
                        throw TypeError(".whatsappbackup.ReceiptInfo.ReceiptInfoSingle.unknownThingOne: array expected");
                    message.unknownThingOne = [];
                    for (let i = 0; i < object.unknownThingOne.length; ++i) {
                        if (typeof object.unknownThingOne[i] !== "object")
                            throw TypeError(".whatsappbackup.ReceiptInfo.ReceiptInfoSingle.unknownThingOne: object expected");
                        message.unknownThingOne[i] = $root.whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.fromObject(object.unknownThingOne[i]);
                    }
                }
                if (object.unknownThingTwo) {
                    if (!Array.isArray(object.unknownThingTwo))
                        throw TypeError(".whatsappbackup.ReceiptInfo.ReceiptInfoSingle.unknownThingTwo: array expected");
                    message.unknownThingTwo = [];
                    for (let i = 0; i < object.unknownThingTwo.length; ++i) {
                        if (typeof object.unknownThingTwo[i] !== "object")
                            throw TypeError(".whatsappbackup.ReceiptInfo.ReceiptInfoSingle.unknownThingTwo: object expected");
                        message.unknownThingTwo[i] = $root.whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.fromObject(object.unknownThingTwo[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ReceiptInfoSingle message. Also converts values to other types if specified.
             * @function toObject
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle
             * @static
             * @param {whatsappbackup.ReceiptInfo.ReceiptInfoSingle} message ReceiptInfoSingle
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReceiptInfoSingle.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.unknownThingOne = [];
                    object.unknownThingTwo = [];
                }
                if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber")) {
                    object.phoneNumber = options.bytes === String ? $util.base64.encode(message.phoneNumber, 0, message.phoneNumber.length) : options.bytes === Array ? Array.prototype.slice.call(message.phoneNumber) : message.phoneNumber;
                    if (options.oneofs)
                        object._phoneNumber = "phoneNumber";
                }
                if (message.offsetReceivedTimestamp != null && message.hasOwnProperty("offsetReceivedTimestamp")) {
                    object.offsetReceivedTimestamp = message.offsetReceivedTimestamp;
                    if (options.oneofs)
                        object._offsetReceivedTimestamp = "offsetReceivedTimestamp";
                }
                if (message.offsetReadTimestamp != null && message.hasOwnProperty("offsetReadTimestamp")) {
                    object.offsetReadTimestamp = message.offsetReadTimestamp;
                    if (options.oneofs)
                        object._offsetReadTimestamp = "offsetReadTimestamp";
                }
                if (message.unknownOnlyOnce != null && message.hasOwnProperty("unknownOnlyOnce")) {
                    object.unknownOnlyOnce = message.unknownOnlyOnce;
                    if (options.oneofs)
                        object._unknownOnlyOnce = "unknownOnlyOnce";
                }
                if (message.unknownThingOne && message.unknownThingOne.length) {
                    object.unknownThingOne = [];
                    for (let j = 0; j < message.unknownThingOne.length; ++j)
                        object.unknownThingOne[j] = $root.whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.toObject(message.unknownThingOne[j], options);
                }
                if (message.unknownThingTwo && message.unknownThingTwo.length) {
                    object.unknownThingTwo = [];
                    for (let j = 0; j < message.unknownThingTwo.length; ++j)
                        object.unknownThingTwo[j] = $root.whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.toObject(message.unknownThingTwo[j], options);
                }
                return object;
            };

            /**
             * Converts this ReceiptInfoSingle to JSON.
             * @function toJSON
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReceiptInfoSingle.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ReceiptInfoSingle
             * @function getTypeUrl
             * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReceiptInfoSingle.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/whatsappbackup.ReceiptInfo.ReceiptInfoSingle";
            };

            ReceiptInfoSingle.ReceiptInfoSingleUnkownThing = (function() {

                /**
                 * Properties of a ReceiptInfoSingleUnkownThing.
                 * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle
                 * @interface IReceiptInfoSingleUnkownThing
                 * @property {number|null} [one] ReceiptInfoSingleUnkownThing one
                 * @property {number|null} [two] ReceiptInfoSingleUnkownThing two
                 */

                /**
                 * Constructs a new ReceiptInfoSingleUnkownThing.
                 * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle
                 * @classdesc Represents a ReceiptInfoSingleUnkownThing.
                 * @implements IReceiptInfoSingleUnkownThing
                 * @constructor
                 * @param {whatsappbackup.ReceiptInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing=} [properties] Properties to set
                 */
                function ReceiptInfoSingleUnkownThing(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReceiptInfoSingleUnkownThing one.
                 * @member {number|null|undefined} one
                 * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                 * @instance
                 */
                ReceiptInfoSingleUnkownThing.prototype.one = null;

                /**
                 * ReceiptInfoSingleUnkownThing two.
                 * @member {number|null|undefined} two
                 * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                 * @instance
                 */
                ReceiptInfoSingleUnkownThing.prototype.two = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * ReceiptInfoSingleUnkownThing _one.
                 * @member {"one"|undefined} _one
                 * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                 * @instance
                 */
                Object.defineProperty(ReceiptInfoSingleUnkownThing.prototype, "_one", {
                    get: $util.oneOfGetter($oneOfFields = ["one"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * ReceiptInfoSingleUnkownThing _two.
                 * @member {"two"|undefined} _two
                 * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                 * @instance
                 */
                Object.defineProperty(ReceiptInfoSingleUnkownThing.prototype, "_two", {
                    get: $util.oneOfGetter($oneOfFields = ["two"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new ReceiptInfoSingleUnkownThing instance using the specified properties.
                 * @function create
                 * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                 * @static
                 * @param {whatsappbackup.ReceiptInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing=} [properties] Properties to set
                 * @returns {whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing} ReceiptInfoSingleUnkownThing instance
                 */
                ReceiptInfoSingleUnkownThing.create = function create(properties) {
                    return new ReceiptInfoSingleUnkownThing(properties);
                };

                /**
                 * Encodes the specified ReceiptInfoSingleUnkownThing message. Does not implicitly {@link whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.verify|verify} messages.
                 * @function encode
                 * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                 * @static
                 * @param {whatsappbackup.ReceiptInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing} message ReceiptInfoSingleUnkownThing message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReceiptInfoSingleUnkownThing.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.one != null && Object.hasOwnProperty.call(message, "one"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.one);
                    if (message.two != null && Object.hasOwnProperty.call(message, "two"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.two);
                    return writer;
                };

                /**
                 * Encodes the specified ReceiptInfoSingleUnkownThing message, length delimited. Does not implicitly {@link whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                 * @static
                 * @param {whatsappbackup.ReceiptInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing} message ReceiptInfoSingleUnkownThing message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReceiptInfoSingleUnkownThing.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReceiptInfoSingleUnkownThing message from the specified reader or buffer.
                 * @function decode
                 * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing} ReceiptInfoSingleUnkownThing
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReceiptInfoSingleUnkownThing.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.one = reader.int32();
                                break;
                            }
                        case 2: {
                                message.two = reader.int32();
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
                 * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing} ReceiptInfoSingleUnkownThing
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
                 * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReceiptInfoSingleUnkownThing.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
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
                 * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing} ReceiptInfoSingleUnkownThing
                 */
                ReceiptInfoSingleUnkownThing.fromObject = function fromObject(object) {
                    if (object instanceof $root.whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing)
                        return object;
                    let message = new $root.whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing();
                    if (object.one != null)
                        message.one = object.one | 0;
                    if (object.two != null)
                        message.two = object.two | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a ReceiptInfoSingleUnkownThing message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                 * @static
                 * @param {whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing} message ReceiptInfoSingleUnkownThing
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReceiptInfoSingleUnkownThing.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
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
                 * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReceiptInfoSingleUnkownThing.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ReceiptInfoSingleUnkownThing
                 * @function getTypeUrl
                 * @memberof whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ReceiptInfoSingleUnkownThing.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing";
                };

                return ReceiptInfoSingleUnkownThing;
            })();

            return ReceiptInfoSingle;
        })();

        return ReceiptInfo;
    })();

    return whatsappbackup;
})();

export { $root as default };
