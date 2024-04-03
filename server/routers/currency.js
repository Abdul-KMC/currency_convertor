const currencyRouter = require('express').Router()
    // const currencies = require('../models/currency');
const currencies = process.env.NODE_ENV === "test" ? require('../models/testCurrency') : require('../models/currency')

/**
 * TESTING Endpoint (Completed)
 * @receives a get request to the URL: http://localhost:3001/
 * @responds with the string 'Hello World!'
 */
currencyRouter.get('/', (request, response) => {
    response.send('Hello World!')
})

/**
 * TODO: GET Endpoint
 * @receives a get request to the URL: http://localhost:3001/api/currency/
 * @responds with returning the data as a JSON
 */
currencyRouter.get('/', async(request, response) => {
    try {
        const allCurrencies = await currencies.findAll();
        response.json(allCurrencies);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
})

/**
 * TODO: GET:id Endpoint
 * @receives a get request to the URL: http://localhost:3001/api/currency/:id
 * @responds with returning specific data as a JSON
 */
currencyRouter.get('/:id', async(request, response) => {
    try {
        const id = Number(request.params.id);
        const currency = await currencies.findByPk(id);

        if (!currency) throw new Error('Resource not found');

        response.json(currency);
    } catch (error) {
        response.status(404).json({ error: error.message });
    }
})

/**
 * TODO: POST Endpoint
 * @receives a post request to the URL: http://localhost:3001/api/currency,
 * with data object enclosed
 * @responds by returning the newly created resource
 */
currencyRouter.post('/', async(request, response) => {
    try {
        const { currencyCode, countryId, conversionRate } = request.body;

        if (!currencyCode || !countryId || conversionRate === undefined) {
            throw new Error('Content missing');
        }

        const newCurrency = await currencies.create({
            currencyCode,
            countryId,
            conversionRate,
        });

        response.status(201).json(newCurrency);
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
})

/**
 * TODO: PUT:id endpoint
 * @receives a put request to the URL: http://localhost:3001/api/currency/:id/:newRate
 * with data object enclosed
 * Hint: updates the currency with the new conversion rate
 * @responds by returning the newly updated resource
 */
currencyRouter.put('/:id/:newRate', async(request, response) => {
    try {
        const id = Number(request.params.id);
        const newRate = Number(request.params.newRate);

        if (isNaN(newRate)) {
            throw new Error('Invalid new rate');
        }

        const [updatedRowsCount, updatedCurrencies] = await currencies.update({ conversionRate: newRate }, { where: { id } });

        if (updatedRowsCount === 0) throw new Error('Resource not found');

        response.json(updatedCurrencies[0]);
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
})

/**
 * TODO: DELETE:id Endpoint
 * @receives a delete request to the URL: http://localhost:3001/api/currency/:id,
 * @responds by returning a status code of 204
 */
currencyRouter.delete('/:id', async(request, response) => {
    try {
        const id = Number(request.params.id);
        const deletedRowCount = await currencies.destroy({ where: { id } });

        if (deletedRowCount === 0) throw new Error('Resource not found');

        response.status(204).json({ success: "Content deleted successfully" });
    } catch (error) {
        response.status(404).json({ error: error.message });
    }
})

module.exports = currencyRouter