var http = require('http');
var dt = require('./myModule');


http.createServer(function (req, res) {
    res.writeHead(200,
        { 'Content-Type': 'text/html' });
    res.write("The date and time arecurrently: " + dt.myDate());
res.end();
}).listen(8082);
console.log(`Running on port <a href="http://localhost:8082"></a>`);

