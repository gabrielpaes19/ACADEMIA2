const express = require("express")
const app = express()
const bodyparser = require("body-parser")

const clientRoute = require("./Routes/clientRoute")

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json()); 

app.use("/clients", clientRoute)    

app.use((req, res, next) => {
    const erro = new Error("ROTA NÃO ENCONTRADA")
    erro.status = 404
    next(erro)
})

app.use((error, req, res, next) =>{
    res.status(error.status || 500)
    return res.send({
        erro: {
            message: error.message
        }
    })
})


module.exports = app;
















