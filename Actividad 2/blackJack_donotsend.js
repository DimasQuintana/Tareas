const prompt = require('prompt-sync')();

console.log("¡¡Bienvenido al juego!!");

//Aleatorio 0, 11
function generarCarta(){
    return Math.floor(Math.random()*11) + 1;
}

//Valor total de las cartas
function calcularTotal(cartas){
    return cartas.reduce((total, carta) => total + carta, 0);
}

//Cartas de la computadora
let = cartasComputadora = [generarCarta(), generarCarta()];

//Cartas del usuario
let cartasUsuario = [generarCarta(), generarCarta()];

//Mostrar cartas al usuario
console.log(`Tus cartas son: ${cartasUsuario.join(", ")}`);

//Preguntar al usuario si quiere otra carta
while (true){
    //Calcular el total de las cartas del usuario
    const totalUsuario = calcularTotal(cartasUsuario);

    //Preguntar si quiere otra carta
    const respuesta = prompt(`¿Desea otra carta? El total de sus cartas actualmente suma: ${totalUsuario}. (si/no)`);

    if (respuesta.toLowerCase() ==='si'){
        const nuevaCarta = generarCarta();
        cartasUsuario.push(nuevaCarta);

        console.log(`Su nueva carta vale ${nuevaCarta}, su total es ${calcularTotal(cartasUsuario)}`);

        if (calcularTotal(cartasUsuario)>21) {
            console.log(`¡Lastima, su total es ${calcularTotal(cartasUsuario)}, suerte para la próxima`);
            break;
        }
    } else {
        break; //Sale del bucle si la respuesta es No
    }
}

//Mostras las cartas de la computadora
console.log(`Las cartas de la computadora son: ${cartasComputadora.join(", ")}`);

//Calcular el valor de las cartas de la computadora
const totalComputadora = calcularTotal(cartasComputadora);

//Mostrar el total del usuario y de la computadora
console.log(`La computadora tiene un total de: ${calcularTotal(cartasComputadora)}`);
console.log(`El usuario tiene un total de: ${calcularTotal(cartasUsuario)}`);

//Determinar al ganador

if(calcularTotal(cartasUsuario) > totalComputadora && calcularTotal(cartasUsuario) <= 21) {
    console.log("¡Enhorabuena, ha ganado!");
} else if (totalComputadora > 21) {
    console.log("¡Enhorabuena, ha ganado!");
} else if (calcularTotal(cartasUsuario) === totalComputadora) {
    console.log("¡Empate!");
} else {
    console.log("¡Lastima, ha perdido!")
}

