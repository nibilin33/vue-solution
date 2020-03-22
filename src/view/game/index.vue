<template>
    <div>
        <canvas id="games" width="800" height="500"></canvas>
        <el-button @click="drawImage">开始</el-button>
        <el-button @click="stop">停止</el-button>
    </div>
</template>
<script>
import Bird from './fly';
import Background from './background';

export default {
    data() {
        return {
            bird:null,
            bg:null,
            timeout:null,

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
            this.bird = new Bird(context);
            this.bg = new Background(context,canvas.width,canvas.height);
            let upTimeout = null;
            canvas.addEventListener('mousedown',()=>{
                clearInterval(upTimeout);
                upTimeout = setInterval(()=>{
                    this.bird.up();
                },200);
            });
            canvas.addEventListener('mouseup',()=>{
                clearInterval(upTimeout);
                upTimeout = setInterval(()=>{
                    this.bird.down();
                },200);
            });
        },
        clear() {
            const canvas = document.getElementById('games');
            const context = canvas.getContext('2d');
            context.clearRect(0,0,canvas.width,canvas.height);
        },
        stop() {
            clearTimeout(this.timeout);
            this.bird.stopMove();
        },
        async refresh() {
            //this.clear();
            await this.bg.draw();
            await this.bird.draw();
            this.timeout = setTimeout(()=>{
                this.refresh();
            },170);
        },
        drawImage() {
            this.bg.move();
            this.bird.move();
            this.refresh();
        }
    }
}
</script>
<style lang="scss">

</style>