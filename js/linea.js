// Funciones de filtrado actualizadas para trabajar con datos dinámicos
function actualizarVista() {
  // Esta función ahora llama a la nueva función de carreras
  actualizarVistaCarreras();
}

function actualizarVista2() {
  // Esta función ahora llama a la nueva función de cursos
  actualizarVistaCursos();
}

// Función para actualizar altura de sección
function actualizarAlturaSeccion() {
  document.getElementById("segunda").style.height = "auto";
}
