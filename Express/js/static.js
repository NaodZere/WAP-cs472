const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(__dirname + '/public', function(err) {
  if (err) {
    console.log(err);
  }
}));

// Start the server
app.listen(3300, () => {
  console.log('Server listening on port 3300');
});
