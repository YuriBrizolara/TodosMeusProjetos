const produtos= require('../bancodedados/produtos');
const {getStateFromZipcode}= require('utils-playground');
const listarProdutos = (req, res) => {
    return res.status(200).json(produtos);
}
const obterProduto = (req, res) => {
    const { id } = req.params;
    const produto = produtos.find((produto) => {
        return produto.id === Number(id);
    });
    if (!produto) {
        return res.status(404).json({ mensagem: 'Produto não encontrado.' });
    }
    return res.status(200).json(produto);
}
const valorFrete = async (req,res)=>{
    const { id } = req.params;
    const produto = produtos.find((produto) => {
        return produto.id === Number(id);
    });
    if (!produto) {
        return res.status(404).json({ mensagem: 'Produto não encontrado.' });
    }
    const productId = parseInt(req.params.id);
    const localizarProduto = produtos.find((p) => p.id === productId);
    const valorProduto= Number(localizarProduto.valor);
    let frete= valorProduto*0.12;
    const { cep } = req.params;
   try{
    const estado = await getStateFromZipcode(cep);
    if(estado=== "BA" || estado=== "SE" || estado==="AL" || estado==="PE" || estado==="PB"){
        frete= valorProduto*0.10;
    }else if(estado==="SP" || estado==="RJ"){
        frete=valorProduto*0.15;
    }
    const reposta={
        produto,
        estado,
        frete
    }
    return res.status(200).json(reposta);
   } catch(erro){
    return res.json(`Deu erro:${erro.message}`);
   }
}
module.exports={
    listarProdutos,
    obterProduto,
    valorFrete
}