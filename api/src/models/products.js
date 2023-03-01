import { DataTypes } from "sequelize";
import dataBase from "../config/db.js";
import Market from "./market.js";

const Products = dataBase.define('products', {
    id: {
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.UUIDV4,
        allowNull : true,
        primaryKey: true,
        autoIncrement: true
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
    unity: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    supermarket: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, { timestamps: false })

Products.belongsTo(Market, {
    through: "Products_Market",
    timestamps: false
});
Market.belongsToMany(Products, {
    through: "Products_Market",
    timestamps: false,
});

export default Market;