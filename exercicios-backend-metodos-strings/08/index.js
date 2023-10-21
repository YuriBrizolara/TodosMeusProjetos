const cpf = "011.022.033-44";
function removerCaracteresEspeciais(cpf) {
    return cpf.replace(/[^\d]/g, '');
}
const cpfSemCaracteresEspeciais=removerCaracteresEspeciais(cpf);
console.log(cpfSemCaracteresEspeciais);