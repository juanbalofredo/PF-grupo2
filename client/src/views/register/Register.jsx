import "./register.css"
import { useState } from "react"
import { useEffect } from "react"
import NavBar from '../../components/assets/NavBar'
import axios from 'axios'
import { useDispatch } from "react-redux"
import { crearUser } from "../../redux/apiPetitions"

const Register = () => {

    const dispatch = useDispatch();

    const [imageSelected, setImageSelected] = useState('');
    const uploadImage = () => {
        const formData = new FormData();
        formData.append('file', imageSelected)
        formData.append('upload_preset', 'proyectof')

        axios.post("https://api.cloudinary.com/v1_1/dzuasgy3l/image/upload", formData)
            .then((response) => {
                const url = response.data.secure_url;
                setInput({
                    ...input,
                    avatar: url,
                })
            })
            
    }

    const [input, setInput] = useState({
        name: '',
        avatar: '',
        apellido: '',
        mail: '',
        password: '',
    })


    const [error, setError] = useState({
        name: '',
        avatar: '',
        apellido: '',
        mail: '',
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

            case 'apellido': {
                setError({
                    ...error,
                    apellido: value.length < 1 ? 'Apellido no puede estar vacio' : ''
                })
                break;
            }

            case 'mail': {
                setError({
                    ...error,
                    mail: value.length < 1 ? 'mail no puede esatr vacio' : ''
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

        if (input.apellido.length <= 2) valid = false

        if (input.mail.length <= 2) valid = false

        if (input.password.length <= 2) valid = false

        return valid;
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if (validarForm()) {
            try {
                    console.log(input)
                    dispatch(crearUser(input))
                    setInput({
                        name: '',
                        avatar: '',
                        apellido: '',
                        mail: '',
                        password: '',
                    })
                 
                    alert("ERROR: El usuario con ese nombre ya existe");
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





    return (<div className="reg-todo">
        <NavBar />
        <div className="register-container">

            <div className="register-logo">
                <img src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677677451/dfmbqz6lottpgltuy6ye.webp" alt="logo" />
            </div>
            <div className="register-form">
                <form onSubmit={handleSubmit}>
                    <h1>Registrarse</h1>
                    <div className="register-text">
                        <label htmlFor='img'>Imagen</label>
                        <div>
                            <input type="file" name="avatar" placeholder='Imagen' autoComplete='off' onChange={(e) => {
                                setImageSelected(e.target.files[0])
                            }}></input>
                        </div>
                        <div onClick={uploadImage}>Subir imagen</div>
                        <div className="register-name">
                            <div><input placeholder="Nombre" name="name" type="text" value={input.name}  onChange={handleChange} /></div>
                            <div><input placeholder="Apellido" name="apellido" type="text" value={input.apellido} onChange={handleChange} /></div>
                        </div>
                        <div className="register-correo"><input name="mail" type="email" value={input.mail} onChange={handleChange} placeholder="bautgod@gmail.com" /></div>
                        <div className="rgister-contra"><input name="password" type='password' value={input.password} onChange={handleChange} placeholder="Contraseña" /></div>
                        <div className="register-contra2"><input name="password" type='password' onChange={handleChange} placeholder="Repetir contraseña" /></div>
                        <button type="submit">Registrarse</button>
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

export default Register