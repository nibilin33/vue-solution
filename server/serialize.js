const express = require('express');
const router = express.Router();
const protoBuf = require('protobufjs');
const root = protoBuf.loadSync("./proto/message.proto");
const message = root.lookupType("user.Data");
module.exports = (app) => {
    app.use('/api',router);
}

router.post('/v1/json',(req, res)=>{
    var arr = [],chunks;
    var startTime = new Date().valueOf();
    req.on('data',buff=>{
        arr.push(buff);
    });
    req.on('end', () => {
        chunks = Buffer.concat(arr);
        var str = chunks.toString();
        var result = Object.assign({},JSON.parse(str));
        var endTime =  new Date().valueOf();
        result.endTime = endTime;
        result.startTime = startTime;
        res.send(result);
    });
   
});
router.post('/v1/proto',(req, res)=>{
    var arr = [],chunks;
    var startTime = new Date().valueOf();
    req.on('data',buff=>{
        arr.push(buff);
    });
    req.on('end', () => {
        chunks = new Uint8Array(Buffer.concat(arr));
        var result = Object.assign({},message.decode(chunks));
        var endTime =  new Date().valueOf();
        result.endTime = endTime;
        result.startTime = startTime;
        res.send(result);
    });
 
});