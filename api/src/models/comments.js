import { DataTypes } from "sequelize";
import dataBase from "../config/db.js";

const Reviews = dataBase.define('reviews', {
    id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
    },
    message: {
        type: DataTypes.STRING(250),
        allowNull: false,
    }
}, { timestamps: false })

export default Reviews;