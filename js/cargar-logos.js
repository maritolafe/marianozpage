// Cargar logos dinámicamente desde JSON
console.log('Script cargar-logos.js iniciado');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado, iniciando carga de logos');
    cargarLogos();
});

async function cargarLogos() {
    try {
        const response = await fetch('data/logos.json');
        const data = await response.json();
        
        // Generar logos dinámicamente
        generarLogos(data.logos);
        
        // Configurar descripción general
        configurarDescripcionGeneral(data.descripcionGeneral);
        
        // Inicializar funcionalidad de logos
        inicializarFuncionalidadLogos(data.logos);
        
    } catch (error) {
        console.error('Error al cargar los logos:', error);
        // Fallback: mostrar mensaje de error
        mostrarErrorCarga();
    }
}

function generarLogos(logos) {
    const contenedorLogos = document.getElementById('logotipo');
    if (!contenedorLogos) {
        console.error('No se encontró el contenedor de logos');
        return;
    }
    
    // Limpiar contenedor
    contenedorLogos.innerHTML = '';
    
    // Generar cada logo
    logos.forEach((logo, index) => {
        const img = document.createElement('img');
        img.src = logo.imagen;
        img.alt = logo.alt;
        img.id = logo.id;
        img.className = 'logo';
        img.title = logo.title;
        img.setAttribute('onfocus', `${logo.id}();`);
        
        contenedorLogos.appendChild(img);
    });
    
    console.log('Logos generados:', logos.length);
}

function configurarDescripcionGeneral(descripcionGeneral) {
    const cuadrito2 = document.getElementById('cuadrito2');
    if (!cuadrito2) {
        console.error('No se encontró el contenedor de descripción general');
        return;
    }
    
    cuadrito2.innerHTML = `
        <h5>${descripcionGeneral.titulo}</h5>
        <p class="pc">${descripcionGeneral.texto}</p>
    `;
    
    console.log('Descripción general configurada');
}

function inicializarFuncionalidadLogos(logos) {
    // Variables globales
    var cuadrodein = document.getElementById('cuadrodein');
    var cuadrito2 = document.getElementById('cuadrito2');
    
    if (!cuadrodein || !cuadrito2) {
        console.error('No se encontraron los contenedores de descripciones');
        return;
    }
    
    // Generar descripciones dinámicamente
    generarDescripciones(logos);
    
    // Mostrar descripción general por defecto
    mostrarDescripcionGeneral();
    
    // Crear funciones dinámicamente para cada logo
    logos.forEach(logo => {
        window[logo.id] = function() {
            mostrarDescripcionLogo(logo.id);
        };
    });
    
    // Agregar eventos después de que los logos existan
    setTimeout(() => {
        agregarEventosLogos();
    }, 100);
    
    console.log('Funcionalidad de logos inicializada');
}

function generarDescripciones(logos) {
    const cuadrodein = document.getElementById('cuadrodein');
    if (!cuadrodein) {
        console.error('No se encontró el contenedor de descripciones');
        return;
    }
    
    // Limpiar contenedor
    cuadrodein.innerHTML = '';
    
    // Generar descripción para cada logo
    logos.forEach((logo, index) => {
        const descripcion = document.createElement('div');
        descripcion.id = (index + 1).toString();
        descripcion.className = 'ficture';
        descripcion.style.display = 'none'; // Ocultar por defecto
        
        let contenidoHTML = `
            <h5>${logo.descripcion.titulo}</h5>
            <p>${logo.descripcion.texto}</p>
        `;
        
        // Agregar barra de progreso si es necesario
        if (logo.descripcion.mostrarProgreso && logo.descripcion.progreso > 0) {
            contenidoHTML += `
                <div class="progress" role="progressbar" aria-label="Progress example" 
                     aria-valuenow="${logo.descripcion.progreso}" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar text-bg-warning" style="width: ${logo.descripcion.progreso}%">
                        ${logo.descripcion.progreso}% dominio
                    </div>
                </div>
            `;
        }
        
        descripcion.innerHTML = contenidoHTML;
        cuadrodein.appendChild(descripcion);
    });
    
    console.log('Descripciones generadas:', logos.length);
}

