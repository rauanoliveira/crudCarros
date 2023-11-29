const pool = require('../db/conection');

const cadastrar = async (req,res) =>{
    const {usuario_id} = req.params
    const {placa,modelo,marca} = req.body
    if(!placa || !modelo || !marca)
    {
      return res.json('Todos os campos são obrigatorios.')
    }
    try {
      const cadastrarCarro = await pool.query('insert into carros (placa, modelo, marca,usuario_id)values($1,$2,$3,$4) returning *',[placa,modelo,marca,usuario_id]);
  
      return res.status(201).json(cadastrarCarro.rows[0]);
  
    } catch (error) {
      console.log(error);
      if (error.code === '23505' && error.constraint === 'carros_pkey') {
        return res.status(400).json({ mensagem: "Já existe um carro cadastrado com a placa informada." });
      }
      return res.status(500).json('Erro interno do servidor!');
    }
  
  }
  module.exports = cadastrar;