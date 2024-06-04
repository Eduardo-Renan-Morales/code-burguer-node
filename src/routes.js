import { Router } from "express";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import productController from "./app/controllers/productController";

const routes = new Router();

routes.post("/users", UserController.store);

routes.post("/sessions", SessionController.store);

routes.post("/products", productController.store);

export default routes;
