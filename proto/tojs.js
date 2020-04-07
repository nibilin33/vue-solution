var protobuf = require('protocol-buffers')
var fs = require('fs');
var js = protobuf.toJS(fs.readFileSync('message.proto'))
fs.writeFileSync('messages.js', js);