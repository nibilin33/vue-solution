<template>
    <div>
        {{postUrl}}
        <form :action="postUrl" method="post" enctype="multipart/form-data">
            入口文件：<input v-model="entry" name="entry"/>
            选择文件<input type="file" name="file" multiple="multiple">
             <input type="submit" value="提交">
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            entry: '',
            postUrl:`http://${location.host}/file-upload`
        }
    }
    
}
</script>