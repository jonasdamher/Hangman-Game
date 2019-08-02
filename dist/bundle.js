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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_coreGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/coreGame */ \"./public/js/modules/coreGame.js\");\n/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/localStorage */ \"./public/js/modules/localStorage.js\");\n/* harmony import */ var _modules_connectApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/connectApi */ \"./public/js/modules/connectApi.js\");\n/* harmony import */ var _modules_restart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/restart */ \"./public/js/modules/restart.js\");\n\n\n\n //Sección modal - inicio de juego\n//\n//Boton de buscador\n\ndocument.getElementById('botonBuscador').addEventListener('click', _modules_connectApi__WEBPACK_IMPORTED_MODULE_2__[\"peliculaApi\"], false); //Input de buscador\n\ndocument.getElementById('buscadorPeliculas').addEventListener('keyup', function (e) {\n  if (e.keyCode === 13) {\n    e.preventDefault();\n    document.getElementById('botonBuscador').click();\n  }\n});\ndocument.getElementById('btnJugar').addEventListener('click', _modules_coreGame__WEBPACK_IMPORTED_MODULE_0__[\"empezar\"]); //Sección de juego\n//\n\ndocument.getElementById('pista').addEventListener('click', _modules_coreGame__WEBPACK_IMPORTED_MODULE_0__[\"comprobarPista\"]); //Sección modal - de ganar y perder\n//\n\ndocument.getElementById('volver').addEventListener('click', _modules_restart__WEBPACK_IMPORTED_MODULE_3__[\"volveraInicio\"], false);\ndocument.getElementById('reintentar').addEventListener('click', _modules_restart__WEBPACK_IMPORTED_MODULE_3__[\"restablecerPartida\"], false); //Botones de teclado\n\nvar _iteratorNormalCompletion = true;\nvar _didIteratorError = false;\nvar _iteratorError = undefined;\n\ntry {\n  for (var _iterator = document.getElementsByClassName('tecla')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n    var boton = _step.value;\n    boton.addEventListener('click', _modules_coreGame__WEBPACK_IMPORTED_MODULE_0__[\"tecla\"], false);\n  }\n} catch (err) {\n  _didIteratorError = true;\n  _iteratorError = err;\n} finally {\n  try {\n    if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n      _iterator[\"return\"]();\n    }\n  } finally {\n    if (_didIteratorError) {\n      throw _iteratorError;\n    }\n  }\n}\n\nObject(_modules_localStorage__WEBPACK_IMPORTED_MODULE_1__[\"comprobarPartidaGuardada\"])();\n\n//# sourceURL=webpack:///./public/js/index.js?");

/***/ }),

/***/ "./public/js/modules/connectApi.js":
/*!*****************************************!*\
  !*** ./public/js/modules/connectApi.js ***!
  \*****************************************/
