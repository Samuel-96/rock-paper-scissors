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

        case "tijeras": 
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

let puntuacionJugador = 0, puntuacionOrdenador = 0;


for(let i = 0; i < 3; i++){
    const seleccionJugador = prompt("¿Eliges piedra, papel o tijeras?").toLowerCase();
    alert(ronda(seleccionJugador,getComputerChoice()));
}

alert("-----------Puntuacion final-----------"+"\n\n\tJUGADOR: " + puntuacionJugador + "\n\tORDENADOR: " + puntuacionOrdenador);
