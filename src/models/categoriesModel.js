const pool = require('../config/database');

const getAllCategories = async () => {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT category_id, name FROM category');
        return result.rows;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllCategories
}