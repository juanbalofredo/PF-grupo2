import createUser from "../helpers/createUser.js"


export default function postUser(req,res){
    try {
        const usuario = req.body
        createUser(usuario)
        res.status(200).json(usuario)
    } catch (error) {
        res.status(400).json(error)
    }
}