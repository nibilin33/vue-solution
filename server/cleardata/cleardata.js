const fs = require('fs');
const outputfile = './GitHub_download.json';
const clearData = ()=>{
    const file = fs.readFileSync('./GitHub.json');
    let fileList = JSON.parse(file.toString()).results;
    let userMap = new Map();
    for(let i=0;i<fileList.length;i++) {
        userMap.set(fileList[i].userId,fileList[i]);
    }
    const result = {
        results: Array.from(userMap.values())
    }
    fs.writeFileSync(outputfile,JSON.stringify(result));
}

const mergeUserDatas = async () => {
    const useragent = 'Opera/9.25 (Windows NT 5.1; U; en), Lynx/2.8.5rel.1 libwww-FM/2.14 SSL-MM/1.4.1 GNUTLS/1.2.9';
    var options = {
        headers: {
            'User-Agent': useragent
        }
    };
    const file = fs.readFileSync(outputfile);
    const request = require('request');
    const results = JSON.parse(file.toString()).results;
    let outlist = [];
    for(let i=0;i<results.length;i++) {
      await new Promise((resolve)=>{
          setTimeout(()=>{
            Object.assign(options,{url:results[i].url});
            request(options, function (error, response, body) {
                console.log(body,error);
                if(!error) {
                    outlist.push(Object.assign({},results[i],{...JSON.parse(JSON.stringify(body))}));
                }
                resolve();
            }); 
          },5000);
      });
    }
    fs.writeFileSync('./GitHub_user.json',JSON.stringify(outlist));
}
if(!fs.existsSync(outputfile)) {
    clearData();
}
mergeUserDatas();