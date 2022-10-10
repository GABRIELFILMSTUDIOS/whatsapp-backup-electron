import * as $protobuf from "protobufjs";
/** Namespace whatsappbackup. */
export namespace whatsappbackup {

    /** Properties of a ReceiptInfo. */
    interface IReceiptInfo {

        /** ReceiptInfo singleLegacy */
        singleLegacy?: (whatsappbackup.ReceiptInfo.IReceiptInfoSingleLegacy[]|null);

        /** ReceiptInfo single */
        single?: (whatsappbackup.ReceiptInfo.IReceiptInfoSingle[]|null);

        /** ReceiptInfo sentTimestamp */
        sentTimestamp?: (number|null);

        /** ReceiptInfo unknown */
        unknown?: (number|null);

        /** ReceiptInfo unknown_2 */
        unknown_2?: (number|null);

        /** ReceiptInfo unknown_3 */
        unknown_3?: (number|null);
    }

    /** Represents a ReceiptInfo. */
    class ReceiptInfo implements IReceiptInfo {

        /**
         * Constructs a new ReceiptInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: whatsappbackup.IReceiptInfo);

        /** ReceiptInfo singleLegacy. */
        public singleLegacy: whatsappbackup.ReceiptInfo.IReceiptInfoSingleLegacy[];

        /** ReceiptInfo single. */
        public single: whatsappbackup.ReceiptInfo.IReceiptInfoSingle[];

        /** ReceiptInfo sentTimestamp. */
        public sentTimestamp?: (number|null);

        /** ReceiptInfo unknown. */
        public unknown?: (number|null);

        /** ReceiptInfo unknown_2. */
        public unknown_2?: (number|null);

        /** ReceiptInfo unknown_3. */
        public unknown_3?: (number|null);

        /** ReceiptInfo _sentTimestamp. */
        public _sentTimestamp?: "sentTimestamp";

        /** ReceiptInfo _unknown. */
        public _unknown?: "unknown";

        /** ReceiptInfo _unknown_2. */
        public _unknown_2?: "unknown_2";

        /** ReceiptInfo _unknown_3. */
        public _unknown_3?: "unknown_3";

        /**
         * Creates a new ReceiptInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReceiptInfo instance
         */
        public static create(properties?: whatsappbackup.IReceiptInfo): whatsappbackup.ReceiptInfo;

        /**
         * Encodes the specified ReceiptInfo message. Does not implicitly {@link whatsappbackup.ReceiptInfo.verify|verify} messages.
         * @param message ReceiptInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: whatsappbackup.IReceiptInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReceiptInfo message, length delimited. Does not implicitly {@link whatsappbackup.ReceiptInfo.verify|verify} messages.
         * @param message ReceiptInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: whatsappbackup.IReceiptInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReceiptInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReceiptInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whatsappbackup.ReceiptInfo;

        /**
         * Decodes a ReceiptInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReceiptInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): whatsappbackup.ReceiptInfo;

        /**
         * Verifies a ReceiptInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReceiptInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReceiptInfo
         */
        public static fromObject(object: { [k: string]: any }): whatsappbackup.ReceiptInfo;

        /**
         * Creates a plain object from a ReceiptInfo message. Also converts values to other types if specified.
         * @param message ReceiptInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: whatsappbackup.ReceiptInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReceiptInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReceiptInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ReceiptInfo {

        /** Properties of a ReceiptInfoSingleLegacy. */
        interface IReceiptInfoSingleLegacy {

            /** ReceiptInfoSingleLegacy phoneNumber */
            phoneNumber?: (string|null);

            /** ReceiptInfoSingleLegacy unknownNumber */
            unknownNumber?: (number|null);

            /** ReceiptInfoSingleLegacy receivedTimestamp */
            receivedTimestamp?: (number|null);

            /** ReceiptInfoSingleLegacy readTimestamp */
            readTimestamp?: (number|null);

            /** ReceiptInfoSingleLegacy unkownTimestamp */
            unkownTimestamp?: (number|null);
        }

