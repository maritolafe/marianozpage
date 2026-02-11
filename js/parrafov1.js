// ...código de parrafo.js...
function parrafo() {
  const c = document.getElementById("caja1"),
    p = c.querySelector("p");
  window.innerWidth <= 739
    ? p && (p.style.display = "none")
    : p && (p.style.display = "block");
}
document.addEventListener("DOMContentLoaded", parrafo);
window.addEventListener("resize", parrafo);
