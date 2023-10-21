const idade = 18, possuiPatologia = false, altura = 180, ehEstudante = false;
if (idade < 12 || idade > 65 || possuiPatologia === true || altura < 150) {
    console.log('ACESSO NEGADO');
} else if (idade < 18 || ehEstudante === true) {
    console.log('10 reais');
} else {
    console.log('20 reais');
}
