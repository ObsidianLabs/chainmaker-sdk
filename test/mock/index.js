const { createMockServer } = require('grpc-mock');
const path = require('path');
const mockServer = createMockServer({
  protoPath: path.join(__dirname, '../../proto/api/rpc_node.proto'),
  packageName: 'api',
  serviceName: 'RpcNode',
  rules: [
    { method: 'SendRequest', input: { message: 'test' }, output: { message: 'Hello' } },
    { method: 'goodbye', input: '.*', output: { message: 'Goodbye' } },

    {
      method: 'howAreYou',
      streamType: 'client',
      stream: [
        { input: { message: 'Hi' } },
        { input: { message: 'How are you?' } },
      ],
      output: { message: 'I\'m fine, thank you' },
    },

    {
      method: 'niceToMeetYou',
      streamType: 'server',
      stream: [
        { output: { message: 'Hi, I\'m Sana' } },
        { output: { message: 'Nice to meet you too' } },
      ],
      input: { message: 'Hi. I\'m John. Nice to meet you' },
    },

    {
      method: 'chat',
      streamType: 'mutual',
      stream: [
        { input: { message: 'Hi' }, output: { message: 'Hi there' } },
        { input: { message: 'How are you?' }, output: { message: 'I\'m fine, thank you.' } },
      ],
    },

    { method: 'returnsError', input: { }, error: { code: 3, message: 'Message text is required' } },

    {
      method: 'returnsErrorWithMetadata',
      streamType: 'server',
      input: { },
      error: { code: 3, message: 'Message text is required', metadata: { key: 'value' } },
    },
  ],
});
mockServer.listen('0.0.0.0:50051');
