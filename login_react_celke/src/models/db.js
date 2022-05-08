const Sequelize = require('sequelize');

const sequelize = new Sequelize('meuBanco', 'postgres', '456ALVES', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()
.then(()=>{
    console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch((error)=>{
    console.log("Erro: Conexão com o banco de dados não realizada com sucesso!", error);
});

module.exports = sequelize;