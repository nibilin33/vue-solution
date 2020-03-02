const db = require('./db.js');
const express = require('express')
const router = express.Router()
module.exports = (app) => {
    app.use('/api',router);
}
router.post('/v1/enterprise',(req, res)=>{
    res.send('success');
});