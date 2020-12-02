import { connection } from "..";

export default async function insertCollections(
    id:string,
    name: string
) {

    await connection.insert({
        id,
        name

    }).into("Collections")
}



