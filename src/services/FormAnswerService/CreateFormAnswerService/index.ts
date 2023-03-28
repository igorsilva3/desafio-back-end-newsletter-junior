import { FormAnswer } from "@prisma/client"
import { prisma } from "@prisma"

interface ICreateFormAnswerServiceDTO {
  data: {
    name: string,
    email: string,
    cpf: string,
    phone: string,
    createdAt?: string
  }
}

interface ICreateFormAnswerService {
  execute({ data }: ICreateFormAnswerServiceDTO): Promise<FormAnswer>
}

export class CreateFormAnswerService implements ICreateFormAnswerService {
  async execute({ data }: ICreateFormAnswerServiceDTO): Promise<FormAnswer> {
    try {
      const formAnswer = await prisma.formAnswer.create({
        data
      })

      return formAnswer
    } catch (error) {
      throw error;
    }

  }
}