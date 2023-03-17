// // const pug = require('pug');

// // const compiledFunction = pug.compileFile('example.pug');

// // const renderedHtml = compiledFunction({
// //   pageTitle: 'My Pug Example',
// //   greeting: 'Hello, Pug!'
// // });

// // console.log(renderedHtml);

// const fs = require('fs');
// const pug = require('pug');

// // Compile the Pug template file into a function
// const compiledFunction = pug.compileFile('./example.pug');

// // Generate HTML code from the compiled function
// const html = compiledFunction();

// // Save the generated HTML code to a file named "output.html"
// fs.writeFileSync('output.html', html);


var express = require('express');
const pug = require('pug');
var app = express();
//set view engine
app.set("view engine", "pug")
app.get('/', function (req, res) {
  res.render('example');
});
var server = app.listen(5500, function () {
  console.log('Node server is running..');
});