import { Game } from '../database/games'
import { Character } from '../database/character'
import { Router } from 'express'

const gamesController = {
  get router () {
    const router = Router()
    router.get('/:user', this.read)
    router.get('/:user/:id', this.fullGameInfo)
    router.post('/', this.create)
    router.post('/:id', this.update)
    return router
  },

  fullGameInfo (req, res) {
    Game.findOne({ _id: req.params.id })
      .then((data) => res.send(data))
      .catch((err) => {
        res.status(400).send({ error: `Games fetching failed :: ${err}` })
      })
  },

  read (req, res) {
    Game.find({ username: req.params.user })
      .select('name _id')
      .then((data) => res.send(data))
      .catch((err) => {
        res.status(400).send({ error: `Games fetching failed :: ${err}` })
      })
  },

  update (req, res) {
    const query = {
      $and: [
        { _id: req.params.id }
      ]
    }
    Game.findOne(query, (err, doc) => {
      if (err) {
        res.send(err)
      } else {
        doc.characters = doc.characters.filter((char) => char.username !== req.body.username)
        Character.create(req.body)
          .then((newChar) => {
            doc.characters.push(newChar)
            doc.save()
            res.send({ response: 'character created' })
          })
          .catch((err) => {
            console.log(err)
            res.send(err)
          })
      }
    })
  },

  create (req, res) {
    Game.create(req.body)
      .then(() => res.send({ response: 'game created' }))
      .catch((err) => {
        console.log(err)
        res.send(err)
      })
  }
}

export default gamesController
