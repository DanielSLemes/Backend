// import {connection} from "../index"

// export async function createListUserTable():Promise<void>{
//    try {
//       await connection.raw(`
//       CREATE TABLE User(
//          id VARCHAR(255)  PRIMARY KEY,
//          name VARCHAR(255) NOT NULL, 
//          nickname VARCHAR(255) UNIQUE NOT NULL,
//        password VARCHAR(255) NOT NULL
//          );
//       `)
      

//       console.log("Sucesso!")
//    } catch (error) {
//       console.log(error)
//    }
// }

// createListUserTable()