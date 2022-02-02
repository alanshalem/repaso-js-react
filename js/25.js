// Eventos del DOM - Inputs

const inputNombre = document.querySelector('.nombre'); // Selecciona el elemento con la clase nombre
inputNombre.addEventListener('input', function (e) {
	// Agrega un evento al elemento
	console.log(e.target.value); // Muestra el valor del elemento
});
//tipos de eventos mas comunes: input, keydown, keyup, keypress, focus, blur, change, submit

const inputPassword = document.querySelector('.password'); // Selecciona el elemento con la clase password
inputPassword.addEventListener('input', funcionPassword); // Agrega un evento al elemento

function funcionPassword() {
	inputPassword.type = 'text';

	setTimeout(() => {
		inputPassword.type = 'password'; // Cambia el tipo del elemento
	}, 100);
}
