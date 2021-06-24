#!/bin/bash

SHELL_FOLDER=$(cd "$(dirname "$0")";pwd)

mocha -t 100000 $SHELL_FOLDER/userContructMgr.js
mocha -t 100000 $SHELL_FOLDER/systemContract.js
mocha -t 100000 $SHELL_FOLDER/chainConfig.js
mocha -t 100000 $SHELL_FOLDER/certMgr.js
mocha -t 100000 $SHELL_FOLDER/certCompression.js
mocha -t 100000 $SHELL_FOLDER/subscribe.js

# need run
# ./cmc archive dump --type=mysql --dest=root:123456:127.0.0.1:3306 --target=10 --blocks=2 \
#     --chain-id=chain1 \
#     --sdk-conf-path=/Users/chengliang/go/src/chainmaker.org/chainmaker/sdk-go/testdata/sdk_config.yml \
#     --secret-key=123456
# mocha -t archive