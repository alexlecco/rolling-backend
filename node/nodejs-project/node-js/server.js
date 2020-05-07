const init = route => {
    const http = require('http');
    const url = require('url');
    const server = http.createServer();
    const port = 8080;

    // Me conecto a la base de datos 
    // Y recupero la información
    let r = [{
        "id": 1,
        "userName": "Hugo",
        "email": "hubravo@gmail.com",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis nisi a sapien laoreet eleifend. Mauris ex ligula, porttitor ac volutpat eu, finibus ac arcu. Maecenas euismod ante ac justo pulvinar, non volutpat ligula bibendum. Donec ipsum velit, auctor eget cursus et, convallis id nulla."
    }];

    r = r.map(user => {
        user.test = 'Pepito';
        return user;
    });

    const ctrl = (req, resp) => {
        const pathName = url.parse(req.url).pathname;
        console.log('Petición recibida');
        route(pathName);
        resp.writeHead(200, {'Content-Type': 'application/json'});
        resp.write(JSON.stringify(r));
        resp.end();
    };
    server.on('request', ctrl).listen(port);
    console.log('Servidor iniciado en puerto', port);
};

exports.init = init;
