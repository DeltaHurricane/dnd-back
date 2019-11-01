import dataBaseServices from '../services/dataBaseServices'
import { Router } from 'express'

const gamesController = {
  get router () {
    const router = Router()
    router.post('/', this.read)
    return router
  },

  read (req, res) {
    var games = dataBaseServices.getGames()
    games
      .then((data) => getUserGames(data, req.body))
      .then((data) => res.send(data))
      .catch((err) => {
        res.status(400).send({ error: `Games fetching failed :: ${err}` })
      })
  }

}
export default gamesController

function getUserGames ({ games }, { username }) {
  const userGames = games.filter((game) => game.users.includes(username))
  return userGames
}
