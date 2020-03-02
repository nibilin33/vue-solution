const leakMemory = () => {
  class Leak{
    constructor(){this.unused();}
    unused(){}
  }
  new Leak();
};

setInterval(function(){
  for(let i = 0; i < 1000000; i++) {
    leakMemory();
  }
  console.log(Object.entries(process.memoryUsage()).map(([k,v])=>`${k}: ${(v/1024/1024).toFixed()}`).join(' '));
}, 1);