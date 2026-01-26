
function toggleMenu() {
  const menu = document.getElementById("lista");
  const abrir = document.getElementById("botonMenu");
  const cerrar = document.getElementById("botonCerrar");

  menu.classList.toggle("visible");

  if (menu.classList.contains("visible")) {
    abrir.style.display = "none";
    cerrar.style.display = "inline-block";
    menu.style.display = "block";
  } else {
    abrir.style.display = "inline-block";
    cerrar.style.display = "none";
    menu.style.display = "none";
  }
}

// Cerrar el menú al hacer clic en un li en pantallas chicas
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("lista");
  if (menu) {
    menu.addEventListener("click", function (e) {
      if (
        window.innerWidth <= 739 &&
        e.target.tagName === "A" &&
        menu.classList.contains("visible")
      ) {
        toggleMenu();
      }
    });
  }
});
