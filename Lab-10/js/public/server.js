// server.js
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/calculator.html');
});

app.post('/calculate', (req, res) => {
  const operation = req.body.operation;
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);

  let result;
  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num1 / num2;
      break;
    default:
      result = 'Invalid operation';
  }

  res.send(`The total is: ${result}<br><a href="/">Do Another Calculation</a>`);

});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
