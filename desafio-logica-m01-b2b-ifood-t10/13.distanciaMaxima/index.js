function processData(input) {
    //Enter your code here
    const linhas=input.trim().split("\n");
    const n = linhas[0];
    const cordenadas=[];
    for(let i=1;i<linhas.length;i++){
        const coord = linhas[i].split(" ");
        cordenadas.push({
            x: coord[0],
            y: coord[1]
        });
    }
    let maiorDistancia=0;
    for(let indice2 of cordenadas){
        for(let indice3 of cordenadas){
            const distancia=Math.sqrt((indice3.x-indice2.x)**2 
            +(indice3.y-indice2.y)**2);
            if(distancia>maiorDistancia){
                maiorDistancia=distancia
            }
        }
    }
    console.log(maiorDistancia)
} 