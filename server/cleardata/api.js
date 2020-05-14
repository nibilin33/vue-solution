const express = require("express");
const router = express.Router();
const fs = require("fs");
const request = require("request");
const path = require("path");
const logger = require("logger").createLogger("dev.log");
const outputfile = path.join(__dirname,'./user.json');
const formatfile = path.join(__dirname,'./user_out.js');;
const clearData = require('./clear.js');
// 原始数据user.json->格式化数据user_out.js->去重GitHub_download.json->请求完整的用户数据合入Github_user.json
let tmpList = [];
const writefile = () => {
  if (fs.existsSync(outputfile)) {
    fs.appendFileSync(outputfile, JSON.stringify(tmpList));
    tmpList = [];
    return;
  }
  fs.writeFileSync(outputfile, JSON.stringify(tmpList));
  tmpList = [];
};
module.exports = app => {
  app.use("/api", router);
};
// 请求数据放到临时变量 
router.post("/v1/clear/add", (req, res) => {
  let arr = [],
    chunks;
  try {
    req.on("data", buff => {
      arr.push(buff);
    });
    req.on("end", () => {
      chunks = Buffer.concat(arr);
      var str = chunks.toString();
      var list = Object.assign({}, JSON.parse(str));
      if (list.items && list.items.length) {
        tmpList = tmpList.concat(list.items);
      }
      if (tmpList.length > 1000) {
        writefile();
      }
      console.log(tmpList.length);
      res.send("success");
    });
  } catch (error) {
    res.send("fail");
    writefile();
  }
});
// 代理获取搜索结果
router.get("/v1/clear/page", (req, res) => {
  console.log(req.query);
  const useragent =
    "Opera/9.25 (Windows NT 5.1; U; en), Lynx/2.8.5rel.1 libwww-FM/2.14 SSL-MM/1.4.1 GNUTLS/1.2.9";
  let params = Object.keys(req.query).map(name => `${name}=${req.query[name]}`);
  var options = {
    url: `https://api.github.com/search/repositories?${params.join("&")}`,
    headers: {
      "User-Agent": useragent,
      Authorization: "token b12aeb61ad6b2cb14810b82c5a769d417ac6f97d"
    }
  };
  request(options, function(error, response, body) {
    if (!error) {
      res.send(body);
    } else {
      logger.error(error.toString());
    }
  });
});
// 生成文件
router.get("/v1/clear/end", (req, res) => {
  writefile();
  res.send("success");
});
// 数据格式化   
router.get("/v1/clear/format", (req, res) => {
  try {
      if(fs.existsSync(outputfile)) {
            let file = fs.readFileSync(outputfile);
            fs.writeFileSync(
            formatfile,
            `module.exports = ${file
                .toString()
                .replace(/\[\]/g, "")
                .replace(/\]\[/g, ",")}`
            );
      }
    clearData();
    res.send("sucess");
  } catch (error) {
    logger.error(error.toString());
  }
});
router.get('/v1/clear/process',(req,res)=>{
    console.log(global.count);
    res.send(JSON.stringify({count:global.count}));
})
