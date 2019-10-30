import { Router } from 'express'
import gamesController from './controllers/gamesController'

export function apiRouter () {
  const router = Router()
  router.use('/games', gamesController.router)
  return router
}
