const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "";

if (primeiroNome === "") {
    console.log('Primeiro nome é obrigatório e deverá sempre estar preenchido');
} else if (primeiroNome != "" && sobrenome != "" && apelido === "") {
    console.log(`${primeiroNome} ${sobrenome}`);
} else if (apelido != "") {
    console.log(apelido);
} else if (primeiroNome != "" && apelido === "") {
    console.log(primeiroNome)
}