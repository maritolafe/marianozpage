// ...código de logos.js...
function dentroDeFormulario(el) {
  return el.closest && (el.closest("form") || el.closest("#modal"));
}
document.addEventListener("DOMContentLoaded", () => {
  cargarLogos();
});
async function cargarLogos() {
  try {
    const r = await fetch("data/logos.json"),
      d = await r.json();
    generarLogos(d.logos);
    configurarDescripcion(d.descripcionGeneral);
    inicializarLogos(d.logos);
  } catch (e) {
    (console.error("Error logos:", e), mostrarError());
  }
}
function generarLogos(logos) {
  const c = document.getElementById("logotipo");
  if (!c) return;
  c.innerHTML = "";
  logos.forEach((l) => {
    const i = document.createElement("img");
    i.src = l.imagen;
    i.alt = l.alt;
    i.id = l.id;
    i.className = "logo";
    i.title = l.title;
    i.setAttribute("onfocus", `${l.id}();`);
    c.appendChild(i);
  });
}
function configurarDescripcion(d) {
  const c = document.getElementById("cuadrito2");
  if (!c) return;
  c.innerHTML = `<h5>${d.titulo}</h5><p class="pc">${d.texto}</p>`;
}
function inicializarLogos(logos) {
  var c = document.getElementById("cuadrodein"),
    g = document.getElementById("cuadrito2");
  if (!c || !g) return;
  generarDescripciones(logos);
  mostrarGeneral();
  logos.forEach((l) => {
    window[l.id] = () => {
      mostrarLogo(l.id);
    };
  });
  setTimeout(() => {
    agregarEventos();
  }, 100);
}
function generarDescripciones(logos) {
  const c = document.getElementById("cuadrodein");
  if (!c) return;
  c.innerHTML = "";
  logos.forEach((l, i) => {
    const d = document.createElement("div");
    d.id = (i + 1).toString();
    d.className = "ficture";
    d.style.display = "none";
    let h = `<h5>${l.descripcion.titulo}</h5><p>${l.descripcion.texto}</p>`;
    if (l.descripcion.mostrarProgreso && l.descripcion.progreso > 0) {
      h += `<div class="progress" role="progressbar" aria-label="Progress example" aria-valuenow="${l.descripcion.progreso}" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar text-bg-warning" style="width: ${l.descripcion.progreso}%">${l.descripcion.progreso}% dominio</div></div>`;
    }
    d.innerHTML = h;
    c.appendChild(d);
  });
}
function agregarEventos() {
  const logos = document.querySelectorAll(".logo"),
    c = document.getElementById("cuadrodein"),
    g = document.getElementById("cuadrito2");
  var t = null;
  logos.forEach((logo) => {
    logo.addEventListener("mouseover", function () {
      t && clearTimeout(t);
      const id = this.getAttribute("id");
      mostrarLogo(id);
    });
    logo.addEventListener("mouseout", function () {
      t = setTimeout(mostrarGeneral, 5000);
    });
    logo.addEventListener("touchstart", function (e) {
      if (!dentroDeFormulario(e.target)) e.preventDefault();
      t && clearTimeout(t);
      const id = this.getAttribute("id");
      mostrarLogo(id);
    });
    logo.addEventListener("touchend", function (e) {
      if (!dentroDeFormulario(e.target)) e.preventDefault();
      t = setTimeout(mostrarGeneral, 8000);
    });
    logo.addEventListener("click", function (e) {
      if (e.target.tagName === "A" || !dentroDeFormulario(e.target)) {
        if (e.target.tagName !== "BUTTON" && e.target.type !== "submit")
          e.preventDefault();
      }
      t && clearTimeout(t);
      const id = this.getAttribute("id");
      mostrarLogo(id);
      t = setTimeout(mostrarGeneral, 8000);
    });
  });
}
function mostrarLogo(id) {
  const c = document.getElementById("cuadrodein"),
    g = document.getElementById("cuadrito2");
  if (!c || !g) return;
  g.style.display = "none";
  c.style.display = "block";
  const descripciones = c.querySelectorAll(".ficture");
  descripciones.forEach((d) => {
    d.style.display = "none";
  });
  const i = indiceLogo(id);
  if (i !== -1) {
    const d = document.getElementById((i + 1).toString());
    d && (d.style.display = "block");
  }
}
function indiceLogo(id) {
  const logos = document.querySelectorAll(".logo");
  for (let i = 0; i < logos.length; i++) if (logos[i].id === id) return i;
  return -1;
}
function ocultar() {
  const c = document.getElementById("cuadrodein");
  if (!c) return;
  const descripciones = c.querySelectorAll(".ficture");
  descripciones.forEach((d) => {
    d.style.display = "none";
  });
}
function mostrarGeneral() {
  const c = document.getElementById("cuadrodein"),
    g = document.getElementById("cuadrito2");
  if (!c || !g) return;
  ocultar();
  c.style.display = "none";
  g.style.display = "block";
}
function mostrarError() {
  const c = document.getElementById("logotipo"),
    g = document.getElementById("cuadrito2");
  c &&
    (c.innerHTML =
      '<p style="color: #00ffff;">Error al cargar los logos. Por favor, recarga la página.</p>');
  g &&
    (g.innerHTML =
      '<h5>Tecnologías</h5><p class="pc">Error al cargar la información de tecnologías.</p>');
}
