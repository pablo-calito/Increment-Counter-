// Obtén todos los elementos con la clase "number"
const counters = document.querySelectorAll(".number");

// Función para iniciar el contador
function startCount() {
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target"); // Obtiene el número objetivo
    const step = 30; // Cantidad a incrementar en cada paso
    const delay = 0.1; // Tiempo de espera en milisegundos entre cada paso

    let current = 0; // Inicializa el valor actual en 0

    const updateCounter = () => {
      if (current < target) {
        current += step;
        counter.textContent = current; // Actualiza el contador en la página
        setTimeout(updateCounter, delay); // Llama a la función nuevamente después del tiempo de espera
      } else {
        counter.textContent = target; // Establece el valor final cuando se alcanza el objetivo
      }
    };

    updateCounter(); // Inicia el contador
  });
}

// Ejecuta la función cuando se cargue la página
window.addEventListener("load", startCount);
