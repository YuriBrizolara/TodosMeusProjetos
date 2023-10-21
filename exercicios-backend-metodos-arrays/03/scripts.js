function capturarCarros(arrayDeCarros, posicao) {
    if (posicao < 0 || posicao >= arrayDeCarros.length) {
        console.log("Posição inválida.");
        return;
    }

    if (posicao + 3 <= arrayDeCarros.length) {
        const carrosCapturados = arrayDeCarros.slice(posicao, posicao + 3);
        console.log(carrosCapturados.join(' - '));
    } else {
        console.log("Não há carros suficientes a partir da posição informada.");
    }
}

const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

capturarCarros(nomes, posicao);
