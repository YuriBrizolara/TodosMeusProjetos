const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    addProduto:function addProdutoAoCarrinho(carrinho, produto) {
        let produtoExistente = null;
    
        for (const element of this.produtos) {
            if (element.id === produto.id) {
                produtoExistente = element;
                break;
            }
        }
    
        if (produtoExistente) {
            produtoExistente.qtd += produto.qtd;
        } else {
            this.produtos.push(produto);
        }
    },
    calcularTotalDeItens: function(){
        let quantidadeTotal=0;
        for (const produto of this.produtos){
            quantidadeTotal += produto.qtd;
        }
        console.log(`Cliente: ${this.nomeDoCliente}`);
        if(quantidadeTotal===1){
            console.log(`Total de itens: ${quantidadeTotal} item`);
        }else{
            console.log(`Total de itens: ${quantidadeTotal} itens`);
        }
    },
    calcularTotalAPagar:function(){
        let quantidadeTotal=0,precoTotal=0;
        for (const produto of this.produtos){
            precoTotal += (produto.qtd * produto.precoUnit)/100;
        }
        precoTotal=precoTotal.toFixed(2);
        console.log(`Cliente: ${this.nomeDoCliente}`);
        if(quantidadeTotal===1){
            console.log(`Total de itens: ${quantidadeTotal} item`);
        }else{
            console.log(`Total de itens: ${quantidadeTotal} itens`);
        }
        console.log(`Total a pagar: R$ ${precoTotal}`);
    },
    calcularDesconto: function(){
        let descconto=0,descconto1=0,descconto2=0, menorValor=0;
        if(this.calcularTotalDeItens>4){
            for (const menorValorProduto of this.produtos) {
                if(menorValor>menorValorProduto.precoUnit){
                    menorValor=menorValorProduto.precoUnit;
                }
            }
            descconto1=menorValor
        }
        if(this.calcularTotalAPagar>100){
            descconto2=this.calcularTotalAPagar/10;
        }
        if(descconto1>descconto2){
            descconto=descconto1
        }else{
            descconto=descconto2
        }
        
        return descconto
    }
}


const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
};
const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
carrinho.addProduto(carrinho, novaBermuda);
carrinho.addProduto(carrinho, novoTenis);