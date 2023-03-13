import { DataTypes } from 'sequelize';
import dataBase from "../config/db.js";
import Products from "./products.js";
import Prices from './price.js';
import Reviews from './review.js';

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

// Relacion con tabla de precios
SuperM.hasMany(Prices);
Prices.belongsTo(SuperM);



export default SuperM;