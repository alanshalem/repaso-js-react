// Unir 2 objetos
const producto = {
	nombre: 'Tablet',
	precio: 300,
	disponible: true,
};
const cliente = {
	nombre: 'Juan',
	premium: true,
};

// producto.cliente = cliente; // No
// const nuevoObjeto = Object.assign(producto, cliente) // No

const nuevoObjeto2 = {
	producto: { ...producto },
	cliente: { ...cliente },
};

console.log(nuevoObjeto2); // { producto: { nombre: 'Tablet', precio: 300, disponible: true }, cliente: { nombre: 'Juan', premium: true } }
console.log(cliente);
console.log(producto);
