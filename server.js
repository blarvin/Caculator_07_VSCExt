const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(`Request for ${req.url} by method ${req.method}`);

    if (req.url === '/') {
        const filePath = path.join(__dirname, 'public', 'index.html');
        
        fs.readFile(filePath, (err, content) => {
            if (err) {
                console.error('Error reading index.html file:', err);
                res.writeHead(500);
                res.end('Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        });
    } else {
        let filePath = path.join(__dirname, 'public', req.url);
        let extname = String(path.extname(filePath)).toLowerCase();
        let contentType = 'text/html';
        
        switch (extname) {
            case '.js':
                contentType = 'application/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            case '.json':
                contentType = 'application/json';
                break;
            default:
                contentType = 'application/octet-stream';
        }

        fs.readFile(filePath, (err, content) => {
            if (err) {
                if(err.code == 'ENOENT') {
                    console.log(`File not found: ${filePath}`);
                    res.writeHead(404);
                    res.end('Page not found');
                } else {
                    console.error('Server Error:', err);
                    res.writeHead(500);
                    res.end('Server Error');
                }
                return;
            }
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        });
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});