const express = require('express');
const router = express.Router();
const Currency = require('../models/currency');
const Country = require('../models/country');

router.get('/', async(req, res) => {
    try {
        // Make a query on the currency model and include the country model
        const currencyCountryPairs = await Currency.findAll({
            include: [{ model: Country, attributes: ['name'] }],
            attributes: ['currencyCode'],
        });

        // Extract the relevant data and send the response
        const result = currencyCountryPairs.map((pair) => ({
            currencyCode: pair.currencyCode,
            countryName: pair.Country.name,
        }));

        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;