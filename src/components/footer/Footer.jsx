import React from "react";
import "./Footer.css"


function Footer() {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src="./images/logo.png" alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Context</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src="./images/instagram.png" alt="" onClick={() => window.open("https://www.instagram.com/andynnn02/", "_blank")} />
                </div>
                <div className="footer-icons-container">
                    <img src="./images/facebook.png" alt="" onClick={() => window.open("https://www.facebook.com/anhduy21092002", "_blank")} />
                </div>
                <div className="footer-icons-container">
                    <img src="./images/github.png" alt="" onClick={() => window.open("https://github.com/AnhDuyN21", "_blank")} />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2025 - All Right Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;