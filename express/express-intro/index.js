const Express = require('express');
const Products = require('./products');

const app = Express();
const port = 3000;
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }))

function mid(req, res, next) {
    console.log(req.query);
    console.log(req.params);
    next();
}

app.get('/products', mid, (req, res) => {
    res.json(Products)
});

app.get('/products/:id', (req, res) => {
    res.json(Products.find(product => {
        return +req.params.id === product.id;
    }))
});

app.post('/add', (req, res) => {
    res.sendStatus(200)
})

app.listen(port, () => console.log("Escuchando en puerto " + port));