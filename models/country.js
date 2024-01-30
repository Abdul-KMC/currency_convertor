const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');


const Currencies = sequelize.define('Currencies', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Currencies;