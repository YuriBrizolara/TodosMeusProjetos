const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];
const resultado = palavras.some(function teste(nome) {
    return nome === "vodka" || nome === "cerveja";
});

if (resultado == false) {
    console.log("tudo certo, vamos às compras!");
} else {
    console.log("revise sua lista, joão. Possui bebida com venda proibida!");
}
