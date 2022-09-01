const music = document.querySelector('audio');
const play = document.querySelector('.play');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

//add the music name *must be same as the one you added to the directory*.

const musicDir = [
    {
        name: "FireForce-Op-Inferno",
    },
    {
        name: "MonkeyMajik-Eden",
    },
    {
        name: "Gintama ost pianoVer",
    },
    {
        name: "Nanoka Hara-Suzume no Tojimari",
    },
    {
        name: "Compared-Child",
    },
];

//music controls

let currentMusic = 0;
music.src = './music/'+musicDir[currentMusic].name+'.mp3';

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

next.addEventListener('click', () => {
    let i = currentMusic;
    if (currentMusic < musicDir.length - 1) {
        i = i+1;
        tonext(i);
    }else if (currentMusic <= musicDir.length) {
        i = 0;
        tonext(i);
    }else {
        tonext(currentMusic);
    }
    currentMusic = i;
});

function tonext(next) {
    music.src = './music/'+musicDir[next].name+'.mp3';
    music.play();
    play.classList.replace('play', 'pause');
}

prev.addEventListener('click', () => {
    let i = currentMusic;
    if (currentMusic > 0 && currentMusic < musicDir.length){
        i = i-1;
        toprev(i);
    }else if(currentMusic == 0) {
        i = musicDir.length - 1;
        toprev(i);
    }
    currentMusic = i;
    console.log(currentMusic);
});

function toprev(previous) {
    music.src = './music/'+musicDir[previous].name+'.mp3';
    music.play();
    play.classList.replace('play', 'pause');
}

let progress = document.getElementById('progressing');
let initial_time = document.getElementById('initial-time');
let total_duration = document.getElementById('duration');

//progress bar /duration-indicator
music.addEventListener('timeupdate', (event) => {
    const {currentTime, duration} = event.target;

    let progress_time = (currentTime / duration) * 100;
    progress.style.width = `${progress_time}%`;

    let min_duration = Math.floor(duration / 60);
    let sec_duration = Math.floor(duration % 60);

    let total_time = `${min_duration}:${sec_duration}`;
    if (duration) {
        total_duration.textContent = total_time;
    }

    //initial-timer

    let initial = 0;
    let min_initial = Math.floor(currentTime / 60);
    let sec_initial = Math.floor(currentTime % 60);

    if (sec_initial < 10) {
        initial = `${min_initial}:0${sec_initial}`;
    }else {
        initial = `${min_initial}:${sec_initial}`;
    }

    if (currentTime) {
        initial_time.textContent = initial;
    }

    // loop to next video

    if (currentTime == duration) {
        currentMusic = currentMusic + 1;
        tonext(currentMusic);
    }
});
//progress click functionality

const progress_click = document.querySelector('.progress-bar');

progress_click.addEventListener('click', (event) => {
    const {duration} = music;
    let move_bar = (event.offsetX / event.target.clientWidth) * duration;

    music.currentTime = move_bar;
});