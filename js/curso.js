// Manejo completo de la botonera y tablas académicas
var foto = document.getElementById("segunda");
var tabla1 = document.getElementById("tabla1");
var tabla2 = document.getElementById("tabla2");
var checkCarrera = document.getElementById("checkcarrera");
var checkCurso = document.getElementById("checkcurso");

// Inicialización cuando se carga la página
window.onload = function () {
    if (foto) {
foto.style.transition = "height 2s ease-in-out";
        foto.style.height = "100px";
    }
    
    if (tabla1) tabla1.style.display = "none";
    if (tabla2) tabla2.style.display = "none";
    
    if (checkCarrera) checkCarrera.checked = false;
    if (checkCurso) checkCurso.checked = false;
    
    // Inicializar checkboxes de filtro en false y ocultar filas
    inicializarCheckboxesFiltro();
};

// Función para inicializar checkboxes de filtro
function inicializarCheckboxesFiltro() {
    // Checkboxes de carreras
    const ct1 = document.getElementById('ct1');
    const ci1 = document.getElementById('ci1');
    
    if (ct1) ct1.checked = false;
    if (ci1) ci1.checked = false;
    
    // Checkboxes de cursos
    const ct = document.getElementById('ct');
    const ci = document.getElementById('ci');
    
    if (ct) ct.checked = false;
    if (ci) ci.checked = false;
    
    // Ocultar todas las filas de datos
    ocultarTodasLasFilas();
}

// Función para ocultar todas las filas de datos
function ocultarTodasLasFilas() {
    // Ocultar filas de carreras
    document.querySelectorAll('.dato1, .dato2').forEach(el => {
        el.style.display = 'none';
    });
    
    // Ocultar filas de cursos
    document.querySelectorAll('.dato3, .dato4').forEach(el => {
        el.style.display = 'none';
    });
}

// Función para mostrar/ocultar tabla de carreras
function cursos() {
  if (tabla1.style.display == "block") {
    tabla1.style.display = "none";
    checkCarrera.checked = false;
    foto.style.height = "100px";
        // Resetear checkboxes de filtro a false
        resetearCheckboxesCarreras();
  } else {
    tabla1.style.display = "block";
    tabla2.style.display = "none";
        foto.style.height = "auto";
    checkCarrera.checked = true;
    checkCurso.checked = false;
        // Resetear checkboxes de filtro a false
        resetearCheckboxesCarreras();
  }
}

// Función para mostrar/ocultar tabla de cursos
function cursos2() {
  if (tabla2.style.display == "block") {
    foto.style.height = "100px";
    tabla2.style.display = "none";
    checkCurso.checked = false;
        // Resetear checkboxes de filtro a false
        resetearCheckboxesCursos();
  } else {
        foto.style.height = "auto";
    tabla2.style.display = "block";
    tabla1.style.display = "none";
    checkCurso.checked = true;
    checkCarrera.checked = false;
        // Resetear checkboxes de filtro a false
        resetearCheckboxesCursos();
    }
}

// Función para resetear checkboxes de carreras
function resetearCheckboxesCarreras() {
    const ct1 = document.getElementById('ct1');
    const ci1 = document.getElementById('ci1');
    
    if (ct1) ct1.checked = false;
    if (ci1) ci1.checked = false;
    
    // Ocultar todas las filas de carreras
    document.querySelectorAll('.dato1, .dato2').forEach(el => {
        el.style.display = 'none';
    });
}

// Función para resetear checkboxes de cursos
function resetearCheckboxesCursos() {
    const ct = document.getElementById('ct');
    const ci = document.getElementById('ci');
    
    if (ct) ct.checked = false;
    if (ci) ci.checked = false;
    
    // Ocultar todas las filas de cursos
    document.querySelectorAll('.dato3, .dato4').forEach(el => {
        el.style.display = 'none';
    });
}

// Función para filtrar por estado en carreras - manejo individual
function actualizarVistaCarreras() {
    const terminadas = document.getElementById('ct1').checked;
    const enProceso = document.getElementById('ci1').checked;
    
    // Filtrar filas terminadas
    document.querySelectorAll('.dato2').forEach(el => {
        const estado = el.querySelector('td:last-child').textContent;
        if (estado === 'terminado') {
            el.style.display = terminadas ? 'table-row' : 'none';
        }
    });
    
    // Filtrar filas en proceso
    document.querySelectorAll('.dato1').forEach(el => {
        const estado = el.querySelector('td:last-child').textContent;
        if (estado === 'en proceso') {
            el.style.display = enProceso ? 'table-row' : 'none';
        }
    });
    
    // Actualizar altura de la sección
    if (foto) foto.style.height = 'auto';
}

// Función para filtrar por estado en cursos - manejo individual
function actualizarVistaCursos() {
    const terminados = document.getElementById('ct').checked;
    const enProceso = document.getElementById('ci').checked;
    
    // Filtrar filas terminadas
    document.querySelectorAll('.dato4').forEach(el => {
        const estado = el.querySelector('td:last-child').textContent;
        if (estado === 'terminado') {
            el.style.display = terminados ? 'table-row' : 'none';
        }
    });
    
    // Filtrar filas en proceso
    document.querySelectorAll('.dato3').forEach(el => {
        const estado = el.querySelector('td:last-child').textContent;
        if (estado === 'en proceso') {
            el.style.display = enProceso ? 'table-row' : 'none';
        }
    });
    
    // Actualizar altura de la sección
    if (foto) foto.style.height = 'auto';
} 