const express = require('express');
const app = express();

// Import the wiki router module
const wikiRouter = require('./wiki');

// Mount the wiki router at /wiki
app.use('/wiki', wikiRouter);

// Start the server
app.listen(2000, () => {
  console.log('Server listening on port 3000');
});
