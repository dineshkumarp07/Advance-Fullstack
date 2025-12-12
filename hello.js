const http = require('http');   
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if (req.url === '/') {
        res.end('Hello, World!\n');
    } else if (req.url === '/about') {
        res.end('About Us\n');
    } else {
        res.statusCode = 404;
        res.end('404 Not Found\n');
    }
});

server.listen(3000, () => {
    console.log('Server running at sucessfully');
});