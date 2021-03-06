// source: common/contract.proto
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
goog.exportSymbol('proto.common.Contract', null, global);
goog.exportSymbol('proto.common.ContractStatus', null, global);
goog.exportSymbol('proto.common.RuntimeType', null, global);
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
proto.common.Contract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.common.Contract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.common.Contract.displayName = 'proto.common.Contract';
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
proto.common.Contract.prototype.toObject = function(opt_includeInstance) {
  return proto.common.Contract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.Contract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.Contract.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, ""),
    runtimeType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0),
    creator: (f = msg.getCreator()) && accesscontrol_member_pb.Member.toObject(includeInstance, f)
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
 * @return {!proto.common.Contract}
 */
proto.common.Contract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.Contract;
  return proto.common.Contract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.Contract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.Contract}
 */
proto.common.Contract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {!proto.common.RuntimeType} */ (reader.readEnum());
      msg.setRuntimeType(value);
      break;
    case 4:
      var value = /** @type {!proto.common.ContractStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 5:
      var value = new accesscontrol_member_pb.Member;
      reader.readMessage(value,accesscontrol_member_pb.Member.deserializeBinaryFromReader);
      msg.setCreator(value);
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
proto.common.Contract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.common.Contract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.common.Contract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.Contract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRuntimeType();
  if (f !== 0.0) {
    writer.writeEnum(
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
  f = message.getCreator();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      accesscontrol_member_pb.Member.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.common.Contract.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.common.Contract} returns this
 */
proto.common.Contract.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.common.Contract.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.common.Contract} returns this
 */
proto.common.Contract.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional RuntimeType runtime_type = 3;
 * @return {!proto.common.RuntimeType}
 */
proto.common.Contract.prototype.getRuntimeType = function() {
  return /** @type {!proto.common.RuntimeType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.common.RuntimeType} value
 * @return {!proto.common.Contract} returns this
 */
proto.common.Contract.prototype.setRuntimeType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional ContractStatus status = 4;
 * @return {!proto.common.ContractStatus}
 */
proto.common.Contract.prototype.getStatus = function() {
  return /** @type {!proto.common.ContractStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.common.ContractStatus} value
 * @return {!proto.common.Contract} returns this
 */
proto.common.Contract.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional accesscontrol.Member creator = 5;
 * @return {?proto.accesscontrol.Member}
 */
proto.common.Contract.prototype.getCreator = function() {
  return /** @type{?proto.accesscontrol.Member} */ (
    jspb.Message.getWrapperField(this, accesscontrol_member_pb.Member, 5));
};


/**
 * @param {?proto.accesscontrol.Member|undefined} value
 * @return {!proto.common.Contract} returns this
*/
proto.common.Contract.prototype.setCreator = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.common.Contract} returns this
 */
proto.common.Contract.prototype.clearCreator = function() {
  return this.setCreator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.common.Contract.prototype.hasCreator = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * @enum {number}
 */
proto.common.RuntimeType = {
  INVALID: 0,
  NATIVE: 1,
  WASMER: 2,
  WXVM: 3,
  GASM: 4,
  EVM: 5,
  DOCKER_GO: 6,
  DOCKER_JAVA: 7
};

/**
 * @enum {number}
 */
proto.common.ContractStatus = {
  NORMAL: 0,
  FROZEN: 1,
  REVOKED: 2
};

goog.object.extend(exports, proto.common);
