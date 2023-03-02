import "./detalleProd.css"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCarts, getProductId } from "../../redux/apiPetitions";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "../../components/assets/NavBar"


const DetalleProd =()=>{

    const dispatch = useDispatch();
    const { id } = useParams();
    const product = useSelector((state) => state.detail);

    useEffect(() => {
        // dispatch(getComments(product.id))
        dispatch(getProductId(id));
      }, [dispatch, id]);

      const myProduct = product

      if (!product) {
        return <div>"LOADING"</div>;
      }else{
        return (
        <div key={myProduct.id} className="back">
          <NavBar/>
          <Link to="/home">
            <button className="">Back</button>
          </Link>
          <div className="Detail">
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
                Camera: <br /> {myProduct.unit}
              </h3>   
              <h3 className="texts">
                Stock: <br /> {myProduct.stock}
              </h3>
            </div>
          </div>
        </div>
      );
      }
      
    };



export default DetalleProd