const fs = require("fs");
const path = require("path");
const outputfile = path.join(__dirname,'./GitHub_download.json');
const errorfile = path.join(__dirname,'./user_error.js');
const distPath = path.join(__dirname,"../dist/GitHub_user.json");
const useroutfile = path.join(__dirname,"./user_out.js");
global.count = 0;
// 用户数据去重
const dumpData = () => {
  if(!fs.existsSync(useroutfile)) {
      return;
  }
  let fileList = require("./user_out.js");
  let userMap = new Map();
  for (let i = 0; i < fileList.length; i++) {
    userMap.set(fileList[i].owner.id, fileList[i]);
  }
  const result = {
    results: Array.from(userMap.values())
  };
  fs.writeFileSync(outputfile, JSON.stringify(result));
};
const mergeUserDatas = async (readFilePath) => {
  console.log('mergeUserDatas');
  global.count = 0;
  const useragent =
    "Opera/9.25 (Windows NT 5.1; U; en), Lynx/2.8.5rel.1 libwww-FM/2.14 SSL-MM/1.4.1 GNUTLS/1.2.9";
  var options = {
    headers: {
      "User-Agent": useragent,
      Authorization: "token b12aeb61ad6b2cb14810b82c5a769d417ac6f97d"
    }
  };
  const file = fs.readFileSync(readFilePath);
  const request = require("request");
  const results = JSON.parse(file.toString()).results;
  let outlist = [];
  let errorList = [];
  console.log(typeof results, results.length);
  for (let i = 0; i < results.length; i++) {
    await new Promise(resolve => {
      setTimeout(() => {
        Object.assign(options, { url: results[i].owner.url });
        request(options, function(error, response, body) {
          console.log("error", error);
          if (!error) {
            let out = Object.assign({}, results[i], JSON.parse(body));
            console.log(out.email);
            outlist.push(out);
          } else {
            errorList.push(results[i]);
          }
          global.count = results.length ? (i + 1) / results.length : 0;
          resolve();
        });
      }, 2000);
    });
  }
  if (errorList.length) {
    fs.writeFileSync(
      errorfile,
      `module.exports = ${JSON.stringify(errorList)}`
    );
  }
  fs.writeFileSync(distPath, JSON.stringify(outlist));
};
module.exports = () => {
  try {
    console.log(fs.existsSync(outputfile));
    if (!fs.existsSync(outputfile)) {
      dumpData();
    }
    if (fs.existsSync(errorfile)) {
      mergeUserDatas(errorfile);
      //fs.unlinkSync(errorfile);
    } else {
      mergeUserDatas(outputfile);
      //fs.unlinkSync(outputfile);
    }
  } catch (error) {
      console.log(error);
  }
};
