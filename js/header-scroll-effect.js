// Header siempre fijo en la parte superior
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    if (!header) return;
    
    // Asegurar que el header esté siempre visible y fijo
    header.classList.add('header-fixed');
    header.classList.remove('header-hidden', 'header-visible');
    
    // Agregar estilos CSS para header fijo
    const headerStyles = `
    .header-fixed {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        z-index: 1000 !important;
        transform: none !important;
        opacity: 1 !important;
        transition: none !important;
        pointer-events: auto !important;
    }
    
    header {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        z-index: 1000 !important;
        background-color: #808080 !important;
        border-bottom: 1px dashed #00ffff !important;
        box-shadow: 0 2px 10px rgba(0, 255, 255, 0.3) !important;
    }
    
    /* Asegurar que el contenido principal tenga margen superior */
    #primera {
        margin-top: 120px !important;
    }
    
    /* Eliminar cualquier efecto de ocultamiento */
    .header-hidden,
    .header-visible {
        display: block !important;
        transform: none !important;
        opacity: 1 !important;
        pointer-events: auto !important;
    }
    `;
    
    // Insertar estilos en el head
    const styleSheet = document.createElement('style');
    styleSheet.textContent = headerStyles;
    document.head.appendChild(styleSheet);
    
    console.log('Header configurado como fijo y siempre visible');
}); 