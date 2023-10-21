function solucao(lista) {
    // seu codigo aqui
      let contagem=0,maiorNumero=lista[0];
      for(let numeros of lista){
          if(maiorNumero<numeros && numeros>=18){
              maiorNumero=numeros;
          }
          if(numeros<18){
              contagem++
          }
      }
      let idadeMenor=maiorNumero;
      for (const indice of lista) {
          if(maiorNumero-indice>0 && idadeMenor>indice && indice>=18){
              idadeMenor=indice;
          }
      }
      if(contagem===lista.length){
          console.log("CRESCA E APARECA");
      }else{
          console.log(idadeMenor);
      }
  }