let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
const identificadorPadronizado=identificador.padStart(6,"0");
let nomePrimeirasMaiusculas=nome
nomePrimeirasMaiusculas = nomePrimeirasMaiusculas.toLowerCase().replace(/(?:^|\s)\S/g, function(a) {
  return a.toUpperCase();
});
const emailFormatado=email.trim();
console.log(identificadorPadronizado);
console.log(nomePrimeirasMaiusculas);
console.log(emailFormatado);

