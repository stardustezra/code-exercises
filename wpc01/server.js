const http = require('http');

const server = http.createServer ((req, res) => {
    res.end ('Hello Mars!');
});

server.listen(3000);