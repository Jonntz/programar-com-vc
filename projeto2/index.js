const cep = document.querySelector("#cep");
const endereco = document.querySelector("#endereco");
var oReq = new XMLHttpRequest();


function pesquisaCep() {
    // console.log(cep.value);
    oReq.open("GET", `https://cep.awesomeapi.com.br/json/${cep.value}`, true);
    oReq.setRequestHeader("content-type", "application/json");

    oReq.onreadystatechange = function () {
        endereco.textContent = "";
        if (oReq.readyState == 4 && oReq.status == 404) {
            alert("Não foi possível fazer a conexão com o banco de dados.");

        } else if (oReq.readyState == 4 && oReq.status == 200) {
            console.log(this.responseText);
            const data = JSON.parse(this.responseText);

            const resultElement = document.createElement("div");
            resultElement.innerHTML = `<br> <p>${data.address}</p>` +
                `<p>Estado: ${data.state}</p>` +
                `<p>Cidade: ${data.city}</p>` +
                `<p>Bairro: ${data.district}</p>` +
                `<p>DDD: ${data.ddd}</p>`;

            endereco.appendChild(resultElement);

        }
    };

    oReq.send(JSON.stringify({
        "cep": cep.value
    }));

    event.preventDefault();
}
