const express = require('express')
const bodyParser = require('body-parser')
const { errorFunction, getAllStudents, renderAllStudents, addNewStudent } = require('./controllers/controller-students')

const PORT = 1800
const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', renderAllStudents)
app.get('/api', getAllStudents)

app.post('/api', bodyParser.json(), addNewStudent)

app.get('*', errorFunction)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`) // eslint-disable-line no-console
})