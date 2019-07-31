import {peliculas} from './modules/peliculas';
/*
var timeleft = 60,
    vidas = 6,
    contadorPeliculas = 1,
    contadorPistas = 0,
    nombrePeliculaPantalla = '';

teclado();

botonesRestablecerPartida();

cargar();

function tecla(){
    this.classList.add("button-disabled");
    this.disabled = true;
    compararPelicula(this);
}

function teclado(){
    for(var boton of document.getElementsByClassName("tecla")){
        boton.addEventListener("click", tecla, false); 
    }
}

function guardar(){

    var objeto = {
        tiempo: timeleft,
        vidas: vidas,
        peliActual: contadorPeliculas,
        pistaActual: contadorPistas,
        pelicula: nombrePeliculaPantalla
    };

    localStorage.setItem('partida', JSON.stringify(objeto));

}

function cargar(){
    let partida = JSON.parse(localStorage.getItem('partida'));
    if(partida){
        timeleft = partida.tiempo;
        vidas = partida.vidas;
        contadorPeliculas = partida.peliActual;
        contadorPistas = partida.pistaActual;
        nombrePeliculaPantalla = partida.pelicula;
    
        mostrarCorazonesPartidaAnterior();
        if(contadorPistas>0){
            mostrarPista();
}

        cogerPeliculaEnPantalla().innerHTML = nombrePeliculaPantalla;    
    }else{
        mostrarPeliculaEnPantalla();
    }
}

// Coge una pelicula del objeto peliculas

function cogerPeliculaDeObjeto(){
    var peliActual = peliculas["pelicula"+contadorPeliculas];
    return peliActual;
}

// Convierte un texto en guiones y devuelve el texto.

function convertirPeliculaEnGuiones(pelicula){
    let fraseConGuiones = '';

    for (let i = 0; i < pelicula.length; i++) {
        let caracter = pelicula.charAt(i).match(/\s/gi)?" ":'_';

        fraseConGuiones += caracter;
    }
    return fraseConGuiones;
}

//Muestra en pantalla el nombre de la pelicula actual

function mostrarPeliculaEnPantalla(){
    let pelicula = convertirPeliculaEnGuiones(cogerPeliculaDeObjeto().nombre);
    cogerPeliculaEnPantalla().innerHTML = pelicula;
    nombrePeliculaPantalla = pelicula;
}

function cogerPeliculaEnPantalla(){
    return document.getElementById("pelicula");
}

function compararPelicula(tecla){

    let nombreDePelicula = buscarCoincidencias(tecla.innerHTML);

    nombrePeliculaPantalla = nombreDePelicula;

    comprobarPelicula(nombreDePelicula);
}

function buscarCoincidencias(letra){

    var textoOriginal = cogerPeliculaDeObjeto().nombre.split(""), 
        texto_ = cogerPeliculaEnPantalla().innerHTML.split(""),
        textoModificado = '';

    for (let i = 0; i < textoOriginal.length; i++) {
        if(textoOriginal[i].search(new RegExp(letra, "i"))!=-1){
            texto_[i] = textoOriginal[i];
        }
    }

    texto_.map(function(letra) {
        textoModificado+= letra;
    });

    return textoModificado;
}

function comprobarPelicula(nombreDePelicula){

    if(cogerPeliculaEnPantalla().innerHTML == nombreDePelicula){
        fail();

    }else if(contadorPeliculas>=Object.keys(peliculas).length){
        mostrarModal('modalGanar');

    }else if(cogerPeliculaDeObjeto().nombre==nombreDePelicula){
        contadorPeliculas++;
        timeleft = 60;
        mostrarPeliculaEnPantalla();
        restablecerTeclado();

    }else{
        cogerPeliculaEnPantalla().innerHTML = nombreDePelicula;
    }

    guardar();

}

//Boton para pistas
document.getElementById("pista").onclick = function() {
    if(contadorPistas < Object.keys(peliculas["pelicula"+contadorPeliculas].pistas).length){
        pista();
    }
}

function pista(){
    timeleft -=5;
    contadorPistas++;
    mostrarPista();
    fail();
}

function mostrarPista(){
    let pistas = peliculas["pelicula"+contadorPeliculas].pistas;
    
    document.getElementById('frasePista').innerHTML = pistas['pista'+contadorPistas];
}

function mostrarCorazonesPartidaAnterior(){

    let corazones = document.querySelectorAll("#bars-hearts > img");
    
    for (let i = 0; i < (corazones.length - vidas); i++) {
        corazones[i].classList.add("hide");
    }
}

function quitarCorazon(vidas){
    document.querySelectorAll("#bars-hearts > img")[vidas].classList.add("hide");
}

//Restablecer

function botonesRestablecerPartida(){
    for(var boton of document.getElementsByClassName("reintentar")){
        boton.addEventListener("click", restablecerPartida, false); 
    }
}

function restablecerPartida(){
    vidas = 6;
    timeleft = 60;
    contadorPeliculas = 1;
    contadorPistas = 0;
    
    quitarModal('modalPerder');
    quitarModal('modalGanar');

    document.getElementById('frasePista').innerHTML = "";
    
    mostrarPeliculaEnPantalla();
    restablecerTeclado();
    restablecerCorazones();
}

function restablecerTeclado(){
    let botones = document.getElementsByClassName("tecla");
    for(var boton of botones){
        boton.disabled = false;
        boton.classList.remove("button-disabled");
    }
}

function restablecerCorazones(){
    let corazones = document.querySelectorAll("#bars-hearts > img");
    for(var corazon of corazones){
        corazon.classList.remove("hide");
    }
}

//funcion para perder vidas
function fail() {
    vidas--;
    quitarCorazon(vidas);
    if (vidas==0) {  
        gameOver();
    }
}

//funcion para cuando pierdes
function gameOver() {
    mostrarModal('modalPerder');
}

//progressbar de un minuto
var downloadTimer = setInterval(function(){
    document.getElementById("progressBar").value = 60 - timeleft;
    --timeleft;
    if(timeleft <= 0){
      gameOver();
    }
  
  }, 1000);

function mostrarModal(idModal){
    document.getElementById(idModal).style.display = "block";
}

function quitarModal(idModal){
    document.getElementById(idModal).style.display = "none";
}*/

function ComprobarPeliculaApi(){
    let textoBuscar = document.getElementById('buscadorPeliculas').value.trim();

    fetch('https://www.omdbapi.com/?apikey=61e63fb9&t='+textoBuscar)
    .then(function(response){
        response.json().then(function(data){
            if(data.Response != 'False'){
                let total = ++(Object.keys(peliculas).length);
                peliculas["pelicula"+total] = data;
                mensajeBuscador().classList.add('hide');
                mostrarListaDePeliculas();
                console.log('si está');

            }else{
                mensajeBuscador().innerHTML = 'No se ha encontrado la pelicula '+textoBuscar;
                mensajeBuscador().classList.remove('hide');
                console.log('no está');
            }
        });
    });


}

//&apikey=61e63fb9

document.getElementById('botonBuscador').addEventListener('click',ComprobarPeliculaApi, false); 

function mensajeBuscador(){
    return document.getElementById('mensajeBuscador');
}

document.getElementById("buscadorPeliculas").addEventListener("keyup", function(event){
    event.preventDefault();
    if (event.keyCode === 13) {
        $("#myButton").click();
    }
});

function mostrarListaDePeliculas(){
   for(var pelicula in peliculas){
    /*
    let node = document.createElement('p');
    var textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementById('listaPeliculas').appendChild(node);
    */

    console.log(pelicula['Title']);
   }
   console.log(peliculas);

}