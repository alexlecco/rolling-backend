// how we require modules
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("Dog is running...");
  setTimeout(function() {
    response.end()
  }, 5000);
  response.write("Dog is done.");
}).listen(8080);

console.log('Listen on port 8080...');