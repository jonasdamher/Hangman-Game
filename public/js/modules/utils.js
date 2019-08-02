import * as core from './coreGame';
import {peliculas,juego} from './variables';

function cogerPeliculaDeObjeto(){
    return peliculas['pelicula'+juego.contadorPeliculas];
}

function cogerPeliculaEnPantalla(){
    return document.getElementById('pelicula');
}

function contarPeliculasDeObjeto(){
    return Object.keys(peliculas).length;
}

function show(idModal){
    document.getElementById(idModal).style.display = 'block';
}

function hide(idModal){
    document.getElementById(idModal).style.display = 'none';
}

function quitarCorazon(vidas){
    document.querySelectorAll('#bars-hearts > img')[vidas].classList.add('d-none');
}

function esconderLista(){
    var lista = document.getElementsByClassName('lista')[0];
    lista.classList.add('d-none');
}

function mensajeBuscador(){
    return document.getElementById('mensajeBuscador');
}

function mostrarListaDePeliculas(){
    let parrafo = document.createElement('li');
    parrafo.appendChild(document.createTextNode(peliculas['pelicula'+contarPeliculasDeObjeto()].Title));
    document.getElementById('listaPeliculas').appendChild(parrafo);
}

function mostrarLista(){
    var lista = document.getElementsByClassName('lista')[0];
    lista.classList.remove('d-none');
}

function mostrarPeliculaEnPantalla(){
    let pelicula = core.convertirPeliculaEnGuiones(cogerPeliculaDeObjeto().Title);
    cogerPeliculaEnPantalla().innerHTML = pelicula;
    juego.nombrePeliculaPantalla = pelicula;
}

export {cogerPeliculaDeObjeto,cogerPeliculaEnPantalla,contarPeliculasDeObjeto,show,hide,quitarCorazon,esconderLista,mensajeBuscador,mostrarListaDePeliculas,mostrarLista,mostrarPeliculaEnPantalla};
