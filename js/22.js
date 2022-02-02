// Selectores del DOM

const heading = document.querySelector('.heading'); // Selecciona el elemento con la clase heading

// console.log(heading) // Muestra el elemento en consola
// console.log(heading.textContent) // Muestra el texto del elemento en consola
// console.log(heading.tagName) // Muestra el nombre del elemento en consola
// console.log(heading.classList) // Muestra las clases del elemento en consola
// console.log(heading.id) // Muestra el id del elemento en consola

const enlaces = document.querySelectorAll('.navegacion a'); // Selecciona todos los elementos con la clase navegacion y a
// Si utilizamos querySelectorAll nos retorna un array con todos los elementos que cumplan la condición
// No se pueden acceder a las propiedades del elemento, debemos iterarlo con un forEach
enlaces.forEach((enlace) => console.log(enlace.textContent));
