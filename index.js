const express = require('express')
let app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());

const routes = require('./router')

app.use('/', routes)


app.listen(3000, () => console.log('Welcome in server buy domain sucessfull 3000'))


module.exports = app    