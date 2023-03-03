import { DataTypes } from "sequelize";
import dataBase from "../config/db.js";
import Users from "./users.js"

const Reviews = dataBase.define('reviews', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    message: {
        type: DataTypes.STRING(250),
        allowNull: false,
    }
    // agregar supermercado y puntaje
}, { timestamps: false })

Reviews.belongsTo(Users, {
    foreignKey: 'userId', // Especifica el nombre de la columna en la tabla posts
    timestamps: false
});

export default Reviews;