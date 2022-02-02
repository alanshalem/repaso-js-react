// Eventos del DOM - Submit

const formulario = document.querySelector('#formulario'); // Seleccionamos el formulario
formulario.addEventListener('submit', (e) => {
	e.preventDefault(); // Evita que se envie el formulario

	const nombre = document.querySelector('.nombre').value; // Seleccionamos el nombre, usamos chaining para seleccionar el valor del input
	const password = document.querySelector('.password').value; // Seleccionamos la contraseña

	if (nombre === '' || password === '') {
		// Si el nombre o la contraseña estan vacios
		console.log('Todos los campos son obligatorios'); // Mensaje de error
	} else {
		// Si no estan vacios
		console.log('Todo bien, enviando...'); // Mensaje de confirmacion
	}
});
