const { productos } = require("../DatosParaMokear.js");
const { Products, Prices, Smarkets } = require("../config/db.js");
const createProducts = async ({ name, brand, category, image }) => {
    // let createOneProduct = await Products.create({ name, brand, category, image })
    // return createOneProduct;
    const createdProducts = [];
    for (const product of productos) {
        try {
            const createdProduct = await Products.create(product);
            console.log(`El producto "${createdProduct.name}" ha sido creado`);
            createdProducts.push(createdProduct);
        } catch (error) {
            console.error(`Error al crear el producto "${product.name}":`, error);
        }
    }
    // console.log('Todos los productos han sido creados:', createdProducts);
}

const allProducts = async () => {
    // let findAllProducts = await Products.findAll();
    // return findAllProducts;
    console.log("esto es PRice",Prices)
    let productAndPrice;
    try {
        productAndPrice = await Products.findAll({
            include: [
                {
                    model: Prices,
                    attributes: ['price'],
                    include: [
                        {
                            model: Smarkets,
                            attributes: ['name', "image", "id"]
                        }
                    ]
                }
            ]
        });
        // let todoslosPrecios = Price.findAll()
            // .then(info => console.log(info))
    } catch (error) {
        console.error(error);
    }
    return productAndPrice;
}

module.exports = {
    createProducts,
    allProducts
};