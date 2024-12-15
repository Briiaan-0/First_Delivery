const carouselInner = document.querySelector('.carousel-inner');
let angle = 0;
const items = document.querySelectorAll('.carousel-item');

function rotateCarousel(direction = 1) {
  angle += direction * 90;
  carouselInner.style.transform = `rotateY(${angle}deg)`;
}

// Opción: Detener la animación automática al pasar el mouse
carouselInner.addEventListener('mouseover', () => {
  carouselInner.style.animationPlayState = 'paused';
});

carouselInner.addEventListener('mouseout', () => {
  carouselInner.style.animationPlayState = 'running';
});
