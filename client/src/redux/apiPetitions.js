import axios from 'axios';
import { allProducts, allUsers,oneUsers } from "./slice";

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

try {
  return await axios.post("http://localhost:3001/user/postUsers",{
     name: input.name,
     avatar: input.avatar,
     email: input.email,
     last_name: input.last_name,
     password: input.password,
     type_account: '1'
})
} catch (error) {

return error.message  
}
}
//get usuarios
export async function getUsers(dispatch) {
try {
  const pedir = axios.get("http://localhost:3001/user");
  dispatch(allUsers(pedir?.data));
} catch (error) {
return error.message  
}
}

export async function validateUser(dispatch) {
try {
  const pedir = axios.get("http://localhost:3001/user/id/:id");
  dispatch(oneUsers(pedir?.data));
} catch (error) {
return error.message  
}
}

