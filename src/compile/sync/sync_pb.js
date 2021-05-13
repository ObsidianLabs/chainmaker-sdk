// source: sync/sync.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var common_block_pb = require('../common/block_pb.js');
goog.object.extend(proto, common_block_pb);
goog.exportSymbol('proto.sync.BlockBatch', null, global);
goog.exportSymbol('proto.sync.BlockHeightBCM', null, global);
goog.exportSymbol('proto.sync.BlockInfoBatch', null, global);
goog.exportSymbol('proto.sync.BlockSyncReq', null, global);
goog.exportSymbol('proto.sync.SyncBlockBatch', null, global);
goog.exportSymbol('proto.sync.SyncBlockBatch.DataCase', null, global);
goog.exportSymbol('proto.sync.SyncMsg', null, global);
goog.exportSymbol('proto.sync.SyncMsg.MsgType', null, global);
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
proto.sync.SyncMsg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sync.SyncMsg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sync.SyncMsg.displayName = 'proto.sync.SyncMsg';
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
proto.sync.BlockHeightBCM = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sync.BlockHeightBCM, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sync.BlockHeightBCM.displayName = 'proto.sync.BlockHeightBCM';
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
proto.sync.BlockSyncReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sync.BlockSyncReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sync.BlockSyncReq.displayName = 'proto.sync.BlockSyncReq';
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
proto.sync.BlockBatch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sync.BlockBatch.repeatedFields_, null);
};
goog.inherits(proto.sync.BlockBatch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sync.BlockBatch.displayName = 'proto.sync.BlockBatch';
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
proto.sync.BlockInfoBatch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sync.BlockInfoBatch.repeatedFields_, null);
};
goog.inherits(proto.sync.BlockInfoBatch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sync.BlockInfoBatch.displayName = 'proto.sync.BlockInfoBatch';
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
proto.sync.SyncBlockBatch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sync.SyncBlockBatch.oneofGroups_);
};
goog.inherits(proto.sync.SyncBlockBatch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sync.SyncBlockBatch.displayName = 'proto.sync.SyncBlockBatch';
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
proto.sync.SyncMsg.prototype.toObject = function(opt_includeInstance) {
  return proto.sync.SyncMsg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sync.SyncMsg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sync.SyncMsg.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    payload: msg.getPayload_asB64()
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
 * @return {!proto.sync.SyncMsg}
 */
proto.sync.SyncMsg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sync.SyncMsg;
  return proto.sync.SyncMsg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sync.SyncMsg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sync.SyncMsg}
 */
proto.sync.SyncMsg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sync.SyncMsg.MsgType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
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
proto.sync.SyncMsg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sync.SyncMsg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sync.SyncMsg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sync.SyncMsg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.sync.SyncMsg.MsgType = {
  NODE_STATUS_REQ: 0,
  NODE_STATUS_RESP: 1,
  BLOCK_SYNC_REQ: 2,
  BLOCK_SYNC_RESP: 3
};

/**
 * optional MsgType type = 1;
 * @return {!proto.sync.SyncMsg.MsgType}
 */
proto.sync.SyncMsg.prototype.getType = function() {
  return /** @type {!proto.sync.SyncMsg.MsgType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sync.SyncMsg.MsgType} value
 * @return {!proto.sync.SyncMsg} returns this
 */
proto.sync.SyncMsg.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bytes payload = 2;
 * @return {!(string|Uint8Array)}
 */
proto.sync.SyncMsg.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes payload = 2;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.sync.SyncMsg.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.sync.SyncMsg.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sync.SyncMsg} returns this
 */
proto.sync.SyncMsg.prototype.setPayload = function(value) {
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
proto.sync.BlockHeightBCM.prototype.toObject = function(opt_includeInstance) {
  return proto.sync.BlockHeightBCM.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sync.BlockHeightBCM} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sync.BlockHeightBCM.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockHeight: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.sync.BlockHeightBCM}
 */
proto.sync.BlockHeightBCM.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sync.BlockHeightBCM;
  return proto.sync.BlockHeightBCM.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sync.BlockHeightBCM} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sync.BlockHeightBCM}
 */
proto.sync.BlockHeightBCM.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBlockHeight(value);
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
proto.sync.BlockHeightBCM.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sync.BlockHeightBCM.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sync.BlockHeightBCM} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sync.BlockHeightBCM.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockHeight();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 block_height = 1;
 * @return {number}
 */
proto.sync.BlockHeightBCM.prototype.getBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sync.BlockHeightBCM} returns this
 */
