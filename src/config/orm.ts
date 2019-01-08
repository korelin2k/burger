import connection from "./connection";

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob: any) {
    const arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (const key in ob) {
        let value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

export class Orm {
    private tableName: string = "burgers";
    public selectAll() {
        return new Promise<any>((resolve) => {
            connection.then((conn) => {
                const queryString = `select * from ${this.tableName}`;
                conn.query(queryString).then((result) => {
                    resolve(result);
                });
            });
        });
    }

    public insertOne(burgerKey: string[], burgerVal: string[]) {
        return new Promise<any>((resolve) => {
            connection.then((conn) => {

                const queryString = `insert into ${this.tableName} \
(${burgerKey}) VALUES (?, ?, ?, ?)`;

                conn.query(queryString, burgerVal).then((result) => {
                    resolve(result);
                });
            });
        });
    }

    public updateOne(burger: object, id: number) {
        return new Promise<any>((resolve) => {
            connection.then((conn) => {
                const burgerObj = objToSql(burger);
                const queryString = `update ${this.tableName} SET ${burgerObj} WHERE id = ${id}`;

                conn.query(queryString).then((result) => {
                    resolve(result);
                });
            });
        });
    }
}
