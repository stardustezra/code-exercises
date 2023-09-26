const express = require('express');

const app = express();

app.use(express.json());

app.get('/', function(req, res) {
    res.send('Hello darkness my old friend');

});

app.post('/test', function(req, res) {
    console.log(req.body);
    res.send('Hi!');

}); //get henter data, post sender data til en server

app.listen(3000);