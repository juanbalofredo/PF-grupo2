import { DataTypes } from "sequelize";
import dataBase from "../config/db.js";

const Market = dataBase.define('market', {
  id: {
    type: DataTypes.STRING(3),
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, { timestamps: false })

export default Market;