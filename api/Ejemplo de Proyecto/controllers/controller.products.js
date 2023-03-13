const { allProducts, createProducts } = require("../helpers/helpers.products.js");

const postProducts = async (req, res) => {
    const infoBody = req.body
    try {
        let createProductsHere = await createProducts(infoBody);
        res.status(200).json(createProductsHere);
    } catch (error) {
        res.status(400).send({ err: error.message })
    }
}

const getProducts = async (req, res) => {
    try {
        let getProductsHere = await allProducts();
        res.status(200).json(getProductsHere);
    } catch (error) {
        res.status(400).send({ err: error.message })
    }
}

module.exports = {
    getProducts,
    postProducts
};