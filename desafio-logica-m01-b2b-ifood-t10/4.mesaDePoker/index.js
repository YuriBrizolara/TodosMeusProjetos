function solucao(min, max, valores) {
    //seu codigo aqui
      let quemPodeJogar=[];
      for(indice of valores){
          if(indice>=min && indice<=max){
              quemPodeJogar.push(indice);
          }
      }
      console.log(quemPodeJogar);
    
  }