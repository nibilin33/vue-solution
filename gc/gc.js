/* 
循环引用，组件A即使用B的方法又使用组件B中ztree的方法，组件B导入ztree，this上有挂载着new zree（this）,  ztree里使用B的方法    
A
↓ ➘
B⇆ ztree 
*/
