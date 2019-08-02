function mostrar() {

    var contador;

    console.info("Inicio", contador);

    for (contador = 1; contador < 10; contador++) {

        console.info("in", contador);

        document.write(contador);

        //alert(contador);

    }
    console.info("out", contador);



}