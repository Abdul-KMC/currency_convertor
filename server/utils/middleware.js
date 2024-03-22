const morgan = require('morgan');
const customFormat = ':method :url :status :res[content-length] - :response-time ms { "content": ":req[content]" }';
const morganMiddleware = morgan('combined');


const unknownHandler = ((request, response, next) => {
    response.status(404).json({ error: 'unknown endpoint' });
});

module.exports = {
    morganMiddleware,
    unknownHandler
}