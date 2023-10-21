const precosIndices = [], precos=[5,10,3];

for (let indice = 0; indice < precos.length; indice++) {
    precosIndices[precos[indice]] = indice;
}

const precosOrdenados = precos.slice().sort((a, b) => b - a); 

let perdaMinima = 99999999;

for (let i = 0; i < precosOrdenados.length - 1; i++) {
    const precoAtual = precosOrdenados[i];
    const proximoPreco = precosOrdenados[i + 1];
    
    if (precosIndices[precoAtual] < precosIndices[proximoPreco]) {
        const perda = precoAtual - proximoPreco;
        perdaMinima = Math.min(perdaMinima, perda);
    }
}

console.log(perdaMinima);