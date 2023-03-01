import { DataTypes } from "sequelize";
import dataBase from "../config/db.js";

const Market = dataBase.define('market', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, { timestamps: false })

export default Market;