import "../../styles/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_content">
        <div className="footer_section about">
          <h3>Ab<span>o</span>ut <span>JS</span>Mas<span>te</span>r</h3>
          <p>
            JSMaster is dedicated to helping you become a JavaScri<span>pt ex</span>pert. 
            Our courses cover everything from beginner fundamentals to advanced topics.
          </p>
        </div>
        <div className="footer_section links">
          <h3>Qui<span>ck Li</span>nks</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer_section social">
          <h3>Fol<span>low U</span>s</h3>
          <div className="social_icons">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p>&copy; 2024 JSMaster. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
