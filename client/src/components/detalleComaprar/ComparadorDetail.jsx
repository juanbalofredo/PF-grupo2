import React from "react"
import './ComparadorDetail.css'

const ComparadorDetail = (props) => {

    return (
        <><div className="detail-compara-cont" key={props.key} id={props.key}>
            <h2 className="super-det-c">{props.supermarket}</h2>
            <img className="detail-compa-img" src={props.img} alt="" />
            <div>
                <h3 className="super-det-pre">${props.precio}</h3>
            </div>
        </div>
        </>)
}

export default ComparadorDetail