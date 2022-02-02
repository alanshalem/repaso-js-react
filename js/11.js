// Iteradores en JS
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

// forEach - Acceder a cada elemento del array (Solo me permite listar y acceder a los elementos del array)
const arrayForeach = tecnologias.forEach(function (tech) {
	return tech;
});

// Crear un nuevo array
const arrayMap = tecnologias.map(function (tech) {
	return tech;
});

console.log(arrayForeach); // undefined
console.log(arrayMap); // [ 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js' ]
