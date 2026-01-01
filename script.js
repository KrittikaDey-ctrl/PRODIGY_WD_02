let startTime, elapsedTime = 0, timerInterval;

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);
    return `${mm.toString().padStart(2, "0")}:${ss.toString().padStart(2, "0")}:${ms.toString().padStart(2, "0")}`;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        document.getElementById("display").innerHTML = timeToString(elapsedTime);
    }, 10);
}

function pause() { clearInterval(timerInterval); }

function reset() {
    clearInterval(timerInterval);
    document.getElementById("display").innerHTML = "00:00:00";
    elapsedTime = 0;
    document.getElementById("lapsList").innerHTML = "";
}

function lap() {
    let li = document.createElement("li");
    li.innerText = `Lap: ${timeToString(elapsedTime)}`;
    document.getElementById("lapsList").appendChild(li);
}

document.getElementById("startBtn").addEventListener("click", start);
document.getElementById("pauseBtn").addEventListener("click", pause);
document.getElementById("resetBtn").addEventListener("click", reset);
document.getElementById("lapBtn").addEventListener("click", lap);