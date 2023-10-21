const numeroCartao = '1111222233334444';
const primeirosDigitos=numeroCartao.slice(0,4),ultimosDigitos=numeroCartao.slice(-4);
console.log(primeirosDigitos);
console.log(ultimosDigitos);
const mascarandoCartao= ultimosDigitos.padStart(12,"*");
console.log(primeirosDigitos+mascarandoCartao);