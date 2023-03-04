import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const Filtro = () => {

    const state = useSelector((state) => state.bolsillo);

    const allCategories = ["Todas",...new Set(state.products.map(a => a.category))]
    const allBrands = ["Todas",...new Set(state.products.map(a => a.brand))]//sin repetidos
    const todasMarcas = state.products.map(a => a.brand)//con repetidos

    const dispatch = useDispatch();

    let duplicados = [];
 
    const duplicatesArray = [];
const seenElements = {};

todasMarcas.forEach(element => {
  if (seenElements[element]) {
    duplicatesArray.push(element);
  } else {
    seenElements[element] = true;
  }
});


const sinNorepetidos = ["Todas",...new Set(duplicatesArray)];

 return(<>
    
    <div className='filt-container'>

      <div className='filt-tipo'>
        <h3 name="filtPorTipo" id="filtPorTipo">Categoria</h3>{
            allCategories.map(categoria =>
                <label value={categoria}>{categoria}</label>
                )
        }
      </div>
      <br />
      <div className='filt-relleno'>
        <h3 name="filtPorRelleno" id="filtPorRelleno">Marca</h3>
        {
            allBrands.map(categoria =>
                <label value={categoria}>{categoria}</label>
                )
        }
      </div>


    </div>
    
    
    </>)}

    export default Filtro