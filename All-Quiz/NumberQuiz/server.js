const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const pug = require('pug');

const app = express();
const port = 3000;

// Database of quiz questions and answers
const quizData = [
  { sequence: [1, 4, 9, 16, 25], answer: 36 },
  { sequence: [2, 4, 8, 16, 32], answer: 64 },
  { sequence: [3, 1, 4, 1, 5], answer: 9 },
  { sequence: [1, 2, 3, 5, 8], answer: 13 },
  { sequence: [1, 3, 6, 10, 15], answer: 21 }
];

// Set up session middleware
app.use(session({
  secret: 'my-secret-key',
  resave: false,
  saveUninitialized: false
}));

// Set up body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Set up Pug template engine
app.set('views', './views');
app.set('view engine', 'pug');

// Serve the homepage
app.get('/', (req, res) => {
  // Initialize session variables
  req.session.quizNumber = 0;
  req.session.score = 0;

  res.render('index');
});

// Serve the quiz questions
app.get('/quiz', (req, res) => {
  const quizNumber = req.session.quizNumber;

  // Check if quiz is complete
  if (quizNumber >= quizData.length) {
    const score = req.session.score;
    res.render('result', { score });
    return;
  }

  // Get the current quiz question
  const currentQuestion = quizData[quizNumber];

  // Increment quiz number for next question
  req.session.quizNumber++;

  // Render the quiz question
  res.render('quiz', { question: currentQuestion });
});

// Process the user's answer to the current quiz question
app.post('/quiz', (req, res) => {
  const userAnswer = parseInt(req.body.answer);
  const quizNumber = req.session.quizNumber - 1;

  // Check if answer is correct
  const correctAnswer = quizData[quizNumber].answer;
  if (userAnswer === correctAnswer) {
    // Increment score
    req.session.score++;
  }

  // Redirect to the next quiz question
  res.redirect('/quiz');
});

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
