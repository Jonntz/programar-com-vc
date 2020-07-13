var oReq = new XMLHttpRequest();
const real = document.querySelector("#real");
const moedas = document.getElementById("moedas");
moedas.addEventListener('change', function () {
    return this.value;
});
// console.log(selecao.value);

function converter() {

    oReq.open("GET", `https://economia.awesomeapi.com.br/all/${moedas.value}-BRL`, true);
    oReq.setRequestHeader("content-type", "application/json");
    oReq.onreadystatechange = function () {
        if (oReq.readyState == 4 && oReq.status == 404) {
            alert("Falha ao conectar com a API. Endereço não encontrado!");
        } else if (oReq.readyState == 4 && oReq.status == 200) {
            // console.log(this.responseText);
            const resultElement = document.createElement("div");
            var data = JSON.parse(this.responseText);
            if (moedas.value == "USD") {
                resultElement.innerHTML = `<br><h5>O valor do ${moedas.value} é de ${parseFloat(data.USD.ask).toFixed(2)} reais! </h5>`;
            } else if (moedas.value == "EUR") {
                resultElement.innerHTML = `<br><h5>O valor do ${moedas.value} é de ${parseFloat(data.EUR.ask).toFixed(2)} reais! </h5>`;
            } else {
                resultElement.innerHTML = `<br><h5>O valor do ${moedas.value} é de ${parseFloat(data.BTC.ask).toFixed(2)} reais! </h5>`;
            }

            real.appendChild(resultElement);
        }
    };

    oReq.send(JSON.stringify({
        "name": moedas.value
    }));

    event.preventDefault();
};