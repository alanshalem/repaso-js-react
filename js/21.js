// Scope - es el alcance de una variable

const precio = 300; // Variable global

function unaFuncion() {
	const precio = 600; // Variable local
	console.log(precio);
}

if (true) {
	console.log(precio);
}

unaFuncion();
