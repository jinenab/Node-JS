var express = require('express')
var todoController = require('./controllers/todoController')
var app = express()
    //template engine
app.set('view engine', 'ejs')
    //static files
app.use(express.static('./public/assets'))
    //fire controller
todoController(app)
    //listen a port
app.listen(3008)
console.log('you are listening to port 3008');