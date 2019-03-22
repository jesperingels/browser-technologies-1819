const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3030;

const db = {
    user: [{jesper:{k:1}}]
};

express()
    .set('view engine', 'ejs')
    .set('views', 'views')
    .use(express.static('public'))
    .use(bodyParser.urlencoded({extended: true}))
    .get('/', home)
    .post('/vraag2', quest1)
    .get('/vraag2', )
    .listen(PORT, console.log('listening on port: ' + PORT));

function home(req, res) {
    res.render('pages/index.ejs');
    console.log('served index.ejs from pages');
}

function quest1(req, res) {
    console.log(req);
    console.log(req.body);
    // let name = req.body.name;
    // let date = req.body.date;
    // let colour = req.body.colour;
    // db.user.push(name);

    for(let i = 0; i < db.user.length; i++) {
        let user = db.user[i];
    }

    res.send('<h1>form sent</h1>');
}

