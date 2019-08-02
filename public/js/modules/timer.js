import {juego} from './variables';
import * as core from './coreGame';

function iniciarTemporizador(){

    juego.temporizador = setInterval(function(){
        document.getElementById('progressBar').value = 60 - juego.timeleft;
        --juego.timeleft;

        if(juego.timeleft <= 0){
            clearInterval(juego.temporizador);
            core.gameOver();
        }
    }, 1000);
}

function pararTemporizador(){
    clearInterval(juego.temporizador);
}

export {iniciarTemporizador,pararTemporizador};