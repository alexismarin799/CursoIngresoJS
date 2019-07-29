function mostrar() {

	var numero;
	var contador = 0;
	var seguir;
	var maximo;
	var minimo;
  //var flag


	do {

		numero = parseInt(prompt("Ingrese numero: "));

		while (isNaN(numero)) {

			alert("Chiwewencha eso no es un numero");

			numero = parseInt(prompt("Ingrese numero: "));


		}

		if (contador == 0) {

			maximo = numero;
			minimo = numero;

		} else {
			//me fijo si en la variable numero tengo un nuevo maximo
			if (numero > maximo/* || flag == 0 */) {
				//si es asi lo actualizo
				maximo = numero;
			}
			//me fijo si en la variable numero tengo un nuevo maximo
			if (numero < minimo/*|| flag == 0*/) {
				//si es asi lo actualizo
				minimo = numero;
				//flag = 1;

			}

		}

		contador++;





		seguir = prompt("Quiere ingresar otro numero?");

	} while (seguir == 's');


	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;




















	//var contador=0;
	// declarar variables

	//var respuesta='si';

	//while(respuesta!='no')
	//{


	//}




}//FIN DE LA FUNCIÓN