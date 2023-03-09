import './home.css'
import NavBar from '../../components/Navbar/NavBar'
import { useDispatch, useSelector } from "react-redux";
import Card from '../../components/Card/Card';
import Footer from "../footer/Footer";
import { useEffect } from 'react';
import { getProductos} from '../../redux/apiPetitions/productsPetitions';
import Filtro from '../../components/filtro/Filtro';
import Orden from '../../components/order/Orden';

const Home = () => {
    const state = useSelector((state) => state.bolsilloFeliz);
    const dispatch = useDispatch();
    let didInit = false;
    useEffect(() => {
        if (!didInit) {
            didInit = true;
            getProductos(dispatch)
        }
    }, [dispatch]);
    const myProduct = state.productsBackup

    return (
        <>
              <NavBar />
           
            <div  className='img-home-cart'><img  className='img-home-cart-2' src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1678233839/o0tk3bkxi7fj97h3rrx3.png" alt=""/></div>
            <Orden/>
            <div className='Home-container'>
                <Filtro />
                <div className="Home-container-products">
                    {myProduct.map((p) => (
                        <Card key={p.id} product={p} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}
// {state.pokemonFilter?.slice((page -1) * perPage, (page -1) * perPage + perPage).map((p)=>(
//     <Card key={p.name} pokemon={p} />
//     ))}    

export default Home