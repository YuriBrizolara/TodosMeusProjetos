function solucao(lista) {
    //seu codigo aqui
      let cofre=0;
      for (let indice of lista ){
          if(indice<=0 || Number.isInteger(indice)){
              cofre+=indice;
          }else{}
      }
      console.log(cofre);
  }