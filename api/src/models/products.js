import { DataTypes } from "sequelize";
import dataBase from "../config/db.js";
import Brand from "./brand.js";

const Products = dataBase.define(
  "products",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unit: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    supermarket: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
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

Products.belongsTo(Brand, {
  through: "Products_Brand",
  timestamps: false,
});
Brand.belongsToMany(Products, {
  through: "Products_Brand",
  timestamps: false,
});

export default Products;
