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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_peliculas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/peliculas */ \"./public/js/modules/peliculas.js\");\n\r\n/*\r\nvar timeleft = 60,\r\n    vidas = 6,\r\n    contadorPeliculas = 1,\r\n    contadorPistas = 0,\r\n    nombrePeliculaPantalla = '';\r\n\r\nteclado();\r\n\r\nbotonesRestablecerPartida();\r\n\r\ncargar();\r\n\r\nfunction tecla(){\r\n    this.classList.add(\"button-disabled\");\r\n    this.disabled = true;\r\n    compararPelicula(this);\r\n}\r\n\r\nfunction teclado(){\r\n    for(var boton of document.getElementsByClassName(\"tecla\")){\r\n        boton.addEventListener(\"click\", tecla, false); \r\n    }\r\n}\r\n\r\nfunction guardar(){\r\n\r\n    var objeto = {\r\n        tiempo: timeleft,\r\n        vidas: vidas,\r\n        peliActual: contadorPeliculas,\r\n        pistaActual: contadorPistas,\r\n        pelicula: nombrePeliculaPantalla\r\n    };\r\n\r\n    localStorage.setItem('partida', JSON.stringify(objeto));\r\n\r\n}\r\n\r\nfunction cargar(){\r\n    let partida = JSON.parse(localStorage.getItem('partida'));\r\n    if(partida){\r\n        timeleft = partida.tiempo;\r\n        vidas = partida.vidas;\r\n        contadorPeliculas = partida.peliActual;\r\n        contadorPistas = partida.pistaActual;\r\n        nombrePeliculaPantalla = partida.pelicula;\r\n    \r\n        mostrarCorazonesPartidaAnterior();\r\n        if(contadorPistas>0){\r\n            mostrarPista();\r\n}\r\n\r\n        cogerPeliculaEnPantalla().innerHTML = nombrePeliculaPantalla;    \r\n    }else{\r\n        mostrarPeliculaEnPantalla();\r\n    }\r\n}\r\n\r\n// Coge una pelicula del objeto peliculas\r\n\r\nfunction cogerPeliculaDeObjeto(){\r\n    var peliActual = peliculas[\"pelicula\"+contadorPeliculas];\r\n    return peliActual;\r\n}\r\n\r\n// Convierte un texto en guiones y devuelve el texto.\r\n\r\nfunction convertirPeliculaEnGuiones(pelicula){\r\n    let fraseConGuiones = '';\r\n\r\n    for (let i = 0; i < pelicula.length; i++) {\r\n        let caracter = pelicula.charAt(i).match(/\\s/gi)?\" \":'_';\r\n\r\n        fraseConGuiones += caracter;\r\n    }\r\n    return fraseConGuiones;\r\n}\r\n\r\n//Muestra en pantalla el nombre de la pelicula actual\r\n\r\nfunction mostrarPeliculaEnPantalla(){\r\n    let pelicula = convertirPeliculaEnGuiones(cogerPeliculaDeObjeto().nombre);\r\n    cogerPeliculaEnPantalla().innerHTML = pelicula;\r\n    nombrePeliculaPantalla = pelicula;\r\n}\r\n\r\nfunction cogerPeliculaEnPantalla(){\r\n    return document.getElementById(\"pelicula\");\r\n}\r\n\r\nfunction compararPelicula(tecla){\r\n\r\n    let nombreDePelicula = buscarCoincidencias(tecla.innerHTML);\r\n\r\n    nombrePeliculaPantalla = nombreDePelicula;\r\n\r\n    comprobarPelicula(nombreDePelicula);\r\n}\r\n\r\nfunction buscarCoincidencias(letra){\r\n\r\n    var textoOriginal = cogerPeliculaDeObjeto().nombre.split(\"\"), \r\n        texto_ = cogerPeliculaEnPantalla().innerHTML.split(\"\"),\r\n        textoModificado = '';\r\n\r\n    for (let i = 0; i < textoOriginal.length; i++) {\r\n        if(textoOriginal[i].search(new RegExp(letra, \"i\"))!=-1){\r\n            texto_[i] = textoOriginal[i];\r\n        }\r\n    }\r\n\r\n    texto_.map(function(letra) {\r\n        textoModificado+= letra;\r\n    });\r\n\r\n    return textoModificado;\r\n}\r\n\r\nfunction comprobarPelicula(nombreDePelicula){\r\n\r\n    if(cogerPeliculaEnPantalla().innerHTML == nombreDePelicula){\r\n        fail();\r\n\r\n    }else if(contadorPeliculas>=Object.keys(peliculas).length){\r\n        mostrarModal('modalGanar');\r\n\r\n    }else if(cogerPeliculaDeObjeto().nombre==nombreDePelicula){\r\n        contadorPeliculas++;\r\n        timeleft = 60;\r\n        mostrarPeliculaEnPantalla();\r\n        restablecerTeclado();\r\n\r\n    }else{\r\n        cogerPeliculaEnPantalla().innerHTML = nombreDePelicula;\r\n    }\r\n\r\n    guardar();\r\n\r\n}\r\n\r\n//Boton para pistas\r\ndocument.getElementById(\"pista\").onclick = function() {\r\n    if(contadorPistas < Object.keys(peliculas[\"pelicula\"+contadorPeliculas].pistas).length){\r\n        pista();\r\n    }\r\n}\r\n\r\nfunction pista(){\r\n    timeleft -=5;\r\n    contadorPistas++;\r\n    mostrarPista();\r\n    fail();\r\n}\r\n\r\nfunction mostrarPista(){\r\n    let pistas = peliculas[\"pelicula\"+contadorPeliculas].pistas;\r\n    \r\n    document.getElementById('frasePista').innerHTML = pistas['pista'+contadorPistas];\r\n}\r\n\r\nfunction mostrarCorazonesPartidaAnterior(){\r\n\r\n    let corazones = document.querySelectorAll(\"#bars-hearts > img\");\r\n    \r\n    for (let i = 0; i < (corazones.length - vidas); i++) {\r\n        corazones[i].classList.add(\"hide\");\r\n    }\r\n}\r\n\r\nfunction quitarCorazon(vidas){\r\n    document.querySelectorAll(\"#bars-hearts > img\")[vidas].classList.add(\"hide\");\r\n}\r\n\r\n//Restablecer\r\n\r\nfunction botonesRestablecerPartida(){\r\n    for(var boton of document.getElementsByClassName(\"reintentar\")){\r\n        boton.addEventListener(\"click\", restablecerPartida, false); \r\n    }\r\n}\r\n\r\nfunction restablecerPartida(){\r\n    vidas = 6;\r\n    timeleft = 60;\r\n    contadorPeliculas = 1;\r\n    contadorPistas = 0;\r\n    \r\n    quitarModal('modalPerder');\r\n    quitarModal('modalGanar');\r\n\r\n    document.getElementById('frasePista').innerHTML = \"\";\r\n    \r\n    mostrarPeliculaEnPantalla();\r\n    restablecerTeclado();\r\n    restablecerCorazones();\r\n}\r\n\r\nfunction restablecerTeclado(){\r\n    let botones = document.getElementsByClassName(\"tecla\");\r\n    for(var boton of botones){\r\n        boton.disabled = false;\r\n        boton.classList.remove(\"button-disabled\");\r\n    }\r\n}\r\n\r\nfunction restablecerCorazones(){\r\n    let corazones = document.querySelectorAll(\"#bars-hearts > img\");\r\n    for(var corazon of corazones){\r\n        corazon.classList.remove(\"hide\");\r\n    }\r\n}\r\n\r\n//funcion para perder vidas\r\nfunction fail() {\r\n    vidas--;\r\n    quitarCorazon(vidas);\r\n    if (vidas==0) {  \r\n        gameOver();\r\n    }\r\n}\r\n\r\n//funcion para cuando pierdes\r\nfunction gameOver() {\r\n    mostrarModal('modalPerder');\r\n}\r\n\r\n//progressbar de un minuto\r\nvar downloadTimer = setInterval(function(){\r\n    document.getElementById(\"progressBar\").value = 60 - timeleft;\r\n    --timeleft;\r\n    if(timeleft <= 0){\r\n      gameOver();\r\n    }\r\n  \r\n  }, 1000);\r\n\r\nfunction mostrarModal(idModal){\r\n    document.getElementById(idModal).style.display = \"block\";\r\n}\r\n\r\nfunction quitarModal(idModal){\r\n    document.getElementById(idModal).style.display = \"none\";\r\n}*/\r\n\r\nfunction ComprobarPeliculaApi(){\r\n    let textoBuscar = document.getElementById('buscadorPeliculas').value;\r\n    console.log(textoBuscar);\r\n\r\n    fetch('https://www.omdbapi.com/?apikey=61e63fb9&t='+textoBuscar)\r\n    .then(function(response){\r\n        response.json().then(function(data){\r\n            if(data.Response != 'False'){\r\n                let total = ++(Object.keys(_modules_peliculas__WEBPACK_IMPORTED_MODULE_0__[\"peliculas\"]).length);\r\n                    _modules_peliculas__WEBPACK_IMPORTED_MODULE_0__[\"peliculas\"][\"pelicula\"+total] = data;\r\n                    mensajeBuscador().classList.add('hide');\r\n            }else{\r\n                mensajeBuscador().innerHTML = 'No se ha encontrado la pelicula '+textoBuscar;\r\n                mensajeBuscador().classList.remove('hide');\r\n            }\r\n        });\r\n    });\r\n\r\n    console.log(_modules_peliculas__WEBPACK_IMPORTED_MODULE_0__[\"peliculas\"]);\r\n\r\n}\r\n\r\n//&apikey=61e63fb9\r\n\r\ndocument.getElementById('botonBuscador').addEventListener('click',ComprobarPeliculaApi, false); \r\n\r\nfunction mensajeBuscador(){\r\n    return document.getElementById('mensajeBuscador');\r\n}\n\n//# sourceURL=webpack:///./public/js/index.js?");

/***/ }),

/***/ "./public/js/modules/peliculas.js":
/*!****************************************!*\
  !*** ./public/js/modules/peliculas.js ***!
  \****************************************/
/*! exports provided: peliculas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"peliculas\", function() { return peliculas; });\nvar peliculas = {};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./public/js/modules/peliculas.js?");

/***/ })

/******/ });