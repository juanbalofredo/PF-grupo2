import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getNameQuery } from "../../redux/apiPetitions/productsPetitions";
import "./navBar.css";

export default function SearchBar(props) {
  const dispatch = useDispatch();
  const [model, setModel] = useState("");
  const navigate = useNavigate();

  const handleInputModel = (e) => {
    e.preventDefault();
    setModel(e.target.value);
  };

   function handleSubmit(e) {
    e.preventDefault();
    if (window.location.href !== 'http://localhost:3000/home') {
      (getNameQuery(dispatch,model)).then(navigate("/home")).then(()=> getNameQuery(dispatch,model))
  }     
    getNameQuery(dispatch,model,props.estado);
   
}
  return (
    <>
      <div className="searchbar-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="busca">
            <input
              className="form-control "
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => handleInputModel(e)}
            />
            <div type="submit">
              <i className="" id="formbusca"></i>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
  