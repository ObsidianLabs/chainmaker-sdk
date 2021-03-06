// source: common/request.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var accesscontrol_member_pb = require('../accesscontrol/member_pb.js');
goog.object.extend(proto, accesscontrol_member_pb);
goog.exportSymbol('proto.common.EndorsementEntry', null, global);
goog.exportSymbol('proto.common.KeyValuePair', null, global);
goog.exportSymbol('proto.common.Payload', null, global);
goog.exportSymbol('proto.common.TxRequest', null, global);
goog.exportSymbol('proto.common.TxType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.common.TxRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.common.TxRequest.repeatedFields_, null);
};
goog.inherits(proto.common.TxRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.common.TxRequest.displayName = 'proto.common.TxRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.common.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.common.Payload.repeatedFields_, null);
};
goog.inherits(proto.common.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.common.Payload.displayName = 'proto.common.Payload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.common.EndorsementEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.common.EndorsementEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.common.EndorsementEntry.displayName = 'proto.common.EndorsementEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.common.KeyValuePair = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.common.KeyValuePair, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.common.KeyValuePair.displayName = 'proto.common.KeyValuePair';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.common.TxRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.common.TxRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.common.TxRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.TxRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.TxRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: (f = msg.getPayload()) && proto.common.Payload.toObject(includeInstance, f),
    sender: (f = msg.getSender()) && proto.common.EndorsementEntry.toObject(includeInstance, f),
    endorsersList: jspb.Message.toObjectList(msg.getEndorsersList(),
    proto.common.EndorsementEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.common.TxRequest}
 */
proto.common.TxRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.TxRequest;
  return proto.common.TxRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.TxRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.TxRequest}
 */
proto.common.TxRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.common.Payload;
      reader.readMessage(value,proto.common.Payload.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    case 2:
      var value = new proto.common.EndorsementEntry;
      reader.readMessage(value,proto.common.EndorsementEntry.deserializeBinaryFromReader);
      msg.setSender(value);
      break;
    case 3:
      var value = new proto.common.EndorsementEntry;
      reader.readMessage(value,proto.common.EndorsementEntry.deserializeBinaryFromReader);
      msg.addEndorsers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.common.TxRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.common.TxRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.common.TxRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.TxRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.common.Payload.serializeBinaryToWriter
    );
  }
  f = message.getSender();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.common.EndorsementEntry.serializeBinaryToWriter
    );
  }
  f = message.getEndorsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.common.EndorsementEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional Payload payload = 1;
 * @return {?proto.common.Payload}
 */
proto.common.TxRequest.prototype.getPayload = function() {
  return /** @type{?proto.common.Payload} */ (
    jspb.Message.getWrapperField(this, proto.common.Payload, 1));
};


/**
 * @param {?proto.common.Payload|undefined} value
 * @return {!proto.common.TxRequest} returns this
*/
proto.common.TxRequest.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.common.TxRequest} returns this
 */
proto.common.TxRequest.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.common.TxRequest.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional EndorsementEntry sender = 2;
 * @return {?proto.common.EndorsementEntry}
 */
proto.common.TxRequest.prototype.getSender = function() {
  return /** @type{?proto.common.EndorsementEntry} */ (
    jspb.Message.getWrapperField(this, proto.common.EndorsementEntry, 2));
};


/**
 * @param {?proto.common.EndorsementEntry|undefined} value
 * @return {!proto.common.TxRequest} returns this
*/
proto.common.TxRequest.prototype.setSender = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.common.TxRequest} returns this
 */
proto.common.TxRequest.prototype.clearSender = function() {
  return this.setSender(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.common.TxRequest.prototype.hasSender = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated EndorsementEntry endorsers = 3;
 * @return {!Array<!proto.common.EndorsementEntry>}
 */
proto.common.TxRequest.prototype.getEndorsersList = function() {
  return /** @type{!Array<!proto.common.EndorsementEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.common.EndorsementEntry, 3));
};


/**
 * @param {!Array<!proto.common.EndorsementEntry>} value
 * @return {!proto.common.TxRequest} returns this
*/
proto.common.TxRequest.prototype.setEndorsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.common.EndorsementEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.common.EndorsementEntry}
 */
proto.common.TxRequest.prototype.addEndorsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.common.EndorsementEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.common.TxRequest} returns this
 */
proto.common.TxRequest.prototype.clearEndorsersList = function() {
  return this.setEndorsersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.common.Payload.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.common.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.common.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    txType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    txId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 4, 0),
    expirationTime: jspb.Message.getFieldWithDefault(msg, 5, 0),
    contractName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    method: jspb.Message.getFieldWithDefault(msg, 7, ""),
    parametersList: jspb.Message.toObjectList(msg.getParametersList(),
    proto.common.KeyValuePair.toObject, includeInstance),
    sequence: jspb.Message.getFieldWithDefault(msg, 9, 0),
    limit: msg.getLimit_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.common.Payload}
 */
proto.common.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.Payload;
  return proto.common.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.Payload}
 */
proto.common.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainId(value);
      break;
    case 2:
      var value = /** @type {!proto.common.TxType} */ (reader.readEnum());
      msg.setTxType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpirationTime(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethod(value);
      break;
    case 8:
      var value = new proto.common.KeyValuePair;
      reader.readMessage(value,proto.common.KeyValuePair.deserializeBinaryFromReader);
      msg.addParameters(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
      break;
    case 10:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.common.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.common.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.common.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTxType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTxId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getExpirationTime();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getContractName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMethod();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.common.KeyValuePair.serializeBinaryToWriter
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getLimit_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      10,
      f
    );
  }
};


/**
 * optional string chain_id = 1;
 * @return {string}
 */
proto.common.Payload.prototype.getChainId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.common.Payload} returns this
 */
