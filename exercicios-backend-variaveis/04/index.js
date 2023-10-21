const capital_inicial = 1000;
const taxa_mensal_fixa = 12.5 / 100;
const periodo = 5;
montante = (capital_inicial * ((1 + taxa_mensal_fixa) ** 5));
montante_formatado = montante.toFixed(2);
console.log(`O montante foi de ${montante_formatado} reais`);
