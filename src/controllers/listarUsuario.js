const pool = require('../db/conection');

const listarUsuario = async (req,res)=>{
    const {id} = req.params
try {
    const listar = await pool.query(`
    select * from usuarios where id = $1 
    `,[id])
    if(listar.rowCount === 0) {
        return res.status(404).json("Usuario não possui cadastrado!")
    }else{
        return res.json(listar.rows[0])
    }
    
} catch (error) {
    console.log(error);
}
}
module.exports = listarUsuario