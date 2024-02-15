// Import necessary modules and the Country model
const express = require('express');
const countryRouter = express.Router();
const Country = require('../models/country');

// GET Endpoint: Retrieve all records
countryRouter.get('/', async(request, response) => {
    try {
        const allCountries = await Country.findAll();
        response.json(allCountries);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
});

// POST Endpoint: Add a new record
countryRouter.post('/', async(request, response) => {
    try {
        const { name } = request.body;
        if (!name) {
            throw new Error('Content missing');
        }
        const newCountry = await Country.create({
            name,
        });
        response.status(201).json(newCountry);
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
});

// DELETE Endpoint: Remove one record
countryRouter.delete('/:id', async(request, response) => {
    try {
        const id = Number(request.params.id);
        const deletedRowCount = await Country.destroy({ where: { id } });
        if (deletedRowCount === 0) throw new Error('Resource not found');
        response.status(204).json({ success: "Content deleted successfully" });
    } catch (error) {
        response.status(404).json({ error: error.message });
    }
});

// Export the countryRouter
module.exports = countryRouter;