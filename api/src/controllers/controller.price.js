import { allPrices, createPrices, updatePrices }  from "../helpers/helpers.price.js";

export const postPrice = async (req, res) => {
    const infoBody = req.body
    try {
        let createPricesHere = await createPrices(infoBody);
        res.status(200).json(createPricesHere);
    } catch (error) {
        res.status(400).send({ err: error.message })
    }
}

export const getPrice = async (req, res) => {
    try {
        let getPricesHere = await allPrices();
        res.status(200).json(getPricesHere);
    } catch (error) {
        res.status(400).send({ err: error.message })
    }
}

export const putPrice = async (req, res) => {
    let putPriceByBody = req.body;
    try {
        let updatingPrice = await updatePrices(putPriceByBody);
        res.status(200).json(updatingPrice);
    } catch (error) {
        res.status(400).send({ err: error.message })
    }
}

