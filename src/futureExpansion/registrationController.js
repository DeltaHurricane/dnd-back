import express from 'express'
import fs from 'fs'

const router = express.Router()

router.post('', function (req, res) {
  console.log(req.body)
  fs.readFile('./stubs/teste.json', { encoding: 'utf-8' }, function (err, data) {
    if (!err) {
      const gameTable = JSON.parse(data)
      gameTable.games.push((req.body))
      fs.writeFile('./stubs/teste.json', JSON.stringify(gameTable), 'utf8', () => res.sendStatus(201).end())
    } else {
      console.log(err)
      res.end()
    }
  })
})

export default router
