const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello')
});

//get henter, post opretter, put opdatere, delete sletter
app.get('/api/v1/users', (req, res) => {
   //exeption handler
    try {
        res.status(200).json({
            message: '*insert users*'
        });
    } catch(e){
        res.status(500).json({
            message: 'Dumme IT'
        });
    }

});

app.post('/api/v1/users', (req, res) => {
    res.status(201).json({
        data: req.body,
    });
});

app.delete('/api/v1/users/:userId', (req, res) => {
    console.log(req.params);
    res.sendStatus(204)
});

app.listen(port, () => console.log('app is running'));

