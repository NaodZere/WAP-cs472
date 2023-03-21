// Consider the following Node.js Web Server.
const express = require('express');
const app = express();

app.use(function (request, response, next) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    next();
});
app.get('/', function (request, response){ 
 response.end('Welcome to the homepage!');
});
app.get('/about', function (request, response){ 
 response.end('Welcome to the about page!');
});
app.use(function (request, response) {
    response.statusCode = 404;
response.end('Page not found 404 Error');
});
var server = app.listen(8000, function (){
console.log('Server is running..');
});

// For each of the following URLs entered in the Browser, which message will appear in the Browser window:
// 23. URL: http://localhost:5000/
// ﻿﻿﻿﻿Welcome to the homepage!
// ﻿﻿﻿﻿Welcome to the about page!
// ﻿﻿﻿﻿Page not found: 404 Error
// ﻿﻿﻿﻿Server is running.
// 24. URL: http://localhost:5000/about
// ﻿﻿﻿﻿Welcome to the homepage!
// ﻿﻿﻿﻿Welcome to the about page!
// ﻿﻿﻿﻿Page not found: 404 Error
// ﻿﻿﻿﻿Server is running..
// 25. URL: http://localhost:5000/trees
// ﻿﻿﻿﻿Welcome to the homepage!
// ﻿﻿﻿﻿Welcome to the about page!
// ﻿﻿﻿﻿Page not found: 404 Error
// ﻿﻿﻿﻿Server is running..
// 26. URL: http://localhost:5000/about_trees
// ﻿﻿﻿﻿Welcome to the homepage!
// ﻿﻿﻿﻿Welcome to the about page!
// ﻿﻿﻿﻿Page not found:
// 404 Error
// (d) Server is running..

function add(a ,b ){
    return a * b;
}
console.log(add(2 ,2, 3,4));