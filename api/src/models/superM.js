import { DataTypes } from 'sequelize';
import dataBase from "../config/db.js";
import Products from "./products.js";

 const SuperM = dataBase.define(
    "superM",
    {
		id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            primaryKey: true
        },
        name : {
            type: DataTypes.STRING,
            allowNull: true
        }
	},
	{ timestamps: false});


SuperM.belongsToMany(Products, {
    through: "SuperM_Products",
    timestamps: false
});

Products.belongsTo(SuperM, {
    through: "SuperM_Products",
    timestamps: false
});

export default SuperM;