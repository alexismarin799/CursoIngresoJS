/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numero1
    var numero2
    var resultado
    var suma1
    var suma2

    numero1 = document.getElementById("numeroUno").value;

    numero2 = document.getElementById("numeroDos").value;

    suma1 = parseInt(numero1, 10)

    suma2 = parseInt(numero2, 10)

    resultado = suma1 + suma2

    alert("El resultado es " + resultado);

    
}

