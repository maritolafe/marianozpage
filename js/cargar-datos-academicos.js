// Cargar datos académicos desde JSON
document.addEventListener('DOMContentLoaded', function() {
    cargarDatosAcademicos();
});

async function cargarDatosAcademicos() {
    try {
        const response = await fetch('data/academic-data.json');
        const data = await response.json();
        
        // Generar tabla de carreras
        generarTablaCarreras(data.carreras);
        
        // Generar tabla de cursos
        generarTablaCursos(data.cursos);
        
    } catch (error) {
        console.error('Error al cargar los datos académicos:', error);
    }
}

function generarTablaCarreras(carreras) {
    const tablaCarrera = document.getElementById('carrera');
    if (!tablaCarrera) return;
    
    // Limpiar filas existentes (excepto headers)
    const filasExistentes = tablaCarrera.querySelectorAll('tr:not(:first-child):not(:nth-child(2))');
    filasExistentes.forEach(fila => fila.remove());
    
    // Agregar filas de datos
    carreras.forEach(carrera => {
        const fila = document.createElement('tr');
        fila.className = carrera.clase;
        
        fila.innerHTML = `
            <td>${carrera.nombre}</td>
            <td>${carrera.establecimiento}</td>
            <td>${carrera.estado}</td>
        `;
        
        tablaCarrera.appendChild(fila);
    });
}

function generarTablaCursos(cursos) {
    const tablaCursos = document.getElementById('cursos');
    if (!tablaCursos) return;
    
    // Limpiar filas existentes (excepto headers)
    const filasExistentes = tablaCursos.querySelectorAll('tr:not(:first-child):not(:nth-child(2))');
    filasExistentes.forEach(fila => fila.remove());
    
    // Agregar filas de datos
    cursos.forEach(curso => {
        const fila = document.createElement('tr');
        fila.className = curso.clase;
        
        fila.innerHTML = `
            <td>${curso.nombre}</td>
            <td>${curso.establecimiento}</td>
            <td>${curso.estado}</td>
        `;
        
        tablaCursos.appendChild(fila);
    });
} 