        /** Represents a ReceiptInfoSingleLegacy. */
        class ReceiptInfoSingleLegacy implements IReceiptInfoSingleLegacy {

            /**
             * Constructs a new ReceiptInfoSingleLegacy.
             * @param [properties] Properties to set
             */
            constructor(properties?: whatsappbackup.ReceiptInfo.IReceiptInfoSingleLegacy);

            /** ReceiptInfoSingleLegacy phoneNumber. */
            public phoneNumber?: (string|null);

            /** ReceiptInfoSingleLegacy unknownNumber. */
            public unknownNumber?: (number|null);

            /** ReceiptInfoSingleLegacy receivedTimestamp. */
            public receivedTimestamp?: (number|null);

            /** ReceiptInfoSingleLegacy readTimestamp. */
            public readTimestamp?: (number|null);

            /** ReceiptInfoSingleLegacy unkownTimestamp. */
            public unkownTimestamp?: (number|null);

            /** ReceiptInfoSingleLegacy _phoneNumber. */
            public _phoneNumber?: "phoneNumber";

            /** ReceiptInfoSingleLegacy _unknownNumber. */
            public _unknownNumber?: "unknownNumber";

            /** ReceiptInfoSingleLegacy _receivedTimestamp. */
            public _receivedTimestamp?: "receivedTimestamp";

            /** ReceiptInfoSingleLegacy _readTimestamp. */
            public _readTimestamp?: "readTimestamp";

            /** ReceiptInfoSingleLegacy _unkownTimestamp. */
            public _unkownTimestamp?: "unkownTimestamp";

            /**
             * Creates a new ReceiptInfoSingleLegacy instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReceiptInfoSingleLegacy instance
             */
            public static create(properties?: whatsappbackup.ReceiptInfo.IReceiptInfoSingleLegacy): whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy;

            /**
             * Encodes the specified ReceiptInfoSingleLegacy message. Does not implicitly {@link whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy.verify|verify} messages.
             * @param message ReceiptInfoSingleLegacy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: whatsappbackup.ReceiptInfo.IReceiptInfoSingleLegacy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReceiptInfoSingleLegacy message, length delimited. Does not implicitly {@link whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy.verify|verify} messages.
             * @param message ReceiptInfoSingleLegacy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: whatsappbackup.ReceiptInfo.IReceiptInfoSingleLegacy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReceiptInfoSingleLegacy message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReceiptInfoSingleLegacy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy;

            /**
             * Decodes a ReceiptInfoSingleLegacy message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReceiptInfoSingleLegacy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy;

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
            public static fromObject(object: { [k: string]: any }): whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy;

            /**
             * Creates a plain object from a ReceiptInfoSingleLegacy message. Also converts values to other types if specified.
             * @param message ReceiptInfoSingleLegacy
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: whatsappbackup.ReceiptInfo.ReceiptInfoSingleLegacy, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** ReceiptInfoSingle phoneNumber */
            phoneNumber?: (Uint8Array|null);

            /** ReceiptInfoSingle offsetReceivedTimestamp */
            offsetReceivedTimestamp?: (number|null);

            /** ReceiptInfoSingle offsetReadTimestamp */
            offsetReadTimestamp?: (number|null);

            /** ReceiptInfoSingle unknownOnlyOnce */
            unknownOnlyOnce?: (number|null);

            /** ReceiptInfoSingle unknownThingOne */
            unknownThingOne?: (whatsappbackup.ReceiptInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing[]|null);

            /** ReceiptInfoSingle unknownThingTwo */
            unknownThingTwo?: (whatsappbackup.ReceiptInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing[]|null);
        }

        /** Represents a ReceiptInfoSingle. */
        class ReceiptInfoSingle implements IReceiptInfoSingle {

            /**
             * Constructs a new ReceiptInfoSingle.
             * @param [properties] Properties to set
             */
            constructor(properties?: whatsappbackup.ReceiptInfo.IReceiptInfoSingle);

            /** ReceiptInfoSingle phoneNumber. */
            public phoneNumber?: (Uint8Array|null);

