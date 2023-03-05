import Products from "../models/products.js";
import { Op } from "sequelize";

export function getProductsById(id){
    const productsById = Products.findOne({
        where: {id},
    });
    return productsById;
}

export function getProductByName(name){
    const productsByName = Products.findAll({
        where: {
            name: {
                [Op.iLike]:`%${name}%`},
            },
    });
    return productsByName;
};

export function getProductsByCategory(category){
    const productByCategory = Products.findAll({
        where: {category},
    })
    return productByCategory;
};

export function getProductsByBrand(brand){
    const productByBrand = Products.findAll({
        where: {brand},
    })
    return productByBrand;
};