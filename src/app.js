import cors from "cors";
import express from "express";
import { resolve } from "path";
import routes from "./routes.js";

import "./database/index.js";

const corsOptions = {
  origin: 'https://devburger-interface-brown.vercel.app',
  credentials: true,
}

class App {
  constructor() {
    this.app = express();
    this.app.use(cors(corsOptions));
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(
      "/product-file",
      express.static(resolve(__dirname, "..", "uploads"))
    );

    this.app.use(
      "/category-file",
      express.static(resolve(__dirname, "..", "uploads"))
    );
  }

  routes() {
    this.app.use(routes);
  }
}
export default new App().app;
