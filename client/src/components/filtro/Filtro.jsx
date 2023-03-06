import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCategoryParams, rsetFilters } from "../../redux/apiPetitions";
import "../filtro/filtro.css";

const Filtro = () => {
  const state = useSelector((state) => state.bolsillo);
  const allCategories = [
    ...new Set(state.productsBackup.map((a) => a.category)),
  ].sort();
  const todasMarcas = state.productsBackup.map((a) => a.brand); //con repetidos
  const dispatch = useDispatch();
  const duplicatesArray = [];
  const seenElements = {};
  const valor = "ASC";
  const stateSupermarket = useSelector((state) => state.bolsillo.brand);
  const stateCategory = useSelector((state) => state.bolsillo.category);
  todasMarcas.forEach((element) => {
    if (seenElements[element]) {
      duplicatesArray.push(element);
    } else {
      seenElements[element] = true;
    }
  });
  const sinNorepetidos = [...new Set(duplicatesArray)].sort();

  async function handleFilterCategory(e) {
    getCategoryParams(dispatch, e, stateSupermarket, valor);
  }

  async function handleFilterBrand(e) {
    getCategoryParams(dispatch, stateCategory, e, valor);
  }

  async function handleFilterReset() {
    dispatch(rsetFilters(dispatch));
  }

  return (
    <>
      <div className="filtaa-container">
        <div className="filt-tipo">
          <h3
            name="borrar-filtros"
            onClick={(e) => handleFilterReset()}
            id="borrar-filtros"
          >
            Borrar filtros
          </h3>
          <h3 name="filtPorTipo" id="filtPorTipo">
            Categoria
          </h3>
          <label
            onClick={(e) => handleFilterReset()}
            value="All"
            key={todasMarcas}
          >
            Todas
          </label>
          {allCategories.map((categoria, index) => (
            <div key={index}>
              <label
                onClick={(e) => handleFilterCategory(categoria)}
                value={categoria}
              >
                {categoria}
              </label>
            </div>
          ))}
        </div>
        <br />
        <div className="filt-relleno">
          <h3 name="filtPorRelleno" id="filtPorRelleno">
            Marca
          </h3>
          <label onClick={(e) => handleFilterReset()} value="">
            Todas
          </label>
          {sinNorepetidos.map((categoria, index) => (
            <div key={index}>
              <label
                onClick={(e) => handleFilterBrand(categoria)}
                value={categoria}
              >
                {categoria}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filtro;
