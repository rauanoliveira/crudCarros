const pool = require('../db/conection');

const cadastrarUsuario = async (req,res)=>{
    const {nome, email,cpf} = req.body;

    try {
        if(!nome || !email || !cpf)
        {
            return res.json('Todos os campo são obrigatorios.')
        }
        const cadastroRealizado = await pool.query('insert into usuarios (nome,email,cpf)values($1, $2, $3) returning*',[nome,email,cpf]);
        return res.status(201).json(cadastroRealizado.rows[0])
    } catch (error) {
        console.log(error)
        if (error.code === '23505' && error.constraint === 'usuarios_email_key' || error.constraint === 'usuarios_cpf_key') {
            return res.status(400).json({ mensagem: "Já existe usuário cadastrado com o e-mail ou cpf informado." });
        }
        return res.status(500).json('error interno do servidor!');
    }
}

module.exports = cadastrarUsuario;