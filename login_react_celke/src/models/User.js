const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('users',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING
    },
    estadosBrasil:{

        type: Sequelize.STRING,
        allowNull: false,
    },
   
    zipCode:{

        type: Sequelize.STRING,
        allowNull: false,
    },
    checkBox:{

        type: Sequelize.STRING,
        allowNull: false,
    },
});

//Criar a tabela
User.sync();
//Verificar se há alguma diferença na tabela, realiza a alteração
User.sync({ force: true });

module.exports = User;