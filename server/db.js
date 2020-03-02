const mongoClient = require('mongodb').MongoClient;
const URL = 'mongodb://127.0.0.1:27017';
const DB_NAME = "solution";
//检测是否连接成功
mongoClient.connect(URL,(err,client)=>{
    if(err){
        console.log('fail')
    }else{
        console.log('sucess')
    }
});
module.exports = function DB(){
    return new Promise((resolve,rejcet) => {
        mongoClient.connect(URL,(err,client)=>{
            if(err){
                rejcet(err);
            }else{
                resolve(client.db(DB_NAME));
            }
        })
    })
}