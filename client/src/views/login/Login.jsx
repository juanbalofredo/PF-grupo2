import "./login.css"
import "./register.css"
import { useState } from "react"
import { useEffect } from "react"
import NavBar from '../../components/assets/NavBar'
import axios from 'axios'
import { crearUser } from "../../redux/apiPetitions"


const Login = () => {


    const [input, setInput] = useState({
        name: '',
        avatar: '',
        last_name: '',
        email: '',
        password: '',
    })


    const [error, setError] = useState({
        name: '',
        avatar: '',
        last_name: '',
        email: '',
        password: '',
    })

    function handleChange(e) {
        const { name, value } = e.target;
        switch (name) {
            case 'name': {
                setError({
                    ...error,
                    name: value.length < 3 ? 'El nombre es demasiado corto' : ''
                })
                break;
            }

            case 'last_name': {
                setError({
                    ...error,
                    last_name: value.length < 1 ? 'Apellido no puede estar vacio' : ''
                })
                break;
            }

            case 'email': {
                setError({
                    ...error,
                    email: value.length < 1 ? 'email no puede esatr vacio' : ''
                })
                break;
            }

            case 'password': {
                setError({
                    ...error,
                    password: value < 1 ? 'password no puede esatr vacia' : ''
                })
                break;
            }
            default: {
                break;
            }
        }

        setInput({
            ...input,
            [name]: value
        })

    }

    function validarForm() {
        let valid = true;


        if (input.name.length <= 2) valid = false

        if (input.last_name.length <= 2) valid = false

        if (input.email.length <= 2) valid = false

        if (input.password.length <= 2) valid = false

        return valid;
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if (validarForm()) {
            try {

                    crearUser(input)
                    setInput({
                        name: '',
                        avatar: '',
                        last_name: '',
                        email: '',
                        password: '',
                    })
                    console.log(input)
                 
                    alert("Usuario creado");
                }
            catch (error) {
                alert("ERROR: reintenta más tarde! (" + error + ")");
            }
        } else {
            alert("ERROR: Faltan completar algunos campos");
        }
    }

    useEffect(() => {
        document.title = "Registrarse";
    }, [])






    return(
<div className="reg-todo">
        <NavBar />
        <div className="register-container">

            <div className="register-logo">
                <img src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677677451/dfmbqz6lottpgltuy6ye.webp" alt="logo" />
            </div>
            <div className="register-form">
                <form onSubmit={handleSubmit}>
                    <h1>Iniciar sesion</h1>
                    <div className="register-text">
                        <div onClick={uploadImage}>Subir imagen</div>
                        <div className="register-correo"><input name="email" type="email" value={input.email} onChange={handleChange} placeholder="bautgod@gmail.com" /></div>
                        <div className="rgister-contra"><input name="password" type='password' value={input.password} onChange={handleChange} placeholder="Contraseña" /></div>
                        <button type="submit">Iniciar sesion</button>
                    </div>
                    <div className="reg-google-fac">
                        <button className="register-google">Iniciar con Google</button>
                        <button className="register-facebook">Iniciar con Facebook</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Login