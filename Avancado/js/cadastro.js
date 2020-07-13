var login = "";
var nome = "";
var email = "";
var senha = "";
var confirma_senha = "";

function cadastrar() {
    login = document.getElementById("login");
    nome = document.getElementById("nome");
    email = document.getElementById("email");
    senha = document.getElementById("senha");
    confirma_senha = document.getElementById("confirma-senha");

    // console.log(login, nome, email, senha, confirma_senha);

    var oReq = new XMLHttpRequest();
    // alert(email + senha);
    var token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVjMmQ4MWVlY2RhNTA0NjBjMjVjYjRkMCJ9.lYj_MmI-3gtH1J45e18BWun2kk7DKyVKhax0l3H0jgg";

    oReq.open("POST", "http://52.91.139.190/fsapi/users/auth/register-jwt", true);
    oReq.setRequestHeader("X-Auth-Token", token);
    oReq.setRequestHeader("content-type", "application/json");
    oReq.setRequestHeader('Access-Control-Allow-Origin', '*');

    oReq.onreadystatechange = function () {
        if (oReq.readyState == 4 && oReq.status == 404) {
            alert("Falha ao criar Usuário");

        } else if (oReq.readyState == 4 && oReq.status == 200) {
            alert("Conta Criada com sucesso", "\n", this.responseText);
            window.location.href = 'index.html';
        }

    }

    oReq.send(JSON.stringify({
        "login": login.value,
        "name": nome.value,
        "email": email.value,
        "password": senha.value,
        "confirma_password": confirma_senha.value,
        "idEmpresa": "13",
        "Status": "Aprovado",
        "role": "Client",
        "regId": "",
        "status": "Aprovado"
    }));

    event.preventDefault();
};