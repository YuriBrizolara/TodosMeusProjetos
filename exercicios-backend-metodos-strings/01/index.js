const comentario = "Esse COVID é muito perigoso!";
const comentarioFormatado= comentario.toLowerCase();
const acharPalavra= comentarioFormatado.includes("covid");
const acharSegundaPalavra= comentarioFormatado.includes("pandemia");
if(acharPalavra===true || acharSegundaPalavra===true){
    console.log("Comentário bloqueado por conter palavras proibidas");
}else{
    console.log("Comentário autorizado");
}