            /** ReceiptInfoSingle offsetReceivedTimestamp. */
            public offsetReceivedTimestamp?: (number|null);

            /** ReceiptInfoSingle offsetReadTimestamp. */
            public offsetReadTimestamp?: (number|null);

            /** ReceiptInfoSingle unknownOnlyOnce. */
            public unknownOnlyOnce?: (number|null);

            /** ReceiptInfoSingle unknownThingOne. */
            public unknownThingOne: whatsappbackup.ReceiptInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing[];

            /** ReceiptInfoSingle unknownThingTwo. */
            public unknownThingTwo: whatsappbackup.ReceiptInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing[];

            /** ReceiptInfoSingle _phoneNumber. */
            public _phoneNumber?: "phoneNumber";

            /** ReceiptInfoSingle _offsetReceivedTimestamp. */
            public _offsetReceivedTimestamp?: "offsetReceivedTimestamp";

            /** ReceiptInfoSingle _offsetReadTimestamp. */
            public _offsetReadTimestamp?: "offsetReadTimestamp";

            /** ReceiptInfoSingle _unknownOnlyOnce. */
            public _unknownOnlyOnce?: "unknownOnlyOnce";

            /**
             * Creates a new ReceiptInfoSingle instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReceiptInfoSingle instance
             */
            public static create(properties?: whatsappbackup.ReceiptInfo.IReceiptInfoSingle): whatsappbackup.ReceiptInfo.ReceiptInfoSingle;

            /**
             * Encodes the specified ReceiptInfoSingle message. Does not implicitly {@link whatsappbackup.ReceiptInfo.ReceiptInfoSingle.verify|verify} messages.
             * @param message ReceiptInfoSingle message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: whatsappbackup.ReceiptInfo.IReceiptInfoSingle, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReceiptInfoSingle message, length delimited. Does not implicitly {@link whatsappbackup.ReceiptInfo.ReceiptInfoSingle.verify|verify} messages.
             * @param message ReceiptInfoSingle message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: whatsappbackup.ReceiptInfo.IReceiptInfoSingle, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReceiptInfoSingle message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReceiptInfoSingle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whatsappbackup.ReceiptInfo.ReceiptInfoSingle;

            /**
             * Decodes a ReceiptInfoSingle message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReceiptInfoSingle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): whatsappbackup.ReceiptInfo.ReceiptInfoSingle;

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
            public static fromObject(object: { [k: string]: any }): whatsappbackup.ReceiptInfo.ReceiptInfoSingle;

            /**
             * Creates a plain object from a ReceiptInfoSingle message. Also converts values to other types if specified.
             * @param message ReceiptInfoSingle
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: whatsappbackup.ReceiptInfo.ReceiptInfoSingle, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                constructor(properties?: whatsappbackup.ReceiptInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing);

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
                public static create(properties?: whatsappbackup.ReceiptInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing): whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing;

                /**
                 * Encodes the specified ReceiptInfoSingleUnkownThing message. Does not implicitly {@link whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.verify|verify} messages.
                 * @param message ReceiptInfoSingleUnkownThing message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: whatsappbackup.ReceiptInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReceiptInfoSingleUnkownThing message, length delimited. Does not implicitly {@link whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing.verify|verify} messages.
                 * @param message ReceiptInfoSingleUnkownThing message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: whatsappbackup.ReceiptInfo.ReceiptInfoSingle.IReceiptInfoSingleUnkownThing, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReceiptInfoSingleUnkownThing message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReceiptInfoSingleUnkownThing
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing;

                /**
                 * Decodes a ReceiptInfoSingleUnkownThing message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReceiptInfoSingleUnkownThing
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing;

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
                public static fromObject(object: { [k: string]: any }): whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing;

                /**
                 * Creates a plain object from a ReceiptInfoSingleUnkownThing message. Also converts values to other types if specified.
                 * @param message ReceiptInfoSingleUnkownThing
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: whatsappbackup.ReceiptInfo.ReceiptInfoSingle.ReceiptInfoSingleUnkownThing, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    }
}
