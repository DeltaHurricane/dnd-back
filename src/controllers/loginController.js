import dataBaseServices from '../services/dataBaseServices'
import { Router } from 'express'

const loginController = {
  get router () {
    const router = Router()
    router.post('/', this.read)
    return router
  },

  read (req, res) {
    console.log(req.body)
    var users = dataBaseServices.getUsers()
    users
      .then((data) => checkLogin(data, req.body))
      .then((data) => res.send(JSON.stringify(data)))
      .catch((err) => {
        res.status(400).send({ error: `users fetching failed :: ${err}` })
      })
  }
}

function checkLogin ({ users }, recived) {
  const checkUser = users.filter((user) => user.username === recived.username)
  if (checkUser.length === 0) {
    // TODO ERROR TROW
    return 'fail username'
  } else {
    const checkPassword = checkUser.filter((user) => user.password === recived.password)
    if (checkPassword.length === 0) {
      // TODO ERROR TROW
      return 'fail password'
    } else {
      return 'ok'
    }
  }
}
export default loginController
