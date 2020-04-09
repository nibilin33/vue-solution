<template>
  <div class="border">
    数据包：<br />
    <p class="border-limit">{{ sendRepeat }}</p>
    <p/>
    <el-form label-width="100" size="small">
      <el-form-item label="字段重复扩展/次">
        <el-input-number v-model="msRepeat" :min="100" :max="2500"></el-input-number>
      </el-form-item>
      <el-form-item label="请求次数">
        <el-input-number v-model="num" :min="1" :max="2000"></el-input-number>
        <el-button type="primary" style="margin-left:5px;" @click="send"
          >发送</el-button
        >
        <el-button type="danger" style="margin-left:5px;" @click="clear"
          >清空</el-button
        >
      </el-form-item>

      <el-form-item label="JSON">
        <el-input
          v-model="jsonResult"
          rows="10"
          type="textarea"
          readonly
        ></el-input>
      </el-form-item>
      <el-form-item label="Proto">
        <el-input
          v-model="protoResult"
          rows="10"
          type="textarea"
          readonly
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import request from "@/request.js";
import message from "./messages.js";
const  sendData = {
        id: "12345",
        message: "test",
        password: "OEUIW",
};
export default {
  data() {
    return {
      num: 10,
      msRepeat: 100,
      jsonResult: "",
      protoResult: "",
    };
  },
  mounted() {},
  computed: {
    sendRepeat() {
      let obj = {};
      Object.keys(sendData).forEach((name) => {
        obj[name] = sendData[name].repeat(this.msRepeat);
      });
      return obj;
    },
  },
  methods: {
    clear() {
      this.jsonResult = "";
      this.protoResult = "";
    },
    send() {
      if(window.location.protocol.startsWith('https')) {
          this.$message('不支持https,需要起本地服务');
          return;
      }
      for (let i = 0; i < this.num; i++) {
          const obj = Object.assign({index:i.toString()},this.sendRepeat);
          obj.time = new Date().valueOf().toString();
          request.post("/v1/json", obj).then((res) => {
            let data = res.data;
            data.reciveTime = new Date().valueOf();
            let netTime = data.reciveTime-data.time;
            let transTime = data.endTime - data.startTime;
            this.jsonResult += `NO.${data.index}:`+`网络开销${netTime}ms`+`|转化开销${transTime}ms`+
            `|总开销${netTime+transTime}ms`+ "\n";
          });
          request
            .post("/v1/proto", message.Data.encode(obj), {
              headers: {
                "Content-Type":
                  "Content-Type:application/octet-stream;charset=UTF-8",
                "X-Requested-With": "XMLHttpRequest",
              },
              transformRequest: (data) => data,
            })
            .then((res) => {
              let data = res.data;
              data.reciveTime = new Date().valueOf();
              let netTime = data.reciveTime-data.time;
              let transTime = data.endTime - data.startTime;
              this.protoResult += `NO.${data.index}:`+`网络开销${netTime}ms`+`|转化开销${transTime}ms`+
            `|总开销${netTime+transTime}ms`+ "\n";
            });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.border {
  padding: 5px 5px;
}
.border-limit{
    word-break: break-word;
    max-height: 400px;
    overflow-y:auto;
}
</style>
