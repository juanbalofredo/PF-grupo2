const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define(
        "Products",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            brand: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            category: {
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