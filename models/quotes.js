const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
    return sequelize.define('Quotes',{
                ask:{
                    type: Sequelize.INTEGER,
                    allowNull:true
                },
                askSize:{
                    type: Sequelize.INTEGER,
                    allowNull:true
                },
                bid:{
                    type: Sequelize.INTEGER,
                    allowNull:true
                    },
                bidSize:{
                    type: Sequelize.INTEGER,
                    allowNull:true
                },
                bookValue:{
                    type: Sequelize.INTEGER,
                    allowNull:true
                },
                language:{
                    type: Sequelize.STRING,
                    allowNull:true
                },
                longName:{
                    type: Sequelize.STRING,
                    allowNull:true
                },
                market:{
                    type: Sequelize.STRING,
                    allowNull:true
                },
                marketCap:{
                    type: Sequelize.INTEGER,
                    allowNull:true
                },
 })
}

