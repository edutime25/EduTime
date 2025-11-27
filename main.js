// ---------------------- FRASES -------------------------
const frases = [
    "Pequeños pasos construyen grandes metas.",
    "Solo 1% mejor que ayer.",
    "Tú puedes con esto.",
    "Hazlo por tu futuro.",
    "Un enfoque a la vez."
];

document.getElementById("frase").textContent =
    frases[Math.floor(Math.random() * frases.length)];


// ---------------------- MODO OSCURO -------------------------
const themeToggle = document.getElementById("theme-toggle");
themeToggle.onclick = () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};


// ---------------------- TEMPORIZADOR -------------------------
let tiempoRestante = 25 * 60;
let intervalo = null;

// Círculo progreso
const circle = document.querySelector(".progress-ring-circle");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
}


function actualizarPantalla() {
    const min = Math.floor(tiempoRestante / 60);
    const sec = tiempoRestante % 60;
    document.getElementById("time-display").textContent =
        `${min}:${sec.toString().padStart(2, "0")}`;

    const progreso = (1 - tiempoRestante / (minutosIniciales * 60)) * 100;
    setProgress(progreso);
}

let minutosIniciales = 25;

function startTimer() {
    minutosIniciales = parseInt(document.getElementById("min-input").value);
    tiempoRestante = minutosIniciales * 60;

    if (intervalo) clearInterval(intervalo);

    intervalo = setInterval(() => {
        tiempoRestante--;
        actualizarPantalla();

        if (tiempoRestante <= 0) {
            clearInterval(intervalo);
            new Audio("https://assets.mixkit.co/active_storage/sfx/2328/2328-preview.mp3").play();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(intervalo);
}

function resetTimer() {
    clearInterval(intervalo);
    tiempoRestante = minutosIniciales * 60;
    actualizarPantalla();
}

actualizarPantalla();
