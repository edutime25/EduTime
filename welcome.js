// Selección de elementos
const avatars = document.querySelectorAll(".avatar");
let selectedAvatar = null;

// Seleccionar avatar
avatars.forEach(avatar => {
    avatar.addEventListener("click", () => {
        avatars.forEach(a => a.classList.remove("avatar-selected"));
        avatar.classList.add("avatar-selected");
        selectedAvatar = avatar.src;
    });
});

// Guardar y continuar
document.getElementById("startBtn").addEventListener("click", () => {
    const name = document.getElementById("username").value.trim();

    if (name === "") {
        alert("Por favor, escribe tu nombre.");
        return;
    }
    if (!selectedAvatar) {
        alert("Selecciona un avatar.");
        return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userAvatar", selectedAvatar);
    localStorage.setItem("firstTime", "false");

    window.location.href = "index.html";
});
