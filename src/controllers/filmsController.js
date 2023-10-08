const { json } = require('express');
const filmsModel = require('../models/filmsModel');

const getAllFilms = async (req, res) => {
  try {
    const films = await filmsModel.getAllFilms();
    res.json(films);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getFilmById = async (req, res) => {
  const filmId = req.params.id;

  try {
    const film = await filmsModel.getFilmById(filmId);

    if (film.length === 0) {
      return res.status(404).json({ error: 'Film Not Found'});
    }

    res.json(film);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getFilmsByCategory = async (req, res) => {
  const category = req.params.category;

  try {
    const films = await filmsModel.getFilmsByCategory(category);

    if (films.length === 0) {
      // Handle the case where the category doesn't exist
      return res.status(404).json({ error: 'Category not found' });
    }

    res.json(films);
  } catch (error) {
    console.error('Error getting films by category:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllFilms,
  getFilmById,
  getFilmsByCategory
};