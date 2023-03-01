import apiInfo from "../helpers/apiInfo.js"
import Products from "../models/products.js";
// asdasd
async function getProducts(req, res) {
    await apiInfo();
    try {
        const response2 = await Products.findAll()
        console.log(response2)
        return res.status(200).json(response2);
    } catch (error) {
        return res.status(400).json({ err: error.message });
    }
};

export default getProducts