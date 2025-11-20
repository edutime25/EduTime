let time = 25 * 60;
let timerInterval;
let isRunning = false;

function updateDisplay() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    document.getElementById("time-display").innerText =
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (isRunning) return; 
    isRunning = true;

    timerInterval = setInterval(() => {
        if (time > 0) {
            time--;
            updateDisplay();
        } else {
            clearInterval(timerInterval);
            alert("Tiempo terminado 🎉");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    time = 25 * 60;
    isRunning = false;
    updateDisplay();
}

updateDisplay();
