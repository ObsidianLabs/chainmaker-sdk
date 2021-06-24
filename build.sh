
#!/bin/bash

src_path=proto
# import_style= # import_style=commonjs,binary
import_style=import_style=commonjs,binary:
out_path=chainmaker

grpc_if=${src_path}/api/rpc_node.proto

function test() {
    try to fix `import clvs.serialize` issue
    sudo pip3 install git+https://github.com/greedo/python-xbrl.git
    
}
function gen_grpc_js() {
    node_modules/.bin/grpc_tools_node_protoc \
        -I=${src_path} \
        --js_out=${import_style}${out_path} \
        --grpc_out=generate_package_definition:${out_path} \
        ${grpc_if}

    # /Users/leo/weixin/chainmaker/js-sdk/node_modules/grpc-tools/bin/protoc \
    #     --plugin=protoc-gen-grpc=/Users/leo/weixin/chainmaker/js-sdk/node_modules/grpc-tools/bin/grpc_tools_node_protoc_plugin \
    #     -I=proto \
    #     --js_out=chainmaker \
    #     proto/api/rpc_node.proto
}

function gen_protoc_js() {
#   out_file=${@/$src_path/$out_path}
#   out_file=${out_file/"proto"/"js"}
#   out_file=`dirname $out_file`
  echo ${out_file}
    protoc \
        --proto_path=${src_path} \
        --js_out=import_style=commonjs,binary:${out_path} $@
}

function gen_proto_js_all() {
    find ${src_path} -type f -name "*.proto" | while IFS= read -r fname; do 
        gen_protoc_js $fname
    done
}

gen_proto_js_all
gen_grpc_js
