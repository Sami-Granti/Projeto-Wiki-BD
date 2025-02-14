// routes/contaRoutes.js
const express = require('express');
const router = express.Router();
const contaController = require('../controllers/contaController');

router.get('/', contaController.buscarContas); // GET /conta
router.post('/', contaController.adicionarConta); // POST /conta
router.put('/:nome_usuario', contaController.editarConta); // PUT /conta/:nome_usuario
router.delete('/:nome_usuario', contaController.deletarConta); // DELETE /conta/:nome_usuario

module.exports = router;    