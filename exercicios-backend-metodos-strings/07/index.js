function verificarEmail(email) {
    // Verificar se o email contém um @ e pelo menos um .
    if (email.search('@') === -1 || email.search('.') === -1) {
        return false;
    }

    // Verificar se o email não começa ou termina com .
    if (email.startsWith('.') || email.endsWith('.')) {
        return false;
    }

    // Verificar o formato geral do email
    const indice = email.indexOf('@');
    const ultimoIndice = email.lastIndexOf('.');

    if (ultimoIndice <= indice + 1 || ultimoIndice === email.length - 1) {
        return false;
    }

    return true;
}

const emails = [
    "jose@cubos.academy",
    "jose@cubos.academy.br",
    "jose.messias@cubos.academy",
    "jose.messias@cubos.io","jose@cubos",
    "jose.messias@cubos","jose.messias@.",
    "jose.@cubos",".@","@.","jose.messias@cubos.",".messias@cubos.",".messias@cubos"
];

emails.forEach(email => {
    if (verificarEmail(email)) {
        console.log(`${email} E-mail válido`);
    } else {
        console.log(`${email} E-mail inválido`);
    }
});