import {connection} from "../index"

export const insertStuMission = async(
    id: string,
	subtitle :string, 
	author_id:string,
	date: Date,
	file:string,
	collection_id:string
  ):Promise<any> => {

    const result = await connection
    .insert({
    id,
	subtitle , 
	author_id,
	date,
	file,
	collection_id
    })
    .into("Image")

    return result

}  
