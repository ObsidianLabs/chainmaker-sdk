/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */

// init contract
// INIT_CONTRACT = 0;
// upgrade contract
// UPGRADE_CONTRACT = 1;
// freeze  contract
// FREEZE_CONTRACT = 2;
// unfreezing contract
// UNFREEZE_CONTRACT = 3;
// Revocation of contract
// REVOKE_CONTRACT = 4;
const userContractMgrMethod = [0, 1, 2, 3, 4];

// INVALID = 0;
// native implement in chainmaker-go
// NATIVE = 1;
// vm-wasmer, language-c++
// WASMER = 2;
// vm-wxvm, language-cpp
// WXVM = 3;
// wasm interpreter in go
// GASM = 4;
// vm-evm
// EVM = 5;
// vm-docker, language-golang
// DOCKER_GO = 6;
// vm-docker, language-java
// DOCKER_JAVA = 7;
const runtimeType = [0, 1, 2, 3, 4, 5, 6, 7];

const NEED_SRC_RESPONSE = true;

const DEFAULT_SEQUENCE = 0;

module.exports = {
  userContractMgrMethod, runtimeType, NEED_SRC_RESPONSE, DEFAULT_SEQUENCE,
};
