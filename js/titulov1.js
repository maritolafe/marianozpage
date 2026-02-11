// ...código de titulo.js...
document.addEventListener("DOMContentLoaded", function () {
  let a = document.getElementById("h1"),
    p = document.getElementById("primera");
  function scroll() {
    let t = document.documentElement.scrollTop;
    if (t > 100) a.style.opacity = 1;
    else a.style.opacity = 0;
  }
  window.addEventListener("scroll", scroll);
  scroll();
});
