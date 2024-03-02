const express = require('express') // We import the express application
require('dotenv').config();
const currencyRouter = require('./routers/currency')
const countryRouter = require('./routers/country')
const currencyCountryRoute = require('./routers/currencyCountry')
const middleware = require('./utils/middleware')
const sequelize = require('./config/sequelize')
const cors = require('cors');
const { Model } = require('sequelize');
const app = express()
    /**
     * Initial application setup
     * We need to use cors so we can connect to a localhost later
     * We need express.json so we can receive requests with JSON data attached
     */
app.use(cors())
app.use(express.json())
app.use(middleware.morganMiddleware);
app.use('/api/currency', currencyRouter);
app.use('/api/country', countryRouter);
app.use('/api/currency-countryName', currencyCountryRoute);

// Unknown endpoint
app.use(middleware.unknownHandler)

const PORT = 3001
try {
    sequelize.sync().then(() => {
        console.log("Connected to DB");
        app.listen(PORT, () => { // const server = app.listen()
            console.log(`Server running on port: ${PORT}`);
        });
    });
} catch (error) {
    console.error(error);
}

// module.exports = server;