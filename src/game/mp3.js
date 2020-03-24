import audioSrc from './video/heartbeat2.mp3';
export default class Music {
    static audio = null
    static status = 'play'
    static init() {
        Music.audio = document.createElement("audio");
        Music.audio.src = audioSrc;
        Music.audio.loop = true;   
        Music.audio.addEventListener("canplaythrough",
        function() {
            console.log('music loadedd!');
            Music.play();
        },
        false);
        Music.audio.load();
    }
    static destroy() {
        Music.pause();
        Music.audio = null;
    }
    static pause() {
        Music.audio.pause();
        Music.status = 'play';
    }
    static play() {
        Music.audio.play();
        Music.status = 'pause';
    }
}