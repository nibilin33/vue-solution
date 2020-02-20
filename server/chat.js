const net = require("net");
let user = new Map();
const server = net.createServer(function(con){
    con.write(`\u001b[38;5;33m welcome to nibl's chat room\n\r`);
    con.write('enter your name');
    let nikename = null;
    let msg = [];
    con.on('data', function(data){
        let result = data.toString();
        if(!/\r\n/.test(result)) {
            msg.push(result);
            return;
        }
        if(!nikename){
            nikename = msg.join('');
            user.set(nikename, con);
            user.forEach((usr)=>{
                usr.write(`\u001b[38;5;34m ${nikename} joind \r\n`);
                usr.write(`\u001b[38;5;34m ${nikename}:`);
            });
        }else{
            con.write(`\u001b[38;5;34m ${nikename}:`);
            user.forEach((usr)=>{
                if(user.get(nikename) !== usr) {
                    usr.write(`\u001b[38;5;34m ${msg.join('')}\r\n`);
                }
            });
        }
        msg = [];
    });
});
server.listen(3000,function(){
    console.log('server in 3000');
})