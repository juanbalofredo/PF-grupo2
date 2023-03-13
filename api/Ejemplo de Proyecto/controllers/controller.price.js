const { allPrices, createPrices } = require("../helpers/helpers.price.js");

const postPrice = async (req, res) => {
    const infoBody = req.body
    try {
        let createPricesHere = await createPrices(infoBody);
        res.status(200).json(createPricesHere);
    } catch (error) {
        res.status(400).send({ err: error.message })
    }
}

const getPrice = async (req, res) => {
    try {
        let getPricesHere = await allPrices();
        res.status(200).json(getPricesHere);
    } catch (error) {
        res.status(400).send({ err: error.message })
    }
}

module.exports = {
    getPrice,
    postPrice
};