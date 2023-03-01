import Products from "../models/products.js";
//products es el json de todos los productos 
import products from "../prueba (1).js";

const apiInfo = async () => {
    const produc = products.map(async (p) => {
        return await Products.create({
            name: p.name,
            brand: p.brand,
            price: p.price,
            unit: p.unity,
            category: p.category,
            description: p.description,
            supermarket: p.supermarket,
            image: p.image
        })
    })
    produc.forEach(e => {
        e
            .then(info => console.log(info.dataValues))
    })
    console.log("Esto es produc ==>", produc)
    return produc;
};
export default apiInfo;