/*! exports provided: comprobarPeliculaEnLista, peliculaApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"comprobarPeliculaEnLista\", function() { return comprobarPeliculaEnLista; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"peliculaApi\", function() { return peliculaApi; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./public/js/modules/variables.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./public/js/modules/utils.js\");\n\n\n\nfunction comprobarPeliculaEnLista(peliculaEncontrada) {\n  for (var pelicula in _variables__WEBPACK_IMPORTED_MODULE_0__[\"peliculas\"]) {\n    if (_variables__WEBPACK_IMPORTED_MODULE_0__[\"peliculas\"][pelicula].Title == peliculaEncontrada.Title) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nfunction peliculaApi() {\n  var textoBuscar = document.getElementById('buscadorPeliculas').value.trim();\n\n  if (textoBuscar != '') {\n    fetch('https://www.omdbapi.com/?apikey=61e63fb9&t=' + textoBuscar).then(function (response) {\n      response.json().then(function (data) {\n        if (data.Response != 'False') {\n          if (comprobarPeliculaEnLista(data)) {\n            _variables__WEBPACK_IMPORTED_MODULE_0__[\"peliculas\"]['pelicula' + ++Object.keys(_variables__WEBPACK_IMPORTED_MODULE_0__[\"peliculas\"]).length] = data;\n            _utils__WEBPACK_IMPORTED_MODULE_1__[\"mensajeBuscador\"]().classList.add('d-none');\n            _utils__WEBPACK_IMPORTED_MODULE_1__[\"mostrarListaDePeliculas\"]();\n            _utils__WEBPACK_IMPORTED_MODULE_1__[\"mostrarLista\"]();\n          } else {\n            _utils__WEBPACK_IMPORTED_MODULE_1__[\"mensajeBuscador\"]().innerHTML = 'La pelicula ' + textoBuscar + ' ya está en la lista';\n            _utils__WEBPACK_IMPORTED_MODULE_1__[\"mensajeBuscador\"]().classList.remove('d-none');\n          }\n        } else {\n          _utils__WEBPACK_IMPORTED_MODULE_1__[\"mensajeBuscador\"]().innerHTML = 'No se ha encontrado la pelicula ' + textoBuscar;\n          _utils__WEBPACK_IMPORTED_MODULE_1__[\"mensajeBuscador\"]().classList.remove('d-none');\n        }\n      });\n    });\n  }\n\n  document.getElementById('buscadorPeliculas').value = '';\n}\n\n\n\n//# sourceURL=webpack:///./public/js/modules/connectApi.js?");

/***/ }),

/***/ "./public/js/modules/coreGame.js":
/*!***************************************!*\
  !*** ./public/js/modules/coreGame.js ***!
  \***************************************/
