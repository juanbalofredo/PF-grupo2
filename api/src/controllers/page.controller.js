import Products from "../models/products.js";


export async function numberPage (req,res){
try {
    const response = await Products.findAll()
    const {number} = req.params
    const itemsperpage = 10
    const lasttindex = number * itemsperpage
    const firstindex = lasttindex - itemsperpage

    const result = response.slice(firstindex,lasttindex)
    res.send(result)
} catch (error) {
    throw Error(error)
}
}