var deuses = ['Odin', "Locke", "Thor"];
var nomes = "";
for (let i = 0; i <= 3; i++) {
    // console.log(deuses[i]);
    nomes = document.getElementById("nomes");
    nomes.innerHTML = deuses.sort() //exercicio 3;
}