function agregarEventosLogos() {
    const logos = document.querySelectorAll('.logo');
    const cuadrodein = document.getElementById('cuadrodein');
    const cuadrito2 = document.getElementById('cuadrito2');
    var timeoutId = null;
    
    logos.forEach(logo => {
        // Eventos para desktop (mouse)
        logo.addEventListener('mouseover', function() {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            const id = this.getAttribute('id');
            mostrarDescripcionLogo(id);
        });
        
        logo.addEventListener('mouseout', function() {
            timeoutId = setTimeout(mostrarDescripcionGeneral, 5000);
        });
        
        // Eventos para móvil (touch)
        logo.addEventListener('touchstart', function(e) {
            e.preventDefault();
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            const id = this.getAttribute('id');
            mostrarDescripcionLogo(id);
        });
        
        logo.addEventListener('touchend', function(e) {
            e.preventDefault();
            timeoutId = setTimeout(mostrarDescripcionGeneral, 8000);
        });
        
        // Evento click
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            const id = this.getAttribute('id');
            mostrarDescripcionLogo(id);
            timeoutId = setTimeout(mostrarDescripcionGeneral, 8000);
        });
    });
    
    console.log('Eventos agregados a', logos.length, 'logos');
}

// Función para mostrar descripción de un logo específico
function mostrarDescripcionLogo(logoId) {
    const cuadrodein = document.getElementById('cuadrodein');
    const cuadrito2 = document.getElementById('cuadrito2');
    
    if (!cuadrodein || !cuadrito2) return;
    
    // Ocultar descripción general
    cuadrito2.style.display = 'none';
    cuadrodein.style.display = 'block';
    
    // Ocultar todas las descripciones
    const descripciones = cuadrodein.querySelectorAll('.ficture');
    descripciones.forEach(desc => {
        desc.style.display = 'none';
    });
    
    // Mostrar la descripción correspondiente
    const logoIndex = getLogoIndexById(logoId);
    if (logoIndex !== -1) {
        const descripcion = document.getElementById((logoIndex + 1).toString());
        if (descripcion) {
            descripcion.style.display = 'block';
        }
    }
}

// Función auxiliar para obtener el índice del logo por ID
function getLogoIndexById(logoId) {
    const logos = document.querySelectorAll('.logo');
    for (let i = 0; i < logos.length; i++) {
        if (logos[i].id === logoId) {
            return i;
        }
    }
    return -1;
}

// Función para ocultar todas las descripciones
function ocultarTodos() {
    const cuadrodein = document.getElementById('cuadrodein');
    if (!cuadrodein) return;
    
    const descripciones = cuadrodein.querySelectorAll('.ficture');
    descripciones.forEach(desc => {
        desc.style.display = 'none';
    });
}

// Función para mostrar la descripción general
function mostrarDescripcionGeneral() {
    const cuadrodein = document.getElementById('cuadrodein');
    const cuadrito2 = document.getElementById('cuadrito2');
    
    if (!cuadrodein || !cuadrito2) return;
    
    ocultarTodos();
    cuadrodein.style.display = 'none';
    cuadrito2.style.display = 'block';
}

// Función para mostrar error de carga
function mostrarErrorCarga() {
    const contenedorLogos = document.getElementById('logotipo');
    const cuadrito2 = document.getElementById('cuadrito2');
    
    if (contenedorLogos) {
        contenedorLogos.innerHTML = '<p style="color: #00ffff;">Error al cargar los logos. Por favor, recarga la página.</p>';
    }
    
    if (cuadrito2) {
        cuadrito2.innerHTML = `
            <h5>Tecnologías</h5>
            <p class="pc">Error al cargar la información de tecnologías.</p>
        `;
    }
} 