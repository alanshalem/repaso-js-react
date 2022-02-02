// Fetch API - es el nuevo AJAX, es una API que se encarga de hacer peticiones a un servidor, y devuelve una promesa
// Fetch API vino a reemplazar XMLHttpRequest
const url = 'https://jsonplaceholder.typicode.com/comments';

const consultarAPI = () => {
	fetch(url)
		.then((respuesta) => respuesta.json())
		.then((resultado) => {
			resultado.forEach((comentario) => {
				console.log(comentario);
			});
		});
};
consultarAPI();
