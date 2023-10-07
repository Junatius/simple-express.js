const pool = require('../config/database');

const getAllFilms = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM film');
    return result.rows;
  } finally {
    client.release();
  }
};

const getFilmById = async (filmId) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM film WHERE film_id = $1', [filmId]);
      return result.rows;
  } finally {
      client.release();
  }
};

const getFilmsByCategory = async (category) => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      `
      SELECT * FROM film 
      JOIN film_category ON film_category.film_id = film.film_id 
      JOIN category ON category.category_id = film_category.category_id 
      WHERE category.name = $1
      `, [category]
    );

    return result.rows;
  } finally {
    client.release();
  }
}

module.exports = {
  getAllFilms,
  getFilmById,
  getFilmsByCategory
};