const { precios } = require("../DatosParaMokear.js");
const { Prices } = require("../config/db.js");

const createPrices = async ({ price, productId, smarketId }) => {
    // let createOnePrice = await Price.bulkCreate({ price, productId, smarketId });
    // return createOnePrice;
    const createdProducts = [];
    for (const precio of precios) {
        try {
            const createdPrice = await Prices.create(precio);
            console.log(`El producto "${createdPrice.price}" ha sido creado`);
            createdProducts.push(createdPrice);
        } catch (error) {
            console.error(`Error al crear el producto "${precio.price}":`, error);
        }
    }
    console.log('Todos los productos han sido creados:');
}

const allPrices = async () => {
    let createOneProduct = await Prices.findAll();
    return createOneProduct;
}

module.exports = {
    createPrices,
    allPrices
};