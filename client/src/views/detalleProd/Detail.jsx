import "./detalleProd.css"
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar"
import axios from "axios";
import Footer from "../footer/Footer";
import DetailLoading from "../../components/loadings/DetailLoading";
import ComparadorDetail from "../../components/detalleComaprar/ComparadorDetail";
import { getProductos } from "../../redux/apiPetitions/productsPetitions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

//hola
const DetalleProd = () => {

  const state = useSelector((state) => state.bolsilloFeliz);
  console.log(state.products)
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  let didInit = false;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!didInit && product === null) {
      didInit = true;
      axios
        .get(`http://localhost:3001/products/id/${id}`)
        .then((e) => setProduct(e.data))
        .catch((err) => {

          return err;
        });
    }
  }, [id, navigate, product]);

  let quesi = false;
  useEffect(() => {
    if (!quesi) {
      quesi = true;
      getProductos(dispatch)
    }

  }, [dispatch])

  if (state.products.length > 4) {

    if (!product && state.products.length > 4) {
      return <DetailLoading />;

    } else {

      const comparadores = state.products.find(a => a.id == id).price
      console.log(comparadores)
      const emilia = comparadores.slice().sort((a, b) => a.price - b.price);
      return (
        <>
          <NavBar />
          <div className="Detail-container">
            <Link to="/home">
              <button className="detail-back">Volver</button>
            </Link>
            <div className="det-prod">
              <div className="imageContainer">
                <img src={product.image} alt="product" className="" />
              </div>
              <div className="textContainer">
                <h2 className="texts">{product.name}</h2>
                <div>
                  <h3 className="texts">
                    {" "}
                    Marca: <br /> {product.brand}
                  </h3>
                  <h3 className="texts">
                    {" "}
                    Cantidad: <br /> {product.unit}
                  </h3>
                </div>
                <h3 className="texts">
                  Descripcion: <br /> {product.description}
                </h3>
              </div></div>
            <div className="contenedor-detail">{
              emilia.map(a => <ComparadorDetail supermarket={a.name} precio={a.price} img={product.image} />)
            }</div>
          </div>
          <Footer />
        </>
      );
    }
  }

};



export default DetalleProd