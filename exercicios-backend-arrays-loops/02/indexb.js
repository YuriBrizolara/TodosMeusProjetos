const letras = ["A", "e", "B", "C", "E", "z"];
let encontrado = false, contagem = 0;
for (let letra of letras) {
    if (letra === "E" || letra === "e") {
        contagem++
    }
}
if (contagem === 0) {
    console.log('Não foram encontradas letras "E" ou "e"');
} else {
    console.log(`Foram encontradas ${contagem} letras "E" ou "e"`);
}
