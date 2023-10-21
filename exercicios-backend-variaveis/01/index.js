let entrada = require('prompt-sync')({ sigint: true });
//prompt pede informação para o teclado
peso_pessoa = entrada("Digite seu peso com o ponto para separar o decimal, ex:60.50 kg :");

altura_pessoa = entrada("Digite sua altura com o ponto para separar o decimal, ex:1.79 m:");
imc = peso_pessoa / (altura_pessoa ** 2);
let imc_formatado = imc.toFixed(2);  // Formata para duas casas decimais
console.log('seu IMC é:' + imc_formatado);
if (imc <= 18.5) {
    console.log('Você está com IMC abaixo do normal');
} else if (imc <= 24.9) {
    console.log('Você está com IMC normal');
} else if (imc <= 29.9) {
    console.log('Você está com IMC acima do normal');
} else if (imc <= 34.9) {
    console.log('Você está com IMC de obesidade grau 1');
} else if (imc <= 39.9) {
    console.log('Você está com IMC de obesidade grau 2');
} else {
    console.log('Você está com IMC de obesidade grau 3');
}