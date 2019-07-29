function mostrar() {

	var seguir;
	var numero;
	var contNeg = 0;
	var positivo = 0;
	var negativo = 1;
	//var flag;

	do {

		numero = parseInt(prompt("Ingrese numero: "));

		while (isNaN(numero)) {

			alert("Esto no es un numero");

			numero = parseInt(prompt("Ingrese numero: "));

		}

		if (numero < 0) {

			//aca se suman los negativos

			negativo *= numero;
			contNeg++;
			// flag = 1

		} else {

			positivo += numero;
		}

		seguir = prompt("Quiere ingresar otro numero?");


	} while (seguir == 'si');
	//var positivo = 0;
	//var negativo = 1;




	document.getElementById('suma').value = positivo;
	if (/*flag == 0 */contNeg == 0) {

		negativo = 0;

	}
	document.getElementById('producto').value = negativo;

	

}//FIN DE LA FUNCIÓN

//RECORDAR ORDEN!!!!!!!!!!!


