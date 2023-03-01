import products from "../models/products.js";
import prodtuctos from "../prueba (1).js"

const apiInfo = async()=> {
    const produc = prodtuctos.map(async p=>{
        await products.create({
     
            name : p.name,
            brand : p.brand,
            price : p.price,
            unity : p.unity,
            category : p.category,
            supermarket: "Dia"
        })
        console.log(p);
    })
        return produc;
    };
export default apiInfo;