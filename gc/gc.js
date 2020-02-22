/* 
循环引用，组件A即使用B的方法又使用组件B中ztree的方法，组件B导入ztree（依赖挂到了window上），this上有挂载着new zree（this）,  ztree里使用B的方法    
A
↓ ➘ 
B⇆ ztree
B⇆ztree 相互引用，当组件A被注销的后，就无论通过什么途径均访问不到它们，    
就无法被注销。          
*/
