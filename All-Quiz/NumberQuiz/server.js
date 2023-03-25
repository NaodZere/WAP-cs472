// server.js

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

  res.render('quiz', { quizNumber: req.session.quizNumber, question: quizData[0] });
});

// Serve the quiz questions
app.get('/quiz', (req, res) => {
  const quizNumber = req.session.quizNumber;

  // Check if quiz is complete
  if (quizNumber > quizData.length) {
    const score = req.session.score;
    res.render('quiz', { score: score, numQuestions: quizData.length });
    return;
  }

  // Get the current quiz question
  const currentQuestion = quizData[quizNumber];

  // Increment quiz number for next question
  req.session.quizNumber++;

  // Render the quiz question
  res.render('quiz', { quizNumber: quizNumber, question: currentQuestion });
});

// Process the user's answer to the current quiz question
app.post('/quiz', (req, res) => {
  const userAnswer = parseInt(req.body.answer);
  const quizNumber = parseInt(req.body.quizNumber);
  const score = parseInt(req.body.score);

  // Check if answer is correct
  const correctAnswer = quizData[quizNumber].answer;
  if (userAnswer === correctAnswer) {
    // Increment score
    score++;
  }

  // Redirect to the next quiz question
  if (quizNumber < quizData.length - 1) {
    res.redirect(`/quiz?quizNumber=${quizNumber+1}&score=${score}`);
  } else {
    res.redirect(`/result`);
  }
});

// Serve the quiz results
app.get('/result', (req, res) => {
  const score = req.session.score;
  const numQuestions = quizData.length;
  const percentage = Math.round((score / numQuestions) * 100);

  res.render('result', { score: score, numQuestions: numQuestions, percentage: percentage });
});

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});



