import UsersController from "./controllers/usersController.js";
import { Router } from "express";

export const routes = new Router();

routes.get("/users", UsersController.listAll);