/*! exports provided: empezar, tecla, convertirPeliculaEnGuiones, compararPelicula, buscarCoincidencias, comprobarPelicula, comprobarPista, pista, mostrarPista, fail, gameOver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"empezar\", function() { return empezar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tecla\", function() { return tecla; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertirPeliculaEnGuiones\", function() { return convertirPeliculaEnGuiones; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compararPelicula\", function() { return compararPelicula; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buscarCoincidencias\", function() { return buscarCoincidencias; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"comprobarPelicula\", function() { return comprobarPelicula; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"comprobarPista\", function() { return comprobarPista; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pista\", function() { return pista; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mostrarPista\", function() { return mostrarPista; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fail\", function() { return fail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameOver\", function() { return gameOver; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./public/js/modules/variables.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./public/js/modules/utils.js\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ \"./public/js/modules/localStorage.js\");\n/* harmony import */ var _restart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restart */ \"./public/js/modules/restart.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timer */ \"./public/js/modules/timer.js\");\n\n\n\n\n\nfunction empezar() {\n  if (_utils__WEBPACK_IMPORTED_MODULE_1__[\"contarPeliculasDeObjeto\"]() > 0) {\n    _utils__WEBPACK_IMPORTED_MODULE_1__[\"hide\"]('modalInicio');\n    Object(_timer__WEBPACK_IMPORTED_MODULE_4__[\"iniciarTemporizador\"])();\n    _utils__WEBPACK_IMPORTED_MODULE_1__[\"mostrarPeliculaEnPantalla\"]();\n    Object(_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"guardar\"])();\n  }\n}\nfunction tecla() {\n  this.disabled = true;\n  compararPelicula(this);\n}\nfunction convertirPeliculaEnGuiones(pelicula) {\n  var fraseConGuiones = '';\n\n  for (var i = 0; i < pelicula.length; i++) {\n    var caracter = pelicula.charAt(i).match(/\\s/gi) ? ' ' : '_';\n    fraseConGuiones += caracter;\n  }\n\n  return fraseConGuiones;\n}\nfunction compararPelicula(tecla) {\n  var nombreDePelicula = buscarCoincidencias(tecla.innerHTML);\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].nombrePeliculaPantalla = nombreDePelicula;\n  comprobarPelicula(nombreDePelicula);\n}\nfunction buscarCoincidencias(letra) {\n  var textoOriginal = _utils__WEBPACK_IMPORTED_MODULE_1__[\"cogerPeliculaDeObjeto\"]().Title.split(''),\n      texto_ = _utils__WEBPACK_IMPORTED_MODULE_1__[\"cogerPeliculaEnPantalla\"]().innerHTML.split(''),\n      textoModificado = '';\n\n  for (var i = 0; i < textoOriginal.length; i++) {\n    if (textoOriginal[i].search(new RegExp(letra, 'i')) != -1) {\n      texto_[i] = textoOriginal[i];\n    }\n  }\n\n  texto_.map(function (letra) {\n    textoModificado += letra;\n  });\n  return textoModificado;\n}\nfunction comprobarPelicula(nombreDePelicula) {\n  if (_utils__WEBPACK_IMPORTED_MODULE_1__[\"cogerPeliculaEnPantalla\"]().innerHTML == nombreDePelicula) {\n    fail();\n  } else if (_utils__WEBPACK_IMPORTED_MODULE_1__[\"cogerPeliculaDeObjeto\"]().Title == nombreDePelicula) {\n    if (_variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].contadorPeliculas >= _utils__WEBPACK_IMPORTED_MODULE_1__[\"contarPeliculasDeObjeto\"]()) {\n      _utils__WEBPACK_IMPORTED_MODULE_1__[\"show\"]('modalGanar');\n      Object(_timer__WEBPACK_IMPORTED_MODULE_4__[\"pararTemporizador\"])();\n    } else {\n      _variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].contadorPeliculas++;\n      _variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].timeleft = 60;\n      _utils__WEBPACK_IMPORTED_MODULE_1__[\"mostrarPeliculaEnPantalla\"]();\n      Object(_restart__WEBPACK_IMPORTED_MODULE_3__[\"restablecerPistas\"])();\n      Object(_restart__WEBPACK_IMPORTED_MODULE_3__[\"restablecerTeclado\"])();\n    }\n  } else {\n    _utils__WEBPACK_IMPORTED_MODULE_1__[\"cogerPeliculaEnPantalla\"]().innerHTML = nombreDePelicula;\n  }\n\n  Object(_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"guardar\"])();\n}\nfunction comprobarPista() {\n  if (_variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].contadorPistas < 2) {\n    pista();\n  }\n}\nfunction pista() {\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].timeleft -= 5;\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].contadorPistas++;\n  mostrarPista();\n  fail();\n}\nfunction mostrarPista() {\n  var pista = '';\n\n  switch (_variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].contadorPistas) {\n    case 1:\n      pista = 'Actors';\n      break;\n\n    case 2:\n      pista = 'Plot';\n      break;\n  }\n\n  document.getElementById('frasePista').innerHTML = _variables__WEBPACK_IMPORTED_MODULE_0__[\"peliculas\"]['pelicula' + _variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].contadorPeliculas][pista];\n}\nfunction fail() {\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].vidas--;\n  _utils__WEBPACK_IMPORTED_MODULE_1__[\"quitarCorazon\"](_variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].vidas);\n\n  if (_variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].vidas == 0) {\n    gameOver();\n  }\n}\nfunction gameOver() {\n  Object(_timer__WEBPACK_IMPORTED_MODULE_4__[\"pararTemporizador\"])();\n  Object(_restart__WEBPACK_IMPORTED_MODULE_3__[\"restablecer\"])();\n  Object(_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"guardar\"])();\n  _utils__WEBPACK_IMPORTED_MODULE_1__[\"show\"]('modalPerder');\n}\n\n//# sourceURL=webpack:///./public/js/modules/coreGame.js?");

/***/ }),

/***/ "./public/js/modules/localStorage.js":
/*!*******************************************!*\
  !*** ./public/js/modules/localStorage.js ***!
  \*******************************************/
