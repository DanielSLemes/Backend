import { connection } from "..";

export default async function insertUser(
    id: string,
   name:string,
   email:string,
   nickname:string,
   password:string
) {
    await connection.insert({
            id,
           name,
           email,
           nickname,
           password
        }).into("User")
}

