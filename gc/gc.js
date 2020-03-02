/* 
A即使用B的方法又使用组件B中ztree的方法，组件B导入ztree（依赖挂到了window上），this上有挂载着new zree（this）,  ztree里使用B的方法    
A
↓ ➘ 
B⇆ ztree  
v8 引擎使用的是标记清除，就还是能够回收     
IE 使用计数引用算法，会导致没法回收         
*/
const vue = require('./vue.js');
const a = new vue();
a.log('a 在调用');
a.dir('a 在用');
a.ztree.log('vue use it');
a.ztree.use('vue use ztree');
console.log(Object.entries(process.memoryUsage()).map(([k,v])=>`${k}: ${(v/1024/1024).toFixed()}`).join(' '));


