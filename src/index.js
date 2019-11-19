import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { apiRouter } from './routes'
import socket from 'socket.io'

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(apiRouter())

const port = 5000

const server = app.listen(port, () => {
  console.log(`${port}`)
})

var io = socket(server)

io.on('connection', (socket) => {
  console.log('made connection')
  setTimeout(() => io.emit('FromAPI', 'bobo'), 3000)
})
