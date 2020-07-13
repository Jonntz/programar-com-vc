const resultado = document.querySelector("#resultado");
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        const valor = document.createElement("div");
        valor.innerHTML = `<p>${i}</p>`;
        resultado.appendChild(valor);
    }
}