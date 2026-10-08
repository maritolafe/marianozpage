// Theme Toggle - Modo Día/Noche
document.addEventListener('DOMContentLoaded', function() {
    // Crear botón de toggle
    const themeToggle = document.createElement('button');
    themeToggle.id = 'themeToggle';
    themeToggle.innerHTML = '🌙';
    themeToggle.title = 'Cambiar tema';
    themeToggle.className = 'theme-toggle-btn';
    
    // Agregar botón al footer
    const footer = document.querySelector('footer');
    footer.appendChild(themeToggle);
    
    // Siempre iniciar en modo día
    document.body.classList.remove('night-mode');
    themeToggle.innerHTML = '🌙';
    localStorage.setItem('theme', 'day');
    
    // Función toggle
    function toggleTheme() {
        const body = document.body;
        const isDark = body.classList.contains('night-mode');
        
        if (isDark) {
            body.classList.remove('night-mode');
            themeToggle.innerHTML = '🌙';
            localStorage.setItem('theme', 'day');
        } else {
            body.classList.add('night-mode');
            themeToggle.innerHTML = '☀️';
            localStorage.setItem('theme', 'night');
        }
    }
    
    // Event listener
    themeToggle.addEventListener('click', toggleTheme);
    
    // Agregar efecto de sonido (opcional)
    themeToggle.addEventListener('click', function() {
        // Crear audio para efecto de sonido
        const audio = new Audio();
        audio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT';
        audio.volume = 0.1;
        audio.play().catch(() => {}); // Ignorar errores de audio
    });
}); 