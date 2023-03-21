const express = require("express");
const app = express();
const port = 3000;

// We can import this module using require(), and then call the exported method(s) as shown:
const square = require("./square"); // Here we require() the name of the file without the (optional) .js file extension
console.log(`The area of a square with a width of 4 is ${square.area(4)}`);


app.get("/", function (req, res) {
  res.send("Hello World Express FrameWork!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});


  
  