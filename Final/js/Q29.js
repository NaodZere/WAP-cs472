// / 29. Consider aweb siteMultiply whose opening page contains to text boxes and asubmit buton. The User enters anumberintocach text box and then clicks thesubmit buton. Anew page then appears ni hte Browser window
// // with the product of the two numbers. A node.js Web Server to implement this Multiply web site is as follows:
const express = require("express");
const app = express();

app.use(express.urlencoded({ "extended": false }));

app.get("/", (req, res) => {
  res.send(`<form action='http://localhost:3000/multiply' method='POST'>
              <input text name= 'num1'>
              <input text name= 'num2'>
              <input type='submit' value= 'Multiply Numbers'>
            </form>`);
});

app.post("/multiply", (req, res) => {
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  const product = num1 * num2;
  res.send(`The product of ${num1} and ${num2} is ${product}`);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

// * insert another route here to compute product and send HIM to Browser */ 
// Your job is tocomplete this Web Server by inserting another route as indicated in the comment. Writeyour answer on the answer sheet.

