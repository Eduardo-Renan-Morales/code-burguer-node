import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import CategoryController from "./app/controllers/CategoryController";
import OrderController from "./app/controllers/OrderController";
import SessionController from "./app/controllers/SessionController";
import UserController from "./app/controllers/UserController";
import ProductController from "./app/controllers/productController";

import authMiddlewares from "./app/middlewares/auth";

const upload = multer(multerConfig);

const routes = new Router();

routes.post("/users", UserController.store); // cadastro

routes.post("/sessions", SessionController.store);  // login

routes.use(authMiddlewares); // Sera chamada por todas as rotas abaixo

routes.post("/products", upload.single("file"), ProductController.store);
routes.get("/products", ProductController.index);
routes.put("/products/:id", upload.single("file"), ProductController.update);

routes.post("/categories", upload.single("file"), CategoryController.store);
routes.get("/categories", CategoryController.index);
routes.put("/categories/:id", upload.single("file"), CategoryController.update);

routes.post("/orders", OrderController.store);
routes.put("/orders/:id", OrderController.update);
routes.get("/orders", OrderController.index);

export default routes;
