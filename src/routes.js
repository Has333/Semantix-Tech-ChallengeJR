import usersController from "./controllers/usersController.js";
import { Router } from "express";

export const routes = new Router();

routes.get("/users", usersController.listUsers);