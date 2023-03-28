import { Router } from 'express'

import { formAnswerRoutes } from '@routes/formAnswerRoutes'
import { docsRouter } from '@routes/docsRouter'

const routes = Router()

routes.use('/answers', formAnswerRoutes)
routes.use('/api-docs', docsRouter)

routes.get('/', (req, res) => {
  res.redirect('/api-docs')
})


export { routes }