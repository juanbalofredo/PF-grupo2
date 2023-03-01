import products from "../models/products.js";
import prodtuctos from "../prueba (1).js"

const apiInfo = async()=> {
    const produc = product.map( p=>{
         products.create({
            id : p.id,
            name : p.name,
            brand : p.brand,
            price : p.price,
            unity : p.unity,
            category : p.category,
            supermarket: "Dia"
        })
        console.log(p);
    })
    console.log(produc);
        return product;
    };
export default apiInfo;