<template>
    <div>
        gc
        <agc ref="ztree"></agc>
        1. 切到GC，快照，切到离线，快照 --- 父组件被注销，但是子组件a 没有被注销：循环引用导致内存泄漏
        <br/>               
        2. 切到多彩，快照，切到离线，快照 --- 多彩组件被注销了,子组件也被注销了          

    </div>
</template>
<script>
import agc from '../components/a';
export default {
    components:{
        agc,
    },
    data(){
        return{
            name:'gc',
            gc:true,
        }
    },
    mounted(){
        console.log(this.$refs.ztree.ztree.show());
    },
    methods:{

    }
}
</script>