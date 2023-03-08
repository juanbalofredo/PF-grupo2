import Products from "../models/products.js";
import { Op } from "sequelize";

export function getProductsById(id) {
    const productsById = Products.findOne({
        where: { id },
    });
    return productsById;
}

export async function getProductByName({ name, order }) {
    console.log("esto es Name y Order ==>",name, order)
    const productsByName = await Products.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            },
        },
        order: [["name", order]]
    });

    console.log("esto es ProducByName ==>",productsByName)
    const productsByNameParser = productsByName?.map(e => {
        let parsePrice = JSON.parse(e.price);
        e.price = parsePrice;
        return e;
    })
    return productsByNameParser;
};
// cambios para salvar la chamba
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