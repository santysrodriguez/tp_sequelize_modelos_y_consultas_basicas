const express = require('express');
const router = express.Router();
const genresController = require('../controllers/genresController');

router.get('/genres', genresController.list);
router.get('/genres/detail/:id', genresController.detail);

//Rutas exigidas para la creación del CRUD
router.get('/genres/add', genresController.add);
router.post('/genres/create', genresController.create);
router.get('/genres/edit/:id', genresController.edit);
router.post('/genres/update/:id', genresController.update);//idealmente va a put
router.get('/genres/delete/:id',genresController.delete);
router.post('/genres/delete/:id', genresController.destroy);//idealmente va a  delete


module.exports = router;