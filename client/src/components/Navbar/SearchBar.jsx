import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameQuery } from "../../redux/apiPetitions";
import "./navBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [input, SetInput] = useState(null);

  const handleSubmit = (e) => {
    dispatch(getNameQuery(input));
    }
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      console.log(input)
    console.log(name);
    console.log(value);
    SetInput(value);
  };
  return (
    <>
      <div className="c">
        <form className="form" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            id="name"
            name="text"
            className="input"
            onChange={handleChange}
            placeholder="Search product"
          />
        </form>
      </div>
    </>
  );
};
  