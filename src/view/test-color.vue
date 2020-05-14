<template>
    <div>
        <h1 class="font-color">测试多彩</h1>
        <bz></bz>
    </div>
</template>
<script>
import bz from '../components/b.vue';
export default {
    components:{
        bz
    },
    data(){
        return {
            name:'colorful',
            color:true,
        }
    },
    created() {
    },
    mounted(){
    }
}
</script>