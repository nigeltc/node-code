var http = require("http");
http.createServer( function(req,res) {
    if ((req.url === "/") &&
        (req.method === "GET")) {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Hello, <strong>Home Page</strong>");
    } else if ((req.url === "/account") &&
        (req.method === "GET")) {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Hello, <strong>Account Page</strong>");
    } else {
        res.writeHead(400, {"Content-Type": "text/plain"});
        res.end();
    }
}).listen(process.env.PORT, process.env.IP);
console.log("Server running on port 8080");
