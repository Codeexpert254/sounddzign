import React from "react";
import "./Footer.css";
import { facebook, twitter, instagram } from "../../assets";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer-container">
        <div className="images">
          <div className="logo">
            Sound<span className="red">Dzign</span>
          </div>
          <div className="socials">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
          </div>

          <div className="copyright">
            This website is designed by GTCoding Ⓒ 2022
          </div>
        </div>
        <div className="quick-links">
          <div className="name">Quick Links</div>
          <div className="link">Blog</div>
          <div className="link">Privacy Policy</div>
        </div>
        <div className="contact">
          <div className="name">Contact Us</div>
          <div className="link">contact@email.com</div>
          <div className="link">+1 999 9999 999</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
