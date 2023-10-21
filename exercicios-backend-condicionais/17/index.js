//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;
valorDasParcelas = valorDoProduto / quantidadeDoParcelamento;
restante = valorDoProduto - valorPago;
parcelas = restante / valorDasParcelas;

console.log(`Restam ${parcelas} parcelas de ${valorDasParcelas} reais `);