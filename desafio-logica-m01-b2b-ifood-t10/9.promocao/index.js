function solucao(precos) {
    //seu codigo aqui
      let soma=0,menorValor=precos[0];
      for(indice of precos){
          soma+=indice;
          if(indice<menorValor){
              menorValor=indice;
          }
      }
    if(precos.length>=3){
        menorValor*=0.5;
        soma-=menorValor;
    }
      console.log(soma);
  }