const usuarios = [{
        nome: 'Caio',
        idade: 25,
        empresa: 'Google'
    },
    {
        nome: 'Tiago',
        idade: 35,
        empresa: 'Microsoft'
    },
    {
        nome: 'Felipe',
        idade: 30,
        empresa: 'Apple'
    },
];

const resultado = usuarios.filter((pessoa) => {
    if (pessoa.empresa == "Apple") {
        return pessoa;
    }
});

// console.log(resultado[0]);
const conteudo = document.querySelector("#conteudo");

const resultElement = document.createElement("div");
resultElement.innerHTML = `<p>Esta é a única pessoa que trabalha na Apple:</p>` + `<p>${resultado[0].nome}, ${resultado[0].idade}, ${resultado[0].empresa}</p>`;
conteudo.appendChild(resultElement);