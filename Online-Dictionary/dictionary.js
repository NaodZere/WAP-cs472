var express = require("express");
var word = require('./word');
const path = require("path");
var mysql = require('mysql');

var app = express();

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "dict.html"));
})

app.post('/lookup',express.urlencoded(), function (req, res) {


    var con = mysql.createConnection({
        host: "localhost",
        user: "entries",
        password: "Test@123",
        database: "entries"
    });
    
    var w = req.body.word;
    word.searchWord(con, w, function(err, result){
        res.send(result);
    });
});

app.listen(4000, function () {
 console.log(`Server is running on port <a href="http://localhost:4000">localhost:4000</a>`);

});