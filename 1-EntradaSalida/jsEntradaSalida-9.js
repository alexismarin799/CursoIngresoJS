/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

    var sueldo;
    var porcentaje;
    var resultado;

    sueldo = document.getElementById("sueldo").value;

    sueldo = parseInt(sueldo);

    resultado = document.getElementById("resultado").value;

    resultado = parseInt(resultado);



    porcentaje = sueldo * 10 / 100;

    resultado = sueldo + porcentaje;

    alert("El importe con el debido aumento es " + resultado);



    



    

	
}
