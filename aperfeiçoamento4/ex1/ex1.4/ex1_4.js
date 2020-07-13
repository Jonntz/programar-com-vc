const ulElement = document.querySelector("#resultado");
var i = 0;

while (i < 5) {
    const liElement = document.createElement("li");
    liElement.innerHTML = `<span>Resultado</span>`;
    ulElement.appendChild(liElement);

    i++;
}