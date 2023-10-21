//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento === "credito") {
    valorFinal = valorDoProduto - (valorDoProduto * 0.05);
    valorFinal *= 0.01
    console.log('Valor a ser pago: R$' + valorFinal);
} else if (tipoDePagamento === "cheque") {
    valorFinal = valorDoProduto - (valorDoProduto * 0.03);
    valorFinal *= 0.01
    console.log('Valor a ser pago: R$' + valorFinal);
} else if (tipoDePagamento === "dinheiro" || tipoDePagamento === "debito") {
    valorFinal = valorDoProduto - (valorDoProduto * 0.10);
    valorFinal *= 0.01
    console.log('Valor a ser pago: R$' + valorFinal);
}