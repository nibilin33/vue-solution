import dingding from './imgs/dingding.png';
import {getImage} from './utils';
export default class Bird {
    constructor(context){
        this.a = 9;
        this.context = context;
        this.img = null;
        this.init();
    }
    init() {
        this.x = this.context.canvas.width/2;
        this.y = 100;
        this.speed = 10;
        this.stop = null;
        this.birdHeight = 60;
        this.birdWidth = 40;
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
        if(this.detection()){
            this.stopMove();
            return;
        }
        this.stop = setTimeout(()=>{
            this.move();
        },200);
    }
    stopMove() {
        clearTimeout(this.stop);
        this.stop =  null;
    }
    async draw() {
        if(!this.img) {
            this.img = await getImage(dingding);
        }
        this.context.drawImage(this.img,this.x,this.y);  
    }
    //碰撞检测
    detection(){
        return this.y>this.context.canvas.height-this.birdHeight/2||this.y<0;
    }
}