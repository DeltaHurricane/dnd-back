import { Router } from 'express'
import gamesController from './controllers/gamesController'
import loginController from './controllers/loginController'
import { tokenAuth } from './middlewares/tokenAuth'

export function apiRouter () {
  const router = Router()
  router.use('/login', loginController.router)
  router.use(tokenAuth)
  router.use('/games', gamesController.router)
  return router
}
