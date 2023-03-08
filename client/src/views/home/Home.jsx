import './home.css'
import NavBar from '../../components/Navbar/NavBar'
import { useDispatch, useSelector } from "react-redux";
import Card from '../../components/Card/Card';
import Footer from "../footer/Footer";
import { useEffect } from 'react';
import { numberPage } from '../../redux/apiPetitions';
import Filtro from '../../components/filtro/Filtro';
import Orden from '../../components/order/Orden';

const Home = () => {
    const state = useSelector((state) => state.bolsilloFeliz);
    const dispatch = useDispatch();
    let didInit = false;
    useEffect(() => {
        if (!didInit) {
            didInit = true;
            numberPage(0,dispatch)

        }
    }, [dispatch]);
    const myProduct = state.productsBackup
    console.log(myProduct)
    console.log(state)
    const pagina = state.page
    let paso = 0;

    function handleSigPage () {
        paso = pagina + 1
        numberPage(paso,dispatch)
    }
    function handleAntPage () {
        paso = pagina - 1
        numberPage(paso,dispatch)
    }

    return (
        <>
            <div className="Navbar-Home">
                <NavBar />
            </div>
            <div className='img-home-cart'><img className='img-home-cart-2' src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1678233839/o0tk3bkxi7fj97h3rrx3.png" alt="" /></div>
            <Orden />
            <div className='Home-container'>
                <Filtro />
                <div className='botones-home'>
                    <button onClick={handleAntPage}>pag anterior</button><button onClick={handleSigPage}>pag siguiente</button>
                    <div className="Home-container-products">

                        {myProduct?.map((p) => (
                            <Card key={p.id} product={p} />
                        ))}

                    </div> 
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Home