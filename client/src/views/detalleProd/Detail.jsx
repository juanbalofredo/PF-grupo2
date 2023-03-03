import "./detalleProd.css"
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "../../components/assets/NavBar"
import axios from "axios";
import Footer from "../footer/Footer";


const DetalleProd = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/products/id/${id}`)
      .then((e) => setProduct(e.data))
      .catch((err) => {
        return err;
      });
  }, [id, navigate, product]);

  const myProduct = product

  if (!product) {
    return <div>"LOADING"</div>;
  } else {
    return (
      <>
        <NavBar />
        <div className="Detail-container">
          <Link to="/home">
            <button className="">Volver</button>
          </Link>
          <div className="det-prod">
          <div className="imageContainer">
            <img src={myProduct.image} alt="product" className="" />
          </div>
          <div className="textContainer">
            <h2 className="texts">{myProduct.name}</h2>
            <h3 className="texts">
              {" "}
              Marca: <br /> {myProduct.brand}
            </h3>
            <h3 className="texts">
              {" "}
              Price: <br /> {myProduct.price}
            </h3>
            <h3 className="texts">
              {" "}
              Unity: <br /> {myProduct.unit}
            </h3>
            <h3 className="texts">
              Stock: <br /> {myProduct.stock}
            </h3>
            <h3 className="texts">
              Descripcion: <br /> {myProduct.description}
            </h3>
          </div></div>
        </div>
       <Footer/>
       </>
    );
  }

};



export default DetalleProd