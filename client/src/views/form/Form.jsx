import React from "react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { allProducts, addProduct } from "../../redux/slice/globalSlice";
import "./form.css";
import axios from "axios";

const Form = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.bolsilloPersist.user);

  var uploadedImage = "";

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  const uploadImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "proyectof");
    axios
      .post("https://api.cloudinary.com/v1_1/dzuasgy3l/image/upload", formData)
      .then((response) => {
        uploadedImage = response.data.secure_url;
        setInput({
          ...input,
          avatar: uploadedImage,
        })
      });
  };

  const [input, setInput] = useState({
    name: "",
    image: "",
    brand: "",
    price: ""
  });

  const [input2, setInput2] = useState({
    name: "",
    image: "",
    brand: "",
    price: "",
    supermarket: ""
  });

};

export default Form;
