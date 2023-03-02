//import { useNavigate } from "react-router-dom";
import "./card.css";

export default function Card({ product }) {
  const { name, brand, price} = product;
  
//   const navigate = useNavigate();
//   const click = () => {
//     navigate(`/details/${product.id}`);
//   };
//onClick={product.id ? click : null}
  return (
    <>
        <div className="card">
          <div className="cardetails">
            {/* <img className="image" src={img} alt={name} key={name}></img> */}
            <p className="text-title">{name}</p>
            <p className="text-title">{brand}</p>
            <p className="text-title">{price}</p>
          </div>
          <button className="card-button">More info</button>
        </div>
    </>
  );
}
