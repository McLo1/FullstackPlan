const frutas = ["Maçã", "Banana", "Pessego"];

console.log(frutas);

let primeirafruta = frutas[0];
let ultimafruta = frutas[2];

console.log(primeirafruta);
console.log(ultimafruta);

frutas[1] = "Morango";

console.log(frutas);

frutas.push("Abacate");

console.log(frutas);

frutas.pop();

console.log(frutas);

frutas.shift();

console.log(frutas);

frutas.unshift("Jaca", "Kiwi", "Umbu");

console.log(frutas);


console.log(frutas.length);

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

