import { allProducts, createProducts, getProductByName, getProductsByBrand, getProductsByCategory, getProductsById } from "../helpers/helpers.products.js";

export const postProducts = async (req, res) => {
    const infoBody = req.body
    try {
        let createProductsHere = await createProducts(infoBody);
        res.status(200).json(createProductsHere);
    } catch (error) {
        res.status(400).send({ err: error.message })
    }
}

export const getProducts = async (req, res) => {
    try {
        let getProductsHere = await allProducts();
        res.status(200).json(getProductsHere);
    } catch (error) {
        res.status(400).send({ err: error.message })
    }
}

export const getProductId = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await getProductsById(id)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(400).json({ err: error.message })
    }
}

export async function getByName(req, res) {
    const nameOrder = req.query;
    try {
        const response = await getProductByName(nameOrder);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ err: error.message });
    }
};

export async function getByCategory(req, res) {
    const filterCategory = req.params;
    console.log("esto es filterCategory ==>", filterCategory)
    // console.log(category, order)
    try {
        const response = await getProductsByCategory(filterCategory)
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

export async function getByBrand(req, res) {
    const { brand, order } = req.params;
    try {
        const response = await getProductsByBrand(brand, order)
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ err: error.message });
    }
};