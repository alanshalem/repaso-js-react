// Objetos

const producto = {
	nombre: 'Tablet',
	precio: 300,
	disponible: true,
};

console.log(producto); // { nombre: 'Tablet', precio: 300, disponible: true }
console.table(producto);

console.log(producto.nombre); // Tablet
console.log(producto.precio); // 300
console.log(producto.disponible); // true

// Destructuring
const { nombre, precio, disponible } = producto; // Extrae las propiedades del objeto en variables separadas de tipo const
console.log(nombre); // Tablet
console.log(precio); // 300
console.log(disponible); // true

// Object Literal Enhacement - sirve para crear objetos con propiedades y valores
const autenticado2 = true;
const usuario2 = 'Juan';

const nuevoObjeto = {
	autenticado2, // La propiedad autenticado2 es igual a la variable autenticado2, sino deberia ser autenticado: autenticado2
	usuario2,
};

console.table(nuevoObjeto);
