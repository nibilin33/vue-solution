
const ztree = require('./ztree.js');
module.exports = class vue{
    constructor(){
        this.ztree = new ztree(this);
    }
    log(str) {
        console.log(str);
    }
    dir(str) {
        this.ztree.use(str);
    }
}