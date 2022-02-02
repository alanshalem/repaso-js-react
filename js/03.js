// Tipos de datos
// Existen 8 tipos de datos en javascript: undefined, null, boolean, number, bigint, string, object, symbol, and function.

// Undefined
let cliente;
console.log(cliente); // undefined
console.log(typeof cliente); // undefined

// Boolean
let descuento = false;
console.log(descuento); // false
console.log(typeof descuento); // boolean

// Number
let numero1 = 20.2;
let numero2 = 30;
let numero3 = -100;

console.log(typeof numero1); // number
console.log(typeof numero2); // number
console.log(typeof numero3); // number

// Strings o Cadenas de Texto
let alumno = 'Juan';
let producto = 'Monitor 20 pulgadas';

let numero = '30';
numero2 = 30;

console.log(typeof numero); // string
console.log(typeof numero2); // number

// BigInt
const numeroGrande = BigInt(918298193891887139831091038173813);
console.log(typeof numeroGrande); // bigint
numero = 10;
numero2 = 20;
console.log(numero + Number(numeroGrande)); // 918298193891887139831091038173813

numero = '30';
numero2 = 30;
console.log(typeof String(numero2)); // string
console.log(typeof Number(numero)); // number

// Symbol
const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);
console.log(primerSymbol === segundoSymbol); // false
console.log(primerSymbol.valueOf()); // 30
console.log(segundoSymbol.valueOf()); // 30

// Null
descuento = null;
console.log(typeof descuento);
