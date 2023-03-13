import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { allProducts } from "../../redux/slice/globalSlice";
import { postProduct } from "../../redux/apiPetitions/productsPetitions";
import "./form.css";
import axios from "axios";

const Form = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.bolsilloPersist.user);

  var uploadedImage = "";
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
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
          avatar: uploadedImage,
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
    if (input.name.length >= 1 && input.price >= 1 && input.price <= 1000000) {
      dispatch(postProduct(input));
      alert("Producto agregado exitosamente");

      setInput({
        name: "",
        price: "",
        image: "",
      });
    } else {
      alert("Complete the form correctly before sending it");
    }
  }

  return (
    <div>
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

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form">
              <div className="izq">
                <div>
                  <div>Nombre:</div>
                  <input
                    type="text"
                    value={input.name}
                    name="nombre"
                    onChange={(e) => handleChange(e)}
                    placeholder="Nombre"
                    className="inputs"
                  />
                </div>

                <div>
                  <div>Precio:</div>
                  <input
                    type="number"
                    value={input.price}
                    name="Precio"
                    onChange={(e) => handleChange(e)}
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
                    onChange={(e) => handleChange(e)}
                    placeholder="stock"
                    className="inputs"
                  />
                </div>
                <div>
                  <div>Image:</div>
                  <input
                    type="file"
                    name="image"
                    value={uploadedImage}
                    onChange={uploadImage}
                  />
                </div>
                <div>
                  <img src={input.image} alt="" width={"100px"} />
                  Preview
                </div>
                <button id="bt" className="button" onClick={handleSubmit}>
                  Añadir
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <form>
        <div></div>
      </form>
    </div>
  );
};

export default Form;
