// Selecciona todos los elementos que deseas animar
const elements = document.querySelectorAll('.animate-on-scroll');

// Configura el IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // Verifica si el elemento está en el viewport
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible'); // Activa la animación
      observer.unobserve(entry.target); // Deja de observar el elemento una vez animado
    }
  });
}, { threshold: 0.2 }); // La animación se activa cuando el 20% del elemento es visible

// Aplica el observador a cada elemento
elements.forEach(element => {
  observer.observe(element);
});
