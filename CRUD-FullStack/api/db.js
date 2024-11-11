import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    port: "33061",
    user: "root",
    password: "Robert.2121",
    database: "crud_react"
})