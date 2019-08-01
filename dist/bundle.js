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

eval("var peliculas = {};\nvar temporizador,\n    timeleft = 60,\n    vidas = 6,\n    contadorPeliculas = 1,\n    contadorPistas = 0,\n    nombrePeliculaPantalla = '';\ncargar();\nteclado();\nbotonesModal();\n\nfunction tecla() {\n  this.disabled = true;\n  compararPelicula(this);\n}\n\nfunction teclado() {\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = document.getElementsByClassName(\"tecla\")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var boton = _step.value;\n      boton.addEventListener(\"click\", tecla, false);\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n}\n\nfunction guardar() {\n  var objeto = {\n    tiempo: timeleft,\n    vidas: vidas,\n    contadorPeliculas: contadorPeliculas,\n    peliculaActual: nombrePeliculaPantalla,\n    peliculas: peliculas,\n    contadorPistas: contadorPistas\n  };\n  localStorage.setItem('partida', JSON.stringify(objeto));\n}\n\nfunction cargar() {\n  var partida = JSON.parse(localStorage.getItem('partida'));\n\n  if (partida) {\n    timeleft = partida.tiempo;\n    vidas = partida.vidas;\n    contadorPeliculas = partida.contadorPeliculas;\n    nombrePeliculaPantalla = partida.peliculaActual;\n    peliculas = partida.peliculas;\n    contadorPistas = partida.contadorPistas;\n    mostrarCorazonesPartidaAnterior();\n\n    if (contadorPistas > 0) {\n      mostrarPista();\n    }\n\n    cogerPeliculaEnPantalla().innerHTML = nombrePeliculaPantalla;\n    iniciarTemporizador();\n  } else {\n    mostrarModal('modalInicio');\n  }\n} // Coge una pelicula del objeto peliculas\n\n\nfunction cogerPeliculaDeObjeto() {\n  return peliculas[\"pelicula\" + contadorPeliculas];\n}\n\nfunction contarPeliculasDeObjeto() {\n  return Object.keys(peliculas).length;\n} // Convierte un texto en guiones y devuelve el texto.\n\n\nfunction convertirPeliculaEnGuiones(pelicula) {\n  var fraseConGuiones = '';\n\n  for (var i = 0; i < pelicula.length; i++) {\n    var caracter = pelicula.charAt(i).match(/\\s/gi) ? \" \" : '_';\n    fraseConGuiones += caracter;\n  }\n\n  return fraseConGuiones;\n} //Muestra en pantalla el Title de la pelicula actual\n\n\nfunction mostrarPeliculaEnPantalla() {\n  var pelicula = convertirPeliculaEnGuiones(cogerPeliculaDeObjeto().Title);\n  cogerPeliculaEnPantalla().innerHTML = pelicula;\n  nombrePeliculaPantalla = pelicula;\n}\n\nfunction cogerPeliculaEnPantalla() {\n  return document.getElementById(\"pelicula\");\n}\n\nfunction compararPelicula(tecla) {\n  var nombreDePelicula = buscarCoincidencias(tecla.innerHTML);\n  nombrePeliculaPantalla = nombreDePelicula;\n  comprobarPelicula(nombreDePelicula);\n}\n\nfunction buscarCoincidencias(letra) {\n  var textoOriginal = cogerPeliculaDeObjeto().Title.split(\"\"),\n      texto_ = cogerPeliculaEnPantalla().innerHTML.split(\"\"),\n      textoModificado = '';\n\n  for (var i = 0; i < textoOriginal.length; i++) {\n    if (textoOriginal[i].search(new RegExp(letra, \"i\")) != -1) {\n      texto_[i] = textoOriginal[i];\n    }\n  }\n\n  texto_.map(function (letra) {\n    textoModificado += letra;\n  });\n  return textoModificado;\n}\n\nfunction comprobarPelicula(nombreDePelicula) {\n  if (cogerPeliculaEnPantalla().innerHTML == nombreDePelicula) {\n    fail();\n  } else if (cogerPeliculaDeObjeto().Title == nombreDePelicula) {\n    if (contadorPeliculas >= contarPeliculasDeObjeto()) {\n      mostrarModal('modalGanar');\n      pararTemporizador();\n    } else {\n      contadorPeliculas++;\n      timeleft = 60;\n      mostrarPeliculaEnPantalla();\n      restablecerPistas();\n      restablecerTeclado();\n    }\n  } else {\n    cogerPeliculaEnPantalla().innerHTML = nombreDePelicula;\n  }\n\n  guardar();\n} //Boton para pistas\n\n\ndocument.getElementById(\"pista\").onclick = function () {\n  if (contadorPistas < 2) {\n    pista();\n  }\n};\n\nfunction pista() {\n  timeleft -= 5;\n  contadorPistas++;\n  mostrarPista();\n  fail();\n}\n\nfunction mostrarPista() {\n  var pista = '';\n\n  switch (contadorPistas) {\n    case 1:\n      pista = 'Actors';\n      break;\n\n    case 2:\n      pista = 'Plot';\n      break;\n  }\n\n  var pistas = peliculas['pelicula' + contadorPeliculas][pista];\n  document.getElementById('frasePista').innerHTML = pistas;\n}\n\nfunction mostrarCorazonesPartidaAnterior() {\n  var corazones = document.querySelectorAll(\"#bars-hearts > img\");\n\n  for (var i = 0; i < corazones.length - vidas; i++) {\n    corazones[i].classList.add(\"d-none\");\n  }\n}\n\nfunction quitarCorazon(vidas) {\n  document.querySelectorAll(\"#bars-hearts > img\")[vidas].classList.add(\"d-none\");\n} //Restablecer\n\n\nfunction botonesModal() {\n  document.getElementById(\"volver\").addEventListener(\"click\", volveraInicio, false);\n  document.getElementById(\"reintentar\").addEventListener(\"click\", restablecerPartida, false);\n}\n\nfunction volveraInicio() {\n  restablecer();\n  pararTemporizador();\n  mostrarModal('modalInicio');\n  localStorage.removeItem('partida');\n  Object.getOwnPropertyNames(peliculas).forEach(function (prop) {\n    delete peliculas[prop];\n  });\n  var listaPelisInicio = document.getElementById('listaPeliculas').getElementsByTagName('li');\n\n  for (var key in listaPelisInicio) {\n    document.getElementById('listaPeliculas').removeChild(listaPelisInicio[key]);\n  }\n\n  esconderLista();\n}\n\nfunction restablecerPartida() {\n  restablecer();\n  iniciarTemporizador();\n}\n\nfunction restablecer() {\n  vidas = 6;\n  timeleft = 60;\n  contadorPeliculas = 1;\n  quitarModal('modalPerder');\n  quitarModal('modalGanar');\n  restablecerPistas();\n  mostrarPeliculaEnPantalla();\n  restablecerTeclado();\n  restablecerCorazones();\n}\n\nfunction restablecerPistas() {\n  contadorPistas = 0;\n  document.getElementById('frasePista').innerHTML = \"\";\n}\n\nfunction restablecerTeclado() {\n  var botones = document.getElementsByClassName(\"tecla\");\n  var _iteratorNormalCompletion2 = true;\n  var _didIteratorError2 = false;\n  var _iteratorError2 = undefined;\n\n  try {\n    for (var _iterator2 = botones[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n      var boton = _step2.value;\n      boton.disabled = false;\n    }\n  } catch (err) {\n    _didIteratorError2 = true;\n    _iteratorError2 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n        _iterator2[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError2) {\n        throw _iteratorError2;\n      }\n    }\n  }\n}\n\nfunction restablecerCorazones() {\n  var corazones = document.querySelectorAll(\"#bars-hearts > img\");\n  var _iteratorNormalCompletion3 = true;\n  var _didIteratorError3 = false;\n  var _iteratorError3 = undefined;\n\n  try {\n    for (var _iterator3 = corazones[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n      var corazon = _step3.value;\n      corazon.classList.remove(\"d-none\");\n    }\n  } catch (err) {\n    _didIteratorError3 = true;\n    _iteratorError3 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion3 && _iterator3[\"return\"] != null) {\n        _iterator3[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError3) {\n        throw _iteratorError3;\n      }\n    }\n  }\n} //funcion para perder vidas\n\n\nfunction fail() {\n  vidas--;\n  quitarCorazon(vidas);\n\n  if (vidas == 0) {\n    gameOver();\n  }\n} //funcion para cuando pierdes\n\n\nfunction gameOver() {\n  mostrarModal('modalPerder');\n  pararTemporizador();\n} //progressbar de un minuto\n\n\nfunction iniciarTemporizador() {\n  temporizador = setInterval(function () {\n    document.getElementById(\"progressBar\").value = 60 - timeleft;\n    --timeleft;\n\n    if (timeleft <= 0) {\n      clearInterval(temporizador);\n      gameOver();\n    }\n  }, 1000);\n}\n\nfunction pararTemporizador() {\n  clearInterval(temporizador);\n}\n\nfunction mostrarModal(idModal) {\n  document.getElementById(idModal).style.display = \"block\";\n}\n\nfunction quitarModal(idModal) {\n  document.getElementById(idModal).style.display = \"none\";\n}\n\nfunction peliculaApi() {\n  var textoBuscar = document.getElementById('buscadorPeliculas').value.trim();\n\n  if (textoBuscar != '') {\n    fetch('https://www.omdbapi.com/?apikey=61e63fb9&t=' + textoBuscar).then(function (response) {\n      response.json().then(function (data) {\n        if (data.Response != 'False') {\n          if (comprobarPeliculaEnLista(data)) {\n            peliculas[\"pelicula\" + ++Object.keys(peliculas).length] = data;\n            mensajeBuscador().classList.add('d-none');\n            mostrarListaDePeliculas();\n            mostrarLista();\n          } else {\n            mensajeBuscador().innerHTML = 'La pelicula ' + textoBuscar + ' ya está en la lista';\n            mensajeBuscador().classList.remove('d-none');\n          }\n        } else {\n          mensajeBuscador().innerHTML = 'No se ha encontrado la pelicula ' + textoBuscar;\n          mensajeBuscador().classList.remove('d-none');\n        }\n      });\n    });\n  }\n\n  document.getElementById('buscadorPeliculas').value = '';\n}\n\ndocument.getElementById('botonBuscador').addEventListener('click', peliculaApi, false);\n\nfunction comprobarPeliculaEnLista(peliculaEncontrada) {\n  for (var pelicula in peliculas) {\n    if (peliculas[pelicula].Title == peliculaEncontrada.Title) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nfunction mensajeBuscador() {\n  return document.getElementById('mensajeBuscador');\n}\n\nfunction mostrarListaDePeliculas() {\n  var parrafo = document.createElement('li');\n  parrafo.appendChild(document.createTextNode(peliculas[\"pelicula\" + contarPeliculasDeObjeto()].Title));\n  document.getElementById('listaPeliculas').appendChild(parrafo);\n}\n\nfunction mostrarLista() {\n  var lista = document.getElementsByClassName('lista')[0];\n  lista.classList.remove('d-none');\n}\n\nfunction esconderLista() {\n  var lista = document.getElementsByClassName('lista')[0];\n  lista.classList.add('d-none');\n}\n/**\r\n * Cuando pulsas enter en el input buscador se pulsa el boton del buscador\r\n*/\n\n\ndocument.getElementById('buscadorPeliculas').addEventListener(\"keyup\", function (event) {\n  if (event.keyCode === 13) {\n    event.preventDefault();\n    document.getElementById(\"botonBuscador\").click();\n  }\n}); //gab\n//boton jugar, pasa informacion api para empezar a jugar\n\nfunction empezar() {\n  if (contarPeliculasDeObjeto() > 0) {\n    quitarModal(\"modalInicio\");\n    iniciarTemporizador();\n    mostrarPeliculaEnPantalla();\n    guardar();\n  }\n}\n\ndocument.getElementById(\"btnJugar\").addEventListener(\"click\", empezar);\n\n//# sourceURL=webpack:///./public/js/index.js?");

/***/ })

/******/ });