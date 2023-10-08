const express = require('express');
const filmsController = require('../controllers/filmsController');
const categoriesController = require('../controllers/categoriesController');

const router = express.Router();

router.get('/films', filmsController.getAllFilms);
router.get('/film/:id', filmsController.getFilmById);
router.get('/categories', categoriesController.getAllCategories);
router.get('/films/:category', filmsController.getFilmsByCategory);

module.exports = router;