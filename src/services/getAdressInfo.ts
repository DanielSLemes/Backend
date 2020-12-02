// import axios from "axios"
// import async from './../endpoints/login';
// const URL_ADDRESS = "https://viacep.com.br/ws";

// type address = {
//     logradouro:string,
//     bairro:string,
//     cidade:string,
//     estado:string
// }
// export async function  getAdressInfo(cep:number):Promise<address>{
//     const result = await axios.get(`${URL_ADDRESS}/${cep}/json`);


//     return {

//         logradouro:result.data.logradouro,
//         bairro:result.data.bairro,
//         cidade:result.data.cidade,
//         estado:result.data.uf
//     }
// }