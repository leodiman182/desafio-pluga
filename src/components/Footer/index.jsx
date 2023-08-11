import React from "react";
import "./style.css";
import plugaLogo from "../../assets/round-icon.png";

const Footer = () => {
  const data = new Date();
  const year = data.getFullYear();

  return (
    <footer data-testid="footer" className="footer-bar">
      <div className="footer-bar-div">
        <img className="footer-logo" src={plugaLogo} alt="" />
        <div className="footer-box">
          <p>
            {year} | Desenvolvido por{" "}
            <a
              target="_blank"
              href="https://portfolio-leodiman.vercel.app/"
              rel="noopener noreferrer"
            >
              Leonardo Diman
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
