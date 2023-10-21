function solucao(lista) {
    //seu codigo aqui
  let cofre=0,media=0;
  for (let indice of lista ){
      if(indice<=0 || Number.isInteger(indice)){
          cofre+=indice;
        }else{}
  }
  media=cofre/lista.length
  console.log(media);
}