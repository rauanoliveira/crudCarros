const pool = require('../db/conection');

const atualizar = async (req,res)=>{
    const {id} = req.params
    const {nome,email,cpf} = req.body
    if(!nome || !email || !cpf)
    {
      return res.json('Todos os campos são obrigatorios.')
    };
    try {
      const atualizarUsuario = await pool.query('update usuarios set nome = $1, email = $2, cpf = $3 where id = $4 returning *',[nome,email,cpf,id])
  
    return res.status(200).json({'usuario atualizado com sucesso' : atualizarUsuario.rows[0]});
    } catch (error) {
      console.log(error);
      if (error.code === '23505' && error.constraint === 'usuario_pkey') {
        return res.status(400).json({ mensagem: "Já existe um usuario cadastrado com o cpf informado." });
      }
      return res.status(500).json('Erro interno do servidor!');
    }
  
  }
  module.exports = atualizar