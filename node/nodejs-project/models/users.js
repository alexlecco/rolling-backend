// Vendors
const mongoose = require('mongoose');

// Define Schema
const userScheme = mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: '',
    },
    lastname: String,
    email: String
});

// Pasa Schema a model
const Users = mongoose.model('Users', userScheme);

module.exports = Users;