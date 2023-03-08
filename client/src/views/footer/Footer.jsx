import React from "react";
import "./footer.css";
// import fb from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";

export const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div>
          <a href="/about">
            <h3>Social Media</h3>
          </a>
        </div>

        <div>
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
              <a href="https://www.linkedin.com/in/nicol%C3%A1s-piantini-4027b6194">Nicolás Piantini </a>
              <a href="https://www.linkedin.com/in/juan-lofredo-49946520b">Juan Lofredo</a>
              <a href="https://www.linkedin.com/in/bautista-godoy">Bautista Godoy</a>
              <a href="https://www.linkedin.com/in/nicolasgalarce"> Nicolás Galarce </a> 
              <a href="https://www.linkedin.com/in/daniel-martel-chavez-866481238/"> Daniel Martel </a>
              <a href=""> Alex Huaitiao </a>
              <a href=""> Francisco Di Nucci </a>
            </p>
          </div>

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
