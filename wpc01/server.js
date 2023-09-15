const http = require('http');

const server = http.createServer ((req, res) => {
    res.end ('Bye, cruel world');
});

server.listen(3000);