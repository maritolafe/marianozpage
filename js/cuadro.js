// Helper para saber si un elemento está dentro de un form o modal
function isInsideFormOrModal(el) {
  return el.closest && (el.closest("form") || el.closest("#modal"));
}
var logos = document.getElementsByClassName("logo");
var cuadroIn = document.getElementById("cuadrodein");
var cuadrito2 = document.getElementById("cuadrito2");
var texto = document.getElementById("texto");
var logotipo = document.getElementById("logotipo");
var c1 = document.getElementById("1");
var c2 = document.getElementById("2");
var c3 = document.getElementById("3");
var c4 = document.getElementById("4");
var c5 = document.getElementById("5");
var c6 = document.getElementById("6");
var c7 = document.getElementById("7");
var c8 = document.getElementById("8");
var c9 = document.getElementById("9");
var c10 = document.getElementById("10");
var c11 = document.getElementById("11");
var c12 = document.getElementById("12");
var c13 = document.getElementById("13");
var fig = document.getElementsByClassName("ficture");
var timeoutId = null; // Variable para controlar el timeout

for (var i = 0; i < logos.length; i++) {
  // Función para mostrar información del logo
  function mostrarInfo(id) {
    // Limpiar timeout anterior si existe
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    cuadrito2.style.display = "none";
    cuadroIn.style.display = "block";
    for (var j = 0; j < fig.length; j++) {
      fig[j].style.display = "none";
    }
    switch (id) {
      case "c":
        c1.style.display = "block";
        break;
      case "javascript":
        c2.style.display = "block";
        break;
      case "html":
        c3.style.display = "block";
        break;
      case "css":
        c4.style.display = "block";
        break;
      case "php":
        c5.style.display = "block";
        break;
      case "cobol":
        c6.style.display = "block";
        break;
      case "jquery":
        c7.style.display = "block";
        break;
      case "angular":
        c8.style.display = "block";
        break;
      case "react":
        c9.style.display = "block";
        break;
      case "bootstrap":
        c10.style.display = "block";
        break;
      case "wordpress":
        c11.style.display = "block";
        break;
      case "sql":
        c12.style.display = "block";
        break;
      case "bd2":
        c13.style.display = "block";
        break;
      default:
        break;
    }
  }

  // Función para ocultar información
  function ocultarInfo() {
    cuadroIn.style.display = "none";
    cuadrito2.style.display = "block";
  }

  // Eventos para desktop (mouse)
  logos[i].addEventListener("mouseover", function () {
    var id = this.getAttribute("id");
    mostrarInfo(id);
  });

  logos[i].addEventListener("mouseout", function () {
    // Ocultar después de 5 segundos cuando sale el cursor
    timeoutId = setTimeout(ocultarInfo, 5000);
  });

  // Eventos para móvil (touch)
  logos[i].addEventListener("touchstart", function (e) {
    if (!isInsideFormOrModal(e.target)) {
      e.preventDefault();
    }
    var id = this.getAttribute("id");
    mostrarInfo(id);
  });

  logos[i].addEventListener("touchend", function (e) {
    if (!isInsideFormOrModal(e.target)) {
      e.preventDefault();
    }
    // Ocultar después de 8 segundos (5 + 3) en móvil
    timeoutId = setTimeout(ocultarInfo, 8000);
  });

  // Evento click para móvil
  logos[i].addEventListener("click", function (e) {
    // LOG: Verificar bubbling y submit
    if (e.target.tagName === "BUTTON" && e.target.type === "submit") {
      console.log(
        "[LOG] Click en botón submit dentro de formulario:",
        e.target,
      );
    }
    // Solo prevenir si es <a> o si no es dentro de form o modal
    if (e.target.tagName === "A" || !isInsideFormOrModal(e.target)) {
      if (e.target.tagName !== "BUTTON" && e.target.type !== "submit") {
        e.preventDefault();
      }
    }
    // LOG: Verificar submit global
    document.addEventListener(
      "submit",
      function (e) {
        console.log("[LOG] Evento submit disparado:", e.target);
      },
      true,
    );
    // Conservador: log global para verificar que el evento submit se dispara correctamente
    // Esto ayuda a depurar si algún preventDefault bloquea el submit
    var id = this.getAttribute("id");
    mostrarInfo(id);
    // Ocultar después de 8 segundos (5 + 3) en móvil
    timeoutId = setTimeout(ocultarInfo, 8000);
  });
}
