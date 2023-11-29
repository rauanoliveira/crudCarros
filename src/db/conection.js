const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'ra280303',
    database: 'cadastroCarro'
})

module.exports = pool;