/*! exports provided: comprobarPartidaGuardada, guardar, borrarPartida, cargar, mostrarPartidaAnterior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"comprobarPartidaGuardada\", function() { return comprobarPartidaGuardada; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"guardar\", function() { return guardar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"borrarPartida\", function() { return borrarPartida; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cargar\", function() { return cargar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mostrarPartidaAnterior\", function() { return mostrarPartidaAnterior; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./public/js/modules/variables.js\");\n/* harmony import */ var _coreGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coreGame */ \"./public/js/modules/coreGame.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./public/js/modules/utils.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer */ \"./public/js/modules/timer.js\");\n\n\n\n\n\nfunction comprobarPartidaGuardada() {\n  if (JSON.parse(localStorage.getItem('partida'))) {\n    cargar();\n    mostrarPartidaAnterior();\n  } else {\n    _utils__WEBPACK_IMPORTED_MODULE_2__[\"show\"]('modalInicio');\n  }\n}\n\nfunction guardar() {\n  var partida = {\n    tiempo: _variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].timeleft,\n    vidas: _variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].vidas,\n    contadorPeliculas: _variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].contadorPeliculas,\n    peliculaActual: _variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].nombrePeliculaPantalla,\n    contadorPistas: _variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].contadorPistas,\n    listaPeliculas: _variables__WEBPACK_IMPORTED_MODULE_0__[\"peliculas\"]\n  };\n  localStorage.setItem('partida', JSON.stringify(partida));\n}\n\nfunction borrarPartida() {\n  localStorage.removeItem('partida');\n  Object.getOwnPropertyNames(_variables__WEBPACK_IMPORTED_MODULE_0__[\"peliculas\"]).forEach(function (prop) {\n    delete _variables__WEBPACK_IMPORTED_MODULE_0__[\"peliculas\"][prop];\n  });\n}\n\nfunction cargar() {\n  var partida = JSON.parse(localStorage.getItem('partida'));\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].timeleft = partida.tiempo;\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].vidas = partida.vidas;\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].contadorPeliculas = partida.contadorPeliculas;\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].nombrePeliculaPantalla = partida.peliculaActual;\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].contadorPistas = partida.contadorPistas; //cargar todas las peliculas\n\n  for (var pelicula in partida.listaPeliculas) {\n    _variables__WEBPACK_IMPORTED_MODULE_0__[\"peliculas\"][pelicula] = partida.listaPeliculas[pelicula];\n  }\n\n  ;\n}\n\nfunction mostrarPartidaAnterior() {\n  if (_variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].contadorPistas > 0) {\n    _coreGame__WEBPACK_IMPORTED_MODULE_1__[\"mostrarPista\"]();\n  }\n\n  var corazones = document.querySelectorAll('#bars-hearts > img');\n\n  for (var i = 0; i < corazones.length - _variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].vidas; i++) {\n    corazones[i].classList.add('d-none');\n  }\n\n  _utils__WEBPACK_IMPORTED_MODULE_2__[\"cogerPeliculaEnPantalla\"]().innerHTML = _variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].nombrePeliculaPantalla;\n  Object(_timer__WEBPACK_IMPORTED_MODULE_3__[\"iniciarTemporizador\"])();\n}\n\n\n\n//# sourceURL=webpack:///./public/js/modules/localStorage.js?");

/***/ }),

/***/ "./public/js/modules/restart.js":
/*!**************************************!*\
  !*** ./public/js/modules/restart.js ***!
  \**************************************/
