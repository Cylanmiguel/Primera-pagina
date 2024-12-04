const toggleCheckbox = document.getElementById("toggle_checkbox");
const body = document.body;

window.addEventListener("load", () => {
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleCheckbox.checked = true;
    } else {
        body.classList.add("light-mode");
    }
});

// Este es el evento que cambia el modo claro/oscuro
toggleCheckbox.addEventListener("change", () => {
    console.log("Checkbox cambiado", toggleCheckbox.checked); // Verificar si el cambio de checkbox ocurre
    if (toggleCheckbox.checked) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "enabled");
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        localStorage.setItem("dark-mode", "disabled");
    }
});
