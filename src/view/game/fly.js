import dingding from './imgs/dingding.png';
import {getImage} from './utils';
export default class Bird {
    constructor(context){
        this.x = 100;
        this.y = 200;
        this.xvelocity = 10;
        this.yvelocity = 10;
        this.context = context;
    }
    async animation(){
        const img = await getImage(dingding);
        this.context.clearRect(0,0,800,500);
        let x = this.x%500;
        let y = this.y%500;
        this.context.drawImage(img,x,y);
        this.x = this.x + this.xvelocity;
        this.y = this.y + this.yvelocity;
        setTimeout(()=>{
            this.animation();
        },500);
        // window.requestAnimationFrame(()=>{
        //     this.animation();
        // });
    }
    //碰撞检测
    detection(){

    }
}