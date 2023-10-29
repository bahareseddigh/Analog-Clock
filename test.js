let sec = document.querySelector('.sec');
let min = document.querySelector('.min');
let hr = document.querySelector('.hr');
let audio = document.querySelector('audio');
let deg = 6;

setInterval(clockHandler , 1000);
setInterval(sound , 1000);

function sound(){
    audio.play();
}

function clockHandler(){
    let d = new Date();
    let h = d.getHours() * 30;
    let m = d.getMinutes() * deg;
    let s = d.getSeconds() * deg;

    hr.style.transform = `rotateZ(${h + (m / 12)}deg)`;
    min.style.transform = `rotateZ(${m}deg)`;
    sec.style.transform = `rotateZ(${s}deg)`;
}

