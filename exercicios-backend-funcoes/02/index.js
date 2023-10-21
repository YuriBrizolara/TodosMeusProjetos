const carro={
    ligado:false,
    velocidade:0,
    ligar:function ligarCarro(){//função de ligar o carro
        if(carro.ligado===false){
            carro.ligado=true;
            console.log(`Carro ligado. Velocidade: ${carro.velocidade}.`);
        }else{
            console.log('Este carro já está ligado.');
        }
    },
    desligar:function desligarCarro(){//função desligar o carro
        if(carro.ligado===true){
            carro.ligado=false;
            carro.velocidade=0;
            console.log(`Carro desligado. Velocidade: ${carro.velocidade}.`);
        }else{
            console.log('Este carro já está desligado');
        }
    },
    acelerar:function acelerarCarro(){//vrum
        if(carro.ligado===false){
            console.log('Não é possível acelerar um carro desligado.');
        }else{
            carro.velocidade=carro.velocidade+10;
            console.log(`Carro ligado. Velocidade:${carro.velocidade}`);
        }
    },
    desacelerar:
    function desacelerarCarro(){//freia junior
        if(carro.ligado===false){
            console.log('Não é possível desacelerar um carro desligado.');
        }else{
            carro.velocidade=carro.velocidade-10;
            console.log(`Carro ligado. Velocidade:${carro.velocidade}`);
        }
    }
}
carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();