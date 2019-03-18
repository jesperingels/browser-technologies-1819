const express = require('express');
const bodyParser = require('body-parser');
// const app = express();
const PORT = 3030;

express()
    .set('view engine', 'ejs')
    .set('views', 'views')
    .use(express.static('public'))
    .use(bodyParser.urlencoded({extended: true}))
    .get('/', home)
    .post('/', form)
    .listen(PORT, console.log('listening on port: ' + PORT));

function home(req, res) {
    res.render('pages/index.ejs');
    console.log('served index.ejs from pages')
}

function form(req, res) {
    console.log(req.body);
    res.send('<h1>form sent</h1>')
}


// app.set('view engine', 'ejs');
//
// app.use(express.static('public'));
// app.use(express.bodyParser());
//
// app.get('/', function (req, res) {
//     res.render('pages/index');
// });
//
// app.post('/data', function (req, res) {
//     console.log(req.body);
// });
//
// app.listen(port, () => console.log(`App listening on port ${port}!`));