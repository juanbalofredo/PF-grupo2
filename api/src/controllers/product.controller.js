import Products from "../models/products.js";
import { getProductByName, getProductsByCategory, getProductsById } from "../helpers/products.helper.js";
import apiInfo from "../helpers/apiInfo.js"

export async function getProducts(req, res) {
    const response2 = await Products.findAll()
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
    try {
        const { id } = req.params
        const response = await getProductsById(id)
        return res.status(200).json(response)
    } catch {
        return res.status(400).json({err: error.message})
    }

    }

export async function getByName(req, res){
    try{
        const {name} = req.query;
         const response = await getProductByName(name);
         return res.status(200).json(response);
    } catch {
        return res.status(400).json({err: error.message});
    }
};

export async function getByCategory(req, res){
    try {
        const { category } = req.params;
         const response = await getProductsByCategory(category)
         return res.status(200).json(response);
    } catch {
        return res.status(400).json({err: error.message});
    }
};