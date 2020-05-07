const jwt = require('jsonwebtoken');

const controller = {
    login: (req, res) => {
        const { body: { username, password } } = req;
        console.log('DATA', req.body);
        if (username === 'matias' && password == '1234') {
            const payload = {
                check: true,
                hola: 'Mundo'
            };
            const token = jwt.sign(payload, 'HelloWorld*', {
                expiresIn: 1000,
            });
            return res.status(200).send({
                message: {
                    token,
                },
                status: 200,
            });
        } else {
            return res.status(500).send({
                message: 'Error en credenciales'
            });
        }
    },
};

module.exports = controller;