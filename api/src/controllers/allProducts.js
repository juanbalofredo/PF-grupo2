import apiInfo from "../helpers/apiInfo.js"
import Products from "../models/products.js";
// asdasd
<<<<<<< HEAD
async function getProducts(req, res) {
    await apiInfo();
    try {
        const response2 = await Products.findAll()
        console.log(response2)
        return res.status(200).json(response2);
    } catch (error) {
        return res.status(400).json({ err: error.message });
=======
export default async function getProducts(req, res){
    const response2 = await Products.findAll()
    try{
        if(response2.length == 0){
        apiInfo().then(r=> res.status(200).json(r) );
        }
        else return res.status(200).json(response2);
      
       
    } catch(error) {
        return res.status(400).json({err: error.message});
>>>>>>> f3cfad38f418cc9ce66d42e67623641bf9700028
    }
};

export default getProducts