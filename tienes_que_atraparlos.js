const prompt = require("prompt-sync")();


let salud_maxima = Number(prompt("Ingrese salud máxima del Pokemón (ST): "));
let felicidad_pokemon = Number(prompt("Ingrese nivel de felicidad del Pokémon: "));
let timidez_agresividad = Number(prompt("Ingrese grado de timidez-agresividad del Pokémon(T): "));;

function probabilidad_captura(salud,timidez) {
    let numero_grande = 10**6;
    let producto = 1;

    for (let i = 0; i <= numero_grande; i++) {
        producto *= (1 - (4*(salud-felicidad_pokemon**timidez)**2)/(Math.PI**2 * (2*i - 1)**2));
    }
    return producto

}


console.log(`La probabilidad de captura es ${(probabilidad_captura(salud_maxima,timidez_agresividad) * 100).toFixed(2)}%`);
