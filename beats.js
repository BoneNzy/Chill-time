const music = document.querySelector('audio');
const play = document.querySelector('.play');
const pause = document.querySelector('pause');
const stats = document.getElementsByClassName('svg');

let isplaying = false;
play.addEventListener('click', () => {
    //for playing
        if(isplaying == false){
        music.play();
        isplaying = true;
        play.classList.replace('play', 'pause');
    }
    else {
    //for pause
        music.pause();
        isplaying = false;
        play.classList.replace('pause', 'play');
    }
});