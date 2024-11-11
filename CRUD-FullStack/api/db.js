import mysql from "mysql"

export const db = mysql.createConnection({
    host: "host do banco de dados",
    port: "sua porta",
    user: "usuario do banco de dados",
    password: "senha do banco de dados",
    database: "nome do banco de dados"
})