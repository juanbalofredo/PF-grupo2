import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCategoryParams, getBrandParams } from "../../redux/apiPetitions";

const Filtro = () => {

    const state = useSelector((state) => state.bolsillo);
    const allCategories = ["Todas", ...new Set(state.products.map(a => a.category))]
    const todasMarcas = state.productsBackup.map(a => a.brand)//con repetidos
    const dispatch = useDispatch();
    const duplicatesArray = [];
    const seenElements = {};

    todasMarcas.forEach(element => {
        if (seenElements[element]) {
            duplicatesArray.push(element);
        } else {
            seenElements[element] = true;
        }
    });
    const sinNorepetidos = ["Todas", ...new Set(duplicatesArray)];

    async function handleFilterCategory(e) {
        getCategoryParams(dispatch, e);

    }

    async function handleFilterBrand(e) {
        dispatch(getBrandParams(dispatch, e));
    }

    return (<>

        <div className='filt-container'>

            <div className='filt-tipo'>
                <h3 name="filtPorTipo" id="filtPorTipo">Categoria</h3>{
                    allCategories.map(categoria =>
                        <label onClick={e => handleFilterCategory(categoria)} value={categoria}>{categoria}</label>
                    )
                }
            </div>
            <br />
            <div className='filt-relleno'>
                <h3 name="filtPorRelleno" id="filtPorRelleno">Marca</h3>
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