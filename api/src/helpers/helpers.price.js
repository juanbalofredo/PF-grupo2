import { precios } from "../prueba(4).js";
import Prices from "../models/price.js";

export const createPrices = async (pricesFromBody) => {
    let { price, productId, superMId } = pricesFromBody
    let allPricesInDataBase = await Prices.findAll();
    if (allPricesInDataBase.length === 0) {
        const createdProducts = [];
        for (const precio of precios) {
            try {
                const createdPrice = await Prices.create(precio);
                createdProducts.push(createdPrice);
            } catch (error) {
                throw Error(`Error: ${error.message}`)
            }
        }
    } else {
        let createOnePrice = await Prices.create({ price, productId, superMId });
        return createOnePrice;
    }
}

export const allPrices = async () => {
    let createOneProduct = await Prices.findAll();
    return createOneProduct;
}

export function updatePrices({ price, productId, superMId }) {
    console.log(price, productId, superMId)
    if (productId && superMId && price) {
        let updatedAdmin = Prices.update(
            { price },
            { where: { productId, superMId } }
        )
        return updatedAdmin;
    } else {
        throw Error("You must fulfill Price, Product ID and Market Id to complete the operation.")
    }
}