/*! exports provided: volveraInicio, restablecerPartida, restablecer, restablecerPistas, restablecerTeclado, restablecerCorazones */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"volveraInicio\", function() { return volveraInicio; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"restablecerPartida\", function() { return restablecerPartida; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"restablecer\", function() { return restablecer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"restablecerPistas\", function() { return restablecerPistas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"restablecerTeclado\", function() { return restablecerTeclado; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"restablecerCorazones\", function() { return restablecerCorazones; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./public/js/modules/variables.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./public/js/modules/utils.js\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ \"./public/js/modules/localStorage.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer */ \"./public/js/modules/timer.js\");\n\n\n\n\n\nfunction volveraInicio() {\n  _utils__WEBPACK_IMPORTED_MODULE_1__[\"hide\"]('modalGanar');\n  _utils__WEBPACK_IMPORTED_MODULE_1__[\"show\"]('modalInicio');\n  Object(_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"borrarPartida\"])();\n  restablecer();\n  Object(_timer__WEBPACK_IMPORTED_MODULE_3__[\"pararTemporizador\"])();\n  var listaPelisInicio = document.getElementById('listaPeliculas').getElementsByTagName('li');\n\n  if (listaPelisInicio.length > 0) {\n    for (var key in listaPelisInicio.length) {\n      console.log(key);\n      document.getElementById('listaPeliculas').removeChild(listaPelisInicio[key]);\n    }\n\n    _utils__WEBPACK_IMPORTED_MODULE_1__[\"esconderLista\"]();\n  }\n}\n\nfunction restablecerPartida() {\n  _utils__WEBPACK_IMPORTED_MODULE_1__[\"hide\"]('modalPerder');\n  Object(_timer__WEBPACK_IMPORTED_MODULE_3__[\"iniciarTemporizador\"])();\n  _utils__WEBPACK_IMPORTED_MODULE_1__[\"mostrarPeliculaEnPantalla\"]();\n}\n\nfunction restablecer() {\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].vidas = 6;\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].timeleft = 60;\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].contadorPeliculas = 1;\n  restablecerPistas();\n  restablecerTeclado();\n  restablecerCorazones();\n}\n\nfunction restablecerPistas() {\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].contadorPistas = 0;\n  document.getElementById('frasePista').innerHTML = '';\n}\n\nfunction restablecerTeclado() {\n  var botones = document.getElementsByClassName('tecla');\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = botones[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var boton = _step.value;\n      boton.disabled = false;\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n}\n\nfunction restablecerCorazones() {\n  var corazones = document.querySelectorAll('#bars-hearts > img');\n  var _iteratorNormalCompletion2 = true;\n  var _didIteratorError2 = false;\n  var _iteratorError2 = undefined;\n\n  try {\n    for (var _iterator2 = corazones[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n      var corazon = _step2.value;\n      corazon.classList.remove('d-none');\n    }\n  } catch (err) {\n    _didIteratorError2 = true;\n    _iteratorError2 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n        _iterator2[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError2) {\n        throw _iteratorError2;\n      }\n    }\n  }\n}\n\n\n\n//# sourceURL=webpack:///./public/js/modules/restart.js?");

/***/ }),

/***/ "./public/js/modules/timer.js":
/*!************************************!*\
  !*** ./public/js/modules/timer.js ***!
  \************************************/
/*! exports provided: iniciarTemporizador, pararTemporizador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iniciarTemporizador\", function() { return iniciarTemporizador; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pararTemporizador\", function() { return pararTemporizador; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./public/js/modules/variables.js\");\n/* harmony import */ var _coreGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coreGame */ \"./public/js/modules/coreGame.js\");\n\n\n\nfunction iniciarTemporizador() {\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].temporizador = setInterval(function () {\n    document.getElementById('progressBar').value = 60 - _variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].timeleft;\n    --_variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].timeleft;\n\n    if (_variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].timeleft <= 0) {\n      clearInterval(_variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].temporizador);\n      _coreGame__WEBPACK_IMPORTED_MODULE_1__[\"gameOver\"]();\n    }\n  }, 1000);\n}\n\nfunction pararTemporizador() {\n  clearInterval(_variables__WEBPACK_IMPORTED_MODULE_0__[\"juego\"].temporizador);\n}\n\n\n\n//# sourceURL=webpack:///./public/js/modules/timer.js?");

/***/ }),

/***/ "./public/js/modules/utils.js":
/*!************************************!*\
  !*** ./public/js/modules/utils.js ***!
  \************************************/
