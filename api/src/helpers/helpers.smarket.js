import { tiendas } from "../prueba(4).js";
import SuperM from "../models/superM.js";

export const createSmarket = async ({ name, image }) => {
    const marketTable = await SuperM.findAll();
    // console.log(marketTable)
    if (marketTable.length === 0) {
        await SuperM.bulkCreate(tiendas)
    }
    let createOneMarket = await SuperM.create({ name, image })
    return createOneMarket;
}
export const allSmarket = async () => {
    let findAllSmarkets = await SuperM.findAll();
    return findAllSmarkets;
}