proto.sync.BlockHeightBCM.prototype.setBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.sync.BlockSyncReq.prototype.toObject = function(opt_includeInstance) {
  return proto.sync.BlockSyncReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sync.BlockSyncReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sync.BlockSyncReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockHeight: jspb.Message.getFieldWithDefault(msg, 1, 0),
    batchsize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    withRwset: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.sync.BlockSyncReq}
 */
proto.sync.BlockSyncReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sync.BlockSyncReq;
  return proto.sync.BlockSyncReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sync.BlockSyncReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sync.BlockSyncReq}
 */
proto.sync.BlockSyncReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBlockHeight(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBatchsize(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithRwset(value);
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
proto.sync.BlockSyncReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sync.BlockSyncReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sync.BlockSyncReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sync.BlockSyncReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockHeight();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getBatchsize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getWithRwset();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional int64 block_height = 1;
 * @return {number}
 */
proto.sync.BlockSyncReq.prototype.getBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sync.BlockSyncReq} returns this
 */
proto.sync.BlockSyncReq.prototype.setBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 batchSize = 2;
 * @return {number}
 */
proto.sync.BlockSyncReq.prototype.getBatchsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sync.BlockSyncReq} returns this
 */
proto.sync.BlockSyncReq.prototype.setBatchsize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool with_rwset = 3;
 * @return {boolean}
 */
proto.sync.BlockSyncReq.prototype.getWithRwset = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sync.BlockSyncReq} returns this
 */
proto.sync.BlockSyncReq.prototype.setWithRwset = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sync.BlockBatch.repeatedFields_ = [1];



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
proto.sync.BlockBatch.prototype.toObject = function(opt_includeInstance) {
  return proto.sync.BlockBatch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sync.BlockBatch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sync.BlockBatch.toObject = function(includeInstance, msg) {
  var f, obj = {
    batchsList: jspb.Message.toObjectList(msg.getBatchsList(),
    common_block_pb.Block.toObject, includeInstance)
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
 * @return {!proto.sync.BlockBatch}
 */
proto.sync.BlockBatch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sync.BlockBatch;
  return proto.sync.BlockBatch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sync.BlockBatch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sync.BlockBatch}
 */
proto.sync.BlockBatch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_block_pb.Block;
      reader.readMessage(value,common_block_pb.Block.deserializeBinaryFromReader);
      msg.addBatchs(value);
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
proto.sync.BlockBatch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sync.BlockBatch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sync.BlockBatch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sync.BlockBatch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBatchsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      common_block_pb.Block.serializeBinaryToWriter
    );
  }
};


/**
 * repeated common.Block batchs = 1;
 * @return {!Array<!proto.common.Block>}
 */
proto.sync.BlockBatch.prototype.getBatchsList = function() {
  return /** @type{!Array<!proto.common.Block>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_block_pb.Block, 1));
};


/**
 * @param {!Array<!proto.common.Block>} value
 * @return {!proto.sync.BlockBatch} returns this
*/
proto.sync.BlockBatch.prototype.setBatchsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.common.Block=} opt_value
 * @param {number=} opt_index
 * @return {!proto.common.Block}
 */
proto.sync.BlockBatch.prototype.addBatchs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.common.Block, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sync.BlockBatch} returns this
 */
