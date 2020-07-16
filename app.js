const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.engine( 'hbs', hbs( {
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('The web server has started on port localhost:'+port);
});