import "./register.css";
import { useState } from "react";
import NavBar from "../Navbar/NavBar2";
import axios from "axios";
import { crearUser } from "../../redux/apiPetitions";
import Footer from "../../views/footer/Footer";
import GoogleSign from "../../views/Firebase/GoogleSign";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
const Register = () => {

  var uploadedImage = "";
  const navigate = useNavigate();

  const uploadImage = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "proyectof");

    axios
      .post("https://api.cloudinary.com/v1_1/dzuasgy3l/image/upload", formData)
      .then((response) => {
        console.log(response);
        uploadedImage = response.data.secure_url;
        console.log(uploadedImage)
        setInput({
          ...input,
          avatar: uploadedImage,
        })
      });
  };
  const [input, setInput] = useState({
    name: "",
    avatar: "",
    last_name: "",
    email: "",
    password: "",
    password2:""
  });

  const [error, setError] = useState({
    name: "",
    avatar: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case "name": {
        setError({
          ...error,
          name: value.length < 3 ? "El nombre es demasiado corto" : "",
        });
        break;
      }

      case "last_name": {
        setError({
          ...error,
          last_name: value.length < 1 ? "Apellido no puede estar vacio" : "",
        });
        break;
      }

      case "email": {
        setError({
          ...error,
          email: value.length < 1 ? "email no puede esatr vacio" : "",
        });
        break;
      }

      case "password": {
        setError({
          ...error,
          password: value < 1 ? "password no puede esatr vacia" : "",
        });
        break;
      }
      case "password2": {
        setError({
          ...error,
          password2: value < 1 ? "password no puede esatr vacia" : "",
        });
        break;
      }
      default: {
        break;
      }
    }

    setInput({
      ...input,
      [name]: value,
    });
  }

  function validarForm() {
    let valid = true;

    if (input.name.length <= 2) valid = false;

    if (input.last_name.length <= 2) valid = false;

    if (input.email.length <= 2) valid = false;

    if (input.password.length <= 2) valid = false;

    if (input.password !== input.password2) valid = false;

    return valid;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (validarForm()) {
      try {
        const azul =  await crearUser(input);
        if(azul === 'Request failed with status code 400'){
         return swal("Error!", 'ya existe un usuario con ese mail', "error") 
        }
        swal({
          title: "Usuario creado",
          text: "Usuario creado",
          icon: "success",
          button: "A comparar!",
        }).then((e)=>{
          console.log(input);
        })
        .then((e) => navigate("/home"))
  
      } catch (error) {
        alert("ERROR: " + error );
      }
    } else {
     swal("Error!", 'vuelve a verificar los datos', "error");
    }        
  }

  return (
    <>
      {" "}
      <div className="reg-todo">
        <NavBar />
        <div className="register-container">
          <div className="register-logo">
            <img
              src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677807225/de0ieqim2kymph6cldvl.webp"
              alt="logo"
            />
          </div>
          <div className="register-form">
            <form onSubmit={handleSubmit}
              autoComplete='off'>
              <h1>Registrarse</h1>
              <div className="register-text">
                <label htmlFor="img">Seleccionar Imagen</label>
                <div className="reg-avata">
                {
            input.avatar.length < 3 ?
            <img
              src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677853169/hhxaujrmszfjbzul3zvr.png"
              alt="logo"
            />:     <img
            src={input.avatar}
            alt="logo"
          /> }
                  <input
                    type="file"
                    name="avatar"
                    id="my_file"
                    placeholder="Imagen"
                    autoComplete='off'
                    value={uploadedImage}
                    onChange={e => uploadImage(e)}
                  />
                </div>
                <div className="register-name">
                  <div>
                    <input
                      autoComplete='off'
                      placeholder="Nombre"
                      name="name"
                      type="text"
                      value={input.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      autoComplete='off'
                      placeholder="Apellido"
                      name="last_name"
                      type="text"
                      value={input.last_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="register-correo">
                  <input
                    autoComplete='off'
                    name="email"
                    type="email"
                    value={input.email}
                    onChange={handleChange}
                    placeholder="emailexample@gmail.com"
                  />
                </div>
                <div className="rgister-contra">
                  <input
                    autoComplete='off'
                    name="password"
                    type="password"
                    value={input.password}
                    onChange={handleChange}
                    placeholder="Contraseña"
                  />
                </div>
                <div className="register-contra2">
                  <input
                    autoComplete='off'
                    name="password2"
                    type="password"
                    value={input.password2}
                    onChange={handleChange}
                    placeholder="Repetir contraseña"
                  />
                </div>
                <button type="submit">Registrarse</button>
              </div>
            </form>
              <div className="reg-google-fac">
              <GoogleSign/>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Register;