proto.sync.BlockBatch.prototype.clearBatchsList = function() {
  return this.setBatchsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sync.BlockInfoBatch.repeatedFields_ = [1];



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
proto.sync.BlockInfoBatch.prototype.toObject = function(opt_includeInstance) {
  return proto.sync.BlockInfoBatch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sync.BlockInfoBatch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sync.BlockInfoBatch.toObject = function(includeInstance, msg) {
  var f, obj = {
    batchList: jspb.Message.toObjectList(msg.getBatchList(),
    common_block_pb.BlockInfo.toObject, includeInstance)
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
 * @return {!proto.sync.BlockInfoBatch}
 */
proto.sync.BlockInfoBatch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sync.BlockInfoBatch;
  return proto.sync.BlockInfoBatch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sync.BlockInfoBatch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sync.BlockInfoBatch}
 */
proto.sync.BlockInfoBatch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_block_pb.BlockInfo;
      reader.readMessage(value,common_block_pb.BlockInfo.deserializeBinaryFromReader);
      msg.addBatch(value);
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
proto.sync.BlockInfoBatch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sync.BlockInfoBatch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sync.BlockInfoBatch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sync.BlockInfoBatch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBatchList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      common_block_pb.BlockInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated common.BlockInfo batch = 1;
 * @return {!Array<!proto.common.BlockInfo>}
 */
proto.sync.BlockInfoBatch.prototype.getBatchList = function() {
  return /** @type{!Array<!proto.common.BlockInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_block_pb.BlockInfo, 1));
};


/**
 * @param {!Array<!proto.common.BlockInfo>} value
 * @return {!proto.sync.BlockInfoBatch} returns this
*/
proto.sync.BlockInfoBatch.prototype.setBatchList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.common.BlockInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.common.BlockInfo}
 */
proto.sync.BlockInfoBatch.prototype.addBatch = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.common.BlockInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sync.BlockInfoBatch} returns this
 */
proto.sync.BlockInfoBatch.prototype.clearBatchList = function() {
  return this.setBatchList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sync.SyncBlockBatch.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.sync.SyncBlockBatch.DataCase = {
  DATA_NOT_SET: 0,
  BLOCK_BATCH: 1,
  BLOCKINFO_BATCH: 2
};

/**
 * @return {proto.sync.SyncBlockBatch.DataCase}
 */
proto.sync.SyncBlockBatch.prototype.getDataCase = function() {
  return /** @type {proto.sync.SyncBlockBatch.DataCase} */(jspb.Message.computeOneofCase(this, proto.sync.SyncBlockBatch.oneofGroups_[0]));
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
proto.sync.SyncBlockBatch.prototype.toObject = function(opt_includeInstance) {
  return proto.sync.SyncBlockBatch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sync.SyncBlockBatch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sync.SyncBlockBatch.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockBatch: (f = msg.getBlockBatch()) && proto.sync.BlockBatch.toObject(includeInstance, f),
    blockinfoBatch: (f = msg.getBlockinfoBatch()) && proto.sync.BlockInfoBatch.toObject(includeInstance, f)
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
 * @return {!proto.sync.SyncBlockBatch}
 */
proto.sync.SyncBlockBatch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sync.SyncBlockBatch;
  return proto.sync.SyncBlockBatch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sync.SyncBlockBatch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sync.SyncBlockBatch}
 */
proto.sync.SyncBlockBatch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sync.BlockBatch;
      reader.readMessage(value,proto.sync.BlockBatch.deserializeBinaryFromReader);
      msg.setBlockBatch(value);
      break;
    case 2:
      var value = new proto.sync.BlockInfoBatch;
      reader.readMessage(value,proto.sync.BlockInfoBatch.deserializeBinaryFromReader);
      msg.setBlockinfoBatch(value);
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
proto.sync.SyncBlockBatch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sync.SyncBlockBatch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sync.SyncBlockBatch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sync.SyncBlockBatch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockBatch();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sync.BlockBatch.serializeBinaryToWriter
    );
  }
  f = message.getBlockinfoBatch();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sync.BlockInfoBatch.serializeBinaryToWriter
    );
  }
};


/**
 * optional BlockBatch block_batch = 1;
 * @return {?proto.sync.BlockBatch}
 */
proto.sync.SyncBlockBatch.prototype.getBlockBatch = function() {
  return /** @type{?proto.sync.BlockBatch} */ (
    jspb.Message.getWrapperField(this, proto.sync.BlockBatch, 1));
};


/**
 * @param {?proto.sync.BlockBatch|undefined} value
 * @return {!proto.sync.SyncBlockBatch} returns this
*/
proto.sync.SyncBlockBatch.prototype.setBlockBatch = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.sync.SyncBlockBatch.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sync.SyncBlockBatch} returns this
 */
proto.sync.SyncBlockBatch.prototype.clearBlockBatch = function() {
  return this.setBlockBatch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sync.SyncBlockBatch.prototype.hasBlockBatch = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BlockInfoBatch blockinfo_batch = 2;
 * @return {?proto.sync.BlockInfoBatch}
 */
proto.sync.SyncBlockBatch.prototype.getBlockinfoBatch = function() {
  return /** @type{?proto.sync.BlockInfoBatch} */ (
    jspb.Message.getWrapperField(this, proto.sync.BlockInfoBatch, 2));
};


/**
 * @param {?proto.sync.BlockInfoBatch|undefined} value
 * @return {!proto.sync.SyncBlockBatch} returns this
*/
proto.sync.SyncBlockBatch.prototype.setBlockinfoBatch = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.sync.SyncBlockBatch.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sync.SyncBlockBatch} returns this
 */
proto.sync.SyncBlockBatch.prototype.clearBlockinfoBatch = function() {
  return this.setBlockinfoBatch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sync.SyncBlockBatch.prototype.hasBlockinfoBatch = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.sync);
