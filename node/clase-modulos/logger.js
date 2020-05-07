var url = 'http://myip.com/me';

function log(message) {
    // envio de request HTTP
    console.log(message)
}

//module.exports.log = log; // exportar como objeto
module.exports = log; // exportar como funcion
module.exports.endpoint = url;