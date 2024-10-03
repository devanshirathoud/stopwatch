let startTime = 0;
let elapsedTime = 0;
let interval;
let isRunning = false;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

function formatTime(time) {
    let hours = Math.floor(time / 3600000);
    let minutes = Math.floor((time % 3600000) / 60000);
    let seconds = Math.floor((time % 60000) / 1000);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`;
}

function startStopwatch() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        interval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            display.textContent = formatTime(elapsedTime);
        }, 1000);
        isRunning = true;
    }
}

function pauseStopwatch() {
    clearInterval(interval);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(interval);
    elapsedTime = 0;
    display.textContent = "00:00:00";
    laps.innerHTML = '';
    isRunning = false;
}

function addLap() {
    const lapTime = formatTime(elapsedTime);
    const li = document.createElement('li');
    li.textContent = `Lap: ${lapTime}`;
    laps.appendChild(li);
}

document.getElementById('start').addEventListener('click', startStopwatch);
document.getElementById('pause').addEventListener('click', pauseStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);
document.getElementById('lap').addEventListener('click', addLap);