/*! exports provided: cogerPeliculaDeObjeto, cogerPeliculaEnPantalla, contarPeliculasDeObjeto, show, hide, quitarCorazon, esconderLista, mensajeBuscador, mostrarListaDePeliculas, mostrarLista, mostrarPeliculaEnPantalla */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cogerPeliculaDeObjeto\", function() { return cogerPeliculaDeObjeto; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cogerPeliculaEnPantalla\", function() { return cogerPeliculaEnPantalla; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contarPeliculasDeObjeto\", function() { return contarPeliculasDeObjeto; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"show\", function() { return show; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hide\", function() { return hide; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"quitarCorazon\", function() { return quitarCorazon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"esconderLista\", function() { return esconderLista; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mensajeBuscador\", function() { return mensajeBuscador; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mostrarListaDePeliculas\", function() { return mostrarListaDePeliculas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mostrarLista\", function() { return mostrarLista; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mostrarPeliculaEnPantalla\", function() { return mostrarPeliculaEnPantalla; });\n/* harmony import */ var _coreGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coreGame */ \"./public/js/modules/coreGame.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ \"./public/js/modules/variables.js\");\n\n\n\nfunction cogerPeliculaDeObjeto() {\n  return _variables__WEBPACK_IMPORTED_MODULE_1__[\"peliculas\"]['pelicula' + _variables__WEBPACK_IMPORTED_MODULE_1__[\"juego\"].contadorPeliculas];\n}\n\nfunction cogerPeliculaEnPantalla() {\n  return document.getElementById('pelicula');\n}\n\nfunction contarPeliculasDeObjeto() {\n  return Object.keys(_variables__WEBPACK_IMPORTED_MODULE_1__[\"peliculas\"]).length;\n}\n\nfunction show(idModal) {\n  document.getElementById(idModal).style.display = 'block';\n}\n\nfunction hide(idModal) {\n  document.getElementById(idModal).style.display = 'none';\n}\n\nfunction quitarCorazon(vidas) {\n  document.querySelectorAll('#bars-hearts > img')[vidas].classList.add('d-none');\n}\n\nfunction esconderLista() {\n  var lista = document.getElementsByClassName('lista')[0];\n  lista.classList.add('d-none');\n}\n\nfunction mensajeBuscador() {\n  return document.getElementById('mensajeBuscador');\n}\n\nfunction mostrarListaDePeliculas() {\n  var parrafo = document.createElement('li');\n  parrafo.appendChild(document.createTextNode(_variables__WEBPACK_IMPORTED_MODULE_1__[\"peliculas\"]['pelicula' + contarPeliculasDeObjeto()].Title));\n  document.getElementById('listaPeliculas').appendChild(parrafo);\n}\n\nfunction mostrarLista() {\n  var lista = document.getElementsByClassName('lista')[0];\n  lista.classList.remove('d-none');\n}\n\nfunction mostrarPeliculaEnPantalla() {\n  var pelicula = _coreGame__WEBPACK_IMPORTED_MODULE_0__[\"convertirPeliculaEnGuiones\"](cogerPeliculaDeObjeto().Title);\n  cogerPeliculaEnPantalla().innerHTML = pelicula;\n  _variables__WEBPACK_IMPORTED_MODULE_1__[\"juego\"].nombrePeliculaPantalla = pelicula;\n}\n\n\n\n//# sourceURL=webpack:///./public/js/modules/utils.js?");

/***/ }),

/***/ "./public/js/modules/variables.js":
/*!****************************************!*\
  !*** ./public/js/modules/variables.js ***!
  \****************************************/
/*! exports provided: peliculas, juego */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"peliculas\", function() { return peliculas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"juego\", function() { return juego; });\nvar peliculas = {};\nvar juego = {\n  temporizador: null,\n  timeleft: 60,\n  vidas: 6,\n  contadorPistas: 0,\n  contadorPeliculas: 1,\n  nombrePeliculaPantalla: null\n};\n\n//# sourceURL=webpack:///./public/js/modules/variables.js?");

/***/ })

/******/ });