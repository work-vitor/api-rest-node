import { Request, Response } from "express";
import * as yup from 'yup'

interface ICidade {
  nome: string
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3)
})

export const create = (req: Request<{}, {}, ICidade>, res: Response) => {

  const data: ICidade = req.body;

  console.log(req.body)

  return res.send('Create!');
};
