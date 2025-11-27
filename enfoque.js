let tiempo;
let intervalo = null;
let enMarcha = false;

function actualizarDisplay(min, seg) {
    document.getElementById("display").innerText =
        (min < 10 ? "0" + min : min) + ":" + (seg < 10 ? "0" + seg : seg);
}

function iniciar() {
    if (enMarcha) return;

    let minutos = parseInt(document.getElementById("minutos").value);
    tiempo = minutos * 60;

    enMarcha = true;

    intervalo = setInterval(() => {
        let min = Math.floor(tiempo / 60);
        let seg = tiempo % 60;
        actualizarDisplay(min, seg);

        if (tiempo === 0) {
            clearInterval(intervalo);
            enMarcha = false;
            alert("⏳ ¡Tiempo terminado!");
        }
        tiempo--;
    }, 1000);
}

function pausar() {
    clearInterval(intervalo);
    enMarcha = false;
}

function reiniciar() {
    clearInterval(intervalo);
    enMarcha = false;

    let minutos = parseInt(document.getElementById("minutos").value);
    tiempo = minutos * 60;

    actualizarDisplay(minutos, 0);
}
