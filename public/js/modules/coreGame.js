import {peliculas,juego} from './variables';
import * as utils from './utils';
import {guardar} from './localStorage';
import {restablecer,restablecerPistas,restablecerTeclado} from './restart';
import {iniciarTemporizador,pararTemporizador} from './timer';

export function empezar() {
    if (utils.contarPeliculasDeObjeto() > 0) {
        utils.hide('modalInicio');
        iniciarTemporizador();
        utils.mostrarPeliculaEnPantalla();
        guardar();
    }
}

export function tecla(){
    this.disabled = true;
    compararPelicula(this);
}

export function convertirPeliculaEnGuiones(pelicula){
    let fraseConGuiones = '';

    for (let i = 0; i < pelicula.length; i++) {
        let caracter = pelicula.charAt(i).match(/\s/gi)?' ':'_';

        fraseConGuiones += caracter;
    }
    return fraseConGuiones;
}

export function compararPelicula(tecla){

    let nombreDePelicula = buscarCoincidencias(tecla.innerHTML);

    juego.nombrePeliculaPantalla = nombreDePelicula;

    comprobarPelicula(nombreDePelicula);
}

export function buscarCoincidencias(letra){

    var textoOriginal = utils.cogerPeliculaDeObjeto().Title.split(''), 
        texto_ = utils.cogerPeliculaEnPantalla().innerHTML.split(''),
        textoModificado = '';

    for (let i = 0; i < textoOriginal.length; i++) {
        if(textoOriginal[i].search(new RegExp(letra, 'i'))!=-1){
            texto_[i] = textoOriginal[i];
        }
    }

    texto_.map(function(letra) {
        textoModificado+= letra;
    });

    return textoModificado;
}

export function comprobarPelicula(nombreDePelicula){

    if(utils.cogerPeliculaEnPantalla().innerHTML == nombreDePelicula){
        fail();

    }else if(utils.cogerPeliculaDeObjeto().Title==nombreDePelicula){
        if(juego.contadorPeliculas>=utils.contarPeliculasDeObjeto()){
            utils.show('modalGanar');
            pararTemporizador();
        }else{
            juego.contadorPeliculas++;
            juego.timeleft = 60;

            utils.mostrarPeliculaEnPantalla();
            restablecerPistas();
            restablecerTeclado();
        }
    }else{
        utils.cogerPeliculaEnPantalla().innerHTML = nombreDePelicula;
    }

    guardar();

}

export function comprobarPista() {
    if(juego.contadorPistas<2){
        pista();
    }
}

export function pista(){
    juego.timeleft -=5;
    juego.contadorPistas++;
    mostrarPista();
    fail();
}

export function mostrarPista(){
    
    let pista = '';

    switch(juego.contadorPistas){
        case 1:
            pista = 'Actors';
            break;
        case 2:
            pista = 'Plot';
            break;
    }
    
    document.getElementById('frasePista').innerHTML = peliculas['pelicula'+juego.contadorPeliculas][pista];

}

export function fail() {
    juego.vidas--;
    utils.quitarCorazon(juego.vidas);
    if (juego.vidas==0) {  
        gameOver();
    }
}

export function gameOver() {
    pararTemporizador();
    restablecer();
    guardar();
    utils.show('modalPerder');
}
