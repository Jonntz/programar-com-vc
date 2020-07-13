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

const conteudo = document.querySelector("#conteudo");

const resultado = usuarios.map((pessoa) => {
    return pessoa.idade;
});

const resultElement = document.createElement("div");
resultElement.innerHTML = `As idades de ${usuarios[0].nome}, ${usuarios[1].nome} e ${usuarios[2].nome} são respectivamente: ` + `<p>${resultado}</p>`;
conteudo.appendChild(resultElement);