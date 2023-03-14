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

<<<<<<< HEAD
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
=======
  let didInit = false;
  useEffect(() => {
    if (!didInit) {
      didInit = true;
      getProductos(dispatch);
>>>>>>> 62ae056a73ab1bbe62c4487c4e02b1fecf1bd045
    }
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <div className="img-home-cart">
        <div className="slider-home"></div>
      </div>
      <div className="container-de-cintainer">
        <Filtro />
        <div className="Home-container">
          <Orden />
          <div className="paginated-fasle">
            <div className="Home-container-products">
              {aver.map((p) => (
                <Card key={p.id} product={p} />
              ))}
            </div>
<<<<<<< HEAD
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

=======
          </div>{" "}
          <div className="pag-but-que">
            {page === 1 ? (
              <button className="but-pag-a" disabled>
                Anterior
              </button>
            ) : (
              <button
                className="but-pag-a"
                onClick={(e) => dispatch(antPage())}
              >
                Anterior
              </button>
            )}
            {page === Math.ceil(myProduct.length / 10) ? (
              <button className="but-pag-s" disabled>
                Siguiente
              </button>
            ) : (
              <button
                className="but-pag-s"
                onClick={(e) => dispatch(sigPage())}
              >
                Siguiente
              </button>
            )}
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
>>>>>>> 62ae056a73ab1bbe62c4487c4e02b1fecf1bd045

export default Home;
