import mysql2 from "mysql2";

export const usersdb = mysql2.createPool({
    host: "localhost",
    user: "root",
    database: "ini",
    password: ""
}).promise()