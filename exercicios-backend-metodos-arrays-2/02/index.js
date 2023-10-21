const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

function verificarArray(testArray) {
    for (const palavra of testArray) {
        if (palavra.length > 5) {
            return true; // Retorna true imediatamente se uma palavra inválida for encontrada
        }
    }
    return false; // Retorna false se nenhuma palavra inválida for encontrada
}

const temPalavraInvalida = verificarArray(palavras);

if (temPalavraInvalida) {
    console.log("Existe palavra inválida.");
} else {
    console.log("Array validado.");
}
