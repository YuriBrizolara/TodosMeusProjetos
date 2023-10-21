const imoveis = require('../bancoDeDados');

const getImoveis=(req, res) =>{
    res.send(imoveis);
}
const getImovelPorId=(req, res) =>{
    const id = parseInt(req.params.id);
    const imovel = imoveis.find(item => item.id === id);
    if (imovel) {
        res.send(imovel);
    } else {
        res.send('Imóvel não encontrado');
    }
}
module.exports={
    getImoveis, 
    getImovelPorId
}