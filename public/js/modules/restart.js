import {juego} from './variables';
import * as utils from './utils';
import {borrarPartida} from './localStorage';
import {iniciarTemporizador,pararTemporizador} from './timer';

function volveraInicio(){
    utils.hide('modalGanar');
    utils.show('modalInicio');

    borrarPartida();
    restablecer();
    pararTemporizador();

    let listaPelisInicio = document.getElementById('listaPeliculas').getElementsByTagName('li');

    if(listaPelisInicio.length>0){

        for (const key in listaPelisInicio.length) {
            console.log(key);
            document.getElementById('listaPeliculas').removeChild(listaPelisInicio[key]);
        }
        utils.esconderLista();
    }

}

function restablecerPartida(){
    utils.hide('modalPerder');
    iniciarTemporizador();
    utils.mostrarPeliculaEnPantalla();
}

function restablecer(){
    juego.vidas = 6;
    juego.timeleft = 60;
    juego.contadorPeliculas = 1;
    restablecerPistas();
    restablecerTeclado();
    restablecerCorazones();
}

function restablecerPistas(){
    juego.contadorPistas = 0;
    document.getElementById('frasePista').innerHTML = '';
}

function restablecerTeclado(){
    let botones = document.getElementsByClassName('tecla');
    for(var boton of botones){
        boton.disabled = false;
    }
}

function restablecerCorazones(){
    let corazones = document.querySelectorAll('#bars-hearts > img');
    for(var corazon of corazones){
        corazon.classList.remove('d-none');
    }
}

export {volveraInicio,restablecerPartida,restablecer,restablecerPistas,restablecerTeclado,restablecerCorazones};
