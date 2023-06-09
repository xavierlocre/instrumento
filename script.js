window.addEventListener('DOMContentLoaded', function() {
    document.body.style.backgroundImage = "url('fondo_web.jpg')";
});
const buttons = document.querySelectorAll('.sonidoboton');
const audios = document.querySelectorAll('audio');

// iniciar el sonido cuando se hace clic o se presiona la tecla
function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const button = document.querySelector(`button[data-key="${keyCode}"]`);
  
  if (!audio) return; // Salir si no hay audio asociado a la tecla
  audio.currentTime = 0; // Reiniciar el audio para poder reproducirlo varias veces seguidas
  audio.play();
  
  // Agregar una clase de estilo al botón para resaltar que se ha presionado
  button.classList.add('active');
}

// Función para detener la reproducción del sonido y eliminar la clase de estilo
function stopSound(keyCode) {
  const button = document.querySelector(`button[data-key="${keyCode}"]`);
  if (!button) return; // Salir si no hay botón asociado a la tecla
  
  // Eliminar la clase de estilo
  button.classList.remove('active');
}

// Evento clic en los botones
buttons.forEach(button => {
  button.addEventListener('click', function() {
    const keyCode = this.getAttribute('data-key');
    playSound(keyCode);
  });
});

// Evento tecla presionada
window.addEventListener('keydown', function(event) {
  const keyCode = event.keyCode.toString();
  playSound(keyCode);
});

// Evento tecla soltada
window.addEventListener('keyup', function(event) {
  const keyCode = event.keyCode.toString();
  stopSound(keyCode);
});
