const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3030;

const db = {
    res: [{
           question1: {
               name: 0,
               date: 0,
               colour: 0
           },

           question2: {
               animal: 0,
               movie: 0,
               education: 0
           },

           question3: {
               drink: 0,
               season: 0,
               age: 0
           }

    }
]

};

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', home);
app.post('/vraag2', quest1);
app.post('/vraag3', quest2 );
app.post('/data', data);
app.get('/overview', overview);

app.listen(PORT, console.log(`listening on port: ${PORT}`));


function home(req, res) {
    res.render('pages/vraag1.ejs');
    console.log('served vraag1.ejs from pages');
}

function quest1(req, res) {
    console.log(req.body);

    fs.readFile('public/db/db.txt', 'utf8', function readFileCallback(err, db){
        if (err){
            console.log(err);
        } else {
            const obj = JSON.parse(db); //now it an object
            const data = {
                question1: {
                    name: req.body.name,
                    date: req.body.date,
                    colour: req.body.colour
                }
            };
            obj.res.push(data);
            const json = JSON.stringify(obj); //convert it back to json
            fs.writeFile('public/db/db.txt', json, 'utf8', function (err) {
                if (err) console.log(err);
                console.log("Successfully Written to File.");
            }); // write it back
        }});


    res.render('pages/vraag2.ejs');
    console.log('served vraag2.ejs from pages');
}

function quest2(req, res) {
    console.log(req.body);

    fs.readFile('public/db/db.txt', 'utf8', function readFileCallback(err, db){
        if (err){
            console.log(err);
        } else {
            const obj = JSON.parse(db); //now it an object
            const data = {
                question2: {
                    animal: req.body.animal,
                    movie: req.body.movie,
                    education: req.body.education
                }
            };
            obj.res.push(data);
            const json = JSON.stringify(obj); //convert it back to json

            fs.writeFile('public/db/db.txt', json, 'utf8', function (err) {
                if (err) console.log(err);
                console.log("Successfully Written to File.");
            }); // write it back
        }});

    res.render('pages/vraag3.ejs');
    console.log('served vraag3.ejs from pages');
}

function data(req,res) {
    fs.readFile('public/db/db.txt', 'utf8', function readFileCallback(err, db){
        if (err){
            console.log(err);
        } else {
            const obj = JSON.parse(db); //now it an object
            const data = {
                question3: {
                    drink: req.body.drink,
                    season: req.body.season,
                    age: req.body.age
                }
            };
            obj.res.push(data);
            const json = JSON.stringify(obj); //convert it back to json

            fs.writeFile('public/db/db.txt', json, 'utf8', function (err) {
                if (err) console.log(err);
                console.log("Successfully Written to File.");
            }); // write it back
        }});
    res.render('pages/sent.ejs');
}

function overview(req, res) {

    fs.readFile('public/db/db.txt', 'utf8', function (err, db) {
        const obj = JSON.parse(db);

        // for(let i = 0; i < obj.res.length; i++) {
        //         //     console.log(obj.res[i].question1.name);
        //         // }

        console.log(obj.res[1]);
         // console.log(obj.res[0].question1.name);

        res.render('pages/overview.ejs', {
            data: obj.res
         })

    });
}

