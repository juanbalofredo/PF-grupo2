const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define(
        "Smarkets",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        { timestamps: false }
    )
};