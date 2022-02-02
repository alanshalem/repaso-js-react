// manipular elementos HTML con JS

const heading = document.querySelector('.heading'); // Selecciona el elemento con la clase heading
heading.textContent = 'Un Nuevo Heading'; // Cambia el texto del elemento
console.log(heading.textContent); // Muestra el nuevo texto

const inputNombre = document.querySelector('#nombre'); // Selecciona el elemento con el id nombre
inputNombre.value = 'Un valor por default'; // Cambia el valor del elemento

const enlaces = document.querySelectorAll('.navegacion a'); // Selecciona todos los elementos con la clase navegacion y a, devuelve una NodeList
enlaces.forEach((enlace) => (enlace.textContent = 'Nuevo Enlace')); // Cambia el texto de todos los elementos
