import { Router } from 'express'
import gamesController from './controllers/gamesController'
import loginController from './controllers/loginController'
import { tokenAuth } from './middlewares/tokenAuth'
import { tokenExists } from './middlewares/tokenExists'

export function apiRouter () {
  const router = Router()
  router.use('/login', loginController.router)
  router.use(tokenExists)
  router.use(tokenAuth)
  router.use('/games', gamesController.router)
  return router
}
