const express = require('express')
var cors = require('cors')
const app = express()
const router = express.Router()
const path = require('path')
const weather = require('./routes/weather')(router)
const bodyParser = require('body-parser')

const port = 8080


// use cors
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Provide static directory for front end
app.use(express.static(`${__dirname}/client/dist/client/`))

// routes
app.use('/weather', weather)

// Connect server to Angular 2 Index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/dist/client/index.html`))
})

app.listen(port, () => console.log(`Listening on port ${port}!`))