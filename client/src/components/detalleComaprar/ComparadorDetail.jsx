import React from "react"
import './ComparadorDetail.css'

const ComparadorDetail = (props) => {



    return (
        <><div className="detail-compara-cont" key={props.key} id={props.key}>{
               props.supermarket === "disco" ?
             <img className="logo-detail-s" src={"https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676677/z6w6n2scxq7pp4tqjvpm.png"} alt="" />
             :props.supermarket === "dia" ?
             <img  className="logo-detail-s" src={"https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676677/ovuozay6oxqpnmqek4u0.png"} alt="" />
             :props.supermarket === "jumbo" ?
             <img className="logo-detail-s"  src={"https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676678/gy5hpxliqxoknxbkytg2.png"} alt="" />
             :props.supermarket === "vea" ?
             <img  className="logo-detail-s" src={"https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676678/elsssfc03lvqxk6a3p4i.png"} alt="" />
             :props.supermarket === "carrefour" ?
             <img className="logo-detail-s"  src={"https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676677/g8iupzjk1qrtkvr2lefo.png"} alt="" />
             :props.supermarket === "walmart" ?
             <img  className="logo-detail-s" src={"https://res.cloudinary.com/dzuasgy3l/image/upload/v1677805204/m5xpm7k7ovcmplzkwakl.webp"} alt="" />
             :props.supermarket === "vital" ?
             <img  className="logo-detail-s" src={"https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676678/urcpur3gnbkjftcz1meh.png"} alt="" />
             :props.supermarket === "coto" ?
             <img className="logo-detail-s"  src={"https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676677/xin8w1koh0ck5vu1vrem.png"} alt="" /> :null
        }
        <div className="detail-precio-s">
            <h3 className="super-det-pre">${props.precio}</h3>
            </div>
        </div>
        </>)
}

export default ComparadorDetail