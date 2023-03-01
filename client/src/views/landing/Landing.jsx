import './landing.css'
import { Link } from 'react-router-dom'

const Landing = () => {


    return (
        <div className='landing-container'>
             <div className='landing-fotos'>
                <img src="https://www.chandon.com.ar/wp-content/uploads/2017/06/marcas-horizontal.jpg" alt="" />
            </div>
            <div className='landing-principal'>
                <img src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677677451/dfmbqz6lottpgltuy6ye.webp" alt="foto" />
                <div>
                <Link to='/home'>
                    <button className='landing-boton'>Ir al inicio</button> </Link>
                </div>
            </div>
        </div>
    )


}

export default Landing