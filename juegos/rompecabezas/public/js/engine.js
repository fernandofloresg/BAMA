var config;

var call = function(callback) {
	d3.json("./data/config.json", (error, data) => {
		if (error) {
			console.log(error);
		}
		config = data;
	});
}
call();

/**
 * Verifica que la respuesta sea correcta.
 * @param int 	   nivel     Indice del nivel de dificultad
 * @param int      pregunta  Indice de la pregunta dentro del nivel
 * @param string   respuesta Respuesta a comparar
 */
function Responder(nivel, pregunta, respuesta) {
	resp = config["niveles"][nivel][pregunta]["respuesta"];
	return resp == respuesta;
}