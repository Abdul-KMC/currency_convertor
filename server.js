const express = require('express') // We import the express application
const currencyRouter = require('./routers/currency')
const middleware = require('./utils/middleware')
const cors = require('cors') // Necessary for localhost
const app = express() // Creates an express application in app

/**
 * Initial application setup
 * We need to use cors so we can connect to a localhost later
 * We need express.json so we can receive requests with JSON data attached
 */
app.use(cors())
app.use(express.json())
app.use(middleware.morganMiddleware);

app.use('/api/currency', currencyRouter);

// Unknown endpoint
app.use(middleware.unknownHandler)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})