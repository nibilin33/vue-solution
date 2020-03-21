<template>
    <div>
        <canvas id="games" width="800" height="500"></canvas>
    </div>
</template>
<script>
import bg from './imgs/bg_0010_background.png';
import dingding from './imgs/dingding.png';
import water from './imgs/water.png';
import Bird from './fly';
export default {
    data() {
        return {

        }
    },
    mounted() {
        this.drawImage();
    },
    methods:{
        drawImage() {
            /** @type {HTMLCanvasElement} */
            const canvas = document.getElementById('games');
            const context = canvas.getContext('2d');
            //context.save();
            //context.clearRect(0,0,800,500);
            let img = new Image();
            img.src = bg;
            img.onload = ()=>{
                context.drawImage(img,0,0,800,500);
            }
            context.globalCompositeOperation = "destination-over";
            //context.save();
            new Bird(context).animation();
            // context.moveTo(140,237);
            // context.lineTo(150,0);
            // context.lineTo(140,0);
            // context.lineTo(160,0);
            // context.strokeStyle = "#40a9ff";
            // context.lineWidth = 5;
            // context.stroke();
            let yuImg = new Image();
            yuImg.src = water;
            yuImg.onload = ()=>{
                context.drawImage(yuImg,0,380,800,500);
            }
        }
    }
}
</script>
<style lang="scss">

</style>