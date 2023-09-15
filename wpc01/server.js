const http = require('http');

const server = http.createServer ((req, res) => {
    res.end ('Bye world');
});

server.listen(3000);