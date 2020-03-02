global.depand = 'window';
module.exports = class ztree{
    constructor(b){
        this.window = depand;
        this.fn = b;
    }
    log(str){
        console.log(str,this.window);
    }
    use(){
        this.fn.log('ztree 在使用');
    }
}