const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./database')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(db.getProducts())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProduct(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const product = db.saveProduct({
        nome: req.body.name,
        preco: req.body.price
    })
    res.send(product) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const product = db.saveProduct({
        id: req.params.id,
        nome: req.body.name,
        preco: req.body.price
    })
    res.send(product)
})

app.delete('/produtos/:id', (req, res, next) => {
    const product = db.deleteProduct(req.params.id)
    res.send(product) 
})

app.listen(port, () => {
    console.log(`Servidor está executando na porta ${port}.`)
})