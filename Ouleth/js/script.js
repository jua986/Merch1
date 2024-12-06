const track = document.querySelector('.carousel-track');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;

// Actualiza la posición del carrusel y el botón activo
const updateCarousel = (index) => {
    const trackWidth = track.offsetWidth / 3; // Divide por el número de elementos
    track.style.transform = `translateX(${-index * trackWidth}px)`;

    indicators.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
};

// Configura los eventos de los botones
indicators.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel(currentIndex);
    });
});

// Auto-slide cada 5 segundos
setInterval(() => {
    currentIndex = (currentIndex + 1) % indicators.length;
    updateCarousel(currentIndex);
}, 5000);

const changeVideoButton = document.getElementById('changeVideo');
const video = document.getElementById('myVideo');

// Cambiar el video al hacer clic
changeVideoButton.addEventListener('click', () => {
  video.src = 'nuevo-video.mp4'; // Cambiar el archivo de video
  video.play(); // Reproducir el nuevo video automáticamente
});
