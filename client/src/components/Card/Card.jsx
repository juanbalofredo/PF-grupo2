
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { getProductos } from "../../redux/apiPetitions/productsPetitions";
import "./card.css";



export default function Card({ product }) {
  const { name, brand, image,id } = product;
  const dispatch = useDispatch()

    const navigate = useNavigate();
    const  click = async ()  => {
      getProductos(dispatch)
      navigate(`/products/id/${product.id}`);
    };
 

  return (
    <>
      <div className="container-Cards">
        <div className="card" onClick={product.id ? click : null}>
          <div className="cardetails">
          <p className="text-title">{name}</p>
            <img className="image" src={image} alt={name} key={name}></img>
            <p className="text-brand">{brand}</p>
          </div>
          <button className="card-button">More info</button>
        </div>
      </div>
    </>
  );
}
