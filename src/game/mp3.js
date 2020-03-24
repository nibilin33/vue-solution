import audioSrc from './video/heartbeat2.mp3';
export default class Music{
    constructor() {
        let audio = document.createElement("audio");
        audio.src = audioSrc;
        audio.loop = true;   
        audio.addEventListener("canplaythrough",
        function() {
            console.log('musice loadedd!');
            console.log(audio);
        　　audio.play();
        },
        false);
        audio.load();
    }
}