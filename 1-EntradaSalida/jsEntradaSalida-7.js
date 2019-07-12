/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numero1;
    var numero2;
    var suma;
    //var suma1; esta de mas
    //var suma2; esta de mas

    numero1 = document.getElementById("numeroUno").value;

    numero1 = parseInt(numero1);

    numero2 = document.getElementById("numeroDos").value;

    numero2 = parseInt(numero2);


    //suma1 = parseInt(numero1, 10); manera incorrecta
    //suma2 = parseInt(numero2, 10); manera incorrecta

    suma = numero1 + numero2;

    alert("La suma es " + suma);


	
}

function restar()
{
    var numero1;
    var numero2;
    var resta;
    //var resta1; esta de mas 
    //var resta2; esta de mas

    numero1 = document.getElementById("numeroUno").value;

    numero1 = parseInt(numero1);

    numero2 = document.getElementById("numeroDos").value;

    numero2 = parseInt(numero2);

    //resta1 = parseInt(numero1, 10);
    //resta2 = parseInt(numero2, 10);

    resta = numero1 - numero2;

    alert("El resultado es " + resta);




}

function multiplicar()
{ 
    var numero1;
    var numero2;
    var resultado;
    //var multiplicacion1;
    //var multiplicacion2;

    numero1 = document.getElementById("numeroUno").value;

    numero1 = parseInt(numero1);

    numero2 = document.getElementById("numeroDos").value;

    numero2 = parseInt(numero2);

    //multiplicacion1 = parseInt(numero1, 10);
    //multiplicacion2 = parseInt(numero2, 10);

    resultado = numero1 * numero2;

    alert("El resultado es " + resultado);


	
}

function dividir()
{
    var numero1;
    var numero2;
    var resultado;
    //var divisor1;
    //var dividendo1;

    numero1 = document.getElementById("numeroUno").value;

    numero1 = parseInt(numero1);

    numero2 = document.getElementById("numeroDos").value;

    numero2 = parseInt(numero2);


    //divisor1 = parseInt(numero1, 10);
    //dividendo1 = parseInt(numero2, 10);

    resultado = numero1 / numero2;

    alert("El resultado es " + resultado);

    
	
}

