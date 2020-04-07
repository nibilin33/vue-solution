# vue-solutions

## Project setup
```
npm install
cd /server
npm install 
mkdir /data/db  
mongod 启动数据库       
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```
### Run local server
```
npm run server          
Service listening http at http://0.0.0.0:3000   
```
### Lints and fixes files
```
npm run lint
```

### 功能说明        
1. skeleton     
2. 技术支持定制打包     
3. electron离线资源包：请求拦截         
> 效果查看方式，    
启动server:npm run server   
启动electron:npm run electron:serve             
会发现日志里面没有资源的记录，但是页面依然能展示                     
4. 多彩webpack插件                   
5. 权限方案         
6. gc目录是分析循环引用问题,node --trace_gc gc.js       
``` 
[pid] <time_since_start> : 
      <Phase> <heap_used_before (old+young)> (<allocated_heap_before>) ->
              <heap_used_after (old+young)> (<allocated_heap_after>) MB, 
              <time_spent_gc> [<reason_of_gc>]     
```
7. node tcp 聊天室：telnet ip 3000  
8. 首屏优化：SSR(vue-hackernews-2.0),prerender-spa-plugin，bigpipe  
9.  [在线打包](http://47.96.165.64/) 目前上传未支持压缩包和文件夹   
10. canvas入门小游戏[在线效果](https://nibilin33.github.io/vue-solution/game.html)   
canvas 完整项目[代码](https://github.com/nibilin33/canvas-game)       
11. 序列化反序列化性能影响情况 [地址](https://nibilin33.github.io/vue-solution/#/serialize)               
![效果](https://github.com/nibilin33/vue-solution/raw/master/public/proto.png)
### 可能遇到的问题
1. node-sass 安装失败：npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/       
[参考](https://segmentfault.com/a/1190000010984731)     

