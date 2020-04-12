const express = require('express');
const router = express.Router();
const fs = require('fs');
let tmpList = [];
const writefile = ()=>{
    if(fs.existsSync('./user.json')) {
        fs.appendFileSync(JSON.stringify(tmpList));
        tmpList = [];
        return;
    }
    fs.writeFileSync('./user.json',JSON.stringify(tmpList));
    tmpList = [];
}
module.exports = (app) => {
    app.use('/api',router);
}
router.post('/v1/clear/add',(req, res)=>{
    let arr = [],chunks;
    try {
        req.on('data',buff=>{
            arr.push(buff);
        });
        req.on('end', () => {
            chunks = Buffer.concat(arr);
            var str = chunks.toString();
            var list = Object.assign({},JSON.parse(str));
            if(list.items && list.items.length) {
                tmpList = tmpList.concat(list.items);
            }
            console.log(tmpList.length);
            res.send('success'); 
        });
 
    } catch (error) {
        res.send('fail');
        writefile();
    }

});
router.get('/v1/clear/end',(req,res)=>{
    writefile();
    res.send('success');
});