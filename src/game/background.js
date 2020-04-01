import bg from './imgs/bg6.jpg';
import {getImage,isMobile} from './utils';

export default class Background {
    constructor(context) {
        this.context = context;
        this.speed = 5;
        this.x = 0;
        this.xvelocity = 9;
        this.width = this.context.canvas.width;
        this.height = this.context.canvas.height;
        this.stop = null;
        this.img = null;
        this.xtotal = 0;
    }

    move() {
        this.xtotal = this.speed + this.xtotal;
        this.x = this.xtotal % this.width;
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
        this.context.font = `30px Comic Sans MS`;
        this.context.fillText(this.xtotal, this.width*0.9, this.height-10);
    }

    stopMove() {
        clearTimeout(this.stop);
        this.stop = null;
        this.xtotal = 0;
    }
}