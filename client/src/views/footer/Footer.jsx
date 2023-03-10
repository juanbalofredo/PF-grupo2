import React from "react";
import "./footer.css";
// import fb from "../../assets/facebook.svg"
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
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
            {/* <a href=""></a><p><img src={fb} alt="" /></p> */}
            <a href="https://twitter.com/bolsillo_feliz">
              <p>
                <img src={twitter} alt="" />
              </p>
            </a>
            <a href="https://www.linkedin.com/in/bolsillo-feliz-10107b269/">
              <p>
                <img src={linkedin} alt="" />
              </p>
            </a>
            <a href="https://www.instagram.com/bolsillofeliz123/">
              <p>
                <img src={instagram} alt="" />
              </p>
            </a>
          </div>
        </div>

        <div>
          <p>bolsillofieliz123@gmail.com</p>
        </div>
      </div>

      <div>
        <h3>Contact</h3>
        <p className="team">
          <a href="https://www.linkedin.com/in/nicol%C3%A1s-piantini-4027b6194">
            Nicolás Piantini{" "}
          </a>
          <a href="https://www.linkedin.com/in/juan-lofredo-49946520b">
            Juan Lofredo
          </a>
          <a href="https://www.linkedin.com/in/bautista-godoy">
            Bautista Godoy
          </a>
          <a href="https://www.linkedin.com/in/nicolasgalarce">
            {" "}
            Nicolás Galarce{" "}
          </a>
          <a href="https://www.linkedin.com/in/daniel-martel-chavez-866481238/">
            {" "}
            Daniel Martel{" "}
          </a>
          <a href=""> Alex Huaitiao </a>
          <a href=""> Francisco Di Nucci </a>
        </p>
      </div>

      {logeado ? (
        <div className="footer-tenes-c">
          <h3>
          ¿ Te gustaria agregar los productos de tu comercio ?
          </h3>
          <a
            href={`https://wa.me/541132695097?text=Hola quiero ser mercader en tu pagina de Bolsillo Feliz, email: ${state.email}`}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <p>Hace click aca</p>
          </a>
        </div>
      ) : null}

      <div className="rightContainer">
        <div>
          <p>@{new Date().getFullYear()} CodeInn. All right reserved</p>
        </div>
        <div>
          <a href="/terms">
            <div>
              <p>terms & conditions</p>
            </div>
          </a>
          <a href="/privacy">
            <div>
              <p>Privacy</p>
            </div>
          </a>
          <a href="/security">
            <div>
              <p>Security</p>
            </div>
          </a>
          <a href="/cookie">
            <div>
              <p>Cookie Declaration</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
