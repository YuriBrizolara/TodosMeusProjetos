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

app.listen(3000);