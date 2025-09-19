const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    let filePath = "./index.html";                          // Standardseite

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("404 - Datei nicht gefunden");
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    });
});

server.listen(4200);
console.log("Server läuft unter http://localhost:4200/");



/*
http = require("http");

server = http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.end('Hallo auf lerneprogrammieren.de');
});

server.listen(8080);
console.log("Der Server läft unter folgender: http://localhost:8080/")

*/