const express = require('express');
const path = require('path');
const app = express();
const http =  require("http");
const logger = require('logger').createLogger('dev.log');

app.use(function(req, res, next) {
    console.log(req.url);
    logger.info(req.url);
    next();
});
app.use(express.static(path.join(__dirname,'dist')));
http.createServer(app).listen(3100, '0.0.0.0', function () {
    const host = this.address().address;
    const port = this.address().port;
    console.log('Service listening http at http://%s:%s', host, port);
});
