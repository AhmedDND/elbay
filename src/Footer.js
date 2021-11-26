import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__row">
          <div className="footer__column">
            <h4>About Us</h4>
            <ul className="footer__list">
              <li>Story</li>
              <li>Clients</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Services</h4>
            <ul className="footer__list">
              <li>Marketing</li>
              <li>Consulting</li>
              <li>Development</li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Contact Us</h4>
            <ul className="footer__list">
              <li>Nefta</li>
              <li>Tozeur</li>
              <li>Tunis</li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Social</h4>
            <ul className="footer__list">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer__column">
        <p className="footer__copyright">
          &copy;{new Date().getFullYear()}-Present, Elbay Inc | All Rights
          Reserved | Terms Of Service | Privacy
        </p>
      </div>
    </div>
  );
}

export default Footer;
