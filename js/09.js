// Operaciones en los arreglos
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

// Añadir elementos al array
// tecnologias.push('GraphQL') // Añade al final del array NO ES RECOMENDABLE
// tecnologias.unshift('GraphQL') // Añade al inicio del array NO ES RECOMENDABLE

// const nuevoArreglo = [...tecnologias, 'GraphQL']; // Añade al final del array ES RECOMENDABLE
// const nuevoArreglo = ['GraphQL', ...tecnologias]; // Añade al inicio del array ES RECOMENDABLE

// Eliminar elementos del array
// tecnologias.pop(); // Elimina del final NO ES RECOMENDABLE
// tecnologias.shift(); // Elimina del inicio NO ES RECOMENDABLE
// tecnologias.splice(2, 3); // Elimina de una posición en especifica NO ES RECOMENDABLE

const nuevoArray = tecnologias.filter(function (tech) {
	// Elimina los elementos que no cumplan la condición y retorna un nuevo array ES RECOMENDABLE
	return tech === 'React';
});

// Reemplazar del array
// tecnologias[0] = 'GraphQL'; // Reemplaza el elemento en la posición 0 NO ES RECOMENDABLE

const nuevoArray2 = tecnologias.map(function (tech) {
	// Reemplaza los elementos del array y retorna un nuevo array ES RECOMENDABLE
	if (tech === 'HTML') {
		return 'GraphQL';
	} else {
		return tech;
	}
});

console.table(tecnologias);
console.table(nuevoArray);
console.table(nuevoArray2);
