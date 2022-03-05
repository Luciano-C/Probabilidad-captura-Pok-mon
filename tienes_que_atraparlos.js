


let salud_maxima = 1;
let felicidad_pokemon = 1.2;
let timidez_agresividad = 2;

function probabilidad_captura(salud,timidez) {
    let numero_grande = 10**6;
    let producto = 1;

    for (let i = 0; i <= numero_grande; i++) {
        producto *= (1 - (4*(salud-felicidad_pokemon**timidez)**2)/(Math.PI**2 * (2*i - 1)**2));
    }
    return producto

}


console.log(probabilidad_captura(salud_maxima,timidez_agresividad));

const readline = require("readline");

const q1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

q1.question("Where do you live? ", function (answer) {
  console.log(`Oh, so you live in ${answer}`);
  console.log("Interface Closed");
  q1.close();
});
