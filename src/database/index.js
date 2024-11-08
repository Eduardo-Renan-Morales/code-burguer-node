import mongoose from "mongoose";
import Sequelize from "sequelize";

import Category from "../app/models/Category";
import Product from "../app/models/Products";
import User from "../app/models/User";

const models = [User, Product, Category];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize('postgresql://postgres:MViLoQWyWFcCDxnEsRdSgGgfLdMMYmnP@junction.proxy.rlwy.net:32151/railway');
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }

  mongo() {
    this.mongoConnections = mongoose.connect(
      "mongodb://mongo:cqNLEKMNqyMkLssrtVXiclkDZluqAUWH@autorack.proxy.rlwy.net:22771"
      // ,
      // {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      // }
    );
  }
}

export default new Database();
