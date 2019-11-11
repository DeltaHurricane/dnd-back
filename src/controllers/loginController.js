import { User } from '../database/users'
import { Router } from 'express'
import bcrypt from 'bcrypt'
import { generateToken } from '../services/authServices'

const loginController = {
  get router () {
    const router = Router()
    router.post('/', this.read)
    router.get('/', this.create)
    return router
  },

  read (req, res) {
    User.findOne({ username: req.body.username })
      .select('username _id password')
      .then((user) => checkLogin(user, req.body))
      .then((username) => generateToken(username))
      .then((token) => res.send({ token }))
      .catch((err) => {
        console.log(err)
        res.status(400).send({ error: `Login Failed :: ${err}` })
      })
  },

  create (req, res) {
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    User.create(req.body)
      .then(() => res.send({ response: 'user created' }))
      .catch((err) => {
        console.log(err)
        res.send(err)
      })
  }
}

function checkLogin (user, received) {
  if (user.username === received.username) {
    if (bcrypt.compareSync(received.password, user.password)) {
      return user.username
    } else {
      throw new Error('Wrong Password')
    }
  } else {
    throw new Error('Username Not Found')
  }
}

export default loginController
