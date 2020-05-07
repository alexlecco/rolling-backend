var http = require('http');//create a server object:

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); // http header
    res.write('<h1>Hello World with HTML!<h1>'); //write a response
    res.end(); //end the response
}).listen(3000, function(){
    console.log("server start at port 3000"); //the server object listens on port 3000
});