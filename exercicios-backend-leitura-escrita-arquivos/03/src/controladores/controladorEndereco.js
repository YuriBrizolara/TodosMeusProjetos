const { buscarEndereco } = require('utils-playground');
const fs = require('fs/promises');

const CAMINHO_JSON_ENDERECOS = './enderecos.json';

exports.consultarEndereco = async (cep) => {
  try {
    let enderecos = [];
    try {
      const data = await fs.readFile(CAMINHO_JSON_ENDERECOS, 'utf8');
      enderecos = JSON.parse(data);
    } catch (error) {
    }
    const enderecoLocal = enderecos.find((endereco) => endereco.cep === cep);
    if (enderecoLocal) {
      return enderecoLocal;
    }
    const enderecoExterno = await buscarEndereco(cep);
    enderecos.push(enderecoExterno);
    await fs.writeFile(CAMINHO_JSON_ENDERECOS, JSON.stringify(enderecos, null, 2), 'utf8');
    return enderecoExterno;
  } catch (error) {
    return res.json(`Deu erro:${erro.message}`);
  }
};