import "./home.css";
import NavBar from "../../components/Navbar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import Footer from "../footer/Footer";
import { useEffect } from "react";
import { getProductos } from "../../redux/apiPetitions/productsPetitions";
import { sigPage, antPage, resPage } from "../../redux/slice/globalSlice";
import Filtro from "../../components/filtro/Filtro";
import Orden from "../../components/order/Orden";

const Home = () => {
  const state = useSelector((state) => state.bolsilloFeliz);
  const page = state.page;
  const myProduct = state.productsBackup;
  const startIndex = page === 1 ? 0 : page * 10 - 10;
  const endIndex = page === 1 ? 10 : startIndex + 10;
  const aver = myProduct.slice(startIndex, endIndex);
  const dispatch = useDispatch();

  let didInit = false;
  useEffect(() => {
    if (!didInit) {
      didInit = true;
      getProductos(dispatch);
    }
  }, [dispatch]);


  return (
    <>
      <NavBar />

      <div className="img-home-cart">
        <img
          className="img-home-cart-2"
          src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1678233839/o0tk3bkxi7fj97h3rrx3.png"
          alt=""
        />
      </div>
      <Orden />
      <div className="Home-container">
        <Filtro />
        <div className="paginated-fasle">
            <div className="pg-but-cont">
          {page === 1 ? (
            <button className="but-pag-a" disabled>Anterior</button>
          ) : (
            <button className="but-pag-a" onClick={(e) => dispatch(antPage())}>Anterior</button>
          )}
          {   
          page === Math.ceil(myProduct.length / 10) ? 
          <button className="but-pag-s" disabled>Siguiente</button>:
            <button className="but-pag-s" onClick={(e) => dispatch(sigPage())}>Siguiente</button>
          }</div>
          <div className="Home-container-products">
            {aver.map((p) => (
              <Card key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
// {state.pokemonFilter?.slice((page -1) * perPage, (page -1) * perPage + perPage).map((p)=>(
//     <Card key={p.name} pokemon={p} />
//     ))}

export default Home;
