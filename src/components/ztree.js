window.ztree = {
    name:'ztree',
}
export default class Ztree{
    constructor(ct) {
        this.vue = ct;
        this.instance = window.ztree;
    }
    show() {
        return this.vue.list;
    }
}