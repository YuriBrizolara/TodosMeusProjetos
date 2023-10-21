
const precos = [100, 500, 100, 200, 50];
let soma = 0, minimo = precos[0];
for (let i = 0; i < precos.length; i++) {
    soma += precos[i];
    if (precos[i] < minimo) {
        minimo = precos[i]
    }
}

if (precos.length >= 5) {
    soma = soma - minimo

}
console.log(soma);