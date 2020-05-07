// how we require modules
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("Hola soy un perro");
  response.end();  
}).listen(8080);

console.log('Escuchando al puerto 8080...');