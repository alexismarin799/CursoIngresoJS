function mostrar() {


	var seguir;
	var numero;
	var acumulador = 0;
	var contador = 0;
	var promedio;



	do {

		numero = parseInt(prompt("Ingrese numero: "));

		while (isNaN(numero)) {

			alert("Chiwewencha eso no es un numero");

			numero = parseInt(prompt("Ingrese numero: "));


		}

		acumulador = acumulador + numero;

		contador++;

		seguir = prompt("Quiere ingresar otro numero?");

	} while (seguir == 's');

	promedio = acumulador / contador;

	document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = promedio;


	//var contador=0;
	//var acumulador=0;
	//var respuesta='si';


	//document.getElementById('suma').value=acumulador;
	//document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN