import { DataTypes } from 'sequelize';
import dataBase from "../config/db.js";
import Products from "./products.js";
import Prices from './price.js';

const SuperM = dataBase.define(
    "superM",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    { timestamps: false }
);


SuperM.hasMany(Prices);
Prices.belongsTo(SuperM);
// SuperM.belongsToMany(Products, {
//     through: "SuperM_Products",
//     timestamps: false
// });

// Products.belongsTo(SuperM, {
//     through: "SuperM_Products",
//     timestamps: false
// });

export default SuperM;