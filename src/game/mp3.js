export default class Music {
    static audio = null
    static status = 'play'
    static init() {
        Music.audio = document.getElementById("music");
    }
    static destroy() {
        Music.pause();
        Music.audio = null;
    }
    static pause() {
        Music.audio.pause();
        Music.status = 'play';
        //Music.audio.load();
    }
    static play() {
        Music.audio.play();
        Music.status = 'pause';
    }
}