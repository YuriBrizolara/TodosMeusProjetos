function solucao(jogadores) {
    //seu codigo aqui
      let somaZero=0,somaUm=0,jogadorZero=[],jogadorUm=[];
      for(indice of jogadores){
          if(indice.jogada===0){
              somaZero++
              jogadorZero.push(indice.nome)
          }else{
              somaUm++
              jogadorUm.push(indice.nome)
          }
      }
      if(somaZero===1){
          console.log(jogadorZero[0])
      }else if(somaUm===1){
          console.log(jogadorUm[0])
      }else{
          console.log("NINGUEM")
      }
  }