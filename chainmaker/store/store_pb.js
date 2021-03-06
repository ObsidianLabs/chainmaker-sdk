// source: store/store.proto
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

var common_block_pb = require('../common/block_pb.js');
goog.object.extend(proto, common_block_pb);
var common_rwset_pb = require('../common/rwset_pb.js');
goog.object.extend(proto, common_rwset_pb);
var common_result_pb = require('../common/result_pb.js');
goog.object.extend(proto, common_result_pb);
goog.exportSymbol('proto.store.BlockWithRWSet', null, global);
goog.exportSymbol('proto.store.DbType', null, global);
goog.exportSymbol('proto.store.SerializedBlock', null, global);
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
proto.store.SerializedBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.store.SerializedBlock.repeatedFields_, null);
};
goog.inherits(proto.store.SerializedBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.store.SerializedBlock.displayName = 'proto.store.SerializedBlock';
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
proto.store.BlockWithRWSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.store.BlockWithRWSet.repeatedFields_, null);
};
goog.inherits(proto.store.BlockWithRWSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.store.BlockWithRWSet.displayName = 'proto.store.BlockWithRWSet';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.store.SerializedBlock.repeatedFields_ = [3];



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
proto.store.SerializedBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.store.SerializedBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.store.SerializedBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.store.SerializedBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && common_block_pb.BlockHeader.toObject(includeInstance, f),
    dag: (f = msg.getDag()) && common_block_pb.DAG.toObject(includeInstance, f),
    txIdsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    additionalData: (f = msg.getAdditionalData()) && common_block_pb.AdditionalData.toObject(includeInstance, f)
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
 * @return {!proto.store.SerializedBlock}
 */
proto.store.SerializedBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.store.SerializedBlock;
  return proto.store.SerializedBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.store.SerializedBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.store.SerializedBlock}
 */
proto.store.SerializedBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_block_pb.BlockHeader;
      reader.readMessage(value,common_block_pb.BlockHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new common_block_pb.DAG;
      reader.readMessage(value,common_block_pb.DAG.deserializeBinaryFromReader);
      msg.setDag(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addTxIds(value);
      break;
    case 4:
      var value = new common_block_pb.AdditionalData;
      reader.readMessage(value,common_block_pb.AdditionalData.deserializeBinaryFromReader);
      msg.setAdditionalData(value);
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
proto.store.SerializedBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.store.SerializedBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.store.SerializedBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.store.SerializedBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_block_pb.BlockHeader.serializeBinaryToWriter
    );
  }
  f = message.getDag();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_block_pb.DAG.serializeBinaryToWriter
    );
  }
  f = message.getTxIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getAdditionalData();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_block_pb.AdditionalData.serializeBinaryToWriter
    );
  }
};


/**
 * optional common.BlockHeader header = 1;
 * @return {?proto.common.BlockHeader}
 */
proto.store.SerializedBlock.prototype.getHeader = function() {
  return /** @type{?proto.common.BlockHeader} */ (
    jspb.Message.getWrapperField(this, common_block_pb.BlockHeader, 1));
};


/**
 * @param {?proto.common.BlockHeader|undefined} value
 * @return {!proto.store.SerializedBlock} returns this
*/
proto.store.SerializedBlock.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.store.SerializedBlock} returns this
 */
proto.store.SerializedBlock.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.store.SerializedBlock.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional common.DAG dag = 2;
 * @return {?proto.common.DAG}
 */
proto.store.SerializedBlock.prototype.getDag = function() {
  return /** @type{?proto.common.DAG} */ (
    jspb.Message.getWrapperField(this, common_block_pb.DAG, 2));
};


/**
 * @param {?proto.common.DAG|undefined} value
 * @return {!proto.store.SerializedBlock} returns this
*/
proto.store.SerializedBlock.prototype.setDag = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.store.SerializedBlock} returns this
 */
proto.store.SerializedBlock.prototype.clearDag = function() {
  return this.setDag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.store.SerializedBlock.prototype.hasDag = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string tx_ids = 3;
 * @return {!Array<string>}
 */
proto.store.SerializedBlock.prototype.getTxIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.store.SerializedBlock} returns this
 */
proto.store.SerializedBlock.prototype.setTxIdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.store.SerializedBlock} returns this
 */
proto.store.SerializedBlock.prototype.addTxIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.store.SerializedBlock} returns this
 */
proto.store.SerializedBlock.prototype.clearTxIdsList = function() {
  return this.setTxIdsList([]);
};


/**
 * optional common.AdditionalData additional_data = 4;
 * @return {?proto.common.AdditionalData}
 */
proto.store.SerializedBlock.prototype.getAdditionalData = function() {
  return /** @type{?proto.common.AdditionalData} */ (
    jspb.Message.getWrapperField(this, common_block_pb.AdditionalData, 4));
};


/**
 * @param {?proto.common.AdditionalData|undefined} value
 * @return {!proto.store.SerializedBlock} returns this
*/
proto.store.SerializedBlock.prototype.setAdditionalData = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.store.SerializedBlock} returns this
 */
