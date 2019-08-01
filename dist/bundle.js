/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/index.js":
/*!****************************!*\
  !*** ./public/js/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var peliculas = {};\r\n\r\nvar temporizador, timeleft = 60,\r\n    vidas = 6,\r\n    contadorPeliculas = 1,\r\n    contadorPistas = 0,\r\n    nombrePeliculaPantalla = '';\r\n\r\ncargar();\r\n\r\nteclado();\r\nbotonesModal();\r\n\r\nfunction tecla(){\r\n    this.disabled = true;\r\n    compararPelicula(this);\r\n}\r\n\r\nfunction teclado(){\r\n    for(var boton of document.getElementsByClassName(\"tecla\")){\r\n        boton.addEventListener(\"click\", tecla, false); \r\n    }\r\n}\r\n\r\nfunction guardar(){\r\n\r\n    var objeto = {\r\n        tiempo: timeleft,\r\n        vidas: vidas,\r\n        contadorPeliculas: contadorPeliculas,\r\n        peliculaActual: nombrePeliculaPantalla,\r\n        peliculas: peliculas,\r\n        contadorPistas: contadorPistas,\r\n    };\r\n\r\n    localStorage.setItem('partida', JSON.stringify(objeto));\r\n\r\n}\r\n\r\nfunction cargar(){\r\n    let partida = JSON.parse(localStorage.getItem('partida'));\r\n    if(partida){\r\n        timeleft = partida.tiempo;\r\n        vidas = partida.vidas;\r\n        contadorPeliculas = partida.contadorPeliculas;\r\n        nombrePeliculaPantalla = partida.peliculaActual;\r\n        peliculas = partida.peliculas;\r\n        contadorPistas = partida.contadorPistas;\r\n\r\n        mostrarCorazonesPartidaAnterior();\r\n        if(contadorPistas>0){\r\n            mostrarPista();\r\n        }\r\n\r\n        cogerPeliculaEnPantalla().innerHTML = nombrePeliculaPantalla;\r\n        iniciarTemporizador();  \r\n    }else{\r\n        mostrarModal('modalInicio');\r\n    }\r\n}\r\n\r\n// Coge una pelicula del objeto peliculas\r\n\r\nfunction cogerPeliculaDeObjeto(){\r\n    return peliculas[\"pelicula\"+contadorPeliculas];\r\n}\r\n\r\nfunction contarPeliculasDeObjeto(){\r\n    return Object.keys(peliculas).length;\r\n}\r\n\r\n// Convierte un texto en guiones y devuelve el texto.\r\n\r\nfunction convertirPeliculaEnGuiones(pelicula){\r\n    let fraseConGuiones = '';\r\n\r\n    for (let i = 0; i < pelicula.length; i++) {\r\n        let caracter = pelicula.charAt(i).match(/\\s/gi)?\" \":'_';\r\n\r\n        fraseConGuiones += caracter;\r\n    }\r\n    return fraseConGuiones;\r\n}\r\n\r\n//Muestra en pantalla el Title de la pelicula actual\r\n\r\nfunction mostrarPeliculaEnPantalla(){\r\n    let pelicula = convertirPeliculaEnGuiones(cogerPeliculaDeObjeto().Title);\r\n    cogerPeliculaEnPantalla().innerHTML = pelicula;\r\n    nombrePeliculaPantalla = pelicula;\r\n}\r\n\r\nfunction cogerPeliculaEnPantalla(){\r\n    return document.getElementById(\"pelicula\");\r\n}\r\n\r\nfunction compararPelicula(tecla){\r\n\r\n    let nombreDePelicula = buscarCoincidencias(tecla.innerHTML);\r\n\r\n    nombrePeliculaPantalla = nombreDePelicula;\r\n\r\n    comprobarPelicula(nombreDePelicula);\r\n}\r\n\r\nfunction buscarCoincidencias(letra){\r\n\r\n    var textoOriginal = cogerPeliculaDeObjeto().Title.split(\"\"), \r\n        texto_ = cogerPeliculaEnPantalla().innerHTML.split(\"\"),\r\n        textoModificado = '';\r\n\r\n    for (let i = 0; i < textoOriginal.length; i++) {\r\n        if(textoOriginal[i].search(new RegExp(letra, \"i\"))!=-1){\r\n            texto_[i] = textoOriginal[i];\r\n        }\r\n    }\r\n\r\n    texto_.map(function(letra) {\r\n        textoModificado+= letra;\r\n    });\r\n\r\n    return textoModificado;\r\n}\r\n\r\nfunction comprobarPelicula(nombreDePelicula){\r\n\r\n    if(cogerPeliculaEnPantalla().innerHTML == nombreDePelicula){\r\n        fail();\r\n\r\n    }else if(cogerPeliculaDeObjeto().Title==nombreDePelicula){\r\n        if(contadorPeliculas>=contarPeliculasDeObjeto()){\r\n            mostrarModal('modalGanar');\r\n            pararTemporizador();\r\n        }else{\r\n            contadorPeliculas++;\r\n            timeleft = 60;\r\n\r\n            mostrarPeliculaEnPantalla();\r\n            restablecerPistas();\r\n            restablecerTeclado();\r\n        }\r\n    }else{\r\n        cogerPeliculaEnPantalla().innerHTML = nombreDePelicula;\r\n    }\r\n\r\n    guardar();\r\n\r\n}\r\n\r\n//Boton para pistas\r\ndocument.getElementById(\"pista\").onclick = function() {\r\n    if(contadorPistas<2){\r\n        pista();\r\n    }\r\n}\r\n\r\nfunction pista(){\r\n    timeleft -=5;\r\n    contadorPistas++;\r\n    mostrarPista();\r\n    fail();\r\n}\r\n\r\nfunction mostrarPista(){\r\n    let pista = '';\r\n\r\n    switch(contadorPistas){\r\n        case 1:\r\n            pista = 'Actors';\r\n            break;\r\n        case 2:\r\n            pista = 'Plot';\r\n            break;\r\n    }\r\n    let pistas = peliculas['pelicula'+contadorPeliculas][pista];\r\n    \r\n    document.getElementById('frasePista').innerHTML = pistas;\r\n}\r\n\r\nfunction mostrarCorazonesPartidaAnterior(){\r\n\r\n    let corazones = document.querySelectorAll(\"#bars-hearts > img\");\r\n    \r\n    for (let i = 0; i < (corazones.length - vidas); i++) {\r\n        corazones[i].classList.add(\"d-none\");\r\n    }\r\n}\r\n\r\nfunction quitarCorazon(vidas){\r\n    document.querySelectorAll(\"#bars-hearts > img\")[vidas].classList.add(\"d-none\");\r\n}\r\n\r\n//Restablecer\r\n\r\nfunction botonesModal(){\r\n    document.getElementById(\"volver\").addEventListener(\"click\", volveraInicio, false); \r\n    document.getElementById(\"reintentar\").addEventListener(\"click\", restablecerPartida, false); \r\n}\r\n\r\nfunction volveraInicio(){\r\n    restablecer();\r\n    pararTemporizador();\r\n    mostrarModal('modalInicio');\r\n}\r\n\r\nfunction restablecerPartida(){\r\n    restablecer();\r\n    iniciarTemporizador();\r\n}\r\n\r\nfunction restablecer(){\r\n    vidas = 6;\r\n    timeleft = 60;\r\n    contadorPeliculas = 1;\r\n    \r\n    quitarModal('modalPerder');\r\n    quitarModal('modalGanar');\r\n\r\n    restablecerPistas();\r\n    mostrarPeliculaEnPantalla();\r\n    restablecerTeclado();\r\n    restablecerCorazones();\r\n}\r\n\r\nfunction restablecerPistas(){\r\n    contadorPistas = 0;\r\n    document.getElementById('frasePista').innerHTML = \"\";\r\n}\r\n\r\nfunction restablecerTeclado(){\r\n    let botones = document.getElementsByClassName(\"tecla\");\r\n    for(var boton of botones){\r\n        boton.disabled = false;\r\n    }\r\n}\r\n\r\nfunction restablecerCorazones(){\r\n    let corazones = document.querySelectorAll(\"#bars-hearts > img\");\r\n    for(var corazon of corazones){\r\n        corazon.classList.remove(\"d-none\");\r\n    }\r\n}\r\n\r\n//funcion para perder vidas\r\nfunction fail() {\r\n    vidas--;\r\n    quitarCorazon(vidas);\r\n    if (vidas==0) {  \r\n        gameOver();\r\n    }\r\n}\r\n\r\n//funcion para cuando pierdes\r\nfunction gameOver() {\r\n    mostrarModal('modalPerder');\r\n    pararTemporizador();\r\n}\r\n\r\n//progressbar de un minuto\r\n\r\nfunction iniciarTemporizador(){\r\n\r\n    temporizador = setInterval(function(){\r\n        document.getElementById(\"progressBar\").value = 60 - timeleft;\r\n        --timeleft;\r\n\r\n        if(timeleft <= 0){\r\n            clearInterval(temporizador);\r\n            gameOver();\r\n        }\r\n\r\n        console.log(timeleft);\r\n    }, 1000);\r\n}\r\n\r\nfunction pararTemporizador(){\r\n    clearInterval(temporizador);\r\n}\r\n\r\nfunction mostrarModal(idModal){\r\n    document.getElementById(idModal).style.display = \"block\";\r\n}\r\n\r\nfunction quitarModal(idModal){\r\n    document.getElementById(idModal).style.display = \"none\";\r\n}\r\n\r\nfunction peliculaApi(){\r\n    let textoBuscar = document.getElementById('buscadorPeliculas').value.trim();\r\n    if(textoBuscar!=''){\r\n        fetch('https://www.omdbapi.com/?apikey=61e63fb9&t='+textoBuscar)\r\n        .then(function(response){\r\n            response.json().then(function(data){\r\n                if(data.Response != 'False'){\r\n                    \r\n                    if(comprobarPeliculaEnLista(data)){\r\n                        peliculas[\"pelicula\"+(++Object.keys(peliculas).length)] = data;\r\n                        mensajeBuscador().classList.add('d-none');\r\n                        mostrarListaDePeliculas();\r\n                        mostrarLista();\r\n                    }else{\r\n                        mensajeBuscador().innerHTML = 'La pelicula '+textoBuscar+' ya está en la lista';\r\n                        mensajeBuscador().classList.remove('d-none');\r\n                    }\r\n    \r\n                }else{\r\n                    mensajeBuscador().innerHTML = 'No se ha encontrado la pelicula '+textoBuscar;\r\n                    mensajeBuscador().classList.remove('d-none');\r\n                }\r\n            });\r\n        });\r\n    }\r\n}\r\n\r\ndocument.getElementById('botonBuscador').addEventListener('click',peliculaApi, false); \r\n\r\nfunction comprobarPeliculaEnLista(peliculaEncontrada){\r\n    for(var pelicula in peliculas){\r\n        if(peliculas[pelicula].Title == peliculaEncontrada.Title){\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n}\r\n\r\nfunction mensajeBuscador(){\r\n    return document.getElementById('mensajeBuscador');\r\n}\r\n\r\nfunction mostrarListaDePeliculas(){\r\n    let parrafo = document.createElement('li');\r\n    parrafo.appendChild(document.createTextNode(peliculas[\"pelicula\"+contarPeliculasDeObjeto()].Title));\r\n    document.getElementById('listaPeliculas').appendChild(parrafo);\r\n}\r\n\r\nfunction mostrarLista(){\r\n    var lista = document.getElementsByClassName('lista')[0];\r\n    lista.classList.remove('d-none');\r\n}\r\n\r\n/**\r\n * Cuando pulsas enter en el input buscador se pulsa el boton del buscador\r\n*/\r\n\r\ndocument.getElementById('buscadorPeliculas').addEventListener(\"keyup\", function(event) {\r\n    if (event.keyCode === 13) {\r\n      event.preventDefault();\r\n      document.getElementById(\"botonBuscador\").click();\r\n    }\r\n});\r\n\r\n//gab\r\n//boton jugar, pasa informacion api para empezar a jugar\r\nfunction empezar() {\r\n    if (contarPeliculasDeObjeto() > 0) {\r\n        quitarModal(\"modalInicio\");\r\n        iniciarTemporizador();\r\n        mostrarPeliculaEnPantalla();\r\n        guardar();\r\n    }\r\n}\r\n\r\ndocument.getElementById(\"btnJugar\").addEventListener(\"click\", empezar);\r\n\n\n//# sourceURL=webpack:///./public/js/index.js?");

/***/ })

/******/ });