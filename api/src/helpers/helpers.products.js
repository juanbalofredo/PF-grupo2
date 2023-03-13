import { productos } from "../prueba(4).js";
import Prices from "../models/price.js";
import Products from "../models/products.js";
import SuperM from "../models/superM.js";
import { Op } from "sequelize";

export const createProducts = async ({ name, brand, category, image }) => {
    let allPoductsInDataBase = await Products.findAll()
    // console.log("esto es Products=>", allPoductsInDataBase)
    const createdProducts = [];
    if (allPoductsInDataBase.length === 0) {
        for (const product of productos) {
            try {
                const createdProduct = await Products.create(product);
                console.log(`El producto "${createdProduct.name}" ha sido creado`);
                createdProducts.push(createdProduct);
            } catch (error) {
                console.error(`Error al crear el producto "${product.name}":`);
            }
        }

    }
    // console.log('Todos los productos han sido creados:', createdProducts);
    let createOneProduct = await Products.create({ name, brand, category, image })
    return createOneProduct;
}

export const allProducts = async () => {
    // let findAllProducts = await Products.findAll();
    // return findAllProducts;
    console.log("esto es PRice", Prices)
    let productAndPrice;
    try {
        productAndPrice = await Products.findAll({
            include: [
                {
                    model: Prices,
                    attributes: ['price'],
                    include: [
                        {
                            model: SuperM,
                            attributes: ['name', "image", "id"]
                        }
                    ]
                }
            ]
        });
        // let todoslosPrecios = Price.findAll()
        // .then(info => console.log(info))
    } catch (error) {
        console.error(error);
    }
    return productAndPrice;
}

export function getProductsById(id) {
    const productsById = Products.findOne({
        where: { id },
        include: [
            {
                model: Prices,
                attributes: ["price"],
                include: [
                    {
                        model: SuperM,
                        attributes: ["name", "image", "id"]
                    }
                ]
            }]
    });
    return productsById;
}

export async function getProductByName({ name, order }) {
    console.log("esto es Name y Order ==>", name, order)
    const productsByName = await Products.findAll({
        where: {
            name: {
                // recordar [Op.iLike] => sirve para buscar si el string esta incluido ignorando mayus y minus
                [Op.iLike]: `%${name}%`
            },
        },
        include: [
            {
                model: Prices,
                attributes: ["price"],
                include: [
                    {
                        model: SuperM,
                        attributes: ["name", "image", "id"]
                    }
                ]
            }],
        order: [["name", order]]
    });
    return productsByName;
};

export async function getProductsByCategory({ category, order, brand }) {
    if (category === "all" && brand == "all") {
        console.log("entro ambos en ALL")
        console.log(category, order, brand)
        let productByCategory = await Products.findAll({
            include: [
                {
                    model: Prices,
                    attributes: ["price"],
                    include: [
                        {
                            model: SuperM,
                            attributes: ["name", "image", "id"]
                        }
                    ]
                }],
            order: [["name", order]]
        })
        // if (productByCategory.length != 0) return productByCategory.slice(firstindex, lasttindex);
        if (productByCategory.length != 0) return productByCategory
        throw Error("Category not found");
    }
    if (category === "all" && brand) {
        console.log("entro ambos en Category == all")
        let productByCategory = await Products.findAll({
            where: {
                brand: {
                    [Op.iLike]: `%${brand}%`
                }
            },
            include: [
                {
                    model: Prices,
                    attributes: ["price"],
                    include: [
                        {
                            model: SuperM,
                            attributes: ["name", "image", "id"]
                        }
                    ]
                }],
            order: [["name", order]]
        })
        // if (productByCategory.length != 0) return productByCategory.slice(firstindex, lasttindex);
        if (productByCategory.length != 0) return productByCategory
        throw Error("Category not found");
    }
    if (brand === "all") {
        console.log("entro ambos en brand == all")
        let productByCategory = await Products.findAll({
            where: {
                category: {
                    [Op.iLike]: `%${category}%`
                }
            },
            include: [
                {
                    model: Prices,
                    attributes: ["price"],
                    include: [
                        {
                            model: SuperM,
                            attributes: ["name", "image", "id"]
                        }
                    ]
                }],
            order: [["name", order]]
        })
        // if (productByCategory.length != 0) return productByCategory.slice(firstindex, lasttindex);
        if (productByCategory.length != 0) return productByCategory
        throw Error("Category not found");
    } else {
        console.log("entro ambos en ELSE")
        let productByCategory = await Products.findAll({
            where: {
                category: {
                    [Op.iLike]: `%${category}%`
                },
                brand: {
                    [Op.iLike]: `%${brand}%`
                }
            },
            include: [
                {
                    model: Prices,
                    attributes: ["price"],
                    include: [
                        {
                            model: SuperM,
                            attributes: ["name", "image", "id"]
                        }
                    ]
                }],
            order: [["name", order]]
        })
        // if (productByCategory.length != 0) return productByCategory.slice(firstindex, lasttindex);
        if (productByCategory.length != 0) return productByCategory
        throw Error("Category not found");
    }
}

export async function getProductsByBrand(brand, order) {
    console.log("esto es marca y orden", brand, order)
    const productByBrand = await Products.findAll({
        where: {
            brand: {
                [Op.iLike]: `%${brand}%`
            }
        },
        include: [
            {
                model: Prices,
                attributes: ["price"],
                include: [
                    {
                        model: SuperM,
                        attributes: ["name", "image", "id"]
                    }
                ]
            }],
        order: [["brand", order]]
    })
    return productByBrand;
};