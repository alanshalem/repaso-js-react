// Ninguno de los siguientes metodos mutan el array original

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
const numeros = [10, 20, 30];

// Filter
nuevoArray = tecnologias.filter((tech) => tech !== 'React');

// Comprobar si un elemento existe en el array
// const resultado = tecnologias.includes('GraphQL')

// Some - Devuelve si al menos uno cumple la condición
// const resultado = numeros.some( numero => numero > 15) // Devuelve true

// Find - Devuelve el primer elemento que cumpla la condicion
// const resultado = numeros.find( numero => numero > 15) // Devuelve 20

// Every - Retorna true o false si todos cumplen la condición
// const resultado = numeros.every( numero => numero > 9) // Devuelve true

// Reduce - Acumulando en el total
// const resultado = numeros.reduce( (total, numero) => numero + total, 0) // Devuelve 60

// Filter - Crea un nuevo array en base a una condición
// const resultado = tecnologias.filter( tech => tech === 'Node.js') // Devuelve [ 'Node.js' ]
// const resultado = numeros.filter( numero => numero !== 10) // Devuelve [20, 30]

tecnologias.forEach((tech, index) => console.log(tech, index));

// Crear un nuevo array
const arrayMap = tecnologias.map((tech) => tech);

console.log(arrayMap);

// Metodos de Ordenamiento

// JavaScript Sort Array of Numbers
let values = [1, 2, 8, 9, 3];
const sorted_values = values.sort();
console.log(values); // Modifica el array original
console.log(sorted_values);

// JavaScript Sort Array of Strings
let array_students_str = ['Alex', 'Cathy', 'Lincoln', 'Jeff'];
const sorted_array_students_str = array_students_str.sort();
console.log(array_students_str); // Modifica el array original
console.log(sorted_array_students_str);

// JavaScript Sort Array of Objects
let array_students_obj = [
  { name: 'Alex', age: 16 },
  { name: 'Cathy', age: 14 },
  { name: 'Lincoln', age: 14 },
  { name: 'Jeff', age: 15 },
];

const sorted_array_students_obj = array_students_obj.sort(function (a, b) {
  return a.age - b.age;
});
console.log(array_students_obj);
console.log(sorted_array_students_obj);

// JavaScript Sort in Reverse Order

let students = ['Alex', 'Cathy', 'Lincoln', 'Jeff'];
const reversed_students = students.reverse();
console.log(students);
console.log(reversed_students);

