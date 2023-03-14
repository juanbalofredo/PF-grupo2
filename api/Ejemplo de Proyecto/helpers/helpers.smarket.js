const { tiendas } = require("../DatosParaMokear.js");
const { Smarkets } = require("../config/db.js");

const createSmarket = async ({ name, image }) => {
    // let createOneMarket = await Smarket.create({ name, image })

    await Smarkets.bulkCreate(tiendas)
    // return createOneMarket;
}

const allSmarket = async () => {
    let findAllSmarkets = await Smarkets.finAll();
    return findAllSmarkets;
}

module.exports = {
    createSmarket,
    allSmarket
};