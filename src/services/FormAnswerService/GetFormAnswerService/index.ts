import { FormAnswer } from "@prisma/client"
import { prisma } from "@prisma"

interface IGetFormAnswerServiceDTO {
  filters?: {
    startDate?: string,
    endDate?: string
  },
  count?: number
}

interface IGetFormAnswerService {
  execute(select?: IGetFormAnswerServiceDTO): Promise<FormAnswer[]>
}

export class GetFormAnswerService implements  IGetFormAnswerService{
  async execute(select?: IGetFormAnswerServiceDTO): Promise<FormAnswer[]> {
    try {
      if (select?.filters) {
        const formsAnswers =  await prisma.formAnswer.findMany({
          where: {
            createdAt: {
              gte: select.filters.startDate,
              lte: select.filters.endDate,
            },
          },
          take: select.count
        })

        return formsAnswers
      }

      const formsAnswers = await prisma.formAnswer.findMany({
        take: select?.count || 10
      })

      return formsAnswers
    } catch (error) {
      throw error;
    }

  }
}