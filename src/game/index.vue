<template>
    <div class="game" id="app">
        <canvas id="games" width="800" height="500"></canvas>
        <br/>
        <audio src="./video/heartbeat2.mp3" preload id="music" loop hidden>
        </audio>
        <button class="play-button" v-if="isGameOver" @click="drawImage">开始</button>
        <button class="play-button" v-else @click="stop">结束</button>
        <button class="play-button" @click="muteAudio">静音</button>
    </div>
</template>
<script>
import Bird from './fly';
import Background from './background';
import Gun from './bullet';
import Music from './mp3';
import {isMobile} from './utils';
export default {
    data() {
        return {
            bird:null,
            bg:null,
            gun:null,
            timeout:null,
            isGameOver:true,
        }
    },
    async mounted() {
        await this.init();
    },
    methods:{
        muteAudio() {
            Music[Music.status]();
        },
        async init() {
            /** @type {HTMLCanvasElement} */
            const canvas = document.getElementById('games');
            const context = canvas.getContext('2d');
            canvas.width = document.body.clientWidth;
            canvas.height = document.body.clientHeight-50;
            this.bird = new Bird(context);
            this.bg = new Background(context,canvas.width,canvas.height);
            await this.bg.draw();
            await this.bird.draw();
            Music.init();
            this.fillText('按住屏幕角色上移，松开角色下移','3rem');
            this.gun = new Gun(context);
            this.addEvent(canvas);
        },
        addEvent(canvas) {
            let downEvent = '',upEvent='';
            if(isMobile) {
                downEvent = 'touchstart';
                upEvent = 'touchend';
            }else {
                downEvent = 'mousedown';
                upEvent = 'mouseup';
            }
            canvas.addEventListener(downEvent,()=>{
                this.bird.up();
            });
            canvas.addEventListener(upEvent,()=>{
               this.bird.down();
            });
        },
        fillText(txt,fontSize='30px') {
            const canvas = document.getElementById('games');
            const ctx = canvas.getContext('2d');
            ctx.font = `${fontSize} Comic Sans MS`;
            ctx.fillStyle = "red";
            ctx.textAlign = "center";
            ctx.fillText(txt, canvas.width/2, canvas.height/2);
        },
        gameOver(){
            this.fillText('Game Over!');
            this.isGameOver = true;
            Music.pause();  
        },
        clear() {
            const canvas = document.getElementById('games');
            const context = canvas.getContext('2d');
            context.clearRect(0,0,canvas.width,canvas.height);
        },
        stop() {
            this.gameOver();
            clearTimeout(this.timeout);
            this.bird.stopMove();
            this.gun.stopFire();
            this.bg.stopMove();
        },
        async refresh() {
            this.clear();
            await this.bg.draw();
            await this.bird.draw();
            this.gun.refresh(this.bird,this.bg.xtotal);
            if(!this.bird.stop||!this.gun.stop) {
                this.gameOver();
                this.stop();
                return;
            }
            this.timeout = setTimeout(()=>{
                this.refresh();
            },1000/60);
        },
        drawImage() {
            if(this.isGameOver) {
                const canvas = document.getElementById('games');
                const ctx = canvas.getContext('2d');
                ctx.clearRect(0,0,canvas.width,canvas.height);
            }
            Music.play();
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
body,html{
    height: 100%;
    margin:0;
}
.game{
    height: 100%;
    -webkit-overflow-scrolling:touch;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    text-align: center;
    button{
        background: 0 0;
        background-image: none;
        outline: 0;
        border: 0;
        cursor: pointer;
        padding: 0;
    }
    .play-button {
        width: 100px;
        height: 45px;
        line-height: 45px;
        border-radius: 30px;
        background-color: rgba(0,0,0,.6);
        position: relative;
        transition: background-color .2s;
        color:#fff;
        &:hover{
            background-color: rgba(0,0,0,.5);
        }
    }
}

</style>