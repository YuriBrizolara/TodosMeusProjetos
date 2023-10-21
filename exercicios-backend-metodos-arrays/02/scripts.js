function dividirEmGrupos(nomes, tamanhoDoGrupo) {
    const quantidadeDeGrupos = Math.ceil(nomes.length / tamanhoDoGrupo);

    for (let i = 0; i < quantidadeDeGrupos; i++) {
        const startIndex = i * tamanhoDoGrupo;
        const endIndex = startIndex + tamanhoDoGrupo;
        const grupo = nomes.slice(startIndex, endIndex);

        console.log(`Grupo ${i + 1}: ${grupo.join(', ')}.`);
    }
}

const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;
dividirEmGrupos(nomes, tamanhoDoGrupo);
