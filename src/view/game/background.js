import bg from './imgs/bg2.jpg';
import {getImage} from './utils';

export default class Background {
    constructor(context) {
        this.context = context;
        this.speed = 10;
        this.x = 0;
        this.xvelocity = 9;
        this.width = this.context.canvas.width;
        this.height = this.context.canvas.height;
        this.stop = null;
        this.img = null;
    }

    move() {
        this.x = this.speed * 1 + this.x;
        this.x = this.x % this.width;
        this.stop = setTimeout(()=>{
            this.move();
        },100);
    }

    async draw() {
        if(!this.img) {
            this.img = await getImage(bg);
        }
        this.context.drawImage(this.img,-this.x,0,this.width,this.height);
        this.context.drawImage(this.img,this.width-this.x,0,this.width,this.height);  
    }

    stopMove() {
        clearTimeout(this.stop);
        this.stop = null;
    }
}