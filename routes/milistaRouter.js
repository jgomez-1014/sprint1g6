const {Router} = require('express');
const router = Router();
const { milistaController, /* selApodo, */ borrarlista} = require('../controllers/listaController');

//Router para imprimir la lista
router.get('/', milistaController);

//Router para Borrar cancion

router.post('/borrar', borrarlista);

module.exports = router;