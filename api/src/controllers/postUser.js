import createUser from "../helpers/createUser.js"
import Users from "../models/users.js"
export default function postUser(req,res){
    
    try {
        const usuario = req.body
        createUser(usuario)
        res.json(usuario)
      
    } catch (error) {
        res.json(error)
    }

}