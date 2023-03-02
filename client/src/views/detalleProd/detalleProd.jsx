import "./detalleProd.css"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCarts, getProductId } from "../../Redux/actions";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import accounting from 'accounting-js';
import NavBar from "../NavBar/NavBar"


const DetalleProd =()=>{

    const dispatch = useDispatch();
    const { id } = useParams();
    const product = useSelector((state) => state.detail);

    useEffect(() => {
        // dispatch(getComments(product.id))
        dispatch(getProductId(id));
      }, [dispatch, id]);

}

export default DetalleProd