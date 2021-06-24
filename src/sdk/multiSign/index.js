/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const utils  = require('../../utils');
const cv = require('../../utils/constValue');

class MultiSign {
  constructor(chainConfig, chainID, userInfo, node) {
    this.chainConfig = chainConfig;
    this.node = node;
    this.userInfo = userInfo;
    this.chainID = chainID;
  }

  signMultiSignPayload(payload, userInfo) {
    const payloadBytes = payload.serializeBinary();

    /* 2. sign payload */
    const signedData = utils.signDataSha256(payloadBytes, userInfo.userSignKeyBytes);

    /* isFullCert default to true for the time being */
    const sender = utils.newSender(userInfo.orgID, userInfo.userSignCertBytes, true);

    const entry = new utils.common.EndorsementEntry();
    entry.setSigner(sender);
    entry.setSignature(signedData);
  }

  createMultiSignReqPayload(txType, payloadBytes, endorsementEntry, deadlineBlockHeight) {
    const voteInfo = utils.common.MultiSignVoteInfo();
    voteInfo.setVote(utils.common.VoteStatus_AGREE);
    voteInfo.setEndorsement(endorsementEntry);
    const params = {
      tx_type: txType,
      deadline_block: `${deadlineBlockHeight}`,
      payload: payloadBytes.toSting('hex'),
      vote_info: voteInfo.serializeBinary().toSting('hex'),
    };
    return this.createSystemContractPayload({
      params,
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_MULTI_SIGN),
      method: utils.enum2str(utils.common.MultiSignFunction, utils.common.MultiSignFunction.REQ),
      sequence: cv.DEFAULT_SEQUENCE,
    });
  }

  async sendMultiSignReq(txType, payloadBytes, endorsementEntry, deadlineBlockHeight) {
    const payload  = await this.createMultiSignReqPayload(txType, payloadBytes, endorsementEntry, deadlineBlockHeight);
    return this.sendPayload(payload, utils.common.TxType.INVOKE_SYSTEM_CONTRACT);
  }

  async sendMultiSignVote() {}
  async queryMultiSignResult() {}

  async createSystemContractPayload({ contractName, method, params, sequence }) {
    const payload = new utils.common.SystemContractPayload();

    payload.setChainId(this.chainID);
    payload.setContractName(contractName);
    payload.setMethod(method);
    Object.keys(params).forEach((key) => {
      const param = new utils.common.KeyValuePair();
      param.setKey(key);
      if (params[key] !== '') param.setValue(params[key]);
      payload.addParameters(param);
    });

    payload.setSequence(sequence);
    return payload.serializeBinary();
  }

  // return promise
  async sendPayload(payloadBytes, txType, srcRes = false) {
    const txId = utils.newTxID();
    const request = utils.newRequest(
      txId,
      this.chainID,
      txType,
      this.userInfo.orgID,
      this.userInfo.userSignCertBytes,
      this.userInfo.isFullCert,
      payloadBytes,
      this.userInfo.userSignKeyBytes,
    );
    // console.log(JSON.stringify(request.toObject(), null, 4));
    const result = await this.node.sendRequest(request, srcRes);
    return { txId, result };
  }
}

module.exports = MultiSign;
