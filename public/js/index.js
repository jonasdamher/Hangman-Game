import * as core from './modules/coreGame';
import {comprobarPartidaGuardada} from './modules/localStorage';
import {peliculaApi} from './modules/connectApi';
import {volveraInicio,restablecerPartida} from './modules/restart';

//Sección modal - inicio de juego
//
//Boton de buscador
document.getElementById('botonBuscador').addEventListener('click',peliculaApi, false); 
//Input de buscador
document.getElementById('buscadorPeliculas').addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      document.getElementById('botonBuscador').click();
    }
});

document.getElementById('btnJugar').addEventListener('click', core.empezar);

//Sección de juego
//
document.getElementById('pista').addEventListener('click', core.comprobarPista);

//Sección modal - de ganar y perder
//
document.getElementById('volver').addEventListener('click', volveraInicio, false); 
document.getElementById('reintentar').addEventListener('click', restablecerPartida, false); 

//Botones de teclado
for(var boton of document.getElementsByClassName('tecla')){
    boton.addEventListener('click', core.tecla, false); 
}

comprobarPartidaGuardada();
