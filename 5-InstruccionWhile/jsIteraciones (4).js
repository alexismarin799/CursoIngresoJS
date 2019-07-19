function mostrar() {

	var numero;

	numero = prompt("Ingrese un numero entre 0 y 9");

	while (isNaN(numero) || (numero < 0) || (numero > 9)){
		//while (!(numero > 0 && numero < 10))	
		numero = prompt("Error, ingrese un numero entre 0 y 9");
	
	}
	document.getElementById("Numero").value = numero;
	






}//FIN DE LA FUNCIÓN

/* -1 error
	5 bien
	11 error */