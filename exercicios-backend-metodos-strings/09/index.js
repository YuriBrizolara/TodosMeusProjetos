const nome = 'Guido Cerqueira';
function gerandoNickname(name) {
    name = name.replace(/\s/g, "").toLowerCase();
    if (name.length > 12) {
        name = name.substring(0, 12);
    }
    const nickname = "@" + name;
    return nickname;
}
const nickname = gerandoNickname(nome);
console.log(nickname);
