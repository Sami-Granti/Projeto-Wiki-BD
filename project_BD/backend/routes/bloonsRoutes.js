// routes/bloonsRoutes.js
const express = require('express');
const router = express.Router();
const bloonsController = require('../controllers/bloonsController');

router.get('/', bloonsController.buscarBloons);
router.post('/', bloonsController.adicionarBloon);
router.put('/:nome', bloonsController.editarBloon);
router.delete('/:nome', bloonsController.deletarBloon);

module.exports = router;