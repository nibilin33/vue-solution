const net = require("net");
const iconvLite = require('iconv-lite');
let user = new Map();
const server = net.createServer(function(con){
    con.write(`\u001b[38;5;33m welcome to nibl's chat room${iconvLite.decode(new Buffer('请').toString('utf-8'),'gbk')}`);
    let nikename = null;
    con.on('data', function(data){
        data = data.replace('\r\n','');
        if(!nikename){
            nikename = data;
            user.set(nikename, con);
            user.forEach((usr)=>{
                usr.write(`\u001b[38;5;34m ${data} 加入`);
            });
        }else{
            user.forEach((usr)=>{
                console.log(usr);
            });
        }
        con.write(`\u001b[38;5;34m ${data}`);
    });
});
server.listen(3000,function(){
    console.log('server in 3000');
})