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

    console.log(currentMusic);
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