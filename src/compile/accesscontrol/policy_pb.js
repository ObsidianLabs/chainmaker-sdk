// source: accesscontrol/policy.proto
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

goog.exportSymbol('proto.accesscontrol.Policy', null, global);
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
proto.accesscontrol.Policy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.accesscontrol.Policy.repeatedFields_, null);
};
goog.inherits(proto.accesscontrol.Policy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.accesscontrol.Policy.displayName = 'proto.accesscontrol.Policy';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.accesscontrol.Policy.repeatedFields_ = [2,3];



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
proto.accesscontrol.Policy.prototype.toObject = function(opt_includeInstance) {
  return proto.accesscontrol.Policy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.accesscontrol.Policy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accesscontrol.Policy.toObject = function(includeInstance, msg) {
  var f, obj = {
    rule: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgListList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    roleListList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.accesscontrol.Policy}
 */
proto.accesscontrol.Policy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.accesscontrol.Policy;
  return proto.accesscontrol.Policy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.accesscontrol.Policy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.accesscontrol.Policy}
 */
proto.accesscontrol.Policy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRule(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addOrgList(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoleList(value);
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
proto.accesscontrol.Policy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.accesscontrol.Policy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.accesscontrol.Policy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.accesscontrol.Policy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRule();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrgListList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getRoleListList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string rule = 1;
 * @return {string}
 */
proto.accesscontrol.Policy.prototype.getRule = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.accesscontrol.Policy} returns this
 */
proto.accesscontrol.Policy.prototype.setRule = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string org_list = 2;
 * @return {!Array<string>}
 */
proto.accesscontrol.Policy.prototype.getOrgListList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.accesscontrol.Policy} returns this
 */
proto.accesscontrol.Policy.prototype.setOrgListList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.accesscontrol.Policy} returns this
 */
proto.accesscontrol.Policy.prototype.addOrgList = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accesscontrol.Policy} returns this
 */
proto.accesscontrol.Policy.prototype.clearOrgListList = function() {
  return this.setOrgListList([]);
};


/**
 * repeated string role_list = 3;
 * @return {!Array<string>}
 */
proto.accesscontrol.Policy.prototype.getRoleListList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.accesscontrol.Policy} returns this
 */
proto.accesscontrol.Policy.prototype.setRoleListList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.accesscontrol.Policy} returns this
 */
proto.accesscontrol.Policy.prototype.addRoleList = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.accesscontrol.Policy} returns this
 */
proto.accesscontrol.Policy.prototype.clearRoleListList = function() {
  return this.setRoleListList([]);
};


goog.object.extend(exports, proto.accesscontrol);
