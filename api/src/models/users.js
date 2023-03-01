import { DataTypes } from "sequelize";
import dataBase from "../config/db.js";
import Reviews from "./comments.js";

const Users = dataBase.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image_avatar: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type_account: {
        type: DataTypes.STRING,
        allowNull: false
    },
    notifications: {
        type: DataTypes.BOOLEAN,
    },

}, { timestamps: false })

Users.hasMany(Reviews, {
    through: "Users_Review",
    timestamps: false,
  });
Reviews.belongsToMany(Users, {
    through: "Users_Review",
    timestamps: false,
  });

export default Users;