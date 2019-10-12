var express = require('express')
var app = express()
app.set('view engine', 'ejs')
app.use('/assets', express.static('assets'))
app.get('/', function(req, res) {
    res.render('index')
})
app.get('/contact', function(req, res) {

    res.render('contact', { qs: req.query })

})
app.get('/profile/:id', function(req, res) {
    var data = { age: 22, job: "developper", hobbies: ['sport', 'music'] }
    res.render('profile', { person: req.params.id, data })
})
app.listen(3008)