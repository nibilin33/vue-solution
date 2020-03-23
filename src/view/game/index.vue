<template>
    <div class="game">
        <div>
        使用说明 <br/>
        1. 点击开始  <br/>
        2. 按住屏幕角色上移，松开角色下移  <br/>
        3. 碰到边界或者子弹，game over 
        </div>
        <canvas id="games" width="800" height="500"></canvas>
        <br/>
        <el-button @click="drawImage">开始</el-button>
        <el-button @click="stop">结束</el-button>
    </div>
</template>
<script>
import Bird from './fly';
import Background from './background';
import Gun from './bullet';

export default {
    data() {
        return {
            bird:null,
            bg:null,
            gun:null,
            timeout:null,
            isGameOver:false,
        }
    },
    mounted() {
        this.init();
    },
    methods:{
        init() {
            /** @type {HTMLCanvasElement} */
            const canvas = document.getElementById('games');
            const context = canvas.getContext('2d');
            console.log(document.body.clientWidth);
            canvas.width = document.body.clientWidth*0.8;
            canvas.height = document.body.clientHeight/2;
            this.bird = new Bird(context);
            this.bg = new Background(context,canvas.width,canvas.height);
            this.gun = new Gun(context);
            this.addEvent(canvas);
        },
        addEvent(canvas) {
            const isMobile = /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent);
            let downEvent = '',upEvent='';
            if(isMobile) {
                downEvent = 'touchstart';
                upEvent = 'touchend';
            }else {
                downEvent = 'mousedown';
                upEvent = 'mouseup';
            }
            let upTimeout = null;
            canvas.addEventListener(downEvent,()=>{
                clearInterval(upTimeout);
                upTimeout = setInterval(()=>{
                    this.bird.up();
                },200);
            });
            canvas.addEventListener(upEvent,()=>{
                clearInterval(upTimeout);
                upTimeout = setInterval(()=>{
                    this.bird.down();
                },200);
            });
        },
        gameOver(){
            const canvas = document.getElementById('games');
            const ctx = canvas.getContext('2d');
            ctx.font = "30px Comic Sans MS";
            ctx.fillStyle = "red";
            ctx.textAlign = "center";
            ctx.fillText("Game Over!", canvas.width/2, canvas.height/2);
            this.isGameOver = true;
        },
        clear() {
            const canvas = document.getElementById('games');
            const context = canvas.getContext('2d');
            context.clearRect(0,0,canvas.width,canvas.height);
        },
        stop() {
            clearTimeout(this.timeout);
            this.bird.stopMove();
            this.gun.stopFire();
            this.bg.stopMove();
        },
        async refresh() {
            if(!this.bird.stop||!this.gun.stop) {
                this.gameOver();
                this.stop();
                return;
            }
            await this.bg.draw();
            await this.bird.draw();
            this.gun.refresh(this.bird);
            this.timeout = setTimeout(()=>{
                this.refresh();
            },160);
        },
        drawImage() {
            if(this.isGameOver) {
                const canvas = document.getElementById('games');
                const ctx = canvas.getContext('2d');
                ctx.clearRect(0,0,canvas.width,canvas.height);
            }
            this.isGameOver = false;
            this.bird.init();
            this.bg.move();
            this.bird.move();
            this.gun.fire();
            this.refresh();
        }
    }
}
</script>
<style lang="scss">
.game{
    overflow-y:auto;
    -webkit-overflow-scrolling:touch;
}
</style>