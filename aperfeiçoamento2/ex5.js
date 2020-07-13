var n1 = "";
var n2 = "";
var n3 = "";
var n4 = "";
var n5 = "";
var calc_media = "";

function media() {
    n1 = parseFloat(document.getElementById("n1").value);
    n2 = parseFloat(document.getElementById("n2").value);
    n3 = parseFloat(document.getElementById("n3").value);
    n4 = parseFloat(document.getElementById("n4").value);
    n5 = parseFloat(document.getElementById("n5").value);

    var resultado;

    resultado = (n1 + n2 + n3 + n4 + n5) / 5;

    calc_media = document.getElementById("resultado");
    calc_media.innerHTML = resultado;
    event.preventDefault();
}