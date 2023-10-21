const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const começamComLetraA = []

for (let nome of nomes) {
    if (nome[0] === "A" || nome[0] === "a") {
        começamComLetraA.push(nome);
    }
}

if (começamComLetraA.length === 0) {
    console.log("Não existem nomes com a letra A nesse array.");
} else {
    console.log(começamComLetraA);
}