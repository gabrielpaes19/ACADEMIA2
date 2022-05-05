const res = require("express/lib/response")

const express = require("express")
const router = express.Router()

const clientController = require("../controllers/clients")

//MOSTRA ALUNO
router.get("/", (req, res, next) => {
    clientController.getAll(req, res)
    })
    
//CRIAR ALUNO
router.post("/", (req, res, next) => {
    clientController.create(req, res)
    })

//ATUALIZA ALUNO
router.patch("/:id", (req, res, next) => {
    clientController.update(req, res)
    })

router.delete("/:id", (req, res, next) => {
    clientController.delete(req, res)
    })
//MOSTRAR ALUNO ESPECIFICO
router.get("/:clientid", (req, res, next) => {
    const id = req.params.productId

    if (id === "especifico"){
        res.status(200).send({
            message: "ID ESPECIFICO"
        })
    }else{
        res.status(200).send({
            message: "CLIENT ESPECIFICO"
        })
    }
})

module.exports = router










