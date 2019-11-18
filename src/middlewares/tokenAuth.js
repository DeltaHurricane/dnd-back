import jwt from 'jsonwebtoken'
import { SECRET } from '../utils/secretKey'

function tokenAuth (req, res, next) {
  try {
    tokenExists(req, res)
    req.token = jwt.verify(req.token, SECRET)
    next()
  } catch (err) {
    res.status(401).send({ error: 'Invalid token' })
  }
}
export { tokenAuth }

function tokenExists (req, res) {
  const bearerHeader = req.headers.authorization
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]
    req.token = bearerToken
  } else {
    res.status(401).send({ error: 'No token provided' })
  }
}
