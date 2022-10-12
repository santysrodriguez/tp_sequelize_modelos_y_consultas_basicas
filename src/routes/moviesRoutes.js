const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const moviesValidator = require('../validations/moviesValidator')

router.get('/movies', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recommended);
router.get('/movies/detail/:id', moviesController.detail);

//Rutas exigidas para la creación del CRUD
router.get('/movies/add', moviesController.add);
router.post('/movies/create', moviesValidator,moviesController.create);
router.get('/movies/edit/:id', moviesController.edit);
router.post('/movies/update/:id', moviesController.update);//idealmente va a put
router.get('/movies/delete/:id', moviesController.delete);
router.post('/movies/delete/:id', moviesController.destroy);//idealmente va a  delete


module.exports = router;