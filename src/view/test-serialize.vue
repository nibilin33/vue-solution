<template>
  <div class="border">
    数据包：<br />
    <p>{{ sendRepeat }}</p>
    <p />
    <el-form label-width="100" size="small">
      <el-form-item label="字段重复扩展/次">
        <el-input-number v-model="msRepeat" :min="10"></el-input-number>
      </el-form-item>
      <el-form-item label="发送频率（次/秒）">
        <el-input-number v-model="num" :min="10" :max="2000"></el-input-number>
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
        time: new Date().valueOf().toString(),
        message: "test".repeat(1000),
        password: "OEUIW",
};
export default {
  data() {
    return {
      num: 10,
      msRepeat: 10,
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
      for (let i = 0; i < this.num; i++) {
        setTimeout(() => {
          request.post("/v1/json", this.sendRepeat).then((res) => {
            let data = res.data;
            this.jsonResult += data.endTime - data.startTime + "ms\n";
          });
          request
            .post("/v1/proto", message.Data.encode(this.sendRepeat), {
              headers: {
                "Content-Type":
                  "Content-Type:application/octet-stream;charset=UTF-8",
                "X-Requested-With": "XMLHttpRequest",
              },
              transformRequest: (data) => data,
            })
            .then((res) => {
              let data = res.data;
              this.protoResult += data.endTime - data.startTime + "ms\n";
            });
        }, 1000 / this.num);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.border {
  padding: 5px 5px;
}
</style>
