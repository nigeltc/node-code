var http = require("http");
var colors = require("colors");

console.log("Hello, World!".green);
http.createServer( function(req,res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello, World!\n");
}).listen(process.env.PORT, process.env.IP);
console.log("Server running on port 8080");
