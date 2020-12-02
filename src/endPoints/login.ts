import { Request, response, Response } from "express"
import { generateToken } from "../services/authenticator"
import { getUserByEmail } from './../data/getUserByEmail';
import {compare} from "../services/hasManager"
import { User } from "../data/selectUserByEmail";
export default async function login(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const { email, password } = req.body

      let message = "Usuário logado!"

      if (!email || !password) {
         res.statusCode = 406
         message = "'email' e 'senha' são obrigatórios"
         throw new Error(`>>>1 ${ message }`)
      }

      const user: User = await getUserByEmail(email)

      if (!user) {
         res.statusCode = 404
         message = "Usuário não encontrado ou senha incorreta"
         throw new Error(`>>>2 ${ message }`)
      }

      const passwordIsCorrect:boolean = await compare(password,user.password)

      if (!passwordIsCorrect) {
         res.statusCode = 404
         message = "Usuário não encontrado ou senha incorreta"
         throw new Error(`>>>3 ${ message }`)
      }

      const token: string = generateToken({
         id: user.id
      
      })

      res.status(200).send({
         message,
         token
      })

   } catch (error) {
      let { message } = error

      if(message === "Cannot read property 'id' of undefined"){
         message = "Usuário não encontrado ou senha incorreta"
         res.statusCode = 404
      }
      
      if(message === "Field 'name' doesn't have a default value"){
         message = "Insira um nome para seu usuário"
         res.statusCode = 406
      }
      res.status(401).send({message})
   }
}