proto.common.Payload.prototype.setChainId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TxType tx_type = 2;
 * @return {!proto.common.TxType}
 */
proto.common.Payload.prototype.getTxType = function() {
  return /** @type {!proto.common.TxType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.common.TxType} value
 * @return {!proto.common.Payload} returns this
 */
proto.common.Payload.prototype.setTxType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string tx_id = 3;
 * @return {string}
 */
proto.common.Payload.prototype.getTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.common.Payload} returns this
 */
proto.common.Payload.prototype.setTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 timestamp = 4;
 * @return {number}
 */
proto.common.Payload.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.common.Payload} returns this
 */
proto.common.Payload.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 expiration_time = 5;
 * @return {number}
 */
proto.common.Payload.prototype.getExpirationTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.common.Payload} returns this
 */
proto.common.Payload.prototype.setExpirationTime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string contract_name = 6;
 * @return {string}
 */
proto.common.Payload.prototype.getContractName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.common.Payload} returns this
 */
proto.common.Payload.prototype.setContractName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string method = 7;
 * @return {string}
 */
proto.common.Payload.prototype.getMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.common.Payload} returns this
 */
proto.common.Payload.prototype.setMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated KeyValuePair parameters = 8;
 * @return {!Array<!proto.common.KeyValuePair>}
 */
proto.common.Payload.prototype.getParametersList = function() {
  return /** @type{!Array<!proto.common.KeyValuePair>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.common.KeyValuePair, 8));
};


/**
 * @param {!Array<!proto.common.KeyValuePair>} value
 * @return {!proto.common.Payload} returns this
*/
proto.common.Payload.prototype.setParametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.common.KeyValuePair=} opt_value
 * @param {number=} opt_index
 * @return {!proto.common.KeyValuePair}
 */
proto.common.Payload.prototype.addParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.common.KeyValuePair, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.common.Payload} returns this
 */
proto.common.Payload.prototype.clearParametersList = function() {
  return this.setParametersList([]);
};


/**
 * optional uint64 sequence = 9;
 * @return {number}
 */
proto.common.Payload.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.common.Payload} returns this
 */
proto.common.Payload.prototype.setSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional bytes limit = 10;
 * @return {!(string|Uint8Array)}
 */
proto.common.Payload.prototype.getLimit = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * optional bytes limit = 10;
 * This is a type-conversion wrapper around `getLimit()`
 * @return {string}
 */
proto.common.Payload.prototype.getLimit_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getLimit()));
};


/**
 * optional bytes limit = 10;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getLimit()`
 * @return {!Uint8Array}
 */
proto.common.Payload.prototype.getLimit_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getLimit()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.common.Payload} returns this
 */
proto.common.Payload.prototype.setLimit = function(value) {
  return jspb.Message.setProto3BytesField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.common.EndorsementEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.common.EndorsementEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.EndorsementEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.EndorsementEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    signer: (f = msg.getSigner()) && accesscontrol_member_pb.Member.toObject(includeInstance, f),
    signature: msg.getSignature_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.common.EndorsementEntry}
 */
proto.common.EndorsementEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.EndorsementEntry;
  return proto.common.EndorsementEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.EndorsementEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.EndorsementEntry}
 */
proto.common.EndorsementEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new accesscontrol_member_pb.Member;
      reader.readMessage(value,accesscontrol_member_pb.Member.deserializeBinaryFromReader);
      msg.setSigner(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.common.EndorsementEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.common.EndorsementEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.common.EndorsementEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.EndorsementEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSigner();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      accesscontrol_member_pb.Member.serializeBinaryToWriter
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional accesscontrol.Member signer = 1;
 * @return {?proto.accesscontrol.Member}
 */
proto.common.EndorsementEntry.prototype.getSigner = function() {
  return /** @type{?proto.accesscontrol.Member} */ (
    jspb.Message.getWrapperField(this, accesscontrol_member_pb.Member, 1));
};


/**
 * @param {?proto.accesscontrol.Member|undefined} value
 * @return {!proto.common.EndorsementEntry} returns this
*/
proto.common.EndorsementEntry.prototype.setSigner = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.common.EndorsementEntry} returns this
 */
proto.common.EndorsementEntry.prototype.clearSigner = function() {
  return this.setSigner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.common.EndorsementEntry.prototype.hasSigner = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes signature = 2;
 * @return {!(string|Uint8Array)}
 */
proto.common.EndorsementEntry.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes signature = 2;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.common.EndorsementEntry.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.common.EndorsementEntry.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.common.EndorsementEntry} returns this
 */
proto.common.EndorsementEntry.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.common.KeyValuePair.prototype.toObject = function(opt_includeInstance) {
  return proto.common.KeyValuePair.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.KeyValuePair} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.KeyValuePair.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: msg.getValue_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.common.KeyValuePair}
 */
proto.common.KeyValuePair.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.KeyValuePair;
  return proto.common.KeyValuePair.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.KeyValuePair} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.KeyValuePair}
 */
proto.common.KeyValuePair.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.common.KeyValuePair.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.common.KeyValuePair.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.common.KeyValuePair} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.KeyValuePair.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.common.KeyValuePair.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.common.KeyValuePair} returns this
 */
proto.common.KeyValuePair.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes value = 2;
 * @return {!(string|Uint8Array)}
 */
proto.common.KeyValuePair.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes value = 2;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.common.KeyValuePair.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.common.KeyValuePair.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.common.KeyValuePair} returns this
 */
proto.common.KeyValuePair.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.common.TxType = {
  INVOKE_CONTRACT: 0,
  QUERY_CONTRACT: 1,
  SUBSCRIBE: 2,
  ARCHIVE: 3
};

goog.object.extend(exports, proto.common);
