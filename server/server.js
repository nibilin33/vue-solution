const express = require('express');
const path = require('path');
const app = express();
const http =  require("http");
const logger = require('logger').createLogger('dev.log');
const multer  = require('multer');
const fs = require('fs');
const runGulp = require('./build-task');
app.use(express.static(path.join(__dirname,'dist')));
app.use(express.static(path.join(__dirname,'output')));
require('./api')(app);
app.get('*',function(request, response) {
    try {
        response.sendFile(path.resolve('./dist/index.html'));
    }catch (e) {
        logger.error('sendFile error %s', e.toString());
    }
});
app.use(multer({ dest: 'output/'}).array('file'));
app.post('/file-upload', async function(req, res) {
    try {
        const files = req.files||[];
        const {entry} = req.body;
        files.forEach(async (file) => {
            const des_file = __dirname + "/output/";
            await fs.renameSync(des_file + file.filename, des_file + file.originalname);
        });
        const paths = await runGulp(`${__dirname}/output/${entry}`);
        let response = {
            message:paths,
            ret:1
        };
        res.end( JSON.stringify( response ) );
    } catch (error) {
        res.end('upload failed!');
    }
});
http.createServer(app).listen(3000, '0.0.0.0', function () {
    const host = this.address().address;
    const port = this.address().port;
    console.log('Service listening http at http://%s:%s', host, port);
});
