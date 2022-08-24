import { routes } from "./routes.js";
import express from "express";

class App {
    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: true }));
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server