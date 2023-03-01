import products from "../models/products.js";
import product from "./products.js"

const apiInfo = async()=> {
    const productos = product.map(async(p)=>{
        await products.create({
            id : p.id,
            name : p.name,
            brand : p.brand,
            price : p.price,
            unity : p.unity,
            category : p.category
        })
    })
        return productos;
    };
export default apiInfo;
