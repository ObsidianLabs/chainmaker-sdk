// source: txpool/transaction_pool.proto
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

var common_transaction_pb = require('../common/transaction_pb.js');
goog.object.extend(proto, common_transaction_pb);
goog.exportSymbol('proto.txpool.SignalType', null, global);
goog.exportSymbol('proto.txpool.TxBatch', null, global);
goog.exportSymbol('proto.txpool.TxPoolSignal', null, global);
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
proto.txpool.TxPoolSignal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.txpool.TxPoolSignal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.txpool.TxPoolSignal.displayName = 'proto.txpool.TxPoolSignal';
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
proto.txpool.TxBatch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.txpool.TxBatch.repeatedFields_, null);
};
goog.inherits(proto.txpool.TxBatch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.txpool.TxBatch.displayName = 'proto.txpool.TxBatch';
}



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
proto.txpool.TxPoolSignal.prototype.toObject = function(opt_includeInstance) {
  return proto.txpool.TxPoolSignal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.txpool.TxPoolSignal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpool.TxPoolSignal.toObject = function(includeInstance, msg) {
  var f, obj = {
    signaltype: jspb.Message.getFieldWithDefault(msg, 2, 0),
    chainid: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.txpool.TxPoolSignal}
 */
proto.txpool.TxPoolSignal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.txpool.TxPoolSignal;
  return proto.txpool.TxPoolSignal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.txpool.TxPoolSignal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.txpool.TxPoolSignal}
 */
proto.txpool.TxPoolSignal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {!proto.txpool.SignalType} */ (reader.readEnum());
      msg.setSignaltype(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainid(value);
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
proto.txpool.TxPoolSignal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.txpool.TxPoolSignal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.txpool.TxPoolSignal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpool.TxPoolSignal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignaltype();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getChainid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional SignalType signalType = 2;
 * @return {!proto.txpool.SignalType}
 */
proto.txpool.TxPoolSignal.prototype.getSignaltype = function() {
  return /** @type {!proto.txpool.SignalType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.txpool.SignalType} value
 * @return {!proto.txpool.TxPoolSignal} returns this
 */
proto.txpool.TxPoolSignal.prototype.setSignaltype = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string chainId = 3;
 * @return {string}
 */
proto.txpool.TxPoolSignal.prototype.getChainid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.txpool.TxPoolSignal} returns this
 */
proto.txpool.TxPoolSignal.prototype.setChainid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.txpool.TxBatch.repeatedFields_ = [4];



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
proto.txpool.TxBatch.prototype.toObject = function(opt_includeInstance) {
  return proto.txpool.TxBatch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.txpool.TxBatch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpool.TxBatch.toObject = function(includeInstance, msg) {
  var f, obj = {
    batchid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nodeid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    size: jspb.Message.getFieldWithDefault(msg, 3, 0),
    txsList: jspb.Message.toObjectList(msg.getTxsList(),
    common_transaction_pb.Transaction.toObject, includeInstance),
    txidsmapMap: (f = msg.getTxidsmapMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.txpool.TxBatch}
 */
proto.txpool.TxBatch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.txpool.TxBatch;
  return proto.txpool.TxBatch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.txpool.TxBatch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.txpool.TxBatch}
 */
proto.txpool.TxBatch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBatchid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSize(value);
      break;
    case 4:
      var value = new common_transaction_pb.Transaction;
      reader.readMessage(value,common_transaction_pb.Transaction.deserializeBinaryFromReader);
      msg.addTxs(value);
      break;
    case 5:
      var value = msg.getTxidsmapMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32, null, "", 0);
         });
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
proto.txpool.TxBatch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.txpool.TxBatch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.txpool.TxBatch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpool.TxBatch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBatchid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getNodeid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTxsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      common_transaction_pb.Transaction.serializeBinaryToWriter
    );
  }
  f = message.getTxidsmapMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
};


/**
 * optional int32 batchId = 1;
 * @return {number}
 */
proto.txpool.TxBatch.prototype.getBatchid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.txpool.TxBatch} returns this
 */
proto.txpool.TxBatch.prototype.setBatchid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string nodeId = 2;
 * @return {string}
 */
proto.txpool.TxBatch.prototype.getNodeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.txpool.TxBatch} returns this
 */
proto.txpool.TxBatch.prototype.setNodeid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 size = 3;
 * @return {number}
 */
proto.txpool.TxBatch.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.txpool.TxBatch} returns this
 */
proto.txpool.TxBatch.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated common.Transaction txs = 4;
 * @return {!Array<!proto.common.Transaction>}
 */
proto.txpool.TxBatch.prototype.getTxsList = function() {
  return /** @type{!Array<!proto.common.Transaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_transaction_pb.Transaction, 4));
};


/**
 * @param {!Array<!proto.common.Transaction>} value
 * @return {!proto.txpool.TxBatch} returns this
*/
proto.txpool.TxBatch.prototype.setTxsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.common.Transaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.common.Transaction}
 */
proto.txpool.TxBatch.prototype.addTxs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.common.Transaction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.txpool.TxBatch} returns this
 */
proto.txpool.TxBatch.prototype.clearTxsList = function() {
  return this.setTxsList([]);
};


/**
 * map<string, int32> txIdsMap = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.txpool.TxBatch.prototype.getTxidsmapMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.txpool.TxBatch} returns this
 */
proto.txpool.TxBatch.prototype.clearTxidsmapMap = function() {
  this.getTxidsmapMap().clear();
  return this;};


/**
 * @enum {number}
 */
proto.txpool.SignalType = {
  NO_EVENT: 0,
  TRANSACTION_INCOME: 1,
  BLOCK_PROPOSE: 2
};

goog.object.extend(exports, proto.txpool);