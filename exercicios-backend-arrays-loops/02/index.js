const letras = ["A", "a", "B", "C", "L", "z"];
let encontrado = false;
for (let letra of letras) {
    if (letra === "E" || letra === "e") {
        console.log('tem a letra E ou tem a letra e');
        encontrado = true;
        break;
    }

}
if (!encontrado) {
    console.log('não tem a letra E/e');
}