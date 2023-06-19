const img = document.querySelectorAll(".imagen");
const puntJugador = document.getElementsByClassName("resultado-jugador");
const puntOrdenador = document.getElementsByClassName("resultado-ordenador");
const container = document.getElementsByClassName("contenedor-resultados");
const resP = document.getElementById("resultado-j");
const resO = document.getElementById("resultado-o");

let puntuacionJugador = 0, puntuacionOrdenador = 0, contTurnos = 0;

function numAzar(){
    let num = Math.floor((Math.random() * 3)) + 1; //numero al azar entre 1 y 3 gracias al + 1
    return num;
}

function getComputerChoice(){
    let eleccion;
    switch(numAzar())
    {
        case 1: eleccion = "piedra"; break;
        case 2: eleccion = "papel"; break;
        case 3: eleccion = "tijeras"; break;
    }

    return eleccion;

}

function ronda(seleccionJugador,seleccionOrdenador){
    let resultado;

    switch(seleccionJugador)
    {
        case "piedra": 
            if(seleccionOrdenador === "piedra"){
                resultado = "Eleccion del jugador: " + seleccionJugador + "\nEleccion del ordenador: " + seleccionOrdenador + "\nResultado: Empate";
            }
            else if(seleccionOrdenador === "tijeras"){
                resultado = "Eleccion del jugador: " + seleccionJugador + "\nEleccion del ordenador: " + seleccionOrdenador + "\nResultado: Gana el jugador";
                puntuacionJugador++;
            }
            else if(seleccionOrdenador === "papel"){
                resultado = "Eleccion del jugador: " + seleccionJugador + "\nEleccion del ordenador: " + seleccionOrdenador + "\nResultado: Gana el ordenador";
                puntuacionOrdenador++;
            }
            break;

        case "tijera": 
            if(seleccionOrdenador === "piedra"){
                resultado = "Eleccion del jugador: " + seleccionJugador + "\nEleccion del ordenador: " + seleccionOrdenador + "\nResultado: Gana el ordenador";
                puntuacionOrdenador++;
            }
            else if(seleccionOrdenador === "tijeras"){
                resultado = "Eleccion del jugador: " + seleccionJugador + "\nEleccion del ordenador: " + seleccionOrdenador + "\nResultado: Empate";
            }
            else if(seleccionOrdenador === "papel"){
                resultado = "Eleccion del jugador: " + seleccionJugador + "\nEleccion del ordenador: " + seleccionOrdenador + "\nResultado: Gana el jugador";
                puntuacionJugador++;
            }
            break;

        case "papel":
            if(seleccionOrdenador === "piedra"){
                resultado = "Eleccion del jugador: " + seleccionJugador + "\nEleccion del ordenador: " + seleccionOrdenador + "\nResultado: Gana el jugador";
                puntuacionJugador++;
            }
            else if(seleccionOrdenador === "tijeras"){
                resultado = "Eleccion del jugador: " + seleccionJugador + "\nEleccion del ordenador: " + seleccionOrdenador + "\nResultado: Gana el ordenador";
                puntuacionOrdenador++;
            }
            else if(seleccionOrdenador === "papel"){
                resultado = "Eleccion del jugador: " + seleccionJugador + "\nEleccion del ordenador: " + seleccionOrdenador + "\nResultado: Empate";
            }
            break;
    }

    return resultado;
}

function actualizarResultados(){

    contTurnos++;
    if(contTurnos <= 5){

    resP.textContent = puntuacionJugador;
    resO.textContent = puntuacionOrdenador;

    if(puntuacionJugador > puntuacionOrdenador) {
        resP.style.color = "green";
        resO.style.color = "";
    }
    else if(puntuacionJugador < puntuacionOrdenador) {
        resO.style.color = "green";
        resP.style.color = "";
    }
    else {
        resP.style.color = "";
        resO.style.color = "";
    }



    console.log(puntuacionJugador + "\n" + puntuacionOrdenador);
    }

}   

function obtenerSeleccionJugador(e){
   
    let eleccionJugador = e.target.classList[0];

    console.log(ronda(eleccionJugador,getComputerChoice()));

    actualizarResultados();
}



img.forEach(img => img.addEventListener("click", obtenerSeleccionJugador));

//alert("-----------Puntuacion final-----------"+"\n\n\tJUGADOR: " + puntuacionJugador + "\n\tORDENADOR: " + puntuacionOrdenador);
