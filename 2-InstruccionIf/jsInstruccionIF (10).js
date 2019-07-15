function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

		var nota;

		nota = (Math.floor(Math.random() * 10 ) + 1);

		if(nota >= 9){

			alert(nota + " excelente");

		}else{

			if(nota >=4 ){
				 
				alert(nota + " aprobó");

			}else{

				alert(nota + " la proxima será");

			}
		}
	

}//FIN DE LA FUNCIÓN