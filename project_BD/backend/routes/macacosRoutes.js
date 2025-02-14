// routes/macacosRoutes.js
const express = require('express');
const router = express.Router();
const macacosController = require('../controllers/macacosController');

// Verifique se você está chamando as funções corretamente
router.get('/', macacosController.buscarMacacos); // GET /macacos
router.post('/', macacosController.adicionarMacaco); // POST /macacos
router.put('/:nome', macacosController.editarMacaco); // PUT /macacos/:nome
router.delete('/:nome', macacosController.deletarMacaco); // DELETE /macacos/:nome

module.exports = router;
