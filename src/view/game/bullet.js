import {getImage} from './utils';
import bullet from './imgs/bullet.png';

class Bullet {
    constructor(context) {
        this.speed = 20;
        this.context = context;
        this.x = this.context.canvas.width-100;
        this.y = Math.floor(Math.random()*this.context.canvas.height+1);
        this.stop = null;
        this.bulletHeight = 20;
        this.bulletWidth = 60;
        this.img = null;
    }
    async draw() {
        if(!this.img) {
            this.img = await getImage(bullet);
        }
        this.context.drawImage(this.img,this.x,this.y);
    }
    move() {
        this.x = this.x - this.speed;
        this.stop = setTimeout(()=>{
            this.move();
        },200);
    }
    destroy() {
        clearTimeout(this.stop);
        this.context = null;
    }
}
export default class Gun {
    constructor(context) {
        this.context = context;
        this.list = [];
        this.stop = null;
    }
    fire(){
        let bullet = new Bullet(this.context);
        this.list.push(bullet);
        bullet.move();
        this.stop = setTimeout(()=>{
            this.fire();
        },800);
    }
    stopFire() {
        this.list.forEach((bullet)=>{
            bullet.destroy();
        });
        this.list = [];
        clearTimeout(this.stop);
        this.stop =  null;
    }
    refresh(position) {
        if(this.detection(position)) {
            this.stopFire();
            return;
        }
        let update = [];
        this.list.forEach(async (bullet)=>{
            if(bullet.x<0) {
                bullet.destroy();
            }else{
                await bullet.draw();
                update.push(bullet);
            }
        });
        this.list = update;
    }
    detection(position) {
        for(let i = 0; i< this.list.length;i++) {
            let bullet = this.list[i];
            if(position.y> bullet.y+bullet.bulletHeight) {
                continue;
            }
            if(bullet.y>position.y+position.birdHeight) {
                continue;
            }
            if(position.x>bullet.x+bullet.bulletWidth) {
                continue;
            }
            if(position.x+position.birdWidth<bullet.x) {
                continue;
            }
            return true;
        }
        return false;
    }
}