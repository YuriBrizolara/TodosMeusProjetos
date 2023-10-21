let contagem=0;
for (let acerto of disparos){
    if(acerto>70){
        contagem++
    }
} if(contagem>=3){
    console.log(contagem);
}else{
    console.log('ELIMINADO');
}