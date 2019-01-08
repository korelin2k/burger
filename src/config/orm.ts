import connection from "./connection";

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

    public insertOne(burger: string[]) {
        return new Promise<any>((resolve) => {
            connection.then((conn) => {
                const queryString = `insert into ${this.tableName} (burger_name, description, image) VALUES (?, ?, ?)`;

                conn.query(queryString, burger).then((result) => {
                    resolve(result);
                });
            });
        });
    }

    public updateOne(burger: object, id: number) {
        return new Promise<any>((resolve) => {
            connection.then((conn) => {
                const queryString = `update ${this.tableName} SET ? WHERE id=?`;

                conn.query(queryString, [burger, id]).then((result) => {
                    resolve(result);
                });
            });
        });
    }
}
