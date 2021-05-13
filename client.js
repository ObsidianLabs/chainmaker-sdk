
const protobuf = require("protobufjs");

var pbroot = new protobuf.Root();

pbroot.resolvePath = function(origin, target) {
    // console.log("org:[", origin, "] target:[", target, "]");
    if (origin.length > 0) {
        return "proto/" + target;
    }
    return protobuf.util.path.resolve(origin, target);
}

var chainmaker

async function encodeTestMessage(payload) {
    // const root = await protobuf.load({root: "proto", filename: "hello/hello.proto"});
    // const root = await protobuf.load(filename="proto/hello/hello.proto");
    chainmaker = await pbroot.load(filename=[
        "proto/common/block.proto",
        "proto/common/contract.proto",
        "proto/common/multi_sign.proto",
        "proto/common/request.proto",
        "proto/common/result.proto",
        "proto/common/rwset.proto",
        "proto/common/transaction.proto"
    ]);
    const txHeader = chainmaker.lookupType("common.TxHeader");

    const message = txHeader.create(payload);
    // console.log("txHeader", txHeader);
    var errMsg = txHeader.verify(message);
    console.log(errMsg);
    return txHeader.encode(message).finish();
}

async function decodeTestMessage(buffer) {
    const testMessage = chainmaker.lookupType("common.TxHeader");
    const err = testMessage.verify(buffer);
    if (err) {
        throw err;
    }
    const message = testMessage.decode(buffer);
    return testMessage.toObject(message);
}

async function testProtobuf() {
    const payload = { timestamp: Date.now() / 1000, chainId: "abc" };
    console.log("Test message:", payload);
    const buffer = await encodeTestMessage(payload);
    console.log(`Encoded message (${buffer.length} bytes): `, buffer.toString("hex"));
    const decodedMessage = await decodeTestMessage(buffer);
    console.log("Decoded test message:", decodedMessage);
}

testProtobuf();