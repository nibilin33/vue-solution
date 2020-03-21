<template>
    <div>
        <div class="flex">
            <img src="../assets/nibl.jpg" class="logo"/>
        </div>
        <div class="form">
        <el-form size="small">
            <el-form-item>
                <el-input placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item style="text-align:right;">
                <el-button
                    type="primary"
                    icon="el-icon-right"
                    @click="login"
                    circle></el-button>
            </el-form-item>
        </el-form>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        login() {
        }
    }
    
}
</script>
<style lang="scss">
.flex{
    display:flex;
    -ms-flex-align: center;
}
.form{
    width: 50%;
    min-width: 200px;
    margin:0 auto;
    padding-top:20px;
}
.logo{
    width:200px;
    height: 300px;
    object-fit: fill;
    margin: 0 auto;
    display: inline-block;
    
}
</style>