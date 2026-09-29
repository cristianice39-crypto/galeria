// Reproducir videos al pasar el cursor
document.querySelectorAll('.foto-movimiento').forEach(contenedor => {
    const video = contenedor.querySelector('.mi-video');

    contenedor.addEventListener('mouseenter', () => {
        video.play().catch(() => {});
    });

    contenedor.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Reinicia el video al salir
    });
});