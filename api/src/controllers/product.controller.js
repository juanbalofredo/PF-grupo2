import Products from "../models/products.js";
import { getProductByName, getProductsByCategory, getProductsById, getProductsByBrand } from "../helpers/products.helper.js";
import apiInfo from "../helpers/apiInfo.js"
import { Op } from "sequelize";
import Prueba3 from "../prueba(3).js";

export async function getProducts(req, res) {
    const response2 = await Products.findAll(
        {
            where: {
                supermarket:
                    "General",
            },
            order: [["name", "ASC"]]
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
    // const response2 = await Products.findAll(

    //     {
    //         where: {
    //             supermarket:
    //                 { [Op.ne]: "General" },
    //         },
    //         order: [["name", "ASC"]]
    //     }
    // )

    try {
        // esto es para seguir creando la misma base de datos
        if (response2.length == 0) {
            apiInfo().then(r => res.status(200).json(r));
        }
        else return res.status(200).json(Prueba3);
    } catch (error) {
        return res.status(400).json({ err: error.message });
    }
};

export async function getProductId(req, res) {
    const { id } = req.params;
    try {
        const response = await getProductsById(id)
        return res.status(200).json(response)
    } catch(error) {
        return res.status(400).json({ err: error.message })
    }

}

export async function getByName(req, res) {
    try {
        const { name } = req.query;
        const response = await getProductByName(name);
        return res.status(200).json(response);
    } catch(error) {
        return res.status(400).json({ err: error.message });
    }
};

export async function getByCategory(req, res) {
    const filterCategory = req.params;
    console.log("esto es filterCategory ==>",filterCategory)
    // console.log(category, order)
    try {
        const response = await getProductsByCategory(filterCategory)
        return res.status(200).json(response);
    } catch(error) {
        return res.status(400).json({ error: error.message });
    }
};

export async function getByBrand(req, res) {
    const { brand, order } = req.params;
    try {
        const response = await getProductsByBrand(brand, order)
        return res.status(200).json(response);
    } catch(error) {
        return res.status(400).json({ err: error.message });
    }
};