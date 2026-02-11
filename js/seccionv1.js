// ...código de seccion.js...
function mostrarSeccion(a) {
  var id = a.getAttribute("href").slice(1);
  resetear();
  var l = document.getElementById(id);
  l &&
    ((l.style.backgroundColor = "red"),
    (l.style.opacity = "0.5"),
    (l.style.transition = "2s"),
    (l.style.opacity = "0"),
    (l.style.transition = "2s"),
    (l.style.display = "block"),
    (l.style.backgroundColor = "black"));
}
function resetear() {
  var l = document.getElementsByTagName("li");
  for (var i = 0; i < l.length; i++)
    ((l[i].style.backgroundColor = ""), (l[i].style.opacity = ""));
}
function cv() {
  console.log("Mostrando CV");
}
var s = document.getElementById("primera");
s.addEventListener("click", function () {
  s.classList.add("transparente");
});
