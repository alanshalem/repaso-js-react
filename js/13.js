// Funciones - Function Expression
// En function expression NO se puede llamar antes de ser declarada

const sumar = function (numero = 0, numero2 = 0) {
	return numero + numero2;
};

const resultado = sumar(30);
console.log(resultado);
