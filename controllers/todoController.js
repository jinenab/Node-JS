var bodyParser = require('body-parser')
var data = [{ item: 'get milk' }, { item: 'walk dog' }, { item: 'kick some coding courses' }, ]

var urlencodedParser = bodyParser.urlencoded({ extended: false })
module.exports = function(app) {
    //app.use('/assets', express.static('assets'))

    app.get('/todo', function(req, res) {
        res.render('todo', { todos: data })
    })
    app.post('/todo', urlencodedParser, function(req, res) {
        data.push(req.body)
        console.log(data)
        res.render('todo', { todos: data })

    })
    app.delete('/todo', function(req, res) {

    })

}