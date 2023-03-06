import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCategoryParams,rsetFilters } from "../../redux/apiPetitions";
import '../filtro/filtro.css'
import swal from "sweetalert";

const Filtro = () => {

    const state = useSelector((state) => state.bolsillo);
    const allCategories = [...new Set(state.productsBackup.map(a => a.category))]
    const todasMarcas = state.productsBackup.map(a => a.brand)//con repetidos
    const dispatch = useDispatch();
    const duplicatesArray = [];
    const seenElements = {};
    const valor = "ASC"
    const stateSupermarket= useSelector((state)=> state.bolsillo.brand)
    console.log(stateSupermarket);
    const stateCategory= useSelector((state)=> state.bolsillo.category)
    console.log(stateCategory);
    todasMarcas.forEach(element => {
        if (seenElements[element]) {
            duplicatesArray.push(element);
        } else {
            seenElements[element] = true;
        }
    });
    const sinNorepetidos = [...new Set(duplicatesArray)];

    async function handleFilterCategory(e) {
        getCategoryParams(dispatch, e,stateSupermarket, valor)
        
    }

    async function handleFilterBrand(e) {
        getCategoryParams(dispatch, stateCategory,e,valor)
        .then((res) => {
            
          })
          .catch((err) => swal("Error! :(", 'vuelve a verificar los datos', "error"));
    }

    async function handleFilterReset() {
        dispatch(rsetFilters(dispatch));
    }



    return (<>

        <div className='filtaa-container'>

            <div className='filt-tipo'>
            <h3 name="borrar-filtros" onClick={e => handleFilterReset()} id="borrar-filtros" >Borrar filtros</h3>
                <h3 name="filtPorTipo" id="filtPorTipo">Categoria</h3>
                <label onClick={e => handleFilterReset()} value='All'>Todas</label>{
                    allCategories.map(categoria =>
                        <label onClick={e => handleFilterCategory(categoria)} value={categoria}>{categoria}</label>
                    )
                }
            </div>
            <br />
            <div className='filt-relleno'>
                <h3 name="filtPorRelleno" id="filtPorRelleno">Marca</h3>
                <label onClick={e => handleFilterReset()} value=''>Todas</label>
                {
                    sinNorepetidos.map(categoria =>
                        <label onClick={e => handleFilterBrand(categoria)} value={categoria}>{categoria}</label>
                    )
                }
            </div>


        </div>


    </>)
}

export default Filtro