"use strict"
//MODEL PASSA A ESTRUTURA DOS DADOS DA TABELA DO BANCO DE DADOS
const {Model} = require("sequelize") 
const clients = require("../controllers/clients")
const sequelize = require("../db/db")
module.exports = (sequelize, DataTypes) => {
    class clients extends Model{}


clients.init({
    nome_client: DataTypes.STRING(50),
    data_nascimento: DataTypes.STRING(10),
    cpf: DataTypes.BIGINT,
    telefone: DataTypes.STRING(11),
    endereco: DataTypes.STRING(100)
},
{
    sequelize,
    modelName: "clients", //NOME DA TABELA NO BANCO DE DADOS
    timestamps: false //OCULTA OS CAMPOS createdAT E updatedAT
});
return clients
}
