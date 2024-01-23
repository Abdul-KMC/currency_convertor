const morgan = require('morgan');
const morganMiddleware = morgan('combined');


const unknownHandler = ((request, response, next) => {
    response.status(404).json({ error: 'unknown endpoint' });
});

module.exports = {
    morganMiddleware,
    unknownHandler
}