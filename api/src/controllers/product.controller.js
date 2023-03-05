import Products from "../models/products.js";
import { getProductByName, getProductsByCategory, getProductsById, getProductsByBrand } from "../helpers/products.helper.js";
import apiInfo from "../helpers/apiInfo.js"
import { Op } from "sequelize";

export async function getProducts(req, res) {
    const response2 = await Products.findAll(
        {
            where: {
                supermarket:
                    "General",
            },
        }
    )
    try {
        // esto es para seguir creando la misma base de datos
        if (response2.length == 0) {
            apiInfo().then(r => res.status(200).json(r));
        }
        else return res.status(200).json(response2);
    } catch (error) {
        return res.status(400).json({ err: error.message });
    }
};
export async function getProductsAll(req, res) {
    const response2 = await Products.findAll(
         
        {
            where: {
                supermarket:
               { [Op.ne]:"General"},
            },
        }
    )
    try {
        // esto es para seguir creando la misma base de datos
        if (response2.length == 0) {
            apiInfo().then(r => res.status(200).json(r));
        }
        else return res.status(200).json(response2);
    } catch (error) {
        return res.status(400).json({ err: error.message });
    }
};

export async function getProductId(req, res) {
    const { id } = req.params;
    try {
        const response = await getProductsById(id)
        return res.status(200).json(response)
    } catch {
        return res.status(400).json({ err: error.message })
    }

}

export async function getByName(req, res) {
    try {
        const { name } = req.query;
        const response = await getProductByName(name);
        return res.status(200).json(response);
    } catch {
        return res.status(400).json({ err: error.message });
    }
};

export async function getByCategory(req, res) {
    try {
        const { category } = req.params;
        const response = await getProductsByCategory(category)
        return res.status(200).json(response);
    } catch {
        return res.status(400).json({ err: error.message });
    }
};

export async function getByBrand(req, res) {
    try {
        const { brand } = req.params;
        const response = await getProductsByBrand(brand)
        return res.status(200).json(response);
    } catch {
        return res.status(400).json({ err: error.message });
    }
};