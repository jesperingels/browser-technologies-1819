const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3030;

const db = {
    question1: {
        name: 0,
        date: 0,
        colour: 0
        },

    question2: {
        animal: 0,
        movie: 0,
        education:0
        },

    question3: {
        drink: 0,
        season: 0,
        age: 0
    }
};

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', home);
app.post('/vraag2', quest1);
app.post('/vraag3', quest2 );
app.post('/overview', overview);

app.listen(PORT, console.log(`listening on port: ${PORT}`));


function home(req, res) {
    res.render('pages/vraag1.ejs');
    console.log('served vraag1.ejs from pages');
}

function quest1(req, res) {
    console.log(req.body);

    db.question1.name = req.body.name;
    db.question1.date = req.body.date;
    db.question1.colour = req.body.colour;

    let url = new URL(`http://localhost:3000/vraag2?n=${req.body.name}`);

    console.log(url);

    res.render('pages/vraag2.ejs');
    console.log('served vraag2.ejs from pages');
}

function quest2(req, res) {
    console.log(req.body);

    db.question2.animal = req.body.animal;
    db.question2.movie = req.body.movie;
    db.question2.education = req.body.education;


    res.render('pages/vraag3.ejs');
    console.log('served vraag3.ejs from pages');
}

function overview(req, res) {

    db.question2.drink = req.body.drink;
    db.question2.season = req.body.season;
    db.question2.age = req.body.age;

    res.render('pages/overview.ejs', {
        name: db.question1.name,
        date: db.question1.date,
        colour: db.question1.colour,
        animal: db.question2.animal,
        movie: db.question2.movie,
        education: db.question2.education,
        drink: db.question2.drink,
        season: db.question2.season,
        age: db.question2.age
    })
}

