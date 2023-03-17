// Yes, that's correct. One of the main uses of the router instance is to define routes for a specific part of your application and then export it as a module using module.exports = router;. This allows other files to import and use this router module in their own Express applications.

// By organizing routes into separate router modules, you can create a more modular and maintainable codebase. This approach makes it easier to add or modify routes without having to modify the main Express application

// wiki.js - Wiki route module

const express = require("express");
const router = express.Router();

// Home page route
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

// About page route
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

module.exports = router;
