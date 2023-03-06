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

export async function getProductsByCategory({ category, order, brand }) {
    if (category === "all" && brand == "all") {
        console.log("entro ambos en ALL")
        let productByCategory = await Products.findAll({
            where: {
                supermarket: "General"
            },
            order: [["name", order]]
        })
        if (productByCategory.length != 0) return productByCategory;
        throw Error("Category not found");
    }
    if (category === "all" && brand) {
        let productByCategory = await Products.findAll({
            where: {
                brand,
                supermarket: "General"
            },
            order: [["name", order]]
        })
        if (productByCategory.length != 0) return productByCategory;
        throw Error("Category not found");
    }
    if (brand === "all") {
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
                brand,
                supermarket: "General"
            },
            order: [["name", order]]
        })
        if (productByCategory.length != 0) return productByCategory;
        throw Error("Category not found");
    }

}

export function getProductsByBrand(brand, order) {
    const productByBrand = Products.findAll({
        where: { brand },
        order: [["brand", order]]
    })
    return productByBrand;
};