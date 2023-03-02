import axios from 'axios';
import { allProducts } from "./slice";

export async function getAllProducts(dispatch) {
    try {
      const peticion = await axios.get("http://localhost:3001/products");
      console.log(peticion.data);
      dispatch(allProducts(peticion?.data));
    } catch (error) {
      return error.response;
    }
  }

  
export async function crearUser(input) {
  console.log(input)
try {
  return await axios.post("http://localhost:3001/"),{
     ...input,
     name: input.name,
     avatar: input.avatar,
     mail: input.mail,
     apellido: input.apellido,
     password: input.password,
}  
} catch (error) {
return error.message  
}
}
  