const { allSmarket, createSmarket } = require("../helpers/helpers.smarket.js");

const postSmarket = async (req, res) => {
    const infoBody = req.body
    try {
        let createSmarketHere = await createSmarket(infoBody);
        res.status(200).json(createSmarketHere);
    } catch (error) {
        res.status(400).send({ err: error.message })
    }
}

const getSmarket = async (req, res) => {
    try {
        let allSmarketHere = await allSmarket();
        res.status(200).json(allSmarketHere);
    } catch (error) {
        res.status(400).send({ err: error.message })
    }
}

module.exports = {
    getSmarket,
    postSmarket
};