// Eventos del DOM - Clicks

const heading = document.querySelector('.heading'); // Selecciona el elemento con la clase heading
heading.addEventListener('click', () => {
	// Agrega un evento al elemento
	heading.textContent = 'Nuevo Heading al dar click'; // Cambia el texto del elemento
});

const enlaces = document.querySelectorAll('.navegacion a'); // Selecciona todos los elementos con la clase navegacion y a, devuelve una NodeList
enlaces.forEach((enlace) => {
	// Itera sobre todos los elementos
	enlace.addEventListener('click', () => {
		// Agrega un evento al elemento
		console.log('Diste click en un enlace'); // Muestra un mensaje en consola
	});
});
