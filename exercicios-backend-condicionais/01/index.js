let entrada = require('prompt-sync')({ sigint: true });
let jogada1 = entrada("Digite sua primeira jogada: Ex:tesoura, pedra ou papel:");
let jogada2 = entrada("Digite sua segunda jogada: Ex:tesoura, pedra ou papel:");

if (jogada1 === 'tesoura' && jogada2 === 'pedra') {
    console.log('jogada número 2 ganhou!');


} else {
    if (jogada1 === 'pedra' && jogada2 === 'tesoura') {
        console.log('jogada número 1 ganhou!');
    }
}

if (jogada1 === 'tesoura' && jogada2 === 'papel') {
    console.log('jogada número 1 ganhou!');
} else {
    if (jogada1 === 'papel' && jogada2 === 'tesoura') {
        console.log('jogada número 2 ganhou!');
    }
}
if (jogada1 === 'pedra' && jogada2 === 'papel') {
    console.log('jogada número 2 ganhou!');
} else {
    if (jogada1 === 'papel' && jogada2 === 'pedra') {
        console.log('jogada número 1 ganhou!');
    }
}
if (jogada1 === 'tesoura' && jogada2 === 'tesoura') {
    console.log('Deu empate!');
} else {
    if (jogada1 === 'papel' && jogada2 === 'papel') {
        console.log('Deu empate!');
    }
}

if (jogada1 === 'pedra' && jogada2 === 'pedra') {
    console.log('Deu empate!');
}