import dataBaseServices from '../services/dataBaseServices'
import { Router } from 'express'

const gamesController = {
  get router () {
    const router = Router()
    router.get('/', this.read)
    return router
  },

  read (req, res) {
    var games = dataBaseServices.getGames()
    games
      .then((data) => res.send(data))
      .catch((err) => {
        res.status(400).send({ error: `Games fetching failed :: ${err}` })
      })
  }
}
export default gamesController
