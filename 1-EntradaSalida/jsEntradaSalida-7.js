/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numero1;
    var numero2;
    var resultado;
    var suma1;
    var suma2;

    numero1 = document.getElementById("numeroUno").value;

    numero2 = document.getElementById("numeroDos").value;

    suma1 = parseInt(numero1, 10);
    suma2 = parseInt(numero2, 10);

    resultado = suma1 + suma2;

    alert("El resultado es " + resultado);


	
}

function restar()
{
    var numero1;
    var numero2;
    var resultado;
    var resta1;
    var resta2;

    numero1 = document.getElementById("numeroUno").value;

    numero2 = document.getElementById("numeroDos").value;

    resta1 = parseInt(numero1, 10);
    resta2 = parseInt(numero2, 10);

    resultado = resta1 - resta2;

    alert("El resultado es " + resultado);


}

function multiplicar()
{ 
    var numero1;
    var numero2;
    var resultado;
    var multiplicacion1;
    var multiplicacion2;

    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;

    multiplicacion1 = parseInt(numero1, 10);
    multiplicacion2 = parseInt(numero2, 10);

    resultado = multiplicacion1 * multiplicacion2;

    alert("El resultado es " + resultado);


	
}

function dividir()
{
    var numero1;
    var numero2;
    var resultado;
    var divisor1;
    var dividendo1;

    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;

    divisor1 = parseInt(numero1, 10);
    dividendo1 = parseInt(numero2, 10);

    resultado = divisor1 / dividendo1;

    alert("El resultado es " + resultado);

    
	
}

