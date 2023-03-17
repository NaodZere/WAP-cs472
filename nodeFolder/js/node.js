//Exercise N1

// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200,
//         { 'Content-Type': 'text/html' });
//     res.end('Hello World!');
// }).listen(8080);
// console.log(`run on port <a href="http://localhost:8080"> </a>`)


//when we use "path" it require the path module so that we can use any builted funcitions
// path.join([path1[, path2[, ...]]]): joins the given path segments together to form a single path.
// path.resolve([...paths]): resolves a sequence of paths or path segments into an absolute path.
// path.dirname(path): returns the directory name of a path.
// path.basename(path[, ext]): returns the last portion of a path, optionally stripping a given file extension.
// path.extname(path): returns the extension of the path, including the dot.
// path.normalize(path): normalizes the path, resolving . and .. segments and removing duplicate slashes.
// path.parse(path): returns an object containing the parsed path information (root, dir, base, name, ext).
// path.isAbsolute(path): determines whether the path is an absolute path.
// path.relative(from, to): returns the relative path from from to to.


// const path = require("path");
// const fullPath = path.join("myFolder", "mySubFolder", "myfile.txt");
// console.log(fullPath); // Outputs "myFolder/mySubFolder/myfile.txt"


//APPLY() methdo work like a call funcition and it found in all functions ex

// function greet(name, city) {
//     console.log(`Hello, ${name} from ${city}!`);
// }

// const person = {
//     name: 'Naod',
//     city: 'Oakland'
// };

// greet.apply(person, ['Naod', 'Fairfild']);





//   Query String
// The following code reads the values from the query
// string corresponding to the names year and month:
// var http = require('http');
// var url = require('url');
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     var q = url.parse(req.url, true).query;
//     var txt = q.year + " " + q.month;
//     res.end(txt);
// }).listen(8080);


// HTTP Header
// If the response from the HTTP server is supposed to
// be displayed as HTML, you should include an HTTP
// header with the correct content type:
// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type' : 'text/html' });
//             res.write('Hello World!');
//             res.end();
//         }).listen(8080); 


const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'images', 'TestFile.txt');//.. is a special directory name that refers to the parent directory in my case nodeFolder is the parent of js so i go out to the parent of js to find  the images then the TestFile.txt
//__dirname is refering to the current name which is node.js

if (!fs.existsSync(filePath)) {
  console.log('File not found!');
} else {
  fs.readFile(filePath, 'utf-8', function(err, data){
    if(err) throw err;
    console.log(data.toString());
  });
}


    
