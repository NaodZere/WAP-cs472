// Consider the following Node js Web Server.
const express = require('express');
const app = express();
app.post('/data', function (req, res) {
    res.send('Wiki data is posted')
})
app.get('/', function (req, res) {
    res.send('Wiki home');
});
app.get('/docs', function (req, res) {
    res.send('Documentation for this wiki');
});
var server = app.listen(6600, function () {
    console.log('Server is running..');

});
/* 
27. What will appear in the Browser Window in response to the URL http://localhost:5000/docs
*     Server is running..
*     Wiki home
*     Wiki data is posted
*     data::docs
*     Docmentation for this wiki
*/