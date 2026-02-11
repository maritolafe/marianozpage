// ...código de carrusel-vertical.js...
document.addEventListener("DOMContentLoaded", function () {
  const logotipo = document.getElementById("logotipo");
  if (!logotipo) return;
  function vertical() {
    return window.innerWidth >= 740;
  }
  let animId,
    scroll = 0,
    speed = 0.3;
  function setup() {
    Array.from(logotipo.querySelectorAll(".logo-clone")).forEach((e) =>
      e.remove(),
    );
    const logos = Array.from(logotipo.children);
    logos.forEach((logo) => {
      const clone = logo.cloneNode(true);
      clone.classList.add("logo-clone");
      logotipo.appendChild(clone);
    });
    logotipo.scrollTop = 0;
    scroll = 0;
  }
  function animar() {
    scroll += speed;
    const h = logotipo.scrollHeight / 2;
    if (scroll >= h) scroll = 0;
    logotipo.scrollTop = scroll;
    animId = requestAnimationFrame(animar);
  }
  function parar() {
    animId && cancelAnimationFrame(animId);
  }
  function hover() {
    const conjunto = document.getElementById("conjunto");
    if (!conjunto) return;
    let pausado = false;
    logotipo.addEventListener("mouseover", (e) => {
      if (e.target.classList.contains("logo")) {
        parar();
        pausado = true;
      }
    });
    conjunto.addEventListener("mouseleave", () => {
      if (pausado && vertical()) {
        animar();
        pausado = false;
      }
    });
  }
  function resize() {
    parar();
    if (vertical()) {
      setup();
      animar();
    } else {
      Array.from(logotipo.querySelectorAll(".logo-clone")).forEach((e) =>
        e.remove(),
      );
      logotipo.scrollLeft = 0;
      scroll = 0;
    }
  }
  window.addEventListener("resize", resize);
  resize();
  hover();
});
