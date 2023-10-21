function processData(input) {
    //Enter your code here
    const linhas=input.trim().split("\n");
    const senha=linhas[0];
    const senhaDigitada=linhas[1];
    const separarSenha=senha.split('');
    const separarSenhaDigitada=senhaDigitada.split('');
    let receberSenha=[];
    let contagem=0
    let segundaContagem=0
    let terceiraContagem=0
    for(let indice of separarSenha){
        const identificarSenha=separarSenhaDigitada.includes(indice);
        if(identificarSenha===true){
            contagem++;
            receberSenha.push(indice) 
        }
    }
    const senhaEmArray=senha.split('');
    for(let indice2 of senhaEmArray){
        if(indice2===receberSenha[segundaContagem]){
            terceiraContagem++
            if(receberSenha[segundaContagem]!=senhaEmArray[segundaContagem]){
                break
            }
        }
        segundaContagem++
    }
    
    if(contagem===senha.length && terceiraContagem===senha.length){
        console.log("SIM");
    }else {
    console.log("NAO");
    }
}
processData(' cubos
cuggbyos')