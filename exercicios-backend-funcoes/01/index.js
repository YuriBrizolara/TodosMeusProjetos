const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};
function corrigirProva(){
    let pontos=0
    for (const correcao of prova.questoes){
        if(correcao.resposta===correcao.correta){
            pontos++
        }
    }
    let nota=pontos*2
    console.log(`O aluno(a) ${prova.aluno} acertou ${pontos} questões e obteve nota ${nota}`);
}
corrigirProva()
