// Objetos - Destructuring con 2 o más objetos

const producto = {
	nombre: 'Tablet',
	precio: 300,
	disponible: true,
};

const cliente = {
	nombre: 'Juan',
	premium: true,
};

const { nombre, precio, disponible } = producto;
const { nombre: nombreCliente, premium } = cliente; // Asigna el nombre de la propiedad a una variable diferente

console.log(nombre);
console.log(nombreCliente);
