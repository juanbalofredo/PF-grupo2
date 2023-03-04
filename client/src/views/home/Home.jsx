import './home.css'
import NavBar from '../../components/Navbar/NavBar'
import { useDispatch, useSelector } from "react-redux";
import Card from '../../components/Card/Card';
import Footer from "../footer/Footer";
import { useEffect } from 'react';
import { getAllProducts } from '../../redux/apiPetitions';
import Filtro from '../../components/filtro/Filtro';
import Orden from '../../components/order/Orden';

const Home = () => {
    const state = useSelector((state) => state.bolsillo);
    const dispatch = useDispatch();
    let didInit = false;
    useEffect(() => {
        if (!didInit) {
            didInit = true;
            getAllProducts(dispatch);

        }
    }, [dispatch]);
    const myProduct = state.productsBackup

    return (
        <>
            <div className="Navbar-Home">
                <NavBar />
            </div>
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