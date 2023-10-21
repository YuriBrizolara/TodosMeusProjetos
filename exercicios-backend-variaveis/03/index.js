const valor_tenis = 129.99;
const meu_dinheiro = 80;
desconto = (valor_tenis - meu_dinheiro);
porcentagem_que_eu_tenho_para_tenis = ((meu_dinheiro * 100) / valor_tenis);
porcentagem_de_desconto = (100 - porcentagem_que_eu_tenho_para_tenis);
let porcentagem_de_desconto_formatado = porcentagem_de_desconto.toFixed(2);  // Formata para duas casas decimais
console.log(`voucher de desconto que preciso é de ${porcentagem_de_desconto_formatado} %`);