import * as express from "express";
import { Burger } from "../models/domain/burger";

const burger = new Burger();
const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
    burger.all().then((result: object) => {
        const burgers = {
            burgers: result,
        };

        res.render("index", burgers);
    });
});

router.post("/api/burger", (req, res) => {
    burger.create(req.body.burger).then((result: any) => {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", (req, res) => {
    const id = req.params.id;
    const burgerUpdate = req.body.burger;

    burger.update(burgerUpdate, id).then((result) => {
        let status = 500;
        if (result.changedRows === 0) {
            status = 404;
        } else {
            status = 200;
        }

        res.status(status).end();
    });
});

export default router;
