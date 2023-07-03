const express = require('express')
const morgan = require('morgan')
const handlebars = require('express_handlebars') //template engine
const app = express()
const port = 3000

app.use(morgan('combined'));

app.engine('handlebars', handlebars()); //dinh nghia
app.set('view engine', 'handlebars'); // xet view engine = handlebars

app.get('/', (req, res) => { // get('/trang chu') dinh nghia tuyen duong
    res.send("<h1>Hello World!</h1>");
})

//127.0.0.1 localhost
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})