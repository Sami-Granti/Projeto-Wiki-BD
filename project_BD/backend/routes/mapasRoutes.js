// routes/mapasRoutes.js
const express = require('express');
const router = express.Router();
const mapasController = require('../controllers/mapasController');

// Definindo as rotas
router.get('/', mapasController.buscarMapas); // GET /mapas
router.post('/', mapasController.adicionarMapa); // POST /mapas
router.put('/:nome', mapasController.editarMapa); // PUT /mapas/:nome
router.delete('/:nome', mapasController.deletarMapa); // DELETE /mapas/:nome

module.exports = router;