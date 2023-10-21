const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
const express = require('express');
const app= express();
let indice=0
app.get('/',function(requisicao,resposta){
    if(indice===5){
        indice=0
    }
    resposta.send(`É a vez de ${jogadores[indice++]} jogar!`);

});

app.get('/remover',function(req,res){
    const {indice}=req.query;
    if(indice>jogadores.length || indice<0){
        res.send(`Não existe jogador no índice informado ${indice} para ser removido.`);
    }else {
        const remover= jogadores.splice(indice,1);
        res.send(jogadores);
    }
});
app.get('/adicionar', (req, res) => {
    const nome = req.query.nome;
    const indice = parseInt(req.query.indice);
  
    if (!nome) {
        res.send('O parâmetro "nome" é obrigatório');
    }
  
    
  
    if (isNaN(indice)) {
      jogadores.push(nome);
    } else if (indice < 0 || indice > jogadores.length) {
      res.send(`O índice ${indice}especificado não existe no array`);
    } else {
      jogadores.splice(indice, 0, nome);
    }
  });
  
app.listen(8000);