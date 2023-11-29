const express = require('express');
const cadastrarUsuario = require('./src/controllers/cadastrarUsuario');
const cadastrar = require('./src/controllers/cadastrarCarro');
const atualizarCarro = require('./src/controllers/atualizarCarro');
const deletarCarro = require('./src/controllers/deletarCarro');
const atualizar = require('./src/controllers/atualizarUsuario');
const listarCarro = require('./src/controllers/listarCarro');
const listarUsuario = require('./src/controllers/listarUsuario');



const rotas = express();

//rotas.get();
//rotas.put();
//rotas.delete();
rotas.post('/cadastrar/usuario/:usuario_id', cadastrarUsuario);
rotas.post('/cadastrar/carro/:usuario_id', cadastrar);
rotas.put('/atualizar/carro/:usuario_id', atualizarCarro);
rotas.delete('/deletar/carro/:usuario_id', deletarCarro);
rotas.put('/atualizar/usuario/:id', atualizar);
rotas.get('/listar/carro/:usuario_id', listarCarro);
rotas.get('/listar/usuario/:id', listarUsuario);

module.exports = rotas