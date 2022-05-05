const Sequelize = require("sequelize")
const sequelize = new Sequelize("academia", "root", "senac", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate()
.then(function() {
    console.log("CONEXÃO REALIZADA COM SUCESSO")
}).catch(function(){
    console.log("ERRO")
})

module.exports = sequelize;















