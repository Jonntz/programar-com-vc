function letra(palavra) {
    if (palavra.match(/d/) || palavra.match(/o/) || palavra.match(/t/) || palavra.match(/a/)) {
        console.log("Letra encontrada");
    } else {
        console.log("Letra não encontrada")
    }
}

letra("zé");