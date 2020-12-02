import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import { generateId } from "../services/idGenerator";
import { hash } from './../services/hasManager';

export default async function createUser(
   req: Request,
   res: Response
) {
   try {
      if (
         !req.body.name ||
         !req.body.email||
         !req.body.nickname||
         !req.body.password
         
      ) {
         throw new Error(' name", "nickname", e "password" são obrigatórios')
      }
      if (!req.body.password || req.body.password.length < 6) {
         throw new Error("Invalid password");
       }


      const id: string = generateId()
      
    
      const cypherPassword = await hash(req.body.password)

      await insertUser(
         id,
         req.body.name,
         req.body.email,
         req.body.nickname,
         cypherPassword    
      );

    res
        .status(201)
        .send({
           message:"Usuário criado!"

        })

   } catch (error) {
      let message = error.sqlMessage || error.message
      res.status(400).send(`>>>,${ message }`)
   }
}