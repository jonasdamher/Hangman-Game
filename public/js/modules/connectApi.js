import {peliculas} from './variables';
import * as utils from './utils';

function comprobarPeliculaEnLista(peliculaEncontrada){
    for(var pelicula in peliculas){
        if(peliculas[pelicula].Title == peliculaEncontrada.Title){
            return false;
        }
    }
    return true;
}

function peliculaApi(){

    let textoBuscar = document.getElementById('buscadorPeliculas').value.trim();

    if(textoBuscar!=''){

        fetch('https://www.omdbapi.com/?apikey=61e63fb9&t='+textoBuscar)
        .then(function(response){
            response.json().then(function(data){

                if(data.Response != 'False'){
                    
                    if(comprobarPeliculaEnLista(data)){
                        peliculas['pelicula'+(++Object.keys(peliculas).length)] = data;
                        utils.mensajeBuscador().classList.add('d-none');
                        utils.mostrarListaDePeliculas();
                        utils.mostrarLista();
                    }else{
                        utils.mensajeBuscador().innerHTML = 'La pelicula '+textoBuscar+' ya está en la lista';
                        utils.mensajeBuscador().classList.remove('d-none');
                    }
    
                }else{
                    utils.mensajeBuscador().innerHTML = 'No se ha encontrado la pelicula '+textoBuscar;
                    utils.mensajeBuscador().classList.remove('d-none');
                }
                
            });
        });

    }

    document.getElementById('buscadorPeliculas').value = '';
}

export {comprobarPeliculaEnLista,peliculaApi};