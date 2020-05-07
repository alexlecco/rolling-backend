const mongoose = require('mongoose');
const myApp = require('./myApp');

const port = 3001;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/test_com_8_3')
    .then(() => {
        console.log('Connected successfully ...');
        myApp.listen(port, () => {
            console.log(`Server running on http://localhost:${port}...`);
        });
    })

    .catch(error => console.log(error));