<template>
    <div class="border">
        数据包：<br/>
        <p>{{sendData}}
        <p/>
        <el-form label-width="100" size="small">
            <el-form-item label="发送频率（次/秒）">
                <el-input-number v-model="num" :min="10" :max="2000"></el-input-number>
                <el-button type="primary" style="margin-left:5px;">发送</el-button>
            </el-form-item>
             <el-form-item label="JSON">      
                <el-input v-model="jsonResult" type="textarea" readonly></el-input>
            </el-form-item>
            <el-form-item label="Proto"> 
                <el-input v-model="protoResult" type="textarea" readonly></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            sendData: {
                id: 12345,
                time: new Date(),
                message: 'test',
                navigator:window.location
            },
            num: 10,
            jsonResult: '',
            protoResult: ''
        }
    },
    mounted() {
    },
    
}
</script>
<style lang="scss" scoped>
.border{
    padding: 5px 5px;
}
</style>