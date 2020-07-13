var email = "";
var senha = "";

function login() {
    email = document.getElementById("email");
    senha = document.getElementById("senha");

    var oReq = new XMLHttpRequest();

    // alert(email + senha);
    oReq.open("POST", "http://52.91.139.190/fsapi/users/login", true);
    oReq.setRequestHeader("content-type", "application/json");

    oReq.onreadystatechange = function () {
        if (oReq.readyState == 4 && oReq.status == 404) {
            alert("Usuário não cadastrado no sistema");
        } else if (oReq.readyState == 4 && oReq.status == 200) {
            alert(this.responseText);
            window.location.href = 'cadastro.html';
        }
    }

    oReq.send(JSON.stringify({
        "email": email.value,
        "password": senha.value
    }));

    event.preventDefault()
};