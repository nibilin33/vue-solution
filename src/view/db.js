import {debounce} from "lodash";
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
export const updateUsers = async (cb)=>{
    let query = new AV.Query('GitHub_Clear');
    let skip = 0;
    let result = [];
    let total = await query.count();
    query = new AV.Query('GitHub_Clear');
    query.descending('userId');
    const loop = async () =>{
        if(result.length<total) {
            query.skip(skip);
            let list = await query.find();
            result = result.concat(list);
            skip = skip + list.length; 
            await loop();
        }
    }
    await loop();
    let removeDup = async () =>{
        let dupMap = {};
        let removeBids = [];
        let successCount = 0;
        result.forEach(async (itm)=>{
            if(typeof dupMap[itm.attributes.userId] === 'undefined') {
                dupMap[itm.attributes.userId] = 0;
            }
            dupMap[itm.attributes.userId]++;
            if(dupMap[itm.attributes.userId]>1) {
                
                console.log(dupMap[itm.attributes.userId],itm.attributes.userId);
                removeBids.push(itm.id); 
            }
        });
        //removeBids = Array.from(new Set(removeBids));
        for(let i=0;i<removeBids.length;i++) {
            await new Promise((resolve)=>{
                try {
                    setTimeout(async()=>{
                        let deleteqr = new AV.Query('GitHub_Clear');
                        deleteqr.equalTo('objectId',removeBids[i]);
                        let result = await deleteqr.destroyAll();
                        successCount++;
                        cb(successCount,removeBids.length,result);
                        resolve();
                    },5000);
                } catch (error) {
                    cb(successCount,removeBids.length,error);
                    setTimeout(()=>{
                        resolve();
                    },5000);
                }
            })
        }
    }
    removeDup();
}
export const addUsers = async(objs)=>{
    let lists = [];
    try {
        lists = objs.items.map((obj)=>{
            let score = new GitHub();
            score.set('avatar_url', obj.owner.avatar_url);
            score.set('url', obj.owner.url);
            score.set('userId',obj.owner.id);
            score.set('created_at',obj.created_at);
            score.set('updated_at',obj.updated_at);
            score.set('full_name',obj.full_name);
            score.set('stargazers_count',obj.stargazers_count);
            score.set('id',obj.id);
            score.set('language',obj.language);
            return score;
        });
        await AV.Object.saveAll(lists);
    } catch (error) {
        // let missList = JSON.parse(localStorage.getItem('addUsers'))||[];
        // missList = [...missList,...lists];
        // localStorage.setItem('addUsers',JSON.stringify(obj));
        console.log(error);
    }
    // await new Promise((resolve)=>{
    //     setTimeout(async ()=>{
    //         try {
    //             lists = objs.items.map((obj)=>{
    //                 let score = new GitHub();
    //                 score.set('avatar_url', obj.owner.avatar_url);
    //                 score.set('url', obj.owner.url);
    //                 score.set('userId',obj.owner.id);
    //                 score.set('created_at',obj.created_at);
    //                 score.set('updated_at',obj.updated_at);
    //                 score.set('full_name',obj.full_name);
    //                 score.set('stargazers_count',obj.stargazers_count);
    //                 score.set('id',obj.id);
    //                 score.set('language',obj.language);
    //                 return score;
    //             });
    //             await AV.Object.saveAll(lists);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //         resolve();
    //     },5000);
    // });
}