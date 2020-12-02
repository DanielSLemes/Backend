import { Response, Request } from "express"
import { insertStuMission } from "../data/insertStuMission"
import { generateId } from './../services/idGenerator';


export const studentOnMission = async (req: Request, res: Response): Promise<void> => {

    try {

        const { subtitle , author_id,date, file, collection_id} = req.body

        if (!subtitle || !date || !file) {
            res.statusCode = 400;
            throw new Error("Insira valores válidos")
        }

        const id: string = generateId()

        await insertStuMission(
            id,
            subtitle,
            author_id,
            date,
            file,
            collection_id
        )

        res.status(200).send({ message: "O estudante foi alocado para a turma!" })

    } catch (error) {
        res.status(400).send(error.message)

    }

}