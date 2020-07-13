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

const resultado = usuarios.find((pessoa) => {
    if (pessoa.empresa == 'Google') {
        return pessoa.empresa;
    }
});

// console.log(resultado);
const conteudo = document.querySelector("#conteudo");

const resultElement = document.createElement("div");
resultElement.innerHTML = `<p>Esta é a única pessoa que trabalha na Google:</p>` + `<p>${resultado.nome}, ${resultado.idade}, ${resultado.empresa}</p>`;
conteudo.appendChild(resultElement);