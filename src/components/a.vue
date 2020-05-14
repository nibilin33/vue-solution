<template>
    <div>ztree{{list}}</div>
</template>
<script>
import Ztree from './ztree';

export default {
    data(){
        return {
            ztree:null,
            list:{
                name:'dddd'
            }
        }
    },
    mounted(){
        this.ztree = new Ztree(this);
    },
    methods:{
    }
}
</script>