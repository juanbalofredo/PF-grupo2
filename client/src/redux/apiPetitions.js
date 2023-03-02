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
  if (!input.avatar) {
    input.avatar = 'https://res.cloudinary.com/dzuasgy3l/image/upload/v1677690070/v55uvjjvoopg3pgmitz2.webp'
  }
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
  