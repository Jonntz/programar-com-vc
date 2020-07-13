const ulElement = document.querySelector("#resultado");

for (let i = 0; i <= 19; i++) {
    const liElement = document.createElement("li");
    liElement.innerHTML = `<span>Resultado</span>`;
    ulElement.appendChild(liElement);
}