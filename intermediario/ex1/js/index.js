var nome = "";
var pontos = "";
var nota = "";
var universidade = "";
var empresas = "";
var avatars = "";
var horarios = "";
var result = "";

function enviar() {
    nome = document.getElementById("nome").value;
    pontos = document.getElementById("pontos").value;
    nota = document.getElementById("nota").value;
    universidade = document.getElementById("universidade").value;
    empresas = document.getElementById("empresas").value;
    avatars = document.getElementById("avatars").value;
    horarios = document.getElementById("horarios").value;

    const dados = [nome,
        pontos, nota, universidade, empresas, avatars, horarios
    ];

    alert(dados);

};