const { Sequelize } = require("sequelize")
const sequelize = require("../db/db")
const Clients = require("../Models/clients")


module.exports = {
    async getAll(req, res) {
        const sequelize = new Sequelize("academia", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        const clients = await Clients(sequelize, Sequelize.DataTypes).findAll()
        //findAll = "SELECT * FROM"  do MYSQL
        res.status(200).send(clients)
    },
    
    async create(req, res) {
    const sequelize = new Sequelize("academia", "root", "senac", {
        host: "localhost",
        dialect: "mysql"
    });
    
    await clients(sequelize, Sequelize.DataTypes).create(
        {
            nome_client: req.body.nome_client,
            data_nascimento: req.body.data_nascimento,
            cpf: req.body.cpf,
            telefone: req.body.telefone,
            endereco: req.body.endereco
        }
    )
    res.status(200).send({
        message: "ALUNO CADASTRADO COM SUCESSO"
    })
},
    
    async update(req, res) {
        const sequelize = new Sequelize("academia", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
    await Clients(sequelize, Sequelize.DataTypes).update(
        {
            nome_client: req.body.nome_client,
            data_nascimento: req.body.data_nascimento,
            cpf: req.body.cpf,
            telefone: req.body.telefone,
            endereco: req.body.endereco
        },
        {
            where: { ID: req.params.id}
        }
    );
    res.status(200).send("ALUNO ATUALIZADO COM SUCESSO")
},
async delete(req, res) {
    const sequelize = new Sequelize("academia", "root", "senac", {
        host: "localhost",
        dialect: "mysql"
    });
await Clients(sequelize, Sequelize.DataTypes).destroy(
{
    where: { id: req.params.id}
}
)  
res.status(200).send("ALUNO DELETADO COM SUCESSO")
}   
}















