// Import the ORM to create functions that will interact with the database.
import { Orm } from "../../config/orm";

export class Burger {
    public orm = new Orm();

    public all() {
        return new Promise<any>((resolve) => {
            this.orm.selectAll().then((result) => {
                resolve(result);
            });
        });
    }

    public create(burger: string[]) {
        return new Promise<any>((resolve) => {
            this.orm.insertOne(burger).then((result) => {
                resolve(result);
            });
        });
    }

    public update(burger: object, id: number) {
        return new Promise<any>((resolve) => {
            this.orm.updateOne(burger, id).then((result) => {
                resolve(result);
            });
        });
    }
}