proto.store.SerializedBlock.prototype.clearAdditionalData = function() {
  return this.setAdditionalData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.store.SerializedBlock.prototype.hasAdditionalData = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.store.BlockWithRWSet.repeatedFields_ = [2,3];



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
proto.store.BlockWithRWSet.prototype.toObject = function(opt_includeInstance) {
  return proto.store.BlockWithRWSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.store.BlockWithRWSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.store.BlockWithRWSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    block: (f = msg.getBlock()) && common_block_pb.Block.toObject(includeInstance, f),
    txrwsetsList: jspb.Message.toObjectList(msg.getTxrwsetsList(),
    common_rwset_pb.TxRWSet.toObject, includeInstance),
    contractEventsList: jspb.Message.toObjectList(msg.getContractEventsList(),
    common_result_pb.ContractEvent.toObject, includeInstance)
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
 * @return {!proto.store.BlockWithRWSet}
 */
proto.store.BlockWithRWSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.store.BlockWithRWSet;
  return proto.store.BlockWithRWSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.store.BlockWithRWSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.store.BlockWithRWSet}
 */
proto.store.BlockWithRWSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_block_pb.Block;
      reader.readMessage(value,common_block_pb.Block.deserializeBinaryFromReader);
      msg.setBlock(value);
      break;
    case 2:
      var value = new common_rwset_pb.TxRWSet;
      reader.readMessage(value,common_rwset_pb.TxRWSet.deserializeBinaryFromReader);
      msg.addTxrwsets(value);
      break;
    case 3:
      var value = new common_result_pb.ContractEvent;
      reader.readMessage(value,common_result_pb.ContractEvent.deserializeBinaryFromReader);
      msg.addContractEvents(value);
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
proto.store.BlockWithRWSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.store.BlockWithRWSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.store.BlockWithRWSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.store.BlockWithRWSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_block_pb.Block.serializeBinaryToWriter
    );
  }
  f = message.getTxrwsetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_rwset_pb.TxRWSet.serializeBinaryToWriter
    );
  }
  f = message.getContractEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_result_pb.ContractEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional common.Block block = 1;
 * @return {?proto.common.Block}
 */
proto.store.BlockWithRWSet.prototype.getBlock = function() {
  return /** @type{?proto.common.Block} */ (
    jspb.Message.getWrapperField(this, common_block_pb.Block, 1));
};


/**
 * @param {?proto.common.Block|undefined} value
 * @return {!proto.store.BlockWithRWSet} returns this
*/
proto.store.BlockWithRWSet.prototype.setBlock = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.store.BlockWithRWSet} returns this
 */
proto.store.BlockWithRWSet.prototype.clearBlock = function() {
  return this.setBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.store.BlockWithRWSet.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated common.TxRWSet txRWSets = 2;
 * @return {!Array<!proto.common.TxRWSet>}
 */
proto.store.BlockWithRWSet.prototype.getTxrwsetsList = function() {
  return /** @type{!Array<!proto.common.TxRWSet>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_rwset_pb.TxRWSet, 2));
};


/**
 * @param {!Array<!proto.common.TxRWSet>} value
 * @return {!proto.store.BlockWithRWSet} returns this
*/
proto.store.BlockWithRWSet.prototype.setTxrwsetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.common.TxRWSet=} opt_value
 * @param {number=} opt_index
 * @return {!proto.common.TxRWSet}
 */
proto.store.BlockWithRWSet.prototype.addTxrwsets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.common.TxRWSet, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.store.BlockWithRWSet} returns this
 */
proto.store.BlockWithRWSet.prototype.clearTxrwsetsList = function() {
  return this.setTxrwsetsList([]);
};


/**
 * repeated common.ContractEvent contract_events = 3;
 * @return {!Array<!proto.common.ContractEvent>}
 */
proto.store.BlockWithRWSet.prototype.getContractEventsList = function() {
  return /** @type{!Array<!proto.common.ContractEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_result_pb.ContractEvent, 3));
};


/**
 * @param {!Array<!proto.common.ContractEvent>} value
 * @return {!proto.store.BlockWithRWSet} returns this
*/
proto.store.BlockWithRWSet.prototype.setContractEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.common.ContractEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.common.ContractEvent}
 */
proto.store.BlockWithRWSet.prototype.addContractEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.common.ContractEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.store.BlockWithRWSet} returns this
 */
proto.store.BlockWithRWSet.prototype.clearContractEventsList = function() {
  return this.setContractEventsList([]);
};


/**
 * @enum {number}
 */
proto.store.DbType = {
  INVALID_DB: 0,
  BLOCK_DB: 1,
  BLOCK_INDEX_DB: 2,
  TX_DB: 3,
  TX_INDEX_DB: 4,
  SOFT_DB: 5,
  STATE_DB: 6,
  READ_WRITE_DB: 7
};

goog.object.extend(exports, proto.store);
