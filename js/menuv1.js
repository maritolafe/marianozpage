// ...código de menu.js...
function menu() {
  const m = document.getElementById("lista"),
    a = document.getElementById("botonMenu"),
    c = document.getElementById("botonCerrar");
  m.classList.toggle("visible");
  if (m.classList.contains("visible")) {
    a.style.display = "none";
    c.style.display = "inline-block";
    m.style.display = "block";
  } else {
    a.style.display = "inline-block";
    c.style.display = "none";
    m.style.display = "none";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const m = document.getElementById("lista");
  m &&
    m.addEventListener("click", function (e) {
      if (
        window.innerWidth <= 739 &&
        e.target.tagName === "A" &&
        m.classList.contains("visible")
      )
        menu();
    });
});
