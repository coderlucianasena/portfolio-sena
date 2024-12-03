const express = require('express');
const router = express.Router();
const modelController = require('../controllers/modelController');

router.get('/', modelController.getAllModels);
router.post('/', modelController.createModel);

// Adicione outras rotas conforme necessário

module.exports = router;