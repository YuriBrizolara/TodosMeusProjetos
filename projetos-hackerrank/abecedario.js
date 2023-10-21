let letra = "m", contagem = 0;
const palavras = ["mamao", "maca", "melao", "melancia", "laranja"];
for (let palavra of palavras) {
    const primeiraLetra = palavra[0];
    if (primeiraLetra !== letra) {
        contagem++;
    }
} console.log(contagem);