import bg from './imgs/bg_0010_background.png';
import {getImage} from './utils';

export default class Background {
    constructor(context,width,height) {
        this.context = context;
        this.speed = 10;
        this.x = 0;
        this.xvelocity = 9;
        this.width = width;
        this.height = height;
    }

    move() {
        this.x = this.speed * 1 + this.x;
        this.x = this.x % 500;
        setTimeout(()=>{
            this.move();
        },100);
    }

    async draw() {
        const img = await getImage(bg);
        this.context.drawImage(img,-this.x,0,this.width,this.height);
        this.context.drawImage(img,this.width-this.x,0,this.width,this.height);  
    }
}