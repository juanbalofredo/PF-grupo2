import React from "react"
import "./Orden.css"
import { useDispatch, useSelector } from "react-redux";
import { getCategoryParams } from "../../redux/apiPetitions";

const Orden = () => {
  const dispatch = useDispatch();
  const stateCategory = useSelector((state) => state.bolsillo.category)
  const stateSupermarket= useSelector((state)=> state.bolsillo.brand)


  async function handleSort(e) {
  getCategoryParams(dispatch, stateCategory, stateSupermarket,e.target.value);   
}
console.log(stateSupermarket)
    return(<>
    <div className='orde-pag'>
      <label value="" >Ordenar Por</label>
      <select onClick={handleSort} name="ordenPrecio" id="ordenPrecio" key={stateCategory}>
        <option value="ASC">A-Z</option>
        <option value="DESC">Z-A</option>
      </select>
    </div> 
    
    </>)
}

export default Orden