const express = require('express')

const app = require("liquid-express-views")(express());

const budget = require('./models/budget.js')

app.use((req, res, next) => {
    //  console.log('I run for all routes');
    next();
});
//

app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.get('/budget', (req, res) => {
    res.render('index', {
        budget: budget,
        
    })
})
app.post('/budget', (req, res) => {
    budget.push(req.body)
    
    console.log(req)
    res.redirect('budget')
})


app.get('/budget/:key', (req, res) => {

    res.render('show', {
        budget: budget[req.params.key]
    })

})
app.get('/new', (req, res) => {
    console.log('sreing call ')
    res.render('new')
})

app.get('/', (req, res) => {
    res.send('hello world')
})


app.listen(3000, () => {
    console.log('listening on port 3000')
})