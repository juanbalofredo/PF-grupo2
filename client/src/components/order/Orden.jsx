import React from "react"
import "./Orden.css"




const Orden = () => {


    return(<>
    
    <div className='orde-pag'>
      <label value="">Ordenar Por </label>
      <select name="ordenPrecio" id="ordenPrecio">
        <option value="asc">A-Z</option>
        <option value="desc">Z-a</option>
      </select>
    </div> 
    
    </>)
}

export default Orden