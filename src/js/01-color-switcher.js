const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
}


refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

let intervalId = null;

refs.stopBtn.disabled = true;


function onStartBtnClick(e) {

   intervalId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
   }, 1000);
    refs.stopBtn.disabled = false;
    refs.startBtn.disabled = true;
    
}

function onStopBtnClick() {
    console.log('aaaaaaaaa');
    clearInterval(intervalId);
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
}





/////////////
// functions

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

