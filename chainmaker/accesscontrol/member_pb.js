// source: accesscontrol/member.proto
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

goog.exportSymbol('proto.accesscontrol.Member', null, global);
goog.exportSymbol('proto.accesscontrol.MemberAndExtraData', null, global);
goog.exportSymbol('proto.accesscontrol.MemberExtraData', null, global);
goog.exportSymbol('proto.accesscontrol.MemberStatus', null, global);
goog.exportSymbol('proto.accesscontrol.MemberType', null, global);
goog.exportSymbol('proto.accesscontrol.VerifyType', null, global);
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
proto.accesscontrol.Member = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accesscontrol.Member, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accesscontrol.Member.displayName = 'proto.accesscontrol.Member';
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
proto.accesscontrol.MemberExtraData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accesscontrol.MemberExtraData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accesscontrol.MemberExtraData.displayName = 'proto.accesscontrol.MemberExtraData';
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
proto.accesscontrol.MemberAndExtraData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accesscontrol.MemberAndExtraData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accesscontrol.MemberAndExtraData.displayName = 'proto.accesscontrol.MemberAndExtraData';
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
proto.accesscontrol.Member.prototype.toObject = function(opt_includeInstance) {
  return proto.accesscontrol.Member.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accesscontrol.Member} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accesscontrol.Member.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    memberType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    memberInfo: msg.getMemberInfo_asB64()
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
 * @return {!proto.accesscontrol.Member}
 */
proto.accesscontrol.Member.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accesscontrol.Member;
  return proto.accesscontrol.Member.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accesscontrol.Member} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accesscontrol.Member}
 */
proto.accesscontrol.Member.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = /** @type {!proto.accesscontrol.MemberType} */ (reader.readEnum());
      msg.setMemberType(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMemberInfo(value);
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
proto.accesscontrol.Member.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accesscontrol.Member.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accesscontrol.Member} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accesscontrol.Member.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMemberType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMemberInfo_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.accesscontrol.Member.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accesscontrol.Member} returns this
 */
proto.accesscontrol.Member.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional MemberType member_type = 2;
 * @return {!proto.accesscontrol.MemberType}
 */
proto.accesscontrol.Member.prototype.getMemberType = function() {
  return /** @type {!proto.accesscontrol.MemberType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.accesscontrol.MemberType} value
 * @return {!proto.accesscontrol.Member} returns this
 */
proto.accesscontrol.Member.prototype.setMemberType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bytes member_info = 3;
 * @return {!(string|Uint8Array)}
 */
proto.accesscontrol.Member.prototype.getMemberInfo = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes member_info = 3;
 * This is a type-conversion wrapper around `getMemberInfo()`
 * @return {string}
 */
proto.accesscontrol.Member.prototype.getMemberInfo_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMemberInfo()));
};


/**
 * optional bytes member_info = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMemberInfo()`
 * @return {!Uint8Array}
 */
proto.accesscontrol.Member.prototype.getMemberInfo_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMemberInfo()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.accesscontrol.Member} returns this
 */
proto.accesscontrol.Member.prototype.setMemberInfo = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
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
proto.accesscontrol.MemberExtraData.prototype.toObject = function(opt_includeInstance) {
  return proto.accesscontrol.MemberExtraData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accesscontrol.MemberExtraData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accesscontrol.MemberExtraData.toObject = function(includeInstance, msg) {
  var f, obj = {
    sequence: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.accesscontrol.MemberExtraData}
 */
proto.accesscontrol.MemberExtraData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accesscontrol.MemberExtraData;
  return proto.accesscontrol.MemberExtraData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accesscontrol.MemberExtraData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accesscontrol.MemberExtraData}
 */
proto.accesscontrol.MemberExtraData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
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
proto.accesscontrol.MemberExtraData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accesscontrol.MemberExtraData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accesscontrol.MemberExtraData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accesscontrol.MemberExtraData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 sequence = 1;
 * @return {number}
 */
proto.accesscontrol.MemberExtraData.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.accesscontrol.MemberExtraData} returns this
 */
proto.accesscontrol.MemberExtraData.prototype.setSequence = function(value) {
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
proto.accesscontrol.MemberAndExtraData.prototype.toObject = function(opt_includeInstance) {
  return proto.accesscontrol.MemberAndExtraData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accesscontrol.MemberAndExtraData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accesscontrol.MemberAndExtraData.toObject = function(includeInstance, msg) {
  var f, obj = {
    member: (f = msg.getMember()) && proto.accesscontrol.Member.toObject(includeInstance, f),
    extraData: (f = msg.getExtraData()) && proto.accesscontrol.MemberExtraData.toObject(includeInstance, f)
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
 * @return {!proto.accesscontrol.MemberAndExtraData}
 */
proto.accesscontrol.MemberAndExtraData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accesscontrol.MemberAndExtraData;
  return proto.accesscontrol.MemberAndExtraData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accesscontrol.MemberAndExtraData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accesscontrol.MemberAndExtraData}
 */
proto.accesscontrol.MemberAndExtraData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.accesscontrol.Member;
      reader.readMessage(value,proto.accesscontrol.Member.deserializeBinaryFromReader);
      msg.setMember(value);
      break;
    case 2:
      var value = new proto.accesscontrol.MemberExtraData;
      reader.readMessage(value,proto.accesscontrol.MemberExtraData.deserializeBinaryFromReader);
      msg.setExtraData(value);
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
proto.accesscontrol.MemberAndExtraData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accesscontrol.MemberAndExtraData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accesscontrol.MemberAndExtraData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accesscontrol.MemberAndExtraData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMember();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.accesscontrol.Member.serializeBinaryToWriter
    );
  }
  f = message.getExtraData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.accesscontrol.MemberExtraData.serializeBinaryToWriter
    );
  }
};


/**
 * optional Member member = 1;
 * @return {?proto.accesscontrol.Member}
 */
proto.accesscontrol.MemberAndExtraData.prototype.getMember = function() {
  return /** @type{?proto.accesscontrol.Member} */ (
    jspb.Message.getWrapperField(this, proto.accesscontrol.Member, 1));
};


/**
 * @param {?proto.accesscontrol.Member|undefined} value
 * @return {!proto.accesscontrol.MemberAndExtraData} returns this
*/
proto.accesscontrol.MemberAndExtraData.prototype.setMember = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.accesscontrol.MemberAndExtraData} returns this
 */
proto.accesscontrol.MemberAndExtraData.prototype.clearMember = function() {
  return this.setMember(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.accesscontrol.MemberAndExtraData.prototype.hasMember = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MemberExtraData extra_data = 2;
 * @return {?proto.accesscontrol.MemberExtraData}
 */
proto.accesscontrol.MemberAndExtraData.prototype.getExtraData = function() {
  return /** @type{?proto.accesscontrol.MemberExtraData} */ (
    jspb.Message.getWrapperField(this, proto.accesscontrol.MemberExtraData, 2));
};


/**
 * @param {?proto.accesscontrol.MemberExtraData|undefined} value
 * @return {!proto.accesscontrol.MemberAndExtraData} returns this
*/
proto.accesscontrol.MemberAndExtraData.prototype.setExtraData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.accesscontrol.MemberAndExtraData} returns this
 */
proto.accesscontrol.MemberAndExtraData.prototype.clearExtraData = function() {
  return this.setExtraData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.accesscontrol.MemberAndExtraData.prototype.hasExtraData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * @enum {number}
 */
proto.accesscontrol.MemberType = {
  CERT: 0,
  CERT_HASH: 1,
  PUBLIC_KEY: 2,
  DID: 3
};

/**
 * @enum {number}
 */
proto.accesscontrol.MemberStatus = {
  NORMAL: 0,
  INVALID: 1,
  REVOKED: 2,
  FROZEN: 3
};

/**
 * @enum {number}
 */
proto.accesscontrol.VerifyType = {
  CRL: 0
};

goog.object.extend(exports, proto.accesscontrol);
