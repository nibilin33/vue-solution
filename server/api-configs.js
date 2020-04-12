const config = ['./api','./serialize','./cleardata/api'];

const installApi = (app) =>{
    config.forEach((path)=>{
        require(path)(app);
    });
}
module.exports = installApi;