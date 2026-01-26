// Efecto Matrix Digital para transiciones del menú
document.addEventListener("DOMContentLoaded", function () {
  inicializarEfectoMatrix();
});

function inicializarEfectoMatrix() {
  const menu = document.getElementById("lista");
  if (!menu) return;

  // Agregar estilos CSS para el efecto Matrix
  agregarEstilosMatrix();

  // Configurar elementos del menú
  configurarElementosMenu();

  console.log("Efecto Matrix Digital inicializado");
}

function agregarEstilosMatrix() {
  const estilosMatrix = `
    /* Efecto Matrix para apertura/cierre del menú */
    .menu {
        overflow: hidden;
        background: #000;
        border: 1px solid #00ffff;
        position: relative;
    }
    body.night-mode .menu {
        border-color: #c0c0c0 !important;
        background-color: #1a1a1a !important;
        box-shadow: 0 0 10px rgba(192, 192, 192, 0.3) !important;
    }
    
    .menu-item {
        position: relative;
        overflow: hidden;
        background: #000;
        border: 1px solid #00ffff;
        margin: 2px 0;
        transition: all 0.3s ease;
    }
    body.night-mode .menu-item {
        border-color: #c0c0c0 !important;
        background-color: #1a1a1a !important;
        box-shadow: 0 0 10px rgba(192, 192, 192, 0.3) !important;
    }
    
    .menu-item::before {
        content: '1010101010101010';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        color: #00ffff;
        font-family: 'Courier New', monospace;
        font-size: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.5s ease;
        z-index: 2;
        white-space: nowrap;
    }
    body.night-mode .menu-item::before{
             border-color: #c0c0c0 !important;
             background-color: #1a1a1a !important;
             box-shadow: 0 0 10px rgba(192, 192, 192, 0.3) !important;
         }
    
    .menu-item a {
        position: relative;
        z-index: 3;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    /* Animación de apertura */
    .menu.visible .menu-item {
        animation: matrix-decode 0.8s ease forwards;
    }
    
    .menu.visible .menu-item::before {
        animation: matrix-fall 0.8s ease forwards;
    }
    
    .menu.visible .menu-item a {
        animation: matrix-text-appear 0.8s ease forwards;
        animation-delay: 0.4s;
    }
    
    /* Animación de cierre */
    .menu:not(.visible) .menu-item {
        animation: matrix-encode 0.6s ease forwards;
    }
    
    .menu:not(.visible) .menu-item::before {
        animation: matrix-rise 0.6s ease forwards;
    }
    
    .menu:not(.visible) .menu-item a {
        animation: matrix-text-disappear 0.3s ease forwards;
    }
    
    @keyframes matrix-decode {
        0% {
            transform: translateY(-100%);
            opacity: 0;
        }
        50% {
            transform: translateY(-50%);
            opacity: 0.5;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes matrix-fall {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        50% {
            transform: translateY(50%);
            opacity: 0.5;
        }
        100% {
            transform: translateY(100%);
            opacity: 0;
        }
    }
    
    @keyframes matrix-text-appear {
        0% {
            opacity: 0;
            transform: scale(0.8);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes matrix-encode {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        50% {
            transform: translateY(-50%);
            opacity: 0.5;
        }
        100% {
            transform: translateY(-100%);
            opacity: 0;
        }
    }
    
    @keyframes matrix-rise {
        0% {
            transform: translateY(100%);
            opacity: 0;
        }
        50% {
            transform: translateY(50%);
            opacity: 0.5;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes matrix-text-disappear {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0.8);
        }
    }
    
    /* Efecto de glitch para el código binario */
    .menu-item::before {
        animation: matrix-glitch 3s infinite;
    }
    
    @keyframes matrix-glitch {
        0%, 90%, 100% { 
            content: '1010101010101010';
            transform: translateY(0);
        }
        5% { 
            content: '1100110011001100';
            transform: translateY(-1px);
        }
        10% { 
            content: '1010101010101010';
            transform: translateY(0);
        }
        15% { 
            content: '1001100110011001';
            transform: translateY(1px);
        }
        20% { 
            content: '1010101010101010';
            transform: translateY(0);
        }
    }
    
    /* Efecto de partículas Matrix */
    .menu::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: 
            radial-gradient(circle, #00ffff 1px, transparent 1px);
        background-size: 10px 10px;
        opacity: 0;
        animation: matrix-particles 2s linear infinite;
        pointer-events: none;
    }
    
    .menu.visible::after {
        opacity: 0.3;
    }
    
    @keyframes matrix-particles {
        0% { transform: translateY(0px); }
        100% { transform: translateY(-20px); }
    }
    
    /* Efecto de sonido visual */
    .menu-item:hover::before {
        animation: matrix-hover 0.5s ease;
    }
    
    @keyframes matrix-hover {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    `;

  const styleSheet = document.createElement("style");
  styleSheet.textContent = estilosMatrix;
  document.head.appendChild(styleSheet);
}

function configurarElementosMenu() {
  const menuItems = document.querySelectorAll(".menu li");

  menuItems.forEach((item, index) => {
    // Agregar clase para identificar elementos del menú
    item.classList.add("menu-item");

    // Agregar delay personalizado para cada elemento
    item.style.setProperty("--item-index", index);

    // Generar código binario aleatorio para cada elemento
    generarCodigoBinarioAleatorio(item);

    // Agregar efecto de sonido al hacer hover
    item.addEventListener("mouseenter", function () {
      reproducirSonidoMatrix();
    });
  });
}

function generarCodigoBinarioAleatorio(elemento) {
  const patronesBinarios = [
    "1010101010101010",
    "1100110011001100",
    "1001100110011001",
    "1111000011110000",
    "1011011010110110",
    "1100001111000011",
    "1001011001101001",
    "1111111100000000",
  ];

  // Seleccionar patrón aleatorio
  const patronAleatorio =
    patronesBinarios[Math.floor(Math.random() * patronesBinarios.length)];

  // Aplicar el patrón al elemento
  elemento.style.setProperty("--binary-pattern", `'${patronAleatorio}'`);
}

function reproducirSonidoMatrix() {
  // Crear un beep Matrix usando Web Audio API
  try {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Frecuencia más baja para sonido Matrix
    oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
    oscillator.type = "sawtooth";

    gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.currentTime + 0.2
    );

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
  } catch (error) {
    console.log("Audio no disponible");
  }
}

// Función para actualizar código binario en tiempo real
function actualizarCodigoBinario() {
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
    if (!item.matches(":hover")) {
      const nuevoCodigo = generarCodigoAleatorio();
      item.style.setProperty("--binary-pattern", `'${nuevoCodigo}'`);
    }
  });
}

function generarCodigoAleatorio() {
  let codigo = "";
  for (let i = 0; i < 16; i++) {
    codigo += Math.random() > 0.5 ? "1" : "0";
  }
  return codigo;
}

// Actualizar código binario cada 3 segundos
setInterval(actualizarCodigoBinario, 3000);

// Agregar estilos CSS dinámicamente para el patrón binario
const estilosDinamicos = `
.menu-item::before {
    content: var(--binary-pattern, '1010101010101010');
}
`;

const styleSheetDinamico = document.createElement("style");
styleSheetDinamico.textContent = estilosDinamicos;
document.head.appendChild(styleSheetDinamico);
