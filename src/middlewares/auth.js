import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
  const bearerHeader = req.headers.authorization
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]
    req.token = jwt.decode(bearerToken)
    next()
  } else {
    res.sendStatus(403)
  }
}

export { auth }
