var peliculas = {
    
    pelicula1:{ 
        nombre:'El rey leon',
        pistas:{
            pista1: 'blabla1',
            pista2: 'blabla2'
        }
    },
    pelicula2:{ 
        nombre:'Spider-Man Home Coming',
        pistas:{
            pista1: 'blabla1',
            pista2: 'blabla2'
        }
    },
    pelicula3:{ 
        nombre:'X-Men dias del futuro pasado',
        pistas:{
            pista1: 'blabla1',
            pista2: 'blabla2'
        }
    }

};

var timeleft = 60,
vidas = 6,
contadorPeliculas = 1,
contadorPistas = 0,
nombrePeliculaPantalla = '';

var botonPistas = document.getElementById("pista");

//Modal
var modal = document.getElementById("MyModal");
var botonReintentar = document.getElementById("reintentar");

//recoge todos los botones y los pasa a la funcion teclado
teclado(document.getElementsByClassName("tecla"));

mostrarPeliculaEnPantalla();

cargar();

// Coge una pelicula del objeto peliculas

function cogerPelicula(){
    var peliActual = peliculas["pelicula"+contadorPeliculas];
    return peliActual;
}

//Muestra en pantalla el nombre de la pelicula actual

function mostrarPeliculaEnPantalla(){
    let texto = convertirFraseEnGuiones(cogerPelicula().nombre);
    fraseEnPantalla().innerHTML = texto;
}

function fraseEnPantalla(){
    return document.getElementById("frasePeli");
}

function compararPelicula(botonActual){
    let nombreDePelicula = peliculas["pelicula"+(contadorPeliculas)].nombre;

    let frasePantalla = fraseEnPantalla();

    let textoModificado = buscarCoincidencias(nombreDePelicula,frasePantalla.innerHTML,botonActual.innerHTML);
    
    nombrePeliculaPantalla = textoModificado;

    if(frasePantalla.innerHTML == textoModificado){
        vidas = fail(vidas);

    }else if(nombreDePelicula==textoModificado){
        mostrarPeliculaEnPantalla();
        tecladoDefault();
        timeleft = 60;
        contadorPeliculas++;

    }else{
        frasePantalla.innerHTML = textoModificado;

    }

    desactivarTecla(botonActual);

    guardar();

}

// Default
// Son funciones que restablecen

function tecladoDefault(){
    let botones = document.getElementsByClassName("tecla");
    for(var boton of botones){
        boton.disabled = false;
        boton.classList.remove("button-disabled");
    }
}

function corazonesDefault(){
    let corazones = document.querySelectorAll("#bars-hearts > img");
    for(var corazon of corazones){
        corazon.classList.remove("hide");
    }
}

function mostrarVidasPartidaAnterior(){

    let corazones = document.querySelectorAll("#bars-hearts > img");
    
    for (let i = 0; i < (corazones.length - vidas); i++) {
        corazones[i].classList.add("hide");
    }
}

function desactivarTecla(botonActual){
    botonActual.classList.add("button-disabled");
    botonActual.disabled = true;;
}

//Busca la letra pulsada con el boton en el nombre de la pelicula

function buscarCoincidencias(texto,textoPantalla,letra){

    var textoOriginal = texto.split(""), 
        texto_ = textoPantalla.split(""),
        textoModificado = '';

    for (let i = 0; i < texto.length; i++) {
        if(textoOriginal[i].search(new RegExp(letra, "i"))!=-1){
            texto_[i] = textoOriginal[i];
        }
    }

    texto_.map(function(letra) {
        textoModificado+= letra;
    });

    return textoModificado;
}

//Al pulsar boton de teclado llama a esta funcion y recoge la letra

function cogerLetraDeTeclado(){
    compararPelicula(this);
}

//Añadir un listener a cada boton del teclado

function teclado(botones){
    for(var boton of botones){
        boton.addEventListener("click", cogerLetraDeTeclado, false); 
    }
}

// Convierte un texto en _ y devuelve la texto.

function convertirFraseEnGuiones(frase){
    let fraseConGuiones = '';

    for (let i = 0; i < frase.length; i++) {
        let caracter = frase.charAt(i).match(/\s/gi)?" ":'_';

        fraseConGuiones += caracter;
    }
    return fraseConGuiones;
}

//funcion para perder vidas
function fail(x) {
    
    x--;
    guardar();

    let corazones = document.querySelectorAll("#bars-hearts > img");
    corazones[x].classList.add("hide");

    if (x==0) {
       
        gameOver();
    }
    return x;
}

//funcion para cuando pierdes (?cambiar?)
function gameOver() {
    modal.style.display = "block";
}

//progressbar de un minuto

var downloadTimer = setInterval(function(){
  document.getElementById("progressBar").value = 60 - timeleft;
  --timeleft;
  if(timeleft <= 0){
    gameOver();
  }
}, 1000);

//modal

botonReintentar.onclick = function() {
    vidas = 6;
    timeleft = 60;
    contadorPeliculas = 1;
    contadorPistas = 0;
    mostrarPeliculaEnPantalla();
    modal.style.display = "none";
    document.getElementById('frasePista').innerHTML = "";
    tecladoDefault();
    corazonesDefault();
}

//Boton para pistas

botonPistas.onclick = function() {

    if(contadorPistas < Object.keys(peliculas["pelicula"+contadorPeliculas].pistas).length){
        pista();
    }
}

function pista(){
    contadorPistas++;
    mostrarPista();
    vidas = fail(vidas);
    timeleft -=5;
}

function mostrarPista(){
    var pistas = peliculas["pelicula"+contadorPeliculas].pistas;
    var contenedorPista = document.getElementById('frasePista');
    contenedorPista.innerHTML = pistas['pista'+contadorPistas];
}

function guardar(){

    var objeto = {
        tiempo: timeleft,
        vidas: vidas,
        peliActual: contadorPeliculas,
        pistaActual: contadorPistas,
        frase: nombrePeliculaPantalla
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
        nombrePeliculaPantalla = partida.frase;
    
        mostrarVidasPartidaAnterior();
        mostrarPista();

        fraseEnPantalla().innerHTML = nombrePeliculaPantalla;    
    }
    
}
