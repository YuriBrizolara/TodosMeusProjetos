function solucao(min, km) {
    //seu codigo aqui
    let somaMin=0,somaKm=0;
    if(min-20<0){
        somaMin=min*50;
    }else if(min-20>0){
        somaMin=((min-20)*30)+1000;
    }
    if(km-10<0){
        somaKm=km*70;
    }else if(km-10>0){
        somaKm=((km-10)*50)+700;
    }
    let total=somaMin+somaKm,totalArendodadoParaBaixo=Math.floor(total);
    console.log(totalArendodadoParaBaixo);
}