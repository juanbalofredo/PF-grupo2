import Products from "../models/products.js";
//products es el json de todos los productos
import products from "../prueba (1).js";

const apiInfo = async () => {

    for (let i = 0; i < products.length; i++) {
        await Products.create({
            name: products[i].name,
            brand: products[i].brand,
            price: products[i].price,
            unit: products[i].unit,
            category: products[i].category,
            description: products[i].description,
            supermarket: products[i].supermarket,
            image: products[i].image,
        });
    }

    const allProducts= await Products.findAll()


    return allProducts;

};
export default apiInfo;
