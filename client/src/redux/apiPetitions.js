import axios from 'axios';
import { allProducts } from "./slice";

export async function getAllProducts(dispatch) {
    try {
      const peticion = await axios.get("http://localhost:3001/");
      dispatch(allProducts(peticion?.data));
    } catch (error) {
      return error.response;
    }
  }