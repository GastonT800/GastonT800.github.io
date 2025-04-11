// Para lograr la animacion del contador usaremos un scripts
const numero = document.querySelector('.numero');
const target = parseInt(numero.dataset.target);
let contador = 0;
const intervalo = 45;

function actualizarContador() {
    if (contador < target) {
        contador++;
        numero.textContent = '+ ' + contador;
        setTimeout(actualizarContador, intervalo);
    } else {
        numero.textContent = '+ ' + target ;
    }
}

actualizarContador();