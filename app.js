const http = require('http')
const fs = require('fs')
let server = http.createServer(function(req, res) {
    console.log('request was made ' + req.url)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    let myObj = {
        name: "jinen",
        age: 22
    }
    res.end(JSON.stringify(myObj))
})
server.listen(3008, '127.0.0.1')
console.log('yo yo yo port 3008')