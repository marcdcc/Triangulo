function triangulo() {
    let num = document.getElementById("num").value;
    piramide = '';
    resultado = '';

    for (i = 0; i < num; i++) {
        piramide += "#";
        resultado += "<p>" + piramide + "</p>";
    }
    document.getElementById('res').innerHTML = resultado;
}