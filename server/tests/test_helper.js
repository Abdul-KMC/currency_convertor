/**
 * Provide the path to your test currency model, this model will be exactly the same as your Currency model, except...
 * It will not require the connection to Country.
 */
const Currency = require('../models/testCurrency') // Path to your TEST currency


/**
 * We need to initialize our test tables, so we will write variables to store our initial database state,
 * as well as some helper functions that can be used in our tests!
 */

const initialCurrencies = [{
        id: 1,
        currencyCode: 'CDN',
        conversionRate: 1
    },
    {
        id: 2,
        currencyCode: 'USD',
        conversionRate: 0.75
    }
]

// Returns all currencies from the DB table
const currenciesInDb = async() => {
    const testCurrencies = await Currency.findAll({})
    return testCurrencies.map(currency => currency.toJSON())
}

// Initialize table
const init = async() => {
    try {
        await Currency.sync()
        console.log("init sucess ")
    } catch {
        console.log("error init");
    }

};

// Perform a bulk write
const load = async() => {
    try {
        await Currency.bulkCreate(initialCurrencies)
        console.log("load success");
    } catch {
        console.log("error in load");
    }

}


// Clears all test tables in the database
const clearData = async() => {
    try {
        await Currency.destroy({
            where: {},
            truncate: true
        })
        console.log("clearData success");
    } catch {
        console.log("error in clearData");
    }

}

module.exports = {
    initialCurrencies,
    currenciesInDb,
    init,
    load,
    clearData
}