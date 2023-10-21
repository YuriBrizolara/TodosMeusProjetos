const nomeArquivo = 'Foto da Familia.pdf';
if( nomeArquivo.slice(-3)==="jpg" || nomeArquivo.slice(-3)==="jpeg" || nomeArquivo.slice(-3)==="gif" || nomeArquivo.slice(-3)==="png" ){
    console.log("Arquivo válido");
}else{
    console.log("Arquivo inválido");
}