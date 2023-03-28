import { Request, Response } from 'express'

import { CreateFormAnswerService } from '@services/FormAnswerService/CreateFormAnswerService'
import { GetFormAnswerService } from '@services/FormAnswerService/GetFormAnswerService'

import { formAnswerSchema } from './validations/FormAnswerSchema'

const createFormAnswerService = new CreateFormAnswerService()
const getFormAnswerService = new GetFormAnswerService()

export class FormAnswerController {
  async create(req: Request, res: Response) {
    try {
      const { name, email, cpf, phone  } = req.body

      const data = {
        name,
        email,
        cpf,
        phone
      }

      /* Validating the data. */
      formAnswerSchema.parse(data)

      const formAnswer = await createFormAnswerService.execute({
        data
      })

      res.status(201).json({
        id: formAnswer.id
      })
    } catch (error: any) {
      if (error.message.includes('Unique constraint failed')) {
        res.status(400).json({
          message: 'Email already exists'
        })
      }
      res.status(400).json(error.errors)
    }
  }

  async index(req: Request, res: Response) {
    try {
      const { startDate, endDate, count } = req.query

      const filters = {
        startDate: startDate && new Date(String(startDate)).toISOString(), 
        endDate: endDate && new Date(String(endDate)).toISOString(), 
        count: Number(count) || undefined
      }

      if (filters) {
        const formsAnswers = await getFormAnswerService.execute({
          filters: {
            startDate: filters.startDate,
            endDate: filters.endDate
          },
          count: filters.count
        })

        res.status(200).json({
          answers: formsAnswers,
          count: formsAnswers.length
        })
      }
      
      const formsAnswers = await getFormAnswerService.execute()

      res.status(200).json({
        answers: formsAnswers,
        count: formsAnswers.length
      })
    } catch (error: any) {
      res.status(400).json(error.errors)
    }
  }
}