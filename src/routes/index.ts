import { Router, Response } from 'express'

const routes = Router()

routes.use('/', (req, res: Response) => {
  return res.status(200).json({
    message: "Hello World"
  })
})

export {
  routes
}