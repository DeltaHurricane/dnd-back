import jwt from 'jsonwebtoken'
import { SECRET } from '../utils/secretKey'

function tokenValid (req, res, next) {
  try {
    req.token = jwt.verify(req.token, SECRET)
    next()
  } catch (err) {
    res.status(401).send({ error: 'Invalid token' })
  }
}
export { tokenValid }
