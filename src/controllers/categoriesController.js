const { json } = require('express');
const categoriesModel = require('../models/categoriesModel');

const getAllCategories = async (req, res) => {
    try {
        const categories = await categoriesModel.getAllCategories();
        res.json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error'});
    }
};

module.exports = {
    getAllCategories
};