// ...código de carrusel.js...
document.addEventListener("DOMContentLoaded", function () {
  const logotipo = document.getElementById("logotipo");
  if (!logotipo) return;
  const logos = Array.from(logotipo.children);
  logos.forEach((logo) => {
    const clone = logo.cloneNode(true);
    clone.classList.add("logo-clone");
    logotipo.appendChild(clone);
  });
  let scroll = 0,
    speed = 1;
  function animar() {
    scroll += speed;
    if (scroll >= logotipo.scrollWidth / 2) scroll = 0;
    logotipo.scrollLeft = scroll;
    requestAnimationFrame(animar);
  }
  logotipo.style.overflow = "hidden";
  logotipo.scrollLeft = 0;
  requestAnimationFrame(animar);
});
