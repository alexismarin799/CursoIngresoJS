/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

    var importe;
    var porcentaje;
    var resultado;

    importe = document.getElementById("importe").value;

    importe = parseInt(importe);

    resultado = document.getElementById("resultado").value;

    resultado = parseInt(resultado);

    porcentaje = importe * 25 / 100;


    resultado = importe - porcentaje;

    alert("El importe con el debido descuento es " + resultado);




	
}
