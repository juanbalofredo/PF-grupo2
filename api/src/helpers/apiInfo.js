import Products from "../models/products.js";
//products es el json de todos los productos
import products from "../prueba(3).js";

const apiInfo = async () => {

    for (let i = 0; i < products.length; i++) {
        let priceJson = JSON.stringify(products[i].price)
        await Products.create({
            name: products[i].name,
            brand: products[i].brand,
            price: priceJson,
            unit: products[i].unit,
            category: products[i].category,
            description: products[i].description,
            supermarket: products[i].supermarket,
            image: products[i].image,
        });
    }

    //      "name": "Porotos",
    //     "brand": "Arcor",
    //     "id": 40,
    //     "price": [
    //         { name: "coto", price: 196 },
    //         { name: "dia", price: 200 },
    //         { name: "jumbo", price: 215 },
    //         { name: "carrefour", price: 220 },
    //         { name: "vital", price: 142 },
    //         { name: "walmart", price: 421 },
    //         { name: "disco", price: 110 }
    //     ],
    //     "unit": "300g",
    //     "category": "Legumbres",
    //     "supermarket": "General",
    //     "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784365/d1karryrtindrkuyscdf.jpg",
    //     "description": "Los porotos son una fuente rica de proteínas y fibra, esenciales en una dieta saludable y equilibrada. Presentados en bolsas de plástico o enlatados, vienen en diferentes variedades, desde negros hasta rojos, y pueden ser utilizados en una amplia variedad de platos, como ensaladas, sopas, guisos y chili. Son un alimento versátil y nutritivo."

    const allProducts= await Products.findAll()


    return allProducts;

};
export default apiInfo;
