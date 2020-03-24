import dingding from './imgs/dingding.png';
import {getImage} from './utils';
export default class Bird {
    constructor(context){
        this.a = 0.95;
        this.context = context;
        this.img = null;
        this.direction = 1;
        this.init();
    }
    init() {
        this.x = this.context.canvas.width/4;
        this.y = 100;
        this.speed = 5;
        this.stop = null;
        this.birdHeight = 60;
        this.birdWidth = 40;
    }
    //向上加速speed = speed + at,t=1s
    up(){
      this.direction = -1;
      if(this.speed>0) {
          this.speed = 0;
      }
      this.changeSpeed();
    }
    down(){
        this.direction = 1;
        if(this.speed<0) {
          this.speed = 0;
        }
        this.changeSpeed();
    }
    changeSpeed() {
        this.speed = this.speed+this.direction*this.a;
        this.speed = this.direction*Math.abs(this.speed);
    }
    move() {
        this.y = this.speed * 1 + this.y;
        if(this.detection()){
            this.stopMove();
            return;
        }
        this.stop = setTimeout(()=>{
            this.move();
            this.changeSpeed();
        },50);
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