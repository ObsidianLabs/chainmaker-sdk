// source: accesscontrol/member.proto
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

goog.exportSymbol('proto.accesscontrol.SerializedMember', null, global);
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
proto.accesscontrol.SerializedMember = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.accesscontrol.SerializedMember, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accesscontrol.SerializedMember.displayName = 'proto.accesscontrol.SerializedMember';
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
proto.accesscontrol.SerializedMember.prototype.toObject = function(opt_includeInstance) {
  return proto.accesscontrol.SerializedMember.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accesscontrol.SerializedMember} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accesscontrol.SerializedMember.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    memberInfo: msg.getMemberInfo_asB64(),
    isFullCert: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.accesscontrol.SerializedMember}
 */
proto.accesscontrol.SerializedMember.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accesscontrol.SerializedMember;
  return proto.accesscontrol.SerializedMember.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accesscontrol.SerializedMember} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accesscontrol.SerializedMember}
 */
proto.accesscontrol.SerializedMember.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMemberInfo(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFullCert(value);
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
proto.accesscontrol.SerializedMember.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accesscontrol.SerializedMember.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accesscontrol.SerializedMember} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accesscontrol.SerializedMember.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMemberInfo_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getIsFullCert();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.accesscontrol.SerializedMember.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accesscontrol.SerializedMember} returns this
 */
proto.accesscontrol.SerializedMember.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes member_info = 2;
 * @return {!(string|Uint8Array)}
 */
proto.accesscontrol.SerializedMember.prototype.getMemberInfo = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes member_info = 2;
 * This is a type-conversion wrapper around `getMemberInfo()`
 * @return {string}
 */
proto.accesscontrol.SerializedMember.prototype.getMemberInfo_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMemberInfo()));
};


/**
 * optional bytes member_info = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMemberInfo()`
 * @return {!Uint8Array}
 */
proto.accesscontrol.SerializedMember.prototype.getMemberInfo_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMemberInfo()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.accesscontrol.SerializedMember} returns this
 */
proto.accesscontrol.SerializedMember.prototype.setMemberInfo = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bool is_full_cert = 3;
 * @return {boolean}
 */
proto.accesscontrol.SerializedMember.prototype.getIsFullCert = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.accesscontrol.SerializedMember} returns this
 */
proto.accesscontrol.SerializedMember.prototype.setIsFullCert = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


goog.object.extend(exports, proto.accesscontrol);
