// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Copyright (C) BABEC. All rights reserved.
//
// SPDX-License-Identifier: Apache-2.0
//
'use strict';
var grpc = require('grpc');
var common_request_pb = require('../common/request_pb.js');
var common_result_pb = require('../common/result_pb.js');
var config_local_config_pb = require('../config/local_config_pb.js');
var config_log_config_pb = require('../config/log_config_pb.js');
var config_chainmaker_server_pb = require('../config/chainmaker_server_pb.js');

function serialize_common_SubscribeResult(arg) {
  if (!(arg instanceof common_result_pb.SubscribeResult)) {
    throw new Error('Expected argument of type common.SubscribeResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_common_SubscribeResult(buffer_arg) {
  return common_result_pb.SubscribeResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_common_TxRequest(arg) {
  if (!(arg instanceof common_request_pb.TxRequest)) {
    throw new Error('Expected argument of type common.TxRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_common_TxRequest(buffer_arg) {
  return common_request_pb.TxRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_common_TxResponse(arg) {
  if (!(arg instanceof common_result_pb.TxResponse)) {
    throw new Error('Expected argument of type common.TxResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_common_TxResponse(buffer_arg) {
  return common_result_pb.TxResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_config_ChainMakerVersionRequest(arg) {
  if (!(arg instanceof config_chainmaker_server_pb.ChainMakerVersionRequest)) {
    throw new Error('Expected argument of type config.ChainMakerVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_config_ChainMakerVersionRequest(buffer_arg) {
  return config_chainmaker_server_pb.ChainMakerVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_config_ChainMakerVersionResponse(arg) {
  if (!(arg instanceof config_chainmaker_server_pb.ChainMakerVersionResponse)) {
    throw new Error('Expected argument of type config.ChainMakerVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_config_ChainMakerVersionResponse(buffer_arg) {
  return config_chainmaker_server_pb.ChainMakerVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_config_CheckNewBlockChainConfigRequest(arg) {
  if (!(arg instanceof config_local_config_pb.CheckNewBlockChainConfigRequest)) {
    throw new Error('Expected argument of type config.CheckNewBlockChainConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_config_CheckNewBlockChainConfigRequest(buffer_arg) {
  return config_local_config_pb.CheckNewBlockChainConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_config_CheckNewBlockChainConfigResponse(arg) {
  if (!(arg instanceof config_local_config_pb.CheckNewBlockChainConfigResponse)) {
    throw new Error('Expected argument of type config.CheckNewBlockChainConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_config_CheckNewBlockChainConfigResponse(buffer_arg) {
  return config_local_config_pb.CheckNewBlockChainConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_config_DebugConfigRequest(arg) {
  if (!(arg instanceof config_local_config_pb.DebugConfigRequest)) {
    throw new Error('Expected argument of type config.DebugConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_config_DebugConfigRequest(buffer_arg) {
  return config_local_config_pb.DebugConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_config_DebugConfigResponse(arg) {
  if (!(arg instanceof config_local_config_pb.DebugConfigResponse)) {
    throw new Error('Expected argument of type config.DebugConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_config_DebugConfigResponse(buffer_arg) {
  return config_local_config_pb.DebugConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_config_LogLevelsRequest(arg) {
  if (!(arg instanceof config_log_config_pb.LogLevelsRequest)) {
    throw new Error('Expected argument of type config.LogLevelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_config_LogLevelsRequest(buffer_arg) {
  return config_log_config_pb.LogLevelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_config_LogLevelsResponse(arg) {
  if (!(arg instanceof config_log_config_pb.LogLevelsResponse)) {
    throw new Error('Expected argument of type config.LogLevelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_config_LogLevelsResponse(buffer_arg) {
  return config_log_config_pb.LogLevelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// rpcNnode is the server API for
var RpcNodeService = exports.RpcNodeService = {
  // processing transaction message requests
sendRequest: {
    path: '/api.RpcNode/SendRequest',
    requestStream: false,
    responseStream: false,
    requestType: common_request_pb.TxRequest,
    responseType: common_result_pb.TxResponse,
    requestSerialize: serialize_common_TxRequest,
    requestDeserialize: deserialize_common_TxRequest,
    responseSerialize: serialize_common_TxResponse,
    responseDeserialize: deserialize_common_TxResponse,
  },
  // processing requests for message subscription
subscribe: {
    path: '/api.RpcNode/Subscribe',
    requestStream: false,
    responseStream: true,
    requestType: common_request_pb.TxRequest,
    responseType: common_result_pb.SubscribeResult,
    requestSerialize: serialize_common_TxRequest,
    requestDeserialize: deserialize_common_TxRequest,
    responseSerialize: serialize_common_SubscribeResult,
    responseDeserialize: deserialize_common_SubscribeResult,
  },
  // update debug status (development debugging)
updateDebugConfig: {
    path: '/api.RpcNode/UpdateDebugConfig',
    requestStream: false,
    responseStream: false,
    requestType: config_local_config_pb.DebugConfigRequest,
    responseType: config_local_config_pb.DebugConfigResponse,
    requestSerialize: serialize_config_DebugConfigRequest,
    requestDeserialize: deserialize_config_DebugConfigRequest,
    responseSerialize: serialize_config_DebugConfigResponse,
    responseDeserialize: deserialize_config_DebugConfigResponse,
  },
  // refreshLogLevelsConfig
refreshLogLevelsConfig: {
    path: '/api.RpcNode/RefreshLogLevelsConfig',
    requestStream: false,
    responseStream: false,
    requestType: config_log_config_pb.LogLevelsRequest,
    responseType: config_log_config_pb.LogLevelsResponse,
    requestSerialize: serialize_config_LogLevelsRequest,
    requestDeserialize: deserialize_config_LogLevelsRequest,
    responseSerialize: serialize_config_LogLevelsResponse,
    responseDeserialize: deserialize_config_LogLevelsResponse,
  },
  // get chainmaker version
getChainMakerVersion: {
    path: '/api.RpcNode/GetChainMakerVersion',
    requestStream: false,
    responseStream: false,
    requestType: config_chainmaker_server_pb.ChainMakerVersionRequest,
    responseType: config_chainmaker_server_pb.ChainMakerVersionResponse,
    requestSerialize: serialize_config_ChainMakerVersionRequest,
    requestDeserialize: deserialize_config_ChainMakerVersionRequest,
    responseSerialize: serialize_config_ChainMakerVersionResponse,
    responseDeserialize: deserialize_config_ChainMakerVersionResponse,
  },
  // check chain configuration and load new chain dynamically
checkNewBlockChainConfig: {
    path: '/api.RpcNode/CheckNewBlockChainConfig',
    requestStream: false,
    responseStream: false,
    requestType: config_local_config_pb.CheckNewBlockChainConfigRequest,
    responseType: config_local_config_pb.CheckNewBlockChainConfigResponse,
    requestSerialize: serialize_config_CheckNewBlockChainConfigRequest,
    requestDeserialize: deserialize_config_CheckNewBlockChainConfigRequest,
    responseSerialize: serialize_config_CheckNewBlockChainConfigResponse,
    responseDeserialize: deserialize_config_CheckNewBlockChainConfigResponse,
  },
};

exports.RpcNodeClient = grpc.makeGenericClientConstructor(RpcNodeService);
