const Express = require('express');
const Products = require('./products');

const app = Express();
const port = 8010;

app.get('/products', (req, res) => {
    res.json(Products)
});

app.get('/products/:id', (req, res) => {
    res.json(Products.find(product => {
        return +req.params.id === product.id;
    }))
});

app.listen(port, () => console.log("Escuchando en puerto " + port));