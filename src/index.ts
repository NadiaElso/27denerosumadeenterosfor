let numero1: number = Number(prompt("Ingrese  primer número "));
let numero2: number = Number(prompt("Ingrese segundo número"));
let suma: number = 0;
let limitesuperior: number = 0;
let limiteinferior: number = 0;
if (numero1 > numero2) {
  limitesuperior = numero1;
  limiteinferior = numero2;
} else if (numero2 > numero1) {
  limitesuperior = numero2;
  limiteinferior = numero1;
} else {
  limitesuperior = numero1;
  limiteinferior = numero2;
}
for (let index = limiteinferior; index <= limitesuperior; index++) {
  suma = suma + index;
}
console.log("El total de la suma es: " + suma);
