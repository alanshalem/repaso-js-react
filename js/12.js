// Funciones - Function Declaration
// En function declaration se puede llamar antes de ser declarada

// function sumar(numero = 0, numero2 = 0) {
//     console.log( numero + numero2 )
// }

// sumar(10, 20)
// sumar(2, 3)
// sumar(100)
// sumar()

// function sumar(n1 = 0, n2 = 0) {
// 	return [n1 + n2, 'Hola Mundo']; // Array
// }
// const [resultado, mensaje] = sumar(10, 20); // Destructuring de Arrays

function sumar(numero = 0, numero2 = 0) {
	return {
		resultado: numero + numero2,
		mensaje: 'Hola Mundo',
	};
}
const { resultado, mensaje } = sumar(20, 30);

console.log(resultado);
console.log(mensaje);
