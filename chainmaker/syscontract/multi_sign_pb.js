// source: syscontract/multi_sign.proto
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

var common_request_pb = require('../common/request_pb.js');
goog.object.extend(proto, common_request_pb);
goog.exportSymbol('proto.syscontract.ContractStatus', null, global);
goog.exportSymbol('proto.syscontract.MultiQuery', null, global);
goog.exportSymbol('proto.syscontract.MultiQuery.Parameter', null, global);
goog.exportSymbol('proto.syscontract.MultiReq', null, global);
goog.exportSymbol('proto.syscontract.MultiReq.Parameter', null, global);
goog.exportSymbol('proto.syscontract.MultiSignFunction', null, global);
goog.exportSymbol('proto.syscontract.MultiSignInfo', null, global);
goog.exportSymbol('proto.syscontract.MultiSignStatus', null, global);
goog.exportSymbol('proto.syscontract.MultiSignVoteInfo', null, global);
goog.exportSymbol('proto.syscontract.MultiVote', null, global);
goog.exportSymbol('proto.syscontract.MultiVote.Parameter', null, global);
goog.exportSymbol('proto.syscontract.VoteStatus', null, global);
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
proto.syscontract.MultiSignInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.syscontract.MultiSignInfo.repeatedFields_, null);
};
goog.inherits(proto.syscontract.MultiSignInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.syscontract.MultiSignInfo.displayName = 'proto.syscontract.MultiSignInfo';
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
proto.syscontract.MultiSignVoteInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.syscontract.MultiSignVoteInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.syscontract.MultiSignVoteInfo.displayName = 'proto.syscontract.MultiSignVoteInfo';
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
proto.syscontract.MultiReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.syscontract.MultiReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.syscontract.MultiReq.displayName = 'proto.syscontract.MultiReq';
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
proto.syscontract.MultiVote = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.syscontract.MultiVote, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.syscontract.MultiVote.displayName = 'proto.syscontract.MultiVote';
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
proto.syscontract.MultiQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.syscontract.MultiQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.syscontract.MultiQuery.displayName = 'proto.syscontract.MultiQuery';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.syscontract.MultiSignInfo.repeatedFields_ = [5];



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
proto.syscontract.MultiSignInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.syscontract.MultiSignInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.syscontract.MultiSignInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.syscontract.MultiSignInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: (f = msg.getPayload()) && common_request_pb.Payload.toObject(includeInstance, f),
    contractName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    method: jspb.Message.getFieldWithDefault(msg, 3, ""),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0),
    voteInfosList: jspb.Message.toObjectList(msg.getVoteInfosList(),
    proto.syscontract.MultiSignVoteInfo.toObject, includeInstance)
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
 * @return {!proto.syscontract.MultiSignInfo}
 */
proto.syscontract.MultiSignInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.syscontract.MultiSignInfo;
  return proto.syscontract.MultiSignInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.syscontract.MultiSignInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.syscontract.MultiSignInfo}
 */
proto.syscontract.MultiSignInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_request_pb.Payload;
      reader.readMessage(value,common_request_pb.Payload.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethod(value);
      break;
    case 4:
      var value = /** @type {!proto.syscontract.MultiSignStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 5:
      var value = new proto.syscontract.MultiSignVoteInfo;
      reader.readMessage(value,proto.syscontract.MultiSignVoteInfo.deserializeBinaryFromReader);
      msg.addVoteInfos(value);
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
proto.syscontract.MultiSignInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.syscontract.MultiSignInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.syscontract.MultiSignInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.syscontract.MultiSignInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_request_pb.Payload.serializeBinaryToWriter
    );
  }
  f = message.getContractName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMethod();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getVoteInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.syscontract.MultiSignVoteInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional common.Payload payload = 1;
 * @return {?proto.common.Payload}
 */
proto.syscontract.MultiSignInfo.prototype.getPayload = function() {
  return /** @type{?proto.common.Payload} */ (
    jspb.Message.getWrapperField(this, common_request_pb.Payload, 1));
};


/**
 * @param {?proto.common.Payload|undefined} value
 * @return {!proto.syscontract.MultiSignInfo} returns this
*/
proto.syscontract.MultiSignInfo.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.syscontract.MultiSignInfo} returns this
 */
proto.syscontract.MultiSignInfo.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.syscontract.MultiSignInfo.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string contract_name = 2;
 * @return {string}
 */
proto.syscontract.MultiSignInfo.prototype.getContractName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.syscontract.MultiSignInfo} returns this
 */
proto.syscontract.MultiSignInfo.prototype.setContractName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string method = 3;
 * @return {string}
 */
proto.syscontract.MultiSignInfo.prototype.getMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.syscontract.MultiSignInfo} returns this
 */
proto.syscontract.MultiSignInfo.prototype.setMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional MultiSignStatus status = 4;
 * @return {!proto.syscontract.MultiSignStatus}
 */
proto.syscontract.MultiSignInfo.prototype.getStatus = function() {
  return /** @type {!proto.syscontract.MultiSignStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.syscontract.MultiSignStatus} value
 * @return {!proto.syscontract.MultiSignInfo} returns this
 */
proto.syscontract.MultiSignInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * repeated MultiSignVoteInfo vote_infos = 5;
 * @return {!Array<!proto.syscontract.MultiSignVoteInfo>}
 */
proto.syscontract.MultiSignInfo.prototype.getVoteInfosList = function() {
  return /** @type{!Array<!proto.syscontract.MultiSignVoteInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.syscontract.MultiSignVoteInfo, 5));
};


/**
 * @param {!Array<!proto.syscontract.MultiSignVoteInfo>} value
 * @return {!proto.syscontract.MultiSignInfo} returns this
*/
proto.syscontract.MultiSignInfo.prototype.setVoteInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.syscontract.MultiSignVoteInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.syscontract.MultiSignVoteInfo}
 */
proto.syscontract.MultiSignInfo.prototype.addVoteInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.syscontract.MultiSignVoteInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.syscontract.MultiSignInfo} returns this
 */
