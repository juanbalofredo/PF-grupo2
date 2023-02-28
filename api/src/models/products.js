import { DataTypes } from "sequelize";
import dataBase from "../config/db.js";
import Market from "./market.js";

const Products = dataBase.define('products', {
    id: {
        type: DataTypes.STRING(3),
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
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
    }
}, { timestamps: false })

Products.belongsToOne(Market, {
    through: "Products_Market",
    timestamps: false
});
Market.belongsToMany(Products, {
    through: "Products_Market",
    timestamps: false,
});

export default Market;