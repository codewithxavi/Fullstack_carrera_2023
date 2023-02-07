// Tipo Number
const numero0 = 1; console.log(numero0)
const numero1 = 20.1; console.log(numero1)
// 32
const numero2 = 3.2e1; console.log(numero2)
// 300
const numero3 = 3e2; console.log(numero3)
// hexadecimal
const numero4 = 0x1f; console.log(numero4)
// binario
const numero5 = 0b1010; console.log(numero5)
// octal
const numero6 = 0o744; console.log(numero6)
// otra forma de declarar una variable de tipo numérico
const numero7 = Number(2); console.log(numero7)


// String
const str1 = "Hola a todos";
const str2 = 'Hola "a" todos';
const str3 = '"';
const str4 = '"';

const date1 = new Date();
// Sun Apr 22 2018 12:37:06 GMT+0200 (Hora de verano romance)
console.log(date1);
// milisegundos en formato Unix
const milisegundos = new Date().getTime();
console.log(milisegundos);
// fecha creada a partir del número de milisegundos en formato Unix
const date2 = new Date(milisegundos);

console.log("hola".charCodeAt(2));


