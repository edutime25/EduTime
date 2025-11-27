// ==========================
// SISTEMA DE RACHA EDU-TIME
// ==========================

// Obtener fecha de hoy en formato YYYY-MM-DD
function getToday() {
    const hoy = new Date();
    return hoy.toISOString().split("T")[0];
}

// Verificar y actualizar la racha
function actualizarRacha() {
    const lastStudy = localStorage.getItem("lastStudyDate");
    const streak = parseInt(localStorage.getItem("studyStreak")) || 0;

    const today = getToday();

    // Si es la primera vez
    if (!lastStudy) {
        localStorage.setItem("lastStudyDate", today);
        localStorage.setItem("studyStreak", 1);
        return 1;
    }

    // Si estudia el mismo día → racha se mantiene igual
    if (lastStudy === today) {
        return streak;
    }

    // Fechas: ayer
    const ayer = new Date();
    ayer.setDate(ayer.getDate() - 1);
    const yesterday = ayer.toISOString().split("T")[0];

    // Si estudió ayer → continuación
    if (lastStudy === yesterday) {
        const newStreak = streak + 1;
        localStorage.setItem("lastStudyDate", today);
        localStorage.setItem("studyStreak", newStreak);
        return newStreak;
    }

    // Si pasó más de un día → reinicio
    localStorage.setItem("lastStudyDate", today);
    localStorage.setItem("studyStreak", 1);
    return 1;
}

// Llamar a esta función DESPUÉS de estudiar
function usuarioEstudioHoy() {
    actualizarRacha();
}
