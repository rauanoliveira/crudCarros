const pool = require('../db/conection');

const deletarCarro = async (req,res)=>{
  const {usuario_id} = req.params;
  const {placa} = req.body;

  try {
    const existeCarro = await pool.query('select * from carros where placa = $1 and usuario_id = $2' ,[placa,usuario_id])

  if(existeCarro.rowCount < 1)
  {
    return res.status(404).json({mensagem: 'Placa de carro informado não cadastrada.'})
  }

  const dropCarro = await pool.query('delete from carros where placa = $1 and usuario_id = $2',
  [placa,usuario_id]);

  return res.status(200).json('Carro deletado.')

  } catch (error) {
    console.log(error);
    return res.status(500).json('Erro interno do servidor!');
  }
  }

  module.exports = deletarCarro;