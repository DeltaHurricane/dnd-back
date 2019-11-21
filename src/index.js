import express from 'express'
import cors from 'cors'
import socket from 'socket.io'
import bodyParser from 'body-parser'
import { apiRouter } from './routes'
import { socketInit } from './services/socketServices'

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(apiRouter())

const port = 5000

const server = app.listen(port, () => {
  console.log(`${port}`)
})

const io = socket(server)

socketInit(io)
