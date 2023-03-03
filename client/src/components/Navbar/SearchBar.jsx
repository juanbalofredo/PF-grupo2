import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameQuery } from "../../redux/apiPetitions";
import "./navBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [model, setModel] = useState("");

  const handleInputModel = (e) => {
    e.preventDefault();
    setModel(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    getNameQuery(dispatch,model);
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
  