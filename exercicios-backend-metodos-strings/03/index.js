function transformarEmUrlAmigavel(texto) {
  const palavras = texto.split(/\s+/);
  const urlAmigavel = palavras
    .map(function(palavra) {
      return palavra.toLowerCase();
    })
    .join('-');

  return urlAmigavel;
}

const texto = "Aprenda programar do zero na Cubos Academy";
const urlAmigavel = transformarEmUrlAmigavel(texto);
console.log(urlAmigavel);
