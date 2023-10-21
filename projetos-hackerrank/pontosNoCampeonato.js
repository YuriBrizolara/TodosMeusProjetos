const resultados=["V","E","V","E"]
let pontos=0;

for (let resultado of resultados){

    if(resultado==="V"){
        pontos=pontos+3
    }else if(resultado==="E"){
        pontos++
    }
    
}
console.log(pontos);