class Ejercicio extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			pregunta: 0,
			aciertos: 0,
			seleccionado: null
		}

		this.numeroPreguntas = 4; // Del 0 al 4 son 5 ejercicios
		this.generarEjercicios();
		this.siguiente = this.siguiente.bind(this);
		this.seleccionar = this.seleccionar.bind(this);
	}

	generarAleatorio(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	randomBool(){
		return Math.random() >= 0.5
	}

	generarOpcion (min, max) {
		if(this.props.nivel == 1) {
			if(this.randomBool()) {
				return this.generarAleatorio(min, max)
			}else {
				return (this.randomBool()) ? '+' : '-'
			}
		} else {
			if(this.randomBool()) {
				return this.generarAleatorio(min, max)
			}else {
				var operadores = ['+', '-', 'x', '/']
				return operadores[this.generarAleatorio(0,3)]
			}
		}
	}

	generarOperador() {
		var operadores = ['+', '-', 'x','/']
		return operadores[this.generarAleatorio(0,3)]
	}

	generarEjercicios() {
		this.ejercicios = [];
		//config tiene la estructura config[nivel][indice].{tira,respuesta}
		// En esta parte se selecciona la pregunta
		var config = this.recuperarConfig()
		for (var i = 0; i < this.numeroPreguntas; i++) {

			var ejercicio = new Object();
			switch (this.props.nivel) {
				//Se generan ejercicios dependiento del nivel de dificultad
				//En el nivel más fácil son solamente sumas y restas
				case 1:
					var operando1 =  this.generarAleatorio(0,10)// numeros de un dígito
					var operando2 = this.generarAleatorio(0,10)
					var operador = this.randomBool() ? '+' : '-'
					var resultado = (operador=='+') ? operando1 + operando2 : operando1 - operando2
					//Generar escondido
					switch (this.generarAleatorio(0,3)) {
						case 0:
							ejercicio.respuesta = operando1
							operando1 = '_'
							break;
						case 1:
						ejercicio.respuesta = operador
						operador = '_'
							break;
						case 2:
						ejercicio.respuesta = operador
						operador = '_'
							break;
						case 3:
						ejercicio.respuesta = resultado
						resultado = '_'
							break;
					}
					ejercicio.pregunta = operando1 + operador + operando2 + '=' + resultado

					var opciones = []
					var j;
					for(j=0;j < 3; j++) {
						let opcion = this.generarOpcion(0,10)
						while(opciones.includes(opcion) || ejercicio.respuesta == opcion){
							opcion = this.generarOpcion(0,10)
						}
						opciones.push(opcion)
					}
					opciones.push(ejercicio.respuesta)

					break;
					//En el nivel medio se realizan multiplicaciones y divisiones
				case 2:
				var operando1 =  this.generarAleatorio(0,10)// numeros de un dígito
				var operando2 = this.generarAleatorio(0,10)
				var operador = this.generarOperador()
				var resultado
				switch (operador) {
					case '+':
						resultado = operando1 + operando2
						break;
					case '-':
					resultado = operando1 - operando2
					break;
					case 'x':
					resultado = operando1 * operando2
					break;
					case '/':
					resultado = operando1 / operando2
					break;
				}
				//Generar escondido
				switch (this.generarAleatorio(0,3)) {
					case 0:
						ejercicio.respuesta = operando1
						operando1 = '_'
						break;
					case 1:
					ejercicio.respuesta = operador
					operador = '_'
						break;
					case 2:
					ejercicio.respuesta = operador
					operador = '_'
						break;
					case 3:
					ejercicio.respuesta = resultado
					resultado = '_'
						break;
				}
				ejercicio.pregunta = operando1 + operador + operando2 + '=' + resultado

				var opciones = []
				var j;
				for(j=0;j < 3; j++) {
					let opcion = this.generarOpcion(0,10)
					if(opciones.includes(opcion) || ejercicio.respuesta == opcion){
						opcion = this.generarOpcion(0,10)
					}
					opciones.push(opcion)
				}
				opciones.push(ejercicio.respuesta)
					break;
					//En el nivel difícil se crean problemas escritos utilizando sumas y restas
				case 3:
					break;
			}

			opciones = shuffle(opciones)
			ejercicio.opciones = opciones
			this.ejercicios.push(ejercicio)
		}
	}

	seleccionar(seleccionado) {
		this.setState({
			seleccionado: seleccionado
		});
	}

	siguiente() {
		if (this.state.seleccionado == null) {
			toastr("No has seleccionado una opción");
		} else {
			if (this.state.seleccionado == this.ejercicios[this.state.pregunta].respuesta) {
				this.setState({
					aciertos: this.state.aciertos + 1,
					pregunta: this.state.pregunta + 1,
					seleccionado: null
				});
			} else {
				this.setState({
					pregunta: this.state.pregunta + 1,
					seleccionado: null
				});
			}
		}
	}

	render() {
		if (this.state.pregunta >= this.ejercicios.length) {
			var porcentaje = this.state.aciertos / this.ejercicios.length * 100;
			this.props.terminar(porcentaje);
			return (<div></div>);
		} else {
			return (
				<div>
					<div className="row text-center">
						<div className="col-12">
							<h1>{ this.ejercicios[this.state.pregunta].pregunta }</h1>
						</div>
					</div>
					<div className="col-12"><hr/></div>
					<div className="row text-center">
						<div className="col">
						    <Img
						    	url={this.ejercicios[this.state.pregunta].opciones[0]}
						    	id={this.ejercicios[this.state.pregunta].opciones[0]}
						    	seleccionado={this.state.seleccionado}
						    	seleccionar={this.seleccionar} />
						</div>

						<div className="col">
						    <Img
						    	url={this.ejercicios[this.state.pregunta].opciones[1]}
						    	id={this.ejercicios[this.state.pregunta].opciones[1]}
						    	seleccionado={this.state.seleccionado}
						    	seleccionar={this.seleccionar} />
						</div>

						<div className="col">
						    <Img
						    	url={this.ejercicios[this.state.pregunta].opciones[2]}
						    	id={this.ejercicios[this.state.pregunta].opciones[2]}
						    	seleccionado={this.state.seleccionado}
						    	seleccionar={this.seleccionar} />
						</div>

						<div className="col">
						    <Img
						    	url={this.ejercicios[this.state.pregunta].opciones[3]}
						    	id={this.ejercicios[this.state.pregunta].opciones[3]}
						    	seleccionado={this.state.seleccionado}
						    	seleccionar={this.seleccionar} />
						</div>
					</div>

					<div className="row mt-3">
						<div className="col-2 offset-10">
							<button className="btn btn-principal" onClick={this.siguiente}>Siguiente</button>
						</div>
					</div>
				</div>
			);
		}
	}

	recuperarConfig() {
		var config = {
			1 : [
				{
		      pregunta: "2 + 1 = ",
		      respuesta: "3",
					opciones : ["1", "2", "4"]
		    },
				{
		      pregunta: "2 - 1 = ",
		      respuesta: "1",
					opciones : ["3", "0", "5"]
		    },
				{
		      pregunta: "7 + 3 = ",
		      respuesta: "10",
					opciones : ["13", "73", "7"]
		    },
				{
		      pregunta: "12 + 13 = ",
		      respuesta: "25",
					opciones : ["15", "26", "13"]
		    },
		    {
		      pregunta: "5 - 5 = ",
		      respuesta: "0",
					opciones : ["1", "10", "14"]
		    },
				{
		      pregunta: "10 + 10 = ",
		      respuesta: "20",
					opciones : ["0", "14", "15"]
		    },
		    {
		      pregunta: "3 x 5 = ",
		      respuesta: "14",
					opciones : ["15", "13", "14"]
		    },
				{
		      pregunta: "26 - 13 = ",
		      respuesta: "13",
					opciones : ["16", "10", "15"]
		    },
		    {
		      pregunta: "26 + 43 = ",
		      respuesta: "69",
					opciones : ["72", "70", "67"]
		    }
			],
		  2 : [
		    {
		      pregunta: "3 x 5 = ",
		      respuesta: "15",
					opciones : ["8", "21", "11"]
		    },
		    {
		      pregunta: "7 x 7 = ",
		      respuesta: "49",
					opciones : ["14", "0", "59"]
		    },
		    {
		      pregunta: "60 / 5 = ",
		      respuesta: "12",
					opciones : ["3", "10", "30"]
		    },
		    {
		      pregunta: "6 x 5 = ",
		      respuesta: "30",
					opciones : ["11", "50", "60"]
		    },
		    {
		      pregunta: "108 / 12 = ",
		      respuesta: "9",
					opciones : ["7", "12", "11"]
		    },
		    {
		      pregunta: "36 / 2 = ",
		      respuesta: "18",
					opciones : ["38", "75", "11"]
		    }
		  ],
			3 : [
				{
		      pregunta: "Tenemos 182 bombones y tenemos que repartirlos entre 26 personas ¿Cuántos bombones le tocan a cada persona?",
		      respuesta: "7",
					opciones : ["6", "8", "5"]
		    },
		    {
		      pregunta: "360 / 120 =",
		      respuesta: "3",
					opciones : ["2", "120", "1"]
		    },
				{
		      pregunta: "495 / 5 = ",
		      respuesta: "99",
					opciones : ["6", "2", "4"]
		    },
		    {
		      pregunta: "11 x 12 = ",
		      respuesta: "132",
					opciones : ["112", "114", "120"]
		    },
				{
		      pregunta: "Si una docena de huevos vale 200 pesos. ¿Cuánto valen 5 docenas?",
		      respuesta: "1000",
					opciones : ["205", "12", "1200"]
		    },
		    {
		      pregunta: "Si vamos a comprar el mandado y el costo total es de 357, si pagamos con un billete de 500 ¿Cuánto nos sobrará?",
		      respuesta: "143",
					opciones : ["153", "413", "103"]
		    }
			]
		}
		return config
	}
}
