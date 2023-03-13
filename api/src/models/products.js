import { DataTypes } from "sequelize";
import dataBase from "../config/db.js";
import Brand from "./brand.js";
import Prices from "./price.js";

const Products = dataBase.define(
  "products",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { timestamps: false }
);

Products.hasMany(Prices);
Prices.belongsTo(Products);
export default Products;
