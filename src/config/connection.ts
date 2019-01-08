import * as mysql from "promise-mysql";

const connection = mysql.createConnection({
    database: "burgers_db",
    debug: ["ComQueryPacket", "RowDataPacket"],
    host: "localhost",
    password: "password",
    user: "root",
});

export default connection;
