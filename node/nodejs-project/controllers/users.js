const jwt = require('jsonwebtoken');
const Users = require('../models/users');

const controller = {
    getUsers: (req, res) => {
        const headers = req.headers;
        const token = headers['access-token'];
        if (token) {
            jwt.verify(token, 'HelloWorld*', (error, success) => {
                if (error) {
                    return res.status(401).send({
                        message: 'El token no es válido.',
                        status: 401,
                    });
                } else {
                    Users.find().exec((error, users) => {
                        if (error) {
                            return res.status(500).send({
                                message: 'Error en el servidor',
                                status: 500,
                            })
                        }
                        return res.status(200).send({
                            message: users,
                            status: 200,
                        })
                    });
                }
            });
        } else {
            return res.status(401).send({
                message: 'No existe el token',
                status: 401,
            });
        }
    },
    getUser: (req, res) => {
        const userId = req.params.id;
        Users.findById(userId, (error, user) => {
            if (error) {
                return res.status(500).send({
                    message: 'Error en el servidor',
                    status: 500,
                })
            }
            res.status(200).send({
                message: user,
                status: 200,
            });
        });
    },
    saveUser: (req, res) => {
        const user = new Users();
        const {
            body: { name, lastname, email }
        } = req;
        user.name = name;
        user.lastname = lastname;
        user.email = email;
        user.save((error, userStored) => {
            if (error) {
                return res.status(500).send({
                    message: 'Error en el servidor',
                    status: 500,
                })
            }
            if (!userStored) {
                return res.status(404).send({
                    message: 'Página no encontrada',
                    status: 404,
                });
            }
            return res.status(200).send({
                message: user,
                status: 200
            });
        });
    },
    updateUser: (req, res) => {
        const userId = req.params.id;
        const body = req.body;
        Users.findByIdAndUpdate(userId, body, {new: true}, (error, userUpdated) => {
            if (error) {
                return res.status(500).send({
                    message: 'Error en el servidor',
                    status: 500,
                })
            }
            return res.status(200).send({
                message: userUpdated,
                status: 200,
            });
        });
    },
    removeUser: (req, res) => {
        const userId = req.params.id;
        Users.findByIdAndRemove(userId, (error, userRemoved) => {
            if (error) {
                return res.status(500).send({
                    message: 'Error en el servidor',
                    status: 500,
                })
            }
            return res.status(200).send({
                message: userRemoved,
                status: 200,
            });
        });
        res.status(200).send({
            message: 'RemoveUser',
            status: 200,
        });
    },
};

module.exports = controller;