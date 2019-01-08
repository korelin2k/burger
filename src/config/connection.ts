import * as bluebird from "bluebird";
import * as mysql from "promise-mysql";
import { Connection } from "promise-mysql";

let connection: bluebird<Connection>;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        database: "burgers_db",
        debug: ["ComQueryPacket", "RowDataPacket"],
        host: "localhost",
        password: "password",
        user: "root",
    });
}

export default connection;
