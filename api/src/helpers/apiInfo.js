import Products from "../models/products.js";
//products es el json de todos los productos 
import products from "../prueba (1).js";

const apiInfo = async()=> {
    const produc = product.map( p=>{
         products.create({
            id : p.id,
            name : p.name,
            brand : p.brand,
            price : p.price,
            unit : p.unity,
            category : p.category,

            description : p.description,
            supermarket: p.supermarket,
            image: p.image

        })
    })
    console.log(produc);
        return product;
    };
export default apiInfo;
