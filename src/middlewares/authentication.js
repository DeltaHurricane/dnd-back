const auth = async (req, res, next) => {
  try {
    console.log('auth')
    next()
  } catch (err) {
    return res.status(401).send({ error: 'Authentication failed' })
  }
}

export default auth
