import { Router, Response } from 'express'

import { formAnswerRoutes } from '@routes/formAnswerRoutes'

const routes = Router()

routes.use('/answers', formAnswerRoutes)

export { routes }