var peliculas = {};

var timeleft = 60,
    vidas = 6,
    contadorPeliculas = 1,
    contadorPistas = 0,
    nombrePeliculaPantalla = '';

teclado();

botonesRestablecerPartida();

function tecla(){
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

//Muestra en pantalla el Title de la pelicula actual

function mostrarPeliculaEnPantalla(){
    let pelicula = convertirPeliculaEnGuiones(cogerPeliculaDeObjeto().Title);
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

    var textoOriginal = cogerPeliculaDeObjeto().Title.split(""), 
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

    }else if(cogerPeliculaDeObjeto().Title==nombreDePelicula){
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
}

function peliculaApi(){
    let textoBuscar = document.getElementById('buscadorPeliculas').value.trim();
    if(textoBuscar!=''){
        fetch('https://www.omdbapi.com/?apikey=61e63fb9&t='+textoBuscar)
        .then(function(response){
            response.json().then(function(data){
                if(data.Response != 'False'){
                    
                    if(comprobarPeliculaEnLista(data)){
                        peliculas["pelicula"+(++Object.keys(peliculas).length)] = data;
                        mensajeBuscador().classList.add('hide');
                        mostrarListaDePeliculas();
                        mostrarLista();
                    }else{
                        mensajeBuscador().innerHTML = 'La pelicula '+textoBuscar+' ya está en la lista';
                        mensajeBuscador().classList.remove('hide');
                    }
    
                }else{
                    mensajeBuscador().innerHTML = 'No se ha encontrado la pelicula '+textoBuscar;
                    mensajeBuscador().classList.remove('hide');
                }
            });
        });
    }
}

document.getElementById('botonBuscador').addEventListener('click',peliculaApi, false); 

function comprobarPeliculaEnLista(peliculaEncontrada){
    for(var pelicula in peliculas){
        if(peliculas[pelicula].Title == peliculaEncontrada.Title){
            return false;
        }
    }
    return true;
}


function mensajeBuscador(){
    return document.getElementById('mensajeBuscador');
}

function mostrarListaDePeliculas(){
    let parrafo = document.createElement('li');
    parrafo.appendChild(document.createTextNode(peliculas["pelicula"+contarPeliculasDeObjeto()].Title));
    document.getElementById('listaPeliculas').appendChild(parrafo);
}

function contarPeliculasDeObjeto(){
    return Object.keys(peliculas).length;
}

/**
 * Cuando pulsas enter en el input buscador se pulsa el boton del buscador
*/
document.getElementById('buscadorPeliculas').addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("botonBuscador").click();
    }
});

function mostrarLista(){
    var lista = document.getElementsByClassName('lista')[0];
    lista.classList.remove('hide');
}


//gab
//boton jugar, pasa informacion api para empezar a jugar
var btnJugar = document.getElementById("btnJugar");
btnJugar.addEventListener("click", empezar);
function empezar() {
    if (contarPeliculasDeObjeto() > 0) {
        quitarModal("modalInicio");
    }
}