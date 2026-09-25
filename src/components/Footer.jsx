import { Link } from "react-router-dom";
import { LogoMark } from "./Logo";
import Leaf from "./Leaf";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Leaf className="footer-leaf" />
      <div className="container footer-grid">
        <div className="footer-about">
          <div className="brand brand-light">
            <LogoMark size={36} />
            <span className="brand-text">
              <span className="brand-name">PRUDENCE</span>
              <span className="brand-sub">SERVICES</span>
            </span>
          </div>
          <p>Practical solutions for modern businesses. Strategy, Systems, Growth.</p>
        </div>

        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
        </ul>
        <ul className="footer-links">
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/#why">Why Us</Link></li>
          <li><Link to="/#contact">Contact</Link></li>
        </ul>


      </div>

      <div className="container footer-bottom">
        <p>&copy; {year} Prudence Services. All rights reserved.</p>
        
      </div>
    </footer>
  );
}
