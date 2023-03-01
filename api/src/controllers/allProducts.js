import apiInfo from "../helpers/apiInfo.js"

export default async function getProducts(req, res){
    try{
        const response = await apiInfo();
        return res.status(200).json(response);
    } catch(error) {
        return res.status(400).json({err: error.message});
    }
};
