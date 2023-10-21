let entrada = require('prompt-sync')({ sigint: true });
let jogada1 = entrada("Digite o número da sua primeira jogada :");
let jogada2 = entrada("Digite o número da sua segunda jogada :");
resultado = Number(jogada1) + Number(jogada2);
//if (Number.isInteger((jogada1 + jogada2) / 2)) {
if (resultado % 2 === 0) {
    console.log('par');
} else {
    console.log('impar');
}
