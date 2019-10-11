const http = require('http')
const fs = require('fs')
let server = http.createServer(function(req, res) {
    console.log(200, { 'Content-Type': 'text/html' })
    let myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
    myReadStream.pipe(res)
})
server.listen(3008, '127.0.0.1')
console.log('yo yo yo port 3008')