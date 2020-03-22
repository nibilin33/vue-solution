import dingding from './imgs/dingding.png';
import {getImage} from './utils';
export default class Bird {
    constructor(context){
        this.x = 100;
        this.y = 100;
        this.speed = 10;
        this.a = 9;
        this.context = context;
        this.stop = null;

    }
    //向上加速speed = speed + at,t=1s
    up(){
      this.speed = this.speed - this.a*100/1000;
      this.speed = -Math.abs(this.speed);
    }
    down(){
      this.speed = this.speed + this.a*100/1000;
      this.speed = Math.abs(this.speed);
    }
    move() {
        this.y = this.speed * 1 + this.y;
        this.detection();
        this.stop = setTimeout(()=>{
            this.move();
        },200);
    }
    stopMove() {
        clearTimeout(this.stop);
    }
    async draw() {
        const img = await getImage(dingding);
        this.context.drawImage(img,this.x,this.y);  
    }
    //碰撞检测
    detection(){
        if(this.y>500||this.y<0) {
            this.stopMove();
        }
    }
}