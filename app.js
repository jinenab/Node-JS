const http = require('http')
const fs = require('fs')
let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8')
let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')
myReadStream.pipe(myWriteStream)
    // myReadStream.on('data', function(chunk) {
    //         console.log('new chunk recived')
    //         myWriteStream.write(chunk)
    //     })
    // const hostname = '127.0.0.1';
    // const port = 3008;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });
// server.close()