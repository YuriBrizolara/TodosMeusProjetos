const pool = require('../conexao');
const listarAutor = async (req,res) =>{
	const { id } = req.params

	try {
		const query = `
            select a.id, a.nome, a.idade, l.id as livro_id, l.nome as livro_nome,
            l.genero as livro_genero, l.editora as livro_editora, 
            l.data_publicacao as livro_data_publicacao 
            from autores a left join livros l 
            on a.id = l.autor_id where a.id = $1
        `
		const { rowCount, rows } = await pool.query(query, [id])

		if (rowCount === 0) {
			return res.status(404).json({ mensagem: 'O autor não existe' })
		}

		const livros = rows.map(livro => {
			return {
				id: livro.livro_id,
				nome: livro.livro_nome,
				genero: livro.livro_genero,
				editora: livro.livro_editora,
				data_publicacao: livro.livro_data_publicacao,
			}
		})

		const autor = {
			id: rows[0].id,
			nome: rows[0].nome,
			idade: rows[0].idade,
			livros,
		}

		return res.json(autor)
	} catch (error) {
		return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }

};
const cadastrarAutor = async (req, res) => {
    const { nome, idade } = req.body;
    if (!nome) {
        return res.status(400).json({ mensagem: 'O nome é obrigatório' });
    }
    const query = 'INSERT INTO autores (nome, idade) VALUES ($1, $2)';
    const params = [nome, idade];
    try {
        const resultado = await pool.query(query, params);
        return res.json(resultado.rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensagem: 'Ocorreu um erro ao cadastrar o autor' });
    };
};
const cadastrarLivro = async (req, res) => {
    const autor_id = req.params.id;
    const { nome, genero, editora, data_publicacao } = req.body;
    if (!nome) {
      return res.status(400).json({ mensagem: "O campo nome é obrigatório." });
    }
    const query = 'INSERT INTO livros (nome, genero, editora, data_publicacao, autor_id) VALUES ($1, $2, $3, $4, $5)';
    const params= [nome,genero,editora,data_publicacao,autor_id];
    try {
        const resultado = await pool.query(query, params);
        return res.json(resultado.rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensagem: 'Ocorreu um erro ao cadastrar o livro' });
    };
};
const listarLivros = async (req, res) => {
	try {
		const query = `
            select l.id, l.nome, l.genero, l.editora, l.data_publicacao,
            l.autor_id, a.nome as autor_nome, a.idade as autor_idade 
            from livros l left join autores a 
            on l.autor_id = a.id
        `

		const { rows } = await pool.query(query)

		const livros = rows.map(livro => {
			const { autor_id, autor_nome, autor_idade, ...dadosLivro } = livro
			return {
				...dadosLivro,
				autor: {
					id: autor_id,
					nome: autor_nome,
					idade: autor_idade,
				},
			}
		})

		return res.json(livros)
	} catch (error) {
		return res.status(500).json({ mensagem: 'Erro interno do servidor' })
	}
};

module.exports={
    listarAutor,
    cadastrarAutor,
    cadastrarLivro,
    listarLivros
};