const express = require('express');
const router = express.Router();
const ContadorController = require('./controllers/contadorController');

router.get('/', (req, res) => {
    res.json({ message: 'API de Controle de Contador' });
});

router.post('/contador/aumentar', ContadorController.aumentar); // Rota para aumentar o contador
router.post('/contador/diminuir', ContadorController.diminuir); // Rota para diminuir o contador
router.post('/contador/desfazer', ContadorController.desfazer); // Rota para desfazer a última ação
router.get('/contador', ContadorController.obterValor); // Rota para obter o valor atual do contador

module.exports = router;