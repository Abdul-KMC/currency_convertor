const currencyRouter = require('express').Router()
    // const currencies = require('../models/currency');

/**
 * DATA STORAGE
 * We're using a local variable 'currencies' to store our data: a list of currency objects
 * Each object represents a 'currency', and contains the following fields
 * id: a number, 
 * currencyCode: a string, three letters (see https://www.iban.com/currency-codes as reference)
 * country: a string, the name of the country
 * conversionRate: the amount, in that currency, required to equal 1 Canadian dollar
 */
let currencies = [{
        id: 1,
        currencyCode: "CDN",
        country: "Canada",
        conversionRate: 1
    },
    {
        id: 2,
        currencyCode: "USD",
        country: "United States of America",
        conversionRate: 0.75
    }
]

/**
 * TESTING Endpoint (Completed)
 * @receives a get request to the URL: http://localhost:3001/
 * @responds with the string 'Hello World!'
 */
// currencyRouter.get('/', (request, response) => {
//     response.send('Hello World!')
// })

/**
 * TODO: GET Endpoint
 * @receives a get request to the URL: http://localhost:3001/api/currency/
 * @responds with returning the data as a JSON
 */
currencyRouter.get('/', (request, response) => {
    response.json(currencies)
})

/**
 * TODO: GET:id Endpoint
 * @receives a get request to the URL: http://localhost:3001/api/currency/:id
 * @responds with returning specific data as a JSON
 */
currencyRouter.get('/:id', (request, response) => {
    const id = Number(request.params.id);
    const currency = currencies.find((x) => x.id === id);

    if (currency) {
        response.json(currency);
    } else {
        response.status(404).json({ error: 'resource not found' });
    }
})

/**
 * TODO: POST Endpoint
 * @receives a post request to the URL: http://localhost:3001/api/currency,
 * with data object enclosed
 * @responds by returning the newly created resource
 */
currencyRouter.post('/', (request, response) => {
    const { currencyCode, country, conversionRate } = request.body;

    if (!currencyCode || !country || conversionRate === undefined) {
        response.status(400).json({ error: 'content missing' });
        return;
    }

    const newCurrency = {
        id: currencies.length + 1,
        currencyCode,
        country,
        conversionRate,
    };

    currencies.push(newCurrency);
    response.status(201).json(newCurrency);
})

/**
 * TODO: PUT:id endpoint
 * @receives a put request to the URL: http://localhost:3001/api/currency/:id/:newRate
 * with data object enclosed
 * Hint: updates the currency with the new conversion rate
 * @responds by returning the newly updated resource
 */
currencyRouter.put('/:id/:newRate', (request, response) => {
    const id = Number(request.params.id);
    const newRate = Number(request.params.newRate);

    if (isNaN(newRate)) {
        response.status(400).json({ error: 'invalid new rate' });
        return;
    }

    const updatedCurrencies = currencies.map((x) => {
        if (x.id === id) {
            return {...x, conversionRate: newRate };
        }
        return x;
    });

    response.json(updatedCurrencies.find((x) => x.id === id));
})

/**
 * TODO: DELETE:id Endpoint
 * @receives a delete request to the URL: http://localhost:3001/api/currency/:id,
 * @responds by returning a status code of 204
 */
currencyRouter.delete('/:id', (request, response) => {
    const id = Number(request.params.id);

    const updatedCurrencies = currencies.filter((x) => x.id !== id);
    response.json(updatedCurrencies);
})

module.exports = currencyRouter