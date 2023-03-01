import products from "../models/products.js";
import product from "./products.js"

const apiInfo = async()=> {
    const productos =  await product.map(async (p)=>{
        await products.create({
            id : p.id,
            name : p.name,
            brand : p.brand,
            price : p.price,
            unity : p.unity,
            category : p.category
        })
    })
        .then((response)=>response.json())
        .then((response)=> console.log(response))
        return productos;
};
export default apiInfo;