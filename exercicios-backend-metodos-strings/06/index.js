const celular = "7199918888";
if(celular.length===10){
    let adicionandoONove=celular.substring(0,2) + "9" + celular.substring(2);
    let ddd=adicionandoONove.slice(0,2),primeiroNove=adicionandoONove.slice(3,4)
    , numero=adicionandoONove.slice(3,7), restanteDoNumero=adicionandoONove.slice(7,11);
    console.log(`(${ddd}) ${primeiroNove} ${numero}-${restanteDoNumero}`);
}