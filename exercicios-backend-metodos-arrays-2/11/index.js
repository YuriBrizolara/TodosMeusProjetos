const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
  ];
  const primeiraLetra=nomes.filter(function (filtro) {
    return filtro.startsWith("a") || filtro.startsWith("A")
});
console.log(primeiraLetra);