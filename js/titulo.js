document.addEventListener("DOMContentLoaded", function () {
  // Capturamos elementos del DOM
  let animado = document.getElementById("h1");

  let primera = document.getElementById("primera");

  function mostrarscroll() {
    let scrolltop = document.documentElement.scrollTop;

    let altura1 = primera.offsetTop;

    // Verificamos si la posición de desplazamiento es mayor a 300px
    if (scrolltop > 100) {
      animado.style.opacity = 1;
    } else {
      animado.style.opacity = 0;
    }
  }

  // Añadimos un listener al evento de scroll y llamamos a la función mostrarscroll
  window.addEventListener("scroll", mostrarscroll);

  // Llamamos a la función mostrarscroll una vez al inicio para establecer la opacidad inicial
  mostrarscroll();
});
