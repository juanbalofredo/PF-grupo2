import Products from "../models/products.js";
import { Op } from "sequelize";

export async function getProductsById(id){
    const productsById = await Products.findOne({
        where: {id},
    });
    return productsById;
}

export async function getProductByName(name){
    const productsByName = await Products.findAll({
        where: {
            name: {
                [Op.iLike]:`%${name}%`},
            },
    });
    return productsByName;
};