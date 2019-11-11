import jwt from 'jsonwebtoken'
import { SECRET } from '../utils/secretKey'

function generateToken (username) {
  return jwt.sign({ username }, SECRET, { algorithm: 'HS256', expiresIn: '1h' })
}

export { generateToken }
