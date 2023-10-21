function solucao(numeros) {
    // seu codigo aqui
   let sNumeros=0
   for(indice of numeros){
        sNumeros+=indice
   }
   while(sNumeros>numeros.length){
       sNumeros-=numeros.length
   }
   console.log(sNumeros)
 
}