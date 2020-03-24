<template>
    <div class="game" id="app">
        <canvas id="games" width="800" height="500"></canvas>
        <br/>
        <audio id="audio" src="./video/heartbeatcut.mp3">
            您的浏览器不支持 audio 标签。
        </audio>
        <button class="play-button" @click="drawImage">开始</button>
        <button class="play-button" @click="stop">结束</button>
        <button class="play-button">静音</button>
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
    async mounted() {
        await this.init();
    },
    methods:{
        async init() {
            /** @type {HTMLCanvasElement} */
            const canvas = document.getElementById('games');
            const context = canvas.getContext('2d');
            canvas.width = document.body.clientWidth;
            canvas.height = document.body.clientHeight;
            this.bird = new Bird(context);
            this.bg = new Background(context,canvas.width,canvas.height);
            await this.bg.draw();
            await this.bird.draw();
            this.fillText('按住屏幕角色上移，松开角色下移','3rem');
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
            await this.bg.draw();
            await this.bird.draw();
            this.gun.refresh(this.bird);
            if(!this.bird.stop||!this.gun.stop) {
                this.gameOver();
                this.stop();
                return;
            }
            this.timeout = setTimeout(()=>{
                this.refresh();
            },20);
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