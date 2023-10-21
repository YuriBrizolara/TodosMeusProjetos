const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor){
        if(valor>0){
            this.saldo+=valor;
            valor*=0.01;
            console.log(`Deposito de R$${valor} realizado para o cliente: ${this.nome}`);
            let historico = {
                tipo: "Depósito",
                valor: `${valor}R$`};
            this.historicos.push(historico);
            
        }
    },
    sacar:function (valor){
        if(this.saldo>valor){
            if(valor>0){
                this.saldo-=valor;
                valor*=0.01;
                console.log(`Sacou de R$${valor} realizado para o cliente: ${this.nome}`);
                let historico = {
                    tipo: "Sacou",
                    valor: `${valor}R$`};
                this.historicos.push(historico);
            }
        }else{
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`);
        }
    },
    extrato:function() {
        this.saldo*=0.01;
        console.log(`Extrato de ${this.nome} - Saldo${this.saldo}`);
        console.log(this.historicos);
}   
}
contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();