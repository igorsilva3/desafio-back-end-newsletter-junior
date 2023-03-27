import { Router } from 'express'

import { FormAnswerController  } from '@controllers/FormAnswerController'

const formAnswerRoutes = Router()
const formAnswerController = new FormAnswerController()

formAnswerRoutes.post('/', formAnswerController.create)
formAnswerRoutes.get('/', formAnswerController.index)

export { 
  formAnswerRoutes
}