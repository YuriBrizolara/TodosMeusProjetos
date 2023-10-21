function solucao(texto) {
    // Seu codigo aqui
    let contagem=0
    const arrayTexto=texto.trim().split(" ");
    for(let i of arrayTexto){
         if(i===""){
        }else {
            contagem++
        }
    }
    console.log(contagem);
}