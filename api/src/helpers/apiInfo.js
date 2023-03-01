import products from "../models/products.js";
import product from "./products.js"

const apiInfo = async()=> {
    const produc = product.map( p=>{
         products.create({
            id : p.id,
            name : p.name,
            brand : p.brand,
            price : p.price,
            unity : p.unity,
            category : p.category
        })
    })
    console.log(produc);
        return product;
    };
export default apiInfo;