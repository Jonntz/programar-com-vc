const resultado = document.querySelector("#resultado");

for (let i = 0; i <= 10; i++) {
    const resultElement = document.createElement("div");
    resultElement.innerHTML = `<p>${i}</p>`

    resultado.appendChild(resultElement);
}