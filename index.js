const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

app.get('/trang-chu', (req, res) => { // get('/trang chu') dinh nghia tuyen duong
  res.send('Hello World!')
})

//127.0.0.1 localhost
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})