const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
    return sequelize.define('News', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull:true
    },
    guid:{
        type: Sequelize.STRING,
        allowNull:true
    },
    link:{
        type: Sequelize.STRING,
        allowNull:true        
    },
    pubDate:{
        type: Sequelize.STRING,
        allowNull:true       
    },
    title:{
        type: Sequelize.STRING,
        allowNull:true
    }
})
};


