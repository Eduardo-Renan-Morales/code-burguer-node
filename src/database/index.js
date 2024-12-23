import mongoose from "mongoose";
import Sequelize from "sequelize";

import Category from "../app/models/Category.js";
import Product from "../app/models/Products.js";
import User from "../app/models/User.js";

const models = [User, Product, Category];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize('postgresql://postgres:AllVUEqxjgIJdYBzkDfonJQdqeVymsoW@autorack.proxy.rlwy.net:35953/railway');
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
