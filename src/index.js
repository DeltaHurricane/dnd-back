import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import fs from 'fs'

const app = express()
app.use(cors())
app.use(bodyParser.json())
const port = 5000

app.get('/games', function (req, res) {
  console.log(req.body)
  fs.readFile('./stubs/games.json', { encoding: 'utf-8' }, function (err, data) {
    if (!err) {
      res.send(data)
      res.end()
    } else {
      console.log(err)
    }
  })
})

app.post('/teste', function (req, res) {
  console.log(req.body)
  res.end()
})

app.listen(port, () => {
  console.log(`${port}`)
})
