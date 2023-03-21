//calculator.js

const calculateBtn = document.querySelector('#calculate');
const resultEl = document.querySelector('#result');

calculateBtn.addEventListener('click', () => {
  const operation = document.querySelector('#operation').value;
  const num1 = document.querySelector('#num1').value;
  const num2 = document.querySelector('#num2').value;

  fetch(`/calculate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `operation=${operation}&num1=${num1}&num2=${num2}`
  })
    .then(res => res.json())
    .then(data => resultEl.textContent = `Result: ${data.result}`)
    .catch(err => console.error(err));
});

