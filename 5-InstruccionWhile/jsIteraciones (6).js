function mostrar() {

	var acumulador = 0;
	var promedio;




	for (var contador = 0; contador < 5; contador++) {


		numero = parseInt(prompt("Ingrese un numero: "));
		while(isNaN(numero)){

			alert("Esto no es un numero");
			numero = parseInt(prompt("Ingrese un numero: "));

		}

		acumulador = acumulador + numero;





	}

	promedio = acumulador / contador;

	document.getElementById("suma").value = acumulador;

	document.getElementById("promedio").value = promedio;

	






	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / 5;

}//FIN DE LA FUNCIÓN