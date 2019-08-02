import {peliculas,juego} from './variables';
import * as core from './coreGame';
import * as utils from './utils';
import {iniciarTemporizador} from './timer';

function comprobarPartidaGuardada(){

    if(JSON.parse(localStorage.getItem('partida'))){
        cargar();
        mostrarPartidaAnterior();
    }else{
        utils.show('modalInicio');
    }
}

function guardar(){

    let partida = {
        tiempo: juego.timeleft,
        vidas: juego.vidas,
        contadorPeliculas: juego.contadorPeliculas,
        peliculaActual: juego.nombrePeliculaPantalla,
        contadorPistas: juego.contadorPistas,
        listaPeliculas: peliculas
    };

    localStorage.setItem('partida', JSON.stringify(partida));

}

function borrarPartida(){
    localStorage.removeItem('partida');

    Object.getOwnPropertyNames(peliculas).forEach(function (prop) {
        delete peliculas[prop];
    });
}

function cargar(){
    let partida = JSON.parse(localStorage.getItem('partida'));

    juego.timeleft = partida.tiempo;
    juego.vidas = partida.vidas;
    juego.contadorPeliculas = partida.contadorPeliculas;
    juego.nombrePeliculaPantalla = partida.peliculaActual;
    juego.contadorPistas = partida.contadorPistas;
    //cargar todas las peliculas
    for(var pelicula in partida.listaPeliculas){
        peliculas[pelicula]=partida.listaPeliculas[pelicula];
    };
}

function mostrarPartidaAnterior(){

    if(juego.contadorPistas>0){
        core.mostrarPista();
    }

    let corazones = document.querySelectorAll('#bars-hearts > img');
    
    for (let i = 0; i < (corazones.length - juego.vidas); i++) {
        corazones[i].classList.add('d-none');
    }

    utils.cogerPeliculaEnPantalla().innerHTML = juego.nombrePeliculaPantalla;
    iniciarTemporizador();
}

export {comprobarPartidaGuardada,guardar,borrarPartida,cargar,mostrarPartidaAnterior};
