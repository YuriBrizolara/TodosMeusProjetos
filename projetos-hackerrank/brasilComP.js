const palavras = ["aveia", "manha", "ave"],
  primeiraLetra = ["a"],
  segundaLetra = ["v"];
let contagem = 0;
for (let indice = 0; indice < palavras.length; indice++) {
  let string = palavras[indice];
  let primeirasLetras = string[0],segundasLetras = string[1];
  if (primeiraLetra == primeirasLetras && segundaLetra == segundasLetras) {
    console.log(string);
    contagem++;
  }
}
if (contagem === 0) {
  console.log("NENHUMA");
}