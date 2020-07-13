const ulElement = document.querySelector("#resultado");
var arrayString = [];

for (let i = 0; i <= 4; i++) {
    arrayString.push("resultado");
}

for (let i in arrayString) {
    const liElement = document.createElement("li");
    liElement.innerHTML = `<span>${arrayString[i]}</span>`;
    ulElement.appendChild(liElement);
}