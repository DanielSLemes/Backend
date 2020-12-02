"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createListUserTable = void 0;
const index_1 = require("../index");
function createListUserTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield index_1.connection.raw(`
      CREATE TABLE Image (
         id INT PRIMARY KEY,
         name VARCHAR(255) NOT NULL, 
         nickname VARCHAR(255) UNIQUE NOT NULL,
       password VARCHAR(255) UNIQUE NOT NULL
         );
      `);
            console.log("Sucesso!");
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.createListUserTable = createListUserTable;
createListUserTable();
//# sourceMappingURL=createListUserTable.js.map