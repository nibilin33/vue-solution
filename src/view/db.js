const AV = require('leancloud-storage');
const APP_ID = 'jJfXeV1I2kHde68Hnn7A7yEJ-gzGzoHsz';
const APP_KEY = 'SXR99ldnbUDDFITs3h62K9OH';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY,
  serverURLs: 'https://avoscloud.com'
});
const GitHub = AV.Object.extend('GitHub_Clear');
export const getList = () =>{
    // const query = new AV.Query('Score');
    // query.descending('score');
    // query.limit(8);
    // return new Promise((resolve)=>{
    //     query.find().then((todos) =>{
    //         resolve(todos.map((it)=>it.attributes));
    //     },()=>{
    //         resolve([]);
    //     });
    // });
}
export const addUsers = async(objs)=>{
    let lists = [];
    const targetKey = ['avatar_url','public_repos','followers','url','name',
    'email','company','location','description','created_at','updated_at','pushed_at',
    'language','id','stargazers_count','homepage','type','html_url'];
    lists = objs.map((obj)=>{
        let score = new GitHub();
        targetKey.forEach((name)=>{
            score.set(name,(obj[name]||'').toString());
        });
        return score;
    });
    console.log(lists.length);
    await AV.Object.saveAll(lists);
}