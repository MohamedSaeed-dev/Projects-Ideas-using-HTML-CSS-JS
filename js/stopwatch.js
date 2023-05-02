var timer;

let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");
let ms = document.querySelector("#ms");

let startBtn = document.querySelector("#startBtn");
let pauseBtn = document.querySelector("#pauseBtn");
let stopBtn = document.querySelector("#stopBtn");


function start() {
    
    pauseBtn.disabled = false;
    stopBtn.disabled = false;
    startBtn.disabled = true;

    timer = setInterval(() => {
        ms.textContent++;
        if (ms.textContent < 10) {
            ms.textContent = "0" + ms.textContent;
        }
        if (ms.textContent > 100) {
            ms.textContent = "00";
            second.textContent++;
            if (second.textContent < 10) {
                second.textContent = "0" + second.textContent;
            }
        }
        if (second.textContent > 59) {
            second.textContent = "00";
            minute.textContent++;
            if (minute.textContent < 10) {
                minute.textContent = "0" + minute.textContent;
            }
        }
        if (minute.textContent > 59) {
            minute.textContent = "00";
            hour.textContent++;
            if (hour.textContent < 10) {
                hour.textContent = "0" + hour.textContent;
            }
        }

    },10)

}



function pause() {
    clearInterval(timer);
    pauseBtn.disabled = true;
    startBtn.disabled = false;
    startBtn.textContent = "Continue";

}


function stop() {
    pauseBtn.disabled = true;
    stopBtn.disabled = true;
    startBtn.disabled = false;
    clearInterval(timer);
    ms.textContent = "00";
    second.textContent = "00";
    minute.textContent = "00";
    hour.textContent = "00";
    startBtn.textContent = "Start";
}