const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

//static file img/digital-clock.png
app.use(express.static(path.join(__dirname, "public")));

//HTTP logger
app.use(morgan('combined'));

//Template Engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs'); // xet view engine = handlebars
app.set('views', path.join(__dirname, 'resources/views'));
app.use(express.static('views'));

app.get('/', (req, res) => { // get('/trang chu') dinh nghia tuyen duong
    res.render('home');
})

app.get('/news', (req, res) => { // get('/trang chu') dinh nghia tuyen duong
  res.render('news');
})

//127.0.0.1 localhost
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})