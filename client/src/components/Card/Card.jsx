import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getnuevoDetail } from "../../redux/apiPetitions";
import "./card.css";



export default function Card({ product }) {
  const { name, brand, image, supermarket,unit } = product;
  const dispatch = useDispatch()

    const navigate = useNavigate();
    const click = () => {
      getnuevoDetail(laQuePaso,dispatch)
      navigate(`/products/id/${product.id}`);
    };
    var laQuePaso = {name,brand}

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