proto.syscontract.MultiSignInfo.prototype.clearVoteInfosList = function() {
  return this.setVoteInfosList([]);
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
proto.syscontract.MultiSignVoteInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.syscontract.MultiSignVoteInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.syscontract.MultiSignVoteInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.syscontract.MultiSignVoteInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    vote: jspb.Message.getFieldWithDefault(msg, 1, 0),
    endorsement: (f = msg.getEndorsement()) && common_request_pb.EndorsementEntry.toObject(includeInstance, f)
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
 * @return {!proto.syscontract.MultiSignVoteInfo}
 */
proto.syscontract.MultiSignVoteInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.syscontract.MultiSignVoteInfo;
  return proto.syscontract.MultiSignVoteInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.syscontract.MultiSignVoteInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.syscontract.MultiSignVoteInfo}
 */
proto.syscontract.MultiSignVoteInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.syscontract.VoteStatus} */ (reader.readEnum());
      msg.setVote(value);
      break;
    case 2:
      var value = new common_request_pb.EndorsementEntry;
      reader.readMessage(value,common_request_pb.EndorsementEntry.deserializeBinaryFromReader);
      msg.setEndorsement(value);
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
proto.syscontract.MultiSignVoteInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.syscontract.MultiSignVoteInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.syscontract.MultiSignVoteInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.syscontract.MultiSignVoteInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVote();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getEndorsement();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_request_pb.EndorsementEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional VoteStatus vote = 1;
 * @return {!proto.syscontract.VoteStatus}
 */
proto.syscontract.MultiSignVoteInfo.prototype.getVote = function() {
  return /** @type {!proto.syscontract.VoteStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.syscontract.VoteStatus} value
 * @return {!proto.syscontract.MultiSignVoteInfo} returns this
 */
proto.syscontract.MultiSignVoteInfo.prototype.setVote = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional common.EndorsementEntry endorsement = 2;
 * @return {?proto.common.EndorsementEntry}
 */
proto.syscontract.MultiSignVoteInfo.prototype.getEndorsement = function() {
  return /** @type{?proto.common.EndorsementEntry} */ (
    jspb.Message.getWrapperField(this, common_request_pb.EndorsementEntry, 2));
};


/**
 * @param {?proto.common.EndorsementEntry|undefined} value
 * @return {!proto.syscontract.MultiSignVoteInfo} returns this
*/
proto.syscontract.MultiSignVoteInfo.prototype.setEndorsement = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.syscontract.MultiSignVoteInfo} returns this
 */
proto.syscontract.MultiSignVoteInfo.prototype.clearEndorsement = function() {
  return this.setEndorsement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.syscontract.MultiSignVoteInfo.prototype.hasEndorsement = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.syscontract.MultiReq.prototype.toObject = function(opt_includeInstance) {
  return proto.syscontract.MultiReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.syscontract.MultiReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.syscontract.MultiReq.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.syscontract.MultiReq}
 */
proto.syscontract.MultiReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.syscontract.MultiReq;
  return proto.syscontract.MultiReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.syscontract.MultiReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.syscontract.MultiReq}
 */
proto.syscontract.MultiReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.syscontract.MultiReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.syscontract.MultiReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.syscontract.MultiReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.syscontract.MultiReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.syscontract.MultiReq.Parameter = {
  SYS_CONTRACT_NAME: 0,
  SYS_METHOD: 1
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
proto.syscontract.MultiVote.prototype.toObject = function(opt_includeInstance) {
  return proto.syscontract.MultiVote.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.syscontract.MultiVote} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.syscontract.MultiVote.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.syscontract.MultiVote}
 */
proto.syscontract.MultiVote.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.syscontract.MultiVote;
  return proto.syscontract.MultiVote.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.syscontract.MultiVote} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.syscontract.MultiVote}
 */
proto.syscontract.MultiVote.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.syscontract.MultiVote.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.syscontract.MultiVote.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.syscontract.MultiVote} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.syscontract.MultiVote.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.syscontract.MultiVote.Parameter = {
  VOTE_INFO: 0,
  TX_ID: 1
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
proto.syscontract.MultiQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.syscontract.MultiQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.syscontract.MultiQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.syscontract.MultiQuery.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.syscontract.MultiQuery}
 */
proto.syscontract.MultiQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.syscontract.MultiQuery;
  return proto.syscontract.MultiQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.syscontract.MultiQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.syscontract.MultiQuery}
 */
proto.syscontract.MultiQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.syscontract.MultiQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.syscontract.MultiQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.syscontract.MultiQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.syscontract.MultiQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.syscontract.MultiQuery.Parameter = {
  TX_ID: 0
};

/**
 * @enum {number}
 */
proto.syscontract.MultiSignFunction = {
  REQ: 0,
  VOTE: 1,
  QUERY: 2
};

/**
 * @enum {number}
 */
proto.syscontract.VoteStatus = {
  AGREE: 0,
  REJECT: 1
};

/**
 * @enum {number}
 */
proto.syscontract.MultiSignStatus = {
  PROCESSING: 0,
  ADOPTED: 1,
  REFUSED: 2,
  FAILED: 3
};

/**
 * @enum {number}
 */
proto.syscontract.ContractStatus = {
  NORMAL: 0,
  FROZEN: 1,
  REVOKED: 2
};

goog.object.extend(exports, proto.syscontract);
