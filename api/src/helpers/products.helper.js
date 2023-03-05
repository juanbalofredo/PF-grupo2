import Products from "../models/products.js";
import { Op } from "sequelize";

export function getProductsById(id) {
    const productsById = Products.findOne({
        where: { id },
    });
    return productsById;
}

export function getProductByName(name) {
    const productsByName = Products.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            },
        },
    });
    return productsByName;
};

export async function getProductsByCategory({ category, order, supermarket }) {
    if (supermarket === "all") {
        let productByCategory = await Products.findAll({
            where: {
                category,
                supermarket: "General"
            },
            order: [["name", order]]
        })
        if (productByCategory.length != 0) return productByCategory;
        throw Error("Category not found");
    } else {
        let productByCategory = await Products.findAll({
            where: {
                category,
                supermarket: supermarket
            },
            order: [["name", order]]
        })
        if (productByCategory.length != 0) return productByCategory;
        throw Error("Category not found");
    }

};

export function getProductsByBrand(brand, order) {
    const productByBrand = Products.findAll({
        where: { brand },
        order: [["brand", order]]
    })
    return productByBrand;
};