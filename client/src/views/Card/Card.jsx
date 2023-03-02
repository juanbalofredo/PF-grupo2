import { useNavigate } from "react-router-dom";
import "./card.css";
import img from "../Card/produc.jpg";
export default function Card({ product }) {
  const { name, brand, price, image } = product;

    const navigate = useNavigate();
    const click = () => {
      navigate(`/products/id/${product.id}`);
    };
  return (
    <>
      <div className="container-Cards">
        <div className="card" onClick={product.id ? click : null}>
          <div className="cardetails">
            <img className="image" src={image} alt={name} key={name}></img>
            <p className="text-title">{name}</p>
            <p className="text-title">{brand}</p>
            <p className="text-title">{price}</p>
          </div>
          <button className="card-button">More info</button>
        </div>
      </div>
    </>
  );
}
