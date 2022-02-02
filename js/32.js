// Template Strings (`${}`) - es una forma de concatenar texto con variables y funciones que devuelven texto

const producto = 'Tablet de 12 pulgadas';
const precio = 400;
const marca = 'Orange';

function textoDeFuncion() {
	return 'Este texto proviene de la función';
}

console.log(producto + ' $' + precio + ' Dolares, Marca: ' + marca);

console.log(
	`${producto} $${precio} Dolares, Marca: ${marca}, ${textoDeFuncion()}`
);
