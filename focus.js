// Cargar nombre y avatar
document.getElementById("userName").textContent = localStorage.getItem("userName");
document.getElementById("userAvatar").src = localStorage.getItem("userAvatar");

// Variables del temporizador
let interval;
let timeLeft;

// Actualizar texto grande
function updateDisplay() {
    const min = Math.floor(timeLeft / 60);
    const sec = timeLeft % 60;
    document.getElementById("timerText").textContent =
        `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}

// Iniciar temporizador normal
document.getElementById("startBtn").addEventListener("click", () => {
    const min = parseInt(document.getElementById("minutes").value) || 0;
    const sec = parseInt(document.getElementById("seconds").value) || 0;

    timeLeft = min * 60 + sec;
    updateDisplay();

    clearInterval(interval);

    interval = setInterval(() => {
        timeLeft--;
        updateDisplay();

        if (timeLeft <= 0) {
            clearInterval(interval);
            alert("¡Tiempo completado!");
        }
    }, 1000);
});

// Reiniciar
document.getElementById("resetBtn").addEventListener("click", () => {
    clearInterval(interval);
    document.getElementById("timerText").textContent = "00:00";
});

// Pomodoro
function startPomodoro(work, rest) {
    clearInterval(interval);

    let working = true;
    timeLeft = work * 60;
    updateDisplay();

    interval = setInterval(() => {
        timeLeft--;
        updateDisplay();

        if (timeLeft <= 0) {
            working = !working;

            if (working) {
                alert("Descanso terminado. ¡A trabajar!");
                timeLeft = work * 60;
            } else {
                alert("¡Pomodoro completado! Toma un descanso.");
                timeLeft = rest * 60;
            }
        }
    }, 1000);
}
