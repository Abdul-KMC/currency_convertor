const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const testCurrency = sequelize.define('testCurrency', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    currencyCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    conversionRate: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
}, {
    sequelize,
    underscored: false,
    timestamps: false,
});

module.exports = testCurrency;