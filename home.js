// ==========================
// MOSTRAR RACHA EN INICIO
// ==========================

function loadStreak() {
    const streak = localStorage.getItem("studyStreak") || 0;
    document.getElementById("streakCount").textContent = `${streak} día(s) seguidos`;
}

loadStreak();
