import { Request, Response } from "express";
import insertCollections from "../data/insertCollections";
import { generateId } from "../services/idGenerator";


export default async function collections(
    req: Request,
    res: Response
) {
    try {
        if (

            !req.body.name
        ) {
            throw new Error(' name" é obrigatórios')
        }

        const id: string = generateId()


        await insertCollections(
            id,
            req.body.name
        );

        res
            .status(201)
            .send({
                message: "Usuário criado em collections!"

            })

    } catch (error) {
        let message = error.sqlMessage || error.message
        res.status(400).send(`>>>,${message}`)
    }
}