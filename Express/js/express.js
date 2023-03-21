const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (url === '/') {
    // Handle requests to the root URL
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Website</title></head>');
    res.write('<body><h1>Welcome to my website!</h1></body>');
    res.write('</html>');
    res.end();
  } else if (url === '/message' && method === 'POST') {
    // Handle POST requests to the /message URL
    const body = [];

    req.on('data', chunk => body.push(chunk));

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      
      fs.writeFile('message.txt', message, err => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.end('Error writing message to file');
        } else {
          console.log(`Message saved to file: ${message}`);
          res.statusCode = 302;
          res.setHeader('Location', '/');
          res.end();
        }
      });
    });
  } else {
    // Handle all other requests
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>404 Page Not Found</title></head>');
    res.write('<body><h1>Page not found</h1></body>');
    res.write('</html>');
    res.end();
  }
});

server.listen(3000, () => console.log('Server listening on port 3000'));
