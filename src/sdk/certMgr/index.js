/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const utils  = require('../../utils');
const cv = require('../../utils/constValue');
const _ = require('loadsh');

class CertMgr {
  constructor(chainConfig, chainID, userInfo, node) {
    this.chainConfig = chainConfig;
    this.node = node;
    this.userInfo = userInfo;
    this.chainID = chainID;
  }

  async getCertHash() {
    const chainConfig = await this.chainConfig.getChainConfig();
    const hashType = chainConfig.result.crypto.hash;

    return utils.getCertHash(this.userInfo.userSignCertBytes, hashType);
  }

  async addCert() {
    const certHash = await this.getCertHash();
    const payload = await this.createSystemContractPayload({
      chainID: '',
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_CERT_MANAGE),
      method: utils.enum2str(utils.common.CertManageFunction, utils.common.CertManageFunction.CERT_ADD),
      params: {},
    });
    const response = await this.sendPayload(payload.serializeBinary(), utils.common.TxType.INVOKE_SYSTEM_CONTRACT);
    response.ContractResult = {
      Code: utils.common.ContractResultCode.OK,
      Message: `${utils.common.ContractResultCode.OK}`,
      Result: certHash,
    };
    return response;
  }

  async queryCert(certHashes) {
    if (!Array.isArray(certHashes)) throw new Error('[certHashes] mast be array');
    const payloadBytes = this.createQueryPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_CERT_MANAGE),
      method: utils.enum2str(utils.common.CertManageFunction, utils.common.CertManageFunction.CERTS_QUERY),
      params: {
        cert_hashes: certHashes.join(','),
      },
    });
    const response = await this.sendPayload(
      payloadBytes,
      utils.common.TxType.QUERY_SYSTEM_CONTRACT,
      cv.NEED_SRC_RESPONSE,
    );
    response.result = utils.common.CertInfos.deserializeBinary(response.result).toObject();
    return response;
  }

  async deleteCert(certHashes) {
    if (!Array.isArray(certHashes)) throw new Error('[certHashes] mast be array');
    const payload = await this.createSystemContractPayload({
      chainID: '',
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_CERT_MANAGE),
      method: utils.enum2str(utils.common.CertManageFunction, utils.common.CertManageFunction.CERTS_DELETE),
      params: {
        cert_hashes: certHashes.join(','),
      },
    });
    const response = await this.sendPayload(payload.serializeBinary(), utils.common.TxType.INVOKE_SYSTEM_CONTRACT);

    response.ContractResult = {
      Code: utils.common.ContractResultCode.OK,
      Message: `${utils.common.ContractResultCode.OK}`,
    };
    return response;
  }

  async createCertManagePayload(method, params) {
    const payload = await this.createSystemContractPayload({
      method,
      params,
      chainID: this.chainID,
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_CERT_MANAGE),
      noSequence: true,
    });
    return payload;
  }

  createCertManageFrozenPayload(certs) {
    return this.createCertManagePayload(
      utils.enum2str(utils.common.CertManageFunction, utils.common.CertManageFunction.CERTS_FREEZE),
      {
        certs: certs.join(','),
      },
    );
  }

  async certManageFrozen(certs) {
    const payload = await this.createCertManageFrozenPayload(certs);
    const signPayloadBytes = await this.signCertManagePayload(payload);
    return this.sendCertManageRequest(signPayloadBytes);
  }

  createCertManageUnfrozenPayload(certs) {
    return this.createCertManagePayload(
      utils.enum2str(utils.common.CertManageFunction, utils.common.CertManageFunction.CERTS_UNFREEZE),
      {
        certs: certs.join(','),
      },
    );
  }

  async certManageUnfrozen(certs) {
    const payload = await this.createCertManageUnfrozenPayload(certs);
    const signPayloadBytes = await this.signCertManagePayload(payload);
    return this.sendCertManageRequest(signPayloadBytes);
  }

  createCertManageRevocationPayload(certCrl) {
    return this.createCertManagePayload(
      utils.enum2str(utils.common.CertManageFunction, utils.common.CertManageFunction.CERTS_REVOKE),
      {
        cert_crl: certCrl,
      },
    );
  }

  async certManageRevoke(certCrl) {
    const payload = await this.createCertManageRevocationPayload(certCrl);
    const signPayloadBytes = await this.signCertManagePayload(payload);
    return this.sendCertManageRequest(signPayloadBytes);
  }

  // userInfoList: class orgInfo list
  signCertManagePayload(payload) {
    const signedPayloadBytesArray = [];
    const userInfoList = [this.userInfo];
    for (let i = 0; i < userInfoList.length; i++) {
      signedPayloadBytesArray.push(utils.signPayload(
        _.cloneDeep(payload), userInfoList[i].userSignKeyBytes,
        userInfoList[i].userSignCertBytes, userInfoList[i].orgID,
      ));
    }
    return signedPayloadBytesArray[0];
  }

  mergeCertManageSignedPayload(signedPayloadBytesArray) {
    if (!Array.isArray(signedPayloadBytesArray)) {
      throw new Error('[signedPayloadBytesArray] mast be array');
    }
    let mergedPayload = utils.mergeContractMgmtPayload(signedPayloadBytesArray, utils.common.SystemContractPayload);
    mergedPayload = mergedPayload.serializeBinary();
    return mergedPayload;
  }

  sendCertManageRequest(payloadBytes, srcRes = false, withSyncResult = false) {
    return this.sendPayload(payloadBytes, utils.common.TxType.INVOKE_SYSTEM_CONTRACT, srcRes, withSyncResult);
  }

  createQueryPayload({ contractName, method, params }) {
    const payload = new utils.common.QueryPayload();
    payload.setContractName(contractName);
    payload.setMethod(method);
    Object.keys(params).forEach((key) => {
      const param = new utils.common.KeyValuePair();
      param.setKey(key);
      param.setValue(params[key]);
      payload.addParameters(param);
    });
    // console.log(JSON.stringify(payload.toObject(), 4, null));
    const payloadBytes = payload.serializeBinary();
    return payloadBytes;
  }

  async createSystemContractPayload({ chainID, contractName, method, params, noSequence }) {
    const payload = new utils.common.SystemContractPayload();

    payload.setChainId(chainID);
    payload.setContractName(contractName);
    payload.setMethod(method);
    Object.keys(params).forEach((key) => {
      const param = new utils.common.KeyValuePair();
      param.setKey(key);
      if (params[key] !== '') param.setValue(params[key]);
      payload.addParameters(param);
    });

    if (!noSequence) {
      let sequence = await this.chainConfig.getChainConfigSequence();
      sequence = parseInt(sequence, 10) + 1;
      payload.setSequence(sequence);
    }
    return payload;
  }

  // return promise
  async sendPayload(payloadBytes, txType, srcRes = false, withSyncResult = false) {
    const result = this.node.sendPayload(this.userInfo, this.chainID, payloadBytes, txType, srcRes);
    if (withSyncResult) {
      const res = await this.callSystemContract.getSyncResult(result.txId);
      result.result.contractResult = res;
      return result;
    }
  }
}

module.exports = CertMgr;
