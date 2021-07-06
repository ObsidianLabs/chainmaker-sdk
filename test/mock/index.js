/*
 Copyright (C) BABEC. All rights reserved.
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const path = require('path');
const PROTO_PATH = path.join(__dirname, './rpc_node.proto');
const grpc = require('grpc');
const utils = require('../../src/utils');
const proto = grpc.load(PROTO_PATH);
const certMgr = require('./certMgr');

const getOutput = (payload) => {
  switch (payload.contractName) {
    case 'SYSTEM_CONTRACT_CERT_MANAGE':
      return certMgr.getoutPut(payload.method);
  }
};

const SendRequest = (call, callback) => {
  console.log(call);
  let payload;
  let output;
  switch (call.request.header.tx_type) {
    case 'QUERY_SYSTEM_CONTRACT': {
      payload = utils.common.QueryPayload.deserializeBinary(call.request.payload).toObject();
      output = getOutput(payload);
      break;
    }
  }
  console.log(payload);
  callback(null, output);
};

const server = new grpc.Server();

const credentials = grpc.ServerCredentials.createInsecure();

server.addService(proto.api.RpcNode.service, { SendRequest });
server.bind('0.0.0.0:50051', credentials);
server.start();
console.info('GRPC server started at port 50051');
