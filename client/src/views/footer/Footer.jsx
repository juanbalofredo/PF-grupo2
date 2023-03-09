import React from "react";
import "./footer.css";
import fb from "../../assets/facebook.svg"
import twitter from "../../assets/twitter.svg"
import linkedin from "../../assets/linkedin.svg"
import instagram from "../../assets/instagram.svg"
import { useSelector } from "react-redux";



export const Footer = () => {

  const state = useSelector((state) => state.bolsilloPersist);
  const logeado = state.user; 

  return (
    <div className="footer">
      <div className="sb__footersection__padding">
        <div className="sb__footer-links"></div>
        <div className="sb__footer-links-div">
          <a href="/about">
            <p>About</p>
          </a>
          <a href="/contact">
            <p>Contact</p>
          </a>
        </div>
        <div className="sb__footer-Links_div">
            <div className="socialmedia">
                <p><img src={fb} alt="" /></p>
                <p><img src={twitter} alt="" /></p>
                <p><img src={linkedin} alt="" /></p>
                <p><img src={instagram} alt="" /></p>
            </div>
        </div>
      </div>{  logeado ?
      <div className="footer-tenes-c">
        <h4>Tenes un supermercado y queres agregar tus productos a la pagina?</h4> 
          <a href=
           {`https://wa.me/541132695097?text=Hola quiero ser mercader en tu pagina de Bolsillo Feliz, email${state.email}`} 
                  target="_blank" rel="noreferrer"> <p>Hace click aca</p></a>
      </div>:null}

      <div className="sb__footer-below">
        <div className="sb__footer-copyright">
            <p>
                @{new Date().getFullYear()} CodeInn. All right reserved
            </p>
        </div>
        <div className="sb__footer-below-links">
            <a href="/terms"><div><p>terms & conditions</p></div></a>
            <a href="/privacy"><div><p>Privacy</p></div></a>
            <a href="/security"><div><p>Security</p></div></a>
            <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
        </div>
      </div>

    </div>
  );
};

export default Footer
