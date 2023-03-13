const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define(
        "Prices",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            price: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            
        },
        {
            timestamps: false,
            indexes: [
                {
                    unique: true,
                    fields: ['ProductId', 'SmarketId']
                }
            ]
        }
    )
};

// uniqueKeys: {
//     unique: true,
//     fields: ['ProductId', 'SmarketId']
// }