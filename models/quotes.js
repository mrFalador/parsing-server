'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quotes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Quotes.init({
    ask: DataTypes.INTEGER,
    askSize: DataTypes.INTEGER,
    bid: DataTypes.INTEGER,
    bidSize: DataTypes.INTEGER,
    bookValue: DataTypes.INTEGER,
    language: DataTypes.STRING,
    longName: DataTypes.STRING,
    market: DataTypes.INTEGER,
    marketCap: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Quotes',
  });
  return Quotes;
};