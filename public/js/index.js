var peliculas = {};

var temporizador, timeleft = 60,
    vidas = 6,
    contadorPeliculas = 1,
    contadorPistas = 0,
    nombrePeliculaPantalla = '';

cargar();

teclado();
botonesModal();

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
        contadorPeliculas: contadorPeliculas,
        peliculaActual: nombrePeliculaPantalla,
        peliculas: peliculas,
        contadorPistas: contadorPistas,
    };

    localStorage.setItem('partida', JSON.stringify(objeto));

}

function cargar(){
    let partida = JSON.parse(localStorage.getItem('partida'));
    if(partida){
        timeleft = partida.tiempo;
        vidas = partida.vidas;
        contadorPeliculas = partida.contadorPeliculas;
        nombrePeliculaPantalla = partida.peliculaActual;
        peliculas = partida.peliculas;
        contadorPistas = partida.contadorPistas;

        mostrarCorazonesPartidaAnterior();
        if(contadorPistas>0){
            mostrarPista();
        }

        cogerPeliculaEnPantalla().innerHTML = nombrePeliculaPantalla;
        iniciarTemporizador();  
    }else{
        mostrarModal('modalInicio');
    }
}

// Coge una pelicula del objeto peliculas

function cogerPeliculaDeObjeto(){
    return peliculas["pelicula"+contadorPeliculas];
}

function contarPeliculasDeObjeto(){
    return Object.keys(peliculas).length;
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

    }else if(cogerPeliculaDeObjeto().Title==nombreDePelicula){
        if(contadorPeliculas>=contarPeliculasDeObjeto()){
            mostrarModal('modalGanar');
            pararTemporizador();
        }else{
            contadorPeliculas++;
            timeleft = 60;

            mostrarPeliculaEnPantalla();
            restablecerPistas();
            restablecerTeclado();
        }
    }else{
        cogerPeliculaEnPantalla().innerHTML = nombreDePelicula;
    }

    guardar();

}

//Boton para pistas
document.getElementById("pista").onclick = function() {
    if(contadorPistas<2){
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
    let pista = '';

    switch(contadorPistas){
        case 1:
            pista = 'Actors';
            break;
        case 2:
            pista = 'Plot';
            break;
    }
    let pistas = peliculas['pelicula'+contadorPeliculas][pista];
    
    document.getElementById('frasePista').innerHTML = pistas;
}

function mostrarCorazonesPartidaAnterior(){

    let corazones = document.querySelectorAll("#bars-hearts > img");
    
    for (let i = 0; i < (corazones.length - vidas); i++) {
        corazones[i].classList.add("d-none");
    }
}

function quitarCorazon(vidas){
    document.querySelectorAll("#bars-hearts > img")[vidas].classList.add("d-none");
}

//Restablecer

function botonesModal(){
    document.getElementById("volver").addEventListener("click", volveraInicio, false); 
    document.getElementById("reintentar").addEventListener("click", restablecerPartida, false); 
}

function volveraInicio(){
    restablecer();
    pararTemporizador();
    mostrarModal('modalInicio');
    
    localStorage.removeItem('partida');

    Object.getOwnPropertyNames(peliculas).forEach(function (prop) {
        delete peliculas[prop];
    });

    let listaPelisInicio = document.getElementById('listaPeliculas').getElementsByTagName('li');
    for (const key in listaPelisInicio) {
        document.getElementById('listaPeliculas').removeChild(listaPelisInicio[key]);
    }

    esconderLista();
}

function restablecerPartida(){
    restablecer();
    iniciarTemporizador();
}

function restablecer(){
    vidas = 6;
    timeleft = 60;
    contadorPeliculas = 1;
    
    quitarModal('modalPerder');
    quitarModal('modalGanar');

    restablecerPistas();
    mostrarPeliculaEnPantalla();
    restablecerTeclado();
    restablecerCorazones();
}

function restablecerPistas(){
    contadorPistas = 0;
    document.getElementById('frasePista').innerHTML = "";
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
        corazon.classList.remove("d-none");
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
    pararTemporizador();
}

//progressbar de un minuto

function iniciarTemporizador(){

    temporizador = setInterval(function(){
        document.getElementById("progressBar").value = 60 - timeleft;
        --timeleft;

        if(timeleft <= 0){
            clearInterval(temporizador);
            gameOver();
        }
    }, 1000);
}

function pararTemporizador(){
    clearInterval(temporizador);
}

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
                        mensajeBuscador().classList.add('d-none');
                        mostrarListaDePeliculas();
                        mostrarLista();
                    }else{
                        mensajeBuscador().innerHTML = 'La pelicula '+textoBuscar+' ya está en la lista';
                        mensajeBuscador().classList.remove('d-none');
                    }
    
                }else{
                    mensajeBuscador().innerHTML = 'No se ha encontrado la pelicula '+textoBuscar;
                    mensajeBuscador().classList.remove('d-none');
                }
            });
        });
    }
    document.getElementById('buscadorPeliculas').value = '';
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

function mostrarLista(){
    var lista = document.getElementsByClassName('lista')[0];
    lista.classList.remove('d-none');
}

function esconderLista(){
    var lista = document.getElementsByClassName('lista')[0];
    lista.classList.add('d-none');
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

//gab
//boton jugar, pasa informacion api para empezar a jugar
function empezar() {
    if (contarPeliculasDeObjeto() > 0) {
        quitarModal("modalInicio");
        iniciarTemporizador();
        mostrarPeliculaEnPantalla();
        guardar();
    }
}

document.getElementById("btnJugar").addEventListener("click", empezar);
