const {Router} = require('express');
const router = Router();
const {indexController, indexApodoController} = require('../controllers/indexController');

//Router para imprimir la Home
router.get('/', indexController);

//Router para guardar nuevo Apodo
router.post('/Apodo', indexApodoController);

module.exports = router;