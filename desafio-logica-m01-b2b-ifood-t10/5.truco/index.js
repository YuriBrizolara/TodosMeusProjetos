function solucao(carta) {
    //seu codigo aqui
const manilhas={
        Q:"J",
        J:"K",
        K:"A",
        A:"2",
        2:"3",
        3:"Q"
    }
const resultado= manilhas[carta];
    console.log(resultado);
}