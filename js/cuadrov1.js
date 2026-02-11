// ...código de cuadro.js...
function dentroDeFormulario(el) {
  return el.closest && (el.closest("form") || el.closest("#modal"));
}
var logos = document.getElementsByClassName("logo"),
  cuadro = document.getElementById("cuadrodein"),
  cuadrito = document.getElementById("cuadrito2"),
  fig = document.getElementsByClassName("ficture"),
  timeout = null;
for (var i = 0; i < logos.length; i++) {
  function mostrar(id) {
    timeout && clearTimeout(timeout);
    cuadrito.style.display = "none";
    cuadro.style.display = "block";
    for (var j = 0; j < fig.length; j++) fig[j].style.display = "none";
    var c = document.getElementById(id);
    c && (c.style.display = "block");
  }
  function ocultar() {
    cuadro.style.display = "none";
    cuadrito.style.display = "block";
  }
  logos[i].addEventListener("mouseover", function () {
    var id = this.getAttribute("id");
    mostrar(id);
  });
  logos[i].addEventListener("mouseout", function () {
    timeout = setTimeout(ocultar, 5000);
  });
  logos[i].addEventListener("touchstart", function (e) {
    if (!dentroDeFormulario(e.target)) e.preventDefault();
    var id = this.getAttribute("id");
    mostrar(id);
  });
  logos[i].addEventListener("touchend", function (e) {
    if (!dentroDeFormulario(e.target)) e.preventDefault();
    timeout = setTimeout(ocultar, 8000);
  });
  logos[i].addEventListener("click", function (e) {
    if (e.target.tagName === "A" || !dentroDeFormulario(e.target)) {
      if (e.target.tagName !== "BUTTON" && e.target.type !== "submit")
        e.preventDefault();
    }
    var id = this.getAttribute("id");
    mostrar(id);
    timeout = setTimeout(ocultar, 8000);
  });
}
