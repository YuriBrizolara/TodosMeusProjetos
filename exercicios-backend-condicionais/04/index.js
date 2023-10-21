let ladoA = 3;
let ladoB = 3;
let resultado = ((ladoA + ladoB) / 2);
if (ladoA === ladoB) {
    console.log(resultado)
    if (resultado === 0) {
        console.log('Bucha de branco');
    } else if (resultado === 1) {
        console.log('Bucha de Ás');
    } else if (resultado === 2) {
        console.log('Bucha de Duque');
    } else if (resultado === 3) {
        console.log('Bucha de Terno');
    } else if (resultado === 4) {
        console.log(' Bucha de Quadra');
    } else if (resultado === 5) {
        console.log('Bucha de Quina');
    } else {
        console.log('Bucha de Sena');
    }
}
console.log('Não é uma bucha');