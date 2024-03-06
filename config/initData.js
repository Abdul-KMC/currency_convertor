const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

/**
 * Necessary imports to initialize database and create entries
 * Accomodate modifying either the testNote or Note table
 */
const Currencies = process.env.NODE_ENV === "test" ? require('../models/testCurrency') : require('../models/currency')

// Create Notes table
Currencies
    .sync()
    .then(() => {
        console.log(`Currency table created`)
        Currencies
            .bulkCreate([
                { currencyCode: 'CAD', countryId: 1, conversionRate: 1.0 },
                { currencyCode: 'USD', countryId: 2, conversionRate: 0.75 },
                { currencyCode: 'GBP', countryId: 3, conversionRate: 0.58 },
            ])
            .then(() => console.log('Currencies successfully added'))
            .catch((error) => console.log('Error initializing currencies: ', error))
    })
    .catch((error) => {
        console.log('Error creating notes table: ', error)
    })