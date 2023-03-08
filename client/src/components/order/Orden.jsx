import React from "react"
import "./Orden.css"
import { useDispatch, useSelector } from "react-redux";
import { getCategoryParams } from "../../redux/apiPetitions/productsPetitions";
import { changeOrderH } from '../../redux/slice/globalSlice'
import SearchBar from "../Navbar/SearchBar";



const Orden = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.bolsilloFeliz);
  const stateCategory = useSelector((state) => state.bolsilloFeliz.category)
  const stateSupermarket = useSelector((state) => state.bolsilloFeliz.brand)
  let orden = 'ASC';


  async function changeOrder(e) {
    orden = e.target.value;
    getCategoryParams(dispatch, stateCategory, stateSupermarket, e.target.value)
  }

  return (<>
    <div className="orden-tecto-1"><h2>Elija su producto para comparar</h2>
      <h3>{state.category === "all" ? "Todos los productos" : state.category}</h3>

    </div>
    <div className='orde-pag'>
      <label value="" >Ordenar Por</label>
      <select onChange={changeOrder} name="ordenPrecio" id="ordenPrecio" key={stateCategory}>
        <option value="ASC">A-Z</option>
        <option value="DESC">Z-A</option>
      </select>
      <SearchBar estado={orden} />
    </div>


  </>)
}

export default Orden