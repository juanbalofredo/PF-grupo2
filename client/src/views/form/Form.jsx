import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { postProduct } from "../../redux/apiPetitions/productsPetitions";
import "./form.css";
import axios from "axios";
import Navbar from "../../components/Navbar/NavBar";
import Footer from "../footer/Footer";

const Form = () => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.bolsilloPersist.user);

  var uploadedImage = "";
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  }

  const uploadImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "proyectof");
    axios
      .post("https://api.cloudinary.com/v1_1/dzuasgy3l/image/upload", formData)
      .then((response) => {
        uploadedImage = response.data.secure_url;
        setInput({
          ...input,
          image: uploadedImage,
        });
      });
  };

  const [input, setInput] = useState({
    name: "",
    image: "",
    price: "",
    market: "",
    stock: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (
      input.name.length >= 1 &&
      input.price >= 1 &&
      input.price <= 1000000  
    ) {
      dispatch(postProduct(input));
      alert("Producto agregado exitosamente");

      setInput({
        name: "",
        price: "",
        image: "",
      });
    } else {
      alert("Complete correctamente el formulario antes de enviarlo");
    }
  }

  return (
    <div>
      <div><Navbar/></div>
      <div>
        <Link to="/home">
          <button>Return to home</button>
        </Link>
      </div>

      <div className="contGral">
        <div className="">
          <div className="contTitle">
            <div className="title">Añade tu producto</div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form">
              <div className="izq">
                <div>
                  <div>Nombre:</div>
                  <input
                    type="text"
                    value={input.name}
                    name="name"
                    onChange={handleChange}
                    placeholder="Nombre"
                    className="inputs"
                  />
                </div>

                <div>
                  <div>Precio:</div>
                  <input
                    type="number"
                    value={input.price}
                    name="price"
                    onChange={handleChange}
                    placeholder="Precio"
                    className="inputs"
                  />
                  {(input.price > 100000 || input.price < 1) && (
                    <div className="error">
                      El precio no puede ser mayor a un millon o menor a 1
                    </div>
                  )}
                </div>

                <div>
                  <div>Stock:</div>
                  <input
                    type="text"
                    value={input.stock}
                    name="stock"
                    onChange={handleChange}
                    placeholder="stock"
                    className="inputs"
                  />
                </div>

                <label htmlFor="img">
                  Selecciona una imagen de tu producto:
                </label>
                <div className="reg-image">
                  {input.image.length < 3 ? (
                    <img
                      src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677853169/hhxaujrmszfjbzul3zvr.png"
                      alt="logo"
                    />
                  ) : (
                    <img src={input.image} alt="logo" />
                  )}
                </div>

                  <input
                    type="file"
                    name="image"
                    value={uploadedImage}
                    onChange={uploadImage}
                  />
                {/* <div>
                  <img src={input.image} alt="" width={"100px"} />
                  Preview
                </div> */}
                <button id="bt" className="button" onClick={handleSubmit}>
                  Añadir
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div><Footer/></div>
    </div>
  );
};

export default Form;
