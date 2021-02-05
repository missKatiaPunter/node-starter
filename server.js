var express = require('express');
var app = express();
const dba = require("./rundbbuilt.js");
const query = require("./dbqueries.js");
let db = dba.connect();
//var cors = require('cors'); //some thing


app.get('/', function(req, res) {
    res.sendFile("index.html", { root: __dirname })
});

app.get('/api/users', function(req, res) {
    // res.send("Here shall be users!");
    query.getUsers(db, req, res);
    console.log(req, res);
});

app.listen(3000, function () {
    dba.init(db);
    console.log('Server is listening on port 3000. Ready to accept requests!');
});