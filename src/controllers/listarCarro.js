const pool = require('../db/conection');

const listarCarro = async (req,res)=>{
    const {usuario_id} = req.params
try {
    const listar = await pool.query(`
    select * from carros where usuario_id = $1 
    `,[usuario_id])
    if(listar.rowCount === 0) {
        return res.status(404).json("Usuario não possui carro cadastrado!")
    }else{
        return res.json(listar.rows[0])
    }
    
} catch (error) {
    console.log(error);
}
}
module.exports = listarCarro