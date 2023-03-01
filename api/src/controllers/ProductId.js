import Products from "../models/products.js";

export default async function ProductId(req, res) {
    const { id } = req.params
    const prod = await Products.findAll()
    const result = prod.filter(e => e.id == id)
    res.status(200).json(result)

}