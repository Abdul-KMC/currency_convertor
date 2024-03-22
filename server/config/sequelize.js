const { Sequelize } = require('sequelize');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') })

const sequelize = new Sequelize(process.env.DB_NAME, process.env.USER_NAME, process.env.PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

const makeConnection = async() => {
    try {
        await sequelize.authenticate();
        console.log(`Successfully connected to database ${process.env.DB_NAME}`)
    } catch (error) {
        console.log(`Error connecting to ${process.env.DB_NAME}`)
        console.log(error)
    }
}

makeConnection();

module.exports = sequelize;