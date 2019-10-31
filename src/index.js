import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { apiRouter } from './routes'
//  import auth from './middlewares/authentication'

const app = express()
app.use(cors())
app.use(bodyParser.json())
// app.use(auth)
app.use(apiRouter())

const port = 5000

app.listen(port, () => {
  console.log(`${port